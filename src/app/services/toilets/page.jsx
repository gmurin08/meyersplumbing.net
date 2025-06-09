import { Wrench, Droplets, Settings, AlertTriangle, CheckCircle, Clock, Award, Shield, Home, Eye, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import globals from '/globals.json';

export const metadata = {
  title: 'Toilet Installation & Repair Services - Pittsburgh & Oakdale PA | Expert Toilet Plumbers',
  description: 'Professional toilet installation, repair & replacement in Pittsburgh PA. Emergency toilet service, running toilet repair, toilet clogs. Licensed plumbers serving Oakdale, Moon Township, Peters Township.',
  keywords: 'toilet installation Pittsburgh, toilet repair PA, running toilet fix, toilet replacement Oakdale, clogged toilet Moon Township, toilet plumber Peters Township',
  openGraph: {
    title: 'Toilet Services - Pittsburgh Professional Plumber',
    description: 'Expert toilet installation, repair and replacement services in Pittsburgh PA. Emergency toilet service available.',
    url: 'https://meyersplumbing.net/services/toilets',
  }
};

export default function ToiletServicesPage() {
  const toiletServices = [
    {
      service: "Toilet Installation",
      icon: Wrench,
      image: "/images/svc/toilet-lid.webp", // Add your image URL here
      description: "Professional installation of new toilets with proper sealing and connections",
      features: [
        "Complete toilet installation service",
        "Wax ring and hardware replacement", 
        "Water line connection and testing",
        "Floor flange repair if needed",
        "Disposal of old toilet included"
      ],
      timeframe: "1-3 hours"
    },
    {
      service: "Toilet Repair",
      icon: Settings,
      image: "/images/svc/toilet.webp", // Add your image URL here
      description: "Expert repair of running toilets, clogs, leaks, and mechanical issues",
      features: [
        "Running toilet diagnostics and repair",
        "Fill valve and flapper replacement",
        "Chain and handle adjustments", 
        "Leak detection and sealing",
        "Clog removal and auger service"
      ],
      timeframe: "30 minutes - 2 hours"
    },
    {
      service: "Toilet Replacement",
      icon: Droplets,
      image: "/images/svc/toilet-bowl.webp", // Add your image URL here
      description: "Complete toilet replacement with upgraded models and improved efficiency",
      features: [
        "Old toilet removal and disposal",
        "Floor inspection and preparation",
        "New toilet selection assistance",
        "Professional installation",
        "Water efficiency upgrades"
      ],
      timeframe: "2-4 hours"
    },
    {
      service: "Emergency Toilet Service",
      icon: AlertTriangle,
      image: "/images/svc/emergency.webp", // Add your image URL here
      description: "24/7 emergency service for urgent toilet problems and overflows",
      features: [
        "Emergency overflow cleanup",
        "Urgent clog removal",
        "Immediate leak repairs",
        "Water damage prevention",
        "Temporary solutions available"
      ],
      timeframe: "1-2 hours response"
    }
  ];

  const commonProblems = [
    {
      problem: "Running Toilet",
      symptoms: "Water continuously running, tank not filling properly",
      solution: "Replace faulty flapper, fill valve, or adjust chain",
      urgency: "Medium"
    },
    {
      problem: "Toilet Won't Flush", 
      symptoms: "Handle doesn't work, weak flush, no water in tank",
      solution: "Repair handle mechanism and clear blockages",
      urgency: "High"
    },
    {
      problem: "Toilet Clog",
      symptoms: "Water won't drain, slow drainage, overflow risk", 
      solution: "Professional auger service and drain cleaning",
      urgency: "High"
    },
    {
      problem: "Water Leaking",
      symptoms: "Water around base, tank leaking, water stains",
      solution: "Replace wax ring, tighten connections, or reinstall",
      urgency: "High"
    }
  ];

  const toiletTypes = [
    {
      type: "Standard Two-Piece",
      description: "Traditional toilet with separate tank and bowl",
      efficiency: "1.6-1.28 GPF",
      bestFor: "Budget-conscious homeowners"
    },
    {
      type: "One-Piece Toilet", 
      description: "Sleek design with integrated tank and bowl",
      efficiency: "1.28-1.0 GPF", 
      bestFor: "Modern bathrooms and easy maintenance"
    },
    {
      type: "Comfort Height",
      description: "ADA compliant height for easier sitting and standing",
      efficiency: "1.6-1.28 GPF",
      bestFor: "Accessibility needs and aging in place"
    },
    {
      type: "Dual Flush",
      description: "Two flush options for liquid and solid waste",
      efficiency: "0.8/1.6 GPF",
      bestFor: "Water conservation and environmental concerns"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Droplets className="h-12 w-12 text-cyan-300 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Toilet Services</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Expert toilet installation, repair, and replacement services. From emergency clogs to complete bathroom upgrades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${globals.business_phone}`}
                className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-cyan-600 transition-colors"
              >
                Call Now: {globals.business_phone}
              </a>
              <Link 
                href="/contact"
                className="bg-white text-cyan-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Schedule Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section className="py-6" style={{backgroundColor: globals.primary_color}}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 text-white">
            <Award className="h-6 w-6" />
            <p className="font-bold">PROFESSIONAL TOILET SERVICES: Installation • Repair • Replacement • Emergency Service</p>
            <Award className="h-6 w-6" />
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Common Toilet Problems We Fix</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Don&apos;t ignore these warning signs. Early intervention can prevent costly water damage and major repairs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonProblems.map((problem, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-gray-900 text-lg">{problem.problem}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    problem.urgency === 'High' ? 'bg-red-100 text-red-800' :
                    problem.urgency === 'Medium' ? 'bg-orange-100 text-orange-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {problem.urgency} Priority
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-1">Symptoms:</h4>
                    <p className="text-gray-700 text-sm">{problem.symptoms}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-1">Our Solution:</h4>
                    <p className="text-gray-700 text-sm">{problem.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Toilet Services</h2>
          
          {toiletServices.map((service, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                  <div className="relative bg-gray-200 rounded-lg h-80 overflow-hidden">
                    {service.image ? (
                      <Image 
                        src={service.image}
                        alt={`${service.service} professional toilet service`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <div className="text-center text-cyan-600">
                          <service.icon className="h-16 w-16 mx-auto mb-4" />
                          <p className="text-lg font-medium">{service.service}</p>
                          <p className="text-sm">Professional toilet services</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-cyan-100 p-4 rounded-full mr-4">
                      <service.icon className="h-8 w-8 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.service}</h3>
                      <p className="text-gray-600 italic">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-cyan-600 mb-3">What&apos;s Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-cyan-200">
                    <div className="text-sm">
                      <p className="font-medium text-cyan-700">Timeframe:</p>
                      <p className="text-gray-700">{service.timeframe}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Toilet Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Toilet Options We Install</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {toiletTypes.map((toilet, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{toilet.type}</h3>
                <p className="text-gray-700 mb-4 text-sm">{toilet.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">Water Use:</span>
                    <span className="text-gray-600">{toilet.efficiency}</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-gray-600"><strong>Best For:</strong> {toilet.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Why Choose {globals.business_name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Wrench className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Expert Installation</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Licensed plumbers</li>
                <li>• Proper sealing techniques</li>
                <li>• Code-compliant work</li>
                <li>• Warranty included</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Fast Service</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Same-day service available</li>
                <li>• Emergency repairs</li>
                <li>• Efficient installation</li>
                <li>• Minimal disruption</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Eye className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Thorough Inspection</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Complete system check</li>
                <li>• Problem identification</li>
                <li>• Preventive recommendations</li>
                <li>• Detailed explanations</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Insured and bonded</li>
                <li>• Quality materials</li>
                <li>• Professional cleanup</li>
                <li>• Customer satisfaction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/svc/overflow.webp"
            alt="Toilet overflow emergency service"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Gray Overlay with 75% opacity */}
        <div className="absolute inset-0 bg-gray-900/75"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <AlertTriangle className="h-16 w-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-white">Toilet Emergency?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Overflowing toilet? Major leak? Don&apos;t wait - water damage can happen fast. Call us immediately for emergency toilet service.
            </p>
            <div className="bg-white/90 border-2 border-red-500 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-red-800 text-lg mb-4">Emergency Steps:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-red-700">1. Stop Water Flow</strong>
                  <p className="text-gray-600">Turn off water valve behind toilet</p>
                </div>
                <div>
                  <strong className="text-red-700">2. Clear Area</strong>
                  <p className="text-gray-600">Remove items that could be damaged</p>
                </div>
                <div>
                  <strong className="text-red-700">3. Call Us</strong>
                  <p className="text-gray-600">We&apos;ll provide immediate assistance</p>
                </div>
              </div>
            </div>
            <a 
              href={`tel:${globals.business_phone}`}
              className="bg-red-600 text-white px-12 py-6 rounded-lg text-2xl font-bold hover:bg-red-700 transition-colors inline-block"
            >
              Emergency: {globals.business_phone}
            </a>
            <p className="text-sm text-gray-300 mt-4">24/7 Emergency Service Available</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Professional Toilet Services in {globals.business_city}, {globals.business_state}</h2>
          <p className="text-xl mb-8">
            Trust {globals.business_name} for all your toilet installation, repair, and replacement needs. Quality service, fair pricing, guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link 
              href="/contact"
              className="bg-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
              style={{color: globals.primary_color}}
            >
              Get Free Estimate
            </Link>
            <a 
              href={`tel:${globals.business_phone}`}
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-cyan-400 transition-colors"
            >
              Call: {globals.business_phone}
            </a>
          </div>
          <p className="text-sm opacity-90">
            Licensed Plumbers • Emergency Service • Quality Guaranteed • Serving {globals.business_city} & Surrounding Areas
          </p>
        </div>
      </section>
    </div>
  );
}