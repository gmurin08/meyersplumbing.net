import { Zap, Droplets, AlertTriangle, CheckCircle, Gauge, Wrench, Shield, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import globals from 'globals.json';

export const metadata = {
  title: 'Hydro Jetting Services - High-Pressure Drain Cleaning',
  description: 'Powerful hydro jetting services to clear grease, scale, and heavy buildup. Emergency drain clearing available 24/7.',
  keywords: 'hydro jetting, high pressure drain cleaning, sewer jetting, emergency plumbing',
  openGraph: {
    title: 'Hydro Jetting Services - Deep Drain Cleaning',
    description: 'High-pressure jetting removes stubborn buildup and restores full pipe flow.',
    url: 'https://meyersplumbing.net/services/hydro-jetting'
  }
};

export default function HydroJettingPage() {
  const bestFor = [
    {
      title: 'Grease & Sludge Buildup',
      description: 'Commercial kitchens and heavy-use lines benefit from full pipe scouring.',
      urgency: 'Urgent'
    },
    {
      title: 'Repeat Clogs',
      description: 'When snaking only gives temporary relief, jetting clears the full diameter.',
      urgency: 'Urgent'
    },
    {
      title: 'Root Intrusion',
      description: 'Jetting helps remove root mass before follow-up repairs.',
      urgency: 'Critical'
    },
    {
      title: 'Preventive Maintenance',
      description: 'Scheduled jetting keeps systems flowing and prevents emergencies.',
      urgency: 'Moderate'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Camera Check',
      description: 'We confirm pipe condition and select the right jetting pressure.',
      icon: Shield
    },
    {
      step: '2',
      title: 'High-Pressure Cleaning',
      description: 'We scour the full pipe interior, not just punch a hole through.',
      icon: Gauge
    },
    {
      step: '3',
      title: 'Flow Verification',
      description: 'We verify restored flow and document results.',
      icon: CheckCircle
    },
    {
      step: '4',
      title: 'Maintenance Plan',
      description: 'We recommend intervals to keep lines clear long-term.',
      icon: Wrench
    }
  ];

  const benefits = [
    'Removes 100% of buildup along pipe walls',
    'Restores full flow and reduces backups',
    'Safe for most plumbing systems when done professionally',
    'Ideal for commercial and high-use lines',
    'Pairs well with camera inspections for diagnostics'
  ];

  const idealFor = [
    {
      title: 'Restaurants & Food Service',
      description: 'Grease-heavy lines need aggressive cleaning to prevent shutdowns.'
    },
    {
      title: 'Multi-Unit Buildings',
      description: 'Shared lines stay clear longer with periodic jetting.'
    },
    {
      title: 'Older Homes',
      description: 'Scale and buildup reduce flow over time in older pipes.'
    },
    {
      title: 'Preventive Service',
      description: 'Scheduled jetting keeps emergencies away and reduces odors.'
    }
  ];

  const faqs = [
    {
      question: 'Is hydro jetting safe for older pipes?',
      answer: 'Yes when done professionally. We inspect first to confirm pipe condition and select proper pressure.'
    },
    {
      question: 'How long does hydro jetting last?',
      answer: 'Results often last much longer than snaking because jetting cleans the full pipe interior.'
    },
    {
      question: 'Do I need to be home during service?',
      answer: 'We recommend someone on-site for access, but we keep disruption minimal and fast.'
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
      name: 'Camera Inspections',
      href: '/services/camera-inspections',
      description: 'See inside lines before or after jetting.'
    },
    {
      name: 'Drain Cleaning',
      href: '/services/drain-cleaning',
      description: 'Routine clog removal and line care.'
    },
    {
      name: 'Emergency Services',
      href: '/services/emergency-services',
      description: '24/7 response for severe backups.'
    }
  ];

  return (
    <div>
      <Script
        id="hydro-jetting-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="relative h-96 bg-gradient-to-r from-slate-900 to-cyan-700 text-white">
        <Image
          src="/images/services/hydro-jetting/hydro-jetting-hero.webp"
          alt="Hydro jetting service cleaning a drain line"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-12 w-12 text-cyan-200 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Hydro Jetting Services</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              High-pressure jetting removes grease, scale, and heavy buildup to restore full pipe flow with lasting results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${globals.business_phone}`}
                className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-cyan-600 transition-colors"
              >
                Emergency Service: {globals.business_phone}
              </a>
              <Link
                href="/contact"
                className="bg-white text-cyan-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Schedule Jetting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <section className="py-4 bg-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4">
            <AlertTriangle className="h-5 w-5 text-yellow-300" />
            <p className="font-medium">Fast response for severe clogs, grease backups, and slow drains.</p>
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
                  src="/images/services/hydro-jetting/jetting-equipment.webp"
                  alt="Hydro jetting equipment and hose setup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Deep Clean for Tough Clogs</h2>
              <p className="text-gray-700 mb-6">
                Hydro jetting uses specialized equipment to scour pipe walls clean. It eliminates heavy buildup that standard snaking leaves behind.
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

      {/* Best For */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">When Hydro Jetting Is the Best Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestFor.map((item, index) => (
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Hydro Jetting Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="bg-cyan-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-cyan-600" />
                </div>
                <div className="text-sm font-bold text-cyan-700 mb-2">Step {step.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Hydro Jetting Works Best For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {idealFor.map((item, index) => (
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Hydro Jetting FAQs</h2>
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
      <section className="py-16 bg-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <AlertTriangle className="h-14 w-14 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-4">Backed-Up Line? We Can Clear It Fast.</h2>
          <p className="text-xl text-cyan-100 mb-8">
            We dispatch quickly for severe blockages to protect your property and restore flow.
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
              className="bg-white text-cyan-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Schedule Jetting
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
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-cyan-600">{service.name}</h3>
                  <ArrowRight className="h-4 w-4 text-cyan-500" />
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
