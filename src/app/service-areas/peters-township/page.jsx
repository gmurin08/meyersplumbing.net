import { Phone, Clock, MapPin, Wrench, Home, Building2 } from 'lucide-react';
import Image from 'next/image';
import CTAButton from '@/components/ui/ctabtn';
import globals from '/globals.json';

export const metadata = {
  title: 'Plumber in Peters Township PA | Matt Meyers Plumbing Services',
  description: 'Professional plumbing services in Peters Township, PA. Emergency plumber serving Peters Township luxury homes and commercial properties in the South Hills.',
  keywords: 'plumber Peters Township PA, Peters Township plumbing services, emergency plumber Peters Township, water heater repair Peters Township, luxury home plumbing Peters Township'
};

export default function PetersTownshipServicePage() {
  const neighborhoods = [
    'Peters Township', 'McMurray', 'Venetia', 'Peters Creek',
    'Brush Run', 'Rolling Hills', 'Country Club of the South',
    'Peterswood', 'Donegal Township', 'Washington County Line'
  ];

  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Emergency Plumbing',
      description: '24/7 emergency service for Peters Township properties'
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Luxury Home Plumbing',
      description: 'Specialized service for Peters Township\'s upscale homes'
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Commercial Services',
      description: 'Professional plumbing for Peters Township businesses'
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
            alt="Peters Township plumbing services"
            className="w-full h-full object-cover scale-110 transform-gpu will-change-transform"
          />
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Plumber in Peters Township, PA
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Premium plumbing services for Peters Township's distinguished South Hills community. 
              Expert solutions for luxury homes and commercial properties.
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
              <span className="font-medium">24/7 Emergency Service in Peters Township</span>
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
              Peters Township Plumbing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Peters Township's reputation for excellence extends to every aspect of community life. 
              Our plumbing services maintain that same standard of quality for this premier South Hills location.
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
                Peters Township Luxury Plumbing
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Peters Township is renowned for its beautiful homes, excellent schools, and 
                high quality of life. Our plumbing services reflect these same values, 
                delivering exceptional quality and reliability for this distinguished community.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  Why Choose Us for Peters Township?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Premium service for luxury South Hills homes</li>
                  <li>• Experience with high-end plumbing systems</li>
                  <li>• Commitment to Peters Township's quality standards</li>
                  <li>• Emergency service available 24/7</li>
                  <li>• Licensed and insured in Pennsylvania</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Peters Township Areas We Serve
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {neighborhoods.map((neighborhood, index) => (
                  <div key={index} className="bg-white p-3 rounded shadow-sm border">
                    <span className="text-gray-700 font-medium">{neighborhood}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Serving all of Peters Township and the greater McMurray area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Peters Township Plumbing Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Peters Township Plumbing Specialties
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Estate Home Plumbing</h3>
              <p className="text-gray-600">
                Comprehensive plumbing solutions for Peters Township's large estate homes, 
                including multiple bathrooms, gourmet kitchens, and luxury amenities.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Custom Installations</h3>
              <p className="text-gray-600">
                High-end fixture installations and custom plumbing design for 
                Peters Township's sophisticated homeowners and their unique requirements.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Water Quality Systems</h3>
              <p className="text-gray-600">
                Advanced water treatment and filtration systems that ensure the 
                highest water quality for Peters Township's discerning residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Plumber in Peters Township?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            For exceptional plumbing service that matches Peters Township's high standards, 
            trust our experienced team to deliver the quality your luxury home deserves.
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