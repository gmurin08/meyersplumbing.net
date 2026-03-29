export const metadata = {
  title: 'Frequently Asked Questions - Pittsburgh Plumbing Services',
  description: 'Get answers to common plumbing questions. Learn about our services, pricing, emergency response times, and more. M. Meyers Plumbing serves Pittsburgh, Oakdale & surrounding areas.',
  keywords: 'plumbing FAQ, plumber questions Pittsburgh, emergency plumbing cost, drain cleaning questions, water heater FAQ, Pittsburgh plumber',
  openGraph: {
    title: 'Plumbing FAQ - M. Meyers Plumbing Pittsburgh',
    description: 'Answers to common plumbing questions about services, pricing, scheduling, and emergency repairs in the Pittsburgh area.',
    url: 'https://meyersplumbing.net/faq',
  },
  alternates: {
    canonical: '/faq'
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What plumbing services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a comprehensive range of plumbing services including emergency repairs, drain cleaning, water heater installation and repair, pipe replacement, fixture installation, gas line services, and both residential and commercial plumbing solutions."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide 24/7 emergency services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide 24/7 emergency plumbing services. Plumbing emergencies can't wait, so we're available around the clock to help with burst pipes, major leaks, sewer backups, and other urgent plumbing issues."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Matt Meyers is a licensed Master Plumber with over 20 years of experience. We're fully licensed, bonded, and insured for your protection and peace of mind."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We proudly serve Pittsburgh and the surrounding areas including Moon Township, Robinson Township, Sewickley, Carnegie, Mt. Lebanon, Upper St. Clair, Peters Township, and many other communities in the greater Pittsburgh region."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide free estimates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide free estimates for most plumbing projects. Contact us to schedule an appointment, and we'll assess your needs and provide you with a detailed, no-obligation estimate."
      }
    },
    {
      "@type": "Question",
      "name": "What payment methods do you accept?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accept cash, check, and all major credit cards for your convenience. We believe in transparent pricing with no hidden fees."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer financing options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer financing options for larger projects. Contact us to discuss available financing plans that can help make your plumbing project more affordable."
      }
    },
    {
      "@type": "Question",
      "name": "How much do emergency calls cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Emergency service calls are priced competitively and fairly. We'll provide you with upfront pricing before any work begins, so you know exactly what to expect with no surprises."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you respond to emergencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We strive to respond to emergency calls as quickly as possible, typically within 1-2 hours depending on your location and the time of day. Our goal is to minimize damage and get your plumbing back to working order fast."
      }
    },
    {
      "@type": "Question",
      "name": "How do I schedule a service appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can schedule an appointment by calling us directly, using our online contact form, or through our website. We'll work with your schedule to find a convenient time for your service."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide same-day service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer same-day service for urgent repairs and many routine services, subject to availability. Contact us early in the day for the best chance of same-day scheduling."
      }
    },
    {
      "@type": "Question",
      "name": "What should I expect during a service call?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our technician will arrive in a clearly marked vehicle, assess the problem, explain the issue and solution options, provide upfront pricing, and complete the work efficiently with minimal disruption to your day."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do if I have a burst pipe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Immediately shut off your main water supply, turn off electricity to affected areas if there's flooding, move valuables to safety, and call us right away. Don't attempt to fix it yourself as this can cause more damage."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my water heater not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Water heater issues can be caused by pilot light problems, thermostat issues, heating element failure, or sediment buildup. Our technicians can diagnose and repair most water heater problems quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I have my drains cleaned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend professional drain cleaning annually for most homes, or more frequently if you experience regular clogs. Regular maintenance helps prevent major blockages and keeps your plumbing system running smoothly."
      }
    },
    {
      "@type": "Question",
      "name": "What causes low water pressure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Low water pressure can be caused by mineral buildup in pipes, faulty pressure regulators, leaks in the system, or issues with your water supplier. We can diagnose the cause and recommend the best solution."
      }
    }
  ]
};

export default function FAQLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
