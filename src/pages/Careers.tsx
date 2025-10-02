import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, TrendingUp, MapPin, Clock, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Careers = () => {
  const { toast } = useToast();
  const [selectedPosition, setSelectedPosition] = useState<string>("");

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    toast({
      title: "Application Process",
      description: `To apply for ${position}, please send your resume to careers@phoenixrealesthatic.com`,
    });
  };

  const benefits = [
    {
      icon: Users,
      title: "Great Team Culture",
      description: "Work with passionate professionals in a supportive environment that encourages growth.",
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Attractive salary packages with performance-based incentives and growth opportunities.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career progression paths with training programs and skill development opportunities.",
    },
  ];

  const positions = [
    {
      title: "Sales Executive",
      type: "Full Time",
      location: "Kolkata, Salt Lake",
      salary: "₹3-5 LPA + Incentives",
      description: "We are looking for a dynamic Sales Executive to join our growing team. You'll be responsible for generating leads, conducting property showings, and closing deals.",
      requirements: [
        "1-3 years of sales experience (real estate preferred)",
        "Excellent communication and negotiation skills",
        "Bachelor's degree in any field",
        "Strong networking abilities",
        "Own vehicle preferred",
      ],
      responsibilities: [
        "Generate and follow up on leads",
        "Conduct property tours and presentations",
        "Negotiate deals and close sales",
      ],
    },
    {
      title: "Back Office Executive",
      type: "Full Time",
      location: "Kolkata, Salt Lake",
      salary: "₹2.5-4 LPA",
      description: "Join our administrative team as a Back Office Executive. Handle documentation, client support, and ensure smooth operations behind the scenes.",
      requirements: [
        "0-2 years of administrative experience",
        "Proficiency in MS Office Suite",
        "Strong organizational skills",
        "Attention to detail",
        "Graduate in any discipline",
      ],
      responsibilities: [
        "Manage property documentation",
        "Handle client inquiries and support",
        "Maintain databases and records",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build Your Career in Real Estate with Phoenix Realesthatic. We're looking for passionate individuals to grow with us.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join a dynamic team that values growth, innovation, and excellence in real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground">
              Discover exciting career opportunities with us
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {position.salary}
                        </div>
                      </div>
                    </div>
                    <Button onClick={() => handleApply(position.title)}>
                      Apply Now
                    </Button>
                  </div>
                  <CardDescription className="mt-4">
                    {position.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
