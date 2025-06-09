'use client'
import { Phone } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import globals from 'globals.json';

export default function EmergencyCTA({ 
  title = "Plumbing Emergency?", 
  description = "Don't wait! Call us now for immediate assistance",
  buttonText = globals.business_phone,
  backgroundImage = "/images/svc/emergency.webp",
  overlayOpacity = "bg-gray-900/75",
  className = "py-6"
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          // Stop observing after first animation
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
        rootMargin: '0px 0px -100px 0px' // Trigger a bit before fully in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src={backgroundImage}
          alt="Emergency plumbing service response"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <a 
          href={`tel:${globals.business_phone}`}
          className={`inline-flex items-center space-x-2 bg-white text-red-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors ${
            isVisible ? 'animate-pulse-attention' : ''
          }`}
        >
          <Phone className="h-6 w-6" />
          <span>{buttonText}</span>
        </a>
      </div>

      <style jsx>{`
        @keyframes pulseAttention {
          0% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1); }
          75% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .animate-pulse-attention {
          animation: pulseAttention 1.2s ease-in-out 3;
        }
      `}</style>
    </section>
  );
}