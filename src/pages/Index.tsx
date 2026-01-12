import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useSEO, getOrganizationSchema, getFAQSchema } from "@/hooks/useSEO";

const Index = () => {
  const homeFAQs = [
    {
      question: "Quel est le prix moyen d'une alarme résidentielle en France ?",
      answer: "Le prix d'une alarme résidentielle varie entre 800€ et 2500€ pour une installation complète, plus 45-60€/mois pour la télésurveillance 24/7. HD Connect propose des devis gratuits personnalisés.",
    },
    {
      question: "Combien de temps prend l'installation d'un système de sécurité ?",
      answer: "L'installation d'un système d'alarme ou de vidéosurveillance prend généralement entre 2h et 4h selon la configuration. Nos techniciens certifiés assurent une mise en service le jour même.",
    },
    {
      question: "HD Connect intervient-il en urgence ?",
      answer: "Oui, HD Connect propose un service de dépannage urgent 24/7 avec intervention en moins de 2h dans les principales villes de France.",
    },
    {
      question: "Quelles sont les certifications de HD Connect ?",
      answer: "HD Connect est certifié NF&A2P (Norme Française), APSAD P5 (Télésurveillance) et ISO 9001 (Qualité), garantissant des installations aux normes les plus strictes.",
    },
  ];

  useSEO({
    title: "Alarme, Vidéosurveillance & Télésurveillance 24/7",
    description: "HD Connect, spécialiste français de la sécurité résidentielle. Installation alarme, vidéosurveillance et télésurveillance 24/7. Devis gratuit, intervention rapide dans toute la France.",
    jsonLd: [getOrganizationSchema(), getFAQSchema(homeFAQs)],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
