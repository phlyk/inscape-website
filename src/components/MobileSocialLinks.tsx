import { AnimatePresence, motion } from 'framer-motion';
import { Facebook, Instagram, MessageCircle, Music, Share2, X } from 'lucide-react';
import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../config/constants';

const MobileSocialLinks: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // Open by default for better visibility

  const socialLinks = [
    {
      icon: Instagram,
      label: 'InScape Events',
      url: SOCIAL_LINKS.instagramEvents,
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: Instagram,
      label: 'DJ philkami',
      url: SOCIAL_LINKS.instagramDJ,
      color: 'from-purple-500 to-blue-500',
    },
    {
      icon: Facebook,
      label: 'InScape Movement',
      url: SOCIAL_LINKS.facebook,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Music,
      label: 'SoundCloud',
      url: SOCIAL_LINKS.soundcloud,
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp Booking',
      url: SOCIAL_LINKS.whatsappGroup,
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-40 lg:hidden">
      {/* Main FAB Button - Shows X when open, Share2 when closed */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center ${
          isOpen 
            ? 'bg-gradient-to-r from-gray-600 to-gray-700' 
            : 'bg-gradient-to-r from-purple-500 to-blue-500'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: -90, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Share2 size={24} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Social Link Buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${link.color} rounded-full shadow-lg`}
                initial={{ scale: 0, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0, y: 20 }}
                transition={{ 
                  duration: 0.2, 
                  delay: index * 0.05,
                  type: 'spring',
                  stiffness: 300
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={20} className="text-white" />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop removed - we have an X button now */}
    </div>
  );
};

export default MobileSocialLinks;