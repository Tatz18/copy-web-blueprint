import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, Building, Heart, Phone, Mail } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Building, value: "500+", label: "Properties Sold" },
    { icon: Users, value: "1000+", label: "Happy Families" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Heart, value: "99%", label: "Client Satisfaction" }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      experience: "15+ years in Real Estate",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma", 
      role: "Sales Director",
      experience: "12+ years in Property Sales",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Amit Singh",
      role: "Property Consultant", 
      experience: "8+ years in Real Estate",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink/20 via-pink-soft/20 to-transparent">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-pink bg-clip-text text-transparent mb-6">
            About Phoenix Realesthatic
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in finding the perfect home across India. We've been helping families 
            find their dream properties for over 15 years with dedication, expertise, and personalized service.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const gradients = ['bg-gradient-pink', 'bg-gradient-pink-soft', 'bg-pink', 'bg-accent'];
              return (
                <Card key={index} className="text-center gradient-card shadow-glow hover:shadow-luxury transition-smooth">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 ${gradients[index]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">{stat.value}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Story</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
                  alt="Modern office building"
                  className="rounded-2xl shadow-xl"
                />
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Building Dreams Since 2008
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Phoenix Realesthatic was founded with a simple mission: to make the dream of homeownership 
                  accessible to every Indian family. What started as a small real estate consultancy 
                  in Kolkata has grown into one of India's most trusted property platforms.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  We understand that buying a home is one of life's biggest decisions. That's why 
                  we go beyond just showing properties – we provide comprehensive guidance, market 
                  insights, and personalized support throughout your journey.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Trusted by 1000+ Families</Badge>
                  <Badge variant="secondary">Pan-India Presence</Badge>
                  <Badge variant="secondary">Expert Team</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center gradient-card shadow-card hover:shadow-glow transition-smooth group">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 transition-smooth"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                   <p className="bg-gradient-pink bg-clip-text text-transparent font-semibold mb-2">{member.role}</p>
                   <p className="text-muted-foreground text-sm bg-pink/10 px-3 py-1 rounded-full">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pink" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Trust & Transparency</h3>
              <p className="text-muted-foreground">
                We believe in honest dealings and complete transparency in all our interactions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-pink" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Customer First</h3>
              <p className="text-muted-foreground">
                Your needs and satisfaction are our top priority in every transaction.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-pink" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in service delivery and customer experience.
              </p>
            </div>
          </div>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-pink">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have found their dream homes with our expertise. 
            Let's make your property dreams a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="h-4 w-4 mr-2" />
              Call: +91 98765 43210
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-pink">
              <Mail className="h-4 w-4 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
        </div>
      </section>
    </div>
  );
};

export default About;