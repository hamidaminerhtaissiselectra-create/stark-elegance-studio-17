import { Shield, Clock, Award, HeadphonesIcon, Zap, BadgeCheck } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Expertise Certifiée",
      description: "Techniciens certifiés NF&A2P avec formation continue sur les dernières technologies"
    },
    {
      icon: Clock,
      title: "Intervention Rapide",
      description: "Délai d'intervention garanti sous 48h pour les installations, 4h pour les urgences"
    },
    {
      icon: Award,
      title: "Garantie 5 Ans",
      description: "Tous nos équipements et installations sont garantis 5 ans pièces et main d'œuvre"
    },
    {
      icon: HeadphonesIcon,
      title: "Support 24/7",
      description: "Assistance technique disponible jour et nuit, week-ends et jours fériés inclus"
    },
    {
      icon: Zap,
      title: "Technologies de Pointe",
      description: "Marques premium : Hikvision, Dahua, Ajax, avec IA et cloud sécurisé"
    },
    {
      icon: BadgeCheck,
      title: "Devis Gratuit",
      description: "Étude personnalisée et devis détaillé sans engagement sous 24h"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pourquoi Choisir HD Connect ?
          </h2>
          <p className="text-xl text-muted-foreground">
            Plus de 10 ans d'expertise au service de votre sécurité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index} 
                className="flex items-start gap-4 p-6 rounded-xl bg-card border hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;