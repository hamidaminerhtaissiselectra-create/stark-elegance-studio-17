import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie L.",
      role: "Gérante de boutique",
      location: "Paris 11e",
      rating: 5,
      text: "Installation rapide et professionnelle de mon système de vidéosurveillance. L'équipe a été à l'écoute de mes besoins. Je recommande vivement HD Connect !"
    },
    {
      name: "Philippe D.",
      role: "Directeur d'entreprise",
      location: "Nanterre",
      rating: 5,
      text: "Nous avons fait appel à HD Connect pour sécuriser nos 3 sites. Un travail remarquable, des techniciens compétents et un SAV réactif. Partenaire de confiance."
    },
    {
      name: "Isabelle M.",
      role: "Particulier",
      location: "Versailles",
      rating: 5,
      text: "Après un cambriolage, j'ai contacté HD Connect. Ils ont su me rassurer et installer une alarme performante. Je me sens enfin en sécurité chez moi."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-muted-foreground">
            La satisfaction de nos clients est notre meilleure référence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-6">
                <Quote className="absolute top-4 right-4 w-10 h-10 text-primary/10" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            ⭐ Note moyenne de <span className="text-primary font-bold">4.9/5</span> basée sur plus de 200 avis vérifiés
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;