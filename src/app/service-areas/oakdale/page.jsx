import { MapPin, Phone, Clock, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import globals from '/globals.json';

export const metadata = {
  title: 'Oakdale Plumber - Local Emergency Plumbing Services',
  description: `Professional plumbing services in Oakdale, PA. Based locally at ${globals.business_address}, we provide 24/7 emergency plumbing, water heater repair, drain cleaning and more. Call ${globals.business_phone}`,
  keywords: 'Oakdale plumber, Oakdale plumbing, emergency plumber Oakdale PA, water heater repair Oakdale, drain cleaning Oakdale',
  openGraph: {
    title: 'Oakdale Plumber - Local Emergency Plumbing Services',
    description: `Professional plumbing services in Oakdale, PA. Based locally, we provide 24/7 emergency plumbing, water heater repair, drain cleaning and more.`,
    url: 'https://meyersplumbing.net/service-areas/oakdale',
  }
};

export default function OakdalePage() {
  const services = [
    'Emergency Plumbing Repairs',
    'Water Heater Installation & Repair', 
    'Drain Cleaning & Sewer Services',
    'Leak Detection & Pipe Repair',
    'Toilet & Fixture Installation',
    'Gas Line Services',
    'Residential & Commercial Plumbing',
    'Trenchless Pipe Repair'
  ];

  const whyChooseUs = [
    'Based right here in Oakdale at 161 Saddle Ridge Drive',
    'Fastest response times in the area',
    'Licensed, bonded & insured plumbing contractor',
    '24/7 emergency service availability',
    'Upfront pricing with no hidden fees',
    'Family-owned business serving our community'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/hero/wrench-bg.webp" 
            height={1080} 
            width={1920}
            alt="Oakdale plumber service area"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Oakdale's Local Plumber
            </h1>
            <p className="text-xl mb-6">
              Based right here in Oakdale, PA - Your trusted neighborhood plumbing experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${globals.business_phone}`}
                className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Phone className="h-6 w-6" />
                <span>Call Now: {globals.business_phone}</span>
              </a>
              <Link 
                href="/get-quote"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-orange-600 transition-colors"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Advantage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Your Local Oakdale Plumbing Company
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                When you need a plumber in Oakdale, PA, you want someone who knows the area, 
                understands local building codes, and can get to you fast. That's exactly what 
                you get with Matt Meyers Plumbing - we're based right here in Oakdale.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="flex items-center mb-3">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="font-bold text-gray-900">Our Oakdale Location</h3>
                </div>
                <p className="text-gray-700">
                  <strong>Address:</strong> {globals.business_address}<br/>
                  <strong>City:</strong> {globals.business_city}, {globals.business_state} {globals.business_zip}
                </p>
              </div>

              <div className="flex items-center text-blue-600 font-semibold">
                <Clock className="h-5 w-5 mr-2" />
                <span>Available 24/7 for Emergency Service</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Why Choose Local?</h3>
              <ul className="space-y-3">
                {whyChooseUs.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Complete Plumbing Services in Oakdale
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-900">{service}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              From routine maintenance to emergency repairs, we handle all your plumbing needs in Oakdale and surrounding areas.
            </p>
            <Link 
              href="/services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Plumbing Emergency in Oakdale?
          </h2>
          <p className="text-xl mb-8">
            Don't wait! We're just minutes away and available 24/7 for emergency plumbing service.
          </p>
          <a 
            href={`tel:${globals.business_phone}`}
            className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-50 transition-colors inline-flex items-center justify-center space-x-2"
          >
            <Phone className="h-6 w-6" />
            <span>Call Now: {globals.business_phone}</span>
          </a>
        </div>
      </section>

      {/* Local Area Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Serving Oakdale & Surrounding Communities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Oakdale Coverage</h3>
              <p className="text-gray-600">
                Complete coverage throughout Oakdale, including residential neighborhoods and commercial districts.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
              <p className="text-gray-600">
                Being local means faster response times - usually within 30 minutes for emergency calls.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Knowledge</h3>
              <p className="text-gray-600">
                We know Oakdale's infrastructure, common plumbing issues, and local building requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}