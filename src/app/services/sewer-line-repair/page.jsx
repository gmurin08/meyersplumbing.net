import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { AlertTriangle, CheckCircle, Clock, Shield, Wrench, Phone, TreePine, Camera, Shovel, ArrowDownUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceSchema from '@/components/seo/ServiceSchema';
import globals from '/globals.json';

export const metadata = {
  title: 'Sewer Line Repair Pittsburgh PA | Trenchless Options',
  description: 'Professional sewer line repair and replacement in Pittsburgh PA. Trenchless sewer repair, camera inspections, tree root removal. Licensed plumbers serving Oakdale, Moon Township & surrounding areas.',
  keywords: 'sewer line repair Pittsburgh, sewer backup repair, sewer line replacement cost Pittsburgh, trenchless sewer repair PA, sewer camera inspection Pittsburgh',
  openGraph: {
    title: 'Sewer Line Repair Pittsburgh PA | Trenchless Options',
    description: 'Professional sewer line repair and replacement in Pittsburgh PA. Trenchless options, camera inspections, and expert diagnostics.',
    url: 'https://meyersplumbing.net/services/sewer-line-repair',
  },
  alternates: {
    canonical: '/services/sewer-line-repair'
  }
};

export default function SewerLineRepairPage() {
  const warningSignals = [
    {
      sign: "Multiple Slow Drains",
      description: "When more than one drain in your home is slow at the same time, the problem is likely in your main sewer line, not an individual fixture.",
      urgency: "High"
    },
    {
      sign: "Sewage Smell in the Home or Yard",
      description: "If you smell raw sewage inside your house or in the yard, you may have a cracked or broken sewer pipe allowing gases to escape.",
      urgency: "High"
    },
    {
      sign: "Soggy Spots in the Yard",
      description: "Unexplained wet or lush patches of grass, especially in a line running toward the street, often indicate a leaking sewer pipe underground.",
      urgency: "Medium"
    },
    {
      sign: "Sewage Backups",
      description: "If sewage is coming up through floor drains, tubs, or toilets, your sewer line is blocked or collapsed. This is a health hazard and needs immediate attention.",
      urgency: "Critical"
    },
    {
      sign: "Foundation Cracks or Settling",
      description: "A leaking sewer line can erode soil under your foundation, causing cracks and settling. This is especially common in Pittsburgh homes built on hillsides.",
      urgency: "High"
    },
    {
      sign: "Rodent or Insect Problems",
      description: "Rats, cockroaches, and drain flies can enter your home through breaks in the sewer line. A sudden pest problem may actually be a plumbing problem.",
      urgency: "Medium"
    }
  ];

  const repairMethods = [
    {
      method: "Trenchless Pipe Lining (CIPP)",
      icon: ArrowDownUp,
      description: "We insert a resin-coated liner into the damaged pipe and inflate it. The liner cures and hardens, creating a new pipe inside the old one.",
      pros: ["Minimal digging required", "Saves your landscaping, driveway, and sidewalk", "Completed in one day in most cases", "Creates a seamless, jointless pipe"],
      bestFor: "Pipes with cracks, small breaks, or root intrusion that are still structurally intact"
    },
    {
      method: "Pipe Bursting",
      icon: Wrench,
      description: "A bursting head is pulled through the old pipe, breaking it apart while simultaneously pulling a new pipe into place behind it.",
      pros: ["Minimal excavation needed", "Installs a completely new pipe", "Works even on collapsed or severely damaged lines", "Increases pipe diameter if needed"],
      bestFor: "Severely damaged or collapsed pipes that cannot be lined"
    },
    {
      method: "Traditional Excavation",
      icon: Shovel,
      description: "For some situations, traditional dig-and-replace is still the best option. We excavate, remove the damaged pipe, and install a brand new line.",
      pros: ["Complete visual inspection of the pipe and surrounding soil", "Can address bellied pipes and complex damage", "Sometimes the most cost-effective option", "Allows for rerouting if needed"],
      bestFor: "Bellied pipes, multiple points of damage, or situations where access points are limited"
    }
  ];

  const pittsburghCauses = [
    {
      cause: "Tree Root Intrusion",
      icon: TreePine,
      detail: "Pittsburgh is full of mature trees. Their roots seek out moisture and can grow into sewer pipe joints, eventually cracking and blocking the line. This is the most common sewer problem we see."
    },
    {
      cause: "Aging Clay and Cast Iron Pipes",
      icon: Clock,
      detail: "Many Pittsburgh homes built before the 1970s still have original clay tile or cast iron sewer lines. These materials deteriorate over time, cracking and crumbling after 50-60 years of use."
    },
    {
      cause: "Ground Settling and Shifting",
      icon: AlertTriangle,
      detail: "Pittsburgh is built on hills and valleys. The hilly terrain and varied soil conditions cause ground movement over time, which can shift, belly, or crack underground sewer pipes."
    },
    {
      cause: "Freeze-Thaw Cycles",
      icon: Shield,
      detail: "Western Pennsylvania winters bring repeated freezing and thawing. This cycle causes soil to expand and contract, putting stress on underground pipes and worsening existing cracks."
    }
  ];

  return (
    <div>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Sewer Line Repair", href: "/services/sewer-line-repair" }
      ]} />
      <ServiceSchema serviceName="Sewer Line Repair" serviceDescription="Professional sewer line repair and replacement in Pittsburgh PA. Trenchless options, camera inspections, and expert diagnostics for residential and commercial properties." serviceUrl="/services/sewer-line-repair" />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/wrench-bg.webp"
            alt="Sewer line repair service in Pittsburgh"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Wrench className="h-12 w-12 text-cyan-300 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Sewer Line Repair</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Sewer backup? Slow drains? Sewage smell? We diagnose and repair sewer line problems throughout Pittsburgh with trenchless and traditional methods.
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
                Schedule an Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Signs You Have a Sewer Line Problem</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Sewer problems do not fix themselves. The longer you wait, the worse it gets. If you notice any of these warning signs, call us for a camera inspection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSignals.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">{item.sign}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ml-2 ${
                    item.urgency === 'Critical' ? 'bg-red-100 text-red-800' :
                    item.urgency === 'High' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
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

      {/* Camera Inspection */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Camera className="h-10 w-10 text-cyan-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Sewer Camera Inspection</h2>
            </div>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              We never guess about sewer problems. Before recommending any repair, we run a high-definition camera through your sewer line to see exactly what is going on.
            </p>
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-4">What the Camera Shows Us</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Exact location and depth of the problem</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Tree root intrusion and severity</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Cracks, breaks, and pipe collapse</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Bellied or misaligned pipe sections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Grease buildup and blockages</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-4">Why It Matters</h3>
                  <p className="text-gray-700 mb-4">
                    A camera inspection eliminates guesswork. You will see exactly what we see, and we will explain your options clearly. No one should agree to dig up their yard based on a guess.
                  </p>
                  <p className="text-gray-700">
                    We also recommend camera inspections before buying an older Pittsburgh home. Many homes in neighborhoods like Mt. Lebanon, Dormont, and Brookline still have original sewer lines that may be nearing the end of their life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Sewer Line Repair Methods</h2>
          <div className="space-y-8">
            {repairMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-100 p-3 rounded-full mr-4">
                    <method.icon className="h-7 w-7 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{method.method}</h3>
                    <p className="text-sm text-gray-500">Best for: {method.bestFor}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{method.description}</p>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Advantages:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {method.pros.map((pro, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pittsburgh-Specific Causes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Why Pittsburgh Homes Are Prone to Sewer Problems</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The Pittsburgh area presents unique challenges for underground sewer lines. Understanding these factors helps you know when to get your line inspected.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pittsburghCauses.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-3">
                  <item.icon className="h-6 w-6 text-cyan-600 mr-3" />
                  <h3 className="font-bold text-gray-900 text-lg">{item.cause}</h3>
                </div>
                <p className="text-gray-700 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AlertTriangle className="h-16 w-16 mx-auto mb-6 text-red-200" />
          <h2 className="text-3xl font-bold mb-4">Sewage Backup? Call Now.</h2>
          <p className="text-xl mb-8">
            A sewer backup is a health hazard. Do not wait. Call us immediately and we will dispatch a plumber to your home to stop the backup and start the repair process.
          </p>
          <a
            href={`tel:${globals.business_phone}`}
            className="bg-white text-red-800 px-12 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            <Phone className="h-6 w-6 mr-3" />
            Emergency: {globals.business_phone}
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Expert Sewer Line Repair in Pittsburgh</h2>
          <p className="text-xl mb-8">
            {globals.business_name} provides honest diagnostics and quality sewer line repair throughout the Pittsburgh area. We will show you exactly what is wrong and give you clear options, never pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/contact"
              className="bg-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
              style={{ color: globals.primary_color }}
            >
              Schedule an Inspection
            </Link>
            <a
              href={`tel:${globals.business_phone}`}
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-cyan-400 transition-colors"
            >
              Call: {globals.business_phone}
            </a>
          </div>
          <p className="text-sm opacity-90">
            Licensed Plumbers &bull; Camera Inspections &bull; Trenchless Options &bull; Serving {globals.business_city} &amp; Greater Pittsburgh
          </p>
        </div>
      </section>
    </div>
  );
}
