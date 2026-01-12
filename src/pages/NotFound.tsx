import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page non trouvée</h2>
        <p className="text-muted-foreground mb-8">La page que vous recherchez n'existe pas ou a été déplacée.</p>
        <Button asChild className="btn-gradient-primary rounded-full">
          <Link to="/"><Home className="mr-2 w-5 h-5" /> Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
