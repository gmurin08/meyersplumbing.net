import { Phone, Clock, MapPin, Wrench, Home, Building2 } from 'lucide-react';
import Image from 'next/image';
import CTAButton from '@/components/ui/ctabtn';
import globals from '/globals.json';

export const metadata = {
  title: 'Plumber in Sewickley PA | Matt Meyers Plumbing Services',
  description: 'Professional plumbing services in Sewickley, PA. Emergency plumber serving historic Sewickley homes and businesses along the Ohio River.',
  keywords: 'plumber Sewickley PA, Sewickley plumbing services, emergency plumber Sewickley, water heater repair Sewickley, drain cleaning Sewickley'
};

export default function SewickleyServicePage() {
  const neighborhoods = [
    'Sewickley Heights', 'Edgeworth', 'Glen Osborne', 'Sewickley Hills',
    'Haysville', 'Fair Oaks', 'Backbone', 'Little Sewickley Creek',
    'Ohio River Boulevard', 'Broad Street', 'Beaver Street'
  ];

  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Emergency Plumbing',
      description: '24/7 emergency service for Sewickley area properties'
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Historic Home Plumbing',
      description: 'Specialized service for Sewickley\'s historic homes'
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Commercial Services',
      description: 'Professional plumbing for Sewickley businesses'
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
            alt="Sewickley plumbing services"
            className="w-full h-full object-cover scale-110 transform-gpu will-change-transform"
          />
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Plumber in Sewickley, PA
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Expert plumbing services for Sewickley's historic community along the Ohio River. 
              Specializing in both classic and modern plumbing systems.
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
              <span className="font-medium">24/7 Emergency Service in Sewickley</span>
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
              Sewickley Plumbing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sewickley's charming historic homes and tree-lined streets deserve plumbing 
              services that respect the community's character while providing modern reliability.
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
                Historic Sewickley Plumbing Specialists
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Sewickley's historic homes require plumbers who understand both heritage 
                preservation and modern convenience. Our team respects the character of 
                this Ohio River community while ensuring reliable plumbing systems.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  Why Choose Us for Sewickley?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Experience with historic home plumbing</li>
                  <li>• Respectful approach to heritage properties</li>
                  <li>• Knowledge of Sewickley's unique challenges</li>
                  <li>• Emergency service available 24/7</li>
                  <li>• Licensed and insured in Pennsylvania</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Sewickley Areas We Serve
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {neighborhoods.map((neighborhood, index) => (
                  <div key={index} className="bg-white p-3 rounded shadow-sm border">
                    <span className="text-gray-700 font-medium">{neighborhood}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Serving Sewickley and the surrounding Ohio River communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Sewickley Plumbing Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Sewickley Plumbing Specialties
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Historic Home Updates</h3>
              <p className="text-gray-600">
                Carefully updating plumbing in Sewickley's historic homes while 
                preserving their character and meeting modern needs.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Pipe Restoration</h3>
              <p className="text-gray-600">
                Restoring and replacing aging pipes in older Sewickley homes, 
                often working with galvanized and cast iron systems.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Basement Solutions</h3>
              <p className="text-gray-600">
                Addressing basement plumbing challenges common in Sewickley's 
                river valley location, including drainage and sump pumps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Plumber in Sewickley?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Trust your Sewickley home to plumbers who understand and respect 
            the community's historic character while providing modern reliability.
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