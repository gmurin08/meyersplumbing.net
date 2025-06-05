'use client'
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, Menu, X } from 'lucide-react';
import { useState } from 'react';
import globals from '/globals.json'
import CTAButton from '@/components/ui/ctabtn'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Emergency Bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center space-x-6 text-sm font-medium">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 " />
            <span>24/7 Emergency Service</span>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <a href={`tel:${globals.business_phone}`} className="hover:text-red-200">
              {globals.business_phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image width={150} height={50} src="/logo/logo.webp" alt="Matt Meyers Plumbing Logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <div className="relative group">
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center space-x-1">
                <span>Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {/* Services Dropdown */}
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Emergency Services
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Residential Plumbing
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Commercial Plumbing
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Water Heaters
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Drain Cleaning
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Service Areas
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* <a 
              href="tel:555-123-4567"
              className="hidden sm:inline-flex bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call Now
            </a>
            <Link 
              href="#"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Free Quote
            </Link> */}
                      <CTAButton/>

            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 ml-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <Link href="/" className="block text-gray-700 font-medium py-2">
              Home
            </Link>
            <Link href="#" className="block text-gray-700 font-medium py-2">
              Services
            </Link>
            <Link href="#" className="block text-gray-700 font-medium py-2">
              About
            </Link>
            <Link href="#" className="block text-gray-700 font-medium py-2">
              Service Areas
            </Link>
            <Link href="/contact" className="block text-gray-700 font-medium py-2">
              Contact
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <a 
                href="tel:555-123-4567"
                className="flex items-center space-x-2 text-blue-600 font-semibold py-2"
              >
                <Phone className="h-5 w-5" />
                <span>(555) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}