import { Shield, Award, Users, Zap, HeartHandshake, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const WhyWorkWithUs = () => {
  const {
    ref: sectionRef,
    isVisible
  } = useScrollAnimation({
    threshold: 0.05
  });
  const reasons = [{
    icon: Shield,
    title: "100% Verified Properties in Kolkata & Across India",
    description: "Every property listed with Phoenix Realesthatic undergoes a thorough multi-point verification process to ensure legal compliance, authenticity, and clear ownership, giving buyers complete confidence in their property purchase.",
    color: "text-blue-500",
    bgColor: "bg-blue-50/50 dark:bg-blue-900/10",
    borderColor: "border-blue-200/30 dark:border-blue-800/30",
    hoverBg: "hover:bg-blue-50/80 dark:hover:bg-blue-900/20"
  }, {
    icon: Award,
    title: "8+ Years of Real Estate Experience",
    description: "With over seven years of experience in the Indian real estate market, we have successfully assisted thousands of families and investors across Kolkata and major cities in India with secure and reliable property transactions.",
    color: "text-green-500",
    bgColor: "bg-green-50/50 dark:bg-green-900/10",
    borderColor: "border-green-200/30 dark:border-green-800/30",
    hoverBg: "hover:bg-green-50/80 dark:hover:bg-green-900/20"
  }, {
    icon: Users,
    title: "Expert Real Estate Team Support",
    description: "Our dedicated team of relationship managers, legal experts, and financial advisors provides end-to-end guidance, ensuring a smooth and hassle-free property buying or investment experience.",
    color: "text-purple-500",
    bgColor: "bg-purple-50/50 dark:bg-purple-900/10",
    borderColor: "border-purple-200/30 dark:border-purple-800/30",
    hoverBg: "hover:bg-purple-50/80 dark:hover:bg-purple-900/20"
  }, {
    icon: Zap,
    title: "Fast & Efficient Property Buying Process",
    description: "Our streamlined and digital-first processes significantly reduce transaction timelines, making property buying and selling in Kolkata and India faster and more efficient than traditional methods.",
    color: "text-orange-500",
    bgColor: "bg-orange-50/50 dark:bg-orange-900/10",
    borderColor: "border-orange-200/30 dark:border-orange-800/30",
    hoverBg: "hover:bg-orange-50/80 dark:hover:bg-orange-900/20"
  }, {
    icon: HeartHandshake,
    title: "Transparent Property Dealings",
    description: "We maintain complete pricing transparency with zero hidden charges, honest market valuations, and ethical practices—earning us the trust of property buyers and investors across India.",
    color: "text-red-500",
    bgColor: "bg-red-50/50 dark:bg-red-900/10",
    borderColor: "border-red-200/30 dark:border-red-800/30",
    hoverBg: "hover:bg-red-50/80 dark:hover:bg-red-900/20"
  }, {
    icon: TrendingUp,
    title: "Strategic Property Investment Guidance",
    description: "Our data-driven insights, market research, and location analysis help clients make smart real estate investment decisions in high-growth areas of Kolkata and other key Indian markets.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-50/50 dark:bg-cyan-900/10",
    borderColor: "border-cyan-200/30 dark:border-cyan-800/30",
    hoverBg: "hover:bg-cyan-50/80 dark:hover:bg-cyan-900/20"
  }];
  return <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Phoenix Realesthatic?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Phoenix Realesthatic is a leading real estate consultancy in Kolkata, offering trusted property solutions across India. We help homebuyers, sellers, and investors find verified residential and commercial properties with complete transparency and professional expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
          const IconComponent = reason.icon;
          return <div key={index} className={`${reason.bgColor} ${reason.borderColor} ${reason.hoverBg} border rounded-2xl p-8 shadow-card hover:shadow-glow transition-smooth group hover:scale-105 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
            animationDelay: `${index * 150}ms`
          }}>
                <div className="space-y-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-background ${reason.color} mb-2`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
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

        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-accent/20">
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent">5000+</div>
              <div className="text-muted-foreground">Happy Homebuyers Across India</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground">Cities Including Kolkata</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent">50000+</div>
              <div className="text-muted-foreground">Real Estate Transactions Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyWorkWithUs;
