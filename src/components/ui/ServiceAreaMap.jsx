'use client'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import globals from '/globals.json'

// Dynamically import map to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false })
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false })

const ServiceAreaMap = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [leaflet, setLeaflet] = useState(null)
  const [businessIcon, setBusinessIcon] = useState(null)
  const [serviceIcon, setServiceIcon] = useState(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Business location (Oakdale, PA)
  const businessLocation = {
    name: globals.business_name,
    address: `${globals.business_address}, ${globals.business_city}, ${globals.business_state} ${globals.business_zip}`,
    lat: 40.4398,
    lng: -80.1664,
    type: 'business'
  }

  // Service areas served by Matt Meyers Plumbing
  const serviceAreas = [
    { name: 'Pittsburgh', lat: 40.4406, lng: -79.9959 },
    { name: 'Bethel Park', lat: 40.3273, lng: -80.0375 },
    { name: 'Mt. Lebanon', lat: 40.3712, lng: -80.0431 },
    { name: 'Upper St. Clair', lat: 40.3367, lng: -80.0875 },
    { name: 'Peters Township', lat: 40.3162, lng: -80.0834 },
    { name: 'McMurray', lat: 40.2937, lng: -80.0681 },
    { name: 'Canonsburg', lat: 40.2634, lng: -80.1878 },
    { name: 'Bridgeville', lat: 40.3573, lng: -80.1095 },
    { name: 'Dormont', lat: 40.3873, lng: -80.0325 },
    { name: 'Moon Township', lat: 40.5112, lng: -80.2084 },
    { name: 'Sewickley', lat: 40.5334, lng: -80.1848 },
    { name: 'Imperial', lat: 40.4526, lng: -80.2540 },
    { name: 'Robinson Township', lat: 40.4540, lng: -80.1373 },
    { name: 'Carnegie', lat: 40.4084, lng: -80.0834 },
    { name: 'Coraopolis', lat: 40.5173, lng: -80.1667 },
    { name: 'Findlay Township', lat: 40.4870, lng: -80.2430 }
  ].map(area => ({ ...area, type: 'service' }))

  const allLocations = [businessLocation, ...serviceAreas]

  useEffect(() => {
    // Import Leaflet on client side
    import('leaflet').then((L) => {
      setLeaflet(L)
      
      // Create custom icons
      const businessIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })
      
      const serviceIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [20, 33],
        iconAnchor: [10, 33],
        popupAnchor: [1, -28],
        shadowSize: [33, 33]
      })
      
      setBusinessIcon(businessIcon)
      setServiceIcon(serviceIcon)
    })
  }, [])

  // Don't render until component is mounted and Leaflet is loaded
  if (!isMounted || !leaflet || !businessIcon || !serviceIcon) {
    return (
      <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg font-medium">Loading Map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg relative z-10">
      <MapContainer
        center={[40.4398, -80.1664]} // Center on Oakdale, PA
        zoom={10}
        style={{ height: '100%', width: '100%', zIndex: 1 }}
        scrollWheelZoom={false}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {allLocations.map((location, index) => (
          <Marker
            key={index}
            position={[location.lat, location.lng]}
            icon={location.type === 'business' ? businessIcon : serviceIcon}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-gray-900 mb-1">
                  {location.name}
                </h3>
                {location.type === 'business' ? (
                  <div>
                    <p className="text-sm text-gray-600 mb-2">{location.address}</p>
                    <p className="text-xs text-blue-600 font-medium">Main Office</p>
                  </div>
                ) : (
                  <p className="text-xs text-gray-600">Service Area</p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default ServiceAreaMap