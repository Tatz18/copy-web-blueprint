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
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Property Consultation</h4>
                    <p className="text-muted-foreground text-sm">Expert guidance across Indian markets</p>
                  </div>
                </div>
                
                <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Users className="h-12 w-12 text-muted-foreground/50 mx-auto" />
                    <p className="text-muted-foreground/70 text-sm">Consultation in Progress</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Property Matches</span>
                    <span className="text-primary font-semibold">Market Analysis</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '75%' }} />
                  </div>
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