import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const Zones = () => {
  useSEO({
    title: "Zones d'intervention",
    description: "HD Connect intervient dans toute la France. Découvrez nos zones d'intervention pour l'installation d'alarme et vidéosurveillance.",
  });

  const regions = [
    { name: "Île-de-France", cities: ["Paris", "Versailles", "Boulogne-Billancourt"] },
    { name: "Nouvelle-Aquitaine", cities: ["Bordeaux", "Limoges", "Poitiers"] },
    { name: "Auvergne-Rhône-Alpes", cities: ["Lyon", "Grenoble", "Saint-Étienne"] },
    { name: "PACA", cities: ["Marseille", "Nice", "Toulon"] },
    { name: "Hauts-de-France", cities: ["Lille", "Amiens", "Roubaix"] },
    { name: "Occitanie", cities: ["Toulouse", "Montpellier", "Nîmes"] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Zones d'intervention</h1>
          <p className="text-muted-foreground text-center mb-12">Présents dans plus de 100 villes en France</p>
          <div className="grid md:grid-cols-3 gap-6">
            {regions.map((region) => (
              <div key={region.name} className="bg-card p-6 rounded-2xl border">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> {region.name}
                </h3>
                <ul className="space-y-2">
                  {region.cities.map((city) => (
                    <li key={city} className="text-muted-foreground">{city}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Zones;
