'use client';

import { useEffect } from 'react';
import { trackBookingConversion } from '@/lib/gtag';

/**
 * Fires the online booking conversion once when /booking-complete loads.
 * gtag is loaded afterInteractive, so wait for it briefly if it isn't ready.
 */
export default function BookingConversion() {
  useEffect(() => {
    let tries = 0;
    const fire = () => {
      if (typeof window.gtag === 'function' || tries >= 20) {
        trackBookingConversion();
        return;
      }
      tries += 1;
      timer = setTimeout(fire, 250);
    };
    let timer = setTimeout(fire, 0);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
