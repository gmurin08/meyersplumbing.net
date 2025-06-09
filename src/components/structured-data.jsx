'use client';

import { useEffect } from 'react';
import globals from '/globals.json';

export default function StructuredData() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": globals.business_name,
      "image": "https://meyersplumbing.net/logo/logo.webp",
      "telephone": `+1-${globals.business_phone}`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": globals.business_address,
        "addressLocality": globals.business_city,
        "addressRegion": globals.business_state,
        "postalCode": globals.business_zip,
        "addressCountry": "US"
      },
      "url": "https://meyersplumbing.net",
      "email": globals.business_email,
      "description": "Professional plumbing services available 24/7. Licensed, insured plumber serving residential and commercial clients.",
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Oakdale",
          "addressRegion": "PA"
        },
        {
          "@type": "City",
          "name": "Pittsburgh",
          "addressRegion": "PA"
        },
        {
          "@type": "City",
          "name": "Moon Township",
          "addressRegion": "PA"
        },
        {
          "@type": "City",
          "name": "Robinson Township",
          "addressRegion": "PA"
        },
        {
          "@type": "City",
          "name": "Sewickley",
          "addressRegion": "PA"
        },
        {
          "@type": "City",
          "name": "Coraopolis",
          "addressRegion": "PA"
        },
        {
          "@type": "City",
          "name": "Carnegie",
          "addressRegion": "PA"
        },
        {
          "@type": "City",
          "name": "Bridgeville",
          "addressRegion": "PA"
        },
        {
          "@type": "City",
          "name": "Mt. Lebanon",
          "addressRegion": "PA"
        },
        {
          "@type": "City",
          "name": "Upper St. Clair",
          "addressRegion": "PA"
        },
        {
          "@type": "City",
          "name": "Peters Township",
          "addressRegion": "PA"
        },
        {
          "@type": "City",
          "name": "McMurray",
          "addressRegion": "PA"
        },
        {
          "@type": "City",
          "name": "Canonsburg",
          "addressRegion": "PA"
        },
        {
          "@type": "City",
          "name": "Bethel Park",
          "addressRegion": "PA"
        },
        {
          "@type": "City",
          "name": "Dormont",
          "addressRegion": "PA"
        },
        {
          "@type": "City",
          "name": "Imperial",
          "addressRegion": "PA"
        },
        {
          "@type": "City",
          "name": "Findlay Township",
          "addressRegion": "PA"
        }
      ],
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