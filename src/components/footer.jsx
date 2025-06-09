import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';
import globals from 'globals.json'
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Emergency CTA Section */}
      {/* <div className="bg-red-600 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">Plumbing Emergency?</h3>
          <p className="text-red-100 mb-4">Don't wait! Call us now for immediate assistance</p>
          <a 
            href={`tel:${globals.business_phone}`}
            className="inline-flex items-center space-x-2 bg-white text-red-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors"
          >
            <Phone className="h-6 w-6" />
            <span>{globals.business_phone}</span>
          </a>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold w-1/2">
              <Image src='/logo/logo-flat.webp' width={500} height={243} alt="Matt Meyers Plumbing Logo"/>
            </div>
            <h4 className="text-lg font-semibold">M. MEYERS PLUMBING</h4>
            <div className='flex justify-center'>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional plumbing services available 24/7. Licensed, insured, and committed to quality workmanship.
            </p></div>
            <div className="flex space-x-4">
              <a href="#" alt="Visit us on facebook" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
                {/* <Google className="h-5 w-5"/> */}
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/emergency-services" className="text-gray-400 hover:text-white transition-colors">
                  Emergency Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/residential-plumbing" className="text-gray-400 hover:text-white transition-colors">
                  Residential Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-plumbing" className="text-gray-400 hover:text-white transition-colors">
                  Commercial Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/water-heaters" className="text-gray-400 hover:text-white transition-colors">
                  Water Heater Services
                </Link>
              </li>
              <li>
                <Link href="/services/drain-cleaning" className="text-gray-400 hover:text-white transition-colors">
                  Drain Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/leak-detection" className="text-gray-400 hover:text-white transition-colors">
                  Leak Detection
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="text-gray-400 hover:text-white transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-400 hover:text-white transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Before & After Gallery
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/financing" className="text-gray-400 hover:text-white transition-colors">
                  Financing Options
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href={`tel:${globals.business_phone}`} className="text-white hover:text-blue-400 transition-colors font-medium">
                    {globals.business_phone}
                  </a>
                  <p className="text-gray-400 text-xs">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${globals.business_email}`} className="text-gray-400 hover:text-white transition-colors">
                  {globals.business_email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Proudly Serving Pittsburgh, PA</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <p className="text-orange-400 font-medium">24/7 Emergency</p>
                  <p className="text-xs">Regular hours: Mon-Fri 8AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 M. Meyers Plumbing. All rights reserved. | Licensed & Insured | License #123456
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}