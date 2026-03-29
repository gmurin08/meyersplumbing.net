import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Phone, Clock, MapPin, Wrench, Home, Building2 } from 'lucide-react';
import Image from 'next/image';
import CTAButton from '@/components/ui/ctabtn';
import globals from '/globals.json';

export const metadata = {
  title: 'Plumber in Imperial PA | Matt Meyers Plumbing Services',
  description: 'Professional plumbing services in Imperial, PA and North Fayette Township. Emergency plumber near Oakdale serving residential properties with fast, reliable service.',
  keywords: 'plumber Imperial PA, Imperial plumbing services, emergency plumber Imperial, North Fayette Township plumber, water heater repair Imperial, drain cleaning Imperial',
  alternates: {
    canonical: '/service-areas/imperial'
  }
};

export default function ImperialServicePage() {
  const neighborhoods = [
    'Imperial', 'North Fayette Township', 'Donaldson Crossroads', 'Hankey Farms',
    'North Branch', 'Santiago Road Area', 'Steubenville Pike', 'Oakdale Border',
    'Noblestown Road Area', 'Valley Brook Road', 'Cliff Mine Road Area'
  ];

  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Emergency Plumbing',
      description: '24/7 emergency service for Imperial area residents'
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Residential Services',
      description: 'Complete plumbing solutions for Imperial homes'
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Commercial Plumbing',
      description: 'Professional plumbing for Imperial businesses'
    }
  ];

  return (
    <div>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Service Areas", href: "/service-areas" },
        { label: "Imperial", href: "/service-areas/imperial" }
      ]} />
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80"></div>
        <div className="absolute inset-0 transform-gpu">
          <Image
            src="/images/hero/wrench-bg.webp"
            height={1080}
            width={1920}
            alt="Imperial plumbing services"
            className="w-full h-full object-cover scale-110 transform-gpu will-change-transform"
          />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Plumber in Imperial, PA
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Trusted plumbing services for Imperial and North Fayette Township.
              Your nearby neighbor from Oakdale with fast response and quality work.
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
              <span className="font-medium">24/7 Emergency Service in Imperial</span>
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
              Imperial Plumbing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Imperial and North Fayette Township are right in our backyard. As your
              neighbors based in Oakdale, we provide the fastest response times and
              most reliable plumbing service in the area.
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
                Local Imperial Plumbers
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The Imperial area has seen steady growth in North Fayette Township,
                with new housing developments alongside established rural properties.
                Whether you have a newer home in Hankey Farms or an older farmstead,
                we handle it all, including well pump and septic-connected systems.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  Why Choose Us for Imperial?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Based in nearby Oakdale for fast response</li>
                  <li>• Experience with rural and suburban homes</li>
                  <li>• Well pump and septic system knowledge</li>
                  <li>• Emergency service available 24/7</li>
                  <li>• Licensed and insured in Pennsylvania</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Imperial Areas We Serve
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {neighborhoods.map((neighborhood, index) => (
                  <div key={index} className="bg-white p-3 rounded shadow-sm border">
                    <span className="text-gray-700 font-medium">{neighborhood}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Serving all of Imperial, North Fayette Township, and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Imperial Plumbing Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Imperial Plumbing Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Well & Pump Systems</h3>
              <p className="text-gray-600">
                Many Imperial properties rely on private wells. We service well
                pumps, pressure tanks, and water treatment systems to keep your
                water supply reliable and clean.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">New Construction</h3>
              <p className="text-gray-600">
                With North Fayette Township growing rapidly, we provide plumbing
                installation for new homes and renovations throughout the
                Imperial area.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Water Line Service</h3>
              <p className="text-gray-600">
                From rural water line connections to municipal supply repairs, we
                handle all water line work for Imperial and North Fayette Township
                properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Plumber in Imperial?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            For reliable plumbing service in Imperial and North Fayette Township,
            trust your Oakdale neighbors to handle all your plumbing needs.
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
