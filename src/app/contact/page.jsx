import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import ContactForm from '@/components/forms/main-contact'
import ServiceAreaMap from '@/components/ui/ServiceAreaMap'
import EmergencyCTA from '@/components/sections/emergency-cta'
import data from 'globals.json'

export const metadata = {
  title: 'Contact Us - Pittsburgh & Oakdale PA | 24/7 Response',
  description: '24/7 emergency plumbing services in Pittsburgh PA. Fast response for burst pipes, sewer backups, gas leaks & plumbing disasters. Licensed emergency plumbers serving Oakdale, Moon Township, Robinson Township.',
  keywords: 'emergency plumber Pittsburgh, 24/7 plumbing service PA, burst pipe repair, sewer backup Oakdale, gas leak emergency Moon Township',
  openGraph: {
    title: 'Emergency Plumbing Services - Pittsburgh 24/7 Plumber',
    description: '24/7 emergency plumbing services in Pittsburgh PA. Fast response for plumbing disasters and emergencies.',
    url: 'https://meyersplumbing.net/contact',
  }
};

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
                      href={`tel:${data.business_phone}`} 
                      className="text-blue-600 hover:text-blue-800 font-medium text-lg"
                    >
                      {data.business_phone}
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
                      href={`mailto:${data.business_email}`} 
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {data.business_email}
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
                      {data.business_address}<br />
                      {data.business_city}, {data.business_state} {data.business_zip}
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
                  We proudly serve the greater Pittsburgh area including:
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Pittsburgh, Bethel Park, Mt. Lebanon, Upper St. Clair, Peters Township, McMurray, Canonsburg, Bridgeville, Moon, Sewickley, Imperial, Robinson Township, Carnegie, and surrounding communities
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

      <EmergencyCTA />

      {/* Interactive Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Service Area</h2>
          <div className="mb-6 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Based in Oakdale, PA, we proudly serve Pittsburgh and the surrounding communities. 
              Click on the pins to see our main office and service areas.
            </p>
          </div>
          <ServiceAreaMap />
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
              Main Office
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2 ml-6"></span>
              Service Areas
            </p>
          </div>
        </div>
      </section> 
    </div>
  );
}