import { Button } from "@/components/ui/button";
import { Shield, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

const Hero = () => {
  const scrollToSection = (id: string, mode?: 'devis' | 'intervention') => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      
      // Activer le mode approprié après le scroll
      if (id === "quote" && mode) {
        setTimeout(() => {
          const targetBtn = document.querySelector(
            mode === 'intervention' ? '[data-intervention-btn]' : '[data-quote-btn]'
          ) as HTMLButtonElement;
          if (targetBtn) {
            targetBtn.click();
          }
        }, 500);
      }
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="HD Connect - Installation de sécurité" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Expert en Sécurité depuis 10 ans</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-center md:text-left">
            Protégez ce qui compte
            <span className="block text-primary">avec HD Connect</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-center md:text-left">
            Installation et maintenance de systèmes de sécurité professionnels : caméras de surveillance, alarmes,
            contrôle d'accès et bien plus encore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              onClick={() => scrollToSection("quote", "devis")} 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg h-14 px-8"
            >
              Demander un Devis Gratuit
            </Button>
            <Button 
              onClick={() => scrollToSection("quote", "intervention")} 
              size="lg" 
              variant="outline"
              className="text-lg h-14 px-8 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              Dépannage
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="text-foreground font-medium">Installation Rapide</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="text-foreground font-medium">Support 24/7</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="text-foreground font-medium">Garantie 5 ans</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
