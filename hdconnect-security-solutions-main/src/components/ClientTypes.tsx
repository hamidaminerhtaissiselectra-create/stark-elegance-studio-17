import { Home, Building2, Store, Factory, School, Hospital } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ClientTypes = () => {
  const clients = [
    {
      icon: Home,
      title: "Particuliers",
      description: "Maisons, appartements, résidences secondaires"
    },
    {
      icon: Store,
      title: "Commerces",
      description: "Boutiques, restaurants, agences"
    },
    {
      icon: Building2,
      title: "Bureaux & PME",
      description: "Espaces de travail et locaux professionnels"
    },
    {
      icon: Factory,
      title: "Industries",
      description: "Entrepôts, usines, sites logistiques"
    },
    {
      icon: School,
      title: "Établissements",
      description: "Écoles, crèches, centres de formation"
    },
    {
      icon: Hospital,
      title: "Santé",
      description: "Cabinets médicaux, pharmacies, cliniques"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nous Accompagnons Tous Les Profils
          </h2>
          <p className="text-xl text-muted-foreground">
            Des solutions de sécurité adaptées à chaque besoin et budget
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all hover:-translate-y-1 group cursor-pointer">
                <CardContent className="pt-6 pb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary group-hover:to-accent flex items-center justify-center mx-auto mb-4 transition-all">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{client.title}</h3>
                  <p className="text-sm text-muted-foreground">{client.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientTypes;