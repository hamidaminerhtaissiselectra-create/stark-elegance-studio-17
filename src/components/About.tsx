import { Shield, Award, Users, Clock, CheckCircle } from "lucide-react";

const About = () => {
  const certifications = [
    { name: "NF&A2P", description: "Norme Française" },
    { name: "APSAD P5", description: "Télésurveillance" },
    { name: "ISO 9001", description: "Qualité" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Expertise",
      description: "15 ans d'expérience dans la sécurité résidentielle. Techniciens formés et certifiés.",
    },
    {
      icon: Award,
      title: "Qualité",
      description: "Matériel certifié NF&A2P. Installation selon les normes les plus strictes.",
    },
    {
      icon: Users,
      title: "Proximité",
      description: "Présence nationale avec des équipes locales dans plus de 100 villes.",
    },
    {
      icon: Clock,
      title: "Réactivité",
      description: "Intervention en moins de 2h pour les urgences. SAV disponible 7j/7.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-label text-primary mb-4 block">À Propos de HD Connect</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-section text-foreground mb-6">
              Votre sécurité, notre priorité depuis 2010
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              HD Connect est le spécialiste français de la sécurité résidentielle. 
              Nous proposons des solutions d'alarme, de vidéosurveillance et de télésurveillance 
              adaptées à chaque foyer, avec une installation professionnelle et un suivi personnalisé.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-background rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-primary">10 000+</div>
                <div className="text-sm text-muted-foreground">Clients protégés</div>
              </div>
              <div className="text-center p-4 bg-background rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Villes couvertes</div>
              </div>
              <div className="text-center p-4 bg-background rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Note clients</div>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2 bg-background rounded-full px-4 py-2 shadow-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="font-semibold text-sm">{cert.name}</span>
                  <span className="text-xs text-muted-foreground">• {cert.description}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-background rounded-2xl p-6 card-hover">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
