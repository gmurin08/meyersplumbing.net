'use client'
import { Award, Users, Clock, Shield, Wrench, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceAreas from '@/components/sections/ServiceAreas';
import NumbersCounter from '@/components/ui/NumbersCounter';
import CompactContactForm from '@/components/forms/compact-contact';
export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-[url('/images/hero/wrench-bg.webp')] bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About M. Meyers Plumbing</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Trusted plumbing expertise serving the Pittsburgh area with integrity and quality craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  With over 20 years of hands-on plumbing experience, Matt Meyers has built M. Meyers Plumbing on the foundation of integrity, quality workmanship, and exceptional customer service. What started as a commitment to serving the local community has grown into a trusted plumbing business that treats every customer like family.
                </p>
                <p>
                  Our commitment to quality workmanship and honest service has earned us thousands of satisfied customers throughout the greater Pittsburgh area. We treat every home and business like our own, ensuring that each job is completed to the highest standards.
                </p>
                <p>
                  From emergency repairs to complete plumbing installations, we've seen it all and fixed it all. Our experience spans residential homes, commercial buildings, and everything in between.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gray-200 rounded-lg h-96 overflow-hidden">
                <Image 
                  src="/images/vans/van-mockup.webp"
                  alt="M. Meyers Plumbing service van ready to serve the Pittsburgh area"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Matt */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="relative h-96 lg:h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src='/images/portraits/matt.webp' 
                  fill
                  alt='Matthew Meyers, owner of Matt Meyers Plumbing'
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Meet Matt Meyers</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Matt Meyers is a licensed Master Plumber with over 20 years of experience in the plumbing industry. With deep roots in the industry, Matt learned the trade from skilled professionals and has been dedicated to maintaining the high standards that M. Meyers Plumbing is known for.
                </p>
                <p>
                  Matt holds state certifications in residential and commercial plumbing, backflow prevention, and gas line installation. He stays current with the latest plumbing technologies and techniques through continuing education and industry training.
                </p>
 
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Licensed Master Plumber</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Fully Insured & Bonded</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">20+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Integrity</h3>
              <p className="text-gray-600">
                We believe in honest communication, fair pricing, and doing the right thing even when no one is watching. Your trust is our most valuable asset.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality</h3>
              <p className="text-gray-600">
                Every job we complete meets our high standards for craftsmanship. We use quality materials and stand behind our work with comprehensive warranties.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Service</h3>
              <p className="text-gray-600">
                We're available 24/7 for emergencies and always treat our customers with respect. Your satisfaction is our priority from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers - Animated Counter */}
      <NumbersCounter />
      {/* Service Areas*/}
      
<ServiceAreas/> 

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

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the M. Meyers Difference?</h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers who trust us with their plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:555-123-4567"
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors"
            >
              Call Today: (555) 123-4567
            </a>
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}