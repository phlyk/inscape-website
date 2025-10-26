import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import BookingWidget from './components/BookingWidget';
import DJIntroduction from './components/DJIntroduction';
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import MobileSocialLinks from './components/MobileSocialLinks';
import NoticeBanner from './components/NoticeBanner';
import SocialLinks from './components/SocialLinks';

function App() {
  const { t } = useTranslation();
  
  const scrollToSection = useCallback((sectionId: string) => {
    if (sectionId === 'book-now') {
      // Scroll to the booking widget
      const element = document.getElementById('booking-widget');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleBookNow = useCallback(() => {
    // Scroll to the booking widget section
    const element = document.getElementById('booking-widget');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleLearnMore = useCallback(() => {
    scrollToSection('what-to-expect');
  }, [scrollToSection]);

  return (
    <div className="App min-h-screen bg-black overflow-x-hidden">
      <NoticeBanner />
      <Header onNavClick={scrollToSection} />
      <Hero onBookNow={handleBookNow} onLearnMore={handleLearnMore} />
      <MainContent />
      <DJIntroduction />
      <BookingWidget />
      <SocialLinks />
      <MobileSocialLinks />
      
      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white/60">
            <p className="mb-2">{t('footer_copyright')}</p>
            <p className="text-sm">
              {t('footer_contact')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
