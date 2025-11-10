import { Waves, Shovel, Wrench, Home, Shield, CheckCircle, Clock, Droplets, Sun, Sparkles, Award, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import globals from 'globals.json';

export const metadata = {
  title: 'Pool Installation Pittsburgh PA | Swimming Pool Contractor Oakdale, Moon Township',
  description: 'Professional pool installation in Pittsburgh, Oakdale, Moon Township & Robinson Township PA. Complete swimming pool installation from excavation to deck. Licensed & insured. Call 1-833-663-9377.',
  keywords: 'pool installation Pittsburgh, pool contractor Oakdale PA, swimming pool installation Moon Township, pool excavation Robinson Township, inground pools Sewickley, pool plumbing Upper St Clair, pool deck installation Mt Lebanon, swimming pool contractor Carnegie PA',
  openGraph: {
    title: 'Pool Installation Pittsburgh - Matt Meyers Plumbing',
    description: 'Professional pool installation serving Pittsburgh, Oakdale, Moon Township. Complete installation from excavation to deck. Licensed & insured. Call 1-833-663-9377',
    url: '/services/pools',
    type: 'website',
    siteName: 'Matt Meyers Plumbing',
    locale: 'en_US',
    images: [{
      url: '/images/pools/pool-og.webp',
      width: 1200,
      height: 630,
      alt: 'Pool Installation Services by Matt Meyers Plumbing - Pittsburgh PA'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pool Installation Pittsburgh - Matt Meyers Plumbing',
    description: 'Professional pool installation from excavation to deck. Serving Pittsburgh, Oakdale, Moon Township PA.',
    images: ['/images/pools/pool-og.webp']
  },
  alternates: {
    canonical: 'https://meyersplumbing.net/services/pools'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

export default function PoolsPage() {
  // Structured data for local SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://meyersplumbing.net/services/pools",
        "name": "Pool Installation Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Matt Meyers Plumbing",
          "telephone": "1-833-663-9377",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Oakdale",
            "addressRegion": "PA",
            "postalCode": "15071",
            "addressCountry": "US"
          }
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Pittsburgh",
            "containedInPlace": {
              "@type": "State",
              "name": "Pennsylvania"
            }
          },
          {
            "@type": "City",
            "name": "Oakdale",
            "containedInPlace": {
              "@type": "State",
              "name": "Pennsylvania"
            }
          },
          {
            "@type": "City",
            "name": "Moon Township",
            "containedInPlace": {
              "@type": "State",
              "name": "Pennsylvania"
            }
          },
          {
            "@type": "City",
            "name": "Robinson Township",
            "containedInPlace": {
              "@type": "State",
              "name": "Pennsylvania"
            }
          }
        ],
        "description": "Complete pool installation services including excavation, shell installation, plumbing systems, and deck construction. Licensed and insured pool contractor serving Pittsburgh PA and surrounding areas.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceRange": "$$$$"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does pool installation take in Pittsburgh PA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In the Pittsburgh area, pool installation typically takes 1-8 weeks depending on the type of pool and weather conditions. Fiberglass pools in Oakdale or Moon Township can be installed in 1-2 weeks, while custom gunite pools may take 6-8 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle permits in Allegheny County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we handle all necessary permits and inspections for pools in Pittsburgh, Oakdale, Moon Township, and throughout Allegheny County. Our team is familiar with local township requirements and ensures your pool meets all Pennsylvania codes and regulations."
            }
          }
        ]
      }
    ]
  };
  const poolServices = [
    {
      service: "Complete Excavation",
      icon: Shovel,
      description: "Professional site preparation and excavation with precision grading",
      details: [
        "Site evaluation and layout",
        "Precision excavation to specifications",
        "Proper drainage planning",
        "Soil removal and management"
      ]
    },
    {
      service: "Pool Shell Installation",
      icon: Home,
      description: "Expert installation of pool shells with attention to every detail",
      details: [
        "Shell placement and leveling",
        "Structural reinforcement",
        "Proper backfilling techniques",
        "Quality control inspection"
      ]
    },
    {
      service: "Plumbing Systems",
      icon: Wrench,
      description: "Complete pool plumbing from pumps to filtration systems",
      details: [
        "Main drain and skimmer installation",
        "Return line configuration",
        "Equipment pad setup",
        "Pump and filter connections"
      ]
    },
    {
      service: "Deck & Surrounds",
      icon: Sparkles,
      description: "Beautiful pool decking and surrounding area finishing",
      details: [
        "Concrete deck pouring",
        "Coping installation",
        "Expansion joint placement",
        "Surface finishing options"
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Site evaluation and project planning",
      details: "We assess your property, discuss your vision, and plan the perfect pool for your space and budget."
    },
    {
      step: 2,
      title: "Excavation & Prep",
      description: "Professional excavation and site preparation",
      details: "Our expert team handles all excavation with precision, ensuring proper depth and grading."
    },
    {
      step: 3,
      title: "Shell Installation",
      description: "Pool shell placement and securing",
      details: "Working with quality manufacturers, we ensure perfect placement and structural integrity."
    },
    {
      step: 4,
      title: "Plumbing & Equipment",
      description: "Complete plumbing system installation",
      details: "All pumps, filters, heaters, and plumbing lines installed to the highest standards."
    },
    {
      step: 5,
      title: "Decking & Finishing",
      description: "Pool deck and surrounding area completion",
      details: "Beautiful concrete decking, coping, and all finishing touches for a stunning pool area."
    },
    {
      step: 6,
      title: "Final Inspection",
      description: "Quality check and system startup",
      details: "Thorough inspection, system testing, and walkthrough to ensure everything meets our high standards."
    }
  ];

  const whyChooseUs = [
    {
      reason: "Complete Project Management",
      description: "We handle everything from start to finish - no need to coordinate multiple contractors",
      icon: Shield
    },
    {
      reason: "Expert Excavation",
      description: "Years of excavation experience ensures your pool site is prepared perfectly",
      icon: Shovel
    },
    {
      reason: "Master Plumbing",
      description: "Licensed master plumbers ensure your pool systems work flawlessly for years",
      icon: Wrench
    },
    {
      reason: "Quality Materials",
      description: "We work with trusted manufacturers and use only premium materials",
      icon: Award
    },
    {
      reason: "Timely Completion",
      description: "Efficient project management keeps your pool installation on schedule",
      icon: Clock
    },
    {
      reason: "Warranty Protection",
      description: "Comprehensive warranties on our work and manufacturer warranties on equipment",
      icon: Shield
    }
  ];

  const poolFeatures = [
    {
      title: "Classic Family Pools",
      description: "Perfect for family fun and relaxation",
      highlights: "Standard depths, diving areas, swim lanes",
      benefits: ["Great for all ages", "Versatile use", "Traditional appeal", "Proven designs"],
      ideal: "Families with children, entertaining guests",
      image: "/images/pools/pool_1.webp"
    },
    {
      title: "Modern Pool Designs",
      description: "Contemporary styles with clean lines",
      highlights: "Geometric shapes, infinity edges, water features",
      benefits: ["Stunning aesthetics", "Increased property value", "Unique features", "Instagram-worthy"],
      ideal: "Modern homes, luxury properties",
      image: "/images/pools/pool_2.webp"
    },
    {
      title: "Compact & Efficient",
      description: "Maximizing smaller spaces",
      highlights: "Plunge pools, lap lanes, smart layouts",
      benefits: ["Fits smaller yards", "Lower maintenance", "Energy efficient", "Year-round use options"],
      ideal: "Urban homes, limited space, fitness focus",
      image: "/images/pools/pool_3.webp"
    }
  ];

  const galleryImages = [
    { src: "/images/pools/pool_1.webp", alt: "Luxury inground pool installation" },
    { src: "/images/pools/pool_2.webp", alt: "Family pool with deck" },
    { src: "/images/pools/pool_3.webp", alt: "Modern pool design" },
    { src: "/images/pools/pool_4.webp", alt: "Pool excavation process" },
    { src: "/images/pools/pool_5.webp", alt: "Pool plumbing installation" },
    { src: "/images/pools/pool_6.webp", alt: "Completed pool project" },
    { src: "/images/pools/pool_7.webp", alt: "Pool deck finishing" }
  ];

  return (
    <div>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section className="relative h-129 text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/pools/pool_1.webp"
            alt="Beautiful pool installation showcase"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-cyan-500/70"></div>
        {/* Additional darkening for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Waves className="h-12 w-12 text-cyan-300 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Pool Installation Pittsburgh PA</h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6 drop-shadow-lg">
              Your complete pool installation solution. From excavation to your first swim, we handle every step of creating your backyard oasis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${globals.business_phone}`}
                className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-cyan-600 transition-colors shadow-lg"
              >
                Call for Consultation: {globals.business_phone}
              </a>
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Summer Ready Banner with Local Areas */}
      <section className="py-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4">
            <Sun className="h-6 w-6" />
            <p className="font-bold">NOW BOOKING POOL INSTALLATIONS in Pittsburgh, Oakdale, Moon Township & Robinson Township!</p>
            <Sun className="h-6 w-6" />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Pittsburgh's Complete Pool Installation Service</h2>
              <p className="text-gray-700 mb-4">
                Serving Pittsburgh, Oakdale, Moon Township, Robinson Township, and surrounding areas, Matt Meyers Plumbing brings professional pool installation to Western Pennsylvania. Pool installation is a natural extension of our excavation and plumbing expertise.
              </p>
              <p className="text-gray-700 mb-4">
                What sets us apart? We handle <strong>everything</strong> in-house. From the initial excavation to the final deck pour, our experienced team manages every aspect of your pool installation. No subcontractors, no coordination headaches - just one trusted team from start to finish.
              </p>
              <p className="text-gray-700 mb-6">
                Our master plumbers ensure your pool's circulation, filtration, and heating systems are installed perfectly, while our excavation experts prepare your site with precision. The result? A beautiful pool installed efficiently and built to last.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-blue-800 font-medium">
                  <strong>Why Choose a Plumbing Company for Your Pool?</strong> Pool systems are essentially complex plumbing projects. Who better to install them than master plumbers who understand water flow, pressure, and system integration?
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image 
                src="/images/pools/pool_1.webp"
                alt="Professional pool installation by Matt Meyers Plumbing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Complete Pool Installation Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We manage every aspect of your pool installation project, ensuring seamless coordination and exceptional results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {poolServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 text-gray-900">{service.service}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pool Styles & Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Pool Styles & Design Options</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We work with quality manufacturers to bring you a variety of pool styles. Whether you want a classic family pool or a modern showpiece, we'll help you find the perfect fit.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {poolFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image 
                    src={feature.image}
                    alt={`${feature.title} pool installation`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700 mb-3">{feature.description}</p>
                  <div className="bg-blue-50 p-3 rounded-lg mb-4">
                    <p className="text-sm text-blue-900 font-medium">Popular Features:</p>
                    <p className="text-sm text-blue-700">{feature.highlights}</p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-600 mb-2 font-semibold">Benefits:</p>
                      <div className="space-y-1">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-xs">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-1 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-xs text-gray-600">
                        <span className="font-semibold">Ideal for:</span> {feature.ideal}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <Sparkles className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Customization Available</h3>
                <p className="text-gray-700 text-sm">
                  Every pool is unique! We'll work with you to customize features like depth, shape, steps, benches, 
                  lighting, and water features. Our team ensures your pool perfectly matches your vision and property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Our Installation Process</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A systematic approach ensures your pool is installed efficiently and built to last for generations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 font-medium mb-2">{step.description}</p>
                <p className="text-gray-700 text-sm">{step.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Matt Meyers Plumbing for Your Pool?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.reason}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Our Recent Pool Projects</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Take a look at some of the beautiful pools we've installed this summer. Each project showcases our attention to detail and commitment to quality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.slice(0, 6).map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Complete Pool Solution</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Single Point of Contact</h3>
                    <p className="text-blue-100 text-sm">One team, one schedule, one company handling everything</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Master Plumbing Expertise</h3>
                    <p className="text-blue-100 text-sm">Licensed master plumbers ensure perfect system installation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Excavation Specialists</h3>
                    <p className="text-blue-100 text-sm">Years of excavation experience for perfect site preparation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Quality Materials Only</h3>
                    <p className="text-blue-100 text-sm">We work with trusted manufacturers for lasting quality</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Comprehensive Warranty</h3>
                    <p className="text-blue-100 text-sm">Our work is guaranteed, plus manufacturer warranties</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image 
                src="/images/pools/pool_7.webp"
                alt="Beautiful finished pool installation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Areas */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Pool Installation Service Areas in Western PA</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We proudly serve Pittsburgh and surrounding communities with professional pool installation services. Licensed, insured, and locally owned.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-bold text-lg text-gray-900">North Areas</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Pool Installation Moon Township PA</li>
                <li>• Swimming Pools Sewickley PA</li>
                <li>• Pool Contractor Robinson Township</li>
                <li>• Inground Pools Coraopolis PA</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-bold text-lg text-gray-900">South Areas</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Pool Installation Mt. Lebanon PA</li>
                <li>• Swimming Pools Upper St. Clair</li>
                <li>• Pool Contractor Peters Township</li>
                <li>• Inground Pools Bethel Park PA</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-bold text-lg text-gray-900">West Areas</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Pool Installation Oakdale PA</li>
                <li>• Swimming Pools Carnegie PA</li>
                <li>• Pool Contractor Bridgeville PA</li>
                <li>• Inground Pools McDonald PA</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              <strong>Headquarters:</strong> Oakdale, PA 15071 | <strong>Service Radius:</strong> 25 miles
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Phone className="h-5 w-5 text-blue-600" />
              <a href={`tel:${globals.business_phone}`} className="text-blue-600 font-bold hover:text-blue-700">
                Call {globals.business_phone} for Pool Installation Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Ongoing Support & Maintenance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Droplets className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-gray-900">Opening & Closing</h3>
                <p className="text-gray-600 text-sm">Professional seasonal pool opening and winterization services in Pittsburgh PA</p>
              </div>
              <div className="text-center">
                <Wrench className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-gray-900">Equipment Service</h3>
                <p className="text-gray-600 text-sm">Pool pump, filter, and heater repair services throughout Allegheny County</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-gray-900">Emergency Support</h3>
                <p className="text-gray-600 text-sm">24/7 emergency pool service in Pittsburgh, Oakdale & Moon Township</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2 text-gray-900">How long does pool installation take in Pittsburgh PA?</h3>
              <p className="text-gray-700">In the Pittsburgh area, pool installation typically takes 1-8 weeks depending on the type of pool and weather conditions. Fiberglass pools in Oakdale or Moon Township can be installed in 1-2 weeks, while custom gunite pools may take 6-8 weeks.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Do you handle permits in Allegheny County?</h3>
              <p className="text-gray-700">Yes, we handle all necessary permits and inspections for pools in Pittsburgh, Oakdale, Moon Township, and throughout Allegheny County. Our team is familiar with local township requirements and ensures your pool meets all Pennsylvania codes and regulations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2 text-gray-900">What's included in your installation?</h3>
              <p className="text-gray-700">Our complete installation includes excavation, pool shell/liner installation, all plumbing and equipment, electrical coordination, decking, and final inspection. We handle everything except electrical work (we coordinate with licensed electricians).</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Can you work with my pool manufacturer?</h3>
              <p className="text-gray-700">We work with several quality pool manufacturers and can likely work with your preferred supplier. We'll ensure compatibility and maintain all manufacturer warranties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2 text-gray-900">What makes you different from other pool contractors?</h3>
              <p className="text-gray-700">As master plumbers with excavation expertise, we handle everything in-house. No subcontractors means better coordination, consistent quality, and one point of contact throughout your project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Pittsburgh Area Pool Installation?</h2>
          <p className="text-xl mb-8">
            Serving Oakdale, Moon Township, Robinson Township, Mt. Lebanon, and all of Greater Pittsburgh. Let's create the perfect pool for your Western PA home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Get Free Pittsburgh Pool Quote
            </Link>
            <a 
              href={`tel:${globals.business_phone}`}
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-cyan-400 transition-colors"
            >
              Call: {globals.business_phone}
            </a>
          </div>
          <p className="text-sm mt-6 text-cyan-100">
            Licensed PA Contractor • Serving Allegheny County • Local Family Owned • Full Warranty
          </p>
        </div>
      </section>
    </div>
  );
}