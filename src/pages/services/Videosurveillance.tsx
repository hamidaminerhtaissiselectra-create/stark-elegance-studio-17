import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO, getServiceSchema } from "@/hooks/useSEO";
import { Camera, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServiceVideosurveillance = () => {
  useSEO({
    title: "Installation Vidéosurveillance",
    description: "Installation de caméras de vidéosurveillance HD/4K. Vision nocturne, stockage cloud. Surveillez votre maison depuis votre smartphone.",
    jsonLd: getServiceSchema("Vidéosurveillance", "Installation de systèmes de vidéosurveillance HD/4K", "https://hdconnect.fr/services/videosurveillance"),
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center">
                <Camera className="w-8 h-8 text-indigo-500" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Vidéosurveillance</h1>
                <p className="text-muted-foreground">Surveillez votre maison en temps réel</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Caméras HD et 4K intérieures/extérieures avec vision nocturne. Accédez aux images depuis votre smartphone 24/7.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {["Caméras HD/4K", "Vision nocturne infrarouge", "Stockage cloud sécurisé", "Détection mouvement IA", "Application mobile", "Installation discrète"].map((f) => (
                <div key={f} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-indigo-500" />{f}</div>
              ))}
            </div>
            <Button asChild className="bg-indigo-500 hover:bg-indigo-600 rounded-full px-8">
              <Link to="/devis">Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceVideosurveillance;
