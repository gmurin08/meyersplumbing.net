import Link from 'next/link';
import { Star, Phone, Quote } from 'lucide-react';
import globals from '/globals.json';
import reviewsData from '@/data/reviews.json';
import ReviewsGrid from '@/components/reviews/ReviewsGrid';
import ReviewSchema from '@/components/seo/ReviewSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata = {
  title: 'Customer Reviews',
  description:
    'Read what customers across the greater Pittsburgh area say about Matt Meyers Plumbing. Rated 5 stars by 200+ homeowners and businesses for honest, quality plumbing work.',
  alternates: { canonical: '/reviews' },
};

export default function ReviewsPage() {
  const { aggregate, reviews, writeReviewUrl } = reviewsData;

  return (
    <div>
      <ReviewSchema aggregate={aggregate} reviews={reviews} />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. See why homeowners and businesses across the
            Pittsburgh area trust Matt Meyers Plumbing.
          </p>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Reviews', href: '/reviews' },
        ]}
      />

      {/* Aggregate band */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
            <div>
              <div className="text-6xl font-bold text-gray-900 leading-none">
                {aggregate.ratingValue}
              </div>
              <div className="flex justify-center sm:justify-start mt-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <div className="sm:border-l sm:border-gray-200 sm:pl-8">
              <p className="text-2xl font-semibold text-gray-900">
                {aggregate.reviewCount} Verified Google Reviews
              </p>
              <p className="text-gray-600 mt-1">
                A {aggregate.ratingValue}-star average from homeowners and businesses across the
                greater Pittsburgh area.
              </p>
              {writeReviewUrl && !writeReviewUrl.includes('REPLACE') && (
                <a
                  href={writeReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-700 font-medium hover:text-blue-900"
                >
                  Leave us a review →
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center mb-10">
            <Quote className="h-8 w-8 text-blue-200 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              What Our Customers Say
            </h2>
          </div>
          <ReviewsGrid reviews={reviews} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Happy Customers?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Experience the honest, quality plumbing service our customers rave about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${globals.business_phone}`}
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-6 w-6" />
              <span>{globals.business_phone}</span>
            </a>
            <Link
              href="/contact"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-orange-600 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
