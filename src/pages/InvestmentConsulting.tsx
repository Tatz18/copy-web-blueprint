import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, PieChart, CheckCircle, ArrowRight, Phone, BarChart3 } from "lucide-react";

const InvestmentConsulting = () => {
  const services = [
    {
      title: "Market Analysis",
      description: "In-depth analysis of Kolkata's real estate market trends and opportunities",
      icon: BarChart3
    },
    {
      title: "Portfolio Planning",
      description: "Customized investment strategies based on your financial goals",
      icon: Target
    },
    {
      title: "Risk Assessment", 
      description: "Comprehensive evaluation of investment risks and mitigation strategies",
      icon: PieChart
    },
    {
      title: "ROI Optimization",
      description: "Maximize returns through strategic property selection and timing",
      icon: TrendingUp
    }
  ];

  const expertise = [
    "Residential property investment strategies",
    "Commercial real estate opportunities", 
    "Pre-launch and under-construction projects",
    "Rental yield optimization",
    "Property flipping strategies",
    "Tax-efficient investment structures",
    "Market timing and entry/exit strategies",
    "Portfolio diversification across locations"
  ];

  const investmentTypes = [
    {
      type: "Residential",
      description: "Apartments, villas, and plots in prime Kolkata locations",
      minInvestment: "₹25 Lakhs",
      expectedReturn: "8-12%"
    },
    {
      type: "Commercial", 
      description: "Office spaces, retail outlets, and warehouses",
      minInvestment: "₹50 Lakhs",
      expectedReturn: "10-15%"
    },
    {
      type: "Pre-Launch",
      description: "Early-stage projects with maximum appreciation potential",
      minInvestment: "₹20 Lakhs", 
      expectedReturn: "15-25%"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-accent/10 via-primary/5 to-pink-soft/15">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Investment Consulting
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Strategic real estate investment guidance to build wealth through Kolkata's property market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Speak to Expert: +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Investment Consulting Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive investment advisory to help you make informed real estate decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className={`text-center shadow-card hover:shadow-luxury transition-smooth ${index % 4 === 0 ? 'border-primary/20' : index % 4 === 1 ? 'border-pink/20' : index % 4 === 2 ? 'border-accent/20' : 'border-secondary/20'}`}>
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

      {/* Investment Types */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-pink-soft/10 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Investment Opportunities</h2>
            <p className="text-muted-foreground">
              Diverse real estate investment options tailored to different risk profiles and budgets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {investmentTypes.map((investment, index) => (
              <Card key={index} className={`text-center shadow-card hover:shadow-glow transition-smooth ${index === 0 ? 'border-primary/30' : index === 1 ? 'border-pink/30' : 'border-accent/30'}`}>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{investment.type}</CardTitle>
                  <p className="text-muted-foreground text-sm">{investment.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Min Investment:</span>
                      <span className="font-semibold">{investment.minInvestment}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Expected Return:</span>
                      <span className="font-semibold text-primary">{investment.expectedReturn}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Investment Expertise</h2>
              <p className="text-muted-foreground">
                Specialized knowledge across all aspects of real estate investment in Kolkata
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gradient-to-bl from-accent/10 via-pink/5 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Consulting Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to identify and execute profitable real estate investments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-card hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-pink text-pink-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <CardTitle className="text-lg">Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Evaluate your financial goals, risk tolerance, and investment timeline
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <CardTitle className="text-lg">Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Develop customized investment strategy and property selection criteria
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <CardTitle className="text-lg">Execution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Identify opportunities, conduct due diligence, and facilitate transactions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <CardTitle className="text-lg">Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Ongoing portfolio review and optimization for maximum returns
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-soft/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Wealth Through Real Estate?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get personalized investment advice from Kolkata's leading real estate experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Schedule Free Analysis
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Download Investment Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestmentConsulting;