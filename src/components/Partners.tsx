import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import recaLogo from "@/assets/reca-kolkata-logo.png";
import narLogo from "@/assets/nar-india-logo.png";

const Partners = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const partners = [
    { name: "RECA Kolkata", logo: recaLogo, alt: "RECA Kolkata - Your Gateway to World of Realty" },
    { name: "National Association of Realtors - India", logo: narLogo, alt: "National Association of Realtors India - Credible Voice of Realtors" }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-accent/10 via-background to-accent/5">
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Partners & Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We collaborate with leading real estate associations in Kolkata and across India to deliver trusted property solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center justify-items-center max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-8 rounded-xl bg-gradient-to-br from-blue-500/20 via-pink-500/20 to-blue-600/20 hover:from-blue-500/30 hover:via-pink-500/30 hover:to-blue-600/30 backdrop-blur-sm border border-white/10 transition-smooth cursor-pointer group shadow-lg hover:shadow-xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={partner.logo} 
                alt={partner.alt}
                className="max-h-56 w-auto object-contain group-hover:scale-105 transition-smooth drop-shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
