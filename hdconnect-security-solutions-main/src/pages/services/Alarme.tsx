import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldAlert, Bell, Smartphone, Radio, Home, Building2 } from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import ServiceShowcase from "@/components/ServiceShowcase";
import AnimatedSection from "@/components/AnimatedSection";
import alarmBg from "@/assets/alarm-panel-1.jpg";
import alarmSensors from "@/assets/alarm-sensors-2.jpg";
import alarmPanel from "@/assets/alarm-panel.jpg";

const Alarme = () => {
  const features = [
    {
      icon: ShieldAlert,
      title: "Détection intelligente multi-zones",
      description:
        "Capteurs de mouvement PIR et d'ouverture magnétiques avec détection avancée pour éviter 99% des fausses alarmes",
    },
    {
      icon: Bell,
      title: "Sirènes intérieures/extérieures",
      description:
        "Alarmes sonores puissantes 110dB certifiées pour dissuader les intrus avec protection anti-sabotage",
    },
    {
      icon: Smartphone,
      title: "Notifications instantanées push",
      description:
        "Alertes en temps réel sur votre smartphone avec photos en cas d'intrusion, où que vous soyez",
    },
    {
      icon: Radio,
      title: "Télésurveillance professionnelle",
      description:
        "Connexion directe avec un centre de télésurveillance agréé APSAD 24/7 avec intervention rapide",
    },
    {
      icon: Home,
      title: "Protection périmétrique complète",
      description:
        "Sécurisation intérieure et extérieure avec détecteurs de présence, d'ouverture et de bris de vitre",
    },
    {
      icon: Building2,
      title: "Contrôle centralisé intelligent",
      description:
        "Gestion simple via clavier tactile, badge RFID, code PIN ou application mobile avec historique complet",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServiceHero
          badge="Expert Alarme"
          title="Systèmes d'Alarme Anti-Intrusion"
          description="Alarmes connectées avec détection intelligente pour protéger vos locaux contre les intrusions. Systèmes sans fil ou filaires certifiés, avec télésurveillance optionnelle."
          backgroundImage={alarmBg}
          primaryCtaLabel="Demander un devis gratuit"
        />

        <AnimatedSection>
          <ServiceShowcase
            images={[
              {
                src: alarmSensors,
                alt: "Capteurs d’alarme et détecteurs d’ouverture installés sur une porte",
              },
              {
                src: alarmPanel,
                alt: "Panneau d’alarme moderne pour système anti-intrusion",
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
                Nos Solutions d'Alarme
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <article className="p-8 rounded-lg bg-card border">
                  <h3 className="text-2xl font-bold mb-4">Pour Particuliers</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Alarme sans fil facile à installer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Application mobile gratuite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Détecteurs de mouvement intelligents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Option télésurveillance disponible</span>
                    </li>
                  </ul>
                </article>
                <article className="p-8 rounded-lg bg-card border">
                  <h3 className="text-2xl font-bold mb-4">Pour Professionnels</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Systèmes multi-zones personnalisables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Télésurveillance professionnelle 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Intégration avec contrôle d'accès</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Maintenance préventive incluse</span>
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

export default Alarme;

