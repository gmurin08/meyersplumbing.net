import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Phone, Clock, MapPin, Wrench, Home, Building2 } from 'lucide-react';
import Image from 'next/image';
import CTAButton from '@/components/ui/ctabtn';
import globals from '/globals.json';

export const metadata = {
  title: 'Plumber in Bethel Park PA | Matt Meyers Plumbing Services',
  description: 'Professional plumbing services in Bethel Park, PA. Emergency plumber serving Bethel Park residential homes and businesses in the South Hills with fast, reliable service.',
  keywords: 'plumber Bethel Park PA, Bethel Park plumbing services, emergency plumber Bethel Park, water heater repair Bethel Park, drain cleaning Bethel Park',
  alternates: {
    canonical: '/service-areas/bethel-park'
  }
};

export default function BethelParkServicePage() {
  const neighborhoods = [
    'Bethel Park Center', 'Village Square', 'Brightwood', 'Maplewood',
    'Library Road Area', 'South Park Road', 'Fort Couch Road', 'Baptist Road',
    'Clifton Road Area', 'Bethel Church Road', 'Logan Road Area'
  ];

  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Emergency Plumbing',
      description: '24/7 emergency service for Bethel Park area residents'
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Residential Services',
      description: 'Complete plumbing solutions for Bethel Park homes'
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Commercial Plumbing',
      description: 'Professional plumbing for Bethel Park businesses'
    }
  ];

  return (
    <div>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Service Areas", href: "/service-areas" },
        { label: "Bethel Park", href: "/service-areas/bethel-park" }
      ]} />
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80"></div>
        <div className="absolute inset-0 transform-gpu">
          <Image
            src="/images/hero/wrench-bg.webp"
            height={1080}
            width={1920}
            alt="Bethel Park plumbing services"
            className="w-full h-full object-cover scale-110 transform-gpu will-change-transform"
          />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Plumber in Bethel Park, PA
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Trusted plumbing services for Bethel Park and the South Hills.
              Fast response times and quality workmanship for your home or business.
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
              <span className="font-medium">24/7 Emergency Service in Bethel Park</span>
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
              Bethel Park Plumbing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As one of the largest communities in the South Hills, Bethel Park is home
              to thousands of families. We deliver professional plumbing services
              tailored to this thriving suburban community.
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
                Local Bethel Park Plumbers
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Bethel Park's sprawling residential neighborhoods include homes from
                the mid-20th century through brand new construction. Whether you live
                near Village Square or along Library Road, our team knows the plumbing
                systems common to this area.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  Why Choose Us for Bethel Park?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Local plumbers who know Bethel Park well</li>
                  <li>• Quick response across all neighborhoods</li>
                  <li>• Experience with South Hills homes</li>
                  <li>• Emergency service available 24/7</li>
                  <li>• Licensed and insured in Pennsylvania</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Bethel Park Areas We Serve
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {neighborhoods.map((neighborhood, index) => (
                  <div key={index} className="bg-white p-3 rounded shadow-sm border">
                    <span className="text-gray-700 font-medium">{neighborhood}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Serving all of Bethel Park and neighboring South Hills communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Bethel Park Plumbing Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Bethel Park Plumbing Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Suburban Home Systems</h3>
              <p className="text-gray-600">
                Bethel Park's mid-century ranch homes and split-levels often need
                plumbing updates. We modernize systems while keeping your home
                comfortable and efficient.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Basement Waterproofing</h3>
              <p className="text-gray-600">
                South Hills topography means many Bethel Park homes deal with
                basement moisture. We install sump pumps and drainage solutions
                to keep your basement dry.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Water Heater Upgrades</h3>
              <p className="text-gray-600">
                Upgrading aging water heaters in Bethel Park homes with energy-efficient
                tank or tankless systems for reliable hot water year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Plumber in Bethel Park?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            For reliable plumbing service in Bethel Park, trust our experienced
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
