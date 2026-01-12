import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Shield, Lock, Wifi, Home, Wrench, Radio, DoorOpen, Package, ArrowRight, Sparkles, Zap, CheckCircle, Phone } from "lucide-react";
import { content } from "@/data/content";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { servicesSchema, organizationSchema, localBusinessSchema } from "@/data/structuredData";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import cameraImage from "@/assets/home-service-videosurveillance.jpg";
import alarmImage from "@/assets/home-service-alarme.jpg";
import accessImage from "@/assets/home-service-controle-acces.jpg";
import maintenanceImage from "@/assets/home-service-maintenance.jpg";
import reseauImage from "@/assets/home-service-reseau.jpg";
import domotiqueImage from "@/assets/home-service-domotique.jpg";
import antenneImage from "@/assets/home-service-antenne.jpg";
import portailImage from "@/assets/home-service-portails.jpg";
import locationImage from "@/assets/location-equipement-table.jpg";
import heroServicesImage from "@/assets/hero-security.jpg";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Shield,
  Lock,
  Wifi,
  Home,
  Wrench,
  Radio,
  DoorOpen,
  Package,
};

const imageMap: Record<string, string> = {
  "Vidéosurveillance": cameraImage,
  "Systèmes d'Alarme": alarmImage,
  "Contrôle d'Accès": accessImage,
  "Maintenance & Dépannage": maintenanceImage,
  "Réseau & Câblage": reseauImage,
  "Domotique Sécurité": domotiqueImage,
  "Antennes & Satellite": antenneImage,
  "Portails & Parking": portailImage,
  "Location Matériel": locationImage,
};

const colorMap: Record<string, { bg: string; iconBg: string; hover: string; border: string }> = {
  "Vidéosurveillance": { 
    bg: "from-blue-500 to-blue-600", 
    iconBg: "bg-blue-500", 
    hover: "hover:border-blue-400",
    border: "border-blue-500/20"
  },
  "Systèmes d'Alarme": { 
    bg: "from-red-500 to-red-600", 
    iconBg: "bg-red-500", 
    hover: "hover:border-red-400",
    border: "border-red-500/20"
  },
  "Contrôle d'Accès": { 
    bg: "from-emerald-500 to-emerald-600", 
    iconBg: "bg-emerald-500", 
    hover: "hover:border-emerald-400",
    border: "border-emerald-500/20"
  },
  "Maintenance & Dépannage": { 
    bg: "from-orange-500 to-orange-600", 
    iconBg: "bg-orange-500", 
    hover: "hover:border-orange-400",
    border: "border-orange-500/20"
  },
  "Réseau & Câblage": { 
    bg: "from-cyan-500 to-cyan-600", 
    iconBg: "bg-cyan-500", 
    hover: "hover:border-cyan-400",
    border: "border-cyan-500/20"
  },
  "Domotique Sécurité": { 
    bg: "from-purple-500 to-purple-600", 
    iconBg: "bg-purple-500", 
    hover: "hover:border-purple-400",
    border: "border-purple-500/20"
  },
  "Antennes & Satellite": { 
    bg: "from-indigo-500 to-indigo-600", 
    iconBg: "bg-indigo-500", 
    hover: "hover:border-indigo-400",
    border: "border-indigo-500/20"
  },
  "Portails & Parking": { 
    bg: "from-amber-500 to-amber-600", 
    iconBg: "bg-amber-500", 
    hover: "hover:border-amber-400",
    border: "border-amber-500/20"
  },
  "Location Matériel": { 
    bg: "from-teal-500 to-teal-600", 
    iconBg: "bg-teal-500", 
    hover: "hover:border-teal-400",
    border: "border-teal-500/20"
  },
};

const ServicesHub = () => {
  const { scrollToSection } = useSmoothScroll();
  const contactInfo = content.company.contact;

  useSEO({
    title: "Nos Services Sécurité & Domotique | Installation & Dépannage | HD Connect",
    description: "Découvrez tous nos services : vidéosurveillance HD/4K, alarmes certifiées, contrôle d'accès, domotique, réseau, antennes, portails et location matériel. Devis gratuit, intervention France.",
    keywords: "services sécurité, installation vidéosurveillance, alarme maison, contrôle accès, domotique, maintenance, réseau, antenne satellite, portail automatique, location matériel sécurité",
    canonicalUrl: "https://hdconnect.fr/services",
  });

  const breadcrumbs = [
    { name: "Accueil", url: "/" },
    { name: "Services", url: "/services" },
  ];

  // Schema JSON-LD pour la page services
  const pageJsonLd = [
    organizationSchema,
    localBusinessSchema,
    servicesSchema,
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://hdconnect.fr/services#page",
      "url": "https://hdconnect.fr/services",
      "name": "Nos Services Sécurité & Domotique | HD Connect",
      "description": "Découvrez tous nos services d'installation, maintenance et location de systèmes de sécurité en France.",
      "isPartOf": { "@id": "https://hdconnect.fr/#website" },
      "about": { "@id": "https://hdconnect.fr/#organization" },
      "mainEntity": { "@id": "https://hdconnect.fr/services#services-list" }
    }
  ];

  const advantages = [
    { icon: CheckCircle, title: "Expertise 10+ ans", description: "Plus d'une décennie d'expérience dans la sécurité électronique" },
    { icon: Zap, title: "Intervention Rapide", description: "Installation sous 48h, dépannage 24/7 en Île-de-France" },
    { icon: Shield, title: "Garantie 5 ans", description: "Tous nos équipements sont garantis 5 ans pièces et main d'œuvre" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* JSON-LD Structured Data */}
      {pageJsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Header />
      <main className="pt-0">
        {/* HERO SECTION - Style identique à l'accueil */}
        <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroServicesImage} 
              alt="HD Connect - Tous nos services de sécurité" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow hidden lg:block"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse-slow hidden lg:block" style={{ animationDelay: '1s' }}></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              {/* Breadcrumbs */}
              <div className="mb-6">
                <Breadcrumbs items={breadcrumbs} />
              </div>
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="badge-primary mb-8"
              >
                <Sparkles className="w-5 h-5" />
                <span>Solutions Complètes de Sécurité</span>
              </motion.div>

              {/* H1 unique */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-[1.1]"
              >
                Tous Nos Services{" "}
                <span className="text-gradient-animated">Sécurité</span>
                <br />
                & <span className="text-gradient-animated">Domotique</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl"
              >
                De la vidéosurveillance à la domotique, en passant par les alarmes et le contrôle d'accès : 
                HD Connect vous accompagne dans tous vos projets de sécurité. Installation, maintenance et 
                location partout en France.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  asChild
                >
                  <a href={`tel:${contactInfo.phoneMobile.replace(/\s/g, '')}`}>
                    <Phone className="mr-2 w-5 h-5" />
                    Appeler Maintenant
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg h-14 px-8 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 group transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link to="/#quote">
                    Demander un Devis Gratuit
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {advantages.map((advantage, index) => {
                  const Icon = advantage.icon;
                  const badgeColors = [
                    'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
                    'from-orange-500/20 to-amber-500/20 border-orange-500/30',
                    'from-green-500/20 to-emerald-500/20 border-green-500/30'
                  ];
                  const iconColors = ['text-blue-500', 'text-orange-500', 'text-green-500'];
                  return (
                    <div 
                      key={index}
                      className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br ${badgeColors[index]} backdrop-blur-sm border hover:scale-105 transition-all duration-300`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-card/80 flex items-center justify-center shadow-inner">
                        <Icon className={`w-5 h-5 ${iconColors[index]}`} />
                      </div>
                      <div>
                        <span className="text-foreground font-medium text-sm block">{advantage.title}</span>
                        <span className="text-muted-foreground text-xs">{advantage.description}</span>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID - Style identique à l'accueil */}
        <section className="section-padding bg-secondary/30 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 pattern-dots opacity-50"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <div className="badge-accent mb-3">
                <Sparkles className="w-4 h-4" />
                <span>9 Expertises Métier</span>
              </div>
              <h2 className="section-title text-center">
                {content.services.title}
              </h2>
              <p className="section-subtitle text-center">
                {content.services.subtitle}
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.services.items.map((service, index) => {
                const Icon = iconMap[service.icon] || Camera;
                const image = imageMap[service.title];
                const colors = colorMap[service.title] || { bg: "from-primary to-accent", iconBg: "bg-primary", hover: "hover:border-primary/30", border: "border-primary/20" };
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card 
                      className={`group hover-lift overflow-hidden bg-card border-2 ${colors.border} ${colors.hover} transition-all duration-500 flex flex-col h-full`}
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden flex-shrink-0">
                        <img 
                          src={image}
                          alt={`Service ${service.title} - HD Connect`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                        
                        {/* Floating Icon */}
                        <div className={`absolute bottom-4 left-4 w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center shadow-lg shadow-black/20 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300`}>
                          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                        </div>
                      </div>
                      
                      <CardHeader className="pt-4 flex-grow">
                        <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed line-clamp-3">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="pt-0 mt-auto">
                        <Link to={service.link} className="w-full block">
                          <Button 
                            variant="ghost" 
                            className="w-full justify-center gap-2 group/btn hover:bg-primary/5 hover:text-primary transition-all duration-300"
                          >
                            <span>Découvrir ce service</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Besoin d'un Projet Sur Mesure ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Vous ne trouvez pas exactement ce que vous cherchez ? Nos experts conçoivent des solutions 
                personnalisées adaptées à vos besoins spécifiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 h-14 px-8 text-lg group"
                  asChild
                >
                  <a href={`tel:${contactInfo.phoneMobile.replace(/\s/g, '')}`}>
                    <Phone className="mr-2 w-5 h-5" />
                    {contactInfo.phoneMobile}
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-8 text-lg border-2"
                  asChild
                >
                  <Link to="/#quote">
                    Demander un Devis
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO TEXT BLOCK */}
        <section className="section-padding bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <h2>HD Connect : Votre Expert en Sécurité Électronique</h2>
              <p>
                Depuis plus de 10 ans, <strong>HD Connect</strong> accompagne les particuliers et les professionnels 
                dans leurs projets de sécurité électronique. Notre équipe d'experts certifiés installe, configure 
                et maintient une gamme complète de systèmes de protection.
              </p>
              <p>
                De la <strong>vidéosurveillance HD et 4K</strong> aux <strong>alarmes certifiées NF&A2P</strong>, 
                en passant par le <strong>contrôle d'accès biométrique</strong> et la <strong>domotique connectée</strong>, 
                nous proposons des solutions adaptées à chaque besoin et chaque budget.
              </p>
              <p>
                Nos techniciens interviennent dans toute la <strong>France métropolitaine</strong>, avec une présence 
                renforcée en <strong>Île-de-France</strong> pour des interventions sous 48h. Que vous soyez à Paris, 
                Lyon, Marseille, Bordeaux ou ailleurs, HD Connect est à votre service.
              </p>
              <h3>Pourquoi Choisir HD Connect ?</h3>
              <ul>
                <li><strong>Expertise reconnue :</strong> Plus de 500 clients satisfaits et des milliers d'installations réalisées</li>
                <li><strong>Garantie 5 ans :</strong> Tous nos équipements sont garantis pièces et main d'œuvre</li>
                <li><strong>Support 24/7 :</strong> Une équipe technique disponible en permanence pour vos urgences</li>
                <li><strong>Conformité RGPD :</strong> Accompagnement complet pour la mise en conformité de vos installations</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesHub;
