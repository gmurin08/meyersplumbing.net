'use client';

import { useEffect } from 'react';
import { trackCallClick } from '@/lib/gtag';

/**
 * Mounts a single document-level click listener that fires the "Call Link Click
 * (Not from Ads)" conversion whenever any tel: link is clicked. Using event
 * delegation means every tel: link on the site is covered — header, footer,
 * home, contact, and all service/area pages — without wiring each one by hand,
 * and links rendered later are picked up automatically.
 */
export default function CallClickTracker() {
  useEffect(() => {
    const handler = (event) => {
      const link = event.target.closest?.('a[href^="tel:"]');
      if (link) {
        trackCallClick();
      }
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return null;
}
