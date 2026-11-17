'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackMetaEvent } from '@/lib/meta-pixel';

/**
 * Sends a Meta Pixel PageView on client-side navigations. The GTM pixel tag
 * only fires PageView on the initial (full) page load, and Next.js route
 * changes don't reload the page, so without this Meta only sees the landing
 * page of each visit. The first render is skipped to avoid doubling GTM's hit.
 */
export default function MetaPixelPageView() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    trackMetaEvent('PageView');
  }, [pathname]);

  return null;
}
