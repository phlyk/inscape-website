import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';

const NoticeBanner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow-lg overflow-hidden">
      <div className="relative h-12 flex items-center">
        {/* Scrolling text container */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -2000], // Adjust distance based on text length
          }}
          transition={{
            duration: 15, // Speed of scroll - adjust as needed
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Repeat the text multiple times for seamless loop */}
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="text-lg font-bold px-8 flex items-center"
            >
              <span className="mr-2">🚨</span>
              {t('notice_banner')}
              <span className="ml-2">🚨</span>
            </span>
          ))}
        </motion.div>
      </div>
      
      {/* Optional pulsing effect */}
      <motion.div
        className="absolute inset-0 bg-red-400/20 pointer-events-none"
        animate={{
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default NoticeBanner;