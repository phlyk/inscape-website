import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  className?: string;
  isMobile?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '', isMobile = false }) => {
  const { i18n } = useTranslation();
  const isFrench = i18n.language === 'fr';

  const toggleLanguage = () => {
    const newLang = isFrench ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className={`relative flex items-center p-1 bg-white/10 backdrop-blur-md border border-white/30 rounded-full transition-all duration-300 hover:bg-white/20 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ width: '60px', height: isMobile ? '28px' : '32px' }}
    >
      {/* Toggle Background */}
      <motion.div
        className="absolute inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
        animate={{
          x: isFrench ? '28px' : '0px'
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30
        }}
        style={{ width: isMobile ? '20px' : '24px', height: isMobile ? '20px' : '24px' }}
      />
      
      {/* Labels */}
      <div className="relative z-10 flex items-center justify-between w-full px-1">
        <AnimatePresence mode="wait">
          <motion.span
            key="en"
            className={`text-xs font-bold transition-colors duration-300 ${
              !isFrench ? 'text-white' : 'text-white/60'
            }`}
            animate={{ 
              scale: !isFrench ? 1 : 0.8,
              opacity: !isFrench ? 1 : 0.6
            }}
            transition={{ duration: 0.2 }}
          >
            EN
          </motion.span>
        </AnimatePresence>
        
        <AnimatePresence mode="wait">
          <motion.span
            key="fr"
            className={"text-xs font-bold transition-colors duration-300 text-white"}
            animate={{ 
              scale: isFrench ? 1 : 0.8,
              opacity: isFrench ? 1 : 0.6
            }}
            transition={{ duration: 0.2 }}
          >
            FR
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

export default LanguageSwitcher;