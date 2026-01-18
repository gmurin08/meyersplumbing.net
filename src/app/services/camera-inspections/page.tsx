import { Camera, AlertTriangle, Shield, CheckCircle, Clock, Wrench, MapPinned, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import globals from 'globals.json';

export const metadata = {
  title: 'Camera Inspections - Sewer & Drain Video Inspections',
  description: 'High-definition camera inspections for drains and sewer lines. Pinpoint blockages, breaks, and root intrusion fast. Emergency service available 24/7.',
  keywords: 'camera inspection, sewer camera, drain inspection, video inspection, emergency plumbing',
  openGraph: {
    title: 'Camera Inspections - Video Pipe Diagnostics',
    description: 'See exactly what is happening inside your pipes with high-definition camera inspections.',
    url: 'https://meyersplumbing.net/services/camera-inspections'
  }
};

export default function CameraInspectionsPage() {
  const inspectionUses = [
    {
      title: 'Recurring Clogs',
      description: 'Identify the root cause of repeat backups and slow drains.',
      urgency: 'Urgent'
    },
    {
      title: 'Property Purchase',
      description: 'Confirm pipe condition before closing on a home or business.',
      urgency: 'Moderate'
    },
    {
      title: 'Suspected Breaks',
      description: 'Locate cracks, offsets, or collapsed sections fast.',
      urgency: 'Critical'
    },
    {
      title: 'Post-Repair Verification',
      description: 'Verify repairs, cleanouts, and lining work are complete.',
      urgency: 'Moderate'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Prep & Access',
      description: 'We locate the best access point and protect your property.',
      icon: Shield
    },
    {
      step: '2',
      title: 'HD Camera Survey',
      description: 'We record the full line and capture problem areas in real time.',
      icon: Camera
    },
    {
      step: '3',
      title: 'Precise Mapping',
      description: 'We pinpoint depth and location to guide repairs or cleaning.',
      icon: MapPinned
    },
    {
      step: '4',
      title: 'Clear Recommendations',
      description: 'You get a clear plan and estimate with no guesswork.',
      icon: Wrench
    }
  ];

  const benefits = [
    'Pinpoint issues without destructive digging',
    'Speed up emergency response and repair times',
    'Verify trenchless and cleaning work',
    'Document line conditions for planning',
    'Reduce repeat clogs and surprises'
  ];

  const inspectionFindings = [
    {
      title: 'Root Intrusion',
      description: 'We locate root mass and determine if jetting or repair is needed.'
    },
    {
      title: 'Pipe Offsets or Breaks',
      description: 'See collapsed or shifted pipe sections before they become emergencies.'
    },
    {
      title: 'Grease & Scale Buildup',
      description: 'Assess how much buildup remains and where jetting will help most.'
    },
    {
      title: 'Bellies & Low Spots',
      description: 'Identify areas where water collects and causes recurring clogs.'
    }
  ];

  const faqs = [
    {
      question: 'Do I need to clean the line before inspection?',
      answer: 'Not always. We can often inspect first, then recommend cleaning if visibility is limited.'
    },
    {
      question: 'Will I get the footage?',
      answer: 'We can share key images and findings, and we document locations for repairs.'
    },
    {
      question: 'How long does a camera inspection take?',
      answer: 'Most inspections take 30-90 minutes depending on line length and access.'
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const relatedServices = [
    {
      name: 'Hydro Jetting',
      href: '/services/hydro-jetting',
      description: 'Clear heavy buildup after inspection findings.'
    },
    {
      name: 'Trenchless Repair',
      href: '/services/trenchless',
      description: 'Repair damaged lines with minimal disruption.'
    },
    {
      name: 'Drain Cleaning',
      href: '/services/drain-cleaning',
      description: 'Fast relief for blockages and backups.'
    }
  ];

  return (
    <div>
      <Script
        id="camera-inspections-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="relative h-96 bg-gradient-to-r from-slate-900 to-emerald-700 text-white">
        <Image
          src="/images/services/camera-inspections/camera-inspection-hero.webp"
          alt="Plumber performing a sewer camera inspection"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Camera className="h-12 w-12 text-emerald-200 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Camera Inspections</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Know exactly what is happening inside your pipes before you dig, repair, or replace. Fast diagnostics with HD video.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${globals.business_phone}`}
                className="bg-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-emerald-600 transition-colors"
              >
                Emergency Service: {globals.business_phone}
              </a>
              <Link
                href="/contact"
                className="bg-white text-emerald-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Schedule Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <section className="py-4 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4">
            <AlertTriangle className="h-5 w-5 text-yellow-300" />
            <p className="font-medium">Emergency-ready diagnostics for sewer backups and line failures.</p>
          </div>
        </div>
      </section>

      {/* Intro + Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative bg-gray-200 rounded-lg h-96 overflow-hidden">
                <Image
                  src="/images/services/camera-inspections/camera-line-monitor.webp"
                  alt="Drain line camera inspection monitor view"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Fast Answers Without the Guesswork</h2>
              <p className="text-gray-700 mb-6">
                Our camera inspections locate blockages, root intrusion, and structural problems with precision. You get clear answers and a focused repair plan.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Inspect */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">When a Camera Inspection Makes Sense</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {inspectionUses.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.urgency === 'Critical' ? 'bg-red-100 text-red-800' :
                    item.urgency === 'Urgent' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.urgency}
                  </span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Inspection Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="bg-emerald-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="text-sm font-bold text-emerald-700 mb-2">Step {step.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Findings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What We Commonly Find</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {inspectionFindings.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Camera Inspection FAQs</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <AlertTriangle className="h-14 w-14 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-4">Sewer Backup? Get Answers Fast.</h2>
          <p className="text-xl text-emerald-100 mb-8">
            We can inspect, locate, and help resolve the issue quickly—any time, day or night.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${globals.business_phone}`}
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Call Now: {globals.business_phone}
            </a>
            <Link
              href="/contact"
              className="bg-white text-emerald-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Schedule Inspection
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <Link key={index} href={service.href} className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600">{service.name}</h3>
                  <ArrowRight className="h-4 w-4 text-emerald-500" />
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
