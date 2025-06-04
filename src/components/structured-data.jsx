'use client';

import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "M. Meyers Plumbing",
      "image": "https://meyersplumbing.com/logo.png", // Replace with actual logo URL
      "telephone": "+1-555-123-4567", // Replace with actual phone
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "Your City",
        "addressRegion": "ST",
        "postalCode": "12345",
        "addressCountry": "US"
      },
      "url": "https://meyersplumbing.com",
      "description": "Professional plumbing services available 24/7. Licensed, insured plumber serving residential and commercial clients.",
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday", 
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "areaServed": {
        "@type": "City",
        "name": "Your City" // Replace with actual service area
      },
      "serviceType": [
        "Emergency Plumbing",
        "Residential Plumbing", 
        "Commercial Plumbing",
        "Water Heater Repair",
        "Drain Cleaning",
        "Leak Detection"
      ]
    });
    document.head.appendChild(script);

    return () => {
      // Cleanup if component unmounts
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript && existingScript.innerHTML.includes('M. Meyers Plumbing')) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}