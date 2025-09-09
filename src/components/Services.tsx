import { Button } from "@/components/ui/button";
import { Shield, Award, Users } from "lucide-react";

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            {/* Seller's Assurance Program */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
              <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                Trusted Real Estate Partner Across India
              </p>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
              Premium Property Solutions
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Experience seamless property transactions with AstraVista. From Mumbai's commercial hubs to Delhi's heritage properties, we provide comprehensive real estate solutions across India.
            </p>
              
              <Button variant="outline" className="group">
                Learn more
                <span className="ml-2 group-hover:translate-x-1 transition-smooth">→</span>
              </Button>
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* AARP Benefits */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground">
                  Home Loan Assistance Program
                </h4>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Get expert assistance with home loans from leading Indian banks. Our partnerships help you secure the best interest rates and simplified documentation processes.
              </p>
              
              <Button variant="link" className="text-primary p-0 h-auto group">
                Learn more
                <span className="ml-2 group-hover:translate-x-1 transition-smooth">→</span>
              </Button>
            </div>
          </div>

          {/* Right Content - Service Image */}
          <div className="relative">
            <div className="gradient-card rounded-2xl p-8 shadow-card">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-background/50 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Days Average</div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Cities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;