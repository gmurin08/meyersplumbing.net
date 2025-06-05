import { Zap, Leaf, Clock, Shield, CheckCircle, Star, Wrench, Home, Camera, TreePine, DollarSign, Award, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Mock globals for demo
const globals = {
  business_phone: "(555) 123-4567"
};

export default function TrenchlessPipeRepairPage() {
  const trenchlessMethods = [
    {
      method: "Pipe Bursting",
      icon: Zap,
      bestFor: "Complete pipe replacement, severely damaged lines",
      process: "New pipe is pulled through while breaking apart the old one",
      advantages: ["Completely new pipe system", "Can upsize pipe diameter", "Works with most pipe materials", "Single access point needed"],
      idealConditions: ["Straight pipe runs", "Adequate access points", "Good soil conditions", "No major utility conflicts"],
      timeframe: "1-2 days",
      disruption: "Minimal surface disturbance",
      lifespan: "50+ years"
    },
    {
      method: "Pipe Lining (CIPP)",
      icon: Shield,
      bestFor: "Structural repairs, root intrusion, minor cracks",
      process: "Resin-saturated liner cures inside existing pipe",
      advantages: ["Preserves existing pipe", "Seamless interior surface", "Resistant to root intrusion", "Cost-effective solution"],
      idealConditions: ["Structurally sound host pipe", "Round pipe shape", "Accessible cleanouts", "Dry conditions during install"],
      timeframe: "1 day",
      disruption: "Access through existing openings",
      lifespan: "50+ years"
    },
    {
      method: "Pipe Coating",
      icon: Leaf,
      bestFor: "Preventive maintenance, minor corrosion, extending pipe life",
      process: "Epoxy coating applied to interior pipe walls",
      advantages: ["Lowest cost option", "Improves flow capacity", "Prevents future corrosion", "Minimal preparation required"],
      idealConditions: ["Relatively clean pipes", "Minor corrosion only", "Good access for cleaning", "Stable pipe structure"],
      timeframe: "4-6 hours",
      disruption: "Temporary water service interruption",
      lifespan: "15-20 years"
    },
    {
      method: "Spot Repairs",
      icon: Wrench,
      bestFor: "Localized damage, single joint failures, targeted fixes",
      process: "Robotic cutters and installation tools target specific areas",
      advantages: ["Precise repairs", "Cost-effective for small areas", "Maintains pipe integrity", "Quick completion"],
      idealConditions: ["Isolated damage", "Accessible pipe sections", "Known problem locations", "Stable surrounding pipe"],
      timeframe: "2-4 hours",
      disruption: "Brief service interruption",
      lifespan: "25-30 years"
    }
  ];

  const trenchlessVsTraditional = [
    {
      factor: "Landscape Impact",
      trenchless: "Zero to minimal damage",
      traditional: "Complete excavation required",
      advantage: "trenchless"
    },
    {
      factor: "Project Duration",
      trenchless: "1-2 days typical",
      traditional: "3-7 days average",
      advantage: "trenchless"
    },
    {
      factor: "Restoration Costs",
      trenchless: "$500-2,000",
      traditional: "$3,000-15,000",
      advantage: "trenchless"
    },
    {
      factor: "Upfront Investment",
      trenchless: "Higher initial cost",
      traditional: "Lower material costs",
      advantage: "traditional"
    },
    {
      factor: "Total Project Cost",
      trenchless: "Often 20-30% less",
      traditional: "Higher with restoration",
      advantage: "trenchless"
    },
    {
      factor: "Weather Dependency",
      trenchless: "Minimal impact",
      traditional: "Highly weather dependent",
      advantage: "trenchless"
    },
    {
      factor: "Pipe Access",
      trenchless: "Limited access needed",
      traditional: "Complete pipe exposure",
      advantage: "traditional"
    },
    {
      factor: "Repair Scope",
      trenchless: "Limited to certain conditions",
      traditional: "Handles any situation",
      advantage: "traditional"
    }
  ];

  const candidateAssessment = [
    {
      category: "Excellent Candidates",
      color: "green",
      conditions: [
        "Pipes under driveways or landscaping",
        "Structural damage without collapse",
        "Root intrusion issues",
        "Minor to moderate pipe deterioration",
        "Accessible cleanouts or connection points"
      ],
      successRate: "95%+",
      recommendation: "Trenchless is ideal solution"
    },
    {
      category: "Good Candidates",
      color: "blue",
      conditions: [
        "Older pipes with some deformation",
        "Multiple small breaks or cracks",
        "Pipes with offset joints",
        "Lines with minor bellying",
        "Limited traditional access"
      ],
      successRate: "85-95%",
      recommendation: "Video inspection recommended"
    },
    {
      category: "Challenging Cases",
      color: "yellow",
      conditions: [
        "Severely collapsed sections",
        "Major pipe misalignment",
        "Unknown pipe materials",
        "Multiple utility conflicts",
        "Extremely deep installations"
      ],
      successRate: "60-85%",
      recommendation: "Detailed engineering assessment needed"
    },
    {
      category: "Not Suitable",
      color: "red",
      conditions: [
        "Complete pipe collapse",
        "Severely back-pitched pipes",
        "Active groundwater infiltration",
        "Pipes with major debris",
        "Structurally unsound soil"
      ],
      successRate: "Below 60%",
      recommendation: "Traditional excavation recommended"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Video Inspection & Assessment",
      description: "High-definition camera survey to evaluate pipe condition",
      details: [
        "Complete pipe interior documentation",
        "Measurement of damage extent",
        "Identification of problem areas",
        "Feasibility analysis for trenchless repair",
        "Detailed condition report with recommendations"
      ],
      technology: "4K HD inspection cameras"
    },
    {
      step: 2,
      title: "Pipe Cleaning & Preparation",
      description: "Thorough cleaning to ensure optimal repair conditions",
      details: [
        "High-pressure water jetting",
        "Root cutting and removal",
        "Scale and debris elimination",
        "Final inspection to verify cleanliness",
        "Surface preparation for liner adhesion"
      ],
      technology: "Robotic cleaning systems"
    },
    {
      step: 3,
      title: "Precise Repair Installation",
      description: "Professional installation using advanced trenchless technology",
      details: [
        "Custom liner or coating preparation",
        "Precision installation techniques",
        "Real-time monitoring and quality control",
        "Proper curing and finishing",
        "System pressure testing"
      ],
      technology: "Computer-controlled installation"
    },
    {
      step: 4,
      title: "Quality Verification",
      description: "Comprehensive testing to ensure repair success",
      details: [
        "Post-repair video inspection",
        "Pressure and flow testing",
        "Structural integrity verification",
        "Performance documentation",
        "Warranty activation and customer training"
      ],
      technology: "Advanced testing protocols"
    }
  ];

  const costBenefitScenarios = [
    {
      scenario: "Under Mature Landscaping",
      description: "Sewer line repair beneath 20-year-old garden",
      traditionalCost: "$15,000",
      traditionalBreakdown: "$8,000 excavation + $4,000 pipe + $3,000 restoration",
      trenchlessCost: "$9,500",
      trenchlessBreakdown: "$7,500 pipe lining + $2,000 access work",
      savings: "$5,500",
      additionalBenefits: "Preserves $8,000 worth of mature plants and hardscaping"
    },
    {
      scenario: "Under Concrete Driveway",
      description: "Main line replacement beneath decorative stamped concrete",
      traditionalCost: "$18,500",
      traditionalBreakdown: "$10,000 excavation + $3,500 pipe + $5,000 concrete replacement",
      trenchlessCost: "$12,000",
      trenchlessBreakdown: "$10,000 pipe bursting + $2,000 access points",
      savings: "$6,500",
      additionalBenefits: "Avoids matching 15-year-old decorative concrete finish"
    },
    {
      scenario: "Winter Emergency Repair",
      description: "Urgent pipe repair during frozen ground conditions",
      traditionalCost: "$22,000",
      traditionalBreakdown: "$12,000 winter excavation + $4,000 pipe + $6,000 restoration",
      trenchlessCost: "$11,000",
      trenchlessBreakdown: "$9,000 pipe lining + $2,000 winter premium",
      savings: "$11,000",
      additionalBenefits: "Completed in 1 day vs. waiting for spring thaw"
    }
  ];

  const technologyAdvantages = [
    {
      tech: "HD Video Inspection",
      icon: Camera,
      benefit: "Precise Diagnosis",
      description: "See exactly what's wrong and where, eliminating guesswork and ensuring the right repair method."
    },
    {
      tech: "Robotic Repair Systems",
      icon: Wrench,
      benefit: "Surgical Precision",
      description: "Computer-controlled installation ensures perfect positioning and consistent quality every time."
    },
    {
      tech: "Advanced Materials",
      icon: Shield,
      benefit: "Superior Durability",
      description: "Modern liners and coatings often outlast the original pipe with better corrosion resistance."
    },
    {
      tech: "Real-Time Monitoring",
      icon: TrendingUp,
      benefit: "Quality Assurance",
      description: "Continuous monitoring during installation ensures optimal results and immediate issue detection."
    }
  ];

  const customerStories = [
    {
      customer: "Historic Home Owner",
      problem: "100-year-old cast iron pipe under prize-winning garden",
      challenge: "Couldn't bear to destroy 30 years of landscaping work",
      solution: "CIPP pipe lining through existing cleanouts",
      outcome: "Perfect repair with zero garden damage, new pipe life expectancy of 50+ years",
      timeline: "Completed in 6 hours",
      quote: "I was amazed they could fix our old pipes without touching a single plant. The garden is my life's work."
    },
    {
      customer: "Business Owner",
      problem: "Restaurant sewer line failure under parking lot",
      challenge: "Couldn't afford to close restaurant for traditional excavation",
      solution: "Pipe bursting with new pipe installation",
      outcome: "Restaurant stayed open, new pipe capacity improved drainage",
      timeline: "2 days total, nights and early morning work",
      quote: "They worked around our schedule. Our customers never knew we had a major pipe problem."
    },
    {
      customer: "Suburban Family",
      problem: "Recurring backups from root-damaged clay pipes",
      challenge: "Previous traditional repairs failed within 2 years",
      solution: "Complete pipe lining system with root-resistant coating",
      outcome: "No issues in 3 years since repair, eliminated ongoing maintenance costs",
      timeline: "1 day installation",
      quote: "Best investment we've made in our home. No more emergency plumber calls!"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-900 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-12 w-12 text-green-300 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Trenchless Pipe Repair</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Fix your pipes without destroying your property. Modern technology delivers permanent solutions with minimal disruption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${globals.business_phone}`}
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-600 transition-colors"
              >
                Schedule Inspection: {globals.business_phone}
              </a>
              <Link 
                href="/contact"
                className="bg-white text-green-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get Trenchless Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Banner */}
      <section className="py-6 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4">
            <Award className="h-6 w-6 text-green-300" />
            <p className="font-bold">CUTTING-EDGE TECHNOLOGY: No-Dig Solutions • Minimal Disruption • Maximum Results</p>
            <Award className="h-6 w-6 text-green-300" />
          </div>
        </div>
      </section>

      {/* Trenchless vs Traditional Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Trenchless vs. Traditional: The Clear Winner</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            See why smart property owners choose trenchless technology for pipe repairs. The benefits go far beyond just convenience.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Comparison Factor</th>
                  <th className="px-6 py-4 text-center font-semibold text-green-700">Trenchless Repair</th>
                  <th className="px-6 py-4 text-center font-semibold text-orange-700">Traditional Excavation</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-700">Winner</th>
                </tr>
              </thead>
              <tbody>
                {trenchlessVsTraditional.map((comparison, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="px-6 py-4 font-medium text-gray-900">{comparison.factor}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{comparison.trenchless}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{comparison.traditional}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        comparison.advantage === 'trenchless' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {comparison.advantage === 'trenchless' ? 'Trenchless' : 'Traditional'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trenchless Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Trenchless Repair Arsenal</h2>
          
          {trenchlessMethods.map((method, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                  <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <method.icon className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">{method.method}</p>
                      <p className="text-sm">Advanced technology in action</p>
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-4 rounded-full mr-4">
                      <method.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{method.method}</h3>
                      <p className="text-gray-600 italic">{method.bestFor}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{method.process}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">Key Advantages:</h4>
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
                      <h4 className="font-semibold text-blue-600 mb-3">Ideal Conditions:</h4>
                      <ul className="space-y-2">
                        {method.idealConditions.map((condition, conditionIndex) => (
                          <li key={conditionIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{condition}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-green-700">Timeline:</p>
                        <p className="text-gray-700">{method.timeframe}</p>
                      </div>
                      <div>
                        <p className="font-medium text-green-700">Disruption:</p>
                        <p className="text-gray-700">{method.disruption}</p>
                      </div>
                      <div>
                        <p className="font-medium text-green-700">Expected Life:</p>
                        <p className="text-gray-700">{method.lifespan}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Candidate Assessment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Is Your Pipe a Good Candidate?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Not every pipe problem can be solved with trenchless technology. Here&apos;s how we assess whether your situation is ideal for our no-dig solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {candidateAssessment.map((category, index) => (
              <div key={index} className={`p-6 rounded-lg border-l-4 ${
                category.color === 'green' ? 'bg-green-50 border-green-500' :
                category.color === 'blue' ? 'bg-blue-50 border-blue-500' :
                category.color === 'yellow' ? 'bg-yellow-50 border-yellow-500' :
                'bg-red-50 border-red-500'
              }`}>
                <h3 className={`font-bold text-lg mb-2 ${
                  category.color === 'green' ? 'text-green-700' :
                  category.color === 'blue' ? 'text-blue-700' :
                  category.color === 'yellow' ? 'text-yellow-700' :
                  'text-red-700'
                }`}>
                  {category.category}
                </h3>
                <div className="mb-4">
                  <p className="font-medium text-gray-900 text-sm mb-2">Success Rate: {category.successRate}</p>
                  <ul className="space-y-1">
                    {category.conditions.map((condition, conditionIndex) => (
                      <li key={conditionIndex} className="text-gray-700 text-xs flex items-start">
                        <CheckCircle className="h-3 w-3 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className={`font-medium text-sm ${
                  category.color === 'green' ? 'text-green-700' :
                  category.color === 'blue' ? 'text-blue-700' :
                  category.color === 'yellow' ? 'text-yellow-700' :
                  'text-red-700'
                }`}>
                  {category.recommendation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Precision Repair Process</h2>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                <div className="lg:col-span-1">
                  <div className="bg-green-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto lg:mx-0">
                    <span className="text-green-600 font-bold text-2xl">{step.step}</span>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  <ul className="space-y-1">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-1">
                  <div className="bg-white p-4 rounded-lg border border-green-200 text-center">
                    <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="font-medium text-gray-900 text-sm">{step.technology}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost-Benefit Analysis */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Real-World Cost Comparisons</h2>
          <div className="space-y-8">
            {costBenefitScenarios.map((scenario, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-white p-8 rounded-lg border border-green-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{scenario.scenario}</h3>
                <p className="text-gray-700 mb-6">{scenario.description}</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-700 mb-2">Traditional Excavation</h4>
                    <p className="text-2xl font-bold text-orange-600 mb-2">{scenario.traditionalCost}</p>
                    <p className="text-orange-700 text-sm">{scenario.traditionalBreakdown}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">Trenchless Repair</h4>
                    <p className="text-2xl font-bold text-green-600 mb-2">{scenario.trenchlessCost}</p>
                    <p className="text-green-700 text-sm">{scenario.trenchlessBreakdown}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-2">Your Savings</h4>
                    <p className="text-2xl font-bold text-blue-600 mb-2">{scenario.savings}</p>
                    <p className="text-blue-700 text-sm">{scenario.additionalBenefits}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-green-100 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-green-600">
                  <Camera className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Advanced Technology</p>
                  <p className="text-sm">Precision equipment in action</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Our Technology Makes the Difference</h2>
              <p className="text-gray-700 mb-8">
                Trenchless repair isn&apos;t just about avoiding excavation - it&apos;s about using cutting-edge technology to deliver superior, longer-lasting results.
              </p>
              <div className="space-y-6">
                {technologyAdvantages.map((tech, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                      <tech.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{tech.tech}</h3>
                      <p className="font-medium text-green-600 text-sm mb-2">{tech.benefit}</p>
                      <p className="text-gray-700 text-sm">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Success Stories: Property Saved, Problems Solved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="mb-4">
                  <h3 className="font-bold text-gray-900 mb-1">{story.customer}</h3>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{story.timeline}</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-red-600">Problem:</p>
                    <p className="text-gray-700">{story.problem}</p>
                  </div>
                  <div>
                    <p className="font-medium text-orange-600">Challenge:</p>
                    <p className="text-gray-700">{story.challenge}</p>
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
                <div className="mt-4 p-3 bg-green-50 rounded border-l-4 border-green-500">
                  <p className="text-gray-700 italic text-sm">&quot;{story.quote}&quot;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Benefits */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Environmentally Responsible Choice</h2>
              <p className="text-gray-700 mb-8">
                Trenchless technology isn&apos;t just better for your property - it&apos;s better for the environment. Here&apos;s how we&apos;re helping protect our planet.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <TreePine className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Zero Landscape Destruction</h3>
                    <p className="text-gray-700 text-sm">Preserve mature trees, established gardens, and natural habitats without compromise.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Reduced Carbon Footprint</h3>
                    <p className="text-gray-700 text-sm">Less equipment, shorter project duration, and minimal material waste significantly reduce environmental impact.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Soil Preservation</h3>
                    <p className="text-gray-700 text-sm">Maintain natural soil structure and avoid contamination from construction activities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sustainable Materials</h3>
                    <p className="text-gray-700 text-sm">Modern liners and coatings are designed for longevity, reducing future replacement needs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <div className="bg-green-100 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-green-600">
                  <TreePine className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Environmental Protection</p>
                  <p className="text-sm">Sustainable repair solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Choose Trenchless */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Is Trenchless Right for Your Project?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Perfect For</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Mature landscaping</li>
                <li>• Under driveways</li>
                <li>• Tight spaces</li>
                <li>• Quick turnaround</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Time Savings</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 1-2 day completion</li>
                <li>• Minimal disruption</li>
                <li>• Weather independent</li>
                <li>• Immediate use</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <DollarSign className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Cost Effective</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Lower total cost</li>
                <li>• No restoration fees</li>
                <li>• Preserve property value</li>
                <li>• Long-term savings</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Quality Results</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 50+ year lifespan</li>
                <li>• Superior materials</li>
                <li>• Seamless interior</li>
                <li>• Root resistant</li>
              </ul>
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-8">
            Ready to see if trenchless technology is right for your pipe problem? Our experts will assess your situation and recommend the best solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${globals.business_phone}`}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-700 transition-colors"
            >
              Schedule Free Assessment: {globals.business_phone}
            </a>
            <Link 
              href="/contact"
              className="bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-50 transition-colors"
            >
              Get Detailed Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Future of Pipe Repair</h2>
          <p className="text-xl mb-8">
            Don&apos;t let pipe problems destroy your beautiful property. Our trenchless technology delivers permanent solutions with minimal disruption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Get Free Trenchless Assessment
            </Link>
            <a 
              href={`tel:${globals.business_phone}`}
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-400 transition-colors"
            >
              Call: {globals.business_phone}
            </a>
          </div>
          <p className="text-sm mt-6 text-green-200">
            Advanced Technology • Minimal Disruption • 50+ Year Solutions • Environmental Friendly
          </p>
        </div>
      </section>
    </div>
  )}