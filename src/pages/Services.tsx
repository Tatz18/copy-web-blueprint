import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, Search, Calculator, FileText, Shield, Users, 
  TrendingUp, MapPin, Phone, CheckCircle 
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Search,
      title: "Property Search",
      description: "Find your perfect home from our extensive database of verified properties across India.",
      features: ["Personalized matching", "Virtual tours", "Neighborhood insights", "Price comparisons"]
    },
    {
      icon: Home,
      title: "Property Selling",
      description: "Get the best value for your property with our expert marketing and negotiation services.",
      features: ["Professional photography", "Market analysis", "Expert pricing", "Quick closing"]
    },
    {
      icon: Calculator,
      title: "Home Loan Assistance",
      description: "Navigate the complex world of home financing with our expert guidance and bank partnerships.",
      features: ["Loan pre-approval", "Best rates", "Document assistance", "EMI calculator"]
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description: "Complete legal support for all property transactions with verified documentation.",
      features: ["Title verification", "Registration support", "Legal clearance", "Document drafting"]
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Make smart property investments with our market insights and growth predictions.",
      features: ["Market analysis", "ROI calculations", "Future projections", "Portfolio advice"]
    },
    {
      icon: Shield,
      title: "Property Insurance",
      description: "Protect your investment with comprehensive property insurance solutions.",
      features: ["Coverage analysis", "Claims support", "Policy comparison", "Risk assessment"]
    }
  ];

  const additionalServices = [
    "Interior Design Consultation",
    "Vastu Compliance Check",
    "Property Valuation", 
    "Rental Management",
    "Property Maintenance",
    "Tax Advisory"
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Share your requirements and budget with our expert consultants"
    },
    {
      step: "2", 
      title: "Property Matching",
      description: "We curate a list of properties that match your specific needs"
    },
    {
      step: "3",
      title: "Site Visits",
      description: "Visit shortlisted properties with our team for detailed inspection"
    },
    {
      step: "4",
      title: "Documentation",
      description: "Complete all legal formalities with our comprehensive support"
    },
    {
      step: "5",
      title: "Handover",
      description: "Get the keys to your dream home with complete documentation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive real estate solutions designed to make your property journey smooth, 
            transparent, and successful. From finding your dream home to closing the deal.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Complete Real Estate Solutions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Our Proven Process
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Additional Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent>
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our expert team guide you through every step of your real estate journey. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="h-4 w-4 mr-2" />
              Call Now: +91 98765 43210
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <MapPin className="h-4 w-4 mr-2" />
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;