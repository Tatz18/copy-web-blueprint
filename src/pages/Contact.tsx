import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, Phone, Mail, Clock, MessageCircle, HeadphonesIcon 
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Our team will contact you within 24 hours."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleCall = () => {
    window.location.href = "tel:+919330102817";
    toast({
      title: "Initiating Call",
      description: "Connecting you to our sales team..."
    });
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in your real estate services. Can you help me?";
    const url = `https://wa.me/919330102817?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    toast({
      title: "WhatsApp Chat",
      description: "Opening WhatsApp to start conversation..."
    });
  };

  const handleEmailSupport = () => {
    window.location.href = "mailto:contact@phoenixrealesthatic.com?subject=Property Inquiry";
    toast({
      title: "Opening Email",
      description: "Composing email to our support team..."
    });
  };
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["Main: +91 93301 02817"],
      description: "Monday - Saturday"
    },
    {
      icon: Mail,
      title: "Email Us", 
      details: ["contact@phoenixrealesthatic.com"],
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["Regus Globsyn Crystals", "X-11& 12, Block-EP", "Saltlake Sector-V, Kolkata-91, IN"],
      description: "Get directions to our office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"],
      description: "Sunday: Closed"
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink/20 via-pink-soft/20 to-transparent">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-pink bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your real estate journey? Get in touch with our expert team today. We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const gradients = ['bg-gradient-pink', 'bg-gradient-pink-soft', 'bg-pink', 'bg-accent'];
              return (
                <Card key={index} className="text-center gradient-card shadow-card hover:shadow-glow transition-smooth group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold bg-gradient-pink bg-clip-text text-transparent mb-3">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-foreground font-medium bg-pink/10 px-3 py-1 rounded-full mb-1">
                        {detail}
                      </p>
                    ))}
                    <p className="text-muted-foreground text-sm mt-2">{info.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input 
                      placeholder="Enter your full name" 
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input 
                      type="email" 
                      placeholder="Enter your email address" 
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <Input 
                      placeholder="Enter subject" 
                      required
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea 
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-pink hover:bg-gradient-pink/90" 
                    size="lg" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HeadphonesIcon className="h-6 w-6 mr-2" />
                    Need Immediate Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={handleCall}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now: +91 93301 02817
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      size="lg"
                      onClick={handleWhatsApp}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Chat
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      size="lg"
                      onClick={handleEmailSupport}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email Support
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Office Location */}
              <Card>
                <CardHeader>
                  <CardTitle>Our Office Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Phoenix Realesthatic</h4>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-muted-foreground mt-1 mr-2 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">
                            Regus Globsyn Crystals, X-11& 12, Block-EP<br />
                            Saltlake Sector-V, Kolkata-91, IN
                          </p>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                          <p className="text-sm font-medium">+91 93301 02817</p>
                        </div>
                        <Button variant="outline" className="w-full mt-4">
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;