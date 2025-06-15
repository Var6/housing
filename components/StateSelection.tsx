'use client';

import { useEffect, useState } from 'react';
import { Building, Users, MapPin, TrendingUp } from 'lucide-react';

interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
  color: string;
}

const stats: Stat[] = [
  {
    id: 'properties',
    label: 'Properties Listed',
    value: 10000,
    suffix: '+',
    icon: <Building className="w-8 h-8" />,
    color: 'text-primary-600'
  },
  {
    id: 'customers',
    label: 'Happy Customers',
    value: 5000,
    suffix: '+',
    icon: <Users className="w-8 h-8" />,
    color: 'text-secondary-600'
  },
  {
    id: 'districts',
    label: 'Districts Covered',
    value: 38,
    suffix: '',
    icon: <MapPin className="w-8 h-8" />,
    color: 'text-accent-600'
  },
  {
    id: 'growth',
    label: 'Monthly Growth',
    value: 25,
    suffix: '%',
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'text-green-600'
  }
];

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-primary-50 to-secondary-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Bihar's Leading Property Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of buyers, sellers, and investors across Bihar for transparent and reliable property transactions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-primary-200"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6 group-hover:bg-primary-50 transition-colors duration-300">
                <div className={`${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
              </div>

              {/* Number */}
              <div className="mb-3">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">
                  <CountUp end={stat.value} />
                  <span className={stat.color}>{stat.suffix}</span>
                </div>
              </div>

              {/* Label */}
              <p className="text-gray-600 font-medium text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">99.5%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-600 mb-2">24/7</div>
                <div className="text-gray-600">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-600 mb-2">100%</div>
                <div className="text-gray-600">Verified Listings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}