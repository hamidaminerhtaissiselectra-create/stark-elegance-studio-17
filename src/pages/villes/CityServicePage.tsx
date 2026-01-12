import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import LocalServiceLinks from "@/components/LocalServiceLinks";
import MiniTestimonials from "@/components/MiniTestimonials";
import WhyHDConnect from "@/components/WhyHDConnect";
import {
  MapPin,
  Phone,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Camera,
  ShieldAlert,
  Lock,
  Home,
  Wifi,
  Wrench,
  Award,
  Zap,
  Users,
  Building2,
  Radio,
  DoorOpen,
  Truck,
  Settings,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CityData, getCitiesByRegion } from "@/data/citiesData";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";


interface CityServicePageProps {
  city: CityData;
}

const CityServicePage = ({ city }: CityServicePageProps) => {
  const { phoneNumber, callUrl } = usePhoneCall();
  const { scrollToSection } = useSmoothScroll();


  // Récupérer les villes voisines de la même région
  const regionCities = getCitiesByRegion(city.region).filter(c => c.slug !== city.slug).slice(0, 4);

  useSEO({
    title: `Installation Sécurité ${city.name} (${city.departmentCode}) | Vidéosurveillance, Alarme, Domotique | HD Connect`,
    description: `Expert sécurité ${city.name} : vidéosurveillance HD, alarmes certifiées, contrôle d'accès, domotique, réseau, maintenance 24/7. Intervention rapide ${city.department}. Devis gratuit.`,
    keywords: `sécurité ${city.name}, vidéosurveillance ${city.name}, alarme ${city.name}, domotique ${city.name}, contrôle accès ${city.name}, installation caméra ${city.departmentCode}, HD Connect ${city.region}`,
    canonicalUrl: `https://hdconnect.fr/villes/${city.slug}`,
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
    { name: city.region, url: `/zones-intervention/${city.regionSlug}` },
    { name: city.name, url: `/villes/${city.slug}` },
  ];

  // Tous les services disponibles (multi-services)
  const services = [
    {
      icon: Camera,
      title: "Vidéosurveillance",
      description: `Installation de caméras HD et 4K à ${city.name}. Surveillance intérieure et extérieure, accès mobile 24/7, enregistrement cloud.`,
      link: "/services/videosurveillance",
      features: ["Caméras HD/4K", "Vision nocturne", "Accès smartphone", "Stockage cloud"]
    },
    {
      icon: ShieldAlert,
      title: "Systèmes d'Alarme",
      description: `Alarmes anti-intrusion certifiées NF&A2P à ${city.name}. Télésurveillance 24/7 et intervention rapide.`,
      link: "/services/alarme",
      features: ["Certification NF&A2P", "Télésurveillance", "Détection périmétrique", "Sirène 110dB"]
    },
    {
      icon: Lock,
      title: "Contrôle d'Accès",
      description: `Solutions de contrôle d'accès professionnelles à ${city.name}. Badges, biométrie, interphones vidéo.`,
      link: "/services/controle-acces",
      features: ["Badges RFID", "Biométrie", "Interphones vidéo", "Gestion à distance"]
    },
    {
      icon: Home,
      title: "Domotique",
      description: `Maison intelligente à ${city.name}. Automatisation sécurité, éclairage, chauffage. Contrôle smartphone.`,
      link: "/services/domotique",
      features: ["Éclairage connecté", "Thermostat intelligent", "Volets automatiques", "Scénarios personnalisés"]
    },
    {
      icon: Wifi,
      title: "Réseau & Câblage",
      description: `Infrastructure réseau professionnelle à ${city.name}. WiFi 6E, câblage Cat 6A, Firewall entreprise.`,
      link: "/services/reseau",
      features: ["WiFi 6E mesh", "Câblage Cat 6A", "Switch manageable", "Firewall UTM"]
    },
    {
      icon: Wrench,
      title: "Maintenance 24/7",
      description: `Maintenance et dépannage express à ${city.name}. Contrats préventifs, intervention rapide garantie.`,
      link: "/services/maintenance",
      features: ["Contrats annuels", "Intervention 24h", "Pièces garanties", "Support téléphonique"]
    },
    {
      icon: Radio,
      title: "Antenne & Satellite",
      description: `Installation antenne TNT et parabole satellite à ${city.name}. Réception optimale garantie.`,
      link: "/services/antenne-satellite",
      features: ["TNT HD", "Satellite", "Antenne collective", "Amplificateurs"]
    },
    {
      icon: DoorOpen,
      title: "Portails & Parking",
      description: `Motorisation portails et barrières à ${city.name}. Contrôle d'accès parking, télécommandes.`,
      link: "/services/portails-parking",
      features: ["Portails coulissants", "Barrières levantes", "Télécommandes", "Photocellules"]
    }
  ];

  // Prestations transversales
  const prestations = [
    {
      icon: Package,
      title: "Installation",
      description: `Installation professionnelle de tous vos équipements de sécurité à ${city.name}.`,
      link: "/services/installation"
    },
    {
      icon: Settings,
      title: "Dépannage",
      description: `Intervention rapide pour dépannage et réparation à ${city.name}.`,
      link: "/services/depannage"
    },
    {
      icon: Truck,
      title: "Location",
      description: `Location de matériel de sécurité pour événements et chantiers à ${city.name}.`,
      link: "/services/location"
    }
  ];

  const advantages = [
    { icon: Clock, title: "Intervention 24-48h", description: `Nos techniciens interviennent sous 24 à 48h à ${city.name} et dans tout le ${city.department}.` },
    { icon: Award, title: "Expertise Certifiée", description: "Techniciens formés et certifiés par les plus grandes marques du secteur de la sécurité." },
    { icon: Zap, title: "Devis Gratuit", description: `Étude personnalisée et devis détaillé sous 24h pour votre projet à ${city.name}.` },
    { icon: Users, title: "Support 24/7", description: "Interlocuteur unique et support technique disponible 24/7 par téléphone." }
  ];

  const faqItems = [
    {
      question: `Quels services HD Connect propose-t-il à ${city.name} ?`,
      answer: `HD Connect propose l'ensemble de ses services à ${city.name} : vidéosurveillance HD/4K, alarmes certifiées NF&A2P, contrôle d'accès (badges, biométrie), domotique intelligente, réseau et câblage, maintenance 24/7, antennes et satellites, ainsi que motorisation de portails et parkings.`
    },
    {
      question: `HD Connect intervient-il rapidement à ${city.name} ?`,
      answer: `Oui, HD Connect intervient régulièrement à ${city.name} et dans l'ensemble du ${city.department}. Nos délais d'intervention sont de 24 à 48 heures pour les installations programmées. Pour les urgences, nous pouvons intervenir le jour même selon les disponibilités.`
    },
    {
      question: `Les frais de déplacement sont-ils inclus pour ${city.name} ?`,
      answer: `Les frais de déplacement pour ${city.name} sont généralement inclus dans nos devis. Pour les projets importants, le déplacement est toujours gratuit. Nous vous communiquons un devis transparent avant toute intervention.`
    },
    {
      question: `Quels quartiers de ${city.name} couvrez-vous ?`,
      answer: `Nous intervenons dans tous les quartiers de ${city.name}${city.neighborhoods ? ` : ${city.neighborhoods.slice(0, 6).join(", ")}...` : "."} ainsi que dans les communes environnantes${city.nearbyTowns ? ` comme ${city.nearbyTowns.slice(0, 4).join(", ")}.` : "."}`
    },
    {
      question: `Proposez-vous des contrats de maintenance à ${city.name} ?`,
      answer: `Oui, nous proposons des contrats de maintenance annuels pour les clients de ${city.name}. Ces contrats incluent des visites préventives régulières, un support prioritaire et des tarifs préférentiels sur les interventions.`
    },
    {
      question: `Peut-on louer du matériel de sécurité à ${city.name} ?`,
      answer: `Oui, HD Connect propose la location de matériel de sécurité à ${city.name} pour vos événements, chantiers ou besoins temporaires : caméras mobiles, alarmes de chantier, contrôle d'accès événementiel. Contactez-nous pour un devis.`
    }
  ];

  // JSON-LD pour la page ville (multi-services)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `HD Connect - Sécurité ${city.name}`,
    "image": "https://hdconnect.fr/logo.png",
    "url": `https://hdconnect.fr/villes/${city.slug}`,
    "telephone": "+33 6 27 13 53 04",
    "email": "contact@hdconnect.fr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.region,
      "addressCountry": "FR"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    },
    "serviceType": [
      "Installation vidéosurveillance",
      "Installation alarme",
      "Contrôle d'accès",
      "Domotique",
      "Réseau et câblage",
      "Maintenance sécurité",
      "Antenne satellite",
      "Portails et parking"
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>{city.department} ({city.departmentCode}) • {city.region}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Sécurité & Domotique à <span className="text-primary">{city.name}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {city.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8"
                onClick={() => scrollToSection("quote", { mode: "quote" })}
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 bg-primary/20 backdrop-blur-sm border-2 border-primary/50 hover:bg-primary/30 text-primary transition-all"
                asChild
              >
                <a href={callUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-5 h-5" />
                  {phoneNumber}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tous Nos Services à {city.name}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                HD Connect propose une gamme complète de solutions de sécurité et domotique pour les particuliers et professionnels de {city.name}.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 50}>
                <Link to={service.link}>
                  <Card className="hover-lift h-full border-border group cursor-pointer transition-all hover:border-primary/50">
                    <CardContent className="p-5">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{service.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 2).map((feature, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 bg-secondary rounded-full text-muted-foreground">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Prestations Transversales */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Nos Prestations à {city.name}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {prestations.map((prestation, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <Link to={prestation.link}>
                  <Card className="hover-lift h-full border-border group cursor-pointer transition-all hover:border-primary/50">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                        <prestation.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{prestation.title}</h3>
                      <p className="text-muted-foreground text-sm">{prestation.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi HD Connect - orienté problèmes */}
      <WhyHDConnect cityName={city.name} />

      {/* Mini Témoignages */}
      <MiniTestimonials location={city.name} />

      {/* Zone Coverage + Lien Région */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Couverture Complète à {city.name} et Environs
            </h2>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              Nos techniciens interviennent dans toute la ville de {city.name} ainsi que dans les communes environnantes
              {city.nearbyTowns && city.nearbyTowns.length > 0 && (
                <span> : <strong>{city.nearbyTowns.join(", ")}</strong></span>
              )}. 
            </p>
            
            {city.neighborhoods && city.neighborhoods.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {city.neighborhoods.map((neighborhood, index) => (
                  <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                    {neighborhood}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg px-8"
                asChild
              >
                <a href={callUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-5 h-5" />
                  {phoneNumber}
                </a>
              </Button>
              <Button 
                size="lg" 
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-primary text-lg px-8 transition-all"
                asChild
              >
                <Link to={`/zones-intervention/${city.regionSlug}`}>
                  Voir toute la région {city.region}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Villes Voisines */}
      {regionCities.length > 0 && (
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Nous intervenons aussi à proximité
                </h2>
              </div>
            </AnimatedSection>

            <div className="flex flex-wrap justify-center gap-4">
              {regionCities.map((nearbyCity) => (
                <Link 
                  key={nearbyCity.slug}
                  to={`/villes/${nearbyCity.slug}`}
                  className="px-4 py-2 bg-card border border-border rounded-full hover:border-primary transition-colors"
                >
                  <span className="font-medium text-foreground">{nearbyCity.name}</span>
                  <span className="text-muted-foreground text-sm ml-1">({nearbyCity.departmentCode})</span>
                </Link>
              ))}
              <Link 
                to={`/zones-intervention/${city.regionSlug}`}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors"
              >
                Voir toutes les villes →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Questions Fréquentes - {city.name}
              </h2>
            </div>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Prêt à Sécuriser Votre Propriété à {city.name} ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous dès maintenant pour une étude personnalisée et un devis gratuit. 
              Nos experts sont à votre disposition pour répondre à toutes vos questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8"
                onClick={() => scrollToSection("quote", { mode: "quote" })}
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 bg-primary/20 backdrop-blur-sm border-2 border-primary/50 hover:bg-primary/30 text-primary transition-all"
                asChild
              >
                <a href={callUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-5 h-5" />
                  {phoneNumber}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Maillage interne local */}
      <LocalServiceLinks 
        cityName={city.name} 
        regionName={city.region} 
        regionSlug={city.regionSlug} 
      />
      <Footer />
    </div>
  );
};

export default CityServicePage;
