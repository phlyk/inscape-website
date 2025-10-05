import { useCallback } from 'react';
import './App.css';
import BookingCTA from './components/BookingCTA';
import DJIntroduction from './components/DJIntroduction';
import Header from './components/Header';
import Hero from './components/Hero';
import LanguageSwitcher from './components/LanguageSwitcher';
import MainContent from './components/MainContent';
import MobileSocialLinks from './components/MobileSocialLinks';
import SocialLinks from './components/SocialLinks';

function App() {
  const scrollToSection = useCallback((sectionId: string) => {
    if (sectionId === 'book-now') {
      // Handle booking - for now, we'll scroll to practical details
      // Later you can replace this with actual booking functionality
      const element = document.getElementById('practical-details');
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
    // For now, alert the user. Later replace with actual booking logic
    alert('Booking functionality will be implemented here. For now, please message via WhatsApp!');
  }, []);

  const handleLearnMore = useCallback(() => {
    scrollToSection('what-to-expect');
  }, [scrollToSection]);

  return (
    <div className="App min-h-screen bg-black">
      <LanguageSwitcher />
      <Header onNavClick={scrollToSection} />
      <Hero onBookNow={handleBookNow} onLearnMore={handleLearnMore} />
      <MainContent />
      <DJIntroduction />
      <BookingCTA onBookNow={handleBookNow} />
      <SocialLinks />
      <MobileSocialLinks />
      
      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white/60">
            <p className="mb-2">© 2025 InScape Movement. All rights reserved.</p>
            <p className="text-sm">
              For bookings and inquiries, message us on WhatsApp or through our social channels.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
