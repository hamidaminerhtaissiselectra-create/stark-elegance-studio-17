import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">HD</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">HD Connect</h3>
                <p className="text-sm text-background/70">Sécurité & Technologie</p>
              </div>
            </div>
            <p className="text-background/70 text-sm mb-4">
              Votre partenaire de confiance pour tous vos besoins en systèmes de sécurité.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="/services/videosurveillance" className="hover:text-background transition-colors">Vidéosurveillance</a></li>
              <li><a href="/services/alarme" className="hover:text-background transition-colors">Systèmes d'alarme</a></li>
              <li><a href="/services/controle-acces" className="hover:text-background transition-colors">Contrôle d'accès</a></li>
              <li><a href="/services/reseau" className="hover:text-background transition-colors">Réseau & Connectivité</a></li>
              <li><a href="/services/domotique" className="hover:text-background transition-colors">Solutions Domotique</a></li>
              <li><a href="/services/maintenance" className="hover:text-background transition-colors">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="/" className="hover:text-background transition-colors">Accueil</a></li>
              <li><a href="/#services" className="hover:text-background transition-colors">Services</a></li>
              <li><a href="/#apropos" className="hover:text-background transition-colors">À Propos</a></li>
              <li><a href="/#contact" className="hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+33627135304" className="hover:text-background transition-colors block">+33 6 27 13 53 04</a>
                  <a href="tel:+33183643640" className="hover:text-background transition-colors block">+33 1 83 64 36 40</a>
                  <p className="text-xs mt-1">Lundi - Vendredi: 9h - 18h</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:kamal@hdconnect.fr" className="hover:text-background transition-colors break-all block">
                    kamal@hdconnect.fr
                  </a>
                  <a href="mailto:hdconnect@hdconnect.fr" className="hover:text-background transition-colors break-all block">
                    hdconnect@hdconnect.fr
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Paris, France</p>
                  <p className="text-xs">Île-de-France</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; {currentYear} HD Connect. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
