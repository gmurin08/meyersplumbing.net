import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import ContactForm from '@/components/forms/main-contact'
import data from 'globals.json'
export default function ContactPage() {

  return (
    <div>
      <section className="relative h-96 overflow-hidden">
  {/* Parallax Background Image */}
    <div className="absolute inset-0 transform-gpu">
        <Image 
        src="/images/hero/wrench-bg.webp" 
        height={1080} 
        width={1920}
        alt="Tools background"
        className="w-full h-full object-cover scale-110 transform-gpu will-change-transform"
        // style={{
        //     transform: 'translate3d(0, calc(var(--scroll-y, 0) * 0.5px), 0)'
        // }}
        />
    </div>
    
    {/* Content */}
    <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl max-w-2xl mx-auto">
            Get in touch for emergency service or to schedule an appointment
        </p>
        </div>
    </div>
    </section>

      {/* Emergency Alert */}
      <section className=" text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Plumbing Emergency?</h2>
          <p className="mb-4">Don't wait! Call us now for immediate assistance</p>
          <a 
            href="tel:555-123-4567"
            className="inline-flex items-center space-x-2 bg-white text-red-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors"
          >
            <Phone className="h-6 w-6" />
            <span>{data.business_phone}</span>
          </a>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className='bg-[url(/images/hero/luxury-bg-white.webp)] bg-cover'  >
        {/* <Image style={{position:'absolute', zIndex:'-10'}}
          alt="bg image"
         src={'/images/hero/luxury-bg-white.webp'} 
         width={1920}
         height={1080}
        className="absolute -z-10 w-full h-[2000px] md:h-screen object-fit "
         /> */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className='py-16 '>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Get in Touch</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a 
                      href="tel:555-123-4567" 
                      className="text-blue-600 hover:text-blue-800 font-medium text-lg"
                    >
                      (555) 123-4567
                    </a>
                    <p className="text-gray-600 text-sm">24/7 Emergency Line</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a 
                      href="mailto:info@meyersplumbing.com" 
                      className="text-blue-600 hover:text-blue-800"
                    >
                      info@meyersplumbing.com
                    </a>
                    <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-700">
                      123 Main Street<br />
                      Your City, ST 12345
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <div className="text-gray-700">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-orange-600 font-medium mt-1">Emergency service available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Service Areas</h3>
                <p className="text-gray-700 text-sm">
                  We proudly serve the greater metropolitan area including:
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Downtown, Northside, Westend, Eastbrook, Southville, and surrounding communities
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className='py-16'>
              <ContactForm/>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Find Us</h2>
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg font-medium">Interactive Map Coming Soon</p>
              <p className="text-sm">123 Main Street, Your City, ST 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}