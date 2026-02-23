import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Client } from 'pg';

export async function POST(request) {
  try {
    const formData = await request.formData();

    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const experience = formData.get('experience');
    const message = formData.get('message') || '';
    const resumeFile = formData.get('resume');

    if (!name || !phone || !email || !experience) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT == 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailHTML = `
      <h2>New Job Application - Careers Page</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Years of Experience:</strong> ${experience}</p>
      ${message ? `
      <p><strong>About the Applicant:</strong></p>
      <p>${message}</p>
      ` : ''}
      ${resumeFile ? '<p><strong>Resume:</strong> See attached PDF</p>' : ''}
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
    `;

    const textContent = `
New Job Application - Careers Page

Applicant Details:
Name: ${name}
Phone: ${phone}
Email: ${email}
Years of Experience: ${experience}

${message ? `About the Applicant:\n${message}` : ''}
${resumeFile ? 'Resume: See attached PDF' : ''}

Submitted: ${new Date().toLocaleString()}
---
M. Meyers Plumbing
    `.trim();

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: [process.env.CONTACT_EMAIL, 'gmurin@gmail.com'].filter(Boolean).join(','),
      subject: `New Job Application from ${name} - meyersplumbing.net`,
      text: textContent,
      html: emailHTML,
      attachments: [],
    };

    if (resumeFile && resumeFile.size > 0) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      mailOptions.attachments.push({
        filename: resumeFile.name || 'resume.pdf',
        content: buffer,
        contentType: 'application/pdf',
      });
    }

    const info = await transporter.sendMail(mailOptions);
    console.log('Careers form email sent:', info.messageId);

    const client = new Client({
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      port: 5432,
      ssl: { rejectUnauthorized: false }
    });

    try {
      await client.connect();

      const dbData = {
        type: 'career_application',
        name,
        phone,
        email,
        experience,
        message: message || null,
        hasResume: !!(resumeFile && resumeFile.size > 0),
        submittedAt: new Date().toISOString()
      };

      await client.query(
        'INSERT INTO form_submissions (client_id, data) VALUES ($1, $2)',
        [process.env.ACD_CLIENT_ID, JSON.stringify(dbData)]
      );
      console.log('Careers form data saved to database');
    } catch (dbError) {
      console.error('Database save error:', dbError);
    } finally {
      await client.end();
    }

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Careers form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit application', details: error.message },
      { status: 500 }
    );
  }
}
