import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Droplets, AlertTriangle, CheckCircle, Clock, Shield, Wrench, Phone, CloudRain, Mountain, BatteryCharging, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceSchema from '@/components/seo/ServiceSchema';
import globals from '/globals.json';

export const metadata = {
  title: 'Sump Pump Installation & Repair Pittsburgh PA',
  description: 'Professional sump pump installation, repair, and replacement in Pittsburgh PA. Submersible, pedestal, and battery backup systems. Licensed plumbers serving Oakdale, Moon Township & surrounding areas.',
  keywords: 'sump pump installation Pittsburgh, sump pump repair, sump pump replacement Pittsburgh PA, battery backup sump pump, sump pump service Oakdale PA',
  openGraph: {
    title: 'Sump Pump Installation & Repair Pittsburgh PA',
    description: 'Professional sump pump installation, repair, and replacement in Pittsburgh PA. Keep your basement dry with expert service.',
    url: 'https://meyersplumbing.net/services/sump-pump',
  },
  alternates: {
    canonical: '/services/sump-pump'
  }
};

export default function SumpPumpPage() {
  const whyPittsburgh = [
    {
      reason: "Heavy Rainfall",
      icon: CloudRain,
      detail: "Pittsburgh averages about 38 inches of rain per year, with heavy downpours common in spring and summer. Without a working sump pump, all that water has nowhere to go but your basement."
    },
    {
      reason: "Hilly Terrain",
      icon: Mountain,
      detail: "Pittsburgh is built on hills and valleys. Homes built into hillsides or at the bottom of slopes collect runoff from surrounding properties, making sump pumps essential for keeping basements dry."
    },
    {
      reason: "High Water Table",
      icon: Droplets,
      detail: "Many neighborhoods in the Pittsburgh area sit on a high water table, especially near the rivers and creeks. Groundwater pressure can push water up through basement floors and walls even without rain."
    },
    {
      reason: "Older Homes and Basements",
      icon: Clock,
      detail: "Pittsburgh has a large stock of homes built in the early 1900s. Older stone and block foundations are more porous and prone to water infiltration. A sump pump is often the best line of defense."
    }
  ];

  const pumpTypes = [
    {
      type: "Submersible Sump Pump",
      description: "Sits inside the sump pit, fully submerged in water. The motor is sealed and designed to operate underwater.",
      pros: [
        "Quieter operation since it runs underwater",
        "More powerful, handles higher volumes of water",
        "Sealed motor lasts longer in wet environments",
        "Does not take up floor space in the basement"
      ],
      bestFor: "Most Pittsburgh homes. This is the standard recommendation for basements that see regular water.",
      lifespan: "7-10 years"
    },
    {
      type: "Pedestal Sump Pump",
      description: "The motor sits on a pedestal above the sump pit with only the intake pipe reaching into the water.",
      pros: [
        "Easier to access for maintenance and repair",
        "Lower upfront cost than submersible models",
        "Works well for narrow or shallow sump pits",
        "Motor stays dry, which can extend its life in some conditions"
      ],
      bestFor: "Homes with shallow or narrow sump pits, or situations where budget is a primary concern.",
      lifespan: "25-30 years (motor stays dry)"
    },
    {
      type: "Battery Backup Sump Pump",
      description: "A secondary pump with its own battery power that kicks in when the primary pump fails or the power goes out.",
      pros: [
        "Protects your basement during power outages",
        "Takes over if the primary pump is overwhelmed or fails",
        "Some models include alarm systems to alert you",
        "Peace of mind during Pittsburgh thunderstorms"
      ],
      bestFor: "Any home with a sump pump. Power outages during heavy storms are when you need your pump the most.",
      lifespan: "5-7 years (battery replacement every 2-3 years)"
    }
  ];

  const serviceSigns = [
    {
      sign: "Pump Runs Constantly",
      description: "If your sump pump runs non-stop, even when it is not raining, the float switch may be stuck, the check valve may have failed, or the pump may be undersized for your water volume.",
      urgency: "High"
    },
    {
      sign: "Strange Noises",
      description: "Grinding, rattling, or thunking sounds from the sump pit usually mean a damaged impeller, worn bearings, or a jammed float switch. These issues get worse quickly.",
      urgency: "Medium"
    },
    {
      sign: "Pump Does Not Turn On",
      description: "If the pit fills with water and the pump does not activate, the float switch, motor, or electrical connection has failed. Test your pump regularly by pouring water into the pit.",
      urgency: "High"
    },
    {
      sign: "Visible Rust or Corrosion",
      description: "Rust on the pump housing or discharge pipe indicates the pump is deteriorating. Corroded components will fail eventually and should be replaced proactively.",
      urgency: "Medium"
    },
    {
      sign: "Water in the Basement Despite Having a Pump",
      description: "If water is getting past your sump pump, the pump may be overwhelmed, the pit may be too small, or there may be additional entry points that need to be addressed.",
      urgency: "High"
    },
    {
      sign: "Pump Is Over 7 Years Old",
      description: "Submersible sump pumps typically last 7-10 years. If yours is approaching that age, replacement before it fails is much better than dealing with a flooded basement.",
      urgency: "Medium"
    }
  ];

  const maintenanceTips = [
    "Test your pump every few months by pouring a bucket of water into the pit",
    "Clean the sump pit of debris, gravel, and dirt annually",
    "Check the discharge line to make sure it is clear and draining away from the foundation",
    "Test your battery backup system at least twice per year",
    "Listen for unusual sounds when the pump runs",
    "Make sure the float switch moves freely without obstruction",
    "Check the check valve to ensure water is not flowing back into the pit",
    "Consider having a professional inspection before spring rain season"
  ];

  return (
    <div>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Sump Pump", href: "/services/sump-pump" }
      ]} />
      <ServiceSchema serviceName="Sump Pump Installation & Repair" serviceDescription="Professional sump pump installation, repair, and replacement services in Pittsburgh PA. Submersible, pedestal, and battery backup systems." serviceUrl="/services/sump-pump" />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/wrench-bg.webp"
            alt="Sump pump installation and repair in Pittsburgh"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Droplets className="h-12 w-12 text-cyan-300 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Sump Pump Services</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Keep your Pittsburgh basement dry with professional sump pump installation, repair, and maintenance. We install submersible, pedestal, and battery backup systems.
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
                Schedule Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pittsburgh Needs Sump Pumps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Why Pittsburgh Homes Need Sump Pumps</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Pittsburgh&apos;s geography and climate make basement water problems extremely common. A properly installed sump pump is not optional for most homes in this area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyPittsburgh.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-3">
                  <item.icon className="h-6 w-6 text-cyan-600 mr-3" />
                  <h3 className="font-bold text-gray-900 text-lg">{item.reason}</h3>
                </div>
                <p className="text-gray-700 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Sump Pumps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Types of Sump Pumps We Install</h2>
          <div className="space-y-8">
            {pumpTypes.map((pump, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-100 p-3 rounded-full mr-4">
                    {index === 0 && <Droplets className="h-7 w-7 text-cyan-600" />}
                    {index === 1 && <Settings className="h-7 w-7 text-cyan-600" />}
                    {index === 2 && <BatteryCharging className="h-7 w-7 text-cyan-600" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{pump.type}</h3>
                    <p className="text-sm text-gray-500">Average lifespan: {pump.lifespan}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{pump.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-green-700 mb-2">Advantages:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {pump.pros.map((pro, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-cyan-50 p-3 rounded border border-cyan-100">
                  <p className="text-sm"><span className="font-semibold text-cyan-700">Best for:</span> <span className="text-gray-700">{pump.bestFor}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Need Service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Signs Your Sump Pump Needs Service</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A sump pump that fails during a storm can mean thousands of dollars in water damage. Watch for these warning signs and address them before the next big rain.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceSigns.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-gray-900">{item.sign}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ml-2 ${
                    item.urgency === 'High' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
                  }`}>
                    {item.urgency}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Sump Pump Installation Process</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { step: "1", title: "Basement Assessment", description: "We evaluate your basement, identify water entry points, check the existing pit (if any), and assess your water volume to recommend the right pump and setup." },
              { step: "2", title: "Pump Selection", description: "Based on the assessment, we recommend the right pump type and size for your home. We always discuss options and pricing before starting work." },
              { step: "3", title: "Pit Preparation", description: "If a sump pit does not exist or is inadequate, we excavate and install a proper pit with a sealed lid to prevent moisture and radon from entering the basement." },
              { step: "4", title: "Pump Installation", description: "We install the pump, connect the discharge line, and route it to drain safely away from your foundation. We include a check valve to prevent backflow." },
              { step: "5", title: "Testing & Walkthrough", description: "We test the system thoroughly, verify the float switch triggers at the right water level, and walk you through how the system works and what to watch for." }
            ].map((item, index) => (
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

      {/* Maintenance Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-blue-50 border border-blue-200 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Sump Pump Maintenance Tips</h2>
            </div>
            <p className="text-gray-700 mb-6">
              A little maintenance goes a long way. These simple checks can prevent your pump from failing when you need it most.
            </p>
            <ul className="space-y-3">
              {maintenanceTips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-cyan-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <CloudRain className="h-16 w-16 mx-auto mb-6 text-cyan-300" />
          <h2 className="text-3xl font-bold mb-4">Sump Pump Failed? Water in the Basement?</h2>
          <p className="text-xl mb-8">
            Do not wait for the water to rise. Call us now and we will get a plumber to your home to stop the flooding and get your pump working again or replaced.
          </p>
          <a
            href={`tel:${globals.business_phone}`}
            className="bg-white text-cyan-900 px-12 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            <Phone className="h-6 w-6 mr-3" />
            Call: {globals.business_phone}
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Keep Your Pittsburgh Basement Dry</h2>
          <p className="text-xl mb-8">
            {globals.business_name} installs and repairs sump pumps throughout the Pittsburgh area. Whether you need a new installation, a replacement, or a battery backup system, we have you covered.
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
            Licensed Plumbers &bull; Battery Backup Systems &bull; Emergency Service &bull; Serving {globals.business_city} &amp; Greater Pittsburgh
          </p>
        </div>
      </section>
    </div>
  );
}
