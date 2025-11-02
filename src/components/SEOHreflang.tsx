import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SEOHreflangProps {
  currentPath?: string;
}

const SEOHreflang: React.FC<SEOHreflangProps> = ({ currentPath = '' }) => {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    // Remove existing hreflang links
    const existingHreflangLinks = document.querySelectorAll('link[hreflang]');
    existingHreflangLinks.forEach(link => link.remove());

    // Base URL - use query parameter for GitHub Pages compatibility
    const baseUrl = 'https://inscape.one';
    
    // Create hreflang links using query parameters (GitHub Pages friendly)
    const hreflangLinks = [
      { lang: 'fr', href: `${baseUrl}` }, // Default French (no param needed)
      { lang: 'en', href: `${baseUrl}?lang=en` }, // English with query param
      { lang: 'x-default', href: `${baseUrl}` } // Default to French
    ];

    // Add hreflang links to head
    hreflangLinks.forEach(({ lang, href }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = href;
      document.head.appendChild(link);
    });

    // Update the canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    
    const currentLang = i18n.language;
    const canonicalUrl = currentLang === 'en' 
      ? `${baseUrl}?lang=en` 
      : `${baseUrl}`;
    
    canonicalLink.setAttribute('href', canonicalUrl);

    // Update html lang attribute
    document.documentElement.lang = currentLang;
    
  }, [i18n.language, currentPath]);

  return null; // This component doesn't render anything
};

export default SEOHreflang;