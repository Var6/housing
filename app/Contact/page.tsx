'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Input, Textarea } from '@heroui/input';
import { Button } from '@heroui/button';
import {
  Mail, Phone, MapPin, SendHorizonal,
  Facebook, Instagram, Linkedin, Twitter
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const { theme } = useTheme();

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-900 dark:via-gray-950 dark:to-black px-4 md:px-12 py-20 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold text-green-800 dark:text-green-300 text-center mb-12"
      >
        Get in Touch with Us
      </motion.h1>

      <section className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white/80 dark:bg-white/5 backdrop-blur-lg shadow-xl border border-green-200 dark:border-green-900 rounded-3xl p-8 md:p-10 w-full space-y-6"
        >
          <div>
            <label className="block mb-2 text-lg font-semibold text-green-800 dark:text-green-200">Name</label>
            <Input type="text" placeholder="John Doe" className="rounded-xl" />
          </div>
          <div>
            <label className="block mb-2 text-lg font-semibold text-green-800 dark:text-green-200">Email</label>
            <Input type="email" placeholder="you@example.com" className="rounded-xl" />
          </div>
          <div>
            <label className="block mb-2 text-lg font-semibold text-green-800 dark:text-green-200">Message</label>
            <Textarea rows={6} placeholder="Type your message here..." className="rounded-xl" />
          </div>
          <Button className="w-full bg-green-700 hover:bg-green-800 text-white text-lg py-3 rounded-xl flex gap-2 justify-center">
            <SendHorizonal size={18} /> Send Message
          </Button>
        </motion.form>

        {/* Contact Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full space-y-8"
        >
          <div className="bg-green-100 dark:bg-green-900/20 backdrop-blur-md rounded-3xl border border-green-200 dark:border-green-700 shadow-lg p-8 space-y-6 text-lg text-green-900 dark:text-green-200 font-medium">
            <div className="flex items-center gap-4">
              <Mail className="text-green-700 dark:text-green-300" /> contact@citizenimf.in
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-green-700 dark:text-green-300" /> +91 98765 43210
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-green-700 dark:text-green-300" /> Patna, Bihar, India
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border-4 border-white dark:border-green-800 shadow-2xl aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902984753863!2d85.1375643148469!3d25.594094884508308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58f3042e9c01%3A0x2c3bb93ff360963a!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1716865692892!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              className="w-full h-full"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </section>

      {/* Social Links */}
      <div className="mt-16 flex flex-wrap gap-6 items-center justify-center text-green-700 dark:text-green-300">
        <Link href="https://www.facebook.com" target="_blank" aria-label="Facebook">
          <Facebook className="w-6 h-6 hover:scale-110 transition-transform" />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram">
          <Instagram className="w-6 h-6 hover:scale-110 transition-transform" />
        </Link>
        <Link href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
          <Linkedin className="w-6 h-6 hover:scale-110 transition-transform" />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" aria-label="Twitter/X">
          <Twitter className="w-6 h-6 hover:scale-110 transition-transform" />
        </Link>
      </div>
    </main>
  );
}
