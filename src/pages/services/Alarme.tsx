import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO, getServiceSchema } from "@/hooks/useSEO";
import { Bell, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServiceAlarme = () => {
  useSEO({
    title: "Installation Alarme Résidentielle",
    description: "Installation d'alarme résidentielle par HD Connect. Systèmes filaires et sans fil certifiés NF&A2P. Devis gratuit.",
    jsonLd: getServiceSchema("Alarme Résidentielle", "Installation de systèmes d'alarme résidentielle certifiés NF&A2P", "https://hdconnect.fr/services/alarme"),
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Bell className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Alarme Résidentielle</h1>
                <p className="text-muted-foreground">Protection complète de votre domicile</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Nos systèmes d'alarme certifiés NF&A2P protègent efficacement votre maison contre les intrusions. 
              Installation professionnelle en moins de 3h.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {["Détecteurs de mouvement", "Capteurs d'ouverture", "Sirène 110dB", "Application mobile", "Alarme sans fil ou filaire", "Garantie 10 ans"].map((f) => (
                <div key={f} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" />{f}</div>
              ))}
            </div>
            <Button asChild className="btn-gradient-primary rounded-full px-8">
              <Link to="/devis">Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceAlarme;
