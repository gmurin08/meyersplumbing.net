import { CheckCircle, Phone, Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import data from 'globals.json';
import BookingConversion from '@/components/booking-conversion';

export const metadata = {
  title: 'Booking Confirmed - M. Meyers Plumbing',
  description: 'Thank you for booking with M. Meyers Plumbing. Your appointment request has been received.',
  alternates: {
    canonical: '/booking-complete'
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function BookingCompletePage() {
  return (
    <div>
      <BookingConversion />
      <section className="relative h-96 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 transform-gpu">
          <Image 
            src="/images/hero/wrench-bg.webp" 
            height={1080} 
            width={1920}
            alt="Tools background"
            className="w-full h-full object-cover scale-110 transform-gpu will-change-transform"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">You're Booked!</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Your appointment request has been received
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg border text-center">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thanks for Booking with Us!
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              We've received your appointment request. You'll get a confirmation with your appointment details shortly, and our team will reach out if we need anything else before your visit.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Plumbing Emergency?
              </h3>
              <p className="text-gray-700 mb-4">
                If you can't wait for your appointment, call us directly — we're available 24/7:
              </p>
              <a 
                href={`tel:${data.business_phone}`}
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                <Phone className="h-5 w-5" />
                {data.business_phone} - Emergency Service
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services/residential"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Browse Our Services
              </Link>
              
              <Link 
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                <Home className="h-5 w-5" />
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
