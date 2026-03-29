import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Flame, Thermometer, CheckCircle, Clock, Shield, Wrench, Phone, Zap, Gauge, FileCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceSchema from '@/components/seo/ServiceSchema';
import globals from '/globals.json';

export const metadata = {
  title: 'Water Heater Installation Pittsburgh | Tank & Tankless',
  description: 'Professional water heater installation in Pittsburgh PA. Tank, tankless, and hybrid water heater replacement. Licensed plumbers, permit handling, and code-compliant installation in Oakdale & surrounding areas.',
  keywords: 'water heater installation Pittsburgh, new water heater cost, tankless water heater installation PA, water heater replacement Pittsburgh, hot water heater install Oakdale',
  openGraph: {
    title: 'Water Heater Installation Pittsburgh | Tank & Tankless',
    description: 'Professional water heater installation and replacement in Pittsburgh PA. Tank, tankless, and hybrid options with expert installation.',
    url: 'https://meyersplumbing.net/services/water-heater-installation',
  },
  alternates: {
    canonical: '/services/water-heater-installation'
  }
};

export default function WaterHeaterInstallationPage() {
  const heaterTypes = [
    {
      type: "Traditional Tank",
      icon: Flame,
      capacity: "40-80 gallons",
      lifespan: "8-12 years",
      bestFor: "Most Pittsburgh homes with standard hot water needs",
      pros: [
        "Lower upfront cost",
        "Simple installation, especially as a replacement",
        "Reliable and well-understood technology",
        "Works well with existing gas or electric connections"
      ],
      cons: [
        "Higher monthly energy costs (standby heat loss)",
        "Takes up more space in the basement",
        "Runs out of hot water during heavy use"
      ]
    },
    {
      type: "Tankless (On-Demand)",
      icon: Zap,
      capacity: "Unlimited hot water",
      lifespan: "15-20 years",
      bestFor: "Families who use a lot of hot water or want to save space",
      pros: [
        "Endless hot water on demand",
        "20-30% more energy efficient than tank models",
        "Compact wall-mounted design saves floor space",
        "Longer lifespan than traditional tanks"
      ],
      cons: [
        "Higher upfront installation cost",
        "May require gas line or electrical upgrades",
        "Flow rate limits can affect simultaneous use"
      ]
    },
    {
      type: "Hybrid Heat Pump",
      icon: Gauge,
      capacity: "50-80 gallons",
      lifespan: "12-15 years",
      bestFor: "Homeowners focused on energy savings and lower utility bills",
      pros: [
        "Most energy-efficient option available",
        "Can cut water heating costs by up to 60%",
        "May qualify for federal energy tax credits",
        "Works well in Pittsburgh basement environments"
      ],
      cons: [
        "Highest upfront cost",
        "Needs adequate space and air circulation",
        "Performs best in spaces above 40 degrees F"
      ]
    }
  ];

  const installProcess = [
    { step: "1", title: "Free In-Home Assessment", description: "We evaluate your current setup, hot water usage, and home layout to recommend the best option for your family and budget." },
    { step: "2", title: "Selection & Sizing", description: "We help you choose the right type and size. An undersized heater means cold showers; oversized means wasted energy. We get it right." },
    { step: "3", title: "Permits & Scheduling", description: "We handle all permits required by Allegheny County and Pennsylvania code. You do not have to worry about paperwork." },
    { step: "4", title: "Professional Installation", description: "Our licensed plumbers remove the old unit, install the new water heater, connect all plumbing and gas or electrical lines, and test everything." },
    { step: "5", title: "Cleanup & Walkthrough", description: "We haul away the old water heater, clean up the work area, and walk you through your new system so you know how it works." }
  ];

  const sizingGuide = [
    { household: "1-2 people", tankSize: "30-40 gallons", tankless: "Up to 5 GPM" },
    { household: "3-4 people", tankSize: "40-50 gallons", tankless: "5-7 GPM" },
    { household: "5+ people", tankSize: "50-80 gallons", tankless: "7-10 GPM" }
  ];

  return (
    <div>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Water Heater Installation", href: "/services/water-heater-installation" }
      ]} />
      <ServiceSchema serviceName="Water Heater Installation" serviceDescription="Professional water heater installation and replacement services in Pittsburgh PA. Tank, tankless, and hybrid options with full permit handling." serviceUrl="/services/water-heater-installation" />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/wrench-bg.webp"
            alt="Water heater installation service in Pittsburgh"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Flame className="h-12 w-12 text-cyan-300 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Water Heater Installation</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Time for a new water heater? We install tank, tankless, and hybrid systems throughout Pittsburgh. Licensed plumbers, proper permits, and quality you can count on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${globals.business_phone}`}
                className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-cyan-600 transition-colors"
              >
                Call Now: {globals.business_phone}
              </a>
              <Link
                href="/contact"
                className="bg-white text-cyan-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* When to Replace */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">When Should You Replace Your Water Heater?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Most water heaters last 8-12 years. If yours is showing any of these signs, it may be time for a new one rather than another repair.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Your water heater is over 10 years old",
              "You are getting rusty or discolored hot water",
              "The tank is visibly corroded or leaking",
              "You keep needing repairs every year or two",
              "Your energy bills have been climbing steadily",
              "You are not getting enough hot water for your household"
            ].map((sign, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{sign}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Not sure if your unit needs repair instead? Visit our <Link href="/services/water-heater-repair" className="text-cyan-600 hover:underline font-semibold">water heater repair</Link> page for more guidance.
          </p>
        </div>
      </section>

      {/* Types We Install */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Types of Water Heaters We Install</h2>
          <div className="space-y-12">
            {heaterTypes.map((heater, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-cyan-100 p-4 rounded-full mr-4">
                      <heater.icon className="h-8 w-8 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{heater.type}</h3>
                      <p className="text-gray-500">Capacity: {heater.capacity} &bull; Lifespan: {heater.lifespan}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6"><strong>Best for:</strong> {heater.bestFor}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3">Advantages</h4>
                      <ul className="space-y-2">
                        {heater.pros.map((pro, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-700 mb-3">Considerations</h4>
                      <ul className="space-y-2">
                        {heater.cons.map((con, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <Wrench className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizing Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Water Heater Sizing Guide</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Picking the right size is critical. Too small and you will run out of hot water. Too large and you are wasting energy every month.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <div className="grid grid-cols-3 bg-cyan-700 text-white font-bold text-sm">
                <div className="p-4">Household Size</div>
                <div className="p-4">Tank Size</div>
                <div className="p-4">Tankless Flow Rate</div>
              </div>
              {sizingGuide.map((row, index) => (
                <div key={index} className={`grid grid-cols-3 text-sm ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <div className="p-4 font-medium text-gray-900">{row.household}</div>
                  <div className="p-4 text-gray-700">{row.tankSize}</div>
                  <div className="p-4 text-gray-700">{row.tankless}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Installation Process</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {installProcess.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mr-4 mt-1">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Permits & Code */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-blue-50 border border-blue-200 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <FileCheck className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Permits &amp; Code Compliance in Pennsylvania</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Water heater installation in Allegheny County requires proper permits and must meet Pennsylvania Uniform Construction Code standards. This is not something you want to cut corners on.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">We pull all required permits so you do not have to</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">All installations meet current PA plumbing and gas codes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Proper venting, connections, and safety valve installation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Licensed and insured plumbers on every job</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              Improper installation can void your warranty, create safety hazards, and cause problems when selling your home. Always use a licensed professional.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a New Water Heater?</h2>
          <p className="text-xl mb-8">
            {globals.business_name} makes water heater installation easy. Free estimates, expert sizing advice, professional installation, and we handle the permits. Serving Pittsburgh, {globals.business_city}, and all surrounding communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/contact"
              className="bg-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
              style={{ color: globals.primary_color }}
            >
              Get a Free Estimate
            </Link>
            <a
              href={`tel:${globals.business_phone}`}
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-cyan-400 transition-colors"
            >
              Call: {globals.business_phone}
            </a>
          </div>
          <p className="text-sm opacity-90">
            Licensed Plumbers &bull; Free Estimates &bull; Permits Included &bull; Serving {globals.business_city} &amp; Greater Pittsburgh
          </p>
        </div>
      </section>
    </div>
  );
}
