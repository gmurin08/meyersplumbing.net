'use client';

import { useMemo, useState } from 'react';
import { Star } from 'lucide-react';

function Stars({ rating }) {
  return (
    <div className="flex" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d)) return '';
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export default function ReviewsGrid({ reviews }) {
  const services = useMemo(() => {
    const set = new Set(reviews.map((r) => r.service).filter(Boolean));
    return ['All', ...Array.from(set).sort()];
  }, [reviews]);

  const [filter, setFilter] = useState('All');
  const [visible, setVisible] = useState(9);

  const filtered = useMemo(
    () => (filter === 'All' ? reviews : reviews.filter((r) => r.service === filter)),
    [reviews, filter]
  );

  const shown = filtered.slice(0, visible);

  return (
    <div>
      {/* Service filter */}
      {services.length > 2 && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {services.map((s) => (
            <button
              key={s}
              onClick={() => {
                setFilter(s);
                setVisible(9);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === s
                  ? 'bg-blue-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shown.map((r) => (
          <article
            key={r.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full border border-gray-100"
          >
            <div className="flex items-center justify-between mb-3">
              <Stars rating={r.rating} />
              {r.source && (
                <span className="text-xs font-medium text-gray-400">{r.source}</span>
              )}
            </div>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">&ldquo;{r.text}&rdquo;</p>

            {r.response && (
              <div className="mt-4 bg-blue-50 border-l-4 border-blue-600 rounded-r p-3">
                <p className="text-xs font-semibold text-blue-800 mb-1">
                  Response from Meyers Plumbing
                </p>
                <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                  {r.response}
                </p>
              </div>
            )}

            <div className="mt-auto pt-4 border-t border-gray-100">
              <p className="font-semibold text-gray-900">{r.name}</p>
              <p className="text-sm text-gray-500">
                {[r.location, formatDate(r.date)].filter(Boolean).join(' · ')}
              </p>
              {r.service && (
                <span className="inline-block mt-2 text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded">
                  {r.service}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-12">No reviews to display yet.</p>
      )}

      {visible < filtered.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisible((v) => v + 9)}
            className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            Show More Reviews
          </button>
        </div>
      )}
    </div>
  );
}
