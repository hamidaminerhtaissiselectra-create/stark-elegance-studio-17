import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      value: "0 800 123 456",
      subValue: "Appel gratuit depuis un fixe",
      href: "tel:0800123456",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@hdconnect.fr",
      subValue: "Réponse sous 24h",
      href: "mailto:contact@hdconnect.fr",
    },
    {
      icon: MapPin,
      title: "Siège social",
      value: "123 Avenue de la Sécurité",
      subValue: "33000 Bordeaux",
      href: null,
    },
    {
      icon: Clock,
      title: "Horaires",
      value: "Lun-Ven : 8h-19h",
      subValue: "Urgences : 24/7",
      href: null,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <span className="text-label text-primary mb-4 block">Contact</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-section mb-6">
              Besoin d'un devis ou d'informations ?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8">
              Nos conseillers sont à votre écoute pour répondre à toutes vos questions 
              et vous proposer une solution adaptée à vos besoins.
            </p>
            
            {/* Contact Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <info.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{info.title}</span>
                  </div>
                  {info.href ? (
                    <a href={info.href} className="block">
                      <div className="font-semibold text-secondary-foreground hover:text-primary transition-colors">
                        {info.value}
                      </div>
                      <div className="text-sm text-secondary-foreground/60">{info.subValue}</div>
                    </a>
                  ) : (
                    <div>
                      <div className="font-semibold text-secondary-foreground">{info.value}</div>
                      <div className="text-sm text-secondary-foreground/60">{info.subValue}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-gradient-accent rounded-full">
                <Link to="/devis">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                <a href="tel:0800123456">
                  <Phone className="mr-2 w-5 h-5" />
                  Appeler maintenant
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right - Quick Quote Form */}
          <div className="bg-card text-card-foreground rounded-3xl p-8 lg:p-10">
            <h3 className="text-2xl font-semibold mb-6">Demande rapide</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Prénom *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Votre prénom"
                    autoComplete="given-name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nom *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Votre nom"
                    autoComplete="family-name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Téléphone *</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="06 00 00 00 00"
                  autoComplete="tel"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="votre@email.fr"
                  autoComplete="email"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Code postal *</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="33000"
                  autoComplete="postal-code"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Service souhaité</label>
                <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                  <option value="">Sélectionnez un service</option>
                  <option value="alarme">Alarme Résidentielle</option>
                  <option value="video">Vidéosurveillance</option>
                  <option value="telesurveillance">Télésurveillance 24/7</option>
                  <option value="depannage">Dépannage Urgent</option>
                  <option value="pack">Pack Complet</option>
                </select>
              </div>
              
              <Button type="submit" className="w-full btn-gradient-primary rounded-full py-6 text-lg">
                Envoyer ma demande
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                En soumettant ce formulaire, vous acceptez d'être contacté par HD Connect. 
                Vos données sont protégées conformément au RGPD.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
