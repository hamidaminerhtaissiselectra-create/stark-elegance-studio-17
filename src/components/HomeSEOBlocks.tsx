import { Shield, CheckCircle, MapPin, Award, Lock, Zap, Users, Building, Home, Factory, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/**
 * Blocs SEO pour la page d'accueil
 * Objectif: 1000-1200 mots au total sur la page d'accueil
 */

// Bloc 1: Mission HD Connect (150-200 mots)
export const MissionBlock = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="badge-primary mb-6 mx-auto">
          <Shield className="w-4 h-4" />
          <span>Notre Mission</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          HD Connect : Votre Partenaire Sécurité de Confiance
        </h2>
        <div className="prose prose-lg max-w-none text-muted-foreground text-center">
          <p>
            Depuis plus de 10 ans, HD Connect accompagne les particuliers et les professionnels dans la protection de leurs biens et de leurs proches. Notre mission est simple : rendre la sécurité électronique accessible, fiable et adaptée à chaque besoin spécifique.
          </p>
          <p>
            Nous croyons qu'une sécurité efficace repose sur trois piliers fondamentaux : des <strong>équipements de qualité</strong> issus des meilleures marques du marché, une <strong>installation professionnelle</strong> réalisée par des techniciens certifiés, et un <strong>service après-vente réactif</strong> disponible 24h/24. Cette philosophie nous a permis de fidéliser plus de 500 clients et de devenir une référence en Île-de-France et dans les grandes métropoles françaises.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Bloc 2: Nos Solutions de Sécurité (120-180 mots)
export const SolutionsBlock = () => {
  const solutions = [
    { icon: Lock, title: "Protection contre les intrusions", description: "Alarmes, vidéosurveillance et contrôle d'accès pour dissuader et détecter toute tentative d'effraction." },
    { icon: Zap, title: "Surveillance à distance 24/7", description: "Accédez à vos caméras et gérez vos systèmes depuis votre smartphone, où que vous soyez." },
    { icon: Users, title: "Gestion des accès", description: "Contrôlez qui entre et sort de vos locaux avec des badges, digicodes ou systèmes biométriques." },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Des Solutions de Sécurité Complètes et Intégrées
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            HD Connect propose une gamme complète de services de sécurité électronique, de l'étude initiale à la maintenance préventive, pour une protection sans faille de vos espaces.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className="text-center p-6 rounded-2xl bg-card border hover-lift">
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{solution.title}</h3>
                <p className="text-muted-foreground text-sm">{solution.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Bloc 3: Expertise et Conformité (100-150 mots)
export const ExpertiseBlock = () => {
  const certifications = [
    { label: "Techniciens certifiés", value: "100%" },
    { label: "Conformité RGPD", value: "Garantie" },
    { label: "Délai intervention", value: "< 48h" },
    { label: "Satisfaction client", value: "98%" },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Expertise Technique et Conformité Réglementaire
            </h2>
            <p className="text-muted-foreground">
              Tous nos systèmes sont installés dans le respect des normes en vigueur et des réglementations CNIL/RGPD. Nos techniciens sont formés en continu aux dernières technologies et certifiés par les plus grandes marques du secteur (Hikvision, Dahua, Axis, Ajax, Honeywell).
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-card border">
                <div className="text-2xl font-bold text-primary mb-1">{cert.value}</div>
                <div className="text-sm text-muted-foreground">{cert.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Bloc 4: Couverture Nationale par Zone (80-120 mots)
export const CoverageBlock = () => {
  const zones = [
    { name: "Île-de-France", cities: "Paris, Versailles, Boulogne, Saint-Denis" },
    { name: "Nord", cities: "Lille, Valenciennes, Dunkerque" },
    { name: "Sud", cities: "Marseille, Nice, Toulouse, Montpellier" },
    { name: "Est", cities: "Lyon, Strasbourg, Grenoble, Dijon" },
    { name: "Ouest", cities: "Nantes, Bordeaux, Rennes, Angers" },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Intervention sur Toute la France
          </h2>
          <p className="text-muted-foreground mb-8">
            HD Connect intervient dans toutes les grandes zones urbaines de France pour l'installation, le dépannage et la maintenance de vos systèmes de sécurité. Notre réseau de techniciens qualifiés nous permet de garantir des délais d'intervention rapides, où que vous soyez.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {zones.map((zone, index) => (
              <div key={index} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {zone.name}
              </div>
            ))}
          </div>
          <Link to="/zones-intervention">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Voir nos zones d'intervention détaillées
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Bloc combiné pour les clients (Particuliers/Professionnels)
export const ClientTypesBlock = () => {
  const clientTypes = [
    {
      icon: Home,
      title: "Particuliers",
      description: "Protégez votre maison, appartement ou résidence secondaire avec des systèmes de sécurité adaptés à votre mode de vie et à votre budget.",
      features: ["Vidéosurveillance domestique", "Alarme anti-intrusion", "Domotique sécurité"],
    },
    {
      icon: Building,
      title: "Professionnels",
      description: "Sécurisez vos bureaux, commerces, entrepôts ou sites industriels avec des solutions évolutives et conformes aux réglementations.",
      features: ["Contrôle d'accès multi-sites", "Télésurveillance 24/7", "Conformité RGPD"],
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Solutions pour Particuliers et Professionnels
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Que vous soyez un particulier soucieux de protéger votre famille ou un professionnel désireux de sécuriser vos locaux, HD Connect a la solution adaptée à vos besoins.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clientTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div key={index} className="p-8 rounded-2xl bg-card border hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{type.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
