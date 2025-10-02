import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, PieChart, CheckCircle, ArrowRight, Phone, BarChart3, DollarSign, Users, FileText, Shield, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const InvestmentConsulting = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const consultingServices = [
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "Comprehensive analysis of Kolkata real estate market trends, price movements, and future growth projections."
    },
    {
      icon: Target,
      title: "Investment Strategy",
      description: "Customized investment strategies based on your financial goals, risk appetite, and investment horizon."
    },
    {
      icon: DollarSign,
      title: "ROI Calculator",
      description: "Detailed return on investment calculations including rental yields, capital appreciation, and tax benefits."
    },
    {
      icon: PieChart,
      title: "Portfolio Diversification",
      description: "Strategic property portfolio planning across different locations and property types for optimal returns."
    },
    {
      icon: FileText,
      title: "Due Diligence",
      description: "Complete legal and financial due diligence to ensure secure and profitable property investments."
    },
    {
      icon: Shield,
      title: "Exit Strategy Planning",
      description: "Strategic planning for property exit including timing, market conditions, and profit maximization."
    }
  ];

  const investmentOpportunities = [
    {
      title: "Residential Investment",
      description: "High-rental yield apartments and independent houses in prime locations",
      roi: "12-15% annually",
      risk: "Low to Medium",
      minInvestment: "₹50 Lakhs",
      features: ["Steady rental income", "Capital appreciation", "Tax benefits", "Easy liquidity"]
    },
    {
      title: "Commercial Investment",
      description: "Office spaces, retail outlets, and commercial complexes with corporate tenants",
      roi: "15-20% annually",
      risk: "Medium",
      minInvestment: "₹1 Crore",
      features: ["Higher rental yields", "Long-term leases", "Professional tenants", "Appreciation potential"]
    },
    {
      title: "Land Banking",
      description: "Strategic land acquisition in upcoming development corridors and growth areas",
      roi: "20-30% over 3-5 years",
      risk: "Medium to High",
      minInvestment: "₹25 Lakhs",
      features: ["High appreciation", "Future development", "Lower entry cost", "Long-term wealth"]
    }
  ];

  const marketInsights = [
    {
      area: "Salt Lake Sector V",
      growth: "+18%",
      trend: "Strong Growth",
      rental: "4.5%",
      reason: "IT hub expansion and metro connectivity"
    },
    {
      area: "New Town Action Area",
      growth: "+22%",
      trend: "Rapid Growth",
      rental: "5.2%",
      reason: "Planned infrastructure and commercial development"
    },
    {
      area: "EM Bypass Corridor",
      growth: "+15%",
      trend: "Steady Growth",
      rental: "4.8%",
      reason: "Connectivity and upcoming metro stations"
    },
    {
      area: "Rajarhat Area",
      growth: "+20%",
      trend: "High Growth",
      rental: "5.8%",
      reason: "Airport proximity and IT companies"
    }
  ];

  const successStories = [
    {
      name: "Rajesh Kumar",
      property: "3BHK in Salt Lake",
      investment: "₹75 Lakhs",
      currentValue: "₹1.2 Crores",
      period: "4 years",
      quote: "Achieved 60% appreciation through strategic location selection and optimal timing."
    },
    {
      name: "Priya Sharma",
      property: "Commercial Space, Sector V",
      investment: "₹1.5 Crores",
      currentValue: "₹2.8 Crores",
      period: "5 years",
      quote: "Generated consistent 18% annual returns through rental income and appreciation."
    },
    {
      name: "Amit Sengupta",
      property: "Land in New Town",
      investment: "₹40 Lakhs",
      currentValue: "₹85 Lakhs",
      period: "3 years",
      quote: "Over 100% returns through land banking strategy in developing corridor."
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
              Build Wealth Through Smart Real Estate
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Strategic investment consulting to maximize returns and build long-term wealth through carefully selected real estate opportunities in Kolkata's growing market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => navigate("/contact")}
              >
                Get Investment Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8"
                onClick={() => navigate("/properties")}
              >
                View Opportunities
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
              Comprehensive advisory services to guide your real estate investment journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-smooth">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-pink mx-auto mb-4" />
                    <CardTitle className="text-lg text-center">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm text-center">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Investment Opportunities</h2>
            <p className="text-muted-foreground">
              Diversified real estate investment options for different risk profiles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {investmentOpportunities.map((opportunity, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-smooth">
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-pink mb-2">{opportunity.roi}</div>
                  </div>
                  <CardTitle className="text-xl text-center">{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{opportunity.description}</p>
                  <div className="space-y-2 border-t pt-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Expected ROI:</span>
                      <span className="font-semibold text-pink">{opportunity.roi}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Risk Level:</span>
                      <span className="font-semibold">{opportunity.risk}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Min Investment:</span>
                      <span className="font-semibold">{opportunity.minInvestment}</span>
                    </div>
                  </div>
                  <div className="space-y-2 pt-2">
                    {opportunity.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-pink mr-2" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Market Insights & Trends</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-time market data and appreciation trends across Kolkata
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-smooth">
                <CardHeader>
                  <CardTitle className="text-lg">{insight.area}</CardTitle>
                  <div className="text-3xl font-bold text-pink">{insight.growth}</div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Trend:</span>
                    <span className="font-semibold text-green-500">{insight.trend}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Rental Yield:</span>
                    <span className="font-semibold">{insight.rental}</span>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2 border-t">{insight.reason}</p>
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
            <h2 className="text-3xl font-bold mb-4">Investment Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from our strategic investment advisory
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl">{story.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{story.property}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Investment:</span>
                      <span className="font-semibold">{story.investment}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Current Value:</span>
                      <span className="font-semibold text-pink">{story.currentValue}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Time Period:</span>
                      <span className="font-semibold">{story.period}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic border-t pt-4">"{story.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Packages */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Investment Consulting Packages</h2>
            <p className="text-muted-foreground">
              Choose the right advisory package for your investment goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="gradient-card shadow-card">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Basic Consultation</CardTitle>
                <div className="text-3xl font-bold text-pink">₹15,000</div>
                <p className="text-sm text-muted-foreground">One-time</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-pink mr-2" />
                  <span>Market analysis report</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-pink mr-2" />
                  <span>Investment opportunity identification</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-pink mr-2" />
                  <span>Basic ROI calculations</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-pink mr-2" />
                  <span>Property recommendations</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-pink mr-2" />
                  <span>Investment strategy overview</span>
                </div>
                <Button 
                  className="w-full mt-4"
                  onClick={() => {
                    navigate("/contact");
                    toast({ title: "Basic Consultation Selected", description: "We'll contact you soon." });
                  }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-glow border-pink relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-pink text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Comprehensive Advisory</CardTitle>
                <div className="text-3xl font-bold text-pink">₹50,000</div>
                <p className="text-sm text-muted-foreground">3 months</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-muted-foreground mb-2">Everything in Basic, plus:</div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-pink mr-2" />
                  <span>Detailed portfolio planning</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-pink mr-2" />
                  <span>Legal due diligence support</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-pink mr-2" />
                  <span>Negotiation assistance</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-pink mr-2" />
                  <span>Monthly market updates</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-pink mr-2" />
                  <span>Exit strategy planning</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-pink mr-2" />
                  <span>Tax optimization guidance</span>
                </div>
                <Button 
                  className="w-full mt-4"
                  onClick={() => {
                    navigate("/contact");
                    toast({ title: "Comprehensive Advisory Selected", description: "We'll contact you soon." });
                  }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Premium Wealth Management</CardTitle>
                <div className="text-3xl font-bold text-pink">₹1,50,000</div>
                <p className="text-sm text-muted-foreground">1 year</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-muted-foreground mb-2">Everything in Comprehensive, plus:</div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-pink mr-2" />
                  <span>Dedicated investment manager</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-pink mr-2" />
                  <span>Quarterly portfolio reviews</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-pink mr-2" />
                  <span>Priority property access</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-pink mr-2" />
                  <span>End-to-end transaction support</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-pink mr-2" />
                  <span>Annual wealth assessment</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-pink mr-2" />
                  <span>Legacy planning assistance</span>
                </div>
                <Button 
                  className="w-full mt-4"
                  onClick={() => {
                    navigate("/contact");
                    toast({ title: "Premium Wealth Management Selected", description: "We'll contact you soon." });
                  }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-soft/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our investment experts and discover how to build wealth through strategic real estate investments in Kolkata's growing market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={() => navigate("/contact")}
            >
              Book Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => navigate("/properties")}
            >
              Explore Opportunities
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestmentConsulting;