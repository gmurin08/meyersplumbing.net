import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import Image from 'next/image';
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
        style={{
            transform: 'translate3d(0, calc(var(--scroll-y, 0) * 0.5px), 0)'
        }}
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
      <section className="bg-red-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Plumbing Emergency?</h2>
          <p className="mb-4">Don't wait! Call us now for immediate assistance</p>
          <a 
            href="tel:555-123-4567"
            className="inline-flex items-center space-x-2 bg-white text-red-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors"
          >
            <Phone className="h-6 w-6" />
            <span>(555) 123-4567</span>
          </a>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className='bg-white' style={{position:'relative', zIndex:'-11'}} >
        <Image style={{position:'absolute', zIndex:'-10'}}
         src={'/images/hero/luxury-bg-white.webp'} 
         width={1920}
         height={1080}
        className="absolute -z-10 w-full h-[2000px] md:h-screen object-fit "
         />
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
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                </div>
                
                <form method="POST" action="/api/contact" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input 
                        type="text" 
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type
                    </label>
                    <select 
                      name="serviceType"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="emergency">Emergency Repair</option>
                      <option value="water-heater">Water Heater Service</option>
                      <option value="drain-cleaning">Drain Cleaning</option>
                      <option value="leak-detection">Leak Detection</option>
                      <option value="bathroom">Bathroom Plumbing</option>
                      <option value="general">General Plumbing</option>
                      <option value="estimate">Free Estimate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea 
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-vertical"
                      placeholder="Please describe your plumbing issue or what service you need..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Time
                    </label>
                    <select 
                      name="preferredTime"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    >
                      <option value="">No preference</option>
                      <option value="morning">Morning (8AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 5PM)</option>
                      <option value="evening">Evening (5PM - 8PM)</option>
                      <option value="asap">ASAP - Emergency</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
                  >
                    Send Message
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    * Required fields. For emergencies, please call us directly at{' '}
                    <a href="tel:555-123-4567" className="text-blue-600 font-medium">
                      (555) 123-4567
                    </a>
                  </p>
                </form>
              </div>
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