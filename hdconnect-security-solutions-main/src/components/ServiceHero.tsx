import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export type ServiceHeroProps = {
  badge?: string;
  title: string;
  description: string;
  backgroundImage: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
};

const ServiceHero = ({
  badge,
  title,
  description,
  backgroundImage,
  primaryCtaLabel = "Demander un devis",
  secondaryCtaLabel = "Nous contacter",
}: ServiceHeroProps) => {
  return (
    <header
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay: garde l'image bien visible tout en améliorant la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/35 to-background/85" />

      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl rounded-2xl border bg-background/35 backdrop-blur-md p-6 md:p-8">
            {badge ? (
              <div className="inline-flex items-center rounded-full border bg-background/60 backdrop-blur px-4 py-2 text-sm text-foreground">
                {badge}
              </div>
            ) : null}

            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground drop-shadow-sm">
              {title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl drop-shadow-sm">
              {description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/">
                <Button
                  size="lg"
                  onClick={() => {
                    setTimeout(() => {
                      const element = document.getElementById("quote");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  {primaryCtaLabel}
                </Button>
              </Link>
              <Link to="/">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    setTimeout(() => {
                      const element = document.getElementById("contact");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  {secondaryCtaLabel}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ServiceHero;
