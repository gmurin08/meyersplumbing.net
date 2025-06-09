'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AnimatedVan() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Image
      src="/images/vans/clean-mck.webp"
      alt="M. Meyers Plumbing Service Van"
      width={600}
      height={300}
      className={`w-full max-w-lg h-auto drop-shadow-2xl -mt-32 lg:mt-0 transition-transform duration-1000 ease-out ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      }`}
      priority
    />
  );
}