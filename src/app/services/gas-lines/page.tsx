import { Flame, Shield, AlertTriangle, Wrench, CheckCircle, Clock, Phone, Home, Zap, TreePine, Award, Star, Settings, Eye, HardHat, FileCheck } from 'lucide-react';
import Link from 'next/link';
import InstallationProcessCarousel from '@/components/ui/InstallationProcessCarousel';
import globals from 'globals.json';

export const metadata = {
  title: 'Gas Line Installation & Repair Services - Pittsburgh & Oakdale PA | Licensed Gas Fitters',
  description: 'Professional gas line installation, repair & emergency services in Pittsburgh PA. Licensed gas fitters for new construction, appliance connections, gas leaks. Serving Oakdale, Moon Township, Peters Township.',
  keywords: 'gas line installation Pittsburgh, gas line repair PA, gas leak emergency Oakdale, gas fitter Moon Township, natural gas installation Peters Township',
  openGraph: {
    title: 'Gas Line Services - Pittsburgh Licensed Gas Fitters',
    description: 'Professional gas line installation and repair services in Pittsburgh PA. Emergency gas line service available 24/7.',
    url: 'https://meyersplumbing.net/services/gas-lines',
  }
};

export default function GasLinesPage() {
  const gasLineServices = [
    {
      service: "New Gas Line Installation",
      icon: Wrench,
      description: "Professional installation of gas lines for new construction and appliance additions",
      features: [
        "Residential and commercial installations",
        "Permits and inspections handled",
        "Code-compliant materials and methods",
        "Underground and above-ground routing",
        "Pressure testing and certification"
      ],
      applications: [
        "New home construction",
        "Kitchen appliance connections",
        "Pool heaters and fire features",
        "Outdoor grills and fire pits",
        "Garage heaters and generators"
      ],
      timeline: "1-3 days",
      warranty: "10 years on materials and labor"
    },
    {
      service: "Gas Line Repair & Maintenance",
      icon: Settings,
      description: "Expert repair services for damaged, leaking, or aging gas lines",
      features: [
        "Leak detection and repair",
        "Pipe replacement and rerouting",
        "Joint and connection repairs",
        "Pressure regulation fixes",
        "Preventive maintenance programs"
      ],
      applications: [
        "Corroded or damaged pipes",
        "Loose fittings and connections",
        "Pressure irregularities",
        "Age-related deterioration",
        "Storm or construction damage"
      ],
      timeline: "Same day - 2 days",
      warranty: "5 years on repairs"
    },
    {
      service: "Emergency Gas Services",
      icon: AlertTriangle,
      description: "24/7 emergency response for gas leaks and safety concerns",
      features: [
        "Immediate emergency response",
        "Gas leak detection and isolation",
        "Emergency line shutoffs",
        "Temporary repairs and bypasses",
        "Safety assessments and clearance"
      ],
      applications: [
        "Suspected gas leaks",
        "Damaged lines from excavation",
        "Storm damage repairs",
        "Appliance disconnections",
        "Safety inspections"
      ],
      timeline: "1-4 hours response",
      warranty: "Emergency warranty coverage"
    },
    {
      service: "Gas Line Inspections & Testing",
      icon: Eye,
      description: "Comprehensive safety inspections and pressure testing services",
      features: [
        "Pre-purchase home inspections",
        "Annual safety assessments",
        "Pressure testing and certification",
        "Code compliance verification",
        "Appliance connection checks"
      ],
      applications: [
        "Home buying/selling",
        "Insurance requirements",
        "Permit applications",
        "Safety compliance",
        "Routine maintenance"
      ],
      timeline: "2-4 hours",
      warranty: "Certified inspection reports"
    }
  ];

  const safetyFeatures = [
    {
      feature: "Licensed & Certified Technicians",
      icon: HardHat,
      description: "All technicians are licensed gas fitters with extensive safety training",
      details: [
        "State-licensed gas technicians",
        "OSHA safety certification",
        "Ongoing education and training",
        "Background checked and insured",
        "Years of hands-on experience"
      ]
    },
    {
      feature: "Advanced Leak Detection",
      icon: Eye,
      description: "State-of-the-art equipment to detect even the smallest gas leaks",
      details: [
        "Electronic gas detectors",
        "Ultrasonic leak detection",
        "Pressure drop testing",
        "Soap bubble testing methods",
        "Digital monitoring systems"
      ]
    },
    {
      feature: "Code Compliance Guarantee",
      icon: FileCheck,
      description: "All work meets or exceeds local and national gas codes",
      details: [
        "Current code knowledge",
        "Permit acquisition assistance",
        "Inspector coordination",
        "Documentation and certificates",
        "Compliance verification"
      ]
    },
    {
      feature: "Emergency Response Team",
      icon: Phone,
      description: "24/7 emergency service for gas-related safety concerns",
      details: [
        "24/7 emergency hotline",
        "Rapid response vehicles",
        "Emergency isolation procedures",
        "Utility company coordination",
        "Safety priority protocols"
      ]
    }
  ];

  const gasLineMaterials = [
    {
      material: "CSST (Corrugated Stainless Steel)",
      description: "Flexible, durable tubing for residential installations",
      pros: ["Easy installation", "Earthquake resistant", "Corrosion resistant", "Flexible routing"],
      cons: ["Lightning protection required", "Higher initial cost"],
      bestFor: "New construction and retrofits",
      lifespan: "30+ years"
    },
    {
      material: "Black Iron Pipe",
      description: "Traditional threaded steel pipe for gas lines",
      pros: ["Very durable", "Lower cost", "Widely accepted", "Easy to repair"],
      cons: ["Corrosion potential", "Rigid installation", "Heavier weight"],
      bestFor: "Underground and commercial applications",
      lifespan: "50+ years"
    },
    {
      material: "Copper Tubing",
      description: "Soft copper for above-ground residential use",
      pros: ["Corrosion resistant", "Easy to work with", "Good for short runs"],
      cons: ["Not suitable underground", "More expensive", "Softer material"],
      bestFor: "Appliance connections and short runs",
      lifespan: "25+ years"
    },
    {
      material: "PE (Polyethylene) Pipe",
      description: "Plastic pipe for underground gas distribution",
      pros: ["Corrosion proof", "Flexible", "Easy installation", "Cost effective"],
      cons: ["Above-ground restrictions", "UV sensitive"],
      bestFor: "Underground service lines",
      lifespan: "50+ years"
    }
  ];

  const warningSignsData = [
    {
      category: "Smell & Sound",
      icon: AlertTriangle,
      color: "red",
      signs: [
        "Rotten egg or sulfur smell",
        "Hissing sounds near gas lines",
        "Whistling from appliances",
        "Unusual odors when appliances run"
      ]
    },
    {
      category: "Visual Indicators",
      icon: Eye,
      color: "orange",
      signs: [
        "Dead vegetation near gas lines",
        "Dirt or dust blowing from underground",
        "Exposed gas lines",
        "Discolored or damaged pipes"
      ]
    },
    {
      category: "Physical Symptoms",
      icon: Shield,
      color: "yellow",
      signs: [
        "Dizziness or nausea",
        "Fatigue or headaches",
        "Respiratory irritation",
        "Unusually high gas bills"
      ]
    }
  ];

  const installationProcess = [
    {
      step: 1,
      title: "Design & Planning",
      description: "Custom gas line design based on your specific needs",
      details: [
        "Site survey and assessment",
        "Load calculations for appliances",
        "Route planning and optimization",
        "Permit application preparation",
        "Material selection and ordering"
      ],
      duration: "1-2 days"
    },
    {
      step: 2,
      title: "Permits & Approvals",
      description: "Obtaining all necessary permits and approvals",
      details: [
        "Municipal permit applications",
        "Utility company notifications",
        "HOA approvals if required",
        "Inspector scheduling",
        "Code compliance verification"
      ],
      duration: "3-10 days"
    },
    {
      step: 3,
      title: "Professional Installation",
      description: "Expert installation by certified gas technicians",
      details: [
        "Excavation and trenching",
        "Pipe installation and connections",
        "Pressure testing and leak checks",
        "Appliance connections",
        "System commissioning"
      ],
      duration: "1-3 days"
    },
    {
      step: 4,
      title: "Testing & Inspection",
      description: "Comprehensive testing and official inspections",
      details: [
        "Pressure testing certification",
        "Leak detection verification",
        "Municipal inspection",
        "Final system checkout",
        "Customer training and documentation"
      ],
      duration: "1 day"
    }
  ];

  const applianceConnections = [
    {
      appliance: "Kitchen Range/Cooktop",
      requirements: "1/2\" line, quick-disconnect recommended",
      considerations: ["Flexible connector length", "Shut-off valve location", "Counter clearances"],
      installation: "Surface mount with accessible shutoff"
    },
    {
      appliance: "Water Heater",
      requirements: "3/4\" line for tankless, 1/2\" for tank units",
      considerations: ["Venting requirements", "Earthquake strapping", "Clearance to combustibles"],
      installation: "Rigid connection with union and shutoff"
    },
    {
      appliance: "Outdoor Grill",
      requirements: "1/2\" line with weather-resistant fittings",
      considerations: ["Underground routing", "Freeze protection", "Quick-disconnect options"],
      installation: "Underground stub-out with protective casing"
    },
    {
      appliance: "Pool/Spa Heater",
      requirements: "3/4\" line for large BTU heaters",
      considerations: ["Distance from pool", "Ventilation clearances", "Moisture protection"],
      installation: "Protected routing with accessible controls"
    },
    {
      appliance: "Fireplace/Fire Pit",
      requirements: "1/2\" line with manual shutoff",
      considerations: ["Safety shutoffs", "Ignition systems", "Decorative considerations"],
      installation: "Concealed routing with decorative terminations"
    },
    {
      appliance: "Generator",
      requirements: "1\" line for whole-house units",
      considerations: ["Automatic shutoffs", "Transfer switch coordination", "Emergency access"],
      installation: "Direct connection with emergency shutoff"
    }
  ];

  const emergencySteps = [
    {
      step: "If You Smell Gas",
      actions: [
        "Leave the area immediately",
        "Do not use electrical switches or devices",
        "Do not light matches or use open flames",
        "Evacuate everyone from the building",
        "Call 911 from a safe location"
      ],
      icon: AlertTriangle,
      priority: "IMMEDIATE"
    },
    {
      step: "Outside Gas Leaks",
      actions: [
        "Stay away from the area",
        "Warn others to stay clear",
        "Call your gas utility company",
        "Call our emergency line",
        "Do not attempt to stop the leak"
      ],
      icon: Phone,
      priority: "URGENT"
    },
    {
      step: "After Emergency Response",
      actions: [
        "Wait for all-clear from professionals",
        "Have system inspected before use",
        "Address any underlying issues",
        "Consider preventive maintenance",
        "Update emergency contacts"
      ],
      icon: CheckCircle,
      priority: "FOLLOW-UP"
    }
  ];

  const costFactors = [
    {
      factor: "Project Type",
      details: [
        "New installation: $500-2,500",
        "Appliance connection: $200-800",
        "Repair work: $150-1,200",
        "Emergency service: $200-1,500"
      ]
    },
    {
      factor: "Line Length & Size",
      details: [
        "1/2\" line: $8-15 per foot",
        "3/4\" line: $12-20 per foot",
        "1\" line: $15-25 per foot",
        "Underground work: +$5-10 per foot"
      ]
    },
    {
      factor: "Complexity Factors",
      details: [
        "Permit fees: $50-300",
        "Excavation required: +$500-1,500",
        "Multiple appliances: +$200-500 each",
        "Emergency service: +$100-300"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-900 to-orange-700 text-white">
        {/* Background Image - Add heroImage property to enable */}
        {true && ( // Change to true and add heroImage when ready
          <div className="absolute inset-0">
            <img 
              src="/images/hero/gas-lines-hero.jpg" // Replace with actual image path
              alt="Professional gas line installation"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-orange-700/80"></div>
        {/* Dark Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Flame className="h-12 w-12 text-orange-300 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Gas Line Services</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Professional gas line installation, repair, and emergency services. Safety, reliability, and code compliance guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${globals.business_phone}`}
                className="bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-600 transition-colors"
              >
                Emergency: {globals.business_phone}
              </a>
              <Link 
                href="/contact"
                className="bg-white text-red-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Schedule Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert Banner */}
      <section className="py-4 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4">
            <AlertTriangle className="h-6 w-6 text-red-300" />
            <p className="font-bold">GAS EMERGENCY? Call {globals.business_phone} • Available 24/7 • Licensed & Insured</p>
            <AlertTriangle className="h-6 w-6 text-red-300" />
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Know the Warning Signs</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Gas leaks can be dangerous. Recognize these warning signs and call us immediately if you notice any of them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {warningSignsData.map((category, index) => (
              <div key={index} className={`p-6 rounded-lg border-l-4 ${
                category.color === 'red' ? 'bg-red-50 border-red-500' :
                category.color === 'orange' ? 'bg-orange-50 border-orange-500' :
                'bg-yellow-50 border-yellow-500'
              }`}>
                <div className="flex items-center mb-4">
                  <category.icon className={`h-8 w-8 mr-3 ${
                    category.color === 'red' ? 'text-red-600' :
                    category.color === 'orange' ? 'text-orange-600' :
                    'text-yellow-600'
                  }`} />
                  <h3 className={`font-bold text-lg ${
                    category.color === 'red' ? 'text-red-700' :
                    category.color === 'orange' ? 'text-orange-700' :
                    'text-yellow-700'
                  }`}>
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.signs.map((sign, signIndex) => (
                    <li key={signIndex} className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="bg-red-100 border border-red-300 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="font-bold text-red-800 mb-2">If You Detect Gas:</h3>
              <p className="text-red-700 mb-4">Leave immediately, call 911, then call us at {globals.business_phone}</p>
              <a 
                href={`tel:${globals.business_phone}`}
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
              >
                Emergency Line: {globals.business_phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Gas Line Services</h2>
          
          {gasLineServices.map((service, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                  <div className="bg-orange-100 rounded-lg h-80 flex items-center justify-center">
                    <div className="text-center text-orange-600">
                      <service.icon className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">{service.service}</p>
                      <p className="text-sm">Professional gas line services</p>
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-red-100 p-4 rounded-full mr-4">
                      <service.icon className="h-8 w-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.service}</h3>
                      <p className="text-gray-600 italic">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">Service Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-3">Applications:</h4>
                      <ul className="space-y-2">
                        {service.applications.map((application, applicationIndex) => (
                          <li key={applicationIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{application}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-red-700">Timeline:</p>
                        <p className="text-gray-700">{service.timeline}</p>
                      </div>
                      <div>
                        <p className="font-medium text-red-700">Warranty:</p>
                        <p className="text-gray-700">{service.warranty}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Safety is Our Top Priority</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-4 rounded-full mr-4">
                    <feature.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.feature}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <Shield className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
            <p className="text-xl text-gray-600">Experience our step-by-step professional gas line installation process</p>
          </div>
          <InstallationProcessCarousel steps={installationProcess} />
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Gas Line Materials We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gasLineMaterials.map((material, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{material.material}</h3>
                <p className="text-gray-700 mb-4">{material.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Advantages:</h4>
                    <ul className="space-y-1">
                      {material.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="flex items-start">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-xs">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Considerations:</h4>
                    <ul className="space-y-1">
                      {material.cons.map((con, conIndex) => (
                        <li key={conIndex} className="flex items-start">
                          <AlertTriangle className="h-3 w-3 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-xs">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700">Best For:</p>
                      <p className="text-gray-600">{material.bestFor}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Lifespan:</p>
                      <p className="text-gray-600">{material.lifespan}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appliance Connections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Appliance Connection Services</h2>
          <div className="space-y-6">
            {applianceConnections.map((appliance, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{appliance.appliance}</h3>
                    <p className="text-sm text-red-600 font-medium">{appliance.requirements}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Key Considerations:</h4>
                    <ul className="space-y-1">
                      {appliance.considerations.map((consideration, considerationIndex) => (
                        <li key={considerationIndex} className="text-xs text-gray-600">
                          • {consideration}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-gray-700 mb-2">Installation Approach:</h4>
                    <p className="text-sm text-gray-600">{appliance.installation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Procedures */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Gas Emergency Procedures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencySteps.map((emergency, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                <div className="flex items-center mb-4">
                  <emergency.icon className="h-8 w-8 text-red-600 mr-3" />
                  <div>
                    <h3 className="font-bold text-gray-900">{emergency.step}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      emergency.priority === 'IMMEDIATE' ? 'bg-red-100 text-red-800' :
                      emergency.priority === 'URGENT' ? 'bg-orange-100 text-orange-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {emergency.priority}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {emergency.actions.map((action, actionIndex) => (
                    <li key={actionIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="bg-white border-2 border-red-500 rounded-lg p-6 max-w-lg mx-auto">
              <h3 className="font-bold text-red-800 text-lg mb-4">24/7 Emergency Response</h3>
              <a 
                href={`tel:${globals.business_phone}`}
                className="bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition-colors block"
              >
                {globals.business_phone}
              </a>
              <p className="text-sm text-gray-600 mt-2">Licensed • Insured • Available 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Information */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Gas Line Service Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {costFactors.map((factor, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">{factor.factor}</h3>
                <ul className="space-y-2">
                  {factor.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="font-bold text-blue-800 mb-2">Free Estimates Available</h3>
              <p className="text-blue-700 mb-4">Get an accurate quote for your gas line project. All estimates include materials, labor, and permits.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  Request Free Estimate
                </Link>
                <a 
                  href={`tel:${globals.business_phone}`}
                  className="bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                >
                  Call: {globals.business_phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Maintenance Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-orange-100 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-orange-600">
                  <Settings className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Gas Line Maintenance</p>
                  <p className="text-sm">Professional care for safety</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Gas Line Maintenance & Safety</h2>
              <p className="text-gray-700 mb-8">
                Regular maintenance and awareness are key to gas line safety. Here&apos;s what every property owner should know.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                    <Eye className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Annual Inspections</h3>
                    <p className="text-gray-700 text-sm">Have your gas lines professionally inspected annually to catch potential issues early.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Appliance Maintenance</h3>
                    <p className="text-gray-700 text-sm">Keep gas appliances properly maintained and ventilated for safe operation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Know Your Shutoffs</h3>
                    <p className="text-gray-700 text-sm">Learn the location of gas shutoff valves for emergency situations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Emergency Preparedness</h3>
                    <p className="text-gray-700 text-sm">Keep emergency contact numbers readily available and know the warning signs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Why Choose Our Gas Line Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <HardHat className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Licensed Experts</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• State-licensed gas fitters</li>
                <li>• Ongoing safety training</li>
                <li>• Years of experience</li>
                <li>• Fully insured team</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Emergency</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 24/7 emergency response</li>
                <li>• Rapid response times</li>
                <li>• Emergency equipment ready</li>
                <li>• Safety-first approach</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <FileCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Code Compliant</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• All work meets codes</li>
                <li>• Permit handling included</li>
                <li>• Inspector coordination</li>
                <li>• Documentation provided</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Premium materials only</li>
                <li>• Comprehensive warranties</li>
                <li>• Pressure testing included</li>
                <li>• Customer satisfaction focus</li>
              </ul>
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-8">
            When it comes to gas lines, safety and expertise matter most. Trust our licensed professionals for all your gas line needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${globals.business_phone}`}
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors"
            >
              Emergency: {globals.business_phone}
            </a>
            <Link 
              href="/contact"
              className="bg-white border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-50 transition-colors"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Professional Gas Line Services You Can Trust</h2>
          <p className="text-xl mb-8">
            From emergency repairs to new installations, we handle all your gas line needs with safety, expertise, and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a 
              href={`tel:${globals.business_phone}`}
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              24/7 Emergency: {globals.business_phone}
            </a>
            <Link 
              href="/contact"
              className="bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-400 transition-colors"
            >
              Request Free Estimate
            </Link>
          </div>
          <p className="text-sm text-red-200">
            Licensed Gas Fitters • 24/7 Emergency Service • Code Compliant • Fully Insured
          </p>
        </div>
      </section>
    </div>
  );
}