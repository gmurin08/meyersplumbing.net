'use client'
import Link from 'next/link'
import NuCard from '@/components/ui/nucard'

const ServiceAreas = () =>{
    return(<>
        
      <section className="py-16 bg-gray-50" style={{background:'#e0e0e0'}}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Proudly Serving Pittsburgh and Surrounding Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Pittsburgh', 'Moon Township', 'Robinson Township', 'Sewickley',
              'Coraopolis', 'Carnegie', 'Bridgeville', 'Mt. Lebanon',
              'Upper St. Clair', 'Peters Township', 'McMurray', 'Canonsburg',
              'Bethel Park', 'Dormont', 'Imperial', 'Findlay Township'
            ].map((area, index) => (
              <NuCard key={index}>
                <span className="text-gray-700 font-medium">{area}</span>
              </NuCard>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't see your area listed? <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">Contact us</Link> to see if we service your location.
            </p>
          </div>
        </div>
      </section>
    </>)
}

export default ServiceAreas