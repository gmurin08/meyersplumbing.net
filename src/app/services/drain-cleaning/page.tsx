import { Droplets, AlertTriangle, Zap, Shield, Clock, CheckCircle, Star, Wrench, Home, RefreshCw, Microscope, Leaf } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import globals from 'globals.json';

export default function DrainCleaningPage() {
  const drainTypes = [
    {
      location: "Kitchen Drains",
      icon: Home,
      commonIssues: ["Grease buildup", "Food particles", "Soap scum", "Coffee grounds"],
      prevention: ["Use sink strainers", "Dispose grease properly", "Run hot water regularly", "Monthly baking soda flush"],
      severity: "Moderate",
      healthRisk: "Low"
    },
    {
      location: "Bathroom Drains", 
      icon: Droplets,
      commonIssues: ["Hair clogs", "Soap buildup", "Toothpaste residue", "Skin cells"],
      prevention: ["Hair catchers", "Weekly hot water flush", "Avoid excess soap", "Regular cleaning"],
      severity: "Moderate",
      healthRisk: "Medium"
    },
    {
      location: "Main Sewer Line",
      icon: AlertTriangle,
      commonIssues: ["Tree root invasion", "Pipe collapse", "Grease blockages", "Foreign objects"],
      prevention: ["Root treatment", "Grease disposal education", "Regular inspections", "Proper disposal habits"],
      severity: "Severe",
      healthRisk: "High"
    },
    {
      location: "Floor Drains",
      icon: Shield,
      commonIssues: ["Debris accumulation", "Dry P-traps", "Backup issues", "Odor problems"],
      prevention: ["Regular water addition", "Debris removal", "Quarterly inspection", "Professional maintenance"],
      severity: "Variable",
      healthRisk: "Medium"
    }
  ];

  const warningLevels = [
    {
      level: "Green Zone",
      color: "green",
      description: "Everything's flowing smoothly",
      signs: ["Normal drainage speed", "No odors", "Clear water", "Quiet operation"],
      action: "Keep up preventive maintenance"
    },
    {
      level: "Yellow Zone", 
      color: "yellow",
      description: "Minor issues developing",
      signs: ["Slightly slow drainage", "Occasional gurgling", "Mild odors", "Small backups"],
      action: "Schedule routine cleaning"
    },
    {
      level: "Orange Zone",
      color: "orange", 
      description: "Problems need attention soon",
      signs: ["Noticeably slow drains", "Frequent backups", "Strong odors", "Multiple drains affected"],
      action: "Call within 48 hours"
    },
    {
      level: "Red Zone",
      color: "red",
      description: "Emergency situation",
      signs: ["Complete blockage", "Sewage backup", "Health hazards", "Water damage risk"],
      action: "Call immediately - same day service"
    }
  ];

  const cleaningMethods = [
    {
      method: "Cable/Snake Cleaning",
      icon: Wrench,
      bestFor: "Simple clogs, hair blockages, localized issues",
      process: "Mechanical cable breaks through blockages",
      effectiveness: "Good for basic clogs",
      limitations: "May not remove all buildup"
    },
    {
      method: "Hydro Jetting",
      icon: Zap,
      bestFor: "Severe blockages, grease removal, pipe cleaning",
      process: "High-pressure water scours pipe walls clean",
      effectiveness: "Removes 100% of buildup",
      limitations: "Requires professional equipment"
    },
    {
      method: "Video Inspection",
      icon: Microscope,
      bestFor: "Diagnosis, pipe assessment, preventive planning",
      process: "Camera reveals exact problems and locations",
      effectiveness: "Perfect diagnosis accuracy",
      limitations: "Diagnostic only - requires follow-up treatment"
    },
    {
      method: "Biological Treatment",
      icon: Leaf,
      bestFor: "Eco-friendly maintenance, grease digestion",
      process: "Beneficial bacteria consume organic waste",
      effectiveness: "Long-term prevention",
      limitations: "Slower action on severe clogs"
    }
  ];

  const diyVsPro = [
    {
      scenario: "Hair Clog in Bathroom Sink",
      diyApproach: "Drain snake or chemical cleaner",
      diyResult: "May clear surface clog temporarily",
      proApproach: "Professional cable cleaning + inspection",
      proResult: "Complete removal + prevention advice",
      verdict: "DIY first, pro if recurring"
    },
    {
      scenario: "Kitchen Sink Slow Drainage",
      diyApproach: "Boiling water and dish soap",
      diyResult: "Temporary grease dissolution",
      proApproach: "Hydro jetting to remove all grease buildup",
      proResult: "Like-new pipe condition + prevention plan",
      verdict: "Pro recommended for lasting results"
    },
    {
      scenario: "Multiple Drains Backing Up",
      diyApproach: "Store-bought chemicals",
      diyResult: "Potential pipe damage, problem persists",
      proApproach: "Video inspection + targeted treatment",
      proResult: "Identify root cause + permanent solution",
      verdict: "Always call professional"
    },
    {
      scenario: "Sewage Backup in Basement",
      diyApproach: "Attempt plunging or chemicals",
      diyResult: "Health risk, potential contamination spread",
      proApproach: "Emergency response + sanitization",
      proResult: "Safe cleanup + system restoration",
      verdict: "Emergency professional service only"
    }
  ];

  const seasonalIssues = [
    {
      season: "Spring",
      primaryIssue: "Tree root growth in sewer lines",
      description: "Growing season brings aggressive root invasion",
      solution: "Root cutting and preventive treatment",
      prevention: "Annual root treatment in affected areas"
    },
    {
      season: "Summer",
      primaryIssue: "Increased usage and food waste",
      description: "BBQs and gatherings mean more grease and debris",
      solution: "Hydro jetting to handle increased load",
      prevention: "Proper grease disposal education"
    },
    {
      season: "Fall",
      primaryIssue: "Leaves and outdoor debris",
      description: "Yard waste can enter and clog exterior drains",
      solution: "Debris removal and drain protection",
      prevention: "Drain covers and regular cleaning"
    },
    {
      season: "Winter",
      primaryIssue: "Frozen lines and holiday cooking",
      description: "Cold weather and heavy cooking create challenges",
      solution: "Thawing services and grease removal",
      prevention: "Pipe insulation and proper disposal habits"
    }
  ];

  const customerScenarios = [
    {
      customer: "Restaurant Owner",
      problem: "Health inspector threatened closure due to grease backup",
      timeframe: "Emergency same-day service",
      solution: "Hydro jetted main line, installed grease recovery system, established weekly maintenance",
      outcome: "Passed re-inspection, eliminated future violations, improved kitchen efficiency",
      quote: "They saved my business. The weekly maintenance gives me peace of mind."
    },
    {
      customer: "Growing Family",
      problem: "Constant hair clogs with three teenage daughters",
      timeframe: "Scheduled service appointment",
      solution: "Professional drain cleaning, installed drain guards, taught prevention techniques",
      outcome: "95% reduction in service calls, family learned proper maintenance",
      quote: "Life-changing! No more standing water in the shower every morning."
    },
    {
      customer: "Elderly Homeowner",
      problem: "Basement floor drain backing up, creating unsanitary conditions",
      timeframe: "Within 24 hours",
      solution: "Video inspection revealed broken pipe, trenchless repair completed",
      outcome: "Permanent solution, no more backups, improved home safety",
      quote: "Professional, respectful, and they explained everything clearly."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-[url('/images/hero/wrench-bg.webp')] bg-gradient-to-r from-blue-900 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Droplets className="h-12 w-12 text-blue-300 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Professional Drain Cleaning</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              From stubborn clogs to complete blockages, we&apos;ll get your drains flowing like new. Fast, clean, and guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${globals.business_phone}`}
                className="bg-teal-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-teal-600 transition-colors"
              >
                Emergency Service: {globals.business_phone}
              </a>
              <Link 
                href="/contact"
                className="bg-white text-teal-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Schedule Cleaning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Drain Health Check */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">What Zone Are Your Drains In?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Like your health, drain problems have warning signs. Here&apos;s how to know when to take action.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {warningLevels.map((level, index) => (
              <div key={index} className={`p-6 rounded-lg border-l-4 ${
                level.color === 'green' ? 'bg-green-50 border-green-500' :
                level.color === 'yellow' ? 'bg-yellow-50 border-yellow-500' :
                level.color === 'orange' ? 'bg-orange-50 border-orange-500' :
                'bg-red-50 border-red-500'
              }`}>
                <h3 className={`font-bold text-lg mb-2 ${
                  level.color === 'green' ? 'text-green-700' :
                  level.color === 'yellow' ? 'text-yellow-700' :
                  level.color === 'orange' ? 'text-orange-700' :
                  'text-red-700'
                }`}>
                  {level.level}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{level.description}</p>
                <ul className="space-y-1 mb-4">
                  {level.signs.map((sign, signIndex) => (
                    <li key={signIndex} className="text-gray-600 text-xs flex items-start">
                      <CheckCircle className="h-3 w-3 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
                <p className={`font-medium text-sm ${
                  level.color === 'green' ? 'text-green-700' :
                  level.color === 'yellow' ? 'text-yellow-700' :
                  level.color === 'orange' ? 'text-orange-700' :
                  'text-red-700'
                }`}>
                  {level.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drain-Specific Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Every Drain Has Its Own Personality</h2>
          
          {drainTypes.map((drain, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                  <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <drain.icon className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">{drain.location}</p>
                      <p className="text-sm">Professional cleaning in progress</p>
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-teal-100 p-4 rounded-full mr-4">
                      <drain.icon className="h-8 w-8 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{drain.location}</h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className={`px-2 py-1 rounded-full ${
                          drain.severity === 'Severe' ? 'bg-red-100 text-red-700' :
                          drain.severity === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {drain.severity} Issues
                        </span>
                        <span className={`px-2 py-1 rounded-full ${
                          drain.healthRisk === 'High' ? 'bg-red-100 text-red-700' :
                          drain.healthRisk === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {drain.healthRisk} Health Risk
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">Common Problems:</h4>
                      <ul className="space-y-2">
                        {drain.commonIssues.map((issue, issueIndex) => (
                          <li key={issueIndex} className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">Prevention Tips:</h4>
                      <ul className="space-y-2">
                        {drain.prevention.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{tip}</span>
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

      {/* Cleaning Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Professional Cleaning Arsenal</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cleaningMethods.map((method, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-lg border border-teal-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-teal-100 p-3 rounded-lg mr-4">
                    <method.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{method.method}</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-teal-700">Best For:</p>
                    <p className="text-gray-700">{method.bestFor}</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-700">How It Works:</p>
                    <p className="text-gray-700">{method.process}</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-700">Effectiveness:</p>
                    <p className="text-gray-700">{method.effectiveness}</p>
                  </div>
                  <div>
                    <p className="font-medium text-orange-700">Limitations:</p>
                    <p className="text-gray-700">{method.limitations}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIY vs Professional */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-blue-100 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-blue-600">
                  <RefreshCw className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">DIY vs Professional</p>
                  <p className="text-sm">Making the right choice</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">DIY or Call the Pros?</h2>
              <p className="text-gray-700 mb-8">
                We believe in empowering homeowners with knowledge. Here&apos;s honest advice about when to tackle it yourself and when to call us.
              </p>
              <div className="space-y-6">
                {diyVsPro.map((comparison, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-gray-900 mb-4">{comparison.scenario}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="font-medium text-blue-600 text-sm mb-1">DIY Approach:</p>
                        <p className="text-gray-700 text-sm mb-2">{comparison.diyApproach}</p>
                        <p className="text-gray-600 text-xs">{comparison.diyResult}</p>
                      </div>
                      <div>
                        <p className="font-medium text-teal-600 text-sm mb-1">Professional Approach:</p>
                        <p className="text-gray-700 text-sm mb-2">{comparison.proApproach}</p>
                        <p className="text-gray-600 text-xs">{comparison.proResult}</p>
                      </div>
                    </div>
                    <div className={`p-3 rounded ${
                      comparison.verdict.includes('DIY') ? 'bg-blue-100' :
                      comparison.verdict.includes('Pro') ? 'bg-teal-100' :
                      'bg-red-100'
                    }`}>
                      <p className="font-medium text-gray-900 text-sm">Our Recommendation: {comparison.verdict}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Drain Care */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Year-Round Drain Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalIssues.map((season, index) => (
              <div key={index} className={`p-6 rounded-lg border-2 ${
                season.season === 'Spring' ? 'bg-green-50 border-green-200' :
                season.season === 'Summer' ? 'bg-yellow-50 border-yellow-200' :
                season.season === 'Fall' ? 'bg-orange-50 border-orange-200' :
                'bg-blue-50 border-blue-200'
              }`}>
                <h3 className={`font-bold text-lg mb-3 ${
                  season.season === 'Spring' ? 'text-green-700' :
                  season.season === 'Summer' ? 'text-yellow-700' :
                  season.season === 'Fall' ? 'text-orange-700' :
                  'text-blue-700'
                }`}>
                  {season.season}
                </h3>
                <h4 className="font-semibold text-gray-900 text-sm mb-2">{season.primaryIssue}</h4>
                <p className="text-gray-600 text-xs mb-3">{season.description}</p>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium text-gray-900 text-xs">Solution:</p>
                    <p className="text-gray-700 text-xs">{season.solution}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-xs">Prevention:</p>
                    <p className="text-gray-700 text-xs">{season.prevention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">From Nightmare to Nice and Clean</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerScenarios.map((scenario, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <h3 className="font-bold text-gray-900 mb-1">{scenario.customer}</h3>
                  <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">{scenario.timeframe}</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-red-600">Crisis:</p>
                    <p className="text-gray-700">{scenario.problem}</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-600">Solution:</p>
                    <p className="text-gray-700">{scenario.solution}</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-600">Result:</p>
                    <p className="text-gray-700">{scenario.outcome}</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded border-l-4 border-teal-500">
                  <p className="text-gray-700 italic text-sm">&quot;{scenario.quote}&quot;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-16 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Preventive Drain Maintenance Plans</h2>
            <p className="text-xl text-teal-200">An ounce of prevention is worth a pound of emergency calls</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-teal-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Basic Plan</h3>
              <p className="text-2xl font-bold text-teal-300 mb-4">$89/visit</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm">Annual drain inspection</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm">Basic cable cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm">Prevention education</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm">15% off future services</span>
                </li>
              </ul>
              <p className="text-teal-200 text-sm">Perfect for maintenance-minded homeowners</p>
            </div>
            <div className="bg-teal-700 p-8 rounded-lg border-2 border-teal-400">
              <h3 className="text-xl font-bold mb-4">Complete Plan</h3>
              <p className="text-2xl font-bold text-teal-300 mb-4">$149/visit</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm">Bi-annual comprehensive cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm">Video inspection included</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm">Priority emergency response</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm">25% off all services</span>
                </li>
              </ul>
              <p className="text-teal-200 text-sm">Most popular - comprehensive protection</p>
            </div>
            <div className="bg-teal-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Commercial Plan</h3>
              <p className="text-2xl font-bold text-teal-300 mb-4">Custom</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm">Tailored to business needs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm">Scheduled around operations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm">Emergency response guarantee</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm">Detailed reporting</span>
                </li>
              </ul>
              <p className="text-teal-200 text-sm">Business protection and compliance focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <AlertTriangle className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-4">Drain Emergency? We&apos;re Ready!</h2>
            <p className="text-xl text-red-100">
              Sewage backups and major blockages can&apos;t wait. Our emergency team responds fast to minimize damage and health risks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-red-700 p-6 rounded-lg">
              <Clock className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-bold mb-2">Rapid Response</h3>
              <p className="text-red-100">Emergency drain service within 2 hours, 24/7/365</p>
            </div>
            <div className="bg-red-700 p-6 rounded-lg">
              <Shield className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-bold mb-2">Health Protection</h3>
              <p className="text-red-100">Proper containment and sanitization procedures</p>
            </div>
            <div className="bg-red-700 p-6 rounded-lg">
              <Zap className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-bold mb-2">Complete Resolution</h3>
              <p className="text-red-100">Fix the problem permanently, not just temporarily</p>
            </div>
          </div>

          <a 
            href={`tel:${globals.business_phone}`}
            className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-colors inline-flex items-center space-x-3"
          >
            <Droplets className="h-6 w-6" />
            <span>EMERGENCY: {globals.business_phone}</span>
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Keep Your Drains Flowing Smoothly</h2>
          <p className="text-xl mb-8">
            From routine maintenance to emergency cleaning, we&apos;re your drain health experts. Let&apos;s keep your home flowing properly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Schedule Cleaning Service
            </Link>
            <a 
              href={`tel:${globals.business_phone}`}
              className="bg-teal-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-teal-400 transition-colors"
            >
              Call: {globals.business_phone}
            </a>
          </div>
          <p className="text-sm mt-6 text-teal-200">
            Same-Day Service Available • Video Inspection Technology • 100% Satisfaction Guarantee • Licensed & Insured
          </p>
        </div>
      </section>
    </div>
  );
}