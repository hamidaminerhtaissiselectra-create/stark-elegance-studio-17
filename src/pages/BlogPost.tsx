import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  
  useSEO({
    title: "Article Blog",
    description: "Lisez nos articles sur la sécurité résidentielle.",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary mb-8">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          <h1 className="text-4xl font-bold mb-4">Article : {id}</h1>
          <p className="text-muted-foreground">Contenu de l'article à venir...</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPost;
