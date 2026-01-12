import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Monitor, Zap, Smartphone, Home, Sun, Thermometer } from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import ServiceShowcase from "@/components/ServiceShowcase";
import AnimatedSection from "@/components/AnimatedSection";
import domoticBg from "@/assets/domotic-app-1.jpg";
import domoticLight from "@/assets/domotic-light-2.jpg";
import domoticTablet from "@/assets/domotique-tablet.jpg";

const Domotique = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Contrôle centralisé universel",
      description:
        "Pilotez tous vos équipements depuis une interface unique compatible Google Home, Alexa et Apple HomeKit",
    },
    {
      icon: Zap,
      title: "Automatisation intelligente IA",
      description:
        "Scénarios personnalisés pour automatiser votre quotidien et optimiser la consommation d'énergie",
    },
    {
      icon: Sun,
      title: "Gestion éclairage avancée",
      description:
        "Contrôle intelligent de l'éclairage avec détection de présence et adaptation automatique à la luminosité",
    },
    {
      icon: Thermometer,
      title: "Contrôle climatique optimisé",
      description:
        "Optimisation chauffage/climatisation par zone avec programmation et pilotage à distance",
    },
    {
      icon: Home,
      title: "Sécurité intégrée complète",
      description:
        "Synchronisation avec alarme, caméras et contrôle d'accès pour une sécurité cohérente",
    },
    {
      icon: Monitor,
      title: "Compatible multi-protocoles",
      description:
        "Intégration Zigbee, Z-Wave, Matter et solutions filaires selon votre installation",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServiceHero
          badge="Maison connectée"
          title="Solutions Domotique Intelligentes"
          description="Intégration domotique pour le confort, l’énergie et la sécurité : pilotage centralisé, scénarios et automatisations, compatible avec les principaux écosystèmes."
          backgroundImage={domoticBg}
          primaryCtaLabel="Demander un devis gratuit"
        />

        <AnimatedSection>
          <ServiceShowcase
            images={[
              {
                src: domoticLight,
                alt: "Éclairage connecté et interrupteur intelligent dans un salon",
              },
              {
                src: domoticTablet,
                alt: "Tablette de contrôle domotique pour maison connectée",
              },
            ]}
          />
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Caractéristiques et Avantages
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <article
                      key={index}
                      className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Domotique;

