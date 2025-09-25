import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, TrendingUp, Users, CheckCircle, ArrowRight, Phone, Star, Clock, Shield, UserCheck, Eye, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const PropertySales = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGetValuation = () => {
    navigate("/market-analysis");
    toast({
      title: "Free Property Valuation",
      description: "Get your property valued by our certified experts."
    });
  };

  const handleViewSoldProperties = () => {
    navigate("/properties?filter=sold");
    toast({
      title: "Sold Properties",
      description: "Viewing recently sold properties in your area."
    });
  };

  const handleGetStarted = (packageType: string) => {
    navigate("/contact");
    toast({
      title: `${packageType} Package Selected`,
      description: "Our team will contact you within 24 hours to get started."
    });
  };
  const benefits = [
    "Property Valuation",
    "Basic Marketing", 
    "Buyer Coordination",
    "Legal Documentation",
    "Sale Agreement Preparation"
  ];

  const premiumBenefits = [
    "Everything in Basic",
    "Professional Photography",
    "360° Virtual Tours",
    "Premium Listing Placement",
    "Social Media Marketing",
    "Dedicated Relationship Manager",
    "Home Staging Consultation"
  ];

  const luxuryBenefits = [
    "Everything in Premium",
    "Drone Photography & Video",
    "Luxury Property Magazine Features",
    "Exclusive Buyer Network Access",
    "Interior Design Consultation",
    "Concierge Services",
    "Post-Sale Support"
  ];

  const process = [
    {
      step: "1",
      title: "Property Valuation",
      description: "Our certified appraisers conduct comprehensive market analysis to determine the optimal selling price for your property."
    },
    {
      step: "2", 
      title: "Marketing Strategy",
      description: "We create compelling property listings with professional photography and deploy multi-channel marketing campaigns."
    },
    {
      step: "3",
      title: "Buyer Screening",
      description: "We pre-qualify potential buyers and arrange viewings to ensure serious inquiries and smooth transactions."
    },
    {
      step: "4",
      title: "Negotiation & Closing",
      description: "Our expert negotiators secure the best deal while handling all paperwork and legal formalities for you."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "10+ Years Experience",
      description: "Decade of proven track record in Kolkata real estate market with over 2000+ successful transactions."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Best Market Prices", 
      description: "We achieve 15-20% higher selling prices through strategic marketing and expert negotiation skills."
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "Quick Sale Guarantee",
      description: "Average selling time of 45-60 days with our proven marketing strategies and buyer network."
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Legal Protection",
      description: "Complete legal verification and documentation support with insurance coverage for transactions."
    },
    {
      icon: <UserCheck className="h-12 w-12 text-primary" />,
      title: "Customer Satisfaction",
      description: "98% customer satisfaction rate with dedicated relationship managers for personalized service."
    },
    {
      icon: <Eye className="h-12 w-12 text-primary" />,
      title: "Transparent Process",
      description: "Clear communication and regular updates throughout the selling process with detailed reports."
    }
  ];

  const testimonials = [
    {
      quote: "Phoenix Realesthatic sold my 3BHK apartment in just 3 weeks at 18% above my expected price. Their marketing strategy was exceptional!",
      name: "Rajesh Banerjee",
      location: "Bhawanipur",
      amount: "₹95 Lakhs"
    },
    {
      quote: "Professional service from start to finish. They handled everything while I was abroad. Highly recommend for property selling.",
      name: "Priya Chakraborty", 
      location: "Salt Lake",
      amount: "₹1.2 Crores"
    },
    {
      quote: "Transparent process, excellent communication, and got the best price in the market. Will definitely use their services again.",
      name: "Amit Sengupta",
      location: "New Town", 
      amount: "₹85 Lakhs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-pink/5 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sell Your Property At Best Market Price
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get 15-20% higher selling prices with our proven marketing strategies, expert negotiations, and extensive buyer network across Kolkata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={handleGetValuation}
              >
                Get Free Valuation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8"
                onClick={handleViewSoldProperties}
              >
                View Sold Properties
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Process */}
      <section className="py-16 bg-gradient-to-r from-pink-soft/20 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Proven Sales Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach that ensures maximum returns and hassle-free property selling experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-glow transition-smooth">
                <CardHeader>
                  <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-primary' : 'bg-pink'} text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold`}>
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

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Phoenix Realesthatic?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proven expertise that delivers exceptional results for property sellers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className={`text-center shadow-card hover:shadow-luxury transition-smooth ${index % 3 === 0 ? 'border-pink/20' : index % 3 === 1 ? 'border-primary/20' : 'border-accent/20'}`}>
                <CardHeader>
                  <div className="mx-auto mb-4">{item.icon}</div>
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

      {/* Sales Packages */}
      <section className="py-16 bg-gradient-to-br from-accent/5 via-primary/5 to-pink-soft/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Sales Package</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions to meet different property selling needs and budgets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Package */}
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Basic Sale</CardTitle>
                <div className="text-3xl font-bold text-primary">2% Commission</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start text-left">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full mt-6"
                  onClick={() => handleGetStarted("Premium")}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="text-center border-primary relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Premium Sale</CardTitle>
                <div className="text-3xl font-bold text-primary">2.5% Commission</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {premiumBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start text-left">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            {/* Luxury Package */}
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Luxury Sale</CardTitle>
                <div className="text-3xl font-bold text-primary">3% Commission</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {luxuryBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start text-left">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full mt-6"
                  onClick={() => handleGetStarted("Luxury")}
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
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from satisfied property sellers across Kolkata
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
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
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-sm font-medium text-primary">Sold: {testimonial.amount}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink/5 via-primary/5 to-accent/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Property?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free property valuation and discover how much your property is worth in today's market. Our experts are ready to help you achieve the best possible price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Free Valuation
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              View Market Trends
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertySales;