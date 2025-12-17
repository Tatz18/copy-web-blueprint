import { Button } from "@/components/ui/button";
import { Shield, Award, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const Services = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const {
    ref: sectionRef,
    isVisible
  } = useScrollAnimation({
    threshold: 0.05
  });
  const handleLearnMore = (type: "premium" | "loan") => {
    if (type === "premium") {
      navigate("/properties");
      toast({
        title: "Learn More",
        description: "Discover our premium property solutions and services."
      });
    } else {
      navigate("/properties");
      //navigate("/investment-consulting");
      toast({
        title: "Home Loan Assistance",
        description: "Get expert guidance on home loans and financing options."
      });
    }
  };
  return <section ref={sectionRef} className="py-20 bg-gradient-to-br from-accent/5 via-background to-accent/10">
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
          animationDelay: '200ms'
        }}>
            {/* Seller's Assurance Program */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
              <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                Trusted Real Estate Partner Across <span className="text-pink-500">KOLKATA</span>
              </p>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
              Premium Property Solutions
            </h3>
            
             <p className="text-muted-foreground leading-relaxed">
                Experience seamless and transparent property transactions with Phoenix Realesthatic. Headquartered in the cultural heart of Kolkata, we specialize in delivering premium real estate solutions—from heritage properties across Bengal to select commercial investments in major Indian markets—backed by expertise, integrity, and personalized service.
              </p>
              
              <Button className="group bg-pink-500 hover:bg-pink-600 text-white border-pink-500 border" onClick={() => handleLearnMore("premium")}>
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
                  Expert Assistance in Finding the Best Properties
                </h4>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Get personalized expert guidance to find properties that perfectly match your requirements and budget. Our experienced team helps you discover premium residential and commercial properties across Kolkata, ensuring a smooth, transparent, and well-informed property journey.
              </p>
              
              <Button variant="outline" className="bg-pink-500 hover:bg-pink-600 text-white border-pink-500 group" onClick={() => handleLearnMore("loan")}>
                Learn more
                <span className="ml-2 group-hover:translate-x-1 transition-smooth">→</span>
              </Button>
            </div>
          </div>

          {/* Right Content - Service Image */}
          <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
          animationDelay: '400ms'
        }}>
            <div className="gradient-card rounded-2xl p-8 shadow-card bg-pink-200/60 dark:bg-pink-800/30">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50/70 dark:bg-blue-900/20 border border-blue-200/40 dark:border-blue-800/40 rounded-xl hover:bg-blue-100/80 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                {/*
                <div className="text-center p-6 bg-green-50/70 dark:bg-green-900/20 border border-green-200/40 dark:border-green-800/40 rounded-xl hover:bg-green-100/80 dark:hover:bg-green-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Days Average</div>
                </div>
                */}
                <div className="text-center p-6 bg-purple-50/70 dark:bg-purple-900/20 border border-purple-200/40 dark:border-purple-800/40 rounded-xl hover:bg-purple-100/80 dark:hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5K+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-orange-50/70 dark:bg-orange-900/20 border border-orange-200/40 dark:border-orange-800/40 rounded-xl hover:bg-orange-100/80 dark:hover:bg-orange-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Cities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;
