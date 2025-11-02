import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';
import { fr as frTranslations } from './locales/fr';

// Translation resources
const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: frTranslations
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: false,
    
    detection: {
      // Query param for GitHub Pages compatibility, then localStorage, then browser
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lang', // Look for ?lang=en or ?lang=fr
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      caches: ['localStorage'],
      excludeCacheFor: ['cimode'],
      
      // Convert language codes to our supported languages
      convertDetectedLanguage: (lng: string) => {
        // Handle French variations
        if (lng.startsWith('fr')) return 'fr';
        // Handle English variations  
        if (lng.startsWith('en')) return 'en';
        // Default fallback to French
        return 'fr';
      }
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;