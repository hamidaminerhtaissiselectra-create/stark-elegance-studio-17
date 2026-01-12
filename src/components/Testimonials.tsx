import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie D.",
      location: "Bordeaux, Chartrons",
      rating: 5,
      text: "Depuis l'installation de l'alarme HD Connect, je dors tranquille. Équipe professionnelle et réactive. Installation en moins de 3h !",
      service: "Alarme + Télésurveillance",
      date: "Janvier 2026",
    },
    {
      name: "Jean-Pierre M.",
      location: "Lyon, Part-Dieu",
      rating: 5,
      text: "Après un cambriolage, j'ai fait appel à HD Connect. La vidéosurveillance me permet de surveiller ma maison depuis mon téléphone. Excellent rapport qualité/prix.",
      service: "Vidéosurveillance 4K",
      date: "Décembre 2025",
    },
    {
      name: "Sophie L.",
      location: "Paris, 15ème",
      rating: 5,
      text: "Le dépannage urgent a été vraiment rapide : moins de 2h un dimanche matin ! Technicien compétent et courtois. Je recommande.",
      service: "Dépannage Urgent",
      date: "Janvier 2026",
    },
    {
      name: "Thomas R.",
      location: "Marseille, Prado",
      rating: 5,
      text: "Installation complète maison + garage. HD Connect a su proposer une solution adaptée à mon budget. Très satisfait du suivi post-installation.",
      service: "Pack Complet Sécurité",
      date: "Novembre 2025",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-label text-primary mb-4 block">Témoignages</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-section text-foreground mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-muted-foreground">
            Plus de 10 000 clients satisfaits dans toute la France. 
            Découvrez leurs avis sur nos services.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 card-hover border border-border relative">
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Service Badge */}
              <div className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full inline-block mb-4">
                {testimonial.service}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-bold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">sur Google</span>
          </div>
          <div className="h-8 w-px bg-border hidden lg:block" />
          <div className="text-center">
            <span className="font-bold text-foreground">+2 500</span>
            <span className="text-muted-foreground ml-1">avis vérifiés</span>
          </div>
          <div className="h-8 w-px bg-border hidden lg:block" />
          <div className="text-center">
            <span className="font-bold text-foreground">98%</span>
            <span className="text-muted-foreground ml-1">de clients satisfaits</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
