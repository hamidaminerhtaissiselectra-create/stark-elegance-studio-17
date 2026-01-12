import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lock, Fingerprint, CreditCard, History, Users, Key } from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import ServiceShowcase from "@/components/ServiceShowcase";
import AnimatedSection from "@/components/AnimatedSection";
import accessBg from "@/assets/access-rfid-1.jpg";
import accessBio from "@/assets/access-biometric-2.jpg";
import accessBio2 from "@/assets/access-biometric.jpg";

const ControleAcces = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Badge RFID & NFC",
      description:
        "Badges personnalisés MIFARE pour un accès simple et sécurisé avec cryptage 128 bits anti-clonage",
    },
    {
      icon: Fingerprint,
      title: "Biométrie avancée certifiée",
      description:
        "Reconnaissance d'empreinte digitale ou faciale avec précision 99,9% pour une sécurité maximale",
    },
    {
      icon: Key,
      title: "Code PIN sécurisé",
      description:
        "Contrôle d'accès par code personnalisé avec fonction anti-code forcé et temporisation programmable",
    },
    {
      icon: Users,
      title: "Gestion centralisée cloud",
      description:
        "Administration facile des droits d'accès depuis une interface web unique avec rapports détaillés",
    },
    {
      icon: History,
      title: "Historique complet certifié",
      description:
        "Traçabilité RGPD de tous les accès avec horodatage précis, photos et alertes d'anomalie",
    },
    {
      icon: Lock,
      title: "Sécurité multicouche avancée",
      description:
        "Combinaison de plusieurs méthodes d'authentification avec gestion des zones et horaires",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServiceHero
          badge="Contrôle d’accès"
          title="Contrôle d'Accès Intelligent"
          description="Systèmes de contrôle d'accès par badge, code ou biométrie pour sécuriser vos locaux. Solutions évolutives de la serrure connectée au système multi-sites."
          backgroundImage={accessBg}
          primaryCtaLabel="Demander un devis gratuit"
        />

        <AnimatedSection>
          <ServiceShowcase
            images={[
              {
                src: accessBio,
                alt: "Contrôle d’accès biométrique par empreinte digitale en entreprise",
              },
              {
                src: accessBio2,
                alt: "Lecteur biométrique et contrôle d’accès sécurisé",
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

        <AnimatedSection>
          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Nos Solutions de Contrôle d'Accès
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <article className="p-8 rounded-lg bg-card border">
                  <h3 className="text-2xl font-bold mb-4">Pour Particuliers</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Serrures connectées intelligentes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Contrôle via smartphone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Gestion des accès temporaires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Historique des entrées/sorties</span>
                    </li>
                  </ul>
                </article>
                <article className="p-8 rounded-lg bg-card border">
                  <h3 className="text-2xl font-bold mb-4">Pour Professionnels</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Gestion multi-sites centralisée</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Intégration pointeuse horaire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Droits d'accès personnalisés par zone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Reporting et audit de sécurité</span>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default ControleAcces;

