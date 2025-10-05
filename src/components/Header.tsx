import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import inscapeLogo from '../assets/INSCAPE.png';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  onNavClick: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 350);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('what_to_expect'), id: 'what-to-expect' },
    { label: t('about'), id: 'about' },
    { label: t('music_journey_nav'), id: 'music-journey' },
    { label: t('practical_details_nav'), id: 'practical-details' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
            <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            >
            <img 
              src={inscapeLogo} 
              alt="InScape Movement" 
              className={`transition-all duration-500 ${
              isScrolled ? 'opacity-100' : 'opacity-0'
              } h-8 lg:h-10`}
            />
            </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className="text-white/90 hover:text-white font-medium transition-colors duration-300 relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavClick('book-now')}
            >
              {t('book_now')}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 border-t border-white/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavClick(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-white/90 hover:text-white font-medium py-2 px-4 hover:bg-white/5 rounded-lg transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={() => {
                  onNavClick('book-now');
                  setIsMobileMenuOpen(false);
                }}
                className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                {t('book_now')}
              </button>
              <LanguageSwitcher isMobile />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;