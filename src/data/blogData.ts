// Données du blog HD Connect - Articles SEO optimisés

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  featured: boolean;
  image: string;
  seoTitle: string;
  seoDescription: string;
}

export type BlogCategory = 
  | "videosurveillance"
  | "alarme"
  | "controle-acces"
  | "domotique"
  | "conseils"
  | "actualites"
  | "reglementation";

export const blogCategories: { slug: BlogCategory; name: string; description: string; color: string }[] = [
  { slug: "videosurveillance", name: "Vidéosurveillance", description: "Guides et conseils sur les caméras de surveillance", color: "blue" },
  { slug: "alarme", name: "Alarmes", description: "Tout sur les systèmes d'alarme anti-intrusion", color: "red" },
  { slug: "controle-acces", name: "Contrôle d'Accès", description: "Badges, biométrie et gestion des accès", color: "green" },
  { slug: "domotique", name: "Domotique", description: "Maison connectée et automatisation", color: "amber" },
  { slug: "conseils", name: "Conseils", description: "Guides pratiques et recommandations", color: "violet" },
  { slug: "actualites", name: "Actualités", description: "Nouveautés du secteur sécurité", color: "cyan" },
  { slug: "reglementation", name: "Réglementation", description: "Normes et obligations légales", color: "orange" }
];

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    slug: "comment-choisir-camera-surveillance-2025",
    title: "Comment choisir sa caméra de surveillance en 2025 : Guide complet",
    excerpt: "Découvrez les critères essentiels pour choisir la caméra de surveillance adaptée à vos besoins : résolution, vision nocturne, stockage et bien plus.",
    content: `
## Introduction

Le choix d'une caméra de surveillance est une décision importante pour la sécurité de votre domicile ou entreprise. En 2025, les technologies ont considérablement évolué, offrant des fonctionnalités toujours plus avancées.

## Les critères essentiels

### 1. La résolution

La résolution détermine la qualité de l'image. Voici les options disponibles :

- **1080p (Full HD)** : Suffisant pour un usage domestique basique
- **2K (1440p)** : Bon compromis qualité/stockage
- **4K (2160p)** : Idéal pour les besoins professionnels
- **8K** : Pour les installations haut de gamme

### 2. La vision nocturne

Deux technologies principales :

- **Vision infrarouge (IR)** : Classique, images en noir et blanc
- **Vision nocturne couleur** : Plus récente, images couleur même la nuit

### 3. Le stockage

Options de stockage disponibles :

- **Carte SD locale** : Simple mais limité
- **NVR (Network Video Recorder)** : Centralisé et professionnel
- **Cloud** : Accessible partout, abonnement mensuel
- **Hybride** : Combinaison local + cloud

### 4. Connectivité

- **WiFi** : Installation facile, dépend du réseau
- **PoE (Power over Ethernet)** : Plus fiable, câblage nécessaire
- **4G/5G** : Pour sites sans connexion internet

## Les fonctionnalités avancées

### Intelligence artificielle

Les caméras modernes intègrent l'IA pour :

- Détection de personnes vs animaux
- Reconnaissance faciale
- Détection de comportements suspects
- Comptage de personnes

### Audio bidirectionnel

Permet de communiquer à travers la caméra, utile pour :

- Accueillir les visiteurs
- Dissuader les intrus
- Surveiller les enfants

## Notre recommandation

Pour un usage domestique, nous recommandons une caméra 2K avec vision nocturne couleur et détection IA. Pour les professionnels, optez pour un système 4K avec NVR et stockage hybride.

## Conclusion

Le choix d'une caméra dépend de vos besoins spécifiques. N'hésitez pas à nous contacter pour un conseil personnalisé et un devis gratuit.
    `,
    category: "videosurveillance",
    tags: ["caméra", "guide", "2025", "choix", "installation"],
    author: "HD Connect",
    publishedAt: "2025-01-15",
    updatedAt: "2025-01-15",
    readingTime: 8,
    featured: true,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
    seoTitle: "Comment choisir sa caméra de surveillance en 2025 | Guide HD Connect",
    seoDescription: "Guide complet pour choisir votre caméra de surveillance : résolution 4K, vision nocturne, IA, stockage. Conseils d'experts HD Connect."
  },
  {
    id: "2",
    slug: "alarme-maison-connectee-avantages",
    title: "Alarme maison connectée : 10 avantages pour votre sécurité",
    excerpt: "Les alarmes connectées révolutionnent la protection de votre domicile. Découvrez les 10 avantages qui font la différence.",
    content: `
## L'alarme connectée, une révolution sécuritaire

Les systèmes d'alarme ont considérablement évolué ces dernières années. Les alarmes connectées offrent aujourd'hui des fonctionnalités impensables il y a encore 5 ans.

## Les 10 avantages clés

### 1. Contrôle à distance

Armez, désarmez et surveillez votre alarme depuis votre smartphone, où que vous soyez dans le monde.

### 2. Notifications instantanées

Recevez des alertes en temps réel sur votre téléphone en cas de détection suspecte.

### 3. Intégration domotique

Connectez votre alarme à vos autres équipements : éclairage, volets, chauffage...

### 4. Historique complet

Consultez l'historique des événements : armements, alertes, passages...

### 5. Partage familial

Donnez accès à plusieurs membres de la famille avec des droits différents.

### 6. Géolocalisation

Armement/désarmement automatique selon votre position GPS.

### 7. Caméras intégrées

Visualisez en direct ce qui se passe chez vous lors d'une alerte.

### 8. Détection intelligente

L'IA distingue les humains des animaux pour éviter les fausses alertes.

### 9. Batterie de secours

Fonctionnement garanti même en cas de coupure de courant.

### 10. Évolutivité

Ajoutez facilement de nouveaux capteurs sans recâblage.

## Quelle alarme choisir ?

Nous recommandons les systèmes certifiés NF&A2P qui garantissent :

- Résistance aux tentatives de sabotage
- Fiabilité des détecteurs
- Qualité de la centrale

## Conclusion

L'alarme connectée est devenue incontournable pour une protection efficace. Contactez HD Connect pour une étude personnalisée.
    `,
    category: "alarme",
    tags: ["alarme", "connectée", "maison", "sécurité", "domotique"],
    author: "HD Connect",
    publishedAt: "2025-01-10",
    updatedAt: "2025-01-10",
    readingTime: 6,
    featured: true,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=400&fit=crop",
    seoTitle: "Alarme maison connectée : 10 avantages | HD Connect",
    seoDescription: "Découvrez les 10 avantages d'une alarme connectée : contrôle à distance, notifications, domotique, IA. Guide expert HD Connect."
  },
  {
    id: "3",
    slug: "rgpd-videosurveillance-obligations-2025",
    title: "RGPD et vidéosurveillance : vos obligations légales en 2025",
    excerpt: "Quelles sont les règles à respecter pour installer des caméras de surveillance en conformité avec le RGPD ? Guide complet.",
    content: `
## Introduction

L'installation de caméras de surveillance est soumise à des règles strictes en France. Le non-respect du RGPD peut entraîner des sanctions importantes.

## Les obligations pour les particuliers

### Ce qui est autorisé

- Filmer votre propriété privée (jardin, entrée, garage)
- Installer des caméras visibles
- Stocker les images chez vous

### Ce qui est interdit

- Filmer la voie publique
- Filmer chez vos voisins
- Filmer sans informer les visiteurs

### Bonnes pratiques

- Afficher un panneau d'information
- Limiter la durée de conservation (1 mois recommandé)
- Sécuriser l'accès aux images

## Les obligations pour les professionnels

### Déclarations obligatoires

- Registre des activités de traitement
- Analyse d'impact si risque élevé
- Information des salariés et du CSE

### Durée de conservation

- Maximum 1 mois en règle générale
- Possibilité d'extension sur autorisation préfectorale

### Accès aux images

- Seules les personnes habilitées peuvent visionner
- Traçabilité des accès obligatoire
- Droit d'accès des personnes filmées

## Les sanctions

Le non-respect du RGPD peut entraîner :

- Amendes jusqu'à 20 millions € ou 4% du CA
- Sanctions pénales (5 ans de prison, 300 000 €)
- Ordre de suppression des données

## Notre accompagnement

HD Connect vous accompagne dans la mise en conformité :

- Audit de votre installation existante
- Installation conforme RGPD
- Documentation et registres
- Formation de vos équipes

## Conclusion

La vidéosurveillance est un outil puissant qui doit être utilisé dans le respect de la vie privée. Faites confiance à un professionnel pour une installation conforme.
    `,
    category: "reglementation",
    tags: ["RGPD", "légal", "vidéosurveillance", "conformité", "CNIL"],
    author: "HD Connect",
    publishedAt: "2025-01-05",
    updatedAt: "2025-01-05",
    readingTime: 7,
    featured: false,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop",
    seoTitle: "RGPD et vidéosurveillance : obligations légales 2025 | HD Connect",
    seoDescription: "Guide complet RGPD vidéosurveillance : obligations particuliers et professionnels, sanctions, mise en conformité. Expert HD Connect."
  },
  {
    id: "4",
    slug: "controle-acces-biometrique-entreprise",
    title: "Contrôle d'accès biométrique en entreprise : avantages et mise en place",
    excerpt: "Le contrôle d'accès biométrique offre une sécurité maximale. Découvrez comment l'implémenter efficacement dans votre entreprise.",
    content: `
## Qu'est-ce que le contrôle d'accès biométrique ?

Le contrôle d'accès biométrique utilise les caractéristiques physiques uniques d'une personne pour autoriser ou refuser l'accès à un lieu.

## Les technologies disponibles

### Empreintes digitales

- Technologie la plus répandue
- Coût abordable
- Fiabilité élevée (99,9%)

### Reconnaissance faciale

- Sans contact (hygiénique)
- Rapide (moins d'1 seconde)
- Fonctionne avec masque (nouvelles générations)

### Reconnaissance de l'iris

- Sécurité maximale
- Impossible à falsifier
- Coût plus élevé

### Reconnaissance veineuse

- Lecture des veines de la main
- Très fiable
- Sans contact

## Les avantages pour l'entreprise

### Sécurité renforcée

- Impossible de prêter ou perdre son "badge"
- Authentification forte
- Traçabilité complète

### Productivité améliorée

- Accès rapide (1-2 secondes)
- Pas de badge à gérer
- Moins d'administration

### ROI positif

- Fin des coûts de badges perdus
- Réduction de la fraude
- Automatisation des contrôles

## Mise en place réussie

### Étape 1 : Audit des besoins

- Nombre de points d'accès
- Flux de personnes
- Niveau de sécurité requis

### Étape 2 : Choix technologique

- Selon le budget
- Selon les contraintes (hygiène, vitesse...)
- Selon la population concernée

### Étape 3 : Aspects légaux

- Information des salariés
- Consultation du CSE
- Déclaration CNIL si nécessaire

### Étape 4 : Déploiement

- Installation des lecteurs
- Enrôlement des utilisateurs
- Formation

## Conclusion

Le contrôle d'accès biométrique est une solution d'avenir offrant sécurité et praticité. HD Connect vous accompagne de l'étude à la maintenance.
    `,
    category: "controle-acces",
    tags: ["biométrie", "entreprise", "sécurité", "contrôle d'accès", "empreinte"],
    author: "HD Connect",
    publishedAt: "2024-12-20",
    updatedAt: "2024-12-20",
    readingTime: 6,
    featured: false,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
    seoTitle: "Contrôle d'accès biométrique entreprise | Guide HD Connect",
    seoDescription: "Guide complet contrôle d'accès biométrique : empreintes, reconnaissance faciale, avantages, mise en place. Expert HD Connect."
  },
  {
    id: "5",
    slug: "maison-connectee-securite-domotique",
    title: "Maison connectée et sécurité : comment la domotique protège votre foyer",
    excerpt: "La domotique offre bien plus que du confort : découvrez comment une maison connectée renforce votre sécurité au quotidien.",
    content: `
## La domotique au service de la sécurité

La maison connectée n'est pas qu'une question de confort. Elle joue un rôle essentiel dans la protection de votre foyer.

## Simulation de présence

### Éclairage intelligent

- Allumage/extinction automatique
- Scénarios personnalisés
- Contrôle à distance

### Volets connectés

- Ouverture/fermeture programmée
- Simulation de routine quotidienne
- Gestion centralisée

### TV et appareils

- Mise en marche programmée
- Sons et mouvements
- Dissuasion efficace

## Détection et alertes

### Détecteurs connectés

- Mouvement
- Ouverture de porte/fenêtre
- Bris de vitre
- Fumée et CO

### Alertes instantanées

- Notifications push
- SMS et appels
- Sirène intérieure/extérieure

## Caméras intégrées

### Vidéosurveillance connectée

- Accès smartphone 24/7
- Enregistrement cloud
- Détection IA

### Sonnettes vidéo

- Voir qui sonne
- Communiquer à distance
- Historique des visites

## Scénarios de sécurité

### Mode "Absent"

1. Fermeture automatique des volets
2. Activation de l'alarme
3. Simulation de présence
4. Notifications d'événements

### Mode "Nuit"

1. Verrouillage des accès
2. Activation partielle alarme
3. Éclairage chemin nocturne
4. Détection périmétrique

### Mode "Vacances"

1. Tout est automatisé
2. Surveillance renforcée
3. Alertes voisins/proches
4. Contrôle à distance total

## L'installation HD Connect

Nous proposons une offre complète :

- Étude personnalisée
- Installation professionnelle
- Configuration des scénarios
- Formation à l'utilisation
- Maintenance et SAV

## Conclusion

Une maison connectée bien configurée est une maison mieux protégée. Faites confiance à HD Connect pour votre projet domotique sécurité.
    `,
    category: "domotique",
    tags: ["domotique", "maison connectée", "sécurité", "smart home", "automatisation"],
    author: "HD Connect",
    publishedAt: "2024-12-15",
    updatedAt: "2024-12-15",
    readingTime: 7,
    featured: true,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
    seoTitle: "Maison connectée et sécurité : guide domotique | HD Connect",
    seoDescription: "Comment la domotique protège votre maison : simulation de présence, alertes, caméras, scénarios. Guide expert HD Connect."
  },
  {
    id: "6",
    slug: "maintenance-systeme-securite-importance",
    title: "Pourquoi la maintenance de votre système de sécurité est cruciale",
    excerpt: "Un système de sécurité non entretenu peut vous donner un faux sentiment de sécurité. Découvrez l'importance de la maintenance préventive.",
    content: `
## L'importance de la maintenance

Votre système de sécurité est votre première ligne de défense. Comme tout équipement technique, il nécessite un entretien régulier.

## Les risques d'un système non entretenu

### Fausses alertes

- Détecteurs encrassés
- Batteries faibles
- Capteurs mal calibrés

### Non-détection

- Détecteurs défaillants
- Angles morts non détectés
- Firmware obsolète

### Pannes critiques

- Centrale hors service
- Communication coupée
- Sirène défectueuse

## Le contrat de maintenance HD Connect

### Maintenance préventive

- Visite annuelle complète
- Nettoyage des équipements
- Test de tous les détecteurs
- Mise à jour firmware
- Vérification batteries
- Rapport détaillé

### Maintenance curative

- Intervention sous 24-48h
- Diagnostic complet
- Remplacement pièces
- Pas de frais cachés

### Télémaintenance

- Surveillance à distance
- Alertes proactives
- Interventions à distance
- Mises à jour automatiques

## Checklist d'entretien

### Mensuel (par vous)

- [ ] Test de l'alarme
- [ ] Vérification des LEDs
- [ ] Nettoyage des caméras

### Annuel (par HD Connect)

- [ ] Test complet de tous les équipements
- [ ] Vérification des batteries
- [ ] Mise à jour logicielle
- [ ] Optimisation des réglages
- [ ] Rapport d'intervention

## Les avantages du contrat

| Avantage | Sans contrat | Avec contrat |
|----------|-------------|--------------|
| Visites préventives | Payantes | Incluses |
| Délai intervention | 72h+ | 24-48h |
| Pièces détachées | Prix plein | -20% |
| Télémaintenance | Non | Oui |
| Hotline prioritaire | Non | Oui |

## Conclusion

La maintenance n'est pas une option, c'est une nécessité. Protégez votre investissement et votre sécurité avec un contrat de maintenance HD Connect.
    `,
    category: "conseils",
    tags: ["maintenance", "entretien", "prévention", "contrat", "sécurité"],
    author: "HD Connect",
    publishedAt: "2024-12-10",
    updatedAt: "2024-12-10",
    readingTime: 5,
    featured: false,
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=400&fit=crop",
    seoTitle: "Maintenance système de sécurité : importance | HD Connect",
    seoDescription: "Pourquoi la maintenance de votre alarme et caméras est cruciale. Contrat de maintenance HD Connect : préventive, curative, télémaintenance."
  }
];

// Fonctions utilitaires
export const getArticleBySlug = (slug: string): BlogArticle | undefined => {
  return blogArticles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category: BlogCategory): BlogArticle[] => {
  return blogArticles.filter(article => article.category === category);
};

export const getFeaturedArticles = (): BlogArticle[] => {
  return blogArticles.filter(article => article.featured);
};

export const getRecentArticles = (limit: number = 5): BlogArticle[] => {
  return [...blogArticles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

export const getRelatedArticles = (currentSlug: string, limit: number = 3): BlogArticle[] => {
  const currentArticle = getArticleBySlug(currentSlug);
  if (!currentArticle) return [];
  
  return blogArticles
    .filter(article => 
      article.slug !== currentSlug && 
      (article.category === currentArticle.category || 
       article.tags.some(tag => currentArticle.tags.includes(tag)))
    )
    .slice(0, limit);
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  blogArticles.forEach(article => {
    article.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

export const getCategoryBySlug = (slug: BlogCategory) => {
  return blogCategories.find(cat => cat.slug === slug);
};
