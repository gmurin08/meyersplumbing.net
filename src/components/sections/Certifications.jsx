import Image from 'next/image';
import { Camera, BadgeCheck, Flame, ShieldCheck, Clock } from 'lucide-react';

/**
 * Certifications / credentials trust band. Reusable across pages.
 *
 * Each item renders an official logo image if `logo` (a path under /public) is
 * provided, otherwise falls back to a clean lucide icon badge. To add real
 * logos later, drop the files in /public/images/certs/ and set `logo` on the
 * matching item below (or pass a custom `items` array as a prop).
 */
const DEFAULT_CERTS = [
  {
    id: 'nassco',
    name: 'NASSCO Certified',
    issuer: 'Pipeline Assessment (PACP)',
    Icon: Camera,
    logo: '/images/logos/nassco.jpeg',
  },
  {
    id: 'master-plumber',
    name: 'Allegheny County Master Plumber',
    issuer: 'Licensed & Registered',
    Icon: BadgeCheck,
    logo: '/images/logos/26-261760_seal-of-allegheny-county-pennsylvania-chester-county-pa-flag.png',
  },
  {
    id: 'dot-gas',
    name: 'DOT Gas Certified',
    issuer: 'Operator Qualified',
    Icon: Flame,
    logo: '/images/logos/dot.jpg',
  },
  {
    id: 'backflow',
    name: 'ASSE Backflow Certified',
    issuer: 'Backflow Prevention',
    Icon: ShieldCheck,
    logo: '/images/logos/asse-certified-vector-logo.png',
  },
  {
    id: 'experience',
    name: '25+ Years Experience',
    issuer: 'Serving Greater Pittsburgh',
    Icon: Clock,
    logo: null,
  },
];

export default function Certifications({
  title = 'Licensed, Certified & Trusted',
  subtitle = 'Our credentials reflect our commitment to safe, code-compliant, professional work on every job.',
  items = DEFAULT_CERTS,
  className = 'bg-white',
}) {
  return (
    <section className={`py-14 border-y border-gray-100 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold text-center text-gray-900">{title}</h2>
        )}
        {subtitle && (
          <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">{subtitle}</p>
        )}

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map(({ id, name, issuer, Icon, logo }) => (
            <div
              key={id}
              className="flex flex-col items-center text-center p-5 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div
                className={`h-20 w-20 flex items-center justify-center rounded-full mb-4 overflow-hidden ${
                  logo ? 'bg-white border border-gray-100 p-2' : 'bg-blue-50'
                }`}
              >
                {logo ? (
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    width={64}
                    height={64}
                    className="object-contain max-h-full w-auto"
                  />
                ) : (
                  Icon && <Icon className="h-9 w-9 text-blue-700" aria-hidden="true" />
                )}
              </div>
              <p className="font-semibold text-gray-900 text-sm leading-snug">{name}</p>
              {issuer && <p className="text-xs text-gray-500 mt-1">{issuer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
