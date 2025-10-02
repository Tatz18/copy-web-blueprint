import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Wrench, Users, Shield, CheckCircle, ArrowRight, DollarSign, FileText, Star, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const PropertyManagement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const managementServices = [
    {
      icon: Clock,
      title: "24/7 Maintenance",
      description: "Round-the-clock maintenance support with verified technicians for all types of repairs and emergencies."
    },
    {
      icon: DollarSign,
      title: "Rent Collection",
      description: "Automated rent collection system with timely payments, late fee management, and detailed financial reporting."
    },
    {
      icon: Users,
      title: "Tenant Management",
      description: "Complete tenant lifecycle management from screening to lease renewal and dispute resolution."
    },
    {
      icon: Shield,
      title: "Legal Compliance",
      description: "Ensure all properties comply with local regulations, safety standards, and legal requirements."
    },
    {
      icon: FileText,
      title: "Property Inspections",
      description: "Regular property inspections with detailed reports and maintenance recommendations."
    },
    {
      icon: Home,
      title: "Digital Platform",
      description: "Owner and tenant portal for seamless communication, payments, and service requests."
    }
  ];

  const keyFeatures = [
    {
      title: "Tenant Screening",
      description: "Comprehensive background checks including credit verification, employment history, and previous landlord references.",
      benefits: ["Quality tenants", "Reduced defaults", "Long-term leases"]
    },
    {
      title: "Financial Management",
      description: "Complete financial oversight including rent collection, expense tracking, and detailed monthly reporting.",
      benefits: ["Timely payments", "Transparent accounting", "Tax documentation"]
    },
    {
      title: "Maintenance Coordination",
      description: "Proactive maintenance scheduling with trusted vendors and emergency response capabilities.",
      benefits: ["Property preservation", "Cost optimization", "Tenant satisfaction"]
    },
    {
      title: "Legal Compliance",
      description: "Ensure properties meet all regulatory requirements including safety standards and documentation.",
      benefits: ["Risk mitigation", "Legal protection", "Regulatory compliance"]
    }
  ];

  const successStories = [
    {
      name: "Rajesh Kumar",
      properties: "3 Properties in Salt Lake",
      income: "₹85,000/month",
      quote: "Phoenix manages all my rental properties flawlessly. Tenants are happy, maintenance is prompt, and I receive regular updates."
    },
    {
      name: "Priya Sharma",
      properties: "Commercial Complex, Sector V",
      income: "₹2,50,000/month",
      quote: "Professional property management with excellent tenant relations. They handle everything so I can focus on my business."
    },
    {
      name: "Amit Sengupta",
      properties: "5 Apartments across Kolkata",
      income: "₹1,45,000/month",
      quote: "Best decision was to hand over property management to Phoenix. Consistent income and well-maintained properties."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pink/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hassle-Free Property Management
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Complete property management services ensuring optimal returns, happy tenants, and well-maintained properties with 24/7 support and professional oversight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => navigate("/contact")}
              >
                Start Management
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8"
                onClick={() => navigate("/properties")}
              >
                View Managed Properties
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Management Services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Management Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Full-service property management covering every aspect of property ownership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-smooth">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-pink mx-auto mb-4" />
                    <CardTitle className="text-lg text-center">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm text-center">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Management Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Management Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Detailed breakdown of our comprehensive management approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Key Benefits:</p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-pink mr-2" />
                          <span className="text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Property Owner Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real experiences from property owners who trust us with their investments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-smooth">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                  <p className="text-muted-foreground italic">"{story.quote}"</p>
                  <div className="border-t pt-4 space-y-1">
                    <h4 className="font-semibold text-foreground">{story.name}</h4>
                    <p className="text-sm text-muted-foreground">{story.properties}</p>
                    <p className="text-sm font-medium text-pink">Income: {story.income}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-pink/5 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Professional Property Management?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experienced team take care of your properties while you enjoy consistent returns and peace of mind. Get started with professional property management today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={() => {
                navigate("/contact");
                toast({ title: "Start Management", description: "We'll contact you to discuss your property management needs." });
              }}
            >
              Start Management
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => navigate("/properties")}
            >
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyManagement;