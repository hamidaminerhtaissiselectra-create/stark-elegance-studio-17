import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
  jsonLd?: object | object[];
}

export const useSEO = ({ title, description, canonical, type = "website", image, jsonLd }: SEOProps) => {
  const location = useLocation();
  const baseUrl = "https://hdconnect.fr";
  const fullCanonical = canonical || `${baseUrl}${location.pathname}`;
  const defaultImage = `${baseUrl}/og-image.jpg`;

  useEffect(() => {
    // Title
    document.title = `${title} | HD Connect - Sécurité Résidentielle`;
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
    
    // Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = fullCanonical;
    
    // Open Graph
    const ogTags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: fullCanonical },
      { property: "og:type", content: type },
      { property: "og:image", content: image || defaultImage },
      { property: "og:site_name", content: "HD Connect" },
      { property: "og:locale", content: "fr_FR" },
    ];
    
    ogTags.forEach(({ property, content }) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    });
    
    // Twitter Card
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image || defaultImage },
    ];
    
    twitterTags.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    });
    
    // JSON-LD Schema
    if (jsonLd) {
      // Remove existing JSON-LD scripts
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach((script) => script.remove());
      
      // Add new JSON-LD
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schema) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }
    
    // Robots meta
    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.name = "robots";
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.content = "index, follow";
    
  }, [title, description, fullCanonical, type, image, jsonLd]);
};

// Default Organization Schema
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HD Connect",
  description: "Spécialiste français de la sécurité résidentielle. Alarme, vidéosurveillance et télésurveillance 24/7.",
  url: "https://hdconnect.fr",
  logo: "https://hdconnect.fr/logo.png",
  telephone: "+33800123456",
  email: "contact@hdconnect.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Avenue de la Sécurité",
    addressLocality: "Bordeaux",
    postalCode: "33000",
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "Country",
    name: "France",
  },
  sameAs: [
    "https://www.facebook.com/hdconnect",
    "https://www.linkedin.com/company/hdconnect",
    "https://www.instagram.com/hdconnect",
  ],
});

// LocalBusiness Schema for city pages
export const getLocalBusinessSchema = (city: string, postalCode: string, lat?: number, lng?: number) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `https://hdconnect.fr/${city.toLowerCase()}`,
  name: `HD Connect ${city}`,
  description: `Installation alarme, vidéosurveillance et télésurveillance à ${city}. Intervention rapide 24/7.`,
  url: `https://hdconnect.fr/${city.toLowerCase()}`,
  telephone: "+33800123456",
  email: "contact@hdconnect.fr",
  address: {
    "@type": "PostalAddress",
    addressLocality: city,
    postalCode: postalCode,
    addressCountry: "FR",
  },
  ...(lat && lng && {
    geo: {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lng,
    },
  }),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2500",
  },
});

// Service Schema
export const getServiceSchema = (serviceName: string, serviceDescription: string, serviceUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description: serviceDescription,
  url: serviceUrl,
  provider: {
    "@type": "Organization",
    name: "HD Connect",
    url: "https://hdconnect.fr",
  },
  areaServed: {
    "@type": "Country",
    name: "France",
  },
  serviceType: "Sécurité Résidentielle",
});

// FAQ Schema
export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export default useSEO;
