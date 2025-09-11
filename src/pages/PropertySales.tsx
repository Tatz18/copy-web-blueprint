import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, TrendingUp, Users, CheckCircle, ArrowRight, Phone } from "lucide-react";

const PropertySales = () => {
  const benefits = [
    "Free property valuation and market analysis",
    "Professional photography and virtual tours", 
    "Extensive marketing across multiple platforms",
    "Expert negotiation to maximize your sale price",
    "Complete legal assistance and documentation",
    "Post-sale support and guidance"
  ];

  const process = [
    {
      step: "1",
      title: "Property Evaluation",
      description: "Our experts conduct a comprehensive evaluation of your property to determine the optimal listing price."
    },
    {
      step: "2", 
      title: "Marketing Strategy",
      description: "We create a customized marketing plan with professional photography and targeted advertising."
    },
    {
      step: "3",
      title: "Buyer Screening",
      description: "We screen potential buyers and arrange qualified viewings to ensure serious inquiries."
    },
    {
      step: "4",
      title: "Negotiation & Closing",
      description: "Our team handles negotiations and manages all paperwork for a smooth transaction."
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
              Property Sales Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Sell your property quickly and at the best price with our expert sales team in Kolkata
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Get Free Valuation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Sales Service?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine market expertise with personalized service to ensure your property sells quickly at the best price
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Market Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deep knowledge of Kolkata's property market trends and pricing strategies
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Average sale time of 30 days with 95% of asking price achieved
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Personal sales manager assigned to your property from listing to closing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sales Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Sales Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven 4-step process that ensures maximum value for your property
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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

      {/* What's Included */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What's Included in Our Service</h2>
              <p className="text-muted-foreground">
                Comprehensive support from listing to closing - all at no upfront cost
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
          <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Property?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started with a free property valuation and personalized sales strategy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Download Sales Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertySales;