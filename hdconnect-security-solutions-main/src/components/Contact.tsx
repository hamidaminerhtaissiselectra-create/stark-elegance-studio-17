import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom ne doit pas dépasser 100 caractères"),
  email: z.string().trim().email("Email invalide").max(255, "L'email ne doit pas dépasser 255 caractères"),
  phone: z.string().trim().min(1, "Le téléphone est requis").max(20, "Le téléphone ne doit pas dépasser 20 caractères"),
  message: z.string().trim().min(1, "Le message est requis").max(1000, "Le message ne doit pas dépasser 1000 caractères"),
});

type RequestType = 'quote' | 'info' | 'emergency';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [requestType, setRequestType] = useState<RequestType>('quote');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      // Envoi via Formspree
      const response = await fetch('https://formspree.io/f/mwpzrqyl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          requestType,
          ...validatedData,
        }),
      });

      if (!response.ok) {
        throw new Error("L'envoi de l'e-mail a échoué.");
      }

      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons rapidement.",
      });
      
      // Réinitialiser le formulaire
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setRequestType('quote');
      }, 1000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erreur de validation",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        console.error('Erreur lors de l\'envoi:', error);
        toast({
          title: "Erreur",
          description: error instanceof Error ? error.message : "Une erreur s'est produite. Veuillez réessayer.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Contactez-nous
          </h2>
          <p className="text-xl text-muted-foreground text-center">
            Une question ? Un projet ? N'hésitez pas à nous contacter pour un devis gratuit
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Téléphone</CardTitle>
              <CardDescription>Appelez-nous du lundi au vendredi</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <a href="tel:+33627135304" className="text-primary font-semibold text-lg hover:underline block">
                  +33 6 27 13 53 04
                </a>
                <a href="tel:+33183643640" className="text-primary font-semibold text-lg hover:underline block">
                  +33 1 83 64 36 40
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-2">9h - 18h</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Email</CardTitle>
              <CardDescription>Écrivez-nous à tout moment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <a href="mailto:kamal@hdconnect.fr" className="text-primary font-semibold text-lg hover:underline break-all block">
                  kamal@hdconnect.fr
                </a>
                <a href="mailto:hdconnect@hdconnect.fr" className="text-primary font-semibold text-lg hover:underline break-all block">
                  hdconnect@hdconnect.fr
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Réponse sous 24h</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Adresse</CardTitle>
              <CardDescription>Nos bureaux</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground font-semibold">Paris, France</p>
              <p className="text-sm text-muted-foreground mt-2">Intervention sur toute l'Île-de-France</p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">Demander un Devis Gratuit</CardTitle>
            <CardDescription>Remplissez ce formulaire et nous vous recontacterons rapidement</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Type de demande</label>
                <div className="grid grid-cols-3 gap-4">
                  <Button
                    type="button"
                    variant={requestType === 'quote' ? 'default' : 'outline'}
                    onClick={() => setRequestType('quote')}
                    className="w-full"
                  >
                    Devis
                  </Button>
                  <Button
                    type="button"
                    variant={requestType === 'info' ? 'default' : 'outline'}
                    onClick={() => setRequestType('info')}
                    className="w-full"
                  >
                    Info
                  </Button>
                  <Button
                    type="button"
                    variant={requestType === 'emergency' ? 'default' : 'outline'}
                    onClick={() => setRequestType('emergency')}
                    className="w-full"
                  >
                    Urgence
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nom complet
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jean Dupont"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jean.dupont@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Téléphone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet ou votre besoin..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
