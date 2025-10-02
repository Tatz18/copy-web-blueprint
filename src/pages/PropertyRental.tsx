import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Shield, Users, CheckCircle, ArrowRight, Building, Star, Clock, FileText, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const PropertyRental = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const process = [
    {
      step: "1",
      title: "Property Listing",
      description: "We create attractive listings with professional photos and detailed descriptions to attract quality tenants."
    },
    {
      step: "2",
      title: "Tenant Screening",
      description: "Comprehensive background checks including credit score, employment verification, and reference validation."
    },
    {
      step: "3",
      title: "Agreement & Documentation",
      description: "Legal rental agreements with proper documentation and security deposit management."
    },
    {
      step: "4",
      title: "Ongoing Management",
      description: "24/7 support for maintenance requests, rent collection, and tenant relationship management."
    }
  ];

  const rentalServices = [
    {
      icon: Users,
      title: "Tenant Sourcing",
      description: "Access to verified tenant database with pre-screened professionals and families looking for quality rental properties."
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description: "Comprehensive rental agreements compliant with West Bengal tenancy laws with proper registration and stamp duty."
    },
    {
      icon: Clock,
      title: "Rent Collection",
      description: "Automated rent collection system with timely payments, late fee management, and financial reporting."
    },
    {
      icon: Home,
      title: "Property Maintenance",
      description: "24/7 maintenance support with verified vendor network for repairs, cleaning, and property upkeep."
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Property insurance and tenant default protection to safeguard your investment against damages and defaults."
    },
    {
      icon: CheckCircle,
      title: "Regular Inspections",
      description: "Quarterly property inspections with detailed reports to ensure your property is well-maintained."
    }
  ];

  const propertyTypes = [
    {
      title: "Residential Rental",
      description: "Apartments, independent houses, and villas for families and professionals",
      rent: "₹15,000 - ₹50,000",
      locations: ["Salt Lake", "New Town", "Ballygunge", "Park Street"]
    },
    {
      title: "Commercial Rental",
      description: "Office spaces, shops, and commercial complexes for businesses",
      rent: "₹25,000 - ₹1,00,000",
      locations: ["Sector V", "Park Street", "Camac Street", "AJC Bose Road"]
    },
    {
      title: "Luxury Rental",
      description: "Premium properties with high-end amenities and concierge services",
      rent: "₹50,000 - ₹2,00,000",
      locations: ["Alipore", "Ballygunge", "New Town", "EM Bypass"]
    }
  ];

  const testimonials = [
    {
      quote: "Phoenix managed my property rental seamlessly. Found quality tenants within 2 weeks and handle everything professionally.",
      name: "Sneha Roy",
      property: "3BHK Apartment, Salt Lake",
      earning: "₹28,000/month"
    },
    {
      quote: "Excellent service for commercial property rental. They handle all tenant issues and ensure timely rent collection.",
      name: "Rajesh Kumar",
      property: "Commercial Space, Sector V",
      earning: "₹65,000/month"
    },
    {
      quote: "Professional property management with regular updates. Highly recommend for hassle-free rental income.",
      name: "Priya Sharma",
      property: "2BHK Flat, Park Street",
      earning: "₹22,000/month"
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-secondary/10 via-pink/5 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Maximize Your Rental Income
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional property rental management services ensuring consistent income, quality tenants, and hassle-free property ownership experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => navigate("/contact")}
              >
                List Your Property
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8"
                onClick={() => navigate("/properties")}
              >
                View Rental Properties
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Process */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Rental Management Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Streamlined process to get your property rented quickly with quality tenants
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-glow transition-smooth">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-pink rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Rental Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end property rental management for peace of mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-smooth">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-pink mx-auto mb-4" />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Property Types We Manage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized management for different property categories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {propertyTypes.map((type, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{type.description}</p>
                  <div>
                    <p className="text-sm font-medium text-foreground">Average Rent:</p>
                    <p className="text-lg font-bold text-pink">{type.rent}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Popular Locations:</p>
                    <div className="flex flex-wrap gap-2">
                      {type.locations.map((location, idx) => (
                        <span key={idx} className="text-xs bg-pink/10 text-foreground px-2 py-1 rounded-full">
                          {location}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Management Fee Structure */}
      <section className="py-16 bg-gradient-to-bl from-pink-soft/15 via-primary/5 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Management Fee Structure</h2>
            <p className="text-muted-foreground">
              Transparent pricing with no hidden costs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Basic Management</CardTitle>
                <div className="text-3xl font-bold text-primary">8%</div>
                <p className="text-muted-foreground text-sm">of monthly rent</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Tenant sourcing & screening</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Rental agreement preparation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Rent collection</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Basic maintenance coordination</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Monthly financial reports</span>
                </div>
                <Button 
                  className="w-full mt-6"
                  onClick={() => {
                    navigate("/contact");
                    toast({ title: "Basic Management Selected", description: "Our team will contact you soon." });
                  }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink relative shadow-glow">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-pink text-pink-foreground px-4 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Full Management</CardTitle>
                <div className="text-3xl font-bold text-primary">12%</div>
                <p className="text-muted-foreground text-sm">of monthly rent</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-muted-foreground mb-3">Everything in Basic, plus:</div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">24/7 emergency maintenance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Quarterly property inspections</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Legal support & documentation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Insurance claim assistance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Tenant relationship management</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Vacancy marketing at no extra cost</span>
                </div>
                <Button 
                  className="w-full mt-6"
                  onClick={() => {
                    navigate("/contact");
                    toast({ title: "Full Management Selected", description: "Our team will contact you soon." });
                  }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Premium Management</CardTitle>
                <div className="text-3xl font-bold text-primary">15%</div>
                <p className="text-muted-foreground text-sm">of monthly rent</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-muted-foreground mb-3">Everything in Full Management, plus:</div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Interior design consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Property value enhancement advice</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Concierge services for tenants</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Annual property appreciation reports</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Investment advisory services</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Tax planning assistance</span>
                </div>
                <Button 
                  className="w-full mt-6"
                  onClick={() => {
                    navigate("/contact");
                    toast({ title: "Premium Management Selected", description: "Our team will contact you soon." });
                  }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Property Owner Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real experiences from satisfied property owners across Kolkata
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-smooth">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.property}</p>
                    <p className="text-sm font-medium text-pink">Earning: {testimonial.earning}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent/5 via-secondary/10 to-pink/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Earning Rental Income Today</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            List your property with us and start earning consistent rental income with professional management and quality tenants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={() => navigate("/contact")}
            >
              List Your Property
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => navigate("/properties")}
            >
              View Rental Market
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyRental;