import { Home, Heart, Shield, Wrench, Droplets, Thermometer, Zap, CheckCircle, Star, Users, Clock, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import globals from 'globals.json';
import ReviewsWidget from '@/components/reviews-widget';

export const metadata = {
  title: 'Residential Plumbing Services - Pittsburgh & Oakdale PA | Expert Home Plumbers',
  description: 'Professional residential plumbing services in Pittsburgh PA. Kitchen, bathroom, water heater repair & installation. Licensed home plumbers serving Oakdale, Moon Township, Mt Lebanon & surrounding areas.',
  keywords: 'residential plumber Pittsburgh, home plumbing services PA, bathroom plumber Oakdale, kitchen plumbing Moon Township, water heater installation Mt Lebanon',
  openGraph: {
    title: 'Residential Plumbing Services - Pittsburgh Home Plumber',
    description: 'Expert residential plumbing services for Pittsburgh homes. Kitchen, bathroom, and whole house plumbing solutions.',
    url: 'https://meyersplumbing.net/services/residential',
  }
};

export default function ResidentialPlumbingPage() {
  const serviceCategories = [
    {
      icon: Droplets,
      title: "Kitchen Plumbing",
      image: "/images/svc/kitchen.webp", // Add your image URL here
      services: ["Garbage Disposal Installation", "Kitchen Sink Repair", "Dishwasher Connections", "Water Line Installation", "Faucet Replacement"],
      description: "The heart of your home deserves expert care"
    },
    {
      icon: Home,
      title: "Bathroom Plumbing", 
      image: "/images/svc/bathroom.webp", // Add your image URL here
      services: ["Toilet Installation & Repair", "Shower & Tub Installation", "Bathroom Remodels", "Vanity Plumbing", "Tile & Fixture Work"],
      description: "Your personal sanctuary, perfectly plumbed"
    },
    {
      icon: Thermometer,
      title: "Water Heaters",
      image: "/images/svc/water-heater.webp", // Add your image URL here
      services: ["Tank & Tankless Installation", "Water Heater Repair", "Maintenance Programs", "Energy Efficiency Upgrades", "Emergency Replacement"],
      description: "Reliable hot water when you need it most"
    },
    {
      icon: Wrench,
      title: "Whole House Systems",
      image: "/images/svc/whole-home.webp", // Add your image URL here
      services: ["Main Line Repair", "Sump Pump Installation", "Water Softener Systems", "Whole House Filtration", "Pressure Regulation"],
      description: "Complete home plumbing solutions"
    }
  ];

  const homeStages = [
    {
      title: "New Homeowners",
      icon: Heart,
      image: "/images/svc/home.webp", // Add your image URL here
      description: "Welcome home! We'll help you understand your plumbing systems and prevent costly surprises.",
      services: ["Plumbing Inspection", "Preventive Maintenance", "System Education", "Warranty Registration"],
      tip: "Get a plumbing inspection within 90 days of purchase to catch potential issues early."
    },
    {
      title: "Growing Families",
      icon: Users,
      image: "/images/svc/family.webp", // Add your image URL here
      description: "More people means more demand. We'll upgrade your systems to handle the extra load.",
      services: ["Bathroom Additions", "Water Pressure Upgrades", "Water Heater Sizing", "Child-Safe Fixtures"],
      tip: "Consider a tankless water heater upgrade when adding family members."
    },
    {
      title: "Empty Nesters",
      icon: Home,
      image: "/images/svc/sinks.webp", // Add your image URL here
      description: "Time to upgrade! Invest in luxury features and efficiency improvements you've always wanted.",
      services: ["Luxury Bathroom Remodels", "High-Efficiency Systems", "Smart Home Integration", "Accessibility Upgrades"],
      tip: "This is the perfect time for that master bathroom renovation you've been dreaming about."
    }
  ];

  const seasonalTips = [
    {
      season: "Spring",
      color: "green",
      tasks: ["Check for winter pipe damage", "Test sump pump before rainy season", "Inspect outdoor spigots", "Schedule annual water heater maintenance"]
    },
    {
      season: "Summer", 
      color: "yellow",
      tasks: ["Monitor water usage for leaks", "Inspect sprinkler systems", "Check water pressure", "Maintain garbage disposal"]
    },
    {
      season: "Fall",
      color: "orange", 
      tasks: ["Winterize outdoor plumbing", "Insulate exposed pipes", "Check water heater efficiency", "Clean gutters and downspouts"]
    },
    {
      season: "Winter",
      color: "blue",
      tasks: ["Prevent frozen pipes", "Monitor for ice dams", "Keep faucets dripping in extreme cold", "Know your main water shutoff location"]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      project: "Master Bathroom Remodel", 
      text: "Matt and his team transformed our outdated bathroom into a spa-like retreat. The attention to detail was incredible, and they kept everything on schedule and budget.",
      rating: 5,
      timeframe: "2 weeks"
    },
    {
      name: "David Kim",
      project: "Whole House Repipe",
      text: "We had old galvanized pipes causing low water pressure throughout the house. The team replaced everything with PEX in just 3 days with minimal disruption.",
      rating: 5,
      timeframe: "3 days"
    },
    {
      name: "Maria Rodriguez", 
      project: "Kitchen Sink Installation",
      text: "Quick, professional service for our new farmhouse sink. They even helped us choose the right garbage disposal. Great advice and fair pricing.",
      rating: 5,
      timeframe: "Same day"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-[url('/images/hero/wrench-bg.webp')] bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Home className="h-12 w-12 text-blue-300 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Residential Plumbing Services</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Your home is your sanctuary. We provide expert plumbing services to keep your family comfortable, safe, and happy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${globals.business_phone}`}
                className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-600 transition-colors"
              >
                Call for Service: {globals.business_phone}
              </a>
              <Link 
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="text-gray-700 font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-6 w-6 text-blue-600" />
              <span className="text-gray-700 font-medium">20+ Years Experience</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-6 w-6 text-blue-600" />
              <span className="text-gray-700 font-medium">5-Star Reviews</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-6 w-6 text-blue-600" />
              <span className="text-gray-700 font-medium">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Complete Home Plumbing Solutions</h2>
          
          {serviceCategories.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                  <div className="relative bg-gray-200 rounded-lg h-80 overflow-hidden">
                    {category.image ? (
                      <Image 
                        src={category.image}
                        alt={`${category.title} residential plumbing service`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <div className="text-center text-blue-600">
                          <category.icon className="h-16 w-16 mx-auto mb-4" />
                          <p className="text-lg font-medium">{category.title}</p>
                          <p className="text-sm">Professional residential service</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-4 rounded-full mr-4">
                      <category.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600 italic">{category.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Home Stage Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Plumbing Solutions for Every Stage of Life</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Your plumbing needs evolve with your life. We provide tailored solutions for every stage of homeownership.
          </p>
          
          {homeStages.map((stage, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                  <div className="relative bg-gray-200 rounded-lg h-80 overflow-hidden">
                    {stage.image ? (
                      <Image 
                        src={stage.image}
                        alt={`${stage.title} enjoying their home plumbing services`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <div className="text-center text-gray-600">
                          <stage.icon className="h-16 w-16 mx-auto mb-4" />
                          <p className="text-lg font-medium">{stage.title} Photo</p>
                          <p className="text-sm">Happy family in their home</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-4 rounded-full mr-4">
                      <stage.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{stage.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 text-lg">{stage.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {stage.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-blue-800 font-medium text-sm">💡 Pro Tip: {stage.tip}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Maintenance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative bg-gray-200 rounded-lg h-96 overflow-hidden">
                <Image 
                  src="/images/svc/calendar.webp" // Add your image URL here
                  alt="Seasonal home maintenance plumbing checklist"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Year-Round Home Care</h2>
              <p className="text-gray-700 mb-8">
                Protect your investment with our seasonal maintenance checklist. A little prevention saves thousands in repairs.
              </p>
              <div className="space-y-6">
                {seasonalTips.map((season, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className={`font-semibold text-lg mb-3 ${
                      season.color === 'green' ? 'text-green-600' :
                      season.color === 'yellow' ? 'text-yellow-600' :
                      season.color === 'orange' ? 'text-orange-600' :
                      'text-blue-600'
                    }`}>
                      {season.season} Checklist
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {season.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Real Projects, Real Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <ReviewsWidget/>
          </div>
        </div>
      </section>

      {/* Process & Guarantee */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Home Service Promise</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Respectful Home Visit</h3>
                    <p className="text-gray-700">We treat your home like our own - shoe covers, clean work areas, and protection of your belongings.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Thorough Assessment</h3>
                    <p className="text-gray-700">We'll explain what we find, why it matters, and give you options that fit your budget and timeline.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quality Workmanship</h3>
                    <p className="text-gray-700">Using premium materials and proven techniques, we'll complete your project to the highest standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Follow-Up Care</h3>
                    <p className="text-gray-700">We stand behind our work with comprehensive warranties and are always here for follow-up questions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <div className="relative overflow-hidden rounded-lg border border-black">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image 
                    src="/images/svc/customer.webp"
                    alt="Happy customer satisfied with plumbing service guarantee"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1200px) 50vw, 600px"
                  />
                </div>
                {/* Blue Overlay with 75% opacity */}
                <div className="absolute inset-0 bg-gray-900/85 "></div>
                <div className="relative z-10 text-white p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Our Guarantee to You</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                      <span>1-Year warranty on all workmanship</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                      <span>Upfront, transparent pricing</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                      <span>Clean, respectful service</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                      <span>Licensed & insured professionals</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                      <span>100% satisfaction guarantee</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-blue-700">
                    <p className="text-blue-200 text-sm text-center">
                      If you're not completely satisfied, we'll make it right. That's our promise to your family.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/svc/home.webp"
            alt="Beautiful home with professional plumbing services"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Blue Overlay with 75% opacity */}
        <div className="absolute inset-0 bg-blue-600/75"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Home's Plumbing?</h2>
          <p className="text-xl mb-8">
            From small repairs to complete renovations, we're here to help your family live more comfortably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${globals.business_phone}`}
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Call Today: {globals.business_phone}
            </a>
            <Link 
              href="/contact"
              className="bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-600 transition-colors"
            >
              Schedule Free Consultation
            </Link>
          </div>
          <p className="text-sm mt-6 text-blue-200">
            Family-owned • Licensed & Insured • Serving Pittsburgh families since 1985
          </p>
        </div>
      </section>
    </div>
  );
}