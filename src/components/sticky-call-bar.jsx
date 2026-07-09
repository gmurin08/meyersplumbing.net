import Link from 'next/link';
import { Phone, CalendarCheck } from 'lucide-react';
import globals from '/globals.json';

/**
 * Fixed call/schedule bar pinned to the bottom of the viewport on phones.
 * Hidden from md up, where the header already exposes the phone number and the
 * Schedule Service CTA.
 *
 * The tel: link needs no click handler — CallClickTracker's delegated listener
 * fires the call conversion for any tel: link on the page.
 */
export default function StickyCallBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur-sm pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center gap-2 px-4 py-3">
        <a
          href={`tel:${globals.business_phone}`}
          className="flex-[3] flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3.5 text-white font-semibold shadow-lg active:bg-red-700 transition-colors"
        >
          <Phone className="h-5 w-5 shrink-0" />
          <span>Call Now</span>
        </a>
        <Link
          href="/contact"
          className="flex-[2] flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3.5 text-white font-semibold shadow-lg active:bg-blue-700 transition-colors"
        >
          <CalendarCheck className="h-5 w-5 shrink-0" />
          <span>Schedule</span>
        </Link>
      </div>
    </div>
  );
}
