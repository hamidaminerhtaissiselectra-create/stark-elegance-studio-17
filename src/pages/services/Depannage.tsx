import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO, getServiceSchema } from "@/hooks/useSEO";
import { Wrench, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServiceDepannage = () => {
  useSEO({
    title: "Dépannage Urgent 24/7",
    description: "Dépannage urgent de votre système d'alarme ou vidéosurveillance. Intervention en moins de 2h, 7j/7.",
    jsonLd: getServiceSchema("Dépannage Urgent", "Service de dépannage urgent 24/7 pour systèmes de sécurité", "https://hdconnect.fr/services/depannage"),
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-accent text-accent-foreground text-sm font-bold px-4 py-1 rounded-full mb-4">
              URGENCE 24/7
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                <Wrench className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Dépannage Urgent</h1>
                <p className="text-muted-foreground">Intervention en moins de 2h</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Votre alarme ne fonctionne plus ? Un problème sur vos caméras ? Nos techniciens interviennent en urgence 7j/7.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {["Intervention en 2h", "Disponible 7j/7", "Pièces d'origine", "Techniciens certifiés", "Devis avant intervention", "Garantie pièces et main d'œuvre"].map((f) => (
                <div key={f} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-500" />{f}</div>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              <Button asChild className="bg-orange-500 hover:bg-orange-600 rounded-full px-8">
                <a href="tel:0800123456"><Phone className="mr-2 w-5 h-5" />Appeler maintenant</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8">
                <Link to="/devis">Demander un rappel</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceDepannage;
