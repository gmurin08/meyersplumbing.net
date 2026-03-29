import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Phone, Clock, MapPin, Wrench, Home, Building2 } from 'lucide-react';
import Image from 'next/image';
import CTAButton from '@/components/ui/ctabtn';
import globals from '/globals.json';

export const metadata = {
  title: 'Plumber in Dormont PA | Matt Meyers Plumbing Services',
  description: 'Professional plumbing services in Dormont, PA. Emergency plumber serving Dormont\'s historic homes and businesses with fast, reliable service for aging plumbing systems.',
  keywords: 'plumber Dormont PA, Dormont plumbing services, emergency plumber Dormont, water heater repair Dormont, drain cleaning Dormont, old home plumbing Dormont',
  alternates: {
    canonical: '/service-areas/dormont'
  }
};

export default function DormontServicePage() {
  const neighborhoods = [
    'Dormont Borough', 'Potomac Avenue', 'Broadway Avenue', 'Hollywood Area',
    'Dormont Junction', 'Wisconsin Avenue', 'Annapolis Avenue', 'Kelton Avenue',
    'West Liberty Avenue', 'Dormont Pool Area', 'McFarland Road Area'
  ];

  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Emergency Plumbing',
      description: '24/7 emergency service for Dormont area residents'
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Residential Services',
      description: 'Complete plumbing solutions for Dormont homes'
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Commercial Plumbing',
      description: 'Professional plumbing for Dormont businesses'
    }
  ];

  return (
    <div>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Service Areas", href: "/service-areas" },
        { label: "Dormont", href: "/service-areas/dormont" }
      ]} />
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80"></div>
        <div className="absolute inset-0 transform-gpu">
          <Image
            src="/images/hero/wrench-bg.webp"
            height={1080}
            width={1920}
            alt="Dormont plumbing services"
            className="w-full h-full object-cover scale-110 transform-gpu will-change-transform"
          />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Plumber in Dormont, PA
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Trusted plumbing services for Dormont borough. Specialists in older
              home plumbing with fast response and quality workmanship.
            </p>
            <div className="flex justify-center">
              <CTAButton />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Clock className="h-5 w-5" />
              <span className="font-medium">24/7 Emergency Service in Dormont</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5" />
              <a href={`tel:${globals.business_phone}`} className="font-bold text-lg hover:text-red-200">
                {globals.business_phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Dormont Plumbing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dormont is a beloved historic streetcar suburb with charming older homes
              that often come with aging plumbing. Our team specializes in working with
              these classic systems to keep your home running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Area Focus */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Local Dormont Plumbers
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Dormont's tree-lined streets are filled with early 1900s homes that
                feature original cast iron drain lines, galvanized supply pipes, and
                clay sewer laterals. Our plumbers have deep experience navigating
                these older systems without unnecessary damage.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  Why Choose Us for Dormont?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Specialists in older home plumbing</li>
                  <li>• Quick response throughout the borough</li>
                  <li>• Experience with cast iron and galvanized pipes</li>
                  <li>• Emergency service available 24/7</li>
                  <li>• Licensed and insured in Pennsylvania</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Dormont Areas We Serve
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {neighborhoods.map((neighborhood, index) => (
                  <div key={index} className="bg-white p-3 rounded shadow-sm border">
                    <span className="text-gray-700 font-medium">{neighborhood}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Serving all of Dormont borough and neighboring communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Dormont Plumbing Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Dormont Plumbing Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Aging Pipe Replacement</h3>
              <p className="text-gray-600">
                Dormont's early 1900s homes often have original galvanized or lead
                pipes. We carefully replace these with modern copper or PEX piping
                while respecting your home's structure.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Sewer Line Service</h3>
              <p className="text-gray-600">
                Older clay sewer laterals in Dormont are prone to root intrusion and
                collapse. We provide camera inspections, cleaning, and trenchless
                replacement options.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Drain Cleaning</h3>
              <p className="text-gray-600">
                Cast iron drain lines in older Dormont homes can develop buildup and
                blockages over time. Our professional drain cleaning keeps your
                plumbing flowing freely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Plumber in Dormont?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            For reliable plumbing service in Dormont borough, trust our experienced
            team to handle all your residential and commercial plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${globals.business_phone}`}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Call Now: {globals.business_phone}
            </a>
            <div className="flex justify-center">
              <CTAButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
