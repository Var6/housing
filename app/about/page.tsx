'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import Image from 'next/image';
import MeetOurTeam from '@/components/UI/MeetOurTeam';

export default function AboutPage() {
  return (
    <main className="w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <section className="w-full min-h-[60vh] flex items-center justify-center text-center px-6 py-20 bg-gradient-to-br from-green-100 to-green-50 dark:from-gray-900 dark:to-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6">About CitizenIMF</h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Empowering direct property ownership through technology, transparency and trust.
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-400">
            To create a future where buying property is as easy as online shopping —
            secure, transparent, and accessible to everyone.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We aim to simplify the real estate experience by connecting buyers directly
            with genuine property owners and empowering them with verified data, 3D visualization,
            and modern tools.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full bg-gray-100 dark:bg-gray-900 py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              { icon: FaRocket, title: 'Innovative Tools' },
              { icon: FaHandshake, title: 'Direct from Owners' },
              { icon: FaLightbulb, title: 'Verified Listings' },
              { icon: FaUsers, title: 'Local Expertise' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow text-center space-y-3"
              >
                <item.icon size={32} className="mx-auto text-green-600" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
          <MeetOurTeam/>
      {/* Footer Social */}
      <section className="w-full bg-gray-100 dark:bg-gray-900 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2025 CitizenIMF. All rights reserved.</p>
          <div className="flex gap-4 text-xl text-green-600 dark:text-green-400">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer"><BsTwitterX /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
