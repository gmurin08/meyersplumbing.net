'use client';

import { CalendarCheck } from 'lucide-react';
import { HCP_TOKEN, HCP_ORG_NAME } from '@/lib/gtag';

// Direct booking page, used if the widget script hasn't loaded (slow network,
// blocked script) so the button still gets the visitor to a booking form.
const HCP_BOOKING_URL = `https://book.housecallpro.com/book/${HCP_ORG_NAME}/${HCP_TOKEN}?v2=true`;

/**
 * Opens the Housecall Pro online booking modal. The widget script itself is
 * loaded once in the root layout.
 *
 * Deliberately not using the widget's `hcp-button` class: the widget injects
 * `button.hcp-button` styles that would override our Tailwind classes.
 */
export default function BookOnlineButton({ className = '', label = 'Book Online' }) {
  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'booking_open' });

    if (window.HCPWidget?.openModal) {
      window.HCPWidget.openModal();
    } else {
      window.open(HCP_BOOKING_URL, '_blank', 'noopener');
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      <CalendarCheck className="h-5 w-5 shrink-0" />
      <span>{label}</span>
    </button>
  );
}
