import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Trophy, Clock, Shield, Users, TrendingUp, Phone, ArrowRight } from "lucide-react";

const PropertySales = () => {
  const salesProcess = [
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
      icon: Trophy,
      title: "10+ Years Experience",
      description: "Decade of proven track record in Kolkata real estate market with over 2000+ successful transactions."
    },
    {
      icon: TrendingUp,
      title: "Best Market Prices",
      description: "We achieve 15-20% higher selling prices through strategic marketing and expert negotiation skills."
    },
    {
      icon: Clock,
      title: "Quick Sale Guarantee",
      description: "Average selling time of 45-60 days with our proven marketing strategies and buyer network."
    },
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Complete legal verification and documentation support with insurance coverage for transactions."
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "98% customer satisfaction rate with dedicated relationship managers for personalized service."
    },
    {
      icon: CheckCircle,
      title: "Transparent Process",
      description: "Clear communication and regular updates throughout the selling process with detailed reports."
    }
  ];

  const salesPackages = [
    {
      name: "Basic Sale",
      commission: "2%",
      features: [
        "Property Valuation",
        "Basic Marketing",
        "Buyer Coordination",
        "Legal Documentation",
        "Sale Agreement Preparation"
      ],
      popular: false
    },
    {
      name: "Premium Sale",
      commission: "2.5%",
      features: [
        "Everything in Basic",
        "Professional Photography",
        "360° Virtual Tours",
        "Premium Listing Placement",
        "Social Media Marketing",
        "Dedicated Relationship Manager",
        "Home Staging Consultation"
      ],
      popular: true
    },
    {
      name: "Luxury Sale",
      commission: "3%",
      features: [
        "Everything in Premium",
        "Drone Photography & Video",
        "Luxury Property Magazine Features",
        "Exclusive Buyer Network Access",
        "Interior Design Consultation",
        "Concierge Services",
        "Post-Sale Support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Banerjee",
      location: "Bhawanipur",
      amount: "₹95 Lakhs",
      review: "Phoenix Realesthatic sold my 3BHK apartment in just 3 weeks at 18% above my expected price. Their marketing strategy was exceptional!"
    },
    {
      name: "Priya Chakraborty",
      location: "Salt Lake",
      amount: "₹1.2 Crores",
      review: "Professional service from start to finish. They handled everything while I was abroad. Highly recommend for property selling."
    },
    {
      name: "Amit Sengupta",
      location: "New Town",
      amount: "₹85 Lakhs",
      review: "Transparent process, excellent communication, and got the best price in the market. Will definitely use their services again."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-4 opacity-90">Expert Property Sales</p>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Sell Your Property<br />
                At Best Market Price
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Get 15-20% higher selling prices with our proven marketing strategies, expert negotiations, and extensive buyer network across Kolkata.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Valuation
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  View Sold Properties
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=500&fit=crop"
                alt="Luxury home for sale"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sales Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Proven Sales Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach that ensures maximum returns and hassle-free property selling experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {salesProcess.map((step, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/20 transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Phoenix Realesthatic?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven expertise that delivers exceptional results for property sellers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sales Packages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Choose Your Sales Package</h2>
            <p className="text-lg text-muted-foreground">
              Tailored solutions to meet different property selling needs and budgets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {salesPackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-2 border-primary shadow-xl scale-105' : 'border'}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">{pkg.commission}</div>
                  <p className="text-muted-foreground">Commission</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button 
                    className={`w-full mt-6 ${pkg.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Real results from satisfied property sellers across Kolkata
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.review}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-sm font-medium text-primary mt-1">Sold: {testimonial.amount}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Sell Your Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Get a free property valuation and discover how much your property is worth in today's market. Our experts are ready to help you achieve the best possible price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
              <Phone className="mr-2 h-5 w-5" />
              Get Free Valuation
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              View Market Trends
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertySales;