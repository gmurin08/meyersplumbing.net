'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const NumbersCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    customers: 0,
    emergency: 0,
    satisfaction: 0
  });
  const sectionRef = useRef(null);

  const targetNumbers = {
    years: 20,
    customers: 2000,
    emergency: 24,
    satisfaction: 100
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const animateCount = (key, target, duration = 2000) => {
      const startTime = Date.now();
      const startValue = 0;

      const updateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out animation
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(startValue + (target - startValue) * easeProgress);

        setCounts(prev => ({ ...prev, [key]: currentValue }));

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    };

    // Start animations with slight delays for staggered effect
    setTimeout(() => animateCount('years', targetNumbers.years, 1500), 100);
    setTimeout(() => animateCount('customers', targetNumbers.customers, 2000), 200);
    setTimeout(() => animateCount('emergency', targetNumbers.emergency, 1200), 300);
    setTimeout(() => animateCount('satisfaction', targetNumbers.satisfaction, 1800), 400);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative py-16 overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/svc/bathroom.webp"
          alt="Professional bathroom plumbing installation"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {/* Blue Overlay with 85% opacity */}
      <div className="absolute inset-0 bg-blue-950/85"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">M. Meyers Plumbing by the Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">
              {counts.years}{targetNumbers.years > counts.years ? '+' : '+'}
            </div>
            <div className="text-blue-200">Years in Business</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">
              {counts.customers.toLocaleString()}{targetNumbers.customers > counts.customers ? '' : '+'}
            </div>
            <div className="text-blue-200">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">
              {counts.emergency}/7
            </div>
            <div className="text-blue-200">Emergency Service</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">
              {counts.satisfaction}%
            </div>
            <div className="text-blue-200">Satisfaction Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersCounter;