import globals from 'globals.json';

export default function ServiceSchema({ serviceName, serviceDescription, serviceUrl }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "url": `https://meyersplumbing.net${serviceUrl}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": globals.business_name,
      "telephone": `+1-${globals.business_phone}`,
      "url": "https://meyersplumbing.net",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": globals.business_address,
        "addressLocality": globals.business_city,
        "addressRegion": globals.business_state,
        "postalCode": globals.business_zip,
        "addressCountry": "US"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Pittsburgh", "addressRegion": "PA" },
      { "@type": "City", "name": "Oakdale", "addressRegion": "PA" },
      { "@type": "City", "name": "Moon Township", "addressRegion": "PA" },
      { "@type": "City", "name": "Robinson Township", "addressRegion": "PA" },
      { "@type": "City", "name": "Sewickley", "addressRegion": "PA" },
      { "@type": "City", "name": "Carnegie", "addressRegion": "PA" },
      { "@type": "City", "name": "Mt. Lebanon", "addressRegion": "PA" },
      { "@type": "City", "name": "Upper St. Clair", "addressRegion": "PA" },
      { "@type": "City", "name": "Peters Township", "addressRegion": "PA" },
      { "@type": "City", "name": "Bethel Park", "addressRegion": "PA" },
      { "@type": "City", "name": "Dormont", "addressRegion": "PA" },
      { "@type": "City", "name": "Bridgeville", "addressRegion": "PA" },
      { "@type": "City", "name": "Coraopolis", "addressRegion": "PA" },
      { "@type": "City", "name": "McMurray", "addressRegion": "PA" },
      { "@type": "City", "name": "Canonsburg", "addressRegion": "PA" },
      { "@type": "City", "name": "Imperial", "addressRegion": "PA" },
      { "@type": "City", "name": "Findlay Township", "addressRegion": "PA" }
    ],
    "serviceType": "Plumbing"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
