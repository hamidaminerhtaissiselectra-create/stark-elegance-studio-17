// Données des villes pour les pages SEO locales - Version enrichie
export interface CityData {
  name: string;
  slug: string;
  department: string;
  departmentCode: string;
  region: string;
  regionSlug: string;
  population: string;
  description: string;
  neighborhoods?: string[];
  nearbyTowns?: string[];
}

export const citiesData: CityData[] = [
  // ===== ÎLE-DE-FRANCE =====
  {
    name: "Paris",
    slug: "paris",
    department: "Paris",
    departmentCode: "75",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "2,1 millions",
    description: "HD Connect, votre expert en sécurité à Paris. Installation de systèmes de vidéosurveillance, alarmes anti-intrusion, contrôle d'accès et domotique pour particuliers et professionnels. Intervention rapide dans tous les arrondissements parisiens.",
    neighborhoods: ["Le Marais", "Montmartre", "Saint-Germain", "Bastille", "Belleville", "Auteuil", "Passy", "Nation", "République", "Opéra", "Châtelet", "La Défense"],
    nearbyTowns: ["Boulogne-Billancourt", "Neuilly-sur-Seine", "Levallois-Perret", "Vincennes", "Saint-Denis", "Montreuil"]
  },
  {
    name: "Créteil",
    slug: "creteil",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "92 000",
    description: "HD Connect intervient à Créteil et dans tout le Val-de-Marne pour vos installations de sécurité : caméras de surveillance, systèmes d'alarme, contrôle d'accès. Devis gratuit et intervention sous 24h.",
    neighborhoods: ["Centre-Ville", "Mont-Mesly", "La Source", "Préfecture", "L'Échat", "Bords de Marne"],
    nearbyTowns: ["Maisons-Alfort", "Saint-Maur-des-Fossés", "Alfortville", "Choisy-le-Roi", "Bonneuil-sur-Marne"]
  },
  {
    name: "Vitry-sur-Seine",
    slug: "vitry-sur-seine",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "95 000",
    description: "Expert en sécurité à Vitry-sur-Seine. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide pour particuliers et entreprises.",
    neighborhoods: ["Centre-Ville", "Port à l'Anglais", "Plateau", "Coteau", "Gare"],
    nearbyTowns: ["Ivry-sur-Seine", "Choisy-le-Roi", "Thiais", "Villejuif", "Alfortville"]
  },
  {
    name: "Saint-Maur-des-Fossés",
    slug: "saint-maur-des-fosses",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "76 000",
    description: "HD Connect, installateur de sécurité à Saint-Maur-des-Fossés. Vidéosurveillance HD, alarmes certifiées, domotique pour maisons et commerces. Devis gratuit, intervention rapide.",
    neighborhoods: ["La Varenne-Saint-Hilaire", "Saint-Maur Créteil", "Le Parc", "Adamville", "Champignol"],
    nearbyTowns: ["Créteil", "Joinville-le-Pont", "Bonneuil-sur-Marne", "Champigny-sur-Marne", "Sucy-en-Brie"]
  },
  {
    name: "Boulogne-Billancourt",
    slug: "boulogne-billancourt",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "121 000",
    description: "Installation sécurité à Boulogne-Billancourt par HD Connect. Vidéosurveillance, alarmes, contrôle d'accès pour résidences de standing et sièges sociaux. Expert Hauts-de-Seine.",
    neighborhoods: ["Centre-Ville", "Point du Jour", "Silly-Gallieni", "Princes-Marmottan", "Rives de Seine"],
    nearbyTowns: ["Issy-les-Moulineaux", "Meudon", "Sèvres", "Saint-Cloud", "Paris 16e"]
  },
  {
    name: "Versailles",
    slug: "versailles",
    department: "Yvelines",
    departmentCode: "78",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "85 000",
    description: "HD Connect à Versailles : solutions de sécurité haut de gamme pour propriétés d'exception. Vidéosurveillance discrète, alarmes certifiées, domotique intégrée.",
    neighborhoods: ["Notre-Dame", "Saint-Louis", "Montreuil", "Porchefontaine", "Clagny-Glatigny"],
    nearbyTowns: ["Le Chesnay", "Viroflay", "Vélizy-Villacoublay", "Saint-Cyr-l'École", "Rocquencourt"]
  },
  // ===== AUVERGNE-RHÔNE-ALPES =====
  {
    name: "Lyon",
    slug: "lyon",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "522 000",
    description: "HD Connect à Lyon : expert en sécurité électronique. Installation de caméras de surveillance, alarmes anti-intrusion, contrôle d'accès biométrique. Intervention dans tous les arrondissements lyonnais.",
    neighborhoods: ["Presqu'île", "Vieux Lyon", "Part-Dieu", "Croix-Rousse", "Confluence", "Gerland", "Villeurbanne"],
    nearbyTowns: ["Villeurbanne", "Vénissieux", "Caluire-et-Cuire", "Saint-Priest", "Vaulx-en-Velin", "Bron"]
  },
  {
    name: "Grenoble",
    slug: "grenoble",
    department: "Isère",
    departmentCode: "38",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "158 000",
    description: "Expert sécurité à Grenoble. HD Connect installe vidéosurveillance, alarmes et contrôle d'accès pour entreprises tech et résidences. Couverture Isère complète.",
    neighborhoods: ["Centre-Ville", "Europole", "Berriat", "Eaux-Claires", "Île Verte", "Bastille"],
    nearbyTowns: ["Échirolles", "Saint-Martin-d'Hères", "Fontaine", "Meylan", "Seyssinet-Pariset"]
  },
  {
    name: "Saint-Étienne",
    slug: "saint-etienne",
    department: "Loire",
    departmentCode: "42",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "173 000",
    description: "HD Connect à Saint-Étienne : sécurité électronique pour industries et commerces. Vidéosurveillance, alarmes certifiées, maintenance 24/7.",
    neighborhoods: ["Centre-Ville", "Châteaucreux", "Bellevue", "Montreynaud", "Jacquard"],
    nearbyTowns: ["Saint-Priest-en-Jarez", "Saint-Jean-Bonnefonds", "Villars", "La Talaudière", "Roche-la-Molière"]
  },
  // ===== PROVENCE-ALPES-CÔTE D'AZUR =====
  {
    name: "Marseille",
    slug: "marseille",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "870 000",
    description: "HD Connect à Marseille : votre partenaire sécurité. Vidéosurveillance professionnelle, systèmes d'alarme, contrôle d'accès pour résidences et entreprises. Devis gratuit, intervention rapide.",
    neighborhoods: ["Vieux-Port", "Joliette", "Prado", "Castellane", "La Valentine", "Les Catalans", "Endoume"],
    nearbyTowns: ["Aix-en-Provence", "Aubagne", "Martigues", "Vitrolles", "Marignane", "La Ciotat"]
  },
  {
    name: "Nice",
    slug: "nice",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "342 000",
    description: "Expert sécurité sur la Côte d'Azur. HD Connect Nice installe vos systèmes de vidéosurveillance, alarmes et domotique. Protection optimale pour villas, appartements et commerces.",
    neighborhoods: ["Vieux-Nice", "Promenade des Anglais", "Cimiez", "Libération", "Port", "Saint-Roch"],
    nearbyTowns: ["Cannes", "Antibes", "Cagnes-sur-Mer", "Grasse", "Saint-Laurent-du-Var", "Menton"]
  },
  {
    name: "Cannes",
    slug: "cannes",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "74 000",
    description: "Sécurité haut de gamme à Cannes par HD Connect. Protection villas de luxe, hôtels, événements. Vidéosurveillance discrète, alarmes, contrôle d'accès.",
    neighborhoods: ["La Croisette", "Le Suquet", "Palm Beach", "La Californie", "Petit Juas"],
    nearbyTowns: ["Antibes", "Mougins", "Le Cannet", "Mandelieu-la-Napoule", "Vallauris"]
  },
  {
    name: "Aix-en-Provence",
    slug: "aix-en-provence",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "145 000",
    description: "HD Connect Aix-en-Provence : installation sécurité pour bastides, commerces et entreprises. Vidéosurveillance, alarmes, domotique provençale.",
    neighborhoods: ["Centre Historique", "Mazarin", "Jas de Bouffan", "Pont de l'Arc", "Les Milles"],
    nearbyTowns: ["Marseille", "Gardanne", "Vitrolles", "Venelles", "Meyreuil", "Bouc-Bel-Air"]
  },
  // ===== NOUVELLE-AQUITAINE =====
  {
    name: "Bordeaux",
    slug: "bordeaux",
    department: "Gironde",
    departmentCode: "33",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "260 000",
    description: "HD Connect Bordeaux : solutions de sécurité complètes. Vidéosurveillance, alarmes, contrôle d'accès pour maisons, commerces et entreprises. Intervention rapide en Gironde.",
    neighborhoods: ["Chartrons", "Saint-Pierre", "Bacalan", "Bastide", "Caudéran", "Mériadeck"],
    nearbyTowns: ["Mérignac", "Pessac", "Talence", "Bègles", "Villenave-d'Ornon", "Gradignan"]
  },
  {
    name: "La Rochelle",
    slug: "la-rochelle",
    department: "Charente-Maritime",
    departmentCode: "17",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "77 000",
    description: "Installation sécurité La Rochelle par HD Connect. Protection résidences côtières, commerces du port. Vidéosurveillance, alarmes adaptées environnement marin.",
    neighborhoods: ["Vieux Port", "Les Minimes", "La Pallice", "Saint-Nicolas", "Tasdon"],
    nearbyTowns: ["Aytré", "Lagord", "Puilboreau", "Périgny", "Châtelaillon-Plage"]
  },
  // ===== OCCITANIE =====
  {
    name: "Toulouse",
    slug: "toulouse",
    department: "Haute-Garonne",
    departmentCode: "31",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "493 000",
    description: "Installation sécurité à Toulouse par HD Connect. Caméras HD, alarmes connectées, domotique intelligente. Expert en protection des biens pour particuliers et professionnels toulousains.",
    neighborhoods: ["Capitole", "Saint-Cyprien", "Compans-Caffarelli", "Minimes", "Rangueil", "Blagnac"],
    nearbyTowns: ["Blagnac", "Colomiers", "Tournefeuille", "Muret", "Balma", "L'Union"]
  },
  {
    name: "Montpellier",
    slug: "montpellier",
    department: "Hérault",
    departmentCode: "34",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "295 000",
    description: "HD Connect Montpellier : expert sécurité électronique. Vidéosurveillance, alarmes, contrôle d'accès pour résidences, commerces et entreprises héraultaises.",
    neighborhoods: ["Écusson", "Antigone", "Port Marianne", "Les Arceaux", "Richter", "Odysseum"],
    nearbyTowns: ["Castelnau-le-Lez", "Lattes", "Pérols", "Mauguio", "Saint-Jean-de-Védas"]
  },
  // ===== HAUTS-DE-FRANCE =====
  {
    name: "Lille",
    slug: "lille",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "236 000",
    description: "Expert sécurité à Lille. HD Connect installe vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Protection optimale pour résidences et locaux professionnels dans le Nord.",
    neighborhoods: ["Vieux-Lille", "Wazemmes", "Vauban", "Centre", "Bois-Blancs", "Fives"],
    nearbyTowns: ["Roubaix", "Tourcoing", "Villeneuve-d'Ascq", "Marcq-en-Barœul", "Lambersart", "Wasquehal"]
  },
  {
    name: "Amiens",
    slug: "amiens",
    department: "Somme",
    departmentCode: "80",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "134 000",
    description: "HD Connect Amiens : sécurité électronique pour entreprises et particuliers. Vidéosurveillance, alarmes certifiées, intervention rapide Somme.",
    neighborhoods: ["Centre-Ville", "Saint-Leu", "Henriville", "Saint-Acheul", "Etouvie"],
    nearbyTowns: ["Longueau", "Rivery", "Camon", "Dury", "Salouël"]
  },
  // ===== GRAND EST =====
  {
    name: "Strasbourg",
    slug: "strasbourg",
    department: "Bas-Rhin",
    departmentCode: "67",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "287 000",
    description: "HD Connect Strasbourg : solutions de sécurité sur mesure. Caméras de surveillance, systèmes d'alarme certifiés, contrôle d'accès. Intervention dans toute l'Alsace.",
    neighborhoods: ["Grande Île", "Neudorf", "Cronenbourg", "Hautepierre", "Koenigshoffen", "Robertsau"],
    nearbyTowns: ["Illkirch-Graffenstaden", "Schiltigheim", "Lingolsheim", "Bischheim", "Hoenheim", "Ostwald"]
  },
  {
    name: "Nancy",
    slug: "nancy",
    department: "Meurthe-et-Moselle",
    departmentCode: "54",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "105 000",
    description: "Installation sécurité Nancy par HD Connect. Vidéosurveillance, alarmes, domotique pour particuliers et entreprises lorraines. Devis gratuit.",
    neighborhoods: ["Ville-Vieille", "Stanislas", "Saurupt", "Mon Désert", "Trois Maisons"],
    nearbyTowns: ["Vandœuvre-lès-Nancy", "Laxou", "Villers-lès-Nancy", "Maxéville", "Jarville-la-Malgrange"]
  },
  {
    name: "Metz",
    slug: "metz",
    department: "Moselle",
    departmentCode: "57",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "118 000",
    description: "HD Connect Metz : expert sécurité électronique Moselle. Caméras, alarmes, contrôle d'accès pour tous types de bâtiments.",
    neighborhoods: ["Centre Pompidou", "Queuleu", "Sablon", "Plantières", "Borny"],
    nearbyTowns: ["Woippy", "Montigny-lès-Metz", "Moulins-lès-Metz", "Le Ban-Saint-Martin", "Longeville-lès-Metz"]
  },
  // ===== PAYS DE LA LOIRE =====
  {
    name: "Nantes",
    slug: "nantes",
    department: "Loire-Atlantique",
    departmentCode: "44",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "320 000",
    description: "HD Connect à Nantes : installation et maintenance de systèmes de sécurité. Vidéosurveillance, alarmes anti-intrusion, domotique. Devis gratuit pour particuliers et professionnels.",
    neighborhoods: ["Centre-Ville", "Île de Nantes", "Doulon", "Chantenay", "Erdre", "Zola"],
    nearbyTowns: ["Saint-Herblain", "Rezé", "Orvault", "Saint-Nazaire", "Carquefou", "Vertou"]
  },
  {
    name: "Angers",
    slug: "angers",
    department: "Maine-et-Loire",
    departmentCode: "49",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "155 000",
    description: "Sécurité électronique Angers par HD Connect. Vidéosurveillance, alarmes, contrôle d'accès pour résidences et entreprises du Maine-et-Loire.",
    neighborhoods: ["Centre-Ville", "La Doutre", "Belle-Beille", "Monplaisir", "Lac de Maine"],
    nearbyTowns: ["Avrillé", "Trélazé", "Beaucouzé", "Bouchemaine", "Saint-Barthélemy-d'Anjou"]
  },
  // ===== BRETAGNE =====
  {
    name: "Rennes",
    slug: "rennes",
    department: "Ille-et-Vilaine",
    departmentCode: "35",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "222 000",
    description: "HD Connect Rennes : expert sécurité électronique Bretagne. Vidéosurveillance, alarmes, contrôle d'accès pour entreprises tech et particuliers.",
    neighborhoods: ["Centre Historique", "Villejean", "Beaulieu", "Saint-Martin", "Thabor"],
    nearbyTowns: ["Cesson-Sévigné", "Saint-Jacques-de-la-Lande", "Bruz", "Chantepie", "Pacé"]
  },
  {
    name: "Brest",
    slug: "brest",
    department: "Finistère",
    departmentCode: "29",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "139 000",
    description: "Installation sécurité Brest par HD Connect. Protection sites portuaires, entreprises, résidences. Vidéosurveillance adaptée environnement marin.",
    neighborhoods: ["Centre-Ville", "Recouvrance", "Saint-Marc", "Lambézellec", "Saint-Pierre"],
    nearbyTowns: ["Guipavas", "Plouzané", "Le Relecq-Kerhuon", "Plougastel-Daoulas", "Gouesnou"]
  },
  // ===== NORMANDIE =====
  {
    name: "Rouen",
    slug: "rouen",
    department: "Seine-Maritime",
    departmentCode: "76",
    region: "Normandie",
    regionSlug: "normandie",
    population: "113 000",
    description: "HD Connect Rouen : sécurité électronique Seine-Maritime. Vidéosurveillance, alarmes, contrôle d'accès pour industries et commerces normands.",
    neighborhoods: ["Centre Historique", "Saint-Sever", "Grammont", "Martainville", "Mont-Saint-Aignan"],
    nearbyTowns: ["Mont-Saint-Aignan", "Bois-Guillaume", "Sotteville-lès-Rouen", "Petit-Quevilly", "Grand-Quevilly"]
  },
  {
    name: "Le Havre",
    slug: "le-havre",
    department: "Seine-Maritime",
    departmentCode: "76",
    region: "Normandie",
    regionSlug: "normandie",
    population: "170 000",
    description: "Expert sécurité Le Havre. HD Connect protège zones portuaires, entrepôts, commerces. Vidéosurveillance industrielle, alarmes certifiées.",
    neighborhoods: ["Centre Reconstruit", "Sainte-Adresse", "Sanvic", "Caucriauville", "Danton"],
    nearbyTowns: ["Sainte-Adresse", "Harfleur", "Gonfreville-l'Orcher", "Montivilliers", "Octeville-sur-Mer"]
  },
  // ===== BOURGOGNE-FRANCHE-COMTÉ =====
  {
    name: "Dijon",
    slug: "dijon",
    department: "Côte-d'Or",
    departmentCode: "21",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "158 000",
    description: "HD Connect Dijon : installation sécurité Bourgogne. Vidéosurveillance, alarmes pour domaines viticoles, commerces, résidences.",
    neighborhoods: ["Centre Historique", "Toison d'Or", "Fontaine-d'Ouche", "Grésilles", "Montchapet"],
    nearbyTowns: ["Chenôve", "Talant", "Quetigny", "Chevigny-Saint-Sauveur", "Longvic"]
  },
  // ===== CENTRE-VAL DE LOIRE =====
  {
    name: "Orléans",
    slug: "orleans",
    department: "Loiret",
    departmentCode: "45",
    region: "Centre-Val de Loire",
    regionSlug: "centre-val-de-loire",
    population: "116 000",
    description: "Sécurité électronique Orléans par HD Connect. Vidéosurveillance, alarmes, contrôle d'accès pour entreprises logistiques et particuliers.",
    neighborhoods: ["Centre-Ville", "Source", "Argonne", "Saint-Marceau", "Madeleine"],
    nearbyTowns: ["Olivet", "Saint-Jean-de-Braye", "Fleury-les-Aubrais", "Saran", "Saint-Jean-de-la-Ruelle"]
  },
  {
    name: "Tours",
    slug: "tours",
    department: "Indre-et-Loire",
    departmentCode: "37",
    region: "Centre-Val de Loire",
    regionSlug: "centre-val-de-loire",
    population: "136 000",
    description: "HD Connect Tours : expert sécurité Val de Loire. Protection châteaux, résidences, commerces. Vidéosurveillance discrète, alarmes.",
    neighborhoods: ["Vieux Tours", "Grammont", "Sanitas", "Deux-Lions", "Rabelais"],
    nearbyTowns: ["Saint-Cyr-sur-Loire", "Saint-Pierre-des-Corps", "Joué-lès-Tours", "La Riche", "Chambray-lès-Tours"]
  }
];

export const getCityBySlug = (slug: string): CityData | undefined => {
  return citiesData.find(city => city.slug === slug);
};

export const getCitiesByRegion = (region: string): CityData[] => {
  return citiesData.filter(city => city.region === region);
};

export const getCitiesByRegionSlug = (regionSlug: string): CityData[] => {
  return citiesData.filter(city => city.regionSlug === regionSlug);
};

export const getCitiesByDepartment = (departmentCode: string): CityData[] => {
  return citiesData.filter(city => city.departmentCode === departmentCode);
};

export const getAllCitySlugs = (): string[] => {
  return citiesData.map(city => city.slug);
};
