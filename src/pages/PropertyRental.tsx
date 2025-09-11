import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Shield, Users, CheckCircle, ArrowRight, Phone, Calendar } from "lucide-react";

const PropertyRental = () => {
  const services = [
    {
      title: "Tenant Screening",
      description: "Comprehensive background checks and verification process",
      icon: Users
    },
    {
      title: "Legal Documentation", 
      description: "Complete rental agreements and legal compliance",
      icon: Shield
    },
    {
      title: "Property Marketing",
      description: "Professional listing and tenant acquisition",
      icon: Home
    },
    {
      title: "Rent Collection",
      description: "Timely rent collection and financial management",
      icon: Calendar
    }
  ];

  const benefits = [
    "Zero vacancy guarantee for first 3 months",
    "Professional tenant screening and verification",
    "Legal rental agreement preparation", 
    "Monthly rent collection and remittance",
    "Property maintenance coordination",
    "Annual rent revision as per market rates",
    "Dispute resolution support",
    "24/7 emergency maintenance support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Property Rental Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Hassle-free property rental management in Kolkata with guaranteed returns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                List Your Property
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Call: +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Rental Management</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From tenant screening to rent collection, we handle everything so you can enjoy passive income
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

      {/* Rental Plans */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Rental Management Plans</h2>
            <p className="text-muted-foreground">
              Choose the plan that best fits your rental property needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Basic Plan</CardTitle>
                <div className="text-3xl font-bold text-primary">5%</div>
                <p className="text-muted-foreground text-sm">of monthly rent</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Tenant screening</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Rental agreement</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Rent collection</span>
                </div>
                <Button className="w-full mt-6">Choose Basic</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">Popular</span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Standard Plan</CardTitle>
                <div className="text-3xl font-bold text-primary">8%</div>
                <p className="text-muted-foreground text-sm">of monthly rent</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-muted-foreground mb-3">Everything in Basic, plus:</div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Property maintenance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">24/7 support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Dispute resolution</span>
                </div>
                <Button className="w-full mt-6">Choose Standard</Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Premium Plan</CardTitle>
                <div className="text-3xl font-bold text-primary">12%</div>
                <p className="text-muted-foreground text-sm">of monthly rent</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-muted-foreground mb-3">Everything in Standard, plus:</div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Vacancy guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Property insurance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Annual inspections</span>
                </div>
                <Button className="w-full mt-6">Choose Premium</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Rental Service</h2>
              <p className="text-muted-foreground">
                Professional management that maximizes your rental income while minimizing hassle
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Earning Rental Income Today</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us handle your property while you enjoy guaranteed monthly returns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Rental Estimate
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyRental;