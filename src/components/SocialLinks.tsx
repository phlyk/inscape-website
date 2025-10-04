import { motion } from 'framer-motion';
import { Facebook, Instagram, MessageCircle, Music } from 'lucide-react';
import React from 'react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      icon: Instagram,
      label: 'InScape Events',
      url: '#', // Replace with actual Instagram URL
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: Instagram,
      label: 'DJ philkami',
      url: '#', // Replace with actual Instagram URL
      color: 'from-purple-500 to-blue-500',
    },
    {
      icon: Facebook,
      label: 'Inscape Movement',
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
      label: 'WhatsApp Group',
      url: '#', // Replace with actual WhatsApp URL
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-col space-y-3"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-3 rounded-full bg-gradient-to-r ${link.color} shadow-lg hover:shadow-xl transition-all duration-300`}
            whileHover={{ scale: 1.1, x: -10 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
          >
            <link.icon size={20} className="text-white" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black/90 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap backdrop-blur-sm">
                {link.label}
              </div>
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-black/90 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default SocialLinks;