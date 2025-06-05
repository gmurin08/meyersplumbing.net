import { Building, Clock, Shield, Wrench, Users, TrendingUp, Zap, CheckCircle, Star, Phone, AlertTriangle, Calculator, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import globals from 'globals.json';

export default function CommercialPlumbingPage() {
  const businessTypes = [
    {
      icon: Building,
      title: "Office Buildings",
      challenges: ["High tenant turnover", "Aging infrastructure", "Water pressure issues", "ADA compliance"],
      solutions: ["Preventive maintenance programs", "Rapid response for tenant issues", "System upgrades", "Compliance audits"]
    },
    {
      icon: Users,
      title: "Retail & Restaurants",
      challenges: ["Can't afford downtime", "Health code compliance", "Grease management", "High usage volume"],
      solutions: ["After-hours service", "Food service expertise", "Grease trap maintenance", "Emergency response"]
    },
    {
      icon: Shield,
      title: "Healthcare Facilities",
      challenges: ["Strict sanitation requirements", "Cannot interrupt operations", "Specialized fixtures", "Regulatory compliance"],
      solutions: ["Medical-grade installations", "Scheduled maintenance", "Emergency protocols", "Code compliance"]
    },
    {
      icon: Wrench,
      title: "Manufacturing",
      challenges: ["Production line dependency", "Industrial waste systems", "Process water needs", "Equipment integration"],
      solutions: ["Industrial system design", "Process optimization", "Waste management", "Equipment coordination"]
    }
  ];

  const services = [
    {
      category: "Preventive Maintenance",
      icon: Clock,
      description: "Avoid costly shutdowns with scheduled maintenance",
      offerings: [
        "Quarterly system inspections",
        "Drain line maintenance", 
        "Water heater service",
        "Fixture replacement programs",
        "Emergency preparedness planning"
      ]
    },
    {
      category: "Emergency Response",
      icon: AlertTriangle, 
      description: "Minimize business disruption with rapid response",
      offerings: [
        "24/7 emergency availability",
        "Average 30-minute response time",
        "Mobile service units",
        "Temporary system solutions",
        "Priority scheduling for clients"
      ]
    },
    {
      category: "System Design & Installation",
      icon: Building,
      description: "Custom plumbing solutions for your business needs",
      offerings: [
        "New construction plumbing",
        "Tenant improvement projects", 
        "System retrofits and upgrades",
        "ADA compliance modifications",
        "Energy efficiency improvements"
      ]
    },
    {
      category: "Specialized Solutions",
      icon: Zap,
      description: "Industry-specific expertise for unique requirements", 
      offerings: [
        "Grease trap installation & service",
        "Backflow prevention systems",
        "Medical gas systems",
        "Industrial waste management",
        "Water treatment systems"
      ]
    }
  ];

  const businessImpacts = [
    {
      problem: "Unplanned Downtime",
      cost: "$5,000-$50,000",
      description: "Per day of business interruption",
      solution: "Preventive maintenance reduces emergency repairs by 75%"
    },
    {
      problem: "Health Code Violations", 
      cost: "$1,000-$25,000",
      description: "Fines plus potential closure",
      solution: "Compliance audits and certified installations"
    },
    {
      problem: "Water Damage",
      cost: "$10,000-$100,000",
      description: "Property damage and lost inventory", 
      solution: "Leak detection systems and rapid response"
    },
    {
      problem: "Inefficient Systems",
      cost: "$2,000-$20,000",
      description: "Annually in wasted utilities",
      solution: "Energy audits and system optimization"
    }
  ];

  const caseStudies = [
    {
      business: "Downtown Restaurant",
      industry: "Food Service",
      challenge: "Recurring drain backups during peak hours causing health code violations",
      solution: "Installed grease recovery system and implemented weekly maintenance schedule",
      results: "Zero violations in 18 months, 30% reduction in service calls",
      testimonial: "Matt's team saved our business. We haven't had a single backup since the new system was installed.",
      contact: "Maria Santos, Owner"
    },
    {
      business: "Medical Office Complex", 
      industry: "Healthcare",
      challenge: "Aging water heater causing temperature fluctuations in sterilization equipment",
      solution: "Upgraded to redundant tankless system with temperature monitoring",
      results: "Consistent hot water supply, reduced energy costs by 40%",
      testimonial: "The new system is incredibly reliable. Our sterilization processes run perfectly every time.",
      contact: "Dr. James Wilson, Practice Manager"
    },
    {
      business: "Manufacturing Facility",
      industry: "Industrial", 
      challenge: "Main sewer line failure threatening production shutdown",
      solution: "Emergency bypass system installed, followed by trenchless pipe replacement",
      results: "Production continued without interruption, permanent solution installed",
      testimonial: "They kept us running when we could have lost $100,000 in production. True professionals.",
      contact: "Kevin Rodriguez, Plant Manager"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-[url('/images/hero/wrench-bg.webp')] bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Building className="h-12 w-12 text-blue-400 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Commercial Plumbing Services</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Protect your business operations with reliable commercial plumbing solutions. We understand that downtime costs money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${globals.business_phone}`}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Emergency Service: {globals.business_phone}
              </a>
              <Link 
                href="/contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Credentials */}
      <section className="py-8 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-6 w-6 text-blue-300" />
              <span className="font-medium">Licensed & Bonded</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-6 w-6 text-blue-300" />
              <span className="font-medium">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-6 w-6 text-blue-300" />
              <span className="font-medium">Commercial Certified</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-6 w-6 text-blue-300" />
              <span className="font-medium">$2M Liability Insurance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Business Cost Impact */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The True Cost of Plumbing Problems</h2>
            <p className="text-xl text-gray-600">Don't let plumbing issues drain your profits</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessImpacts.map((impact, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="font-bold text-gray-900 mb-2">{impact.problem}</h3>
                <div className="text-2xl font-bold text-red-600 mb-1">{impact.cost}</div>
                <p className="text-sm text-gray-600 mb-4">{impact.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-green-700">Our Solution:</p>
                  <p className="text-sm text-gray-700">{impact.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Industry-Specific Solutions</h2>
          
          {businessTypes.map((business, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                  <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <business.icon className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">{business.title}</p>
                      <p className="text-sm">Professional environment</p>
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-4 rounded-full mr-4">
                      <business.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{business.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">Common Challenges:</h4>
                      <ul className="space-y-2">
                        {business.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">Our Solutions:</h4>
                      <ul className="space-y-2">
                        {business.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Comprehensive Commercial Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.category}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {service.offerings.map((offering, offeringIndex) => (
                    <li key={offeringIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{offering}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Success Stories: Real Problems, Real Solutions</h2>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-lg border border-blue-100">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.business}</h3>
                    <p className="text-blue-600 font-medium mb-4">{study.industry}</p>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Challenge:</h4>
                      <p className="text-gray-700 text-sm">{study.challenge}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Solution:</h4>
                    <p className="text-gray-700 text-sm mb-4">{study.solution}</p>
                    <h4 className="font-semibold text-green-600 mb-2">Results:</h4>
                    <p className="text-gray-700 text-sm">{study.results}</p>
                  </div>
                  <div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="text-gray-700 italic text-sm mb-3">"{study.testimonial}"</p>
                      <p className="font-medium text-gray-900 text-sm">— {study.contact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Programs */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-blue-800 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-blue-200">
                  <Calculator className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Maintenance ROI Calculator</p>
                  <p className="text-sm">See your potential savings</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Preventive Maintenance Programs</h2>
              <p className="text-blue-200 mb-6 text-lg">
                Smart businesses invest in prevention. Our maintenance programs typically save clients 3-5x their investment by preventing costly emergencies.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <span>Reduce emergency repairs by up to 75%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <span>Priority scheduling for urgent issues</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <span>Detailed maintenance reports and recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <span>Budgeting assistance for future improvements</span>
                </div>
              </div>

              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="font-bold mb-4">Program Benefits:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-blue-200">Cost Savings:</p>
                    <p>15-30% reduction in annual plumbing costs</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-200">Downtime Prevention:</p>
                    <p>90% fewer emergency shutdowns</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-200">Extended Lifespan:</p>
                    <p>2-3x longer equipment life</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-200">Peace of Mind:</p>
                    <p>24/7 priority emergency response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <AlertTriangle className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-4">Commercial Emergency Response</h2>
            <p className="text-xl text-red-100">
              When your business is at risk, every minute counts. Our commercial emergency team is standing by.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-red-700 p-6 rounded-lg">
              <Clock className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-bold mb-2">Rapid Response</h3>
              <p className="text-red-100">Average 30-minute response time for commercial emergencies</p>
            </div>
            <div className="bg-red-700 p-6 rounded-lg">
              <Users className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-bold mb-2">Dedicated Team</h3>
              <p className="text-red-100">Commercial-certified plumbers with mobile service units</p>
            </div>
            <div className="bg-red-700 p-6 rounded-lg">
              <Shield className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-bold mb-2">Business Protection</h3>
              <p className="text-red-100">Minimize downtime with temporary solutions and rapid repairs</p>
            </div>
          </div>

          <a 
            href={`tel:${globals.business_phone}`}
            className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-colors inline-flex items-center space-x-3"
          >
            <Phone className="h-6 w-6" />
            <span>EMERGENCY: {globals.business_phone}</span>
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner with Pittsburgh's Commercial Plumbing Experts</h2>
          <p className="text-xl mb-8 text-gray-300">
            Protect your business operations with reliable plumbing solutions. Let's discuss how we can keep your business running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Request Commercial Quote
            </Link>
            <Link 
              href={`tel:${globals.business_phone}`}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Call: {globals.business_phone}
            </Link>
          </div>
          <p className="text-sm mt-6 text-gray-400">
            Commercial Licensed & Bonded • $2M Liability Insurance • 24/7 Emergency Service
          </p>
        </div>
      </section>
    </div>
  );
}