import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Devis = () => {
  useSEO({
    title: "Demande de Devis Gratuit",
    description: "Demandez votre devis gratuit pour l'installation d'alarme, vidéosurveillance ou télésurveillance. Réponse sous 24h.",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-bold text-center mb-4">Demande de Devis Gratuit</h1>
          <p className="text-muted-foreground text-center mb-8">Remplissez le formulaire, nous vous recontactons sous 24h.</p>
          <form className="space-y-4 bg-card p-8 rounded-2xl border">
            <input type="text" placeholder="Nom complet *" className="w-full px-4 py-3 rounded-lg border" required />
            <input type="email" placeholder="Email *" className="w-full px-4 py-3 rounded-lg border" required />
            <input type="tel" placeholder="Téléphone *" className="w-full px-4 py-3 rounded-lg border" required />
            <input type="text" placeholder="Code postal *" className="w-full px-4 py-3 rounded-lg border" required />
            <select className="w-full px-4 py-3 rounded-lg border">
              <option>Alarme Résidentielle</option>
              <option>Vidéosurveillance</option>
              <option>Télésurveillance</option>
              <option>Pack Complet</option>
            </select>
            <textarea placeholder="Décrivez votre projet..." className="w-full px-4 py-3 rounded-lg border" rows={4} />
            <Button type="submit" className="w-full btn-gradient-primary rounded-full py-6">Envoyer ma demande</Button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Devis;
