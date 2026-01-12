import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wifi, Cable, Shield, Server, Network, Settings } from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import ServiceShowcase from "@/components/ServiceShowcase";
import AnimatedSection from "@/components/AnimatedSection";
import networkBg from "@/assets/network-rack-1.jpg";
import networkWifi from "@/assets/network-wifi-2.jpg";
import networkServer from "@/assets/network-server.jpg";

const Reseau = () => {
  const features = [
    {
      icon: Wifi,
      title: "Réseau WiFi professionnel mesh",
      description:
        "Installation de bornes WiFi 6E haute performance pour une couverture optimale sans zone morte jusqu'à 500m²",
    },
    {
      icon: Cable,
      title: "Câblage structuré certifié",
      description:
        "Infrastructure réseau Cat 6A/7 certifiée pour une fiabilité maximale avec garantie 25 ans sur câblage",
    },
    {
      icon: Shield,
      title: "VPN sécurisé d'entreprise",
      description:
        "Configuration de réseaux privés virtuels chiffrés pour vos connexions à distance et télétravail sécurisé",
    },
    {
      icon: Server,
      title: "Firewall avancé nouvelle génération",
      description:
        "Protection réseau contre les intrusions et menaces externes avec filtrage URL et antivirus intégré",
    },
    {
      icon: Network,
      title: "Architecture réseau évolutive",
      description:
        "Conception et déploiement d'architectures VLAN segmentées pour PME et grandes entreprises",
    },
    {
      icon: Settings,
      title: "Maintenance réseau proactive",
      description:
        "Support technique et maintenance préventive 24/7 avec monitoring temps réel de votre infrastructure",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServiceHero
          badge="Réseau & Connectivité"
          title="Réseau & Connectivité"
          description="Installation de réseaux sécurisés pour vos équipements connectés. Du WiFi mesh résidentiel aux infrastructures d'entreprise avec supervision et sécurité avancée."
          backgroundImage={networkBg}
          primaryCtaLabel="Demander un devis gratuit"
        />

        <AnimatedSection>
          <ServiceShowcase
            images={[
              {
                src: networkWifi,
                alt: "Point d’accès WiFi installé au plafond dans un bureau",
              },
              {
                src: networkServer,
                alt: "Infrastructure serveur et réseau sécurisé",
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

export default Reseau;

