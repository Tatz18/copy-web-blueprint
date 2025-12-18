import { Shield, Award, Users, Zap, HeartHandshake, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const HomeService = () => {
  const {
    ref: sectionRef,
    isVisible
  } = useScrollAnimation({
    threshold: 0.05
  });
  const reasons = [{
    title: "Property Buying ",
    description: "Residential & commercial properties.",
    color: "text-blue-500",
    bgColor: "bg-blue-15/30 dark:bg-blue-200/10",
    borderColor: "border-blue-15/30 dark:border-blue-200/30",
    hoverBg: "hover:bg-blue-15/30 dark:hover:bg-blue-200/20"
  }, {
    title: "Property Selling",
    description: "Fast, transparent, and reliable",
    color: "text-green-10",
    bgColor: "bg-green-15/20 dark:bg-green-900/10",
    borderColor: "border-blue-15/30 dark:border-blue-200/30",
    hoverBg: "hover:bg-blue-15/30 dark:hover:bg-blue-200/20"
  }, {
    title: "Investment Advisory",
    description: " Smart property investment solutions.",
    color: "text-purple-10",
    bgColor: "bg-purple-15/30 dark:bg-purple-200/20",
    borderColor: "border-blue-15/30 dark:border-blue-200/30",
    hoverBg: "hover:bg-blue-15/30 dark:hover:bg-blue-200/20"
  }, {
    title: "Site Visit Assistance",
    description: " End-to-end support.",
    color: "text-orange-10",
   bgColor: "bg-orange-15/20 dark:bg-orange-200/10",
    borderColor: "border-blue-15/30 dark:border-blue-200/30",
    hoverBg: "hover:bg-blue-15/30 dark:hover:bg-blue-200/20"
  }];
  return <section ref={sectionRef} className="py-9 bg-gradient-to-br from-secondary/10 via-background to-secondary/30">
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-9">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 mb-7">
          {reasons.map((reason, index) => {
          return <div key={index} className={`${reason.bgColor} ${reason.borderColor} ${reason.hoverBg} border rounded-2xl p-8 shadow-card hover:shadow-glow transition-smooth group hover:scale-105 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
            animationDelay: `${index * 150}ms`
          }}>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                    <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default HomeService;
