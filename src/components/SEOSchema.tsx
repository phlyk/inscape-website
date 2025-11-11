import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SEOSchema: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    // Remove existing schema
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Create language-specific schema
    const isEnglish = i18n.language === 'en';
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": isEnglish 
        ? "Free Dance Pau - Inscape Movement" 
        : "Danse Libre Pau - Inscape Movement",
      "description": isEnglish
        ? "Monthly sessions of free dance and movement meditation. Ecstatic dance and conscious dance in Pau in a safe and welcoming space."
        : "Sessions mensuelles de danse libre et méditation en mouvement. Ecstatic dance et danse consciente à Pau dans un espace sûr et bienveillant.",
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "26 Rue Marca",
          "addressLocality": "Pau",
          "postalCode": "64000",
          "addressRegion": "Pyrénées-Atlantiques",
          "addressCountry": "FR"
        }
      },
      "startDate": "2025-11-15T19:45:00+01:00",
      "endDate": "2025-11-15T22:30:00+01:00",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "offers": {
        "@type": "Offer",
        "price": "20",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": "https://inscape.one"
      },
      "organizer": {
        "@type": "Organization",
        "name": "Inscape Movement",
        "url": "https://inscape.one",
        "sameAs": [
          "https://www.instagram.com/inscapemovement/",
          "https://www.facebook.com/profile.php?id=61580909900812"
        ]
      },
      "performer": {
        "@type": "Person",
        "name": "philkami",
        "sameAs": [
          "https://www.instagram.com/philkamisound/",
          "https://soundcloud.com/philkami"
        ]
      },
      "keywords": isEnglish
        ? "free dance, ecstatic dance, conscious dance, movement meditation, Pau, Southwest, 64, Pyrénées-Atlantiques"
        : "danse libre, ecstatic dance, danse consciente, méditation en mouvement, Pau, Sud-Ouest, 64, Pyrénées-Atlantiques",
      "inLanguage": i18n.language
    };

    // Add new schema to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema, null, 2);
    document.head.appendChild(script);

  }, [i18n.language, t]);

  return null;
};

export default SEOSchema;