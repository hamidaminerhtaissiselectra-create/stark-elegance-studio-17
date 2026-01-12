import { Link } from "react-router-dom";
import { ArrowRight, Bell, Camera, Eye, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Bell,
      title: "Alarme Résidentielle",
      description: "Systèmes d'alarme connectés avec détecteurs de mouvement, capteurs d'ouverture et sirène puissante. Protection complète de votre domicile.",
      features: ["Alarme filaire ou sans fil", "Application mobile", "Détection intrusion", "Sirène 110dB"],
      href: "/services/alarme",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Camera,
      title: "Vidéosurveillance",
      description: "Caméras HD intérieures et extérieures avec vision nocturne. Surveillez votre maison en temps réel depuis votre smartphone.",
      features: ["Caméras HD/4K", "Vision nocturne", "Stockage cloud", "Détection mouvement"],
      href: "/services/videosurveillance",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Eye,
      title: "Télésurveillance 24/7",
      description: "Centre de télésurveillance agréé APSAD P5. Intervention des forces de l'ordre en cas d'intrusion confirmée.",
      features: ["Surveillance 24/7", "Levée de doute", "Intervention police", "Centre agréé"],
      href: "/services/telesurveillance",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Wrench,
      title: "Dépannage Urgent",
      description: "Intervention rapide en moins de 2h pour tout problème sur votre système de sécurité. Disponible 7j/7.",
      features: ["Intervention 2h", "7j/7", "Pièces d'origine", "Techniciens certifiés"],
      href: "/services/depannage",
      color: "from-orange-500 to-orange-600",
      urgent: true,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-label text-primary mb-4 block">Nos Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-section text-foreground mb-6">
            Solutions de sécurité complètes pour votre maison
          </h2>
          <p className="text-lg text-muted-foreground">
            Du diagnostic à l'installation, en passant par la maintenance, 
            HD Connect vous accompagne pour une protection optimale.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className={`group relative bg-card rounded-2xl p-6 lg:p-8 card-hover border ${service.urgent ? 'border-accent/50' : 'border-border'}`}
            >
              {service.urgent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  URGENCE 24/7
                </div>
              )}
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <div className="flex items-center text-primary font-medium text-sm group-hover:gap-3 transition-all gap-2">
                En savoir plus
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Vous ne savez pas quelle solution choisir ?
          </p>
          <Button asChild size="lg" className="btn-gradient-primary rounded-full px-8">
            <Link to="/devis">
              Demander un diagnostic gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
