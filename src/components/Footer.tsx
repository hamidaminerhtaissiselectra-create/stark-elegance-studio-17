import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const services = [
    { name: "Alarme Résidentielle", href: "/services/alarme" },
    { name: "Vidéosurveillance", href: "/services/videosurveillance" },
    { name: "Télésurveillance 24/7", href: "/services/telesurveillance" },
    { name: "Dépannage Urgent", href: "/services/depannage" },
  ];

  const zones = [
    { name: "Paris & Île-de-France", href: "/zones/paris" },
    { name: "Lyon & Rhône-Alpes", href: "/zones/lyon" },
    { name: "Bordeaux & Nouvelle-Aquitaine", href: "/zones/bordeaux" },
    { name: "Marseille & PACA", href: "/zones/marseille" },
    { name: "Lille & Hauts-de-France", href: "/zones/lille" },
    { name: "Toutes nos zones", href: "/zones" },
  ];

  const company = [
    { name: "À propos", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Nos engagements", href: "/engagements" },
    { name: "Recrutement", href: "/recrutement" },
    { name: "Contact", href: "/contact" },
  ];

  const legal = [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Politique de confidentialité", href: "/confidentialite" },
    { name: "CGV", href: "/cgv" },
    { name: "Cookies", href: "/cookies" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">HD Connect</span>
                <span className="text-xs text-secondary-foreground/60 leading-tight">Sécurité Résidentielle</span>
              </div>
            </Link>
            
            <p className="text-sm text-secondary-foreground/70 mb-6">
              Spécialiste français de la sécurité résidentielle depuis 2010. 
              Alarme, vidéosurveillance et télésurveillance 24/7.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:0800123456" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                0 800 123 456
              </a>
              <a href="mailto:contact@hdconnect.fr" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                contact@hdconnect.fr
              </a>
              <div className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                <MapPin className="w-4 h-4 text-primary" />
                Bordeaux, France
              </div>
            </div>
            
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Zones */}
          <div>
            <h4 className="font-semibold mb-4">Zones d'intervention</h4>
            <ul className="space-y-2">
              {zones.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Informations</h4>
            <ul className="space-y-2">
              {legal.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} HD Connect. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-secondary-foreground/40">Certifications :</span>
              <span className="text-xs font-medium bg-secondary-foreground/10 px-2 py-1 rounded">NF&A2P</span>
              <span className="text-xs font-medium bg-secondary-foreground/10 px-2 py-1 rounded">APSAD P5</span>
              <span className="text-xs font-medium bg-secondary-foreground/10 px-2 py-1 rounded">ISO 9001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
