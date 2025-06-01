'use client';

import { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const plots = [
  {
    title: 'Premium Land Plot',
    location: 'Near Patna Airport',
    size: '1200 sqft',
    color: '#10b981',
  },
  {
    title: 'Corner Plot',
    location: 'Boring Road, Patna',
    size: '1500 sqft',
    color: '#3b82f6',
  },
  {
    title: 'Gated Community Plot',
    location: 'Danapur, Patna',
    size: '1000 sqft',
    color: '#f59e0b',
  },
  {
    title: 'Lake View Land',
    location: 'Ganga River Side',
    size: '1800 sqft',
    color: '#8b5cf6',
  },
  {
    title: 'Budget-Friendly Plot',
    location: 'Phulwari Sharif',
    size: '800 sqft',
    color: '#ef4444',
  },
];

function PlotBox({ color, boxRef }: { color: string; boxRef: React.RefObject<THREE.Mesh> }) {
  return (
    <Canvas camera={{ position: [2, 2, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <mesh ref={boxRef} castShadow receiveShadow>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default function PlotShowcasePage() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const boxRefs = useRef<(THREE.Mesh | null)[]>([]);

  useEffect(() => {
    sectionRefs.current.forEach((section, i) => {
      if (!section || !boxRefs.current[i]) return;

      gsap.to(boxRefs.current[i]!.rotation, {
        y: Math.PI * 2,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 30%',
          scrub: true,
        },
        ease: 'power2.out',
      });
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-green-50 py-24 px-6 space-y-24">
      <h2 className="text-5xl font-bold text-center text-green-800 mb-16">Explore Featured Plots</h2>

      {plots.map((plot, idx) => {
        // Create a ref for each plot box mesh
        const boxRef = useRef<THREE.Mesh>(null);

        // Store current box ref in the refs array (make sure it's updated)
        boxRefs.current[idx] = boxRef.current;

        return (
          <div
            key={idx}
            ref={(el) => {
              sectionRefs.current[idx] = el; // <-- Fixed no-return callback here
            }}
            className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 p-8 bg-white shadow-xl rounded-2xl border border-gray-200 hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="w-full lg:w-1/2 h-[300px]">
              <PlotBox color={plot.color} boxRef={boxRef} />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-green-800">{plot.title}</h3>
              <p className="text-gray-600 mt-2">{plot.location}</p>
              <p className="text-gray-500">{plot.size}</p>
              <p className="mt-4 text-sm text-gray-400">Scroll to rotate the plot in 3D</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
