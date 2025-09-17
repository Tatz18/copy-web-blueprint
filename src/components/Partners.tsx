import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Partners = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const partners = [
    "WATG",
    "IMPACT",
    "PRP",
    "DEVELOP",
    "LUXE PARTNERS"
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-accent/10 via-background to-accent/5">
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
            Partners & Clients
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto leading-tight">
            Our valued collaborators and friends over the last decade
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-16 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-6 rounded-xl hover:bg-card/50 transition-smooth cursor-pointer group ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-xl lg:text-2xl font-bold text-muted-foreground/60 group-hover:text-foreground transition-smooth">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;