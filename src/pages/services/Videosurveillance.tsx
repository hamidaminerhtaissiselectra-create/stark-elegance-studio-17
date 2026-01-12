import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Camera, Shield, Smartphone, Cloud, Eye, Clock, CheckCircle, Zap, HardHat, Settings, MapPin, Building, Home as HomeIcon, Factory, Store, Video, Server, Wifi, Lock, Users, Award, Phone, MessageSquare, AlertTriangle, TrendingUp, FileCheck, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServicePrestations from "@/components/ServicePrestations";
import ServiceSchema from "@/components/SEO/ServiceSchema";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import ServiceLinks from "@/components/ServiceLinks";
import { useSEO } from "@/hooks/useSEO";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
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
import heroVideoImage from "@/assets/hero-videosurveillance.jpg";
import videoInstallImage from "@/assets/vs-install-facade.jpg";
import vsMonitoringImage from "@/assets/vs-monitoring-center.jpg";
import vsInstallOutdoorImage from "@/assets/vs-installation-outdoor.jpg";
import cameraMaisonImage from "@/assets/camera-maison-particulier.jpg";
// Gallery-specific images (unique to ServiceShowcase)
import galleryVsPtzCamera from "@/assets/gallery-vs-ptz-camera.jpg";
import galleryVsControlRoom from "@/assets/gallery-vs-control-room.jpg";
import galleryVsBulletOutdoor from "@/assets/gallery-vs-bullet-outdoor.jpg";

const Videosurveillance = () => {
  const { videosurveillance } = content.pageServices;
  const contactInfo = content.company.contact;
  const { scrollToSection } = useSmoothScroll();

  useSEO({
    title: "Peur des cambriolages ? Installation Vidéosurveillance HD/4K | HD Connect",
    description: "Protégez votre maison ou commerce avec nos caméras HD/4K. Vision nocturne, accès mobile 24/7, IA intégrée. Devis gratuit sous 24h, intervention rapide partout en France.",
    keywords: "vidéosurveillance, caméra surveillance, installation caméra, CCTV, caméra IP, NVR, DVR, HD Connect, sécurité vidéo, protection cambriolage",
    canonicalUrl: "https://hdconnect.fr/services/videosurveillance",
  });

  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Vidéosurveillance", url: "/services/videosurveillance" },
  ];

  const faqItems = videosurveillance.faq || [];

  const features = [
    { icon: Camera, title: "Caméras IP et 4K Ultra HD", description: "Résolution exceptionnelle jusqu'à 8 mégapixels pour une identification précise des visages et plaques d'immatriculation, même en conditions de faible luminosité avec technologie Starlight." },
    { icon: Eye, title: "Analyse Vidéo Intelligente (IA)", description: "Détection de mouvement avancée, franchissement de ligne virtuelle, comptage de personnes et reconnaissance faciale pour des alertes proactives et une sécurité renforcée." },
    { icon: Smartphone, title: "Accès Mobile Sécurisé 24/7", description: "Consultez vos flux en direct et enregistrements depuis votre smartphone iOS/Android ou navigateur web, où que vous soyez dans le monde, avec notifications push instantanées." },
    { icon: Cloud, title: "Stockage Hybride Redondant", description: "Enregistrement local NVR/DVR haute capacité avec sauvegarde cloud optionnelle. Conservation des images de 15 à 90 jours selon vos besoins réglementaires." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Étude de Site Gratuite", description: "Nos experts se déplacent gratuitement pour évaluer vos besoins spécifiques, analyser les points de vulnérabilité et définir le positionnement optimal des caméras." },
    { icon: HardHat, title: "2. Installation Professionnelle", description: "Installation rapide et soignée par nos techniciens certifiés. Câblage discret, configuration réseau sécurisée et mise en service complète sans perturber votre activité." },
    { icon: Settings, title: "3. Configuration et Formation", description: "Paramétrage personnalisé de votre système (zones de détection, alertes, accès distants) et formation complète de vos équipes à l'utilisation de l'interface." },
    { icon: CheckCircle, title: "4. Maintenance et Support 24/7", description: "Contrat de maintenance préventive annuelle et support technique disponible 24h/24, 7j/7 pour une tranquillité d'esprit totale et une durabilité maximale." },
  ];

  const useCases = [
    { 
      icon: HomeIcon, 
      title: "Maisons et Appartements", 
      description: "Protection de votre domicile contre les cambriolages avec caméras extérieures dissuasives et intérieures discrètes. Surveillance de vos enfants, personnes âgées ou animaux à distance.",
      features: ["Caméras WiFi sans fil", "Vision nocturne couleur", "Détection de colis", "Alertes sur smartphone"]
    },
    { 
      icon: Building, 
      title: "Bureaux et Entreprises", 
      description: "Sécurisation de vos locaux professionnels, salles serveurs et espaces sensibles. Contrôle des accès employés et visiteurs, surveillance des parkings et zones de stockage.",
      features: ["Multi-sites centralisés", "Analyse comportementale", "Intégration contrôle d'accès", "Exports pour la justice"]
    },
    { 
      icon: Store, 
      title: "Commerces et Retail", 
      description: "Protection contre le vol à l'étalage, surveillance des caisses et des réserves. Comptage de fréquentation et analyse des flux clients pour optimiser votre agencement.",
      features: ["Caméras anti-vol HD", "Comptage clients", "Heat mapping", "Enregistrement audio"]
    },
    { 
      icon: Factory, 
      title: "Sites Industriels et Logistiques", 
      description: "Surveillance périmétrique de grandes superficies avec caméras PTZ longue portée. Contrôle des zones de chargement et détection d'intrusion périmétrique.",
      features: ["Caméras thermiques", "Détection périmétrique", "Supervision 24/7", "Intégration télésurveillance"]
    },
  ];

  // Statistiques et chiffres clés pour renforcer la crédibilité
  const keyStats = [
    { value: "-60%", label: "de cambriolages", description: "dans les zones équipées de caméras" },
    { value: "4K", label: "Ultra HD", description: "résolution maximale des caméras" },
    { value: "90j", label: "de stockage", description: "capacité d'enregistrement" },
    { value: "24/7", label: "Accès mobile", description: "surveillance depuis votre smartphone" },
  ];


  const advantages = [
    { icon: Award, title: "Expertise Certifiée", description: "Plus de 10 ans d'expérience et techniciens certifiés par les plus grandes marques (Hikvision, Dahua, Axis, Hanwha)." },
    { icon: Zap, title: "Intervention Rapide", description: "Étude gratuite sous 48h et installation express. Dépannage d'urgence disponible 24h/24 en Île-de-France." },
    { icon: Lock, title: "Conformité Garantie", description: "Accompagnement complet pour la mise en conformité RGPD et CNIL : panneaux d'information, registres, durées de conservation." },
    { icon: Users, title: "Support Dédié", description: "Interlocuteur unique du devis à la maintenance. Support technique réactif par téléphone, email ou intervention sur site." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-20 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-primary/5 to-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.3, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <ServiceSchema
        serviceName="Installation Vidéosurveillance Professionnelle"
        serviceDescription="Expert en installation de systèmes de vidéosurveillance HD et 4K pour particuliers et professionnels. Caméras IP, NVR, accès mobile, analyse vidéo intelligente. Intervention sur toute la France."
        serviceUrl="/services/videosurveillance"
        serviceImage="/assets/service-camera.jpg"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-0 relative z-10">
        {/* SERVICE HERO WITH BACKGROUND IMAGE */}
        <ServiceHero
          title="Installation Vidéosurveillance Professionnelle HD & 4K"
          subtitle="Expert Vidéosurveillance"
          description="Protégez vos biens et vos proches avec des systèmes de vidéosurveillance haute définition. HD Connect installe, configure et maintient vos caméras de sécurité pour une surveillance efficace 24h/24, accessible depuis votre smartphone."
          backgroundImage={heroVideoImage}
          icon={<Camera className="w-4 h-4" />}
          badgeText="Expert Vidéosurveillance"
          accentColor="video"
        />

        

        {/* SECTION DESCRIPTION EXPERTE - 50/50 */}
        <ContentSection
          title="Pourquoi Investir dans une Vidéosurveillance Professionnelle ?"
          badge="Expertise Métier"
          badgeIcon={<Camera className="w-4 h-4" />}
          imagePosition="right"
          image={videoInstallImage}
          imageAlt="Technicien installant une caméra de vidéosurveillance professionnelle"
          content={
            <>
              <p>
                La vidéosurveillance est devenue un élément essentiel de la sécurité moderne. Selon les statistiques, <strong>les cambriolages diminuent de 60% dans les zones équipées de caméras visibles</strong>. Au-delà de la dissuasion, une vidéosurveillance professionnelle offre une preuve irréfutable en cas d'incident.
              </p>
              <p>
                Chez HD Connect, nous installons des systèmes de vidéosurveillance dernière génération : caméras 4K ultra haute définition, analyse vidéo intelligente (IA), accès mobile sécurisé et stockage redondant. Chaque système est dimensionné selon vos besoins spécifiques et configuré pour la conformité RGPD/CNIL.
              </p>
              <p>
                Notre approche privilégie la <strong>prévention et la dissuasion</strong>. Une caméra visible décourage les malfaiteurs. Une caméra discrète capture les preuves. Nous combinons les deux stratégies pour une sécurité maximale.
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
                Technologies Vidéosurveillance de Pointe
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
                    <Card className="hover-lift h-full card-micro-interaction border-2 border-transparent hover:border-blue-500/20">
                      <CardHeader className="flex flex-row items-center space-x-4">
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0"
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

        {/* SECTION FONCTIONNEMENT DÉTAILLÉ - 50/50 */}
        <ContentSection
          title="Comment Fonctionne une Vidéosurveillance Intelligente ?"
          imagePosition="left"
          image={vsMonitoringImage}
          imageAlt="Système vidéosurveillance avec analyse IA"
          backgroundColor="default"
          badge="Technologie IA"
          badgeIcon={<Eye className="w-4 h-4" />}
          content={
            <>
              <p>
                Un système de vidéosurveillance moderne repose sur plusieurs composants interconnectés : les caméras IP, le NVR (Network Video Recorder), le stockage et l'interface de consultation.
              </p>
              <p>
                <strong>Les caméras IP capturent le flux vidéo</strong> en haute résolution (jusqu'à 8 mégapixels en 4K). Chaque caméra est équipée d'un processeur qui analyse le flux en temps réel : détection de mouvement, franchissement de ligne virtuelle, reconnaissance faciale. Les alertes sont envoyées instantanément à votre smartphone.
              </p>
              <p>
                <strong>Le NVR enregistre et stocke les vidéos</strong> en local, garantissant la disponibilité même en cas de coupure internet. Nous proposons des capacités de stockage de 15 à 90 jours selon vos besoins réglementaires (RGPD, CNIL).
              </p>
            </>
          }
          delay={0}
        />

        {/* IMAGE BREAK STRATÉGIQUE */}
        <ImageBreak 
          image={vsInstallOutdoorImage}
          alt="Installation caméra de surveillance extérieure par technicien HD Connect"
          caption="Notre équipe installe vos caméras avec précision pour une couverture optimale"
        />

        {/* CTA INTERMÉDIAIRE AVEC BÉNÉFICES */}
        <CTAIntermediate 
          title="Sécurisez votre site dès maintenant"
          subtitle="Obtenez une étude personnalisée de vos besoins en vidéosurveillance par nos experts certifiés."
          phoneNumber={contactInfo.phoneMobile}
          variant="gradient"
          accentColor="video"
          showBenefits={true}
          urgencyText="Audit de sécurité OFFERT ce mois-ci"
        />

        {/* STATISTIQUES CLÉS - FOND CLAIR COMME ACCUEIL */}
        <LightStatsSection
          title="La Vidéosurveillance en Chiffres"
          stats={keyStats}
          variant="video"
        />

        {/* SECTION CAS D'USAGE - COMPOSANT AMÉLIORÉ */}
        <UseCasesSection
          title="Solutions Vidéosurveillance Adaptées à Votre Secteur"
          subtitle="HD Connect conçoit des systèmes optimisés pour chaque type d'environnement, particuliers comme professionnels."
          useCases={useCases}
          accentColor="video"
        />

        {/* SECTION AVANTAGES HD CONNECT */}
        <ColoredAdvantagesSection
          title="Pourquoi Choisir HD Connect pour Votre Vidéosurveillance ?"
          advantages={advantages}
          accentColor="video"
        />

        {/* SECTION COUVERTURE FRANCE PAR RÉGIONS */}
        <RegionCoverage serviceName="Vidéosurveillance" serviceSlug="videosurveillance" />

        {/* 2ème CTA ORANGE - BIEN ESPACÉ */}
        <CTAIntermediate 
          title="Prêt à protéger votre site ?"
          subtitle="Nos experts conçoivent gratuitement votre solution de vidéosurveillance sur mesure."
          phoneNumber={contactInfo.phoneMobile}
          variant="accent"
          showBenefits={false}
        />

        {/* SECTION PROCESSUS D'INSTALLATION */}
        <ColoredProcessSteps
          title="Votre Projet Vidéosurveillance en 4 Étapes"
          steps={processSteps}
          accentColor="video"
        />

        <ServicePrestations serviceName="Vidéosurveillance" interventionMode={true} />

        {/* SECTION TECHNOLOGIES & GARANTIES */}
        <TechnologiesGaranties variant="videosurveillance" />

        {/* SECTION GARANTIES VISUELLES */}
        <GarantiesSection variant="compact" />

        {/* GALERIE IMAGES */}
        <ServiceShowcase
          title="Nos Installations Vidéosurveillance"
          description="Découvrez la qualité de nos réalisations : caméras dôme, salles de contrôle et systèmes professionnels."
          images={[
            { src: galleryVsPtzCamera, alt: "Caméra PTZ dôme professionnelle HD Connect" },
            { src: galleryVsControlRoom, alt: "Salle de contrôle vidéosurveillance multi-écrans" },
            { src: galleryVsBulletOutdoor, alt: "Caméra bullet extérieure installation villa" }
          ]}
        />

        {/* SECTION CTA DEVIS */}
        <section id="quote" className="section-padding bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="scale-in" className="max-w-3xl mx-auto text-center">
              <h2 className="section-title text-center mb-6">
                Demandez Votre Étude Vidéosurveillance Gratuite
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Recevez une proposition personnalisée sous 48h. Étude technique offerte, sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("quote", { mode: "quote" })}
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg hover:shadow-xl transition-all"
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
        <CTAFloating serviceName="propriété" />

        {/* CTA BLOG CONTEXTUEL */}
        <BlogCTASection 
          categories={["videosurveillance", "reglementation", "conseils"]} 
          title="Guides Vidéosurveillance et Réglementation"
        />

        <ServiceLinks currentService="videosurveillance" />

        {/* FAQ ACCORDÉON */}
        <FAQAccordion 
          title="Questions Fréquentes sur la Vidéosurveillance"
          subtitle="Toutes les réponses à vos questions sur l'installation et la maintenance de systèmes de vidéosurveillance."
          items={faqItems}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Videosurveillance;
