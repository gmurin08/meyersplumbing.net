import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Flame, Thermometer, AlertTriangle, CheckCircle, Clock, Shield, Wrench, Phone, Droplets, Volume2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceSchema from '@/components/seo/ServiceSchema';
import globals from '/globals.json';

export const metadata = {
  title: 'Water Heater Repair Pittsburgh PA | Same-Day Service',
  description: 'Fast water heater repair in Pittsburgh PA. No hot water, leaking tank, strange noises, pilot light issues. Same-day service from licensed plumbers serving Oakdale, Moon Township & surrounding areas.',
  keywords: 'water heater repair Pittsburgh, hot water heater not working, water heater leaking Pittsburgh, water heater pilot light repair, no hot water Pittsburgh PA',
  openGraph: {
    title: 'Water Heater Repair Pittsburgh PA | Same-Day Service',
    description: 'Fast water heater repair in Pittsburgh PA. Same-day service for no hot water, leaks, strange noises, and pilot light issues.',
    url: 'https://meyersplumbing.net/services/water-heater-repair',
  },
  alternates: {
    canonical: '/services/water-heater-repair'
  }
};

export default function WaterHeaterRepairPage() {
  const commonProblems = [
    {
      problem: "No Hot Water",
      icon: Thermometer,
      symptoms: "Cold water from all faucets, water heater not firing up, thermostat not responding",
      causes: "Faulty thermostat, broken heating element, tripped breaker, gas valve issues, or a failed pilot light.",
      urgency: "High"
    },
    {
      problem: "Strange Noises",
      icon: Volume2,
      symptoms: "Popping, rumbling, banging, or whining sounds from the tank",
      causes: "Sediment buildup on the bottom of the tank. Common in Pittsburgh homes with hard water and older systems.",
      urgency: "Medium"
    },
    {
      problem: "Leaking Tank",
      icon: Droplets,
      symptoms: "Water pooling around the base, dripping from fittings, or visible corrosion",
      causes: "Corroded tank, loose connections, failed pressure relief valve, or worn-out anode rod.",
      urgency: "High"
    },
    {
      problem: "Rusty or Discolored Water",
      icon: AlertTriangle,
      symptoms: "Brown, yellow, or rust-colored hot water from faucets",
      causes: "Deteriorating anode rod or internal tank corrosion. Many older Pittsburgh homes have this issue with aging water heaters.",
      urgency: "Medium"
    },
    {
      problem: "Pilot Light Won't Stay Lit",
      icon: Flame,
      symptoms: "Gas water heater pilot keeps going out, no hot water intermittently",
      causes: "Faulty thermocouple, dirty pilot orifice, or draft issues common in older Pittsburgh basements.",
      urgency: "High"
    },
    {
      problem: "Not Enough Hot Water",
      icon: Thermometer,
      symptoms: "Water runs lukewarm, hot water runs out quickly, inconsistent temperatures",
      causes: "Failed heating element (electric), undersized unit, dip tube failure, or sediment reducing tank capacity.",
      urgency: "Medium"
    }
  ];

  const repairProcess = [
    { step: "1", title: "Call & Describe the Issue", description: "Tell us what is happening. We will ask a few questions to diagnose the problem over the phone if possible." },
    { step: "2", title: "Same-Day Dispatch", description: "We send a licensed plumber to your home, often the same day. We carry common parts on our trucks." },
    { step: "3", title: "Thorough Diagnosis", description: "We inspect the entire water heater system, not just the symptom, to find the root cause." },
    { step: "4", title: "Upfront Pricing", description: "Before any work begins, you get a clear explanation and a fair price. No surprises." },
    { step: "5", title: "Expert Repair", description: "We fix the problem right the first time using quality parts and proper technique." }
  ];

  const brands = [
    "Rheem", "A.O. Smith", "Bradford White", "State", "Rinnai",
    "Navien", "Kenmore", "Whirlpool", "GE", "Ruud"
  ];

  return (
    <div>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Water Heater Repair", href: "/services/water-heater-repair" }
      ]} />
      <ServiceSchema serviceName="Water Heater Repair" serviceDescription="Professional water heater repair services in Pittsburgh PA. Same-day service for leaks, no hot water, pilot light issues, and more." serviceUrl="/services/water-heater-repair" />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/wrench-bg.webp"
            alt="Water heater repair service in Pittsburgh"
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
              <h1 className="text-4xl md:text-5xl font-bold">Water Heater Repair</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              No hot water? Leaking tank? Strange noises? Our licensed Pittsburgh plumbers provide same-day water heater repair so you can get back to normal fast.
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
                Schedule Repair
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Common Water Heater Problems We Fix</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Pittsburgh&apos;s hard water, aging infrastructure, and harsh winters put extra stress on water heaters. Here are the most common issues we see and repair every day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonProblems.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <item.icon className="h-6 w-6 text-cyan-600 mr-2" />
                    <h3 className="font-bold text-gray-900 text-lg">{item.problem}</h3>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.urgency === 'High' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
                  }`}>
                    {item.urgency} Priority
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-1">Symptoms:</h4>
                    <p className="text-gray-700 text-sm">{item.symptoms}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-1">Common Causes:</h4>
                    <p className="text-gray-700 text-sm">{item.causes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair vs Replace */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Repair or Replace? How to Decide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
                <Wrench className="h-7 w-7 mr-3" />
                Repair Makes Sense When
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Your water heater is less than 8-10 years old</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">The repair cost is less than 50% of a new unit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">This is the first time it has needed service</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">The tank itself is not corroded or leaking</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center">
                <AlertTriangle className="h-7 w-7 mr-3" />
                Replacement May Be Better When
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">The unit is over 10-12 years old</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">You are seeing rust-colored water consistently</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">The tank itself is leaking from the bottom</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">You have had multiple repairs in recent years</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            Not sure which option is right for you? We will always give you an honest recommendation. If a repair can get you a few more years, we will tell you. Need a new unit? Check out our <Link href="/services/water-heater-installation" className="text-cyan-600 hover:underline font-semibold">water heater installation</Link> page.
          </p>
        </div>
      </section>

      {/* Our Repair Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Water Heater Repair Process</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {repairProcess.map((item, index) => (
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

      {/* Brands We Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Brands We Service</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our technicians are experienced with all major water heater brands. No matter what is in your basement, we can fix it.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {brands.map((brand, index) => (
              <span key={index} className="bg-white px-6 py-3 rounded-lg border border-gray-200 font-semibold text-gray-700 shadow-sm">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-cyan-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Clock className="h-16 w-16 mx-auto mb-6 text-cyan-300" />
          <h2 className="text-3xl font-bold mb-4">Emergency Water Heater Repair</h2>
          <p className="text-xl mb-4">
            Woke up to no hot water? Water heater leaking all over the floor? We offer same-day and emergency water heater repair throughout the Pittsburgh area.
          </p>
          <p className="text-lg mb-8 text-cyan-200">
            Pittsburgh winters are no time to go without hot water. Call us and we will get a plumber to your home as fast as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${globals.business_phone}`}
              className="bg-white text-cyan-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call: {globals.business_phone}
            </a>
            <Link
              href="/contact"
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-cyan-400 transition-colors"
            >
              Request Emergency Service
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pittsburgh&apos;s Trusted Water Heater Repair Experts</h2>
          <p className="text-xl mb-8">
            {globals.business_name} has been keeping Pittsburgh homes comfortable with reliable water heater repair. Licensed, insured, and committed to doing the job right.
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
            Licensed Plumbers &bull; Same-Day Service &bull; All Brands &bull; Serving {globals.business_city} &amp; Greater Pittsburgh
          </p>
        </div>
      </section>
    </div>
  );
}
