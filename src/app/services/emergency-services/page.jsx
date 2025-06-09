import { Phone, Clock, AlertTriangle, Wrench, Shield, CheckCircle, Star, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceAreaMap from '@/components/ui/ServiceAreaMap';
import globals from 'globals.json';

export const metadata = {
  title: 'Emergency Plumbing Services - Pittsburgh & Oakdale PA | 24/7 Response',
  description: '24/7 emergency plumbing services in Pittsburgh PA. Fast response for burst pipes, sewer backups, gas leaks & plumbing disasters. Licensed emergency plumbers serving Oakdale, Moon Township, Robinson Township.',
  keywords: 'emergency plumber Pittsburgh, 24/7 plumbing service PA, burst pipe repair, sewer backup Oakdale, gas leak emergency Moon Township',
  openGraph: {
    title: 'Emergency Plumbing Services - Pittsburgh 24/7 Plumber',
    description: '24/7 emergency plumbing services in Pittsburgh PA. Fast response for plumbing disasters and emergencies.',
    url: 'https://meyersplumbing.net/services/emergency-services',
  }
};

export default function EmergencyServicesPage() {
  const emergencyTypes = [
    {
      title: "Burst Pipes",
      description: "Water damage can happen fast. We'll stop the leak and repair the damage.",
      urgency: "Critical"
    },
    {
      title: "Sewer Backups", 
      description: "Health hazard situations require immediate professional attention.",
      urgency: "Critical"
    },
    {
      title: "Gas Leaks",
      description: "Safety first - we handle gas line emergencies with expert care.",
      urgency: "Critical"
    },
    {
      title: "No Hot Water",
      description: "Water heater failures in winter can't wait until morning.",
      urgency: "Urgent"
    },
    {
      title: "Overflowing Toilets",
      description: "Stop the mess before it spreads throughout your home.",
      urgency: "Urgent"
    },
    {
      title: "Frozen Pipes",
      description: "Prevent costly pipe bursts during freezing weather.",
      urgency: "Urgent"
    }
  ];

  const whyChooseReasons = [
    {
      icon: Clock,
      title: "True 24/7 Availability",
      description: "Not an answering service - real plumbers answer our emergency line around the clock."
    },
    {
      icon: Users,
      title: "Licensed Master Plumbers",
      description: "Our emergency team consists of experienced, state-licensed professionals."
    },
    {
      icon: Wrench,
      title: "Fully Stocked Trucks",
      description: "We carry common parts and tools to fix most emergencies on the first visit."
    },
    {
      icon: Shield,
      title: "Transparent Pricing",
      description: "No surprise charges - we provide upfront pricing before any work begins."
    }
  ];

  const testimonials = [
    {
      name: "Megan Magnanti",
      issue: "",
      text: "Matt Meyers is one of the hardest working in the business. Honest pricing, hard working, dependable and always available if you have a question. Anytime anyone needs a recommendation, it’s ALWAYS Meyers Plumbing. Best in the business!",
      rating: 5
    },
    {
      name: "Tony Magnanti", 
      issue: "",
      text: "Incredible service, top notch experience. Fast, friendly and excellent experience. Highly recommend!",
      rating: 5
    },
    {
      name: "Anna Brailey",
      issue: "",
      text: "Meyer’s plumbing has been my go to for my business for years. They are always prompt, reasonable, and do quality work. Big jobs and small, they always make time to fit us in to keep my business running efficiently!",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Emergency Hero Section */}
      <section className="relative h-96 bg-[url('/images/hero/wrench-bg.webp')] bg-gradient-to-r from-red-900 to-red-700 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="h-12 w-12 text-yellow-400 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Emergency Plumbing Services</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              When plumbing disasters strike, every minute counts. Our licensed emergency plumbers are standing by 24/7.
            </p>
            <a 
              href={`tel:${globals.business_phone}`}
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-colors inline-flex items-center space-x-3"
            >
              <Phone className="h-6 w-6" />
              <span>CALL NOW: {globals.business_phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Alert Banner */}
      <section className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 text-center">
            <Clock className="h-6 w-6 text-yellow-300" />
            <p className="font-semibold">Available 24/7/365 • Average Response Time: 45 Minutes • No Additional Weekend/Holiday Fees</p>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Common Plumbing Emergencies We Handle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyTypes.map((emergency, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{emergency.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    emergency.urgency === 'Critical' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {emergency.urgency}
                  </span>
                </div>
                <p className="text-gray-600">{emergency.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <Phone className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Emergency Response Photo</p>
                  <p className="text-sm">Our team in action</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">How Our Emergency Service Works</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                    <span className="text-red-600 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Call Our Emergency Line</h3>
                    <p className="text-gray-700">Speak directly with a licensed plumber, not an answering service. We'll assess your situation and dispatch immediately.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                    <span className="text-red-600 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Rapid Response</h3>
                    <p className="text-gray-700">Our fully-equipped truck arrives within 45 minutes on average. We'll immediately work to stop further damage.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                    <span className="text-red-600 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Assess & Quote</h3>
                    <p className="text-gray-700">We'll diagnose the problem and provide transparent, upfront pricing before beginning any repair work.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                    <span className="text-red-600 font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Complete Repair</h3>
                    <p className="text-gray-700">Fix the problem right the first time with quality parts and expert workmanship. Clean up and test everything.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose {globals.business_name} for Emergencies?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Tips */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">What to Do While You Wait</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-semibold text-gray-900 mb-2">🚨 For Burst Pipes:</h3>
                  <p className="text-gray-700 text-sm">Turn off main water valve immediately. Remove standing water if safe. Move valuables to higher ground.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-gray-900 mb-2">⚠️ For Gas Leaks:</h3>
                  <p className="text-gray-700 text-sm">Leave the area immediately. Don't use electrical switches. Call us from outside your home.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-gray-900 mb-2">🚽 For Overflows:</h3>
                  <p className="text-gray-700 text-sm">Turn off water valve behind toilet. Remove excess water with towels. Ventilate the area.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-semibold text-gray-900 mb-2">🧊 For Frozen Pipes:</h3>
                  <p className="text-gray-700 text-sm">Turn off water supply. Open faucets to relieve pressure. Never use open flame to thaw pipes.</p>
                </div>
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <AlertTriangle className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Emergency Checklist Image</p>
                  <p className="text-sm">What to do in a plumbing emergency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Real Emergency Stories from Our Customers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.issue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ServiceAreaMap />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Emergency Coverage Area</h2>
              <p className="text-gray-700 mb-6">
                We provide 24/7 emergency plumbing services throughout the Greater Pittsburgh area. Our strategically located team ensures rapid response times to your location.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="space-y-1">
                  <p>• Pittsburgh</p>
                  <p>• Bethel Park</p>
                  <p>• Mt. Lebanon</p>
                  <p>• Upper St. Clair</p>
                  <p>• Peters Township</p>
                  <p>• McMurray</p>
                </div>
                <div className="space-y-1">
                  <p>• Canonsburg</p>
                  <p>• Washington</p>
                  <p>• Bridgeville</p>
                  <p>• South Park</p>
                  <p>• Jefferson Hills</p>
                  <p>• West Mifflin</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Not sure if we cover your area? <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">Call us</Link> - we often serve locations beyond this list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Guarantee */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Emergency Service Pricing & Guarantee</h2>
            <p className="text-xl text-blue-200">Transparent pricing with no surprise charges</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <div className="text-center">
              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Service Call Fee</h3>
                <p className="text-2xl font-bold text-yellow-400 mb-2">Transparent</p>
                <p className="text-blue-200 text-sm">Applied toward repair cost</p>
              </div>
            </div> */}
            <div className="text-center">
              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">No Hidden Fees</h3>
                <p className="text-2xl font-bold text-yellow-400 mb-2">Ever</p>
                <p className="text-blue-200 text-sm">Upfront pricing before we start</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Work Guarantee</h3>
                <p className="text-2xl font-bold text-yellow-400 mb-2">1 Year</p>
                <p className="text-blue-200 text-sm">On all emergency repairs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Wait - Call Now!</h2>
          <p className="text-xl mb-8">
            Every minute counts in a plumbing emergency. Our expert team is standing by 24/7 to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${globals.business_phone}`}
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-colors inline-flex items-center justify-center space-x-3"
            >
              <Phone className="h-6 w-6" />
              <span>EMERGENCY: {globals.business_phone}</span>
            </a>
            {/* <Link 
              href="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors"
            >
              Non-Emergency Contact
            </Link> */}
          </div>
          <p className="text-sm mt-4 text-red-200">
            Available 24/7/365 • Licensed & Insured • Satisfaction Guaranteed
          </p>
        </div>
      </section>
    </div>
  );
}