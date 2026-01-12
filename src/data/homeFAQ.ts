// FAQ data for the homepage - optimized for "People Also Ask"
// Ces questions sont choisies pour cibler les recherches les plus fréquentes

import { FAQItem } from "@/components/FAQAccordion";

export const homeFAQItems: FAQItem[] = [
  {
    question: "Combien coûte l'installation d'un système de vidéosurveillance ?",
    answer: "Le coût d'installation d'un système de vidéosurveillance varie entre 800€ et 3500€ selon le nombre de caméras, la qualité (HD ou 4K), et les fonctionnalités (vision nocturne, détection IA). HD Connect propose un devis gratuit personnalisé sous 24h avec des solutions adaptées à tous les budgets."
  },
  {
    question: "Quelle est la différence entre une alarme certifiée NF&A2P et une alarme standard ?",
    answer: "Une alarme certifiée NF&A2P a été testée et validée par un organisme indépendant (CNPP). Elle offre une fiabilité supérieure, est reconnue par les assurances (réductions de primes), et est obligatoire pour certains commerces. Une alarme standard n'offre pas ces garanties."
  },
  {
    question: "HD Connect intervient-il partout en France ?",
    answer: "Oui, HD Connect intervient sur toute la France métropolitaine. Nos techniciens se déplacent dans les 24 à 48h pour les installations programmées. Pour les urgences en Île-de-France, nous pouvons intervenir le jour même. Les frais de déplacement sont généralement inclus dans le devis."
  },
  {
    question: "Peut-on surveiller ses caméras à distance depuis un smartphone ?",
    answer: "Absolument ! Tous les systèmes de vidéosurveillance installés par HD Connect incluent un accès à distance via application mobile (iOS et Android). Vous pouvez visualiser vos caméras en direct, recevoir des alertes de détection de mouvement, et consulter les enregistrements où que vous soyez."
  },
  {
    question: "Quelle est la durée de garantie des installations HD Connect ?",
    answer: "HD Connect garantit ses installations pendant 5 ans pièces et main d'œuvre. Cette garantie couvre les défauts de fabrication et les problèmes d'installation. Nous proposons également des contrats de maintenance préventive pour prolonger la durée de vie de vos équipements."
  },
  {
    question: "La domotique permet-elle vraiment de faire des économies d'énergie ?",
    answer: "Oui, une installation domotique bien configurée peut réduire votre facture énergétique de 15% à 30%. Les thermostats intelligents, l'éclairage automatique, et la gestion des volets motorisés optimisent la consommation. Le retour sur investissement est généralement atteint en 2 à 4 ans."
  },
  {
    question: "Faut-il une autorisation pour installer des caméras de surveillance ?",
    answer: "Pour une installation privée (maison, appartement), aucune autorisation n'est requise si les caméras filment uniquement votre propriété. Pour les commerces et lieux recevant du public, une déclaration préalable en préfecture est obligatoire. HD Connect vous accompagne dans ces démarches administratives."
  },
  {
    question: "Quelle est la différence entre contrôle d'accès par badge et par biométrie ?",
    answer: "Le badge RFID est économique et pratique mais peut être prêté ou perdu. La biométrie (empreinte, reconnaissance faciale) offre une sécurité maximale car non transférable. Le choix dépend du niveau de sécurité requis et du budget. HD Connect peut combiner les deux pour un système hybride."
  }
];

// JSON-LD FAQPage schema for Google rich results
export const getHomeFAQJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFAQItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
