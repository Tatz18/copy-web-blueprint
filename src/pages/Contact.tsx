import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, Phone, Mail, Clock, MessageCircle, 
  Building2, Users, HeadphonesIcon 
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
    window.location.href = "tel:+919876543210";
    toast({
      title: "Initiating Call",
      description: "Connecting you to our sales team..."
    });
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in your real estate services. Can you help me?";
    const url = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    toast({
      title: "WhatsApp Chat",
      description: "Opening WhatsApp to start conversation..."
    });
  };

  const handleEmailSupport = () => {
    window.location.href = "mailto:info@phoenixrealesthatic.com?subject=Property Inquiry";
    toast({
      title: "Opening Email",
      description: "Composing email to our support team..."
    });
  };
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Mon-Sat: 9:00 AM - 8:00 PM"
    },
    {
      icon: Mail,
      title: "Email Us", 
      details: ["info@phoenixrealesthatic.com", "support@phoenixrealesthatic.com"],
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Park Street", "Kolkata, West Bengal 700016"],
      description: "Mon-Sat: 10:00 AM - 7:00 PM"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday", "9:00 AM - 8:00 PM"],
      description: "Sunday: Emergency only"
    }
  ];

  const offices = [
    {
      city: "Kolkata (HQ)",
      address: "123 Park Street, Central Kolkata",
      phone: "+91 98765 43210",
      manager: "Rajesh Kumar"
    },
    {
      city: "Mumbai",
      address: "456 Business District, Bandra Kurla Complex",
      phone: "+91 87654 32109", 
      manager: "Priya Sharma"
    },
    {
      city: "Delhi",
      address: "789 Corporate Hub, Connaught Place",
      phone: "+91 76543 21098",
      manager: "Amit Singh"
    },
    {
      city: "Bangalore",
      address: "321 Tech Park, Whitefield",
      phone: "+91 65432 10987",
      manager: "Neha Patel"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to find your dream home? Our expert team is here to help. 
            Get in touch with us today and let's start your property journey.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const gradients = ['bg-gradient-primary', 'bg-gradient-card', 'bg-accent', 'bg-secondary'];
              return (
                <Card key={index} className="text-center gradient-card shadow-card hover:shadow-glow transition-smooth group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-foreground font-medium bg-accent/10 px-3 py-1 rounded-full mb-1">
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
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-6 w-6 mr-2" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="Enter your email address" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <div className="flex">
                      <div className="flex items-center px-3 bg-muted border border-r-0 rounded-l-md">
                        <span className="text-sm">🇮🇳 +91</span>
                      </div>
                      <Input placeholder="Enter your phone number" className="rounded-l-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">I'm interested in</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buying">Buying a Property</SelectItem>
                        <SelectItem value="selling">Selling a Property</SelectItem>
                        <SelectItem value="renting">Renting a Property</SelectItem>
                        <SelectItem value="investment">Investment Advisory</SelectItem>
                        <SelectItem value="loan">Home Loan Assistance</SelectItem>
                        <SelectItem value="other">Other Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>
                  
                  <Button 
                    className="w-full" 
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
                      Call Now: +91 98765 43210
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

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">How quickly can I get a response?</h4>
                      <p className="text-sm text-muted-foreground">We typically respond within 2-4 hours during business hours.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Do you charge for consultations?</h4>
                      <p className="text-sm text-muted-foreground">Initial consultations are completely free of charge.</p>
                    </div>
                     <div>
                       <h4 className="font-medium text-foreground mb-1">Which cities do you operate in?</h4>
                       <p className="text-sm text-muted-foreground">Headquartered in Kolkata, we have offices in Mumbai, Delhi, and Bangalore.</p>
                     </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Our Offices
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building2 className="h-5 w-5 mr-2" />
                    {office.city}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-1 mr-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{office.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                      <p className="text-sm font-medium">{office.phone}</p>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-muted-foreground mr-2" />
                      <p className="text-sm text-muted-foreground">Manager: {office.manager}</p>
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

export default Contact;