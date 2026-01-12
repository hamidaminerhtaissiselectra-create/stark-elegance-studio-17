import { MapPin, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const CoverageArea = () => {
  const zones = [
    "Paris et petite couronne",
    "Yvelines (78)",
    "Essonne (91)",
    "Hauts-de-Seine (92)",
    "Seine-Saint-Denis (93)",
    "Val-de-Marne (94)",
    "Val-d'Oise (95)",
    "Seine-et-Marne (77)"
  ];

  const scrollToQuote = () => {
    const element = document.getElementById("quote");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Zone d'Intervention
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              HD Connect intervient sur toute l'Île-de-France pour vos installations et dépannages de systèmes de sécurité.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {zones.map((zone, index) => (
                <div key={index} className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">{zone}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Intervention sous 48h</p>
                  <p className="text-sm text-muted-foreground">Pour les nouvelles installations</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-accent/10 rounded-lg">
                <Truck className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Urgence sous 4h</p>
                  <p className="text-sm text-muted-foreground">Pour les dépannages prioritaires</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Île-de-France
                </h3>
                <p className="text-muted-foreground mb-6">
                  Devis gratuit et intervention rapide sur toute la région parisienne
                </p>
                <Button onClick={scrollToQuote} className="bg-gradient-to-r from-primary to-accent">
                  Demander un devis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageArea;