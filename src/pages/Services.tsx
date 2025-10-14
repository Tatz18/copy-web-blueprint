import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  Home, Search, Calculator, FileText, Shield, Users, 
  TrendingUp, MapPin, Phone, CheckCircle 
} from "lucide-react";

const Services = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Consultation Request Received!",
        description: "We'll contact you within 24 hours to schedule your consultation.",
      });
      setIsSubmitting(false);
      setIsOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    }, 1000);
  };
  const coreServices = [
    {
      icon: Home,
      title: "Residential Sales",
      description: "Complete buying and selling services for single-family homes, condos, and townhouses.",
      features: ["Market Analysis", "Professional Photography", "Staging Consultation", "Negotiation Support"]
    },
    {
      icon: TrendingUp,
      title: "Commercial Real Estate",
      description: "Expert guidance for office buildings, retail spaces, and investment properties.",
      features: ["Investment Analysis", "Lease Management", "Property Valuation", "Market Research"]
    },
    {
      icon: Shield,
      title: "Property Management",
      description: "Full-service property management for landlords and real estate investors.",
      features: ["Tenant Screening", "Rent Collection", "Maintenance Coordination", "Financial Reporting"]
    },
    {
      icon: Calculator,
      title: "Investment Consulting",
      description: "Strategic advice for building and managing your real estate investment portfolio.",
      features: ["ROI Analysis", "Market Forecasting", "Risk Assessment", "Portfolio Optimization"]
    }
  ];

  const additionalServices = [
    {
      title: "Property Valuation",
      description: "Accurate property appraisals using comparative market analysis and industry expertise."
    },
    {
      title: "Legal Documentation",
      description: "Comprehensive contract preparation and review to protect your interests."
    },
    {
      title: "Relocation Services",
      description: "Complete support for clients moving locally or from out of state."
    },
    {
      title: "Financing Assistance",
      description: "Connect with trusted lenders and explore financing options that fit your needs."
    },
    {
      title: "Neighborhood Analysis",
      description: "Detailed insights into schools, amenities, and community features."
    },
    {
      title: "Property Search",
      description: "Customized property searches based on your specific criteria and preferences."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We start with a comprehensive discussion about your goals, timeline, and requirements."
    },
    {
      step: "02", 
      title: "Market Analysis",
      description: "Our team conducts thorough market research to inform your strategy and pricing decisions."
    },
    {
      step: "03",
      title: "Property Search/Listing",
      description: "We either find properties that match your criteria or market your property effectively."
    },
    {
      step: "04",
      title: "Negotiation & Closing",
      description: "Expert negotiation and seamless transaction management through closing."
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
            Comprehensive real estate solutions designed to meet all your property needs with expertise and personalized attention.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
            Core Services
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our primary service offerings designed to handle every aspect of your real estate journey.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              const gradients = [
                'bg-gradient-primary', 'bg-gradient-pink', 'bg-pink', 
                'bg-accent', 'bg-gradient-pink-soft', 'bg-secondary'
              ];
              return (
                <Card key={index} className="h-full gradient-card shadow-card hover:shadow-glow transition-smooth group">
                  <CardHeader>
                    <div className={`w-16 h-16 ${gradients[index % gradients.length]} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl bg-gradient-primary bg-clip-text text-transparent">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm bg-accent/5 p-2 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-foreground font-medium">{feature}</span>
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
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
            Our Process
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A proven approach that ensures successful outcomes for every client.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-6 bg-gradient-card p-6 rounded-2xl shadow-card hover:shadow-glow transition-smooth group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-glow group-hover:scale-110 transition-smooth">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">{step.title}</h3>
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
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
            Additional Services
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Specialized services to support every aspect of your real estate experience.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-smooth p-6">
                <CardContent className="pt-6">
                  <FileText className="h-10 w-10 text-pink mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2 text-lg">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink to-pink/80">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your real estate goals with our comprehensive services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="secondary">
                  Schedule Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Schedule a Consultation</DialogTitle>
                  <DialogDescription>
                    Fill out the form below and we'll contact you within 24 hours to schedule your free consultation.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Input
                      id="service"
                      placeholder="e.g., Property Sales, Investment Consulting"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-pink">
              Request Information
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;