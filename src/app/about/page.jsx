import { Award, Users, Clock, Shield, Wrench, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
              Three generations of trusted plumbing expertise serving the Pittsburgh area with integrity and quality craftsmanship.
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
                  Founded in 1985 by Master Plumber Michael Meyers, M. Meyers Plumbing has been a cornerstone of the Pittsburgh community for nearly four decades. What started as a one-man operation has grown into a trusted family business, now led by Michael's son Matt, who continues the tradition of excellence.
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
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <Wrench className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Family Photo Coming Soon</p>
                  <p className="text-sm">Three Generations of Plumbers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Matt */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <Users className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Matt Meyers Photo</p>
                  <p className="text-sm">Master Plumber & Owner</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Meet Matt Meyers</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Matt Meyers is a licensed Master Plumber with over 20 years of experience in the plumbing industry. Growing up in the family business, Matt learned the trade from his father and has been dedicated to maintaining the high standards that M. Meyers Plumbing is known for.
                </p>
                <p>
                  Matt holds state certifications in residential and commercial plumbing, backflow prevention, and gas line installation. He stays current with the latest plumbing technologies and techniques through continuing education and industry training.
                </p>
                <p>
                  When he's not fixing pipes or installing water heaters, Matt enjoys spending time with his family and coaching youth baseball in the local community.
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

      {/* By the Numbers */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">M. Meyers Plumbing by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">38+</div>
              <div className="text-blue-200">Years in Business</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Emergency Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-200">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Proudly Serving Pittsburgh and Surrounding Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Pittsburgh', 'Bethel Park', 'Mt. Lebanon', 'Upper St. Clair',
              'Peters Township', 'McMurray', 'Canonsburg', 'Washington',
              'Bridgeville', 'South Park', 'Jefferson Hills', 'West Mifflin',
              'Baldwin', 'Whitehall', 'Brentwood', 'Dormont'
            ].map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't see your area listed? <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">Contact us</Link> to see if we service your location.
            </p>
          </div>
        </div>
      </section>

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