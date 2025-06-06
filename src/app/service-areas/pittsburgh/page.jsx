import { Phone, Clock, MapPin, Wrench, Home, Building2 } from 'lucide-react';
import Image from 'next/image';
import CTAButton from '@/components/ui/ctabtn';
import globals from '/globals.json';

export const metadata = {
  title: 'Plumber in Pittsburgh PA | Matt Meyers Plumbing Services',
  description: 'Professional plumbing services in Pittsburgh, PA. Emergency plumber available 24/7 for repairs, installations, and maintenance. Serving all Pittsburgh neighborhoods.',
  keywords: 'plumber Pittsburgh PA, Pittsburgh plumbing services, emergency plumber Pittsburgh, Pittsburgh water heater repair, drain cleaning Pittsburgh'
};

export default function PittsburghServicePage() {
  const neighborhoods = [
    'Downtown', 'Oakland', 'Shadyside', 'Squirrel Hill', 'Lawrenceville',
    'Strip District', 'South Side', 'North Shore', 'East End', 'West End',
    'Bloomfield', 'Polish Hill', 'Troy Hill', 'Spring Garden', 'Garfield'
  ];

  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Emergency Plumbing',
      description: 'Available 24/7 for urgent plumbing issues throughout Pittsburgh'
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Residential Services',
      description: 'Complete plumbing solutions for Pittsburgh homes and apartments'
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Commercial Plumbing',
      description: 'Professional plumbing for Pittsburgh businesses and offices'
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
            alt="Pittsburgh plumbing services"
            className="w-full h-full object-cover scale-110 transform-gpu will-change-transform"
          />
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Plumber in Pittsburgh, PA
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Professional plumbing services for all Pittsburgh neighborhoods. 
              Emergency service available 24/7.
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
              <span className="font-medium">24/7 Emergency Service in Pittsburgh</span>
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
              Pittsburgh Plumbing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From the North Shore to the South Side, we provide comprehensive plumbing 
              solutions for all Pittsburgh residents and businesses.
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
                Serving All Pittsburgh Neighborhoods
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our experienced plumbers know Pittsburgh inside and out. Whether you're in 
                a historic home in Shadyside or a modern apartment in Downtown, we understand 
                the unique plumbing challenges that come with Pittsburgh's diverse architecture.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  Why Choose Us for Pittsburgh Plumbing?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Local Pittsburgh plumbers who know the area</li>
                  <li>• Fast response times to all Pittsburgh neighborhoods</li>
                  <li>• Experience with older Pittsburgh homes and buildings</li>
                  <li>• Emergency service available 24/7</li>
                  <li>• Licensed and insured in Pennsylvania</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Pittsburgh Areas We Serve
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {neighborhoods.map((neighborhood, index) => (
                  <div key={index} className="bg-white p-3 rounded shadow-sm border">
                    <span className="text-gray-700 font-medium">{neighborhood}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Don't see your Pittsburgh neighborhood? We serve the entire city - 
                just give us a call!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Pittsburgh Plumbing Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Common Pittsburgh Plumbing Problems
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Old Pipe Systems</h3>
              <p className="text-gray-600">
                Many Pittsburgh homes have aging galvanized or cast iron pipes that need 
                replacement or repair. We specialize in updating these older systems.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Basement Flooding</h3>
              <p className="text-gray-600">
                Pittsburgh's hilly terrain and heavy rains can cause basement flooding. 
                We provide sump pump installation and drainage solutions.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Water Heater Issues</h3>
              <p className="text-gray-600">
                From repairs to full replacements, we handle all water heater services 
                for Pittsburgh homes, including tankless options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Plumber in Pittsburgh?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let plumbing problems disrupt your day. Our Pittsburgh plumbers 
            are ready to help with fast, reliable service.
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