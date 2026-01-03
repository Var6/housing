'use client';

import { useEffect, useState, ReactNode, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroCarouselProps {
  slides: ReactNode[];
  interval?: number;
}

export default function HeroCarousel({
  slides,
  interval = 6000,
}: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const total = slides.length;

  useEffect(() => {
    if (intervalRef.current) return; // 👈 prevents double interval

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [interval, total]);

  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const next = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-screen flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      {/* Controls */}
      <button onClick={prev} className="absolute left-4 top-1/2 z-50">‹</button>
      <button onClick={next} className="absolute right-4 top-1/2 z-50">›</button>
    </div>
  );
}
