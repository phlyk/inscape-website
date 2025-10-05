import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation and UI
      "language": "Language",
      "book_now": "Book Your Spot",
      "join_us": "Join Us",
      "what_to_expect": "What to Expect",
      "about": "About",
      "music_journey_nav": "Music Journey",
      "practical_details_nav": "Practical Details",
      
      // Hero section
      "hero_title": "InScape Movement",
      "hero_subtitle": "Conscious Dance & Movement Meditation",
      "hero_description": "Experience conscious dance and connect with your inner landscape through guided movement meditation.",
      
      // What is InScape section
      "what_is_inscape": "What is InScape Movement?",
      "what_is_description": "It's simple: you enter the room, the music rises, and everything else fades away.\nTwo hours to move however you want, without judgment, without distractions.\nPeople, alone and together, let themselves be guided by the music and discover what the moment brings.\nNo words, no phones, no substances — just presence, play, and connection.",
      
      // Key Features section
      "key_features": "Key Features",
      "safe_space": "Safe Space",
      "safe_space_desc": "A safe and welcoming space to connect with your body through music and express yourself freely. Non-verbal connection with others is also very welcome",
      "diverse_soundscape": "Diverse Soundscape",
      "diverse_soundscape_desc": "A living and diverse soundscape (see Musical Journey)",
      "gentle_guidance": "Gentle Guidance", 
      "gentle_guidance_desc": "There will be gentle invitations to awareness (of body, space, others, silence) or to explore other forms of movement",
      "bilingual": "Bilingual",
      "bilingual_desc": "Guided in French and English — adapting to what is needed",
      "barefoot": "Barefoot Dancing",
      "barefoot_desc": "We dance without shoes (barefoot or dance socks)",
      "no_talking": "No Talking",
      "no_talking_desc": "No words or phones on the dance floor (there is a space downstairs if needed)",
      "closing_circle": "Closing Circle",
      "closing_circle_desc": "After dancing, there will be a closing circle with time to share and create community connection",
      
      // Musical Journey section  
      "musical_journey": "Musical Journey",
      "wave_structure": "Wave Structure",
      "wave_structure_desc": "A DJ set in waves that goes through different phases: Rise, Peak, Transition, Challenge, Landing",
      "diversity": "Diversity & Surprise",
      "diversity_desc": "Strong emphasis on diversity and surprise: ambient, jazz, downtempo, world, electronic, techno, bass music, instrumental hip-hop, sometimes even rock — and much more",
      "responsive": "Live & Responsive",
      "responsive_desc": "Living and fluid set that adjusts to the energy of the room",
      "discovery": "Musical Discovery", 
      "discovery_desc": "Most tracks will be unknown to you — discovery is intentional",
      "sound_system": "Professional Sound",
      "sound_system_desc": "High-quality professional sound system",
      "soundcloud": "Previous Mixes",
      "soundcloud_desc": "Listen to my previous mixes on SoundCloud for a preview — https://soundcloud.com/philkami",
      
      // Practical Details section
      "practical_details": "Practical Details",
      "location": "Location",
      "location_desc": "26 Rue Marca, Pau",
      "arrival": "Arrival", 
      "arrival_desc": "7:45 PM — please arrive before 8:00 PM. Late entry allowed until 8:15 PM.",
      "movement_time": "Movement Time",
      "movement_time_desc": "8:00 PM → 10:00 PM (open space for socializing until ~10:30 PM)",
      "age": "Age",
      "age_desc": "Adults only 18+",
      "parking": "Parking",
      "parking_desc": "~3 mins walk from Place Verdun Sud; free on Saturday evenings + generally spots available",
      "bring": "What to Bring",
      "bring_desc": "Comfortable clothes, water bottle",
      "facilities": "Facilities",
      "facilities_desc": "Toilet + running water on site",
      "contribution": "Contribution",
      "contribution_desc": "25€ cash at entry (online booking and reduced rates for students/job seekers coming soon)",
      
      // How to Join section
      "how_to_join": "How to Join",
      "contact_method": "Send me a message on WhatsApp to book a spot, either in the group or privately.",
      
      // Booking CTA section
      "ready_to_begin": "Ready to Begin Your Journey?",
      "join_monthly": "Join us monthly for an authentic movement experience.",
      "reserve_spot": "Reserve your spot and step into presence, play, and connection.",
      "book_spot_now": "Book Your Spot Now",
      "message_whatsapp": "Message on WhatsApp to reserve",
      "monthly_adults": "€25 • Monthly events • Adults 18+",
      
      // DJ Introduction section
      "meet_your": "Meet Your",
      "journey_guide": "Journey Guide",
      "dj_intro_1": "I'm Phil Kami, the DJ and facilitator behind InScape Movement.",
      "dj_intro_2": "With years of experience curating transformative soundscapes, I guide you through a carefully crafted musical journey that invites authentic expression and deep connection.",
      "dj_intro_3": "Every session is a living, breathing experience — adaptive, intuitive, and always in service of the collective energy in the room.",
      "explore_mixes": "Explore My Mixes",
      "creating_spaces": "Creating safe spaces for authentic movement since 2023",
      
      // Footer
      "footer_copyright": "© 2025 InScape Movement. All rights reserved.",
      "footer_contact": "For bookings and inquiries, message us on WhatsApp or through our social channels."
    }
  },
  fr: {
    translation: {
      // Navigation and UI
      "language": "Langue",
      "book_now": "Réserver",
      "join_us": "Nous Rejoindre",
      "what_to_expect": "À Quoi S'Attendre",
      "about": "À Propos",
      "music_journey_nav": "Voyage Musical",
      "practical_details_nav": "Infos Pratiques",
      
      // Hero section  
      "hero_title": "InScape Movement",
      "hero_subtitle": "Danse Consciente & Méditation en Mouvement",
      "hero_description": "Expérimente la danse consciente et connecte-toi à ton paysage intérieur à travers la méditation en mouvement guidée.",
      
      // What is InScape section
      "what_is_inscape": "C'est quoi InScape Movement?",
      "what_is_description": "C'est simple : tu entres dans la salle, la musique s'élève, et tout le reste disparaît.\nDeux heures pour bouger comme tu veux, sans jugement, sans distractions.\nLes gens, seuls et ensemble, se laissent guider par la musique et découvrent ce que le moment apporte.\nPas de paroles, pas de téléphones, pas de substances — seulement la présence, le jeu, et la connexion.",
      
      // Key Features section
      "key_features": "Les points essentiels",
      "safe_space": "Espace Sûr",
      "safe_space_desc": "Un espace sûr et bienveillant pour te connecter à ton corps à travers la musique et t'exprimer librement. La connexion non-verbale avec les autres est également très bienvenue",
      "diverse_soundscape": "Paysage Sonore Diversifié",
      "diverse_soundscape_desc": "Un paysage sonore vivant et diversifié (voir Voyage Musical)",
      "gentle_guidance": "Propositions Douces",
      "gentle_guidance_desc": "Il y aura des propositions douces pour inviter à la conscience (du corps, de l'espace, des autres, du silence) ou pour explorer d'autres formes de mouvement",
      "bilingual": "Bilingue", 
      "bilingual_desc": "Guidé en français et en anglais — s'adaptant à ce qui est nécessaire",
      "barefoot": "Pieds Nus",
      "barefoot_desc": "Nous dansons sans chaussures (pieds nus ou chaussettes de danse)",
      "no_talking": "Pas de Paroles",
      "no_talking_desc": "Pas de paroles ni de téléphones sur la piste (il y a un espace en bas si besoin)",
      "closing_circle": "Cercle de Clôture", 
      "closing_circle_desc": "Après la danse, il y aura un cercle de clôture avec du temps pour partager et créer du lien communautaire",
      
      // Musical Journey section
      "musical_journey": "Voyage Musical",
      "wave_structure": "Structure en Vagues",
      "wave_structure_desc": "Un DJ set en vagues qui traverse différentes phases: Montée, Pic, Transition, Défi, Atterrissage",
      "diversity": "Diversité & Surprise", 
      "diversity_desc": "Fort accent sur la diversité et la surprise : ambient, jazz, downtempo, world, électronique, techno, bass music, hip-hop instrumental, même parfois du rock — et bien plus encore",
      "responsive": "Vivant & Fluide",
      "responsive_desc": "Set vivant et fluide qui s'ajuste à l'énergie de la salle", 
      "discovery": "Découverte Musicale",
      "discovery_desc": "La plupart des morceaux vous seront inconnus — la découverte est intentionnelle",
      "sound_system": "Son Professionnel", 
      "sound_system_desc": "Système de son professionnel de haute qualité",
      "soundcloud": "Mix Précédents",
      "soundcloud_desc": "Écoutez mes mix précédents sur SoundCloud pour avoir un aperçu — https://soundcloud.com/philkami",
      
      // Practical Details section  
      "practical_details": "Infos pratiques",
      "location": "Lieu",
      "location_desc": "26 Rue Marca, Pau",
      "arrival": "Accueil",
      "arrival_desc": "19h45 — merci d'arriver avant 20h00. Entrée tardive autorisée jusqu'à 20h15.",
      "movement_time": "Mouvement", 
      "movement_time_desc": "20h00 → 22h00 (espace ouvert pour socialiser jusqu'à ~22h30)",
      "age": "Âge",
      "age_desc": "Adultes uniquement 18+",
      "parking": "Parking",
      "parking_desc": "~3 mins à pied de la Place Verdun Sud ; gratuit les samedis soirs + généralement des places disponibles", 
      "bring": "À Apporter",
      "bring_desc": "vêtements confortables, bouteille d'eau",
      "facilities": "Commodités",
      "facilities_desc": "Toilette + eau courante sur place",
      "contribution": "Contribution",
      "contribution_desc": "25€ en espèces à l'entrée (réservation en ligne et tarifs réduits pour étudiants/ demandeurs d'emploi bientôt disponibles)",
      
      // How to Join section
      "how_to_join": "Comment nous participer", 
      "contact_method": "Envoyez-moi un message sur WhatsApp pour réserver une place, soit dans le groupe soit en privé.",
      
      // Booking CTA section
      "ready_to_begin": "Prêt·e à Commencer Votre Voyage?",
      "join_monthly": "Rejoignez-nous chaque mois pour une expérience de mouvement authentique.",
      "reserve_spot": "Réservez votre place et entrez dans la présence, le jeu et la connexion.",
      "book_spot_now": "Réserver Maintenant",
      "message_whatsapp": "Envoyez un message sur WhatsApp pour réserver",
      "monthly_adults": "25€ • Événements mensuels • Adultes 18+",
      
      // DJ Introduction section
      "meet_your": "Rencontrez Votre",
      "journey_guide": "Guide de Voyage",
      "dj_intro_1": "Je suis Phil Kami, le DJ et facilitateur derrière InScape Movement.",
      "dj_intro_2": "Avec des années d'expérience dans la création de paysages sonores transformateurs, je vous guide à travers un voyage musical soigneusement conçu qui invite à l'expression authentique et à la connexion profonde.",
      "dj_intro_3": "Chaque session est une expérience vivante et respirante — adaptative, intuitive, et toujours au service de l'énergie collective dans la salle.",
      "explore_mixes": "Découvrez Mes Mix",
      "creating_spaces": "Créer des espaces sûrs pour le mouvement authentique depuis 2023",
      
      // Footer
      "footer_copyright": "© 2025 InScape Movement. Tous droits réservés.",
      "footer_contact": "Pour les réservations et renseignements, contactez-nous sur WhatsApp ou via nos réseaux sociaux."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      caches: ['localStorage'],
      excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
      // Convert language codes to our supported languages
      convertDetectedLanguage: (lng: string) => {
        // Handle French variations
        if (lng.startsWith('fr')) return 'fr';
        // Handle English variations  
        if (lng.startsWith('en')) return 'en';
        // Default fallback
        return 'en';
      }
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;