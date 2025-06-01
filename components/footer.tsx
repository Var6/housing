'use client';
import React from 'react';
import { MapPin, Phone, Mail, Building2, Landmark } from 'lucide-react';

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 block pt-12 h-fit">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 grid-cols-1 md:grid-cols-3">
        {/** ------------------------------------------------------------------
         * Section 1 – Map & Address                                            
         * ------------------------------------------------------------------ */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-indigo-400" />
            Our Office
          </h3>

          {/* Replace the src below with your real Google Maps embed link */}
          <iframe
            className="w-full h-40 md:h-48 rounded-lg border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11409.816830297282!2d85.104235793357!3d25.61145373991656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed584d5b4b1ef3%3A0x72045467d627accb!2sBailey%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1716532800000"
            title="Citizen Housing Location"
          />

          <address className="mt-4 not-italic leading-relaxed text-sm">
            3rd Floor, XYZ Tower, Bailey Road<br />
            Patna, Bihar 800001
          </address>

          <p className="flex items-center gap-2 mt-3 text-sm">
            <Phone className="w-4 h-4" />
            +91 98765 43210
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4" />
            support@citizenhousing.in
          </p>
        </div>

        {/** ------------------------------------------------------------------
         * Section 2 – Property Listings & Finance                              
         * ------------------------------------------------------------------ */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-indigo-400" />
            Property & Finance
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/projects/residential" className="hover:text-white transition-colors">
                Residential Projects
              </a>
            </li>
            <li>
              <a href="/projects/commercial" className="hover:text-white transition-colors">
                Commercial Plots
              </a>
            </li>
            <li>
              <a href="/finance/loans" className="hover:text-white transition-colors">
                Home Loan Assistance
              </a>
            </li>
            <li>
              <a href="/finance/emi-calculator" className="hover:text-white transition-colors">
                EMI Calculator
              </a>
            </li>
          </ul>
        </div>

        {/** ------------------------------------------------------------------
         * Section 3 – Quick Links & About Us                                   
         * ------------------------------------------------------------------ */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Landmark className="w-5 h-5 text-indigo-400" />
            About Citizen Housing
          </h3>

          <p className="text-sm leading-relaxed mb-4">
            Citizen Housing bridges the gap between aspiring homeowners and verified land
            opportunities. From transparent land deals to turnkey construction services,
            we guide you every step of the way.
          </p>

          <nav>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* © Copyright bar */}
      <div className="border-t border-gray-700 text-center py-4 text-xs sm:text-sm">
        © {currentYear} Citizen Housing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
