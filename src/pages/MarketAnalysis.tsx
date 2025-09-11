import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3, Target, CheckCircle, ArrowRight, Phone, PieChart } from "lucide-react";

const MarketAnalysis = () => {
  const analysisServices = [
    {
      title: "Market Trends",
      description: "Real-time analysis of Kolkata's property market trends and forecasts",
      icon: TrendingUp
    },
    {
      title: "Price Analytics",
      description: "Comprehensive pricing analysis across different localities",
      icon: BarChart3
    },
    {
      title: "Investment Opportunities", 
      description: "Identification of high-potential investment areas and projects",
      icon: Target
    },
    {
      title: "Comparative Analysis",
      description: "Detailed comparison of properties and market segments",
      icon: PieChart
    }
  ];

  const reportFeatures = [
    "Current market trends and price movements",
    "Locality-wise price analysis and forecasts", 
    "Rental yield analysis and projections",
    "Infrastructure development impact assessment",
    "Supply and demand dynamics",
    "Investment opportunity identification",
    "Risk assessment and mitigation strategies",
    "Market timing recommendations",
    "Comparative property analysis",
    "Exit strategy recommendations"
  ];

  const localities = [
    {
      area: "Salt Lake City",
      avgPrice: "₹8,500/sq ft",
      trend: "+12%",
      prediction: "Strong Growth"
    },
    {
      area: "New Town",
      avgPrice: "₹6,200/sq ft", 
      trend: "+18%",
      prediction: "High Potential"
    },
    {
      area: "Ballygunge",
      avgPrice: "₹12,000/sq ft",
      trend: "+8%",
      prediction: "Steady Growth"
    },
    {
      area: "Park Street",
      avgPrice: "₹15,500/sq ft",
      trend: "+5%",
      prediction: "Premium Stable"
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
              Market Analysis
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Data-driven insights and comprehensive analysis of Kolkata's real estate market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Get Market Report
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Analyst Call: +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Market Intelligence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional analysis services to guide your real estate decisions with data-backed insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analysisServices.map((service, index) => {
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

      {/* Current Market Snapshot */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kolkata Market Snapshot</h2>
            <p className="text-muted-foreground">
              Latest market data and trends across key localities in Kolkata
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localities.map((locality, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{locality.area}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Avg Price:</span>
                      <span className="font-semibold">{locality.avgPrice}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">YoY Growth:</span>
                      <span className="font-semibold text-green-600">{locality.trend}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Outlook:</span>
                      <span className="font-semibold text-primary">{locality.prediction}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Reports */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Detailed Market Reports</h2>
              <p className="text-muted-foreground mb-8">
                Our comprehensive market analysis reports provide you with the insights needed to make informed real estate decisions.
              </p>
              
              <div className="space-y-4">
                {reportFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Market Analysis Reports</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary">25+</div>
                      <div className="text-sm text-muted-foreground">Localities Covered</div>
                    </Card>
                    <Card className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary">5000+</div>
                      <div className="text-sm text-muted-foreground">Properties Analyzed</div>
                    </Card>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary">92%</div>
                      <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                    </Card>
                    <Card className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary">Weekly</div>
                      <div className="text-sm text-muted-foreground">Report Updates</div>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Report Types */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Analysis Report Types</h2>
            <p className="text-muted-foreground">
              Choose the type of analysis that best fits your requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Basic Report</CardTitle>
                <div className="text-3xl font-bold text-primary">₹2,500</div>
                <p className="text-muted-foreground text-sm">Per locality analysis</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Market trends</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Price analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Basic forecasts</span>
                </div>
                <Button className="w-full mt-6">Order Basic</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">Popular</span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Comprehensive</CardTitle>
                <div className="text-3xl font-bold text-primary">₹7,500</div>
                <p className="text-muted-foreground text-sm">Multi-area analysis</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-muted-foreground mb-3">Everything in Basic, plus:</div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Investment opportunities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Risk assessment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Comparative analysis</span>
                </div>
                <Button className="w-full mt-6">Order Comprehensive</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Premium</CardTitle>
                <div className="text-3xl font-bold text-primary">₹15,000</div>
                <p className="text-muted-foreground text-sm">City-wide analysis</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-muted-foreground mb-3">Everything in Comprehensive, plus:</div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Personal consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Custom recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Quarterly updates</span>
                </div>
                <Button className="w-full mt-6">Order Premium</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Make Data-Driven Real Estate Decisions</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get access to comprehensive market intelligence and expert analysis to maximize your investment returns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Request Custom Analysis
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Download Sample Report
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketAnalysis;