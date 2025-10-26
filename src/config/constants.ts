// Central configuration for links and contact information
// Update these values as needed - they will automatically propagate throughout the site

export const BOOKING_LINKS = {
  billetWeb: "https://www.billetweb.fr/multi_event.php?multi=43366&color=372dc8",
  whatsapp: "https://chat.whatsapp.com/CRCgrDb9AOAIONK4Wv5QIO",
  whatsappDirect: "https://wa.me/33123456789", // Replace with actual number
} as const;

export const SOCIAL_LINKS = {
  instagramEvents: "https://www.instagram.com/inscapemovement/",
  instagramDJ: "https://www.instagram.com/philkamisound/",
  facebook: "https://www.facebook.com/profile.php?id=61580909900812",
  soundcloud: "https://soundcloud.com/philkami",
  whatsappGroup: "https://chat.whatsapp.com/CRCgrDb9AOAIONK4Wv5QIO",
} as const;

export const CONTACT_INFO = {
  location: "26 Rue Marca, Pau",
  email: "contact@inscape.one", // Add if available
} as const;

// Event scheduling - update these for session announcements
export const EVENT_INFO = {
  nextDate: "2024-11-15",
  cancelledDate: "2024-10-11",
  time: "20:00",
  contribution: "25€",
} as const;
