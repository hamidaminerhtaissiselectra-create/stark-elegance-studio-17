import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Shield, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const services = [
    { name: "Alarme Résidentielle", href: "/services/alarme", icon: "🔔" },
    { name: "Vidéosurveillance", href: "/services/videosurveillance", icon: "📹" },
    { name: "Télésurveillance 24/7", href: "/services/telesurveillance", icon: "👁️" },
    { name: "Dépannage Urgent", href: "/services/depannage", icon: "🚨" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">HD Connect</span>
              <span className="text-xs text-muted-foreground leading-tight">Sécurité Résidentielle</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/') ? 'text-primary' : 'text-foreground'}`}
            >
              Accueil
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Services <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 bg-popover">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link to={service.href} className="flex items-center gap-3 cursor-pointer">
                      <span>{service.icon}</span>
                      <span>{service.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              to="/zones" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/zones') ? 'text-primary' : 'text-foreground'}`}
            >
              Zones d'intervention
            </Link>
            
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/about') ? 'text-primary' : 'text-foreground'}`}
            >
              À propos
            </Link>
            
            <Link 
              to="/blog" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/blog') ? 'text-primary' : 'text-foreground'}`}
            >
              Blog
            </Link>
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:0800123456" className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Phone className="w-4 h-4" />
              0 800 123 456
            </a>
            <Button asChild className="btn-gradient-primary rounded-full px-6">
              <Link to="/devis">Devis Gratuit</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border animate-slide-up">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <Link 
              to="/" 
              className="block py-2 text-foreground font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            
            <div className="py-2">
              <p className="text-sm text-muted-foreground mb-2">Services</p>
              <div className="space-y-2 pl-4">
                {services.map((service) => (
                  <Link 
                    key={service.href}
                    to={service.href} 
                    className="flex items-center gap-3 py-2 text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{service.icon}</span>
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              to="/zones" 
              className="block py-2 text-foreground font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Zones d'intervention
            </Link>
            
            <Link 
              to="/about" 
              className="block py-2 text-foreground font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            
            <Link 
              to="/blog" 
              className="block py-2 text-foreground font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            
            <div className="pt-4 border-t border-border space-y-3">
              <a href="tel:0800123456" className="flex items-center gap-2 text-primary font-semibold">
                <Phone className="w-5 h-5" />
                0 800 123 456
              </a>
              <Button asChild className="w-full btn-gradient-primary rounded-full">
                <Link to="/devis" onClick={() => setIsMenuOpen(false)}>Devis Gratuit</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
