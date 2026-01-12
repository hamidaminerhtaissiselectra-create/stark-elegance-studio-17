type ServiceShowcaseProps = {
  title?: string;
  description?: string;
  images: Array<{ src: string; alt: string }>;
};

const ServiceShowcase = ({
  title = "Aperçu de nos installations",
  description = "Quelques exemples de matériels et d’installations typiques.",
  images,
}: ServiceShowcaseProps) => {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
          {description ? (
            <p className="mt-3 text-muted-foreground">{description}</p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.slice(0, 2).map((img, idx) => (
            <figure
              key={idx}
              className="overflow-hidden rounded-xl border bg-card shadow-sm"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-72 w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
