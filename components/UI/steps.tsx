'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { steps } from '@/data'; // Adjust the import path as necessary
gsap.registerPlugin(ScrollTrigger);



export default function VerticalProcess3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            rotateY: -60,
            y: 50,
          },
          {
            opacity: 1,
            rotateY: 0,
            y: 0,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'bottom 60%',
              toggleActions: 'play none none reverse',
            },
            duration: 1,
            ease: 'power3.out',
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-24 px-4 transition-colors duration-300">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-800 dark:text-green-400 mb-20 underline decoration-green-600 dark:decoration-green-300 decoration-4">
        Our Comprehensive Process
      </h2>

      <div ref={containerRef} className="relative max-w-6xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-700 z-0" />
        <motion.div
          style={{ height: '100%', scaleY }}
          className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-green-400 to-green-700 z-10 origin-top"
        />

        <div className="relative z-20 flex flex-col space-y-24">
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className={`relative flex flex-col md:flex-row ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                } items-center`}
              >
                {/* Connector badge */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 z-20">
                  <div className="w-12 h-12 rounded-full bg-green-600 dark:bg-green-500 text-white flex items-center justify-center font-bold shadow-lg text-lg">
                    {idx + 1}
                  </div>
                </div>

                <div
                  className={`bg-white dark:bg-gray-800 border border-green-800 dark:border-green-500 shadow-lg rounded-2xl p-6 md:p-8 w-full md:w-[48%] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    isLeft ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg shadow"
                    />
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-green-800 dark:text-green-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
