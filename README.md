# 🔐 HD CONNECT - Documentation Complète & Unifiée

> **Version:** 6.0 - Documentation Fusionnée (Cahier des Charges + SEO)  
> **Dernière mise à jour:** 07 Janvier 2026  
> **Statut:** ✅ PRODUCTION-READY

---

## 📋 TABLE DES MATIÈRES

1. [Présentation du Projet](#-1-présentation-du-projet)
2. [Stack Technique](#-2-stack-technique)
3. [Structure des Fichiers](#-3-structure-des-fichiers)
4. [Pages & Routes](#-4-pages--routes)
5. [Composants](#-5-composants)
6. [Données & Data](#-6-données--data)
7. [Hooks Personnalisés](#-7-hooks-personnalisés)
8. [Design System](#-8-design-system)
9. [SEO & Optimisations](#-9-seo--optimisations)
10. [Stratégie SEO Complète](#-10-stratégie-seo-complète)
11. [Backend Supabase](#-11-backend-supabase)
12. [Installation & Déploiement](#-12-installation--déploiement)
13. [Configuration](#-13-configuration)
14. [État du Projet](#-14-état-du-projet)

---

## 🎯 1. PRÉSENTATION DU PROJET

### Client
**HD Connect** - Entreprise spécialisée en sécurité électronique, domotique et réseaux informatiques.

### URLs
| Environnement | URL |
|---------------|-----|
| Production | https://hdconnect.fr |
| Lovable | https://lovable.dev/projects/cfef176e-4824-41fc-a7a2-f4a1f35a89d4 |
| Supabase | https://emvmyrdxmpsoaykabszb.supabase.co |

### Objectifs Business
| Objectif | Description | Statut |
|----------|-------------|--------|
| Site vitrine | Présenter les 11 services | ✅ Fait |
| Génération de leads | Formulaire de devis intelligent | ✅ Fait |
| SEO local | Référencement 60+ pages | ✅ Fait |
| Animations premium | Micro-interactions globales | ✅ Fait |
| Admin panel | Gestion des leads | ⚠️ Backend à configurer |

### Objectifs SEO
| Métrique | Objectif 6 mois | Objectif 12 mois |
|----------|-----------------|------------------|
| Trafic organique | +150% | +300% |
| Positions Top 3 | 50 mots-clés | 150 mots-clés |
| Leads/mois | 100 | 250 |
| Domain Authority | 25 | 40 |

---

## 🛠️ 2. STACK TECHNIQUE

### Frontend
| Technologie | Version | Usage |
|-------------|---------|-------|
| React | 18.3.1 | Framework UI |
| TypeScript | 5.x | Typage statique |
| Vite | 5.x | Build tool & dev server |
| Tailwind CSS | 3.x | Styling utility-first |
| Shadcn/UI | Latest | Composants UI |
| Framer Motion | 12.x | Animations |
| React Router | 6.30.1 | Routing SPA |
| React Query | 5.x | Data fetching |
| React Hook Form | 7.x | Formulaires |
| Zod | 3.x | Validation |

### Backend (Supabase)
| Service | Usage |
|---------|-------|
| PostgreSQL | Base de données |
| Auth | Authentification email/password |
| Edge Functions | API serverless (emails) |
| Row Level Security | Sécurité données |

### Outils
| Outil | Usage |
|-------|-------|
| Lucide React | Icônes |
| Sonner | Toasts/notifications |
| Date-fns | Manipulation dates |
| Recharts | Graphiques (admin) |

---

## 📁 3. STRUCTURE DES FICHIERS

```
hdconnect/
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg             # Image sociale 1200x630
│   ├── robots.txt
│   └── sitemap.xml              # 60+ URLs SEO
│
├── src/
│   ├── assets/                  # 80+ images HD
│   │   ├── hero-*.jpg           # Images héros
│   │   ├── service-*.jpg        # Images services
│   │   └── *-unique.jpg         # Images contextuelles
│   │
│   ├── components/
│   │   ├── ui/                  # 45+ composants Shadcn
│   │   ├── SEO/                 # Composants SEO
│   │   │   ├── Breadcrumbs.tsx
│   │   │   └── ServiceSchema.tsx
│   │   └── *.tsx                # 35+ composants métier
│   │
│   ├── data/
│   │   ├── blogData.ts          # Articles blog (6+)
│   │   ├── citiesData.ts        # 32 villes
│   │   ├── regionsData.ts       # 13 régions
│   │   ├── content.ts           # Contenu textuel
│   │   ├── seoData.ts           # Données SEO
│   │   └── local_section_data.json
│   │
│   ├── hooks/
│   │   ├── useAuth.tsx          # Authentification
│   │   ├── useSEO.tsx           # Meta tags dynamiques
│   │   ├── useSmoothScroll.tsx  # Navigation fluide
│   │   ├── usePhoneCall.tsx     # Appel téléphonique
│   │   ├── useParallax.tsx      # Effet parallax
│   │   ├── use-mobile.tsx       # Détection mobile
│   │   └── use-toast.ts         # Notifications
│   │
│   ├── integrations/
│   │   └── supabase/
│   │       ├── client.ts        # Client Supabase
│   │       └── types.ts         # Types générés
│   │
│   ├── lib/
│   │   ├── utils.ts             # Utilitaires (cn, etc.)
│   │   └── supabase.ts          # Config Supabase
│   │
│   ├── pages/
│   │   ├── Blog.tsx             # Hub blog
│   │   ├── BlogArticle.tsx      # Page article
│   │   ├── Index.tsx            # Page d'accueil
│   │   ├── Auth.tsx             # Authentification
│   │   ├── Admin.tsx            # Panel admin
│   │   ├── NotFound.tsx         # 404
│   │   ├── LegalPage.tsx        # Mentions légales
│   │   ├── ZonesIntervention.tsx # Hub régions
│   │   ├── services/            # 11 pages services
│   │   ├── regions/             # Pages régions
│   │   └── villes/              # Pages villes
│   │
│   ├── App.tsx                  # Router principal
│   ├── main.tsx                 # Point d'entrée
│   └── index.css                # Styles globaux + tokens
│
├── supabase/
│   ├── config.toml              # Config projet
│   ├── functions/
│   │   ├── deno.json            # Config Deno
│   │   └── send-quote-email/    # Edge function emails
│   └── migrations/              # Migrations SQL
│
├── .env                         # Variables environnement
├── tailwind.config.ts           # Config Tailwind
├── vite.config.ts               # Config Vite
├── tsconfig.json                # Config TypeScript
├── components.json              # Config Shadcn
├── README.md                    # Documentation complète v7.0
└── package.json                 # Dépendances
```

---

## 📄 4. PAGES & ROUTES

### Vue d'ensemble (60+ pages)

```
NIVEAU 0 - ACCUEIL
└── /                              → Index.tsx

NIVEAU 1 - SERVICES (11 pages)
├── /services/videosurveillance    → Videosurveillance.tsx
├── /services/alarme               → Alarme.tsx
├── /services/controle-acces       → ControleAcces.tsx
├── /services/domotique            → Domotique.tsx
├── /services/reseau               → Reseau.tsx
├── /services/maintenance          → Maintenance.tsx
├── /services/antenne-satellite    → AntenneSatellite.tsx
├── /services/portails-parking     → PortailsParking.tsx
├── /services/installation         → Installation.tsx
├── /services/depannage            → Depannage.tsx
└── /services/location             → Location.tsx

NIVEAU 2 - HUB GÉOGRAPHIQUE (PAGE PIVOT)
└── /zones-intervention            → ZonesIntervention.tsx

NIVEAU 3 - RÉGIONS (13 pages)
├── /zones-intervention/ile-de-france
├── /zones-intervention/auvergne-rhone-alpes
├── /zones-intervention/provence-alpes-cote-d-azur
├── /zones-intervention/nouvelle-aquitaine
├── /zones-intervention/occitanie
├── /zones-intervention/hauts-de-france
├── /zones-intervention/grand-est
├── /zones-intervention/pays-de-la-loire
├── /zones-intervention/bretagne
├── /zones-intervention/normandie
├── /zones-intervention/bourgogne-franche-comte
├── /zones-intervention/centre-val-de-loire
└── /zones-intervention/corse

NIVEAU 4 - VILLES (32 pages pivot)
├── /villes/paris
├── /villes/lyon
├── /villes/marseille
├── /villes/toulouse
├── /villes/bordeaux
├── /villes/lille
├── /villes/nice
├── /villes/nantes
├── /villes/strasbourg
├── /villes/montpellier
├── /villes/rennes
├── /villes/grenoble
├── /villes/creteil
├── /villes/vitry-sur-seine
├── /villes/saint-maur-des-fosses
├── /villes/boulogne-billancourt
├── /villes/versailles
├── /villes/saint-etienne
├── /villes/cannes
├── /villes/aix-en-provence
├── /villes/la-rochelle
├── /villes/amiens
├── /villes/nancy
├── /villes/metz
├── /villes/angers
├── /villes/brest
├── /villes/rouen
├── /villes/le-havre
├── /villes/dijon
├── /villes/orleans
└── /villes/tours

PAGES LÉGALES
├── /mentions-legales
└── /politique-confidentialite

PAGES SYSTÈME
├── /auth                          → Auth.tsx
├── /admin                         → Admin.tsx (protégé)
└── /*                             → NotFound.tsx
```

### Détail des services avec couleurs

| Service | Route | Couleur Accent | Icône |
|---------|-------|----------------|-------|
| Vidéosurveillance | `/services/videosurveillance` | 🔵 Bleu (blue-500) | Camera |
| Alarme | `/services/alarme` | 🔴 Rouge (red-500) | Bell |
| Contrôle d'Accès | `/services/controle-acces` | 🟢 Vert (green-500) | Key |
| Domotique | `/services/domotique` | 🟡 Amber (amber-500) | Home |
| Réseau | `/services/reseau` | 🔵 Cyan (cyan-500) | Wifi |
| Maintenance | `/services/maintenance` | 🟣 Violet (violet-500) | Settings |
| Antenne/Satellite | `/services/antenne-satellite` | 🟠 Orange (orange-500) | Radio |
| Portails/Parking | `/services/portails-parking` | 🩷 Pink (pink-500) | DoorOpen |
| Installation | `/services/installation` | 🌊 Teal (teal-500) | Wrench |
| Dépannage | `/services/depannage` | 🌸 Rose (rose-500) | AlertTriangle |
| Location | `/services/location` | 💠 Sky (sky-500) | Package |

---

## 🧩 5. COMPOSANTS

### Composants Métier (src/components/)

| Composant | Description | Utilisé dans |
|-----------|-------------|--------------|
| `Header.tsx` | Navigation responsive + mobile drawer | Toutes les pages |
| `Footer.tsx` | Pied de page avec liens | Toutes les pages |
| `Hero.tsx` | Section héros page d'accueil | Index |
| `ServiceHero.tsx` | Héros animé avec 12 couleurs d'accent | Pages services |
| `Services.tsx` | Grille des 11 services | Index |
| `ServicesHighlight.tsx` | Mise en avant prestations | Index, villes |
| `QuoteFunnelSimple.tsx` | Formulaire devis multi-étapes | Toutes les pages |
| `QuoteFunnel.tsx` | Formulaire devis complet | Alternative |
| `Contact.tsx` | Section contact | Index |
| `About.tsx` | Section à propos | Index |
| `Testimonials.tsx` | Avis clients avec carousel | Index |
| `MiniTestimonials.tsx` | Témoignages compacts | Villes, régions |
| `WhyHDConnect.tsx` | Pain points → Solutions | Services, villes |
| `FAQAccordion.tsx` | FAQ interactive | Services, villes |
| `ContentSection.tsx` | Layout 50/50 image/texte | Services |
| `CTAIntermediate.tsx` | Call-to-action coloré (supporte `interventionMode`) | Services |
| `CTAFloating.tsx` | CTA flottant | - |
| `GlobalFloatingCTA.tsx` | Bouton appel flottant global | App.tsx |
| `FloatingContactBubble.tsx` | Bulle contact animée | - |
| `ImageBreak.tsx` | Image pleine largeur | Services |
| `ServiceShowcase.tsx` | Grille d'images | Services |
| `ServiceLinks.tsx` | Maillage interne services | Services |
| `LocalServiceLinks.tsx` | Liens services locaux | Villes |
| `ServicePrestations.tsx` | Prestations (install, dépannage, location) - supporte `interventionMode` | Services |
| `ServicePageEnhancements.tsx` | Décorations et animations | Services |
| `UseCasesSection.tsx` | Cas d'usage | Services |
| `FeatureGrid.tsx` | Grille de fonctionnalités | Services |
| `InterventionProcess.tsx` | Processus 4 étapes | Services, villes |
| `ColoredStatsSection.tsx` | Stats avec couleurs | Services |
| `RegionCoverage.tsx` | Couverture régionale | Services |
| `LocalSEO.tsx` | SEO local enrichi | Villes |
| `HomeSEOBlocks.tsx` | Blocs SEO accueil | Index |
| `AnimatedSection.tsx` | Wrapper animation | Partout |
| `ScrollToTop.tsx` | Scroll automatique | App.tsx |
| `NavLink.tsx` | Lien navigation actif | Header |

### Composants SEO (src/components/SEO/)

| Composant | Description |
|-----------|-------------|
| `Breadcrumbs.tsx` | Fil d'Ariane structuré |
| `ServiceSchema.tsx` | JSON-LD Service + FAQ + Breadcrumb |

### Composants UI (src/components/ui/)

45+ composants Shadcn/UI : `accordion`, `alert`, `avatar`, `badge`, `button`, `card`, `carousel`, `checkbox`, `dialog`, `dropdown-menu`, `form`, `input`, `label`, `popover`, `progress`, `radio-group`, `scroll-area`, `select`, `separator`, `sheet`, `skeleton`, `slider`, `switch`, `table`, `tabs`, `textarea`, `toast`, `tooltip`, etc.

---

## 📊 6. DONNÉES & DATA

### citiesData.ts (32 villes)

```typescript
interface CityData {
  name: string;           // "Paris"
  slug: string;           // "paris"
  department: string;     // "Paris"
  departmentCode: string; // "75"
  region: string;         // "Île-de-France"
  regionSlug: string;     // "ile-de-france"
  population: string;     // "2,1 millions"
  description: string;    // Description SEO
  neighborhoods?: string[]; // Quartiers
  nearbyTowns?: string[];   // Villes voisines
}

// Fonctions exports
getCityBySlug(slug)
getCitiesByRegion(region)
getCitiesByRegionSlug(regionSlug)
getCitiesByDepartment(departmentCode)
getAllCitySlugs()
```

### regionsData.ts (13 régions)

```typescript
interface RegionData {
  name: string;              // "Île-de-France"
  slug: string;              // "ile-de-france"
  description: string;       // Description longue
  seoDescription: string;    // Meta description
  departments: DepartmentData[]; // Liste départements
  mainCities: string[];      // Villes principales
  economicHighlights: string[]; // Points économiques
  clientTypes: string[];     // Types de clients
}

// Fonctions exports
getRegionBySlug(slug)
getAllRegionSlugs()
getRegionCities(regionSlug)
```

### content.ts

Contient tout le contenu textuel centralisé :
- Informations entreprise (contact, réseaux sociaux)
- Navigation links
- Données services
- Textes sections

### seoData.ts

```typescript
frenchCities[]     // Liste villes pour SEO
services[]         // Liste services avec mots-clés
generateServiceSEO(serviceSlug, cityName?)
generateCityServiceContent(serviceSlug, cityName)
```

---

## 🪝 7. HOOKS PERSONNALISÉS

| Hook | Fichier | Description |
|------|---------|-------------|
| `useAuth` | `useAuth.tsx` | Authentification Supabase |
| `useSEO` | `useSEO.tsx` | Injection meta tags dynamiques |
| `useSmoothScroll` | `useSmoothScroll.tsx` | Navigation fluide vers sections avec mode (quote/intervention) |
| `usePhoneCall` | `usePhoneCall.tsx` | Gestion appel téléphonique |
| `useParallax` | `useParallax.tsx` | Effet parallax sur scroll |
| `useMobile` | `use-mobile.tsx` | Détection viewport mobile |
| `useToast` | `use-toast.ts` | Notifications toast |

### useSmoothScroll - Détail

```typescript
const { scrollToSection } = useSmoothScroll();

// Utilisation
scrollToSection("quote", { mode: "quote" });
scrollToSection("quote", { mode: "intervention" });
scrollToSection("contact");

// Fonctionnalités
// - Scroll fluide vers l'élément
// - Gestion cross-page (redirige vers / si section absente)
// - Mode devis/intervention avec highlight du switch
// - Retry automatique si élément pas encore dans le DOM
```

### Alternance CTA Services (1/3 = intervention)

Dans toutes les pages services, les boutons CTA alternent entre "Demander un devis" et "Demander une intervention" selon la règle **1 sur 3** :

| Position | Mode | Label | Style |
|----------|------|-------|-------|
| CTA #1 (ServiceHero) | `quote` | "Demander un devis gratuit" | Gradient bleu (accent du service) |
| CTA #2 (CTAIntermediate) | `quote` | "Demander un devis" | Gradient bleu + icône FileText |
| CTA #3 (ServicePrestations ou section finale) | `intervention` | "Demander une intervention" | **Gradient orange/rouge + icône Wrench** |

---

## 🎨 8. DESIGN SYSTEM

### Variables CSS (index.css)

```css
:root {
  /* Couleurs principales */
  --background: 222 47% 11%;      /* Fond sombre */
  --foreground: 0 0% 95%;         /* Texte clair */
  --primary: 215 100% 50%;        /* Bleu principal */
  --primary-glow: 215 100% 60%;   /* Bleu lumineux */
  --accent: 195 100% 45%;         /* Cyan accent */
  
  /* Surfaces */
  --card: 217 32% 13%;
  --secondary: 217 32% 17%;
  --muted: 215 25% 27%;
  
  /* États */
  --destructive: 0 84% 60%;       /* Rouge erreur */
  --ring: 215 100% 50%;
  --border: 217 32% 20%;
  --input: 217 32% 17%;
  
  /* Radius */
  --radius: 0.5rem;
}
```

### Philosophie Design - Signature Visuelle

Le site utilise une **signature visuelle unique** caractérisée par :
- **Cercles lumineux flottants** avec `blur-3xl` et `animate-pulse-slow`
- **Gradients subtils** sur les backgrounds
- **Effets glassmorphism** avec `backdrop-blur-sm`
- **Animations au scroll** via AnimatedSection
- **Hover effects** avec `hover:scale-105` et transitions fluides
- **Badges colorés** pour les catégories et services

### Couleurs d'Accent Services

```typescript
const accentGradients = {
  primary: "from-primary to-accent",
  video: "from-blue-500 to-blue-700",
  alarme: "from-red-500 to-red-700",
  acces: "from-green-500 to-green-700",
  domotique: "from-amber-400 to-amber-600",
  reseau: "from-cyan-500 to-cyan-700",
  maintenance: "from-violet-500 to-violet-700",
  antenne: "from-orange-500 to-orange-700",
  portail: "from-pink-500 to-pink-700",
  installation: "from-teal-500 to-teal-700",
  depannage: "from-rose-500 to-rose-700",
  location: "from-sky-500 to-sky-700"
};
```

### Micro-interactions (index.css)

```css
.btn-micro-interaction     /* Scale + ripple sur boutons */
.card-micro-interaction    /* Lift + glow sur cartes */
.link-micro-interaction    /* Underline animé */
.icon-micro-interaction    /* Bounce sur icônes */
.badge-pulse               /* Pulsation badges */
.glow-border               /* Bordure gradient animée */
.shake-attention           /* Secousse attention */
.slide-up-animation        /* Apparition vers le haut */
.pop-in-animation          /* Pop avec scale */
.float-animation           /* Flottement continu */
```

### Variantes Button (button.tsx)

```typescript
variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "gradient" | "glow" | "intervention"
size: "default" | "sm" | "lg" | "xl" | "icon"

// Variant "intervention" (nouveau)
// Style orange/rouge urgence avec icône Wrench
// bg-gradient-to-r from-orange-500 via-red-500 to-orange-600
// border-2 border-orange-400/50
// hover:shadow-xl hover:shadow-orange-500/40
```

---

## 🔍 9. SEO & OPTIMISATIONS

### Meta Tags Dynamiques

Chaque page utilise le hook `useSEO()` :

```typescript
useSEO({
  title: "Vidéosurveillance Professionnelle | HD Connect",
  description: "Installation caméras de surveillance...",
  keywords: "vidéosurveillance, caméras, sécurité"
});
```

### Données Structurées (JSON-LD)

Via `ServiceSchema.tsx` :
- `@type: LocalBusiness` - Infos entreprise
- `@type: Service` - Détails service
- `@type: FAQPage` - Questions/réponses
- `@type: BreadcrumbList` - Fil d'Ariane

### Sitemap.xml

```
60+ URLs structurées :
├── Priority 1.0    → Accueil
├── Priority 0.9    → 8 services principaux
├── Priority 0.85   → 3 prestations + hub régions
├── Priority 0.8    → 13 régions
├── Priority 0.7-0.75 → 32 villes
└── Priority 0.3    → 2 pages légales
```

### Maillage Interne

| Type de page | Liens émis |
|--------------|------------|
| Page service | → 7 autres services + 5 régions + hub |
| Page région | → Services + villes + régions voisines |
| Page ville | → Région parente + services + villes voisines |

---

## 🎯 10. STRATÉGIE SEO COMPLÈTE

### Architecture en Silos

```
hdconnect.fr/
├── / (Accueil)
├── /services/
│   ├── /videosurveillance
│   ├── /alarme
│   ├── /controle-acces
│   ├── /reseau
│   ├── /domotique
│   ├── /antenne-satellite
│   ├── /portails-parking
│   ├── /installation
│   ├── /depannage
│   └── /location
├── /zones-intervention/          ← Hub principal
│   ├── /ile-de-france/
│   │   └── (villes accessibles via /villes/)
│   └── /[autres-regions]/
├── /villes/                      ← Pages pivot SEO local
│   ├── /paris
│   ├── /creteil
│   └── /[autres-villes]
└── /[pages-legales]
```

### Règles de Maillage

1. **Page Accueil** → Toutes les pages services + Régions principales
2. **Page Service** → Autres services + Régions pertinentes
3. **Page Région** → Tous les services + Villes de la région
4. **Page Ville (Pivot)** → Services + Région parent + Villes proches

### Template de Page Ville (Pivot SEO)

```
[H1] Installation, Dépannage, Location Sécurité à [Ville] ([Département])

[SAB - Paragraphe d'accroche 100-150 mots]
Présentation HD Connect à [Ville], contexte local, proposition de valeur.

[Section Services]
[H2] Nos Services de Sécurité à [Ville]
- Vidéosurveillance [Ville]
- Alarme [Ville]
- Contrôle d'accès [Ville]
- ...8 services au total

[Section Expertise Locale]
[H2] Pourquoi Choisir HD Connect à [Ville] ?

[Section FAQ Locale]
[H2] Questions Fréquentes - Sécurité [Ville]
6 questions spécifiques à la localité

[CTA Final]
[H2] Demandez Votre Devis Gratuit à [Ville]
```

### Balises SEO Standards

#### Title Tag
```
Format: [Action] [Service] à [Ville] | HD Connect
Exemple: Installation Vidéosurveillance à Créteil | HD Connect
Longueur: 50-60 caractères
```

#### Meta Description
```
Format: [Proposition valeur] à [Ville]. [Bénéfice]. [CTA].
Exemple: Expert en installation de vidéosurveillance à Créteil. Devis gratuit, intervention rapide. Contactez HD Connect !
Longueur: 150-160 caractères
```

### Optimisation IA (SGE/AIO)

#### Principes E-E-A-T
- **Expérience** : Témoignages, études de cas
- **Expertise** : Certifications, années d'expérience
- **Autorité** : Mentions presse, partenariats
- **Fiabilité** : Avis clients, garanties

#### Format "Réponse Directe"
```
Question claire → Réponse concise (2-3 phrases) → Développement
```

### SEO Local

- Google Business Profile à optimiser
- Cohérence NAP (Name-Address-Phone)
- 1 page par ville principale (32 actuellement)
- Contenu unique par page
- Témoignages locaux si disponibles

### Mots-clés Prioritaires

| Mot-clé | Volume | Difficulté |
|---------|--------|------------|
| installation vidéosurveillance paris | 720 | Moyenne |
| alarme maison ile de france | 590 | Moyenne |
| contrôle accès entreprise | 480 | Facile |
| dépannage alarme 94 | 210 | Facile |

---

## 💾 11. BACKEND SUPABASE

### Configuration

```
Project ID: emvmyrdxmpsoaykabszb
URL: https://emvmyrdxmpsoaykabszb.supabase.co
```

### Tables

#### customer_requests

```sql
CREATE TABLE customer_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  
  -- Infos client
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  
  -- Demande
  request_type request_type NOT NULL, -- 'quote' | 'intervention' | 'contact'
  services text[],
  message text,
  
  -- Localisation
  city text,
  postal_code text,
  
  -- Statut
  status request_status DEFAULT 'new' -- 'new' | 'contacted' | 'quoted' | 'converted' | 'closed'
);
```

#### user_roles

```sql
CREATE TABLE user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL DEFAULT 'user', -- 'admin' | 'user'
  created_at timestamptz DEFAULT now()
);
```

### Edge Functions

#### send-quote-email

```typescript
// supabase/functions/send-quote-email/index.ts
// Envoie un email via Resend lors d'une demande de devis

POST /functions/v1/send-quote-email
Body: {
  name, email, phone, services, message, 
  requestType, city, postalCode
}

// Requiert: RESEND_API_KEY dans les secrets
// Destinataire: kamal@hdconnect.fr
```

---

## 🚀 12. INSTALLATION & DÉPLOIEMENT

### Installation Locale

```bash
# 1. Cloner le repository
git clone https://github.com/[username]/hdconnect.git
cd hdconnect

# 2. Installer les dépendances
pnpm install
# ou
npm install

# 3. Configurer l'environnement
cp .env.example .env
# Éditer .env avec vos valeurs

# 4. Lancer en développement
pnpm dev
# ou
npm run dev

# 5. Build production
pnpm build
# ou
npm run build
```

### Déploiement Lovable

1. Ouvrir le projet dans Lovable
2. Cliquer sur **Share** → **Publish**
3. Le site est déployé sur `*.lovable.app`

### Domaine Personnalisé

1. Aller dans **Settings** → **Domains**
2. Ajouter `hdconnect.fr`
3. Configurer les DNS :
   ```
   Type: CNAME
   Name: www
   Value: [votre-projet].lovable.app
   
   Type: A
   Name: @
   Value: [IP Lovable]
   ```

---

## ⚙️ 13. CONFIGURATION

### Variables d'Environnement (.env)

```bash
# Supabase (obligatoire)
VITE_SUPABASE_URL="https://emvmyrdxmpsoaykabszb.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="eyJ..."
VITE_SUPABASE_PROJECT_ID="emvmyrdxmpsoaykabszb"

# Resend - Emails (secret Supabase)
# À configurer dans Supabase Dashboard → Edge Functions → Secrets
RESEND_API_KEY="re_..."
```

### Configuration Supabase (À faire)

#### 1. Créer le premier admin

```sql
-- Après inscription d'un utilisateur via /auth
INSERT INTO public.user_roles (user_id, role)
VALUES ('uuid-du-user', 'admin');
```

#### 2. Configurer Resend

1. Créer un compte sur [resend.com](https://resend.com)
2. Obtenir une API Key
3. Aller dans Supabase Dashboard → Edge Functions → Secrets
4. Ajouter `RESEND_API_KEY`

#### 3. Vérifier le domaine email

1. Dans Resend, ajouter le domaine `hdconnect.fr`
2. Configurer les enregistrements DNS (SPF, DKIM)
3. Mettre à jour `SENDER_EMAIL` dans la fonction

### Checklist Configuration

- [ ] Variables d'environnement configurées
- [ ] Supabase connecté
- [ ] Premier utilisateur admin créé
- [ ] Clé API Resend ajoutée
- [ ] Domaine email vérifié
- [ ] Google Analytics installé
- [ ] Sitemap soumis à Google

---

## 📝 14. BLOG

### Structure

```
BLOG (6+ articles)
├── /blog                          → Blog.tsx (Hub)
└── /blog/:slug                    → BlogArticle.tsx (Articles)
```

### Données (src/data/blogData.ts)

```typescript
interface BlogArticle {
  id: string;
  slug: string;              // URL-friendly
  title: string;             // Titre article
  excerpt: string;           // Résumé 160 caractères
  content: string;           // Contenu complet Markdown-style
  category: BlogCategory;    // Catégorie
  author: string;            // Auteur
  publishedAt: string;       // Date publication
  readingTime: string;       // Temps lecture
  image: string;             // Image header
  tags: string[];            // Tags SEO
  featured?: boolean;        // Mise en avant
}

type BlogCategory = 
  | 'videosurveillance'
  | 'alarme'
  | 'controle-acces'
  | 'domotique'
  | 'reseau'
  | 'maintenance'
  | 'conseils'
  | 'actualites';
```

### Articles Initiaux (6)

| Titre | Catégorie | Slug |
|-------|-----------|------|
| Comment choisir son système de vidéosurveillance en 2026 | vidéosurveillance | `choisir-systeme-videosurveillance-2026` |
| Les 5 erreurs à éviter lors de l'installation d'une alarme | alarme | `erreurs-installation-alarme` |
| Contrôle d'accès biométrique : guide complet | contrôle-accès | `controle-acces-biometrique-guide` |
| Maison connectée : par où commencer ? | domotique | `maison-connectee-par-ou-commencer` |
| Maintenance préventive : économisez sur le long terme | maintenance | `maintenance-preventive-economies` |
| Sécurité entreprise : les nouvelles réglementations 2026 | actualités | `securite-entreprise-reglementations-2026` |

### Fonctionnalités Blog

| Fonctionnalité | Statut |
|----------------|--------|
| Page hub avec catégories | ✅ |
| Filtrage par catégorie | ✅ |
| Articles mis en avant | ✅ |
| JSON-LD Article schema | ✅ |
| Partage social (Twitter, Facebook, LinkedIn) | ✅ |
| Articles similaires | ✅ |
| Breadcrumbs | ✅ |
| Images optimisées | ✅ |

---

## 📋 15. ÉTAT DU PROJET - CHECKLIST COMPLÈTE

### 🏠 PAGES PRINCIPALES

| Tâche | Statut | Notes |
|-------|--------|-------|
| Page d'accueil (`/`) | ✅ Fait | Hero, Services, Témoignages, Contact |
| Header navigation | ✅ Fait | Logo, Services, Zones, Blog, bouton Devis |
| Footer complet | ✅ Fait | Liens légaux, services, contact |
| Page 404 | ✅ Fait | Design personnalisé |
| Pages légales | ✅ Fait | Mentions légales, Politique confidentialité |
| Page Admin | ✅ Fait | Authentification Supabase |
| Image OG sociale | ✅ Fait | `public/og-image.jpg` (1200x630) |

### 🔧 PAGES SERVICES (11 services)

| Service | Route | Statut |
|---------|-------|--------|
| Vidéosurveillance | `/services/videosurveillance` | ✅ |
| Alarme | `/services/alarme` | ✅ |
| Contrôle d'accès | `/services/controle-acces` | ✅ |
| Réseau | `/services/reseau` | ✅ |
| Domotique | `/services/domotique` | ✅ |
| Maintenance | `/services/maintenance` | ✅ |
| Antenne/Satellite | `/services/antenne-satellite` | ✅ |
| Portails/Parking | `/services/portails-parking` | ✅ |
| Installation | `/services/installation` | ✅ |
| Dépannage | `/services/depannage` | ✅ |
| Location | `/services/location` | ✅ |

### 🗺️ PAGES PIVOT SEO (Géographiques)

| Page | Route | Statut |
|------|-------|--------|
| Hub Zones Intervention | `/zones-intervention` | ✅ Fait |
| 13 pages Régions | `/zones-intervention/:slug` | ✅ Fait |
| 32 pages Villes | `/villes/:slug` | ✅ Fait |
| Images régions authentiques | Photos réelles de France | ✅ Fait |
| Lien Header "Zones" | Navigation principale | ✅ Fait |

### 📝 BLOG

| Tâche | Statut |
|-------|--------|
| Page Blog Hub `/blog` | ✅ Fait |
| Pages Articles `/blog/:slug` | ✅ Fait |
| 6 articles SEO initiaux | ✅ Fait |
| JSON-LD Article schema | ✅ Fait |
| Partage social | ✅ Fait |
| Lien Blog dans Header | ✅ Fait |

### 🔒 FORMULAIRES & BACKEND

| Tâche | Statut | Notes |
|-------|--------|-------|
| Supabase connecté | ✅ Fait | Projet `emvmyrdxmpsoaykabszb` |
| Table `customer_requests` | ✅ Fait | Stockage leads |
| Edge Function emails | ✅ Existe | `send-quote-email/` |
| QuoteFunnel (Formspree) | ✅ Fonctionne | Backup fonctionnel |
| **RESEND_API_KEY** | ⏳ À configurer | Clé à fournir par le client |

### 📊 SEO & TECHNIQUE

| Tâche | Statut |
|-------|--------|
| Meta tags OG | ✅ Fait |
| Twitter Cards | ✅ Fait |
| robots.txt | ✅ Fait |
| sitemap.xml (60+ URLs) | ✅ Fait |
| Canonical URLs | ✅ Fait |
| Breadcrumbs | ✅ Fait |
| JSON-LD LocalBusiness | ✅ Fait |
| Image OG sociale | ✅ Fait |
| Google Analytics 4 | ⏳ En attente ID GA4 |

### 📁 DOCUMENTATION

| Tâche | Statut |
|-------|--------|
| README.md unifié v7.0 | ✅ Fait |
| Anciens cahiers des charges | ✅ Supprimés |
| Documentation Blog | ✅ Ajoutée |

---

### ⏳ TÂCHES EN ATTENTE (À fournir par le client)

| Tâche | Information requise |
|-------|---------------------|
| RESEND_API_KEY | Clé API Resend pour emails |
| Google Analytics 4 | ID de suivi (G-XXXXXXXXXX) |
| Premier admin | Email admin pour INSERT dans user_roles |
| Domaine Resend | Vérification hdconnect.fr dans Resend |

### 🟢 AMÉLIORATIONS FUTURES (Optionnelles)

| Tâche | Description | Priorité |
|-------|-------------|----------|
| Pages service+ville | `/villes/paris/videosurveillance` | 🟢 Basse |
| Plus d'articles blog | Contenu SEO additionnel | 🟢 Basse |
| Widget avis Google | Reviews clients | 🟢 Basse |
| Chat live | Support instantané | 🟢 Basse |
| Espace client | Portail post-installation | 🟢 Basse |

---

## 📞 Contact

- **Email:** kamal@hdconnect.fr
- **Téléphone:** 01 84 80 86 52 / 06 27 13 53 04
- **Site:** https://hdconnect.fr

---

**Document créé le 03 Janvier 2026**  
**Version 7.0 - Documentation Complète avec Blog**  
**Dernière mise à jour:** 08 Janvier 2026
