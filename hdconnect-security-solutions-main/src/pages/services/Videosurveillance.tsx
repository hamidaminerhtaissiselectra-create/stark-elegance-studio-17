import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Camera, Shield, Smartphone, Cloud, Eye, Clock } from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import ServiceShowcase from "@/components/ServiceShowcase";
import AnimatedSection from "@/components/AnimatedSection";
import vsBg from "@/assets/vs-control-room-2.jpg";
import vsInstall from "@/assets/vs-install-1.jpg";
import vsInstall2 from "@/assets/video-installation.jpg";

const Videosurveillance = () => {
  const features = [
    {
      icon: Camera,
      title: "Caméras HD et 4K",
      description:
        "Installation de caméras haute définition pour une surveillance optimale de vos locaux avec une résolution exceptionnelle",
    },
    {
      icon: Eye,
      title: "Vision nocturne avancée",
      description:
        "Surveillance 24h/24 grâce à la vision infrarouge jusqu'à 30 mètres, même dans l'obscurité totale",
    },
    {
      icon: Smartphone,
      title: "Accès mobile sécurisé",
      description:
        "Visualisez vos caméras en temps réel depuis votre smartphone, tablette ou ordinateur partout dans le monde",
    },
    {
      icon: Cloud,
      title: "Stockage hybride sécurisé",
      description:
        "Enregistrement continu avec stockage local (NVR) et cloud sécurisé pour une double protection de vos données",
    },
    {
      icon: Shield,
      title: "Analyse vidéo intelligente",
      description:
        "Détection de mouvement avancée, reconnaissance faciale, comptage de personnes et alertes intelligentes en temps réel",
    },
    {
      icon: Clock,
      title: "Enregistrement continu H24",
      description:
        "Archivage automatique de 30 à 90 jours avec historique consultable à tout moment et fonction de recherche rapide",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServiceHero
          badge="Expert Vidéosurveillance"
          title="Installation Vidéosurveillance Professionnelle HD & 4K"
          description="Installation de caméras HD et 4K avec enregistrement continu et accès à distance pour une sécurité optimale de vos locaux. Solutions adaptées aux particuliers, commerces et entreprises."
          backgroundImage={vsBg}
          primaryCtaLabel="Demander un devis gratuit"
        />

        <AnimatedSection>
          <ServiceShowcase
            images={[
              {
                src: vsInstall,
                alt: "Installation caméra de vidéosurveillance IP par technicien",
              },
              {
                src: vsInstall2,
                alt: "Installation de vidéosurveillance sur site professionnel",
              },
            ]}
          />
        </AnimatedSection>

        {/* Features Section */}
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

        {/* Solutions Section */}
        <AnimatedSection>
          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Nos Solutions Vidéosurveillance
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <article className="p-8 rounded-lg bg-card border">
                  <h3 className="text-2xl font-bold mb-4">Pour Particuliers</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Caméras intérieures et extérieures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Application mobile intuitive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Installation rapide et discrète</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Maintenance et support inclus</span>
                    </li>
                  </ul>
                </article>
                <article className="p-8 rounded-lg bg-card border">
                  <h3 className="text-2xl font-bold mb-4">Pour Professionnels</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Systèmes multi-sites centralisés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Analyse vidéo intelligente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Intégration avec systèmes existants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Support technique 24/7</span>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Technologies & Garanties */}
        <AnimatedSection>
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Technologies & Garanties
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">Marques Premium</h3>
                  <p className="text-muted-foreground">
                    Hikvision, Dahua, Axis, Hanwha - Leaders mondiaux en vidéosurveillance
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">Certification NF</h3>
                  <p className="text-muted-foreground">
                    Installateurs certifiés et conformes aux normes françaises et européennes
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">Garantie 3 ans</h3>
                  <p className="text-muted-foreground">
                    Garantie constructeur + installation avec maintenance préventive incluse
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Videosurveillance;

