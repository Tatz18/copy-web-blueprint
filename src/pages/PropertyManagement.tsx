import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Wrench, Users, Shield, CheckCircle, ArrowRight, Phone, Clock } from "lucide-react";

const PropertyManagement = () => {
  const services = [
    {
      title: "Maintenance & Repairs",
      description: "24/7 maintenance support and regular property upkeep",
      icon: Wrench
    },
    {
      title: "Tenant Management",
      description: "Complete tenant relations and communication handling",
      icon: Users
    },
    {
      title: "Security Services", 
      description: "Property security monitoring and emergency response",
      icon: Shield
    },
    {
      title: "Facility Management",
      description: "Common area maintenance and utility management",
      icon: Home
    }
  ];

  const managementServices = [
    "Regular property inspections and maintenance",
    "Tenant screening and lease management", 
    "Rent collection and financial reporting",
    "Emergency maintenance and repairs",
    "Common area cleaning and upkeep",
    "Security system monitoring",
    "Utility management and bill payments",
    "Property insurance coordination",
    "Legal compliance and documentation",
    "Vendor management and quality control"
  ];

  const packages = [
    {
      name: "Residential",
      price: "₹2,500",
      period: "per month",
      description: "Complete management for residential properties",
      features: [
        "24/7 maintenance support",
        "Tenant management",
        "Monthly inspections",
        "Rent collection",
        "Basic security monitoring"
      ]
    },
    {
      name: "Commercial", 
      price: "₹5,000",
      period: "per month", 
      description: "Comprehensive management for commercial spaces",
      features: [
        "All residential features",
        "Advanced security systems",
        "Facility management",
        "Compliance monitoring",
        "Vendor coordination"
      ]
    },
    {
      name: "Premium",
      price: "₹8,000", 
      period: "per month",
      description: "Full-service management with concierge support",
      features: [
        "All commercial features",
        "Concierge services",
        "VIP maintenance",
        "Property enhancement",
        "Investment advisory"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Property Management
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Complete property management services in Kolkata - from maintenance to tenant relations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Get Management Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Emergency: +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Management Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional property management that protects your investment and ensures tenant satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
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

      {/* Management Packages */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Management Packages</h2>
            <p className="text-muted-foreground">
              Choose the right management package for your property type and needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={index === 1 ? "border-2 border-primary relative" : "border-2"}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">Most Popular</span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <p className="text-muted-foreground text-sm">{pkg.period}</p>
                  <p className="text-muted-foreground text-sm pt-2">{pkg.description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-6">
                    Choose {pkg.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Complete Management Services</h2>
              <p className="text-muted-foreground">
                Everything you need to maintain and protect your property investment
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {managementServices.map((service, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">24/7 Emergency Support</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Round-the-clock emergency response for urgent property issues
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Immediate Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Emergency calls answered within 15 minutes, 24/7/365
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>On-Site Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Technician dispatch within 2 hours for urgent issues
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Security Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Continuous security monitoring and incident response
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Your Property Investment</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our professional team handle all aspects of property management while you enjoy peace of mind
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Management Service
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Schedule Property Inspection
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyManagement;