import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO, getServiceSchema } from "@/hooks/useSEO";
import { Eye, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServiceTelesurveillance = () => {
  useSEO({
    title: "Télésurveillance 24/7",
    description: "Centre de télésurveillance agréé APSAD P5. Surveillance 24/7, levée de doute et intervention des forces de l'ordre.",
    jsonLd: getServiceSchema("Télésurveillance 24/7", "Service de télésurveillance agréé APSAD P5", "https://hdconnect.fr/services/telesurveillance"),
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                <Eye className="w-8 h-8 text-purple-500" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Télésurveillance 24/7</h1>
                <p className="text-muted-foreground">Centre de surveillance agréé APSAD P5</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Notre centre de télésurveillance veille sur votre domicile 24h/24. En cas d'alerte, nous contactons immédiatement les forces de l'ordre.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {["Surveillance 24h/24 7j/7", "Levée de doute immédiate", "Intervention police/gendarmerie", "Centre agréé APSAD P5", "Opérateurs formés", "À partir de 45€/mois"].map((f) => (
                <div key={f} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-purple-500" />{f}</div>
              ))}
            </div>
            <Button asChild className="bg-purple-500 hover:bg-purple-600 rounded-full px-8">
              <Link to="/devis">Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceTelesurveillance;
