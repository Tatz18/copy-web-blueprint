import { Shield, Award, Users, Zap, HeartHandshake, TrendingUp } from "lucide-react";

const WhyWorkWithUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "100% Verified Properties",
      description: "Every property goes through our rigorous 50-point verification process ensuring legal compliance and authenticity.",
      color: "text-blue-500"
    },
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Trusted by over 50,000 families across India with a proven track record in real estate transactions.",
      color: "text-green-500"
    },
    {
      icon: Users,
      title: "Expert Team Support",
      description: "Dedicated relationship managers, legal experts, and financial advisors to guide you at every step.",
      color: "text-purple-500"
    },
    {
      icon: Zap,
      title: "Quick Process",
      description: "Streamlined digital processes reduce transaction time by 40% compared to traditional methods.",
      color: "text-orange-500"
    },
    {
      icon: HeartHandshake,
      title: "Transparent Dealings",
      description: "Zero hidden charges, complete transparency in pricing, and honest market valuations.",
      color: "text-red-500"
    },
    {
      icon: TrendingUp,
      title: "Investment Guidance",
      description: "Data-driven insights and market analysis to help you make informed investment decisions.",
      color: "text-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose AstraVista?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another real estate platform. We're your trusted partner in finding the perfect property across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-smooth group"
              >
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
              </div>
            );
          })}
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-accent/20">
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent">50K+</div>
              <div className="text-muted-foreground">Happy Families</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">25+</div>
              <div className="text-muted-foreground">Cities Covered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent">₹500Cr+</div>
              <div className="text-muted-foreground">Properties Sold</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;