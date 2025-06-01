'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { BsLinkedin, BsFacebook, BsInstagram, BsTwitter, BsX } from 'react-icons/bs';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageSeed: string;
  social: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
};

const team: TeamMember[] = [
  {
    id: 1,
    name: 'Amit Sinha',
    role: 'Founder & CEO',
    bio: 'Amit is the visionary behind our company, leading with passion and innovation.',
    imageSeed: 'Amit Sinha',
    social: {
      linkedin: 'https://linkedin.com/in/amitsinha',
      twitter: 'https://twitter.com/amitsinha',
      instagram: 'https://instagram.com/amitsinha',
    },
  },
  {
    id: 2,
    name: 'Neha Verma',
    role: 'Marketing Head',
    bio: 'Neha leads our marketing with creativity and data-driven strategies.',
    imageSeed: 'Neha Verma',
    social: {
      facebook: 'https://facebook.com/nehaverma',
      instagram: 'https://instagram.com/nehaverma',
    },
  },
  {
    id: 3,
    name: 'Rajeev Kumar',
    role: 'Tech Lead',
    bio: 'Rajeev builds innovative tech solutions that power our platform.',
    imageSeed: 'Rajeev Kumar',
    social: {
      linkedin: 'https://linkedin.com/in/rajeevkumar',
      twitter: 'https://twitter.com/rajeevkumar',
    },
  },
  {
    id: 4,
    name: 'Priya Singh',
    role: 'Design & UX',
    bio: 'Priya crafts beautiful and intuitive user experiences.',
    imageSeed: 'Priya Singh',
    social: {
      instagram: 'https://instagram.com/priyasingh',
    },
  },
];

export default function MeetOurTeam() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  const SocialLink = ({
    href,
    icon: Icon,
    label,
    colorClass,
  }: {
    href: string;
    icon: React.ComponentType<{ size?: number }>;
    label: string;
    colorClass: string;
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-1 text-sm font-medium ${colorClass} hover:underline`}
      aria-label={label}
      onClick={e => e.stopPropagation()}
    >
      <Icon size={18} />
      {label}
    </a>
  );

  return (
    <>
      <section className="mx-auto py-20  px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Meet Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Passionate individuals building the future of real estate.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 ">
          {team.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-2xl p-6 text-center cursor-pointer select-none border-3 border-red-900"
              onClick={() => setSelected(member)}
            >
              <Image
                src={`https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(
                  member.imageSeed,
                )}`}
                alt={member.name}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{member.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{member.role}</p>
              <div className="flex justify-center gap-4 text-gray-600 dark:text-gray-300">
                {member.social.linkedin && (
                  <SocialLink
                    href={member.social.linkedin}
                    icon={BsLinkedin}
                    label="LinkedIn"
                    colorClass="text-blue-600 dark:text-blue-400"
                  />
                )}
                {member.social.facebook && (
                  <SocialLink
                    href={member.social.facebook}
                    icon={BsFacebook}
                    label="Facebook"
                    colorClass="text-blue-700 dark:text-blue-500"
                  />
                )}
                {member.social.instagram && (
                  <SocialLink
                    href={member.social.instagram}
                    icon={BsInstagram}
                    label="Instagram"
                    colorClass="text-pink-600 dark:text-pink-400"
                  />
                )}
                {member.social.twitter && (
                  <SocialLink
                    href={member.social.twitter}
                    icon={BsTwitter}
                    label="Twitter"
                    colorClass="text-sky-500 dark:text-sky-400"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popup Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-xl max-w-md w-full p-6 relative shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
                aria-label="Close popup"
              >
                <BsX size={24} />
              </button>

              <div className="flex flex-col items-center">
                <Image
                  src={`https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(
                    selected.imageSeed,
                  )}`}
                  alt={selected.name}
                  width={120}
                  height={120}
                  className="rounded-full mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {selected.name}
                </h3>
                <p className="text-green-700 dark:text-green-400 font-semibold mb-4">
                  {selected.role}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
                  {selected.bio}
                </p>

                <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-300">
                  {selected.social.linkedin && (
                    <SocialLink
                      href={selected.social.linkedin}
                      icon={BsLinkedin}
                      label="LinkedIn"
                      colorClass="text-blue-600 dark:text-blue-400"
                    />
                  )}
                  {selected.social.facebook && (
                    <SocialLink
                      href={selected.social.facebook}
                      icon={BsFacebook}
                      label="Facebook"
                      colorClass="text-blue-700 dark:text-blue-500"
                    />
                  )}
                  {selected.social.instagram && (
                    <SocialLink
                      href={selected.social.instagram}
                      icon={BsInstagram}
                      label="Instagram"
                      colorClass="text-pink-600 dark:text-pink-400"
                    />
                  )}
                  {selected.social.twitter && (
                    <SocialLink
                      href={selected.social.twitter}
                      icon={BsTwitter}
                      label="Twitter"
                      colorClass="text-sky-500 dark:text-sky-400"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
