import { Shovel, MapPin, Shield, AlertTriangle, Clock, CheckCircle, Star, Wrench, Home, TreePine, Camera, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ExcavationProcessCarousel from '@/components/ui/ExcavationProcessCarousel';
import globals from 'globals.json';

export const metadata = {
  title: 'Professional Excavation Services - Pittsburgh & Oakdale PA | Licensed Plumbing Excavation',
  description: 'Expert plumbing excavation services in Pittsburgh PA. Pipe replacement, sewer line repair, emergency excavation. Licensed & insured contractors serving Oakdale, Moon Township, Robinson Township.',
  keywords: 'excavation services Pittsburgh, pipe excavation PA, sewer line excavation Oakdale, emergency excavation Moon Township, plumbing excavation Robinson Township',
  openGraph: {
    title: 'Excavation Services - Pittsburgh Professional Plumber',
    description: 'Professional plumbing excavation services in Pittsburgh PA. Expert pipe replacement and sewer line repair.',
    url: 'https://meyersplumbing.net/services/excavation',
  }
};

export default function ExcavationPage() {
  const excavationTypes = [
    {
      type: "Traditional Open Excavation",
      icon: Shovel,
      image: "/images/svc/excavation.webp",
      bestFor: "Major pipe replacement, new installations, accessible areas",
      process: "Full excavation with proper shoring and safety protocols",
      advantages: ["Complete access to work area", "Cost-effective for large jobs", "Allows for thorough inspection", "Can address multiple issues"],
      considerations: ["Landscape disruption", "Longer restoration time", "Weather dependent", "Access limitations"],
      timeframe: "2-5 days",
      restoration: "Full landscape restoration included"
    },
    {
      type: "Trenchless Technology",
      icon: Zap,
      image: "/images/svc/trenchless.webp",
      bestFor: "Minimal disruption, under driveways/landscaping, established areas",
      process: "Pipe bursting or pipe lining with minimal surface disturbance",
      advantages: ["Minimal landscape damage", "Faster completion", "Weather resistant", "Preserves mature landscaping"],
      considerations: ["Higher upfront cost", "Limited to certain pipe conditions", "May require access points", "Specialized equipment needed"],
      timeframe: "1-2 days",
      restoration: "Minimal restoration required"
    },
    {
      type: "Precision Excavation",
      icon: Camera,
      image: "/images/svc/precision.webp",
      bestFor: "Utility-dense areas, tight spaces, delicate environments",
      process: "Targeted digging with advanced locating and careful hand work",
      advantages: ["Surgical precision", "Protects existing utilities", "Minimizes collateral damage", "Safe around obstacles"],
      considerations: ["Slower process", "Higher labor costs", "May still require restoration", "Limited to smaller areas"],
      timeframe: "1-3 days",
      restoration: "Targeted restoration only"
    }
  ];

  const whenToExcavate = [
    {
      situation: "Complete Pipe Failure",
      severity: "Critical",
      description: "Collapsed or severely damaged sections that can't be repaired",
      signs: ["Sinkholes in yard", "Constant wet spots", "Sewage surfacing", "Foundation settlement"],
      urgency: "Immediate action required",
      approach: "Emergency excavation to prevent property damage"
    },
    {
      situation: "Recurring Blockages",
      severity: "Moderate",
      description: "Persistent clogs that keep returning despite cleaning",
      signs: ["Monthly service calls", "Multiple drain backups", "Tree root infiltration", "Pipe offset or bellying"],
      urgency: "Plan within 30-60 days",
      approach: "Scheduled excavation with permanent solution"
    },
    {
      situation: "System Upgrades",
      severity: "Planned",
      description: "Proactive improvements for aging infrastructure",
      signs: ["Pipes over 50 years old", "Frequent minor issues", "Home renovations", "Water pressure problems"],
      urgency: "Schedule during ideal weather",
      approach: "Comprehensive system evaluation and upgrade"
    },
    {
      situation: "New Construction",
      severity: "Planned",
      description: "New installations for additions or new connections",
      signs: ["Home additions", "New bathroom/kitchen", "Garage conversions", "ADU construction"],
      urgency: "Coordinate with construction timeline",
      approach: "Integrated excavation with project schedule"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Pre-Excavation Planning",
      description: "Comprehensive site assessment and utility location",
      image: "/images/svc/planning.webp", // Add your image URL here
      activities: [
        "Call 811 for utility marking",
        "Video inspection of existing pipes",
        "Soil composition analysis",
        "Access route planning",
        "Permit acquisition"
      ],
      timeframe: "2-3 days before dig"
    },
    {
      step: 2,
      title: "Site Preparation",
      description: "Protecting your property and establishing work zones",
      image: "/images/svc/site-prep.webp", // Add your image URL here
      activities: [
        "Landscaping protection measures",
        "Access route preparation",
        "Equipment staging",
        "Safety barrier installation",
        "Neighbor notification"
      ],
      timeframe: "Day of excavation"
    },
    {
      step: 3,
      title: "Precise Excavation",
      description: "Careful digging with continuous monitoring",
      image: "/images/svc/excavation.webp", // Add your image URL here
      activities: [
        "Hand digging near utilities",
        "Proper trench shoring",
        "Soil removal and staging",
        "Continuous safety monitoring",
        "Progress documentation"
      ],
      timeframe: "1-3 days"
    },
    {
      step: 4,
      title: "Plumbing Work",
      description: "Professional pipe installation or repair",
      image: "/images/svc/installation.webp", // Add your image URL here
      activities: [
        "Pipe removal/installation",
        "Proper bedding and backfill",
        "Connection and testing",
        "Inspection and approval",
        "System pressure testing"
      ],
      timeframe: "1-2 days"
    },
    {
      step: 5,
      title: "Complete Restoration",
      description: "Returning your property to original condition",
      image: "/images/svc/finish.webp", // Add your image URL here
      activities: [
        "Soil compaction and grading",
        "Seed or sod installation",
        "Driveway/walkway repair",
        "Irrigation system restoration",
        "Final cleanup and inspection"
      ],
      timeframe: "1-2 days"
    }
  ];

  const safetyMeasures = [
    {
      category: "Utility Protection",
      icon: Shield,
      measures: [
        "Professional utility locating services",
        "Hand digging within 18 inches of marked utilities",
        "Electronic detection equipment",
        "Coordination with utility companies"
      ]
    },
    {
      category: "Trench Safety",
      icon: Shovel,
      measures: [
        "Proper slope angles (OSHA compliant)",
        "Trench boxes and shoring systems",
        "Continuous atmosphere monitoring",
        "Safe entry and exit points"
      ]
    },
    {
      category: "Property Protection",
      icon: Home,
      measures: [
        "Protective barriers around landscaping",
        "Driveway and walkway protection",
        "Foundation monitoring",
        "Sprinkler system safeguards"
      ]
    },
    {
      category: "Environmental Safety",
      icon: TreePine,
      measures: [
        "Soil contamination testing",
        "Proper waste disposal",
        "Erosion control measures",
        "Groundwater protection protocols"
      ]
    }
  ];

  const projectExamples = [
    {
      project: "Historic Home Main Line Replacement",
      challenge: "100-year-old cast iron pipe under mature oak trees and brick patio",
      solution: "Combination approach: trenchless under trees, precision excavation for patio section",
      outcome: "Preserved all trees, restored patio to original condition, new 50-year pipe system",
      timeline: "4 days total",
      customer: "Heritage District Homeowner",
      quote: "They treated our historic property with incredible care. You can't even tell they were here."
    },
    {
      project: "Collapsed Sewer Line Emergency",
      challenge: "Complete pipe collapse under driveway during winter, sewage backup into basement",
      solution: "Emergency excavation with heated workspace, temporary bypass system installed",
      outcome: "Restored service within 24 hours, permanent repair completed, driveway fully restored",
      timeline: "2 days emergency + 1 day restoration",
      customer: "Family with Young Children",
      quote: "They worked through the snow to get our plumbing back. True professionals in a crisis."
    },
    {
      project: "Whole House Repipe with Landscape Preservation",
      challenge: "Replace entire sewer system while protecting $30,000 landscape investment",
      solution: "Strategic excavation points with hand digging around prize plantings",
      outcome: "New PVC system installed, zero plant loss, enhanced drainage added",
      timeline: "5 days with weekend break",
      customer: "Garden Enthusiast",
      quote: "My prize roses didn't lose a single bloom. The attention to detail was amazing."
    }
  ];

  const costFactors = [
    {
      factor: "Excavation Depth",
      impact: "High",
      description: "Deeper excavations require more safety measures and equipment",
      typical: "6-12 feet for main lines"
    },
    {
      factor: "Soil Conditions",
      impact: "High",
      description: "Rocky, clay, or unstable soils increase complexity",
      typical: "Varies by location"
    },
    {
      factor: "Access Difficulty",
      impact: "Medium",
      description: "Tight spaces or poor access increase labor time",
      typical: "Standard yard access"
    },
    {
      factor: "Utility Density",
      impact: "Medium",
      description: "Multiple utilities require careful hand digging",
      typical: "Typical residential density"
    },
    {
      factor: "Restoration Scope",
      impact: "Medium",
      description: "Landscaping, driveways, and hardscaping repairs",
      typical: "Basic lawn restoration"
    },
    {
      factor: "Permit Requirements",
      impact: "Low",
      description: "Municipal permits and inspection fees",
      typical: "$100-500 depending on scope"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-129 bg-[url('/images/hero/wrench-bg.webp')] bg-gradient-to-r from-amber-900 to-orange-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Shovel className="h-12 w-12 text-amber-300 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Professional Excavation Services</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              When pipes fail beyond repair, we dig smart, work safe, and restore completely. Your property is in expert hands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${globals.business_phone}`}
                className="bg-amber-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-amber-600 transition-colors"
              >
                Emergency Service: {globals.business_phone}
              </a>
              <Link 
                href="/contact"
                className="bg-white text-amber-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Free Site Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Safety First Banner */}
      <section className="py-6 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4">
            <Shield className="h-6 w-6 text-yellow-300" />
            <p className="font-bold">SAFETY FIRST: Licensed • Insured • OSHA Compliant • Call Before You Dig Certified</p>
            <Shield className="h-6 w-6 text-yellow-300" />
          </div>
        </div>
      </section>

      {/* When Excavation is Needed */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">When is Excavation the Right Solution?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Excavation is serious work, but sometimes it&apos;s the only way to permanently solve underground problems. Here&apos;s when it makes sense.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whenToExcavate.map((situation, index) => (
              <div key={index} className={`p-6 rounded-lg border-l-4 ${
                situation.severity === 'Critical' ? 'bg-red-50 border-red-500' :
                situation.severity === 'Moderate' ? 'bg-yellow-50 border-yellow-500' :
                'bg-blue-50 border-blue-500'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-xl text-gray-900">{situation.situation}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    situation.severity === 'Critical' ? 'bg-red-100 text-red-800' :
                    situation.severity === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {situation.severity}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{situation.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Warning Signs:</h4>
                  <ul className="space-y-1">
                    {situation.signs.map((sign, signIndex) => (
                      <li key={signIndex} className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Timeline:</p>
                    <p className="text-gray-700 text-sm">{situation.urgency}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Our Approach:</p>
                    <p className="text-gray-700 text-sm">{situation.approach}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excavation Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Smart Excavation Approaches</h2>
          
          {excavationTypes.map((method, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                  <div className="relative bg-gray-200 rounded-lg h-80 overflow-hidden">
                    {method.image ? (
                      <Image 
                        src={method.image}
                        alt={`${method.type} excavation method`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <div className="text-center text-gray-600">
                          <method.icon className="h-16 w-16 mx-auto mb-4" />
                          <p className="text-lg font-medium">{method.type}</p>
                          <p className="text-sm">Professional equipment in action</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-amber-100 p-4 rounded-full mr-4">
                      <method.icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{method.type}</h3>
                      <p className="text-gray-600 italic">{method.bestFor}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{method.process}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">Advantages:</h4>
                      <ul className="space-y-2">
                        {method.advantages.map((advantage, advantageIndex) => (
                          <li key={advantageIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-600 mb-3">Considerations:</h4>
                      <ul className="space-y-2">
                        {method.considerations.map((consideration, considerationIndex) => (
                          <li key={considerationIndex} className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{consideration}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-amber-200">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-amber-700">Typical Timeframe:</p>
                        <p className="text-gray-700">{method.timeframe}</p>
                      </div>
                      <div>
                        <p className="font-medium text-amber-700">Restoration:</p>
                        <p className="text-gray-700">{method.restoration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Excavation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Excavation Process</h2>
            <p className="text-xl text-gray-600">Experience our systematic approach to safe and efficient excavation</p>
          </div>
          <ExcavationProcessCarousel steps={processSteps} />
        </div>
      </section>

      {/* Safety Measures */}
      <section className="relative py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/svc/site-prep.webp')" }}
        />
        <div className="absolute inset-0 bg-blue-800/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative bg-gray-200 rounded-lg h-96 overflow-hidden">
                <Image 
                  src="/images/svc/ppe.webp"
                  alt="Safety equipment and personal protective gear"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-white">Safety is Non-Negotiable</h2>
              <p className="text-gray-200 mb-8">
                Excavation work carries serious risks. We follow strict safety protocols to protect our workers, your property, and your family.
              </p>
              <div className="space-y-6">
                {safetyMeasures.map((safety, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                      <safety.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">{safety.category}</h3>
                      <ul className="space-y-1">
                        {safety.measures.map((measure, measureIndex) => (
                          <li key={measureIndex} className="text-gray-200 text-sm flex items-start">
                            <CheckCircle className="h-3 w-3 text-green-400 mr-2 mt-1 flex-shrink-0" />
                            <span>{measure}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Examples */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Real Projects, Real Solutions</h2>
          <div className="space-y-12">
            {projectExamples.map((project, index) => (
              <div key={index} className="bg-gradient-to-r from-amber-50 to-white p-8 rounded-lg border border-amber-100">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.project}</h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">{project.timeline}</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{project.customer}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Challenge:</h4>
                      <p className="text-gray-700 text-sm">{project.challenge}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Our Solution:</h4>
                    <p className="text-gray-700 text-sm mb-4">{project.solution}</p>
                    <h4 className="font-semibold text-green-600 mb-2">Results:</h4>
                    <p className="text-gray-700 text-sm">{project.outcome}</p>
                  </div>
                  <div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 h-full flex flex-col justify-center">
                      <p className="text-gray-700 italic text-sm mb-3">&quot;{project.quote}&quot;</p>
                      <p className="font-medium text-gray-900 text-sm">— {project.customer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Cost Factors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Understanding Excavation Costs</h2>
              <p className="text-gray-700 mb-8">
                Every excavation project is unique. Here are the key factors that influence pricing so you can understand what goes into your estimate.
              </p>
              <div className="space-y-6">
                {costFactors.map((factor, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{factor.factor}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        factor.impact === 'High' ? 'bg-red-100 text-red-700' :
                        factor.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {factor.impact} Impact
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mb-2">{factor.description}</p>
                    <p className="text-gray-600 text-xs"><strong>Typical:</strong> {factor.typical}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <div className="bg-amber-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Pricing Promise</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                    <span>Free on-site assessment and estimate</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                    <span>Detailed written proposals</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                    <span>No hidden costs or surprises</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                    <span>Complete restoration included</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                    <span>1-year warranty on all work</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-amber-700">
                  <p className="text-amber-200 text-sm text-center">
                    We believe in transparency. You&apos;ll know exactly what you&apos;re paying for and why.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="relative py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/svc/installation.webp')" }}
        />
        <div className="absolute inset-0 bg-blue-700/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <div className="mb-8">
            <AlertTriangle className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-4">Excavation Emergency?</h2>
            <p className="text-xl text-red-100">
              Collapsed pipes and sinkholes can&apos;t wait. Our emergency excavation team is ready to respond immediately.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-red-700/75 p-6 rounded-lg">
              <Clock className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-bold mb-2">24/7 Response</h3>
              <p className="text-red-100">Emergency excavation team ready to mobilize immediately</p>
            </div>
            <div className="bg-red-700/75 p-6 rounded-lg">
              <Shield className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-bold mb-2">Property Protection</h3>
              <p className="text-red-100">Prevent further damage with immediate containment</p>
            </div>
            <div className="bg-red-700/75 p-6 rounded-lg">
              <Shovel className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-bold mb-2">Permanent Solutions</h3>
              <p className="text-red-100">Fix the root cause, not just the symptoms</p>
            </div>
          </div>

          <a 
            href={`tel:${globals.business_phone}`}
            className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-colors inline-flex items-center space-x-3"
          >
            <Shovel className="h-6 w-6" />
            <span>EMERGENCY: {globals.business_phone}</span>
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Solve Your Underground Problems?</h2>
          <p className="text-xl mb-8">
            From emergency repairs to planned upgrades, we handle excavation projects with precision, safety, and care for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-amber-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Get Free Site Assessment
            </Link>
            <a 
              href={`tel:${globals.business_phone}`}
              className="bg-amber-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-amber-400 transition-colors"
            >
              Call: {globals.business_phone}
            </a>
          </div>
          <p className="text-sm mt-6 text-amber-200">
            Licensed & Insured • OSHA Compliant • Complete Restoration Included • 1-Year Warranty
          </p>
        </div>
      </section>
    </div>
  );
}