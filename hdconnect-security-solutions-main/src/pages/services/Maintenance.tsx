import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wrench, Clock, PhoneCall, Shield, CheckCircle, TrendingUp } from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import ServiceShowcase from "@/components/ServiceShowcase";
import AnimatedSection from "@/components/AnimatedSection";
import maintenanceBg from "@/assets/maintenance-tech-1.jpg";
import maintenanceDiag from "@/assets/maintenance-diagnostic-2.jpg";
import maintenanceImg from "@/assets/maintenance-tech.jpg";

const Maintenance = () => {
  const features = [
    {
      icon: Clock,
      title: "Support 24/7 prioritaire",
      description:
        "Assistance technique disponible à tout moment pour vos urgences avec intervention sous 4h en Île-de-France",
    },
    {
      icon: PhoneCall,
      title: "Interventions rapides garanties",
      description:
        "Délai d'intervention garanti sous contrat (4h, 8h ou 24h) pour maintenir votre sécurité opérationnelle",
    },
    {
      icon: CheckCircle,
      title: "Maintenance préventive planifiée",
      description:
        "Contrôles réguliers pour prévenir les pannes avec checklist exhaustive et rapport détaillé",
    },
    {
      icon: TrendingUp,
      title: "Mises à jour incluses",
      description:
        "Installation des dernières mises à jour firmware, patches de sécurité et ajustements de configuration",
    },
    {
      icon: Shield,
      title: "Contrats sur mesure",
      description:
        "Formules flexibles adaptées à vos besoins et budget avec extension de garantie jusqu'à 5 ans",
    },
    {
      icon: Wrench,
      title: "Réparations et pièces garanties",
      description:
        "Pièces détachées d'origine et travaux garantis avec main d'œuvre incluse selon contrat",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServiceHero
          badge="Maintenance & Support"
          title="Maintenance & Support Technique"
          description="Service de maintenance préventive et support technique réactif pour vos équipements de sécurité. Contrats adaptés aux particuliers et professionnels avec intervention garantie."
          backgroundImage={maintenanceBg}
          primaryCtaLabel="Demander un devis gratuit"
        />

        <AnimatedSection>
          <ServiceShowcase
            images={[
              {
                src: maintenanceDiag,
                alt: "Diagnostic technique et suivi de maintenance sur ordinateur",
              },
              {
                src: maintenanceImg,
                alt: "Technicien en maintenance sur équipements de sécurité",
              },
            ]}
          />
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Nos Services de Maintenance
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
                Nos Contrats de Maintenance
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <article className="p-8 rounded-lg bg-card border">
                  <h3 className="text-2xl font-bold mb-4">Essentiel</h3>
                  <p className="text-muted-foreground mb-6">Pour les particuliers</p>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Support téléphonique 9h-18h</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>1 visite annuelle préventive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Mises à jour incluses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Tarif préférentiel dépannage</span>
                    </li>
                  </ul>
                </article>

                <article className="p-8 rounded-lg bg-card border-2 border-primary relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Populaire
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Premium</h3>
                  <p className="text-muted-foreground mb-6">Pour les professionnels</p>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Support 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>2 visites annuelles préventives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Dépannages illimités inclus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Pièces de rechange prioritaires</span>
                    </li>
                  </ul>
                </article>

                <article className="p-8 rounded-lg bg-card border">
                  <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                  <p className="text-muted-foreground mb-6">Sur mesure</p>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Support dédié 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Maintenance préventive mensuelle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>SLA garanti</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Reporting et audits réguliers</span>
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

export default Maintenance;

