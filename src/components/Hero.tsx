import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Phone, Clock, CheckCircle, ArrowRight } from "lucide-react";

const Hero = () => {
  const stats = [
    { value: "15+", label: "Années d'expérience" },
    { value: "10 000+", label: "Clients satisfaits" },
    { value: "24/7", label: "Télésurveillance" },
    { value: "2h", label: "Intervention rapide" },
  ];

  const features = [
    "Installation professionnelle",
    "Matériel certifié NF&A2P",
    "Garantie 10 ans",
    "SAV réactif",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-primary/80" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-20">
          {/* Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <Shield className="w-4 h-4 text-accent" />
              <span>N°1 de la sécurité résidentielle en France</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-hero">
              Protégez votre maison
              <br />
              <span className="text-primary-foreground/90">avec HD Connect</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/80 max-w-xl">
              Alarme, vidéosurveillance et télésurveillance 24/7. 
              Installation rapide par des experts certifiés dans toute la France.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-gradient-accent rounded-full text-lg px-8 group">
                <Link to="/devis">
                  Devis Gratuit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <a href="tel:0800123456" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  0 800 123 456
                </a>
              </Button>
            </div>
            
            {/* Urgence */}
            <div className="flex items-center gap-3 text-sm">
              <div className="w-3 h-3 bg-accent rounded-full pulse-urgence" />
              <span className="text-white/80">
                <span className="font-semibold text-accent">Dépannage urgent 24/7</span> — Intervention en moins de 2h
              </span>
            </div>
          </div>
          
          {/* Stats Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/20">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-primary/50 border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-white">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="text-accent">★</span>
                    ))}
                    <span className="ml-1 font-semibold">4.9/5</span>
                  </div>
                  <div className="text-sm text-white/70">+2 500 avis clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 100H1440V50C1440 50 1320 0 1080 20C840 40 600 80 360 60C120 40 0 50 0 50V100Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
