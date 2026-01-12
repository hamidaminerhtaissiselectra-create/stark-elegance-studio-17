// Données structurées globales JSON-LD pour le SEO
// Schema.org Organization + LocalBusiness + Services

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://hdconnect.fr/#organization",
  "name": "HD Connect",
  "alternateName": "HD Connect Sécurité",
  "url": "https://hdconnect.fr",
  "logo": {
    "@type": "ImageObject",
    "url": "https://hdconnect.fr/logo.png",
    "width": 512,
    "height": 512
  },
  "image": "https://hdconnect.fr/og-image.jpg",
  "description": "Expert français en installation de systèmes de sécurité : vidéosurveillance HD/4K, alarmes certifiées NF&A2P, contrôle d'accès biométrique, domotique. Intervention France entière.",
  "foundingDate": "2015",
  "telephone": "+33627135304",
  "email": "contact@hdconnect.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Créteil",
    "addressLocality": "Créteil",
    "postalCode": "94000",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR"
  },
  "sameAs": [
    "https://www.facebook.com/hdconnect",
    "https://www.linkedin.com/company/hdconnect",
    "https://twitter.com/HDConnectFR"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+33627135304",
      "contactType": "customer service",
      "areaServed": "FR",
      "availableLanguage": ["French"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+33627135304",
      "contactType": "sales",
      "areaServed": "FR",
      "availableLanguage": ["French"]
    }
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://hdconnect.fr/#localbusiness",
  "name": "HD Connect - Sécurité et Domotique",
  "image": "https://hdconnect.fr/og-image.jpg",
  "url": "https://hdconnect.fr",
  "telephone": "+33627135304",
  "email": "contact@hdconnect.fr",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Créteil",
    "addressLocality": "Créteil",
    "postalCode": "94000",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.7904,
    "longitude": 2.4556
  },
  "areaServed": [
    { "@type": "Country", "name": "France" },
    { "@type": "AdministrativeArea", "name": "Île-de-France" },
    { "@type": "AdministrativeArea", "name": "Auvergne-Rhône-Alpes" },
    { "@type": "AdministrativeArea", "name": "Provence-Alpes-Côte d'Azur" },
    { "@type": "AdministrativeArea", "name": "Nouvelle-Aquitaine" },
    { "@type": "AdministrativeArea", "name": "Occitanie" },
    { "@type": "AdministrativeArea", "name": "Hauts-de-France" },
    { "@type": "AdministrativeArea", "name": "Grand Est" },
    { "@type": "AdministrativeArea", "name": "Pays de la Loire" },
    { "@type": "AdministrativeArea", "name": "Bretagne" },
    { "@type": "AdministrativeArea", "name": "Normandie" },
    { "@type": "AdministrativeArea", "name": "Bourgogne-Franche-Comté" },
    { "@type": "AdministrativeArea", "name": "Centre-Val de Loire" },
    { "@type": "AdministrativeArea", "name": "Corse" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5"
  }
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Services HD Connect",
  "description": "Nos services d'installation, dépannage et location de systèmes de sécurité",
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "Installation Vidéosurveillance",
      "description": "Installation de caméras de surveillance HD et 4K pour particuliers et professionnels. Accès mobile 24/7, stockage cloud.",
      "url": "https://hdconnect.fr/services/videosurveillance",
      "provider": { "@id": "https://hdconnect.fr/#organization" },
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": "Installation de systèmes de vidéosurveillance"
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "Installation Alarme Anti-Intrusion",
      "description": "Systèmes d'alarme certifiés NF&A2P reconnus par les assurances. Télésurveillance 24/7, intervention rapide.",
      "url": "https://hdconnect.fr/services/alarme",
      "provider": { "@id": "https://hdconnect.fr/#organization" },
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": "Installation de systèmes d'alarme"
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "Contrôle d'Accès",
      "description": "Solutions de contrôle d'accès professionnelles : badges RFID, biométrie, interphonie vidéo, gestion centralisée.",
      "url": "https://hdconnect.fr/services/controle-acces",
      "provider": { "@id": "https://hdconnect.fr/#organization" },
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": "Installation de contrôle d'accès"
    },
    {
      "@type": "Service",
      "position": 4,
      "name": "Domotique et Maison Connectée",
      "description": "Automatisation de votre habitat : éclairage, chauffage, volets, sécurité. Contrôle smartphone, économies d'énergie.",
      "url": "https://hdconnect.fr/services/domotique",
      "provider": { "@id": "https://hdconnect.fr/#organization" },
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": "Installation domotique"
    },
    {
      "@type": "Service",
      "position": 5,
      "name": "Infrastructure Réseau",
      "description": "Câblage structuré, WiFi professionnel, firewall et sécurité réseau pour entreprises.",
      "url": "https://hdconnect.fr/services/reseau",
      "provider": { "@id": "https://hdconnect.fr/#organization" },
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": "Installation réseau informatique"
    },
    {
      "@type": "Service",
      "position": 6,
      "name": "Maintenance et Dépannage",
      "description": "Maintenance préventive et dépannage 24/7 de vos équipements de sécurité. Contrats sur mesure.",
      "url": "https://hdconnect.fr/services/maintenance",
      "provider": { "@id": "https://hdconnect.fr/#organization" },
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": "Maintenance systèmes de sécurité"
    }
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://hdconnect.fr/#website",
  "url": "https://hdconnect.fr",
  "name": "HD Connect",
  "description": "Expert français en installation de systèmes de sécurité",
  "publisher": { "@id": "https://hdconnect.fr/#organization" },
  "inLanguage": "fr-FR"
};

// Fonction pour générer le JSON-LD complet de la page d'accueil
export const getHomePageJsonLd = () => {
  return [
    organizationSchema,
    localBusinessSchema,
    servicesSchema,
    websiteSchema
  ];
};
