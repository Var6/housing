'use client';

import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

// Contact info - centralized for easy updates
const contactInfo = {
  email: 'sales@citizenhousing.in',
  phone: '+91 90310 07097',
  phoneDisplay: '+91 90310 07097',
};

// Social media links - centralized for easy updates
const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/share/1Fkb85HcL1/', icon: Facebook },
  { name: 'Twitter', href: 'https://x.com/CitizenHousingg', icon: Twitter },
  { name: 'Instagram', href: 'https://www.instagram.com/citizenhousingpatna/', icon: Instagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/citizenhousingpatna', icon: Linkedin },
  { name: 'YouTube', href: 'https://youtube.com/@citizenhousingpatna', icon: Youtube },
];

export default function TopRibbon() {
  return (
    <div className="w-full bg-gradient-to-r from-green-800 via-green-600 to-emerald-500 text-white py-1.5 sm:py-2 px-3 sm:px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left Side - Contact Info */}
        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-1.5 sm:gap-2 hover:text-green-200 transition-colors"
            title={contactInfo.email}
          >
            <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="hidden sm:inline truncate max-w-[180px]">{contactInfo.email}</span>
          </a>
          <div className="hidden sm:block w-px h-4 bg-white/30 flex-shrink-0" />
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-1.5 sm:gap-2 hover:text-green-200 transition-colors"
            title={contactInfo.phoneDisplay}
          >
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="hidden sm:inline">{contactInfo.phoneDisplay}</span>
          </a>
        </div>

        {/* Right Side - Social Media Links */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <span className="text-[10px] sm:text-xs text-green-200 hidden lg:inline">Follow us:</span>
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
              title={social.name}
              aria-label={`Follow us on ${social.name}`}
            >
              <social.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Export contact info and social links for use in other components
export { contactInfo, socialLinks };
