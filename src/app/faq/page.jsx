'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Phone, Wrench, DollarSign } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import EmergencyCTA from '@/components/sections/emergency-cta';

const faqs = [
  {
    category: "General Services",
    icon: Wrench,
    questions: [
      {
        question: "What plumbing services do you offer?",
        answer: "We offer a comprehensive range of plumbing services including emergency repairs, drain cleaning, water heater installation and repair, pipe replacement, fixture installation, gas line services, and both residential and commercial plumbing solutions."
      },
      {
        question: "Do you provide 24/7 emergency services?",
        answer: "Yes, we provide 24/7 emergency plumbing services. Plumbing emergencies can't wait, so we're available around the clock to help with burst pipes, major leaks, sewer backups, and other urgent plumbing issues."
      },
      {
        question: "Are you licensed and insured?",
        answer: "Absolutely. Matt Meyers is a licensed Master Plumber with over 20 years of experience. We're fully licensed, bonded, and insured for your protection and peace of mind."
      },
      {
        question: "What areas do you serve?",
        answer: "We proudly serve Pittsburgh and the surrounding areas including Moon Township, Robinson Township, Sewickley, Carnegie, Mt. Lebanon, Upper St. Clair, Peters Township, and many other communities in the greater Pittsburgh region."
      }
    ]
  },
  {
    category: "Pricing & Payment",
    icon: DollarSign,
    questions: [
      {
        question: "Do you provide free estimates?",
        answer: "Yes, we provide free estimates for most plumbing projects. Contact us to schedule an appointment, and we'll assess your needs and provide you with a detailed, no-obligation estimate."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, check, and all major credit cards for your convenience. We believe in transparent pricing with no hidden fees."
      },
      {
        question: "Do you offer financing options?",
        answer: "Yes, we offer financing options for larger projects. Contact us to discuss available financing plans that can help make your plumbing project more affordable."
      },
      {
        question: "How much do emergency calls cost?",
        answer: "Emergency service calls are priced competitively and fairly. We'll provide you with upfront pricing before any work begins, so you know exactly what to expect with no surprises."
      }
    ]
  },
  {
    category: "Scheduling & Response",
    icon: Clock,
    questions: [
      {
        question: "How quickly can you respond to emergencies?",
        answer: "We strive to respond to emergency calls as quickly as possible, typically within 1-2 hours depending on your location and the time of day. Our goal is to minimize damage and get your plumbing back to working order fast."
      },
      {
        question: "How do I schedule a service appointment?",
        answer: "You can schedule an appointment by calling us directly, using our online contact form, or through our website. We'll work with your schedule to find a convenient time for your service."
      },
      {
        question: "Do you provide same-day service?",
        answer: "Yes, we offer same-day service for urgent repairs and many routine services, subject to availability. Contact us early in the day for the best chance of same-day scheduling."
      },
      {
        question: "What should I expect during a service call?",
        answer: "Our technician will arrive in a clearly marked vehicle, assess the problem, explain the issue and solution options, provide upfront pricing, and complete the work efficiently with minimal disruption to your day."
      }
    ]
  },
  {
    category: "Common Issues",
    icon: Phone,
    questions: [
      {
        question: "What should I do if I have a burst pipe?",
        answer: "Immediately shut off your main water supply, turn off electricity to affected areas if there's flooding, move valuables to safety, and call us right away. Don't attempt to fix it yourself as this can cause more damage."
      },
      {
        question: "Why is my water heater not working?",
        answer: "Water heater issues can be caused by pilot light problems, thermostat issues, heating element failure, or sediment buildup. Our technicians can diagnose and repair most water heater problems quickly."
      },
      {
        question: "How often should I have my drains cleaned?",
        answer: "We recommend professional drain cleaning annually for most homes, or more frequently if you experience regular clogs. Regular maintenance helps prevent major blockages and keeps your plumbing system running smoothly."
      },
      {
        question: "What causes low water pressure?",
        answer: "Low water pressure can be caused by mineral buildup in pipes, faulty pressure regulators, leaks in the system, or issues with your water supplier. We can diagnose the cause and recommend the best solution."
      }
    ]
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const questionId = `${categoryIndex}-${questionIndex}`;
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0">
          <Image 
            src="/images/hero/wrench-bg.webp"
            alt="Professional plumbing tools background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Find answers to common plumbing questions. Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Category Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h2 className="text-xl font-bold mb-6 text-gray-900">Categories</h2>
                <div className="space-y-2">
                  {faqs.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveCategory(index)}
                        className={`w-full text-left p-4 rounded-lg transition-colors flex items-center space-x-3 ${
                          activeCategory === index
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{category.category}</span>
                      </button>
                    );
                  })}
                </div>
                
                {/* Contact CTA - Desktop Only */}
                <div className="hidden lg:block mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-2">Still have questions?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Our team is here to help with any plumbing questions or concerns.
                  </p>
                  <Link 
                    href="/contact"
                    className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ Questions */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  {React.createElement(faqs[activeCategory].icon, { className: "h-6 w-6 text-blue-600" })}
                  <h2 className="text-2xl font-bold text-gray-900">{faqs[activeCategory].category}</h2>
                </div>
                
                <div className="space-y-4">
                  {faqs[activeCategory].questions.map((faq, questionIndex) => {
                    const questionId = `${activeCategory}-${questionIndex}`;
                    const isOpen = openQuestion === questionId;
                    
                    return (
                      <div key={questionIndex} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleQuestion(activeCategory, questionIndex)}
                          className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div className="border-t border-gray-200 pt-4">
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Contact CTA - Mobile Only */}
              <div className="lg:hidden mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2">Still have questions?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our team is here to help with any plumbing questions or concerns.
                </p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <EmergencyCTA />
    </div>
  );
}
