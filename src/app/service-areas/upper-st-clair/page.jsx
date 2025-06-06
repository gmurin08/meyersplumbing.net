import { Phone, Clock, MapPin, Wrench, Home, Building2 } from 'lucide-react';
import Image from 'next/image';
import CTAButton from '@/components/ui/ctabtn';
import globals from '/globals.json';

export const metadata = {
  title: 'Plumber in Upper St. Clair PA | Matt Meyers Plumbing Services',
  description: 'Professional plumbing services in Upper St. Clair, PA. Emergency plumber serving Upper St. Clair luxury homes and commercial properties.',
  keywords: 'plumber Upper St Clair PA, Upper St Clair plumbing services, emergency plumber Upper St Clair, water heater repair Upper St Clair, luxury home plumbing'
};

export default function UpperStClairServicePage() {
  const neighborhoods = [
    'Upper St. Clair Township', 'Boyce Park', 'Rolling Hills',
    'McLaughlin Run Road', 'Clifton Road', 'Old Clairton Road',
    'Village of Upper St. Clair', 'St. Clair Country Club', 'Peterswood'
  ];

  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Emergency Plumbing',
      description: '24/7 emergency service for Upper St. Clair properties'
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Luxury Home Plumbing',
      description: 'Specialized service for Upper St. Clair\'s upscale homes'
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Commercial Services',
      description: 'Professional plumbing for Upper St. Clair businesses'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80"></div>
        <div className="absolute inset-0 transform-gpu">
          <Image 
            src="/images/hero/wrench-bg.webp" 
            height={1080} 
            width={1920}
            alt="Upper St. Clair plumbing services"
            className="w-full h-full object-cover scale-110 transform-gpu will-change-transform"
          />
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Plumber in Upper St. Clair, PA
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Exceptional plumbing services for Upper St. Clair's luxury homes and businesses. 
              Professional service that matches your community's high standards.
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
              <span className="font-medium">24/7 Emergency Service in Upper St. Clair</span>
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
              Upper St. Clair Plumbing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Upper St. Clair's distinguished community deserves the finest plumbing services. 
              We deliver premium solutions for this exclusive South Hills township.
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
                Upper St. Clair Luxury Plumbing
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Upper St. Clair is home to some of the finest residences in western Pennsylvania. 
                Our plumbing services are designed to meet the exacting standards of this 
                prestigious community, from custom installations to emergency repairs.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  Why Choose Us for Upper St. Clair?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Premium service for luxury homes</li>
                  <li>• Experience with high-end plumbing systems</li>
                  <li>• Discretion and professionalism</li>
                  <li>• Emergency service available 24/7</li>
                  <li>• Licensed and insured in Pennsylvania</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Upper St. Clair Areas We Serve
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {neighborhoods.map((neighborhood, index) => (
                  <div key={index} className="bg-white p-3 rounded shadow-sm border">
                    <span className="text-gray-700 font-medium">{neighborhood}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Serving all of Upper St. Clair Township and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Upper St. Clair Plumbing Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Upper St. Clair Plumbing Specialties
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Custom Installations</h3>
              <p className="text-gray-600">
                Bespoke plumbing installations for Upper St. Clair's luxury homes, 
                including designer fixtures and custom bathroom suites.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Master Suite Plumbing</h3>
              <p className="text-gray-600">
                Specialized plumbing for luxury master bathrooms, including 
                steam showers, jetted tubs, and heated floors.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Pool & Spa Systems</h3>
              <p className="text-gray-600">
                Professional plumbing for pools, spas, and outdoor kitchens 
                that complement Upper St. Clair's luxury lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Plumber in Upper St. Clair?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            For the finest plumbing service in Upper St. Clair, trust our team 
            to deliver the exceptional quality your luxury home deserves.
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