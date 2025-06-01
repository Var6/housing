'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function NotFound() {
  const numberRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 3D spin animation
    if (numberRef.current) {
      gsap.fromTo(
        numberRef.current,
        { rotateX: 90, rotateY: -180, scale: 0.5, opacity: 0 },
        {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'expo.out',
        }
      );

      gsap.to(numberRef.current, {
        rotateY: 360,
        duration: 10,
        repeat: -1,
        ease: 'linear',
      });
    }

    // Background float
    if (backgroundRef.current) {
      gsap.to(backgroundRef.current, {
        y: 20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        duration: 3,
      });
    }

    // Text fade-in
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, delay: 1, duration: 1, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center overflow-hidden px-4">
      {/* 3D Background Glow */}
      <div
        ref={backgroundRef}
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* 3D 404 Number */}
      <div
        ref={numberRef}
        className="text-[9rem] md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-600 shadow-2xl"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        404
      </div>

      {/* Message & Button */}
      <div ref={textRef} className="text-center z-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">Oops! Page Not Found</h2>
        <p className="text-gray-300 mb-6 max-w-md mx-auto">
          The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-white text-black font-medium rounded-lg shadow-md hover:shadow-xl hover:bg-gray-200 transition duration-300"
        >
          🏠 Go Back Home
        </Link>
      </div>
    </div>
  );
}
