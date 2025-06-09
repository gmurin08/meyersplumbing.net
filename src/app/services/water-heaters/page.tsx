import { Thermometer, Zap, DollarSign, Clock, Shield, Wrench, Droplets, CheckCircle, Star, AlertTriangle, TrendingUp, Award, Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import EnergySavingsCalculator from '@/components/ui/EnergySavingsCalculator';
import globals from 'globals.json';

export const metadata = {
  title: 'Water Heater Installation & Repair - Pittsburgh Plumbing Services',
  description: 'Professional water heater installation, repair & replacement in Pittsburgh PA. Same-day emergency service, tankless & traditional units. Licensed plumber serving Oakdale, Moon Township & surrounding areas.',
  keywords: 'water heater installation Pittsburgh, water heater repair PA, tankless water heater, emergency water heater service, Oakdale plumber',
  openGraph: {
    title: 'Water Heater Services - Pittsburgh Emergency Plumber',
    description: 'Expert water heater installation & repair in Pittsburgh PA. Same-day service available. Call for emergency water heater replacement.',
    url: 'https://meyersplumbing.net/services/water-heaters',
  }
};

export default function WaterHeatersPage() {
  const heaterTypes = [
    {
      type: "Traditional Tank",
      icon: Home,
      bestFor: "Budget-conscious families, consistent hot water needs",
      capacity: "30-80 gallons",
      lifespan: "8-12 years",
      pros: ["Lower upfront cost", "Simple installation", "Familiar technology", "Easy maintenance"],
      cons: ["Higher energy bills", "Limited hot water supply", "Takes up more space", "Standby heat loss"],
      energyRating: "0.60-0.70 EF",
      price: "$800-$2,500"
    },
    {
      type: "Tankless (On-Demand)",
      icon: Zap,
      bestFor: "Energy-conscious homeowners, unlimited hot water needs",
      capacity: "Unlimited supply",
      lifespan: "15-20 years", 
      pros: ["Endless hot water", "40% energy savings", "Space-saving design", "Longer lifespan"],
      cons: ["Higher upfront cost", "Complex installation", "May need electrical upgrade", "Flow rate limitations"],
      energyRating: "0.82-0.98 EF",
      price: "$1,500-$4,500"
    },
    {
      type: "Hybrid Heat Pump",
      icon: TrendingUp,
      bestFor: "Maximum efficiency, warm climate locations",
      capacity: "50-80 gallons",
      lifespan: "10-15 years",
      pros: ["Highest efficiency", "Tax rebates available", "Environmental friendly", "Smart controls"],
      cons: ["Highest upfront cost", "Climate dependent", "Requires space clearance", "Complex technology"],
      energyRating: "2.0-3.5 EF",
      price: "$1,200-$3,500"
    }
  ];

  const warningSigns = [
    {
      sign: "No Hot Water",
      urgency: "Emergency",
      description: "Complete loss of hot water, especially in winter",
      action: "Call immediately for same-day service"
    },
    {
      sign: "Strange Noises",
      urgency: "Urgent",
      description: "Popping, crackling, or rumbling sounds from tank",
      action: "Schedule inspection within 48 hours"
    },
    {
      sign: "Rusty Water",
      urgency: "Moderate",
      description: "Brown or reddish water from hot taps",
      action: "Schedule evaluation within 1 week"
    },
    {
      sign: "Water Around Unit",
      urgency: "Emergency",
      description: "Any visible water pooling around water heater",
      action: "Turn off unit and call immediately"
    },
    {
      sign: "Inconsistent Temperature",
      urgency: "Moderate", 
      description: "Water temperature fluctuates or never gets hot enough",
      action: "Schedule service call"
    },
    {
      sign: "Age Over 8 Years",
      urgency: "Planning",
      description: "Traditional tank units should be evaluated",
      action: "Schedule efficiency consultation"
    }
  ];

  const costCalculator = [
    {
      scenario: "Family of 4",
      usage: "High (80 gallons/day)",
      traditional: {
        annual: "$650",
        tenYear: "$6,500"
      },
      tankless: {
        annual: "$390", 
        tenYear: "$3,900"
      },
      savings: "$2,600"
    },
    {
      scenario: "Couple",
      usage: "Medium (50 gallons/day)", 
      traditional: {
        annual: "$485",
        tenYear: "$4,850"
      },
      tankless: {
        annual: "$290",
        tenYear: "$2,900" 
      },
      savings: "$1,950"
    },
    {
      scenario: "Single Person",
      usage: "Low (25 gallons/day)",
      traditional: {
        annual: "$285",
        tenYear: "$2,850"
      },
      tankless: {
        annual: "$170",
        tenYear: "$1,700"
      },
      savings: "$1,150"
    }
  ];

  const customerStories = [
    {
      name: "The Johnson Family",
      situation: "Old tank failed during holiday gathering",
      solution: "Emergency tankless installation in 4 hours",
      outcome: "Never ran out of hot water again, saving $800/year",
      quote: "Matt's team saved our Christmas! The new tankless unit handles our whole family plus guests.",
      timeframe: "Same day emergency"
    },
    {
      name: "Sarah & Mike",
      situation: "Monthly energy bills over $300",
      solution: "Upgraded to hybrid heat pump system", 
      outcome: "Energy bills dropped by 45%, earned $500 tax rebate",
      quote: "The energy savings pay for the unit. Should have done this years ago!",
      timeframe: "Next day installation"
    },
    {
      name: "Downtown Condo Owner",
      situation: "Limited space, old inefficient unit",
      solution: "Wall-mounted tankless with smart controls",
      outcome: "Freed up closet space, app controls temperature remotely",
      quote: "Love the space savings and being able to control it from my phone.",
      timeframe: "Scheduled installation"
    }
  ];

  const maintenanceTips = [
    {
      frequency: "Monthly",
      task: "Check temperature setting",
      description: "Ensure thermostat is set to 120°F for safety and efficiency"
    },
    {
      frequency: "Every 6 Months", 
      task: "Test pressure relief valve",
      description: "Lift valve handle briefly to ensure proper operation"
    },
    {
      frequency: "Annually",
      task: "Drain and flush tank",
      description: "Remove sediment buildup to maintain efficiency"
    },
    {
      frequency: "Every 2-3 Years",
      task: "Replace anode rod",
      description: "Protect tank from corrosion to extend lifespan"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-[url('/images/hero/wrench-bg.webp')] bg-gradient-to-r from-orange-900 to-red-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Thermometer className="h-12 w-12 text-orange-300 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Water Heater Services</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              From emergency replacements to energy-efficient upgrades, we&apos;ll keep your hot water flowing and your energy bills low.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${globals.business_phone}`}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-orange-600 transition-colors"
              >
                Emergency Service: {globals.business_phone}
              </a>
              <Link 
                href="/contact"
                className="bg-white text-orange-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Free Energy Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-4 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4">
            <AlertTriangle className="h-5 w-5 text-yellow-300" />
            <p className="font-medium">Water Heater Emergency? We stock all major brands and can install same-day in most cases!</p>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Is Your Water Heater Trying to Tell You Something?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSigns.map((warning, index) => (
              <div key={index} className={`p-6 rounded-lg border-l-4 ${
                warning.urgency === 'Emergency' ? 'bg-red-50 border-red-500' :
                warning.urgency === 'Urgent' ? 'bg-orange-50 border-orange-500' :
                warning.urgency === 'Moderate' ? 'bg-yellow-50 border-yellow-500' :
                'bg-blue-50 border-blue-500'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{warning.sign}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    warning.urgency === 'Emergency' ? 'bg-red-100 text-red-800' :
                    warning.urgency === 'Urgent' ? 'bg-orange-100 text-orange-800' :
                    warning.urgency === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {warning.urgency}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{warning.description}</p>
                <p className="font-medium text-gray-900 text-sm">{warning.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Heater Types Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Find Your Perfect Water Heater</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Every home is different. We&apos;ll help you choose the right water heater for your family&apos;s needs, budget, and efficiency goals.
          </p>
          
          {heaterTypes.map((heater, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                  <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <heater.icon className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">{heater.type} Water Heater</p>
                      <p className="text-sm">Professional installation</p>
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-100 p-4 rounded-full mr-4">
                      <heater.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{heater.type}</h3>
                      <p className="text-gray-600 italic">{heater.bestFor}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900">Capacity:</p>
                      <p className="text-gray-700">{heater.capacity}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Lifespan:</p>
                      <p className="text-gray-700">{heater.lifespan}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Efficiency:</p>
                      <p className="text-gray-700">{heater.energyRating}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Price Range:</p>
                      <p className="text-gray-700">{heater.price}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">Advantages:</h4>
                      <ul className="space-y-1">
                        {heater.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-3">Considerations:</h4>
                      <ul className="space-y-1">
                        {heater.cons.map((con, conIndex) => (
                          <li key={conIndex} className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{con}</span>
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

      {/* Interactive Energy Savings Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Energy Savings Potential</h2>
            <p className="text-xl text-gray-600">Calculate exactly how much you could save with a water heater upgrade</p>
          </div>
          <EnergySavingsCalculator />
        </div>
      </section>

      {/* Savings Examples */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Real Savings Examples</h2>
            <p className="text-blue-200 text-lg max-w-3xl mx-auto">
              See how much families like yours are saving with energy-efficient water heaters. These are actual savings from Pittsburgh area homes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {costCalculator.map((calc, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4 text-center">{calc.scenario}</h3>
                <p className="text-blue-200 text-sm mb-4 text-center">{calc.usage}</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-blue-200 text-xs">Traditional Tank</p>
                      <p className="font-bold">{calc.traditional.annual}/year</p>
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs">Tankless</p>
                      <p className="font-bold">{calc.tankless.annual}/year</p>
                    </div>
                  </div>
                  <div className="text-center border-t border-blue-700 pt-4">
                    <p className="text-green-300 text-sm">10-Year Savings</p>
                    <p className="font-bold text-green-400 text-2xl">{calc.savings}</p>
                    <p className="text-green-300 text-xs">Plus longer equipment life</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-blue-200 text-sm">*Savings based on Pittsburgh area energy costs and average usage patterns</p>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Real Families, Real Savings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-b from-orange-50 to-white p-6 rounded-lg border border-orange-100">
                <div className="mb-4">
                  <h3 className="font-bold text-gray-900 mb-1">{story.name}</h3>
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">{story.timeframe}</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-red-600">Challenge:</p>
                    <p className="text-gray-700">{story.situation}</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-600">Solution:</p>
                    <p className="text-gray-700">{story.solution}</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-600">Result:</p>
                    <p className="text-gray-700">{story.outcome}</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white rounded border-l-4 border-orange-500">
                  <p className="text-gray-700 italic text-sm">&quot;{story.quote}&quot;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Extend Your Water Heater&apos;s Life</h2>
              <p className="text-gray-700 mb-8">
                Simple maintenance can double your water heater&apos;s lifespan and keep it running efficiently. Here&apos;s what every homeowner should know:
              </p>
              <div className="space-y-6">
                {maintenanceTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                      <Wrench className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <h3 className="font-semibold text-gray-900 mr-3">{tip.task}</h3>
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">{tip.frequency}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-blue-800 font-medium text-sm">
                  💡 Pro Tip: We offer annual maintenance plans that handle all of this for you, plus priority service when you need repairs.
                </p>
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <Clock className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Maintenance Schedule</p>
                  <p className="text-sm">Keep your system running smoothly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-2xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Assessment</h3>
              <p className="text-gray-600 text-sm">We evaluate your current system, usage patterns, and recommend the best solution for your needs and budget.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-2xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">Upfront pricing with no hidden fees. We explain all options, rebates, and financing available to you.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-2xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Professional Installation</h3>
              <p className="text-gray-600 text-sm">Expert installation with proper permits, code compliance, and thorough testing of your new system.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-2xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">System walkthrough, maintenance scheduling, and warranty registration. We&apos;re here for the long haul.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Reliable Hot Water?</h2>
          <p className="text-xl mb-8">
            Whether you need emergency replacement or want to upgrade for efficiency, we&apos;ll find the perfect water heater solution for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${globals.business_phone}`}
              className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Call Today: {globals.business_phone}
            </a>
            <Link 
              href="/contact"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-orange-400 transition-colors"
            >
              Schedule Free Consultation
            </Link>
          </div>
          <p className="text-sm mt-6 text-orange-200">
            Same-Day Emergency Service • Licensed & Insured • Manufacturer Warranties • Financing Available
          </p>
        </div>
      </section>
    </div>
  );
}