import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { execSync } from "node:child_process";

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function argValue(name, fallback) {
  const i = process.argv.indexOf(name);
  return i === -1 ? fallback : (process.argv[i + 1] ?? fallback);
}

function hasFlag(name) {
  return process.argv.includes(name);
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJson(p, obj) {
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + "\n", "utf8");
}

function writeJsonAtomic(p, obj) {
  const tmp = p + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(obj, null, 2) + "\n", "utf8");
  fs.renameSync(tmp, p);
}


function ensureDir(absDir) {
  fs.mkdirSync(absDir, { recursive: true });
}

function exists(p) {
  try {
    fs.accessSync(p, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function isQuota429(err) {
  const msg = String(err?.message ?? err);
  return (
    msg.includes(" 429 ") ||
    msg.includes('"code":429') ||
    msg.includes("RESOURCE_EXHAUSTED") ||
    msg.toLowerCase().includes("quota exceeded") ||
    msg.toLowerCase().includes("rate limit")
  );
}

function aspectToPx(aspect) {
  switch (aspect) {
    case "1:1": return { w: 1024, h: 1024 };
    case "3:4": return { w: 896, h: 1280 };
    case "4:3": return { w: 1280, h: 960 };
    case "9:16": return { w: 900, h: 1600 };
    case "16:9": return { w: 1600, h: 900 };
    default: throw new Error(`Unsupported aspect: ${aspect}`);
  }
}

function validateJob(job) {
  const required = ["slug","pagePath","id","title","alt","aspect","prompt","outputDir","filename","publicPath","status"];
  for (const k of required) {
    if (job[k] === undefined || job[k] === null || job[k] === "") {
      throw new Error(`Job missing "${k}" (${job.slug}/${job.id})`);
    }
  }
  if (!job.filename.endsWith(".webp")) throw new Error(`filename must end in .webp (${job.slug}/${job.id})`);
  if (!job.publicPath.startsWith("/")) throw new Error(`publicPath must start with "/" (${job.slug}/${job.id})`);

  const p = job.prompt.toLowerCase();
  if (!p.includes("no text")) throw new Error(`Prompt must include "no text" (${job.slug}/${job.id})`);
  if (!p.includes("no logo")) throw new Error(`Prompt must include "no logos" (${job.slug}/${job.id})`);
}

function getAccessToken() {
  // Uses whatever gcloud auth you already have
  try {
    return execSync("gcloud auth print-access-token", { encoding: "utf8" }).trim();
  } catch (e) {
    throw new Error(
      `Failed to run "gcloud auth print-access-token". ` +
      `Make sure gcloud is on PATH and you're logged in (gcloud auth login).`
    );
  }
}

async function vertexImagenPredict({ project, location, modelId, prompt, aspectRatio, sampleCount, sampleImageSize }) {
  const token = getAccessToken();
  const url =
    `https://${location}-aiplatform.googleapis.com/v1/projects/${project}` +
    `/locations/${location}/publishers/google/models/${modelId}:predict`;

  const body = {
    instances: [{ prompt }],
    parameters: {
      aspectRatio,
      sampleCount,
      sampleImageSize,
      personGeneration: "allow_all",
      safetySettings: "block_few",
      addWatermark: false,
      language: "auto",
      outputOptions: {
        mimeType: "image/jpeg",
        compressionQuality: 95
      }
    }
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(body)
  });

  const text = await res.text();

  let json;
  try { json = JSON.parse(text); }
  catch {
    throw new Error(`Vertex returned non-JSON (HTTP ${res.status}): ${text.slice(0, 200)}`);
  }

  if (!res.ok) {
    const msg = JSON.stringify(json);
    const err = new Error(`Vertex error (HTTP ${res.status}): ${msg}`);
    err.status = res.status;
    err.payload = json;
    throw err;
  }

  return json;
}

function extractFirstImagenBytes(predResp) {
  // Typical shape: { predictions: [ { bytesBase64Encoded: "..." , mimeType: "image/jpeg" } ] }
  const pred = predResp?.predictions?.[0];
  if (!pred) return null;

  const b64 =
    pred.bytesBase64Encoded ||
    pred.bytes_base64_encoded ||
    pred.image?.bytesBase64Encoded ||
    pred.image?.bytes_base64_encoded;

  if (!b64) return null;

  const mime = pred.mimeType || pred.mime_type || pred.image?.mimeType || "image/jpeg";
  return { buf: Buffer.from(b64, "base64"), mime };
}

async function generateWithRetry({ project, location, modelId, prompt, aspectRatio, maxAttempts, sampleCount, sampleImageSize }) {
  let attempt = 0;
  let delayMs = 15_000;

  while (true) {
    try {
      return await vertexImagenPredict({
        project,
        location,
        modelId,
        prompt,
        aspectRatio,
        sampleCount,
        sampleImageSize
      });
    } catch (err) {
      attempt += 1;

      if (!isQuota429(err) || attempt >= maxAttempts) {
        throw err;
      }

      const wait = Math.min(delayMs, 120_000);
      console.log(`429/quota hit. Waiting ${Math.round(wait/1000)}s then retrying (${attempt}/${maxAttempts})...`);
      await sleep(wait);
      delayMs = delayMs * 2;
    }
  }
}

async function main() {
  const jsonPath = argValue("--json", "./image_gen.json");
  const dryRun = hasFlag("--dry-run");
  const maxImages = Number(argValue("--max-images", "9999"));
  const maxAttempts = Number(argValue("--max-attempts", "10"));

  // Rate limiting
  const rpm = Number(argValue("--rpm", process.env.IMAGE_RPM || "1"));
  const spacingMs = Math.ceil(60_000 / Math.max(1, rpm)) + 5_000;

  const data = readJson(jsonPath);
  const defaults = data.defaults ?? {};
  const basePublicDir = defaults.basePublicDir ?? "./public";
  const webpQuality = Number(defaults.webpQuality ?? 82);

  // IMPORTANT: use your *string* project id, not the numeric one
  const project = defaults.projectId || process.env.GOOGLE_CLOUD_PROJECT;
  const location = defaults.location || process.env.GOOGLE_CLOUD_LOCATION || "us-central1";

  // Vertex Imagen 4 model you proved works
  const modelId = defaults.modelId || "imagen-4.0-generate-001";

  // Imagen params
  const sampleCount = Number(defaults.sampleCount ?? 1);        // keep 1 for predictable output
  const sampleImageSize = String(defaults.sampleImageSize ?? "1k");

  if (!project) throw new Error("Missing defaults.projectId or GOOGLE_CLOUD_PROJECT");
  if (!location) throw new Error("Missing defaults.location or GOOGLE_CLOUD_LOCATION");

  const jobs = Array.isArray(data.jobs) ? data.jobs : [];
  jobs.forEach(validateJob);

  const queue = jobs
    .map((job) => {
      const outAbs = path.resolve(basePublicDir, job.outputDir, job.filename);
      const shouldGen = job.status === "pending" || !exists(outAbs);
      return { job, outAbs, shouldGen };
    })
    .filter((x) => x.shouldGen)
    .slice(0, maxImages);

  console.log(`Found ${queue.length} images to generate (max ${maxImages}). rpm=${rpm} spacing=${Math.round(spacingMs/1000)}s model=${modelId}`);

  if (queue.length === 0) return;

  if (dryRun) {
    queue.forEach(({ job, outAbs }) => console.log(`DRY: ${job.slug}/${job.id} -> ${outAbs}`));
    return;
  }

  if (process.env.CONFIRM !== "YES") {
    throw new Error(`Refusing to run without CONFIRM=YES`);
  }

  // token check early (so you fail fast)
  getAccessToken();

  for (let i = 0; i < queue.length; i++) {
    const { job, outAbs } = queue[i];
    ensureDir(path.dirname(outAbs));

    const { w, h } = aspectToPx(job.aspect);

    console.log(`\n[${i+1}/${queue.length}] Generating ${job.slug}/${job.id} using ${modelId}`);

    const predResp = await generateWithRetry({
      project,
      location,
      modelId,
      prompt: job.prompt,
      aspectRatio: job.aspect,
      maxAttempts,
      sampleCount,
      sampleImageSize
    });

    const image = extractFirstImagenBytes(predResp);
    if (!image) {
      throw new Error(`No image bytes returned for ${job.slug}/${job.id}. Response keys: ${Object.keys(predResp || {})}`);
    }

    const webpBuf = await sharp(image.buf, { failOn: "none" })
      .resize(w, h, { fit: "cover" })
      .webp({ quality: webpQuality })
      .toBuffer();

      fs.writeFileSync(outAbs, webpBuf);

      job.status = "done";
      job.generatedAt = new Date().toISOString();
      job.sourceMime = image.mime;
      job.sourceModel = modelId;

      // ✅ persist progress immediately
      writeJsonAtomic(jsonPath, data);


    console.log(`Saved: ${job.publicPath}`);

    if (i < queue.length - 1) {
      console.log(`Waiting ${Math.round(spacingMs/1000)}s to respect RPM...`);
      await sleep(spacingMs);
    }
  }

  writeJson(jsonPath, data);
  console.log(`\nUpdated: ${jsonPath}`);
}

main().catch((err) => {
  console.error(`ERROR: ${err.message}`);
  process.exit(1);
});
