'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const steps = [
  { title: 'Initial Inquiry', description: 'Reach out with your interest.' },
  { title: 'Site Visit', description: 'We arrange a guided site visit.' },
  { title: 'Verification', description: 'We help verify legal documents.' },
  { title: 'Agreement', description: 'Paperwork and agreements handled.' },
  { title: 'Ownership Transfer', description: 'Legal ownership is transferred.' },
];

export default function VerticalProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 100,
    damping: 30,
  });

  const [dotStates, setDotStates] = useState<boolean[]>(steps.map(() => false));

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollY = window.scrollY + window.innerHeight / 2;

      const newDotStates = dotRefs.current.map((dot) => {
        if (!dot) return false;
        const dotTop = dot.getBoundingClientRect().top + window.scrollY;
        return scrollY >= dotTop;
      });

      setDotStates(newDotStates);
    };

    handleScroll(); // on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-white py-20 px-4">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-16">Our Process</h2>

      <div ref={containerRef} className="relative max-w-4xl mx-auto">
        {/* Static line behind */}
        <div className="absolute left-[1.75rem] md:left-[2.5rem] top-0 bottom-0 w-[2px] bg-gray-200 z-0" />

        {/* Animated progress line */}
        <motion.div
          style={{ height: '100%', scaleY }}
          className="absolute left-[1.75rem] md:left-[2.5rem] top-0 w-[2px] bg-gradient-to-b from-green-400 to-green-700 z-10 origin-top"
        />

        {/* Step list */}
        <div className="flex flex-col space-y-20 pl-12 md:pl-20 relative z-20">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-start">
              {/* Dot */}
              <span
                ref={(el) => (dotRefs.current[idx] = el)}
                className={`absolute -left-[1.1rem] md:-left-[1.25rem] top-1 w-4 h-4 rounded-full border-4 transition-all duration-300 z-20
                  ${dotStates[idx] ? 'bg-green-600 border-white shadow-lg' : 'bg-white border-gray-400'}
                `}
              />
              {/* Step Content */}
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-md border w-full">
                <h3 className="text-lg md:text-xl font-semibold text-green-800">{step.title}</h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
