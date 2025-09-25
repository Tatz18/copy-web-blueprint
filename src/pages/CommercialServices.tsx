import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Store, Warehouse, CheckCircle, ArrowRight, Phone, MapPin } from "lucide-react";

const CommercialServices = () => {
  const serviceTypes = [
    {
      title: "Office Spaces",
      description: "Premium office spaces in Kolkata's business districts",
      icon: Building2,
      priceRange: "₹80-200/sq ft"
    },
    {
      title: "Retail Outlets",
      description: "Strategic retail locations with high foot traffic",
      icon: Store,
      priceRange: "₹120-350/sq ft"
    },
    {
      title: "Warehouses",
      description: "Industrial and logistics spaces across Kolkata",
      icon: Warehouse,
      priceRange: "₹25-60/sq ft"
    }
  ];

  const businessDistricts = [
    {
      location: "Salt Lake Sector V",
      type: "IT Hub",
      avgRent: "₹95/sq ft",
      occupancy: "92%"
    },
    {
      location: "Park Street Area",
      type: "Business Center", 
      avgRent: "₹150/sq ft",
      occupancy: "88%"
    },
    {
      location: "New Town",
      type: "Emerging Hub",
      avgRent: "₹70/sq ft", 
      occupancy: "85%"
    },
    {
      location: "Howrah Industrial",
      type: "Manufacturing",
      avgRent: "₹45/sq ft",
      occupancy: "94%"
    }
  ];

  const services = [
    "Site selection and feasibility analysis",
    "Commercial property valuation and appraisal",
    "Lease negotiation and documentation", 
    "Due diligence and legal compliance",
    "Property management and maintenance",
    "Tenant representation services",
    "Investment advisory for commercial properties",
    "Market research and competitive analysis",
    "Space planning and design consultation",
    "Exit strategy and disposition services"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-secondary/10 via-accent/5 to-pink-soft/15">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Commercial Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Expert commercial real estate solutions for businesses across Kolkata
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Find Commercial Space
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Business Line: +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Commercial Property Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive commercial real estate services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className={`text-center shadow-card hover:shadow-luxury transition-smooth ${index === 0 ? 'border-secondary/30' : index === 1 ? 'border-pink/30' : 'border-accent/30'}`}>
                  <CardHeader>
                    <Icon className="h-16 w-16 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="text-lg font-semibold text-primary">{service.priceRange}</div>
                    <p className="text-sm text-muted-foreground">per month</p>
                    <Button className="w-full mt-4">Explore Options</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Districts */}
      <section className="py-16 bg-gradient-to-r from-pink-soft/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Prime Business Locations</h2>
            <p className="text-muted-foreground">
              Strategic locations across Kolkata's key business districts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessDistricts.map((district, index) => (
              <Card key={index} className={`shadow-card hover:shadow-glow transition-smooth ${index % 4 === 0 ? 'border-pink/20' : index % 4 === 1 ? 'border-accent/20' : index % 4 === 2 ? 'border-secondary/20' : 'border-primary/20'}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-primary mr-2" />
                    <CardTitle className="text-lg">{district.location}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">{district.type}</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Avg Rent:</span>
                    <span className="text-sm font-semibold">{district.avgRent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Occupancy:</span>
                    <span className="text-sm font-semibold text-green-600">{district.occupancy}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Commercial Services</h2>
              <p className="text-muted-foreground">
                End-to-end commercial real estate solutions for all your business requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-bl from-accent/10 via-pink/5 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Businesses Choose Us</h2>
            <p className="text-muted-foreground">
              Trusted by over 500+ businesses across Kolkata for their commercial real estate needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-card hover:shadow-glow transition-smooth border-pink/20">
              <CardHeader>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <CardTitle className="text-lg">Businesses Served</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Trusted by startups to Fortune 500 companies
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-glow transition-smooth border-accent/20">
              <CardHeader>
                <div className="text-3xl font-bold text-primary mb-2">10M+</div>
                <CardTitle className="text-lg">Sq Ft Managed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Extensive portfolio across all property types
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-glow transition-smooth border-secondary/20">
              <CardHeader>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <CardTitle className="text-lg">Client Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Long-term partnerships built on trust and results
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-glow transition-smooth border-primary/20">
              <CardHeader>
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <CardTitle className="text-lg">Years Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Deep market knowledge and proven expertise
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Commercial Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Streamlined approach to finding and securing the perfect commercial space for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-card hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-pink text-pink-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <CardTitle className="text-lg">Requirements Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Understanding your business needs, budget, and location preferences
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <CardTitle className="text-lg">Property Search</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Curated list of suitable properties matching your criteria
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <CardTitle className="text-lg">Negotiation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Expert negotiation to secure the best terms and pricing
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <CardTitle className="text-lg">Move-in Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Complete documentation and move-in assistance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink/5 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Your Ideal Commercial Space</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our commercial real estate experts help you find the perfect location for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Schedule Site Visit
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Download Commercial Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialServices;