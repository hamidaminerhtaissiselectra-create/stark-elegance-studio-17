import json
import os

# --- Configuration ---
SERVICES = [
    {"name": "Vidéosurveillance", "slug": "videosurveillance"},
    {"name": "Systèmes d'alarme", "slug": "systemes-alarme"},
    {"name": "Contrôle d'accès", "slug": "controle-acces"},
    {"name": "Réseau & Connectivité", "slug": "reseau-connectivite"},
    {"name": "Solutions Domotique", "slug": "solutions-domotique"},
    {"name": "Maintenance", "slug": "maintenance"}
]

ZONES = {
    "Paris": {"dept": "75", "prio": 1},
    "Créteil": {"dept": "94", "prio": 1},
    "Saint-Maur-des-Fossés": {"dept": "94", "prio": 1},
    "Vitry-sur-Seine": {"dept": "94", "prio": 1},
    "Lyon": {"dept": "69", "prio": 2},
    "Marseille": {"dept": "13", "prio": 2},
    "Bordeaux": {"dept": "33", "prio": 2},
    "Toulouse": {"dept": "31", "prio": 2},
    "Lille": {"dept": "59", "prio": 2},
    "Strasbourg": {"dept": "67", "prio": 2},
    "Nantes": {"dept": "44", "prio": 2},
    "Nice": {"dept": "06", "prio": 2},
}

PAGES_DIR = "src/pages/zones"
# --- Fin Configuration ---

def slugify(text):
    return text.lower().replace(' ', '-').replace("'", "").replace("é", "e").replace("è", "e").replace("à", "a").replace("&", "et")

def pascal_case(text):
    """Convert text to PascalCase for component names"""
    words = text.replace('-', ' ').replace('_', ' ').split()
    return ''.join(word.capitalize() for word in words)

def generate_local_page_content(city, dept, service):
    city_slug = slugify(city)
    service_slug = service["slug"]
    service_name = service["name"]
    component_name = f"{pascal_case(city_slug)}{pascal_case(service_slug)}Page"
    
    # Template React valide pour la page locale
    template = f'''import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import {{ Helmet }} from 'react-helmet';
import {{ Shield, CheckCircle, MapPin, Clock, Phone }} from 'lucide-react';
import {{ Button }} from '@/components/ui/button';
import {{ Link }} from 'react-router-dom';

const {component_name} = () => {{
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{service_name} à {city} ({dept}) - Installation & Dépannage | HD Connect</title>
        <meta name="description" content="Expert en {service_name} à {city} ({dept}). Installation, maintenance et dépannage rapide. Protégez votre foyer ou entreprise. Demandez votre devis gratuit." />
        <meta name="keywords" content="{service_name}, {city}, {dept}, sécurité, installation, dépannage, HD Connect" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {{/* Hero Section */}}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary mb-6">
                <MapPin className="w-4 h-4" />
                <span>Expert Local à {city}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {service_name} à {city} ({dept})
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                HD Connect est votre partenaire de confiance pour l'installation et la maintenance de {service_name.lower()} dans la région de {city}. Expertise locale et intervention rapide garanties.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#quote">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                    Demander un Devis Gratuit
                  </Button>
                </Link>
                <a href="tel:+33627135304">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler un Expert
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {{/* Why Choose Us Section */}}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Pourquoi choisir HD Connect pour votre {service_name.lower()} à {city} ?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-xl bg-card border border-border/50 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Intervention Rapide</h3>
                <p className="text-muted-foreground">
                  Intervention en moins de 24h pour les urgences à {city} et ses environs.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-card border border-border/50 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expertise Certifiée</h3>
                <p className="text-muted-foreground">
                  Techniciens formés aux dernières technologies de {service_name.lower()}.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-card border border-border/50 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Garantie 5 ans</h3>
                <p className="text-muted-foreground">
                  Tous nos équipements et installations bénéficient d'une garantie complète.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {{/* FAQ Section */}}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Questions Fréquentes - {service_name} à {city}
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Quel est le délai d'installation pour un système de {service_name.lower()} à {city} ?</h3>
                <p className="text-muted-foreground">L'installation est généralement réalisée en 1 à 3 jours, selon la complexité du système. Nous nous adaptons à votre emploi du temps.</p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Vos systèmes sont-ils garantis ?</h3>
                <p className="text-muted-foreground">Oui, tous nos équipements et installations bénéficient d'une garantie complète de 5 ans.</p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Proposez-vous des contrats de maintenance à {city} ?</h3>
                <p className="text-muted-foreground">Oui, nous proposons des contrats de maintenance préventive annuels pour garantir le bon fonctionnement de vos équipements.</p>
              </div>
            </div>
          </div>
        </section>
        
        {{/* Contact Section */}}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Contact />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}};

export default {component_name};
'''
    return template

def generate_all_pages():
    if not os.path.exists(PAGES_DIR):
        os.makedirs(PAGES_DIR)

    generated_files = []
    
    for city, data in ZONES.items():
        if data['prio'] in [1, 2]:
            for service in SERVICES:
                city_slug = slugify(city)
                service_slug = service["slug"]
                filename = f"{city_slug}-{data['dept']}-{service_slug}.tsx"
                filepath = os.path.join(PAGES_DIR, filename)
                
                content = generate_local_page_content(city, data['dept'], service)
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                generated_files.append({
                    "path": filepath,
                    "city": city,
                    "dept": data['dept'],
                    "service": service["name"],
                    "route": f"/zones/{city_slug}-{data['dept']}-{service_slug}"
                })
                
                print(f"Généré : {filepath}")
    
    return generated_files

def generate_local_section_data():
    local_data = []
    for city, data in ZONES.items():
        local_data.append({
            "city": city,
            "dept": data['dept'],
            "prio": data['prio'],
            "slug": slugify(city),
            "alt_text": f"Installation de systèmes de sécurité par HD Connect à {city} ({data['dept']})",
            "image_url": f"/assets/local/{slugify(city)}.jpg"
        })
    
    data_dir = 'src/data'
    if not os.path.exists(data_dir):
        os.makedirs(data_dir)
        
    with open('src/data/local_section_data.json', 'w', encoding='utf-8') as f:
        json.dump(local_data, f, indent=2, ensure_ascii=False)
    
    print("Généré : src/data/local_section_data.json")

def generate_routes_config():
    """Generate a routes configuration file for App.tsx"""
    routes = []
    
    for city, data in ZONES.items():
        if data['prio'] in [1, 2]:
            for service in SERVICES:
                city_slug = slugify(city)
                service_slug = service["slug"]
                component_name = f"{pascal_case(city_slug)}{pascal_case(service_slug)}Page"
                filename = f"{city_slug}-{data['dept']}-{service_slug}"
                
                routes.append({
                    "path": f"/zones/{filename}",
                    "component": component_name,
                    "import": f"import {component_name} from './pages/zones/{filename}';"
                })
    
    with open('src/data/zone_routes.json', 'w', encoding='utf-8') as f:
        json.dump(routes, f, indent=2, ensure_ascii=False)
    
    print(f"Généré : src/data/zone_routes.json ({len(routes)} routes)")
    return routes

if __name__ == "__main__":
    # Nettoyer les anciennes pages
    if os.path.exists(PAGES_DIR):
        for f in os.listdir(PAGES_DIR):
            if f.endswith('.tsx'):
                os.remove(os.path.join(PAGES_DIR, f))
            
    # Générer les données de la section "Près de chez vous"
    generate_local_section_data()
    
    # Générer toutes les pages locales (Ville x Service)
    generated = generate_all_pages()
    
    # Générer la configuration des routes
    routes = generate_routes_config()
    
    print(f"\n=== Génération terminée ===")
    print(f"Pages générées : {len(generated)}")
    print(f"Routes configurées : {len(routes)}")
    print("\nN'oubliez pas d'ajouter les routes dans App.tsx et d'installer react-helmet si nécessaire.")
