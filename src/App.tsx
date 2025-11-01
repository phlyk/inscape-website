import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import BookingWidget from './components/BookingWidget';
import DJIntroduction from './components/DJIntroduction';
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import MobileSocialLinks from './components/MobileSocialLinks';
import SocialLinks from './components/SocialLinks';
import { SOCIAL_LINKS } from './config/constants';

function App() {
  const { t } = useTranslation();
  
  const scrollToSection = useCallback((sectionId: string) => {
    console.log('scrollToSection called with:', sectionId); // Debug log
    
    // Handle special cases
    const targetElementId = sectionId === 'book-now' ? 'booking-widget' : sectionId;
    const element = document.getElementById(targetElementId);
    
    if (!element) {
      console.log('Element not found:', targetElementId); // Debug log
      return;
    }

    console.log('Element found, scrolling to:', targetElementId); // Debug log
    
    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    if (isMobile) {
      console.log('Mobile device detected, using scrollIntoView with offset'); // Debug log
      
      // Get element position and apply header offset manually
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + window.pageYOffset;
      const headerOffset = 80; // Just the header height, no extra padding
      const targetPosition = elementTop - headerOffset;
      
      console.log('Mobile scroll target position:', targetPosition); // Debug log
      
      // Try a different scrolling method for mobile
      try {
        setTimeout(() => {
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }, 50); // Small delay to ensure smooth scroll
      } catch (error) {
        console.log('window.scrollTo failed, trying scrollIntoView fallback'); // Debug log
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      // Desktop: use the directional logic
      const currentScrollY = window.pageYOffset;
      const elementTop = element.getBoundingClientRect().top + currentScrollY;
      const isScrollingDown = currentScrollY < elementTop;
      
      console.log('Scroll direction:', isScrollingDown ? 'down' : 'up'); // Debug log
      
      if (isScrollingDown) {
        // Scrolling down: need offset for header (80px) + section padding (80px)
        const headerOffset = 160;
        const offsetPosition = elementTop - headerOffset;
        
        console.log('Scrolling to position:', offsetPosition); // Debug log
        
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 50); // Small delay to ensure smooth scroll
      } else {
        // Scrolling up: use native scrollIntoView which works perfectly
        console.log('Using scrollIntoView'); // Debug log
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
        // For mobile, use scrollIntoView which is more reliable
      }
    }
  }, []);

  const handleBookNow = useCallback(() => {
    scrollToSection('booking-widget');
  }, [scrollToSection]);

  const handleLearnMore = useCallback(() => {
    scrollToSection('what-to-expect');
  }, [scrollToSection]);

  return (
    <div className="App min-h-screen bg-black overflow-x-hidden">
      {/* <NoticeBanner /> */}
      <Header onNavClick={scrollToSection} />
      <Hero onBookNow={handleBookNow} onLearnMore={handleLearnMore} />
      <MainContent onScrollToSection={scrollToSection} />
      <DJIntroduction />
      <BookingWidget />
      <SocialLinks />
      <MobileSocialLinks />
      
      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white/60">
            <p className="mb-1 text-xs">{t('footer_copyright')}</p>
            <p className="text-xs">
              {t('footer_contact')}{' '}
              <a 
                href={SOCIAL_LINKS.whatsappGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 underline transition-colors duration-200"
              >
                {t('footer_whatsapp')}
              </a>{' '}
              {t('footer_contact_end')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
