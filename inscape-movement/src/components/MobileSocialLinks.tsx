import { AnimatePresence, motion } from 'framer-motion';
import { Facebook, Instagram, MessageCircle, Music, Share2 } from 'lucide-react';
import React, { useState } from 'react';

const MobileSocialLinks: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      icon: Instagram,
      label: 'InScape Events',
      url: '#', // Replace with actual Instagram URL
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: Instagram,
      label: 'DJ Phil Kami',
      url: '#', // Replace with actual Instagram URL
      color: 'from-purple-500 to-blue-500',
    },
    {
      icon: Facebook,
      label: 'InScape Movement',
      url: '#', // Replace with actual Facebook URL
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Music,
      label: 'SoundCloud',
      url: 'https://soundcloud.com/philkami',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp Booking',
      url: '#', // Replace with actual WhatsApp URL
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-40 lg:hidden">
      {/* Main FAB Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <Share2 size={24} className="text-white" />
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

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 -z-10"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileSocialLinks;