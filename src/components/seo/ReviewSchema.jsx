import globals from 'globals.json';

/**
 * Emits Organization + AggregateRating + individual Review structured data
 * for the reviews page. Note: Google may not render star rich-results for
 * self-serving business reviews, but this is valid schema and reinforces
 * entity data. Only non-placeholder reviews are included.
 */
export default function ReviewSchema({ aggregate, reviews = [] }) {
  const realReviews = reviews.filter((r) => !r.placeholder);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": globals.business_name,
    "image": "https://meyersplumbing.net/logo/logo.webp",
    "telephone": `+1-${globals.business_phone}`,
    "url": "https://meyersplumbing.net",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": globals.business_address,
      "addressLocality": globals.business_city,
      "addressRegion": globals.business_state,
      "postalCode": globals.business_zip,
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregate.ratingValue,
      "reviewCount": aggregate.reviewCount,
      "bestRating": aggregate.bestRating || "5"
    },
    "review": realReviews.map((r) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.name },
      "datePublished": r.date,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating,
        "bestRating": "5"
      },
      "reviewBody": r.text
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
