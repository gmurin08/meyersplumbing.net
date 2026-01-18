import { Droplets, AlertTriangle, CheckCircle, Shield, Wrench, Search, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import globals from 'globals.json';

export const metadata = {
  title: 'Dye Testing - Plumbing Leak & Cross-Connection Detection',
  description: 'Professional dye testing to trace leaks, cross-connections, and drainage issues. Fast response and clear answers for property owners.',
  keywords: 'dye testing, leak detection, cross connection testing, plumbing diagnostics',
  openGraph: {
    title: 'Dye Testing - Leak and Cross-Connection Detection',
    description: 'Trace leaks and drainage issues quickly with professional dye testing.',
    url: 'https://meyersplumbing.net/services/dye-testing'
  }
};

export default function DyeTestingPage() {
  const situations = [
    {
      title: 'Mystery Leaks',
      description: 'Trace where water is traveling when the source is unclear.',
      urgency: 'Urgent'
    },
    {
      title: 'Odors or Sewer Gas',
      description: 'Identify broken traps or cross-connections safely.',
      urgency: 'Urgent'
    },
    {
      title: 'Stormwater Issues',
      description: 'Confirm where drains, sumps, or yard lines discharge.',
      urgency: 'Moderate'
    },
    {
      title: 'Compliance Questions',
      description: 'Document drainage flow for property managers or municipalities.',
      urgency: 'Moderate'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Site Review',
      description: 'We review plans, fixtures, and suspected flow paths.',
      icon: Shield
    },
    {
      step: '2',
      title: 'Targeted Dye Application',
      description: 'We apply non-toxic dye to the right locations.',
      icon: Droplets
    },
    {
      step: '3',
      title: 'Observation & Tracking',
      description: 'We monitor for dye movement to pinpoint connections.',
      icon: Search
    },
    {
      step: '4',
      title: 'Recommendations',
      description: 'You receive a clear report with next steps.',
      icon: Wrench
    }
  ];

  const benefits = [
    'Non-destructive and safe for properties',
    'Quickly confirms cross-connections',
    'Helps resolve odor and drainage complaints',
    'Provides clear documentation for compliance',
    'Pairs well with camera inspections'
  ];

  const commonUses = [
    {
      title: 'Commercial Properties',
      description: 'Verify how floor drains, sumps, and sanitary lines connect.'
    },
    {
      title: 'Multi-Family Buildings',
      description: 'Trace leaks between units or confirm shared line routing.'
    },
    {
      title: 'Stormwater & Yard Lines',
      description: 'Confirm where outdoor drains discharge and if they cross-connect.'
    },
    {
      title: 'Odor Complaints',
      description: 'Find hidden cross-connections or trap issues causing sewer gas.'
    }
  ];

  const faqs = [
    {
      question: 'Is dye testing safe for plumbing systems?',
      answer: 'Yes. We use non-toxic dye designed for plumbing diagnostics and safe flow tracing.'
    },
    {
      question: 'How long does dye testing take?',
      answer: 'Most appointments take 1-2 hours depending on the property size and the issue.'
    },
    {
      question: 'Can dye testing confirm a cross-connection?',
      answer: 'Yes. It is a reliable way to confirm where water is moving through the system.'
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
      name: 'Backflow Testing',
      href: '/services/backflow-testing',
      description: 'Protect water systems with certified testing.'
    },
    {
      name: 'Camera Inspections',
      href: '/services/camera-inspections',
      description: 'Confirm line condition after dye testing.'
    },
    {
      name: 'Emergency Services',
      href: '/services/emergency-services',
      description: '24/7 help for urgent plumbing issues.'
    }
  ];

  return (
    <div>
      <Script
        id="dye-testing-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="relative h-96 bg-gradient-to-r from-slate-900 to-purple-700 text-white">
        <Image
          src="/images/services/dye-testing/dye-testing-hero.webp"
          alt="Technician performing dye testing to trace plumbing flow"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Droplets className="h-12 w-12 text-purple-200 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Dye Testing</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Trace leaks, confirm flow paths, and solve drainage mysteries with fast, non-destructive dye testing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${globals.business_phone}`}
                className="bg-purple-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-purple-600 transition-colors"
              >
                Emergency Service: {globals.business_phone}
              </a>
              <Link
                href="/contact"
                className="bg-white text-purple-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Schedule Dye Test
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <section className="py-4 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4">
            <AlertTriangle className="h-5 w-5 text-yellow-300" />
            <p className="font-medium">Fast diagnostics for leaks, odors, and cross-connections.</p>
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
                  src="/images/services/dye-testing/dye-testing-work.webp"
                  alt="Dye testing in progress for plumbing diagnostics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Clear Answers Without Demo Work</h2>
              <p className="text-gray-700 mb-6">
                Dye testing lets us confirm how water is moving through your system without tearing anything apart. It is fast, safe, and effective for pinpointing issues.
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

      {/* When to Use */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">When Dye Testing Helps Most</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {situations.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Dye Testing Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="bg-purple-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-sm font-bold text-purple-700 mb-2">Step {step.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Uses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Where Dye Testing Helps Most</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonUses.map((item, index) => (
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Dye Testing FAQs</h2>
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
      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <AlertTriangle className="h-14 w-14 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-4">Urgent Leak? We Can Trace It Fast.</h2>
          <p className="text-xl text-purple-100 mb-8">
            We respond quickly to determine where the water is going and how to fix it.
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
              className="bg-white text-purple-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Schedule Dye Testing
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
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600">{service.name}</h3>
                  <ArrowRight className="h-4 w-4 text-purple-500" />
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
