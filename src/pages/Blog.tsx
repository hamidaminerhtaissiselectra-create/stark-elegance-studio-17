import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "alarme-prix-2026",
    title: "Prix alarme maison en 2026 : guide complet",
    excerpt: "Découvrez les tarifs des systèmes d'alarme résidentielle et les aides disponibles.",
    date: "10 janvier 2026",
    category: "GUIDE",
  },
  {
    id: "videosurveillance-rgpd",
    title: "Vidéosurveillance et RGPD : ce qu'il faut savoir",
    excerpt: "Les règles à respecter pour installer des caméras chez soi en toute légalité.",
    date: "5 janvier 2026",
    category: "RÉGLEMENTATION",
  },
  {
    id: "prevention-cambriolage",
    title: "10 conseils pour prévenir les cambriolages",
    excerpt: "Les bonnes pratiques pour protéger votre domicile efficacement.",
    date: "2 janvier 2026",
    category: "CONSEILS",
  },
];

const Blog = () => {
  useSEO({
    title: "Blog Sécurité",
    description: "Conseils, guides et actualités sur la sécurité résidentielle. Alarme, vidéosurveillance, prévention cambriolage.",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Blog Sécurité</h1>
          <p className="text-muted-foreground text-center mb-12">Conseils et actualités pour protéger votre maison</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="bg-card rounded-2xl p-6 border hover:shadow-lg transition-shadow">
                <span className="text-xs text-primary font-semibold">{post.category}</span>
                <h2 className="text-xl font-semibold mt-2 mb-3">{post.title}</h2>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
