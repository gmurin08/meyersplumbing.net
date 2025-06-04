import Link from 'next/link';
import { Phone, Clock, Shield, Star, Wrench, Droplets } from 'lucide-react';
import BackgroundVideo from 'next-video/background-video';

import desktopHero from '/videos/desktop-hero.mp4'
export default function HomePage() {
  return (<><BackgroundVideo src={desktopHero} />
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            24/7 Emergency Plumbing Services
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Licensed, insured, and ready to solve your plumbing problems day or night. 
            Fast response times and quality workmanship guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:555-123-4567"
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors"
            >
              Call Now: (555) 123-4567
            </a>
            <Link 
              href="/get-quote"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-orange-600 transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Plumbing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Emergency Repairs", icon: "🚨", desc: "24/7 emergency plumbing services", image:'/images/cards/emergency.webp' },
              { title: "Water Heaters", icon: "🔥", desc: "Installation, repair, and maintenance", image:'/images/cards/water-heater.webp' },
              { title: "Drain Cleaning", icon: "🚿", desc: "Professional drain and sewer cleaning", image:'/images/cards/drain.webp' },
              { title: "Leak Detection", icon: "💧", desc: "Advanced leak detection technology", image:'/images/cards/pipe-repair.webp' },
              { title: "Residential", icon: "🔧", desc: "Trenchless pipe repair solutions", image:'/images/cards/residential.webp' },
              { title: "Commercial", icon: "🛁", desc: "Complete bathroom plumbing services", image:'/images/cards/commercial.webp' }
            ].map((service, index) => (
              <div key={index} 
              style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'}}
              className="h-75 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-white-600 mb-4">{service.desc}</p>
                <Link href="/services" className="text-red-400 font-medium hover:text-blue-800">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose M. Meyers Plumbing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Plumbing emergencies don&apos;t wait for business hours. We&apos;re here when you need us most.</p>
            </div>
            <div className="text-center">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your protection and peace of mind.</p>
            </div>
            <div className="text-center">
              <Star className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Work</h3>
              <p className="text-gray-600">Professional workmanship backed by our satisfaction guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", rating: 5, text: "Called at midnight with a burst pipe. They were here in 30 minutes and fixed everything perfectly!" },
              { name: "Mike Rodriguez", rating: 5, text: "Professional, fair pricing, and excellent work. Highly recommend for any plumbing needs." },
              { name: "Lisa Chen", rating: 5, text: "Best plumber in town! Fixed our water heater quickly and explained everything clearly." }
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{`"${review.text}`}</p>
                <p className="font-semibold text-gray-900">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Fix Your Plumbing Problem?
          </h2>
          <p className="text-xl mb-8">
            Don&apos;t let plumbing issues ruin your day. Call now for fast, professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:555-123-4567"
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-6 w-6" />
              <span>(555) 123-4567</span>
            </a>
            <Link 
              href="/schedule-service"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-orange-600 transition-colors"
            >
              Schedule Service Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  </>);
}