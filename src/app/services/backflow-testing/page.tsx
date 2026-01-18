import { Shield, AlertTriangle, Droplets, Clock, CheckCircle, Wrench, FileCheck, Gauge, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import globals from 'globals.json';

export const metadata = {
  title: 'Backflow Testing & Prevention - Emergency Plumbing Services',
  description: 'Professional backflow testing and prevention services. Fast response for compliance issues, pressure problems, and water safety concerns. Emergency service available 24/7.',
  keywords: 'backflow testing, backflow prevention, emergency plumber, water safety, backflow inspection',
  openGraph: {
    title: 'Backflow Testing & Prevention - 24/7 Service',
    description: 'Certified backflow testing and prevention with emergency response for water safety concerns.',
    url: 'https://meyersplumbing.net/services/backflow-testing'
  }
};

export default function BackflowTestingPage() {
  const riskSigns = [
    {
      title: 'Discolored Water',
      description: 'Cloudy or rusty water can signal pressure reversals or contamination risks.',
      urgency: 'Urgent'
    },
    {
      title: 'Failed Compliance Test',
      description: 'Annual testing is required for many properties. We handle failed tests fast.',
      urgency: 'Critical'
    },
    {
      title: 'Low or Fluctuating Pressure',
      description: 'Pressure changes can compromise backflow devices and water safety.',
      urgency: 'Urgent'
    },
    {
      title: 'Recent Plumbing Changes',
      description: 'New equipment or remodels can introduce backflow risks.',
      urgency: 'Moderate'
    }
  ];

  const serviceSteps = [
    {
      step: '1',
      title: 'On-Site Assessment',
      description: 'We verify device type, location, and compliance requirements.',
      icon: Shield
    },
    {
      step: '2',
      title: 'Certified Testing',
      description: 'We test valves, pressures, and device integrity with calibrated tools.',
      icon: Gauge
    },
    {
      step: '3',
      title: 'Documentation & Reporting',
      description: 'We provide compliance documentation and recommendations immediately.',
      icon: FileCheck
    },
    {
      step: '4',
      title: 'Repair or Replacement',
      description: 'If issues are found, we can repair or replace devices on the spot.',
      icon: Wrench
    }
  ];

  const benefits = [
    'Protect drinking water from contamination',
    'Maintain compliance with local requirements',
    'Prevent costly fines and shutdowns',
    'Safeguard commercial and multi-family properties',
    'Keep pressure stable throughout the system'
  ];

  const applications = [
    {
      title: 'Commercial Properties',
      description: 'Restaurants, medical offices, and retail spaces often require annual testing and documentation.'
    },
    {
      title: 'Multi-Family Housing',
      description: 'Protect shared water systems with scheduled testing and fast repair response.'
    },
    {
      title: 'Irrigation & Fire Lines',
      description: 'Dedicated lines need protection to prevent backflow into potable water.'
    },
    {
      title: 'Remodels & New Equipment',
      description: 'Renovations and equipment upgrades can change pressure dynamics.'
    }
  ];

  const faqs = [
    {
      question: 'How often is backflow testing required?',
      answer: 'Many properties require annual testing, but requirements can vary. We help verify what applies to your property.'
    },
    {
      question: 'Can you repair a failed device the same day?',
      answer: 'In most cases, yes. Our trucks are stocked to handle common backflow repair or replacement needs.'
    },
    {
      question: 'Do you provide compliance documentation?',
      answer: 'Yes. We provide a clear report after testing so you can submit it to the appropriate authority.'
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
      name: 'Dye Testing',
      href: '/services/dye-testing',
      description: 'Identify cross-connections and flow issues quickly.'
    },
    {
      name: 'Camera Inspections',
      href: '/services/camera-inspections',
      description: 'See inside lines to confirm backflow device performance.'
    },
    {
      name: 'Emergency Services',
      href: '/services/emergency-services',
      description: '24/7 response when water safety is compromised.'
    }
  ];

  return (
    <div>
      <Script
        id="backflow-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="relative h-96 bg-gradient-to-r from-slate-900 to-blue-700 text-white">
        <Image
          src="/images/services/backflow-testing/backflow-testing-hero.webp"
          alt="Technician performing professional backflow testing"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-blue-300 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Backflow Testing & Prevention</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Protect your drinking water with certified backflow testing, fast compliance reporting, and emergency response when safety is at risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${globals.business_phone}`}
                className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-600 transition-colors"
              >
                Emergency Service: {globals.business_phone}
              </a>
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Schedule Testing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4">
            <AlertTriangle className="h-5 w-5 text-yellow-300" />
            <p className="font-medium">Emergency-ready backflow response for water safety and compliance issues.</p>
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
                  src="/images/services/backflow-testing/backflow-device-closeup.webp"
                  alt="Backflow prevention device inspection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Keep Water Safe and Systems Compliant</h2>
              <p className="text-gray-700 mb-6">
                Backflow devices protect potable water from contamination caused by pressure changes. We handle testing, repairs, and compliance reporting for homes, businesses, and multi-unit properties.
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

      {/* Warning Signs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Signs You Need Backflow Testing Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {riskSigns.map((sign, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{sign.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    sign.urgency === 'Critical' ? 'bg-red-100 text-red-800' :
                    sign.urgency === 'Urgent' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {sign.urgency}
                  </span>
                </div>
                <p className="text-gray-600">{sign.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">How Our Backflow Testing Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceSteps.map((step, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-sm font-bold text-blue-700 mb-2">Step {step.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Where Backflow Protection Matters Most</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((item, index) => (
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Backflow Testing FAQs</h2>
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
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <AlertTriangle className="h-14 w-14 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-4">Water Safety Issue? We Respond Fast.</h2>
          <p className="text-xl text-blue-100 mb-8">
            Backflow issues can’t wait. Our emergency plumbers are ready to restore safety and compliance.
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
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
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
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">{service.name}</h3>
                  <ArrowRight className="h-4 w-4 text-blue-500" />
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
