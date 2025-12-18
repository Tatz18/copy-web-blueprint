import { Shield, Award, Users, Zap, HeartHandshake, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const WhoWeAre = () => {
  const {
    ref: sectionRef,
    isVisible
  } = useScrollAnimation({
    threshold: 0.05
  });
  return <section ref={sectionRef} className="py-10 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center 1mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Phoenix Realesthatic is a trusted real estate company dedicated to helping clients find the right residential and commercial properties. With verified listings, market expertise, and personalized support, we ensure a smooth and secure property journey.
          </p>
        </div>
      </div>
    </section>;
};
export default WhoWeAre;
