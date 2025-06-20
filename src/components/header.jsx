'use client'
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import globals from '/globals.json'
import CTAButton from '@/components/ui/ctabtn'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileAreasOpen(false);
    setMobileAboutOpen(false);
  };

  const services = [
    { name: 'Emergency Services', href: '/services/emergency-services' },
    { name: 'Residential Plumbing', href: '/services/residential' },
    { name: 'Commercial Plumbing', href: '/services/commercial' },
    { name: 'Water Heaters', href: '/services/water-heaters' },
    { name: 'Drain Cleaning', href: '/services/drain-cleaning' },
    { name: 'Gas Lines', href: '/services/gas-lines' },
    { name: 'Excavation', href: '/services/excavation' },
    { name: 'Trenchless Repair', href: '/services/trenchless' },
    { name: 'Toilet Repair', href: '/services/toilets' }
  ];

  const serviceAreas = [
    { name: 'All Service Areas', href: '/service-areas' },
    { name: 'Pittsburgh', href: '/service-areas/pittsburgh' },
    { name: 'Moon Township', href: '/service-areas/moon-township' },
    { name: 'Robinson Township', href: '/service-areas/robinson-township' },
    { name: 'Sewickley', href: '/service-areas/sewickley' },
    { name: 'Carnegie', href: '/service-areas/carnegie' },
    { name: 'Mt. Lebanon', href: '/service-areas/mt-lebanon' },
    { name: 'Upper St. Clair', href: '/service-areas/upper-st-clair' },
    { name: 'Peters Township', href: '/service-areas/peters-township' }
  ];

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
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center space-x-1">
                <span>About</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {/* About Dropdown */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link 
                    href="/about" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/faq" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    FAQs
                  </Link>
                </div>
              </div>
            </div>
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
                  {services.map((service, index) => (
                    <Link 
                      key={index}
                      href={service.href} 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center space-x-1">
                <span>Service Areas</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {/* Service Areas Dropdown */}
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {serviceAreas.map((area, index) => (
                    <Link 
                      key={index}
                      href={area.href} 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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
            <Link href="/" onClick={handleMobileLinkClick} className="block text-gray-700 font-medium py-2">
              Home
            </Link>

            {/* Mobile About Dropdown */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="flex items-center justify-between w-full text-gray-700 font-medium py-2"
              >
                <span>About</span>
                <ChevronDown 
                  className={`h-4 w-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileAboutOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    href="/about"
                    onClick={handleMobileLinkClick}
                    className="block text-sm text-gray-600 py-2 hover:text-blue-600"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/faq"
                    onClick={handleMobileLinkClick}
                    className="block text-sm text-gray-600 py-2 hover:text-blue-600"
                  >
                    FAQs
                  </Link>
                </div>
              )}
            </div>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-gray-700 font-medium py-2"
              >
                <span>Services</span>
                <ChevronDown 
                  className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      onClick={handleMobileLinkClick}
                      className="block text-sm text-gray-600 py-2 hover:text-blue-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>



            {/* Mobile Service Areas Dropdown */}
            <div>
              <button
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                className="flex items-center justify-between w-full text-gray-700 font-medium py-2"
              >
                <span>Service Areas</span>
                <ChevronDown 
                  className={`h-4 w-4 transition-transform ${mobileAreasOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileAreasOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {serviceAreas.map((area, index) => (
                    <Link
                      key={index}
                      href={area.href}
                      onClick={handleMobileLinkClick}
                      className="block text-sm text-gray-600 py-2 hover:text-blue-600"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" onClick={handleMobileLinkClick} className="block text-gray-700 font-medium py-2">
              Contact
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <a 
                href={`tel:${globals.business_phone}`}
                className="flex items-center space-x-2 text-blue-600 font-semibold py-2"
              >
                <Phone className="h-5 w-5" />
                <span>{globals.business_phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}