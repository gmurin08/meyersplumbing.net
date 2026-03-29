import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Droplets, Search, AlertTriangle, CheckCircle, Clock, Shield, Wrench, Phone, DollarSign, Ear, Thermometer } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceSchema from '@/components/seo/ServiceSchema';
import globals from '/globals.json';

export const metadata = {
  title: 'Leak Detection Pittsburgh PA | Find & Fix Hidden Leaks',
  description: 'Professional leak detection services in Pittsburgh PA. Find hidden water leaks with advanced technology. Slab leaks, pipe leaks, fixture leaks. Licensed plumbers serving Oakdale, Moon Township & surrounding areas.',
  keywords: 'leak detection Pittsburgh, water leak repair, hidden pipe leak Pittsburgh, slab leak detection PA, water leak finding service Pittsburgh',
  openGraph: {
    title: 'Leak Detection Pittsburgh PA | Find & Fix Hidden Leaks',
    description: 'Professional leak detection services in Pittsburgh PA. Advanced technology to find and fix hidden water leaks fast.',
    url: 'https://meyersplumbing.net/services/leak-detection',
  },
  alternates: {
    canonical: '/services/leak-detection'
  }
};

export default function LeakDetectionPage() {
  const leakSigns = [
    {
      sign: "Unexplained High Water Bills",
      icon: DollarSign,
      description: "If your water bill jumped but your usage has not changed, there is likely a hidden leak somewhere in your system. Even a small drip can waste thousands of gallons per month."
    },
    {
      sign: "Water Stains on Walls or Ceilings",
      icon: Droplets,
      description: "Yellow or brown stains appearing on drywall, ceilings, or around baseboards usually mean water is leaking behind the wall. The stain you see is often just a fraction of the damage."
    },
    {
      sign: "Mold or Mildew Growth",
      icon: AlertTriangle,
      description: "Mold needs moisture. If you see mold in unusual places, especially away from bathrooms and kitchens, a hidden leak may be feeding it. This is a health concern for your family."
    },
    {
      sign: "Sound of Running Water",
      icon: Ear,
      description: "If you hear water running when nothing is turned on, you have a leak. Check your water meter. If it is still spinning with everything off, you have a confirmed leak."
    },
    {
      sign: "Warm Spots on the Floor",
      icon: Thermometer,
      description: "A warm area on a concrete slab floor can indicate a hot water line leak beneath the slab. This is common in Pittsburgh homes with slab-on-grade construction."
    },
    {
      sign: "Low Water Pressure",
      icon: Wrench,
      description: "A sudden drop in water pressure often means water is escaping the system before it reaches your fixtures. This is especially noticeable if it affects the whole house."
    }
  ];

  const detectionMethods = [
    {
      method: "Acoustic Leak Detection",
      icon: Ear,
      description: "We use sensitive electronic listening devices that amplify the sound of water escaping from pipes. This lets us pinpoint leaks behind walls, under slabs, and underground without tearing anything apart.",
      accuracy: "Can locate leaks within inches through concrete, soil, and walls"
    },
    {
      method: "Thermal Imaging",
      icon: Thermometer,
      description: "Infrared cameras detect temperature differences caused by water. Hot water leaks, cold water leaks, and moisture behind walls all show up clearly on thermal imaging, even when they are invisible to the naked eye.",
      accuracy: "Identifies moisture patterns behind walls and under floors non-invasively"
    },
    {
      method: "Video Camera Inspection",
      icon: Search,
      description: "For leaks in drain lines and sewer pipes, we insert a waterproof camera to visually inspect the interior of the pipe. This shows us cracks, breaks, joint failures, and corrosion firsthand.",
      accuracy: "Provides a clear visual of pipe condition and exact damage location"
    }
  ];

  const leakTypes = [
    {
      type: "Slab Leaks",
      description: "Water or sewer lines running under your concrete slab floor can develop leaks from corrosion, ground movement, or poor original installation. Slab leaks are invisible but cause serious damage if left unaddressed.",
      signs: "Warm spots on floor, sound of running water, cracked foundation, high water bills"
    },
    {
      type: "Pipe Leaks Behind Walls",
      description: "Copper, galvanized, and PEX pipes inside walls can leak from corrosion, joint failure, or freeze damage. Pittsburgh winters are especially hard on pipes in exterior walls and unheated spaces.",
      signs: "Water stains, bubbling paint, mold growth, musty smell in specific rooms"
    },
    {
      type: "Fixture Leaks",
      description: "Faucets, toilets, showerheads, and supply lines can develop slow leaks at connections and seals. While often minor individually, these can waste significant water and cause hidden damage.",
      signs: "Dripping sounds, water around the base of fixtures, loose or rocking toilet"
    },
    {
      type: "Underground Water Line Leaks",
      description: "The main water supply line from the street to your home runs underground and can crack or corrode over time. Many Pittsburgh homes still have original lead or galvanized supply lines.",
      signs: "Wet spots in the yard, loss of water pressure, muddy water, unusually green patches of grass"
    }
  ];

  return (
    <div>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Leak Detection", href: "/services/leak-detection" }
      ]} />
      <ServiceSchema serviceName="Leak Detection" serviceDescription="Professional leak detection services in Pittsburgh PA. Advanced acoustic, thermal, and camera technology to find and fix hidden water leaks." serviceUrl="/services/leak-detection" />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/wrench-bg.webp"
            alt="Leak detection service in Pittsburgh"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Search className="h-12 w-12 text-cyan-300 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Leak Detection</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Hidden leaks waste water, damage your home, and cost you money every day they go undetected. Our advanced technology finds leaks fast so we can fix them before the damage spreads.
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
                Schedule Detection Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Signs of Hidden Leaks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Signs You May Have a Hidden Leak</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Most leaks are not obvious. They hide behind walls, under floors, and underground. Here is how to tell if you might have one.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leakSigns.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-3">
                  <item.icon className="h-6 w-6 text-cyan-600 mr-2" />
                  <h3 className="font-bold text-gray-900">{item.sign}</h3>
                </div>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detection Technology */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">How We Find Hidden Leaks</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We do not tear apart your home looking for leaks. Our advanced technology lets us find the exact source of a leak with minimal disruption to your walls, floors, and landscaping.
          </p>
          <div className="space-y-8 max-w-4xl mx-auto">
            {detectionMethods.map((item, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-100 p-3 rounded-full mr-4">
                    <item.icon className="h-7 w-7 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.method}</h3>
                </div>
                <p className="text-gray-700 mb-3">{item.description}</p>
                <p className="text-sm text-cyan-700 font-medium">{item.accuracy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Leaks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Types of Leaks We Find and Fix</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leakTypes.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 text-xl mb-3">{item.type}</h3>
                <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                <div className="bg-white p-3 rounded border border-gray-100">
                  <p className="text-sm"><span className="font-semibold text-cyan-700">Watch for:</span> <span className="text-gray-600">{item.signs}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Early Detection Saves Money */}
      <section className="py-16 bg-cyan-800 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <DollarSign className="h-12 w-12 mx-auto mb-4 text-cyan-300" />
            <h2 className="text-3xl font-bold mb-4">Why Early Leak Detection Saves You Money</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-cyan-200">Water Bill Savings</h3>
              <p className="text-cyan-100">
                A leak the width of a pencil tip can waste over 900 gallons per month. Finding and fixing it immediately saves you money on every water bill going forward.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-cyan-200">Prevent Structural Damage</h3>
              <p className="text-cyan-100">
                Water behind walls rots framing, destroys drywall, and weakens your home. A leak that costs a few hundred to fix today can cause thousands in structural damage tomorrow.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-cyan-200">Avoid Mold Remediation</h3>
              <p className="text-cyan-100">
                Mold can grow within 24-48 hours of water exposure. Professional mold remediation can cost $1,000-$10,000 or more. Fixing the leak early prevents this entirely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Check */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick DIY Leak Check: Read Your Water Meter</h2>
            <p className="text-gray-700 mb-6">
              Before calling us, you can confirm whether you have a leak with this simple test:
            </p>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-cyan-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold flex-shrink-0 mr-3 text-sm">1</span>
                <span className="text-gray-700">Turn off every faucet, appliance, and fixture that uses water in your home.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-cyan-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold flex-shrink-0 mr-3 text-sm">2</span>
                <span className="text-gray-700">Find your water meter (usually near the street or sidewalk) and check the flow indicator or read the numbers.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-cyan-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold flex-shrink-0 mr-3 text-sm">3</span>
                <span className="text-gray-700">Wait 15-30 minutes without using any water.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-cyan-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold flex-shrink-0 mr-3 text-sm">4</span>
                <span className="text-gray-700">Check the meter again. If it has moved, you have a leak somewhere in your system. Give us a call.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stop Hidden Leaks Before They Stop You</h2>
          <p className="text-xl mb-8">
            {globals.business_name} uses professional-grade detection technology to find leaks fast and fix them right. Serving Pittsburgh, {globals.business_city}, and all surrounding communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/contact"
              className="bg-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
              style={{ color: globals.primary_color }}
            >
              Schedule Leak Detection
            </Link>
            <a
              href={`tel:${globals.business_phone}`}
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-cyan-400 transition-colors"
            >
              Call: {globals.business_phone}
            </a>
          </div>
          <p className="text-sm opacity-90">
            Licensed Plumbers &bull; Advanced Technology &bull; Non-Invasive Detection &bull; Serving {globals.business_city} &amp; Greater Pittsburgh
          </p>
        </div>
      </section>
    </div>
  );
}
