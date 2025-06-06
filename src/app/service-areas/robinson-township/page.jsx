import { Phone, Clock, MapPin, Wrench, Home, Building2 } from 'lucide-react';
import Image from 'next/image';
import CTAButton from '@/components/ui/ctabtn';
import globals from '/globals.json';

export const metadata = {
  title: 'Plumber in Robinson Township PA | Matt Meyers Plumbing Services',
  description: 'Professional plumbing services in Robinson Township, PA. Emergency plumber serving Robinson Township residential and commercial properties.',
  keywords: 'plumber Robinson Township PA, Robinson Township plumbing services, emergency plumber Robinson Township, water heater repair Robinson Township, drain cleaning Robinson Township'
};

export default function RobinsonTownshipServicePage() {
  const neighborhoods = [
    'Robinson Town Centre', 'Settlers Ridge', 'Village of Pine',
    'Thornburg', 'Cross Creek', 'Valley Brook Farms', 'Parkway West',
    'McDonald Pike', 'Campbells Run', 'Beaver Grade Road'
  ];

  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Emergency Plumbing',
      description: '24/7 emergency service for Robinson Township properties'
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Residential Services',
      description: 'Complete plumbing solutions for Robinson Township homes'
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Commercial Plumbing',
      description: 'Professional plumbing for Robinson Township businesses'
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
            alt="Robinson Township plumbing services"
            className="w-full h-full object-cover scale-110 transform-gpu will-change-transform"
          />
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Plumber in Robinson Township, PA
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Expert plumbing services for Robinson Township's growing community. 
              Serving Settlers Ridge, Robinson Town Centre, and all surrounding areas.
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
              <span className="font-medium">24/7 Emergency Service in Robinson Township</span>
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
              Robinson Township Plumbing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As one of the fastest-growing areas in western Pennsylvania, Robinson Township 
              needs reliable plumbing services for both new and established properties.
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
                Robinson Township Plumbing Experts
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Robinson Township's modern developments and shopping centers require 
                experienced plumbers who understand both residential and commercial needs. 
                We've been serving this community through its remarkable growth.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  Why Choose Us for Robinson Township?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Familiar with Robinson Township's modern infrastructure</li>
                  <li>• Quick response to Settlers Ridge and Town Centre</li>
                  <li>• Experience with new construction plumbing</li>
                  <li>• Emergency service available 24/7</li>
                  <li>• Licensed and insured in Pennsylvania</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Robinson Township Areas We Serve
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {neighborhoods.map((neighborhood, index) => (
                  <div key={index} className="bg-white p-3 rounded shadow-sm border">
                    <span className="text-gray-700 font-medium">{neighborhood}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Serving all of Robinson Township's residential and commercial areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Robinson Township Plumbing Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Robinson Township Plumbing Specialties
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">New Home Plumbing</h3>
              <p className="text-gray-600">
                With ongoing development in Robinson Township, we provide complete 
                plumbing installation for new homes and townhouses.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Commercial Services</h3>
              <p className="text-gray-600">
                From retail shops at Robinson Town Centre to office buildings, 
                we handle all commercial plumbing needs in the township.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Modern Fixtures</h3>
              <p className="text-gray-600">
                We install and service the latest plumbing fixtures and technologies 
                that match Robinson Township's modern lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Plumber in Robinson Township?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're in Settlers Ridge or near the Town Centre, our Robinson Township 
            plumbers provide fast, professional service when you need it most.
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