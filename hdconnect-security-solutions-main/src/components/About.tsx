import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, ThumbsUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, value: "10+", label: "Années d'expérience" },
    { icon: Users, value: "500+", label: "Clients satisfaits" },
    { icon: Clock, value: "24/7", label: "Support disponible" },
    { icon: ThumbsUp, value: "98%", label: "Taux de satisfaction" },
  ];

  return (
    <section id="apropos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center md:text-left">
              Votre partenaire de confiance en sécurité
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg text-center md:text-left">
              <p>
                <span className="text-primary font-semibold">HD Connect</span> est une entreprise spécialisée dans
                l'installation et la maintenance de systèmes de sécurité professionnels depuis plus de 10 ans.
              </p>
              <p>
                Notre équipe de techniciens certifiés met son expertise au service de votre sécurité, que vous soyez
                un particulier, une entreprise ou une collectivité.
              </p>
              <p>
                Nous sélectionnons les meilleures technologies du marché et assurons une installation de qualité,
                suivie d'un accompagnement personnalisé pour garantir votre tranquillité d'esprit.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-3">Nos valeurs</h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Excellence technique et innovation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Écoute et conseil personnalisé</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Réactivité et disponibilité</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Engagement qualité et durabilité</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
