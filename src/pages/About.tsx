import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, Building, Heart, Phone, Mail, CheckCircle } from "lucide-react";
import bengaliMan1 from "@/assets/testimonial-bengali-man-1.jpg";
import bengaliWoman1 from "@/assets/testimonial-bengali-woman-1.jpg";
import founderImage from "@/assets/founder-prasenjit.jpg";
import Teams from "@/components/Teams";

const About = () => {
  const stats = [
    { icon: Users, value: "1500+", label: "Happy Clients" },
    { icon: Heart, value: "90%", label: "Client Satisfaction" },
    { icon: Award, value: "7+", label: "Years Experience" },
    { icon: Building, value: "500+", label: "Properties Sold" }
  ];

  const workProcess = [
    {
      step: "1",
      title: "Understand Your Needs",
      description: "We start by understanding your specific requirements, budget, and preferred locations to find the perfect match."
    },
    {
      step: "2", 
      title: "Curate Property Lists",
      description: "Our experts handpick properties that align with your criteria, saving you time and ensuring quality options."
    },
    {
      step: "3",
      title: "Expert Guidance", 
      description: "From viewing to negotiation to closing, we provide professional guidance throughout your property journey."
    },
    {
      step: "4",
      title: "Ongoing Support",
      description: "Our relationship doesn't end at closing. We provide continued support for all your real estate needs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink/20 via-pink-soft/20 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-pink bg-clip-text text-transparent">Empowering</span>
              <br />
              <span className="text-foreground">Real Estate</span>
              <br />
              <span className="text-foreground">Excellence</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-pink/10 to-pink-soft/10 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Meet Our Founder</h2>
              <h3 className="text-2xl font-bold bg-gradient-pink bg-clip-text text-transparent mb-6">Prasenjit Mallick</h3>
              
              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground leading-relaxed">
                  "Since founding Phoenix Realesthatic in 2018, my vision has been simple yet ambitious - to transform how people experience real estate. We've built more than just a business; we've created a legacy of trust, innovation, and excellence."
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  "With over a decade of combined team experience and having served 1500+ satisfied clients, we continue to push boundaries in the real estate industry. Our 90% client satisfaction rate represents families who found their dream homes and investors who achieved their goals."
                </p>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "At Phoenix Realesthatic, we don't just sell properties - we turn them into prosperities, creating lasting value for our clients and communities across Eastern India."
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-semibold">Prasenjit Mallick</span>
                <span>•</span>
                <span>Founder</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src={founderImage}
                alt="Prasenjit Mallick - Founder & CEO"
                className="rounded-3xl shadow-2xl max-w-xl w-full object-cover"
              />
            </div>
          </div>
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

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Mission & Vision</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="gradient-card shadow-card hover:shadow-glow transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-pink rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower individuals and businesses with exceptional real estate solutions that transform properties into lasting prosperity. We are committed to delivering transparent, innovative, and client-focused services that exceed expectations and build lifelong relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card hover:shadow-glow transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-pink-soft rounded-full flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and innovative real estate partner across Eastern India, recognized for creating value, fostering sustainable communities, and setting new standards of excellence in property services that inspire confidence and drive success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Our Teams */}
      <Teams />

      {/* How We Work With You */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-center">How We Work With You</h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Our proven 4-step process ensures a smooth and successful real estate experience
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {workProcess.map((process, index) => (
                <div key={index} className="relative">
                  <Card className="gradient-card shadow-card hover:shadow-glow transition-smooth h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-pink rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">{process.step}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-3">{process.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{process.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">What Our Clients Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="gradient-card shadow-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={bengaliMan1}
                  alt="Client"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">Debashis Chatterjee</h4>
                  <p className="text-sm text-muted-foreground">Property Buyer</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Phoenix Realesthatic made our home buying journey incredibly smooth. Their expertise and dedication helped us find our dream home within our budget."
              </p>
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </Card>
            
            <Card className="gradient-card shadow-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={bengaliWoman1}
                  alt="Client"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">Ananya Mukherjee</h4>
                  <p className="text-sm text-muted-foreground">Investor</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Professional service and excellent market knowledge. They helped me make profitable investments in premium properties across Kolkata."
              </p>
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </Card>
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
        </div>
      </section>

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
            <a href="tel:9330102817">
              <Button size="lg" variant="secondary">
                <Phone className="h-4 w-4 mr-2" />
                Call: 9330102817
              </Button>
            </a>
            <a href="mailto:info@phoenixrealesthatic.com">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-pink">
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
