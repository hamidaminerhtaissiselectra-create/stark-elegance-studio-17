import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Radio, Tv, Satellite, Signal, Antenna, MapPin, HardHat, Settings, CheckCircle, Zap, Users, Award, Phone, MessageSquare, Building, Store, Factory, Home as HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServicePrestations from "@/components/ServicePrestations";
import ServiceSchema from "@/components/SEO/ServiceSchema";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import ServiceLinks from "@/components/ServiceLinks";
import { useSEO } from "@/hooks/useSEO";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceHero from "@/components/ServiceHero";
import ContentSection from "@/components/ContentSection";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceShowcase from "@/components/ServiceShowcase";
import ImageBreak from "@/components/ImageBreak";
import RegionCoverage from "@/components/RegionCoverage";
import CTAIntermediate from "@/components/CTAIntermediate";
import CTAFloating from "@/components/CTAFloating";
import LightStatsSection from "@/components/LightStatsSection";
import UseCasesSection from "@/components/UseCasesSection";
import ColoredAdvantagesSection from "@/components/ColoredAdvantagesSection";
import ColoredProcessSteps from "@/components/ColoredProcessSteps";
import TechnologiesGaranties from "@/components/TechnologiesGaranties";
import GarantiesSection from "@/components/GarantiesSection";
import BlogCTASection from "@/components/BlogCTASection";
import heroAntenneImage from "@/assets/hero-antenne-satellite.jpg";
import antenneInstallImage from "@/assets/antenne-satellite-toit.jpg";
import antenneTntMesureImage from "@/assets/antenne-tnt-immeuble.jpg";
import antenneCollectiveImage from "@/assets/antenne-collective.jpg";
import antenneTntInstallImage from "@/assets/antenne-tnt-install.jpg";
import antenneMaisonImage from "@/assets/antenne-maison-particulier.jpg";
// Gallery-specific images (unique to ServiceShowcase)
import galleryAntenneParabole from "@/assets/gallery-antenne-parabole.jpg";
import galleryAntenneTnt from "@/assets/gallery-antenne-tnt.jpg";
import galleryAntenneTech from "@/assets/gallery-antenne-tech.jpg";

const AntenneSatellite = () => {
  const { antenneSatellite } = content.pageServices;
  const contactInfo = content.company.contact;
  const { scrollToSection } = useSmoothScroll();

  useSEO({
    title: "TV pixelisée ou sans signal ? Installation antenne TNT & satellite | HD Connect",
    description: "Retrouvez une image parfaite ! Installation antenne TNT, parabole satellite, antenne collective. Réception garantie même en zone difficile. Devis gratuit.",
    keywords: "antenne TNT, parabole satellite, installation antenne, réception TV, antenne collective, amplificateur, HD Connect",
    canonicalUrl: "https://hdconnect.fr/services/antenne-satellite",
  });

  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Antenne & Satellite", url: "/services/antenne-satellite" },
  ];

  const faqItems = antenneSatellite.faq || [];

  const features = [
    { icon: Antenna, title: "Antennes TNT HD Performantes", description: "Installation d'antennes râteaux optimisées pour une réception parfaite de toutes les chaînes gratuites de la TNT en haute définition, même en zones difficiles." },
    { icon: Satellite, title: "Paraboles Satellite Orientées", description: "Pose et orientation précise de paraboles pour Astra, Hotbird et autres satellites, avec accès à des centaines de chaînes internationales et configuration multi-satellites." },
    { icon: Tv, title: "Antennes Collectives Complètes", description: "Solutions complètes pour immeubles et copropriétés : tête d'amplification, répartiteurs, câblage vers tous les logements, maintenance annuelle incluse." },
    { icon: Signal, title: "Dépannage et Réglage Express", description: "Intervention rapide pour résoudre les problèmes de réception : pixelisation, perte de signal, chaînes manquantes, mauvaise orientation ou câblage défectueux." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Diagnostic Gratuit", description: "Évaluation complète de la qualité de réception à votre adresse, analyse de l'environnement (obstacles, interférences) et identification de la meilleure solution technique." },
    { icon: HardHat, title: "2. Installation Sécurisée", description: "Pose professionnelle de l'antenne ou parabole, fixation sécurisée sur toiture ou façade, passage de câbles discret et conforme aux normes de sécurité." },
    { icon: Settings, title: "3. Réglage et Optimisation", description: "Orientation précise de l'antenne/parabole, mesure du signal avec testeur professionnel, configuration de votre téléviseur et test de toutes les chaînes." },
    { icon: CheckCircle, title: "4. Garantie et Support", description: "Garantie 1 an sur l'installation, intervention rapide en cas de dérèglement ou problème de réception. Contrats de maintenance annuels disponibles." },
  ];

  const useCases = [
    { 
      icon: HomeIcon, 
      title: "Résidences Individuelles", 
      description: "Installation d'antenne TNT ou parabole satellite pour votre maison. Réception optimale de toutes les chaînes, orientation précise et installation discrète.",
      features: ["Antenne TNT HD", "Parabole satellite", "Réception optimale", "Garantie 1 an"]
    },
    { 
      icon: Building, 
      title: "Immeubles et Copropriétés", 
      description: "Antennes collectives pour tous les logements. Tête d'amplification, répartiteurs, câblage centralisé et maintenance annuelle incluse.",
      features: ["Antenne collective", "Tête amplification", "Répartiteurs", "Maintenance annuelle"]
    },
    { 
      icon: Store, 
      title: "Commerces et Restaurants", 
      description: "Installations robustes pour affichage de chaînes TV. Paraboles multi-satellites, accès à chaînes internationales et dépannage prioritaire.",
      features: ["Multi-satellites", "Chaînes internationales", "Installation robuste", "Dépannage prioritaire"]
    },
    { 
      icon: Factory, 
      title: "Hôtels et Établissements", 
      description: "Solutions complètes pour distribution de chaînes TV dans les chambres. Gestion centralisée, accès à chaînes premium et support technique 24/7.",
      features: ["Distribution centralisée", "Chaînes premium", "Gestion multi-zones", "Support 24/7"]
    },
  ];

  const advantages = [
    { icon: Award, title: "Expertise Reconnue", description: "Techniciens certifiés avec plus de 10 ans d'expérience en installation d'antennes et de paraboles satellites." },
    { icon: Zap, title: "Installation Express", description: "Intervention rapide et professionnelle. Diagnostic gratuit et installation complète en une journée." },
    { icon: Signal, title: "Réception Optimale", description: "Orientation précise avec testeur professionnel. Garantie d'une réception parfaite de tous les signaux disponibles." },
    { icon: Phone, title: "Support Réactif", description: "Dépannage rapide en cas de problème. Contrats de maintenance annuels pour une tranquillité d'esprit." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-20 left-0 w-[600px] h-[600px] bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-orange-500/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.3, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <ServiceSchema
        serviceName="Installation Antenne TNT et Parabole Satellite"
        serviceDescription="Expert en installation d'antennes TNT et paraboles satellite pour particuliers et professionnels. Réception optimale, antennes collectives, dépannage express. Intervention sur toute la France."
        serviceUrl="/services/antenne-satellite"
        serviceImage="/assets/service-antenne.jpg"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-0 relative z-10">
        {/* SERVICE HERO WITH BACKGROUND IMAGE */}
        <ServiceHero
          title="Installation Antenne TNT et Parabole Satellite"
          subtitle="Expert Antenne & Satellite"
          description="Recevez toutes les chaînes TV en haute définition. HD Connect installe des antennes TNT performantes et des paraboles satellites avec orientation précise pour une réception optimale, même en zones difficiles."
          backgroundImage={heroAntenneImage}
          icon={<Satellite className="w-4 h-4" />}
          badgeText="Expert Antenne & Satellite"
          accentColor="antenne"
        />

        

        {/* SECTION DESCRIPTION EXPERTE - 50/50 */}
        <ContentSection
          title="Pourquoi Installer une Antenne Performante ?"
          badge="Réception Optimale"
          badgeIcon={<Satellite className="w-4 h-4" />}
          imagePosition="right"
          image={antenneInstallImage}
          imageAlt="Technicien installant une parabole satellite sur un toit"
          content={
            <>
              <p>
                La qualité de réception TV dépend directement de la qualité de l'antenne et de son orientation. Une mauvaise antenne ou mal orientée entraîne des problèmes de pixelisation, de perte de signal ou de chaînes manquantes. Ces problèmes ne peuvent pas être résolus par le téléviseur ou le décodeur.
              </p>
              <p>
                Chez HD Connect, nous installons des <strong>antennes TNT haute performance</strong> optimisées pour votre localisation géographique. Nos techniciens utilisent des testeurs professionnels pour mesurer la qualité du signal et orienter précisément l'antenne.
              </p>
              <p>
                Pour les zones difficiles (zones montagneuses, zones urbaines denses, zones rurales éloignées), nous proposons des <strong>amplificateurs de signal</strong> et des <strong>antennes multi-directionnelles</strong> qui captent le signal de plusieurs relais TV simultanément.
              </p>
            </>
          }
          delay={0}
        />

        {/* SECTION FONCTIONNALITÉS */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Solutions de Réception TV Complètes
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="h-full"
                  >
                    <Card className="hover-lift h-full card-micro-interaction border-2 border-transparent hover:border-pink-500/20">
                      <CardHeader className="flex flex-row items-center space-x-4">
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION FONCTIONNEMENT DÉTAILLÉ */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Comment Fonctionne une Installation d'Antenne Optimale ?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Une installation d'antenne réussie repose sur plusieurs facteurs critiques : le choix du type d'antenne, l'orientation précise, la qualité du câblage et la configuration du décodeur.
                </p>
                <p>
                  <strong>Le choix de l'antenne dépend de votre localisation</strong>. En zone urbaine avec plusieurs relais TV à proximité, une antenne râteau classique suffit. En zone rurale ou en montagne, une antenne multi-directionnelle ou une parabole peut être nécessaire. Notre diagnostic gratuit évalue votre situation et recommande la meilleure solution.
                </p>
                <p>
                  <strong>L'orientation précise est cruciale</strong>. Nos techniciens utilisent un testeur de signal professionnel pour mesurer la qualité du signal en temps réel. Ils orientent l'antenne millimètre par millimètre jusqu'à obtenir le signal optimal. Une mauvaise orientation de quelques degrés peut entraîner une perte de signal importante.
                </p>
                <p>
                  <strong>Le câblage doit être de qualité</strong>. Un câble coaxial de mauvaise qualité ou endommagé peut perdre 30 à 50% du signal. Nous utilisons exclusivement du câble coaxial certifié et nous protégeons les connexions contre l'humidité et les interférences électromagnétiques.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA INTERMÉDIAIRE */}
        <CTAIntermediate 
          title="Optimisez votre réception TV"
          subtitle="Diagnostic gratuit et installation professionnelle de votre antenne ou parabole."
          phoneNumber={contactInfo.phoneMobile}
          variant="gradient"
          accentColor="antenne"
          showBenefits={true}
          urgencyText="Réception garantie ou remboursé"
        />

        {/* STATISTIQUES CLÉS - FOND CLAIR COMME ACCUEIL */}
        <LightStatsSection
          title="Installation Antenne en Chiffres"
          stats={[
            { value: "100%", label: "Réception garantie", description: "ou remboursement" },
            { value: "500+", label: "Chaînes accessibles", description: "TNT + Satellite" },
            { value: "1 an", label: "Garantie installation", description: "pièces et main d'œuvre" },
            { value: "48h", label: "Intervention rapide", description: "partout en France" },
          ]}
          variant="antenne"
        />

        {/* SECTION CAS D'USAGE - COMPOSANT AMÉLIORÉ */}
        <UseCasesSection
          title="Solutions d'Antenne Adaptées à Chaque Situation"
          subtitle="HD Connect propose des solutions complètes pour tous les types de réception TV, particuliers comme professionnels."
          useCases={useCases}
          accentColor="antenne"
        />

        {/* SECTION AVANTAGES HD CONNECT */}
        <ColoredAdvantagesSection
          title="Pourquoi Choisir HD Connect pour Votre Antenne ?"
          advantages={advantages}
          accentColor="antenne"
        />

        {/* SECTION ZONE GÉOGRAPHIQUE DYNAMIQUE */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Installation Antenne sur Toute la France
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                HD Connect intervient sur l'ensemble du territoire national pour l'installation de vos antennes TNT et paraboles satellite. Que vous soyez en <strong>Île-de-France</strong> (Paris, Versailles, Saint-Denis, Boulogne), dans le <strong>Nord</strong> (Lille, Valenciennes), le <strong>Sud</strong> (Marseille, Nice, Toulouse), l'<strong>Est</strong> (Lyon, Strasbourg) ou l'<strong>Ouest</strong> (Nantes, Bordeaux, Rennes), nos équipes se déplacent pour optimiser votre réception TV.
              </p>
              <div className="mt-6">
                <Link to="/zones-intervention">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Voir toutes nos zones d'intervention
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 2ème CTA ORANGE - BIEN ESPACÉ */}
        <CTAIntermediate 
          title="Prêt à améliorer votre réception TV ?"
          subtitle="Diagnostic gratuit et installation professionnelle de votre antenne."
          phoneNumber={contactInfo.phoneMobile}
          variant="accent"
          showBenefits={false}
        />

        {/* SECTION PROCESSUS D'INSTALLATION */}
        <ColoredProcessSteps
          title="Votre Installation Antenne en 4 Étapes"
          steps={processSteps}
          accentColor="antenne"
        />

        <ServicePrestations serviceName="Antenne Satellite" interventionMode={true} />

        {/* SECTION CTA DEVIS */}
        <section id="quote" className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="scale-in" className="max-w-3xl mx-auto text-center">
              <h2 className="section-title text-center mb-6">
                Demandez Votre Diagnostic Gratuit
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Recevez une proposition personnalisée sous 48h. Diagnostic technique gratuit, sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("quote", { mode: "quote" })}
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Formulaire de Devis en Ligne
                </Button>
                <a href={`tel:${contactInfo.phoneMobile.replace(/\s/g, '')}`}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                    <Phone className="w-4 h-4 mr-2" />
                    {contactInfo.phoneMobile}
                  </Button>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA FLOATING CONVERSION */}
        <CTAFloating serviceName="réception TV" />

        {/* SECTION TECHNOLOGIES & GARANTIES */}
        <TechnologiesGaranties variant="antenne" />

        {/* SECTION GARANTIES */}
        <GarantiesSection variant="compact" />

        {/* CTA BLOG CONTEXTUEL */}
        <BlogCTASection 
          categories={["conseils"]} 
          title="Guides Réception TV"
        />

        <ServiceLinks currentService="antenne-satellite" />

        {/* IMAGE BREAK */}
        <ImageBreak 
          image={antenneTntMesureImage} 
          alt="Technicien mesurant le signal antenne TNT"
          caption="Notre équipe installe vos antennes avec précision pour une réception optimale"
        />

        {/* SEO RÉGIONS FRANCE */}
        <RegionCoverage 
          serviceName="Antenne & Satellite"
          serviceSlug="antenne-satellite"
        />

        {/* GALERIE RÉALISATIONS */}
        <ServiceShowcase
          title="Nos Installations Antenne & Satellite"
          description="Découvrez nos réalisations récentes en installation d'antennes TNT et paraboles satellite"
          images={[
            { src: galleryAntenneParabole, alt: "Parabole satellite sur toit résidentiel" },
            { src: galleryAntenneTnt, alt: "Antenne TNT sur cheminée" },
            { src: galleryAntenneTech, alt: "Technicien réglage antenne satellite" }
          ]}
        />

        {/* SECTION FAQ EXPERTE ACCORDÉON */}
        <FAQAccordion 
          items={faqItems}
          title="Questions Fréquentes sur les Antennes"
        />
      </main>
      <Footer />
    </div>
  );
};

export default AntenneSatellite;
