import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, Shield, Star, Wrench, Droplets } from 'lucide-react';
import BackgroundVideo from 'next-video/background-video';
import desktopHero from '/videos/desktop-hero.mp4'
import globals from '/globals.json'
import ReviewsWidget from '@/components/reviews-widget'
import AnimatedVan from '@/components/ui/AnimatedVan'
import CompactContactForm from '@/components/forms/compact-contact'

export default function HomePage() {
  return (<>
    <div className="h-65 lg:h-80 xl:h-190 overflow-hidden">
      <BackgroundVideo src={desktopHero} />
    </div>
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-10 relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile: Van above, Desktop: Side by side */}
          <div className="flex flex-col lg:flex-row items-center justify-between">
            
            {/* Van Image - Above on mobile, Left on desktop */}
            <div className="order-1 lg:order-1 flex justify-center lg:justify-start lg:flex-1 relative">
              <AnimatedVan />
            </div>

            {/* Hero Content - Below on mobile, Right on desktop */}
            <div className="order-2 lg:order-2 text-center lg:text-left lg:flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                24/7 Emergency Plumbing Services
              </h1>
              <p className="text-xl mb-8 max-w-2xl lg:max-w-none">
                Licensed, insured, and ready to solve your plumbing problems day or night. 
                Fast response times and quality workmanship guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href={`tel:${globals.business_phone}`}
                  className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors"
                >
                  Call Now: {globals.business_phone}
                </a>
                <Link 
                  href="/contact"
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-orange-600 transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
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
              { title: "Emergency Repairs", icon: "🚨", desc: "24/7 emergency plumbing services", image:'/images/cards/emergency.webp', href: '/services/emergency-services' },
              { title: "Water Heaters", icon: "🔥", desc: "Installation, repair, and maintenance", image:'/images/cards/water-heater.webp', href: '/services/water-heaters' },
              { title: "Drain Cleaning", icon: "🚿", desc: "Professional drain and sewer cleaning", image:'/images/cards/drain.webp', href: '/services/drain-cleaning' },
              { title: "Trenchless Pipe Repair", icon: "🔧", desc: "Advanced trenchless pipe repair solutions", image:'/images/cards/pipe-repair.webp', href: '/services/trenchless' },
              { title: "Residential", icon: "🏠", desc: "Complete residential plumbing services", image:'/images/cards/residential.webp', href: '/services/residential' },
              { title: "Commercial", icon: "🏢", desc: "Professional commercial plumbing services", image:'/images/cards/commercial.webp', href: '/services/commercial' }
            ].map((service, index) => (
              <Link key={index} href={service.href} className="block group">
                <div 
                style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}
                className="h-75 p-6 rounded-lg shadow-md hover:shadow-lg group-hover:transform group-hover:scale-105 transition-all">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-white-600 mb-4">{service.desc}</p>
                  <span className="text-red-400 font-medium group-hover:text-blue-800">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section 
        className="py-16 bg-cover bg-center bg-no-repeat relative min-h-96"
        style={{ backgroundImage: "url('/images/vans/van-mockup.webp')" }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg">
            Why Choose M. Meyers Plumbing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg" >
              <Clock className="h-16 w-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">24/7 Availability</h3>
              <p className="text-gray-200">Plumbing emergencies don&apos;t wait for business hours. We&apos;re here when you need us most.</p>
            </div>
            <div className="text-center p-6 rounded-lg">
              <Shield className="h-16 w-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Licensed & Insured</h3>
              <p className="text-gray-200">Fully licensed and insured for your protection and peace of mind.</p>
            </div>
            <div className="text-center p-6 rounded-lg">
              <Star className="h-16 w-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Quality Work</h3>
              <p className="text-gray-200">Professional workmanship backed by our satisfaction guarantee.</p>
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
          <ReviewsWidget />
        </div>
      </section>

      {/* Compact Contact Form */}
      <div className="relative w-full py-8">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/vans/van-mockup.webp"
            alt="M. Meyers Plumbing service van background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <CompactContactForm />
        </div>
      </div>

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
              href={`tel:${globals.business_phone}`}
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-6 w-6" />
              <span>{globals.business_phone}</span>
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