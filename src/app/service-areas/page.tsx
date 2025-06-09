import { MapPin, Phone, Clock } from 'lucide-react';
import Image from 'next/image';
import ServiceAreaMap from '@/components/ui/ServiceAreaMap';
import CTAButton from '@/components/ui/ctabtn';

export default function ServiceAreasPage() {
  const serviceAreas = [
    {
      name: 'Pittsburgh',
      description: 'Western neighborhoods and downtown Pittsburgh area',
      coverage: 'Full service'
    },
    {
      name: 'Moon Township',
      description: 'Northwestern community near Pittsburgh International Airport',
      coverage: 'Full service'
    },
    {
      name: 'Robinson Township',
      description: 'Fast-growing western suburb',
      coverage: 'Full service'
    },
    {
      name: 'Sewickley',
      description: 'Historic Ohio River community',
      coverage: 'Full service'
    },
    {
      name: 'Coraopolis',
      description: 'Major population center near Pittsburgh International Airport',
      coverage: 'Full service'
    },
    {
      name: 'Carnegie',
      description: 'Southwestern Pittsburgh suburb',
      coverage: 'Full service'
    },
    {
      name: 'Bridgeville',
      description: 'Established southwestern community',
      coverage: 'Full service'
    },
    {
      name: 'Mt. Lebanon',
      description: 'Prestigious South Hills community',
      coverage: 'Full service'
    },
    {
      name: 'Upper St. Clair',
      description: 'Upscale residential community',
      coverage: 'Full service'
    },
    {
      name: 'Peters Township',
      description: 'Growing southwestern suburb',
      coverage: 'Full service'
    },
    {
      name: 'McMurray',
      description: 'Family-friendly residential area',
      coverage: 'Full service'
    },
    {
      name: 'Canonsburg',
      description: 'Historic Washington County seat',
      coverage: 'Full service'
    },
    {
      name: 'Bethel Park',
      description: 'Large South Hills community',
      coverage: 'Full service'
    },
    {
      name: 'Dormont',
      description: 'Historic streetcar suburb',
      coverage: 'Full service'
    },
    {
      name: 'Imperial',
      description: 'Rural community near Oakdale',
      coverage: 'Full service'
    },
    {
      name: 'Findlay Township',
      description: 'Rural township west of Pittsburgh',
      coverage: 'Full service'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 transform-gpu">
          <Image 
            src="/images/hero/wrench-bg.webp" 
            height={1080} 
            width={1920}
            alt="Service areas background"
            className="w-full h-full object-cover scale-110 transform-gpu will-change-transform"
          />
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Service Areas</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive plumbing services throughout western Pittsburgh and surrounding communities
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Comprehensive Service Coverage</h2>
              <p className="text-lg text-gray-700 mb-6">
                Based in Oakdale, Matt Meyers Plumbing provides exceptional service throughout 
                western Pittsburgh and surrounding communities. Our strategic location ensures 
                rapid response times and comprehensive coverage across the region.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="font-bold text-gray-900">Service Coverage Area</h3>
                </div>
                <p className="text-gray-600">
                  From our Oakdale headquarters, we serve communities throughout western Pittsburgh, 
                  including the South Hills, Peters Township, McMurray, Canonsburg, Moon Township, 
                  Sewickley, Coraopolis, Robinson Township, and many other areas.
                </p>
              </div>
            </div>
            
            <div>
              <ServiceAreaMap />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Communities We Serve
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{area.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{area.description}</p>
                <div className="flex items-center">
                  <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                    area.coverage === 'Both locations' ? 'bg-purple-500' :
                    area.coverage === 'Primary hub' ? 'bg-red-500' :
                    area.coverage === 'Moon Township area' ? 'bg-green-500' : 'bg-blue-500'
                  }`}></span>
                  <span className="text-xs text-gray-500">{area.coverage}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Don't see your area listed? We may still be able to help! 
              Contact us to discuss service availability in your location.
            </p>
            <div className="flex justify-center">
              <CTAButton />
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Guarantee */}
      <section className="relative py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/vans/van-mockup.webp')" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Fast Response Times Guaranteed</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Emergency Service</h3>
              <p>24/7 emergency response within our service areas</p>
            </div>
            <div>
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quick Response</h3>
              <p>Same-day service available for most routine calls</p>
            </div>
            <div>
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Local Coverage</h3>
              <p>Our central location ensures we're always nearby</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}