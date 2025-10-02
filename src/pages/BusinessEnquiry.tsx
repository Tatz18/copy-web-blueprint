import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Building2, ShoppingBag, Users2, TrendingUp, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BusinessEnquiry = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    businessType: "",
    projectType: "",
    budgetRange: "",
    timeline: "",
    location: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted",
      description: "Our business team will contact you within 24 hours.",
    });
  };

  const solutions = [
    {
      icon: Building2,
      title: "Corporate Real Estate",
      description: "Complete corporate property solutions including office spaces, warehouses, and industrial complexes.",
    },
    {
      icon: ShoppingBag,
      title: "Bulk Property Deals",
      description: "Special pricing and terms for bulk property purchases and large-scale developments.",
    },
    {
      icon: Users2,
      title: "Partnership Opportunities",
      description: "Joint ventures, strategic partnerships, and investment collaboration opportunities.",
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Professional investment guidance for institutional investors and high-net-worth individuals.",
    },
  ];

  const benefits = [
    "Dedicated relationship manager",
    "Priority access to premium properties",
    "Customized financing solutions",
    "Exclusive off-market opportunities",
    "Comprehensive market analysis",
    "Tax optimization strategies",
    "Portfolio management services",
    "24/7 support and maintenance",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              B2B Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Business Enquiry & Partnership
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partner with Phoenix Realesthatic for comprehensive business real estate solutions. From corporate relocations to large-scale investments, we deliver results that drive your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive real estate services tailored for businesses and institutional clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our B2B Services */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our B2B Services?
              </h2>
              <p className="text-muted-foreground mb-8">
                We understand the unique challenges businesses face in real estate decisions. Our dedicated B2B team provides specialized solutions that align with your business objectives.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=500&fit=crop"
                alt="Business meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground">
              Ready to discuss your business real estate needs? Our team is here to help you find the perfect solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <CardTitle className="text-lg">Business Hotline</CardTitle>
                      <CardDescription>+91 93301 02817</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <CardTitle className="text-lg">Business Email</CardTitle>
                      <CardDescription>business@phoenixrealesthatic.com</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <CardTitle className="text-lg">Office Location</CardTitle>
                      <CardDescription>Salt Lake, Kolkata, West Bengal</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <CardTitle className="text-lg">Response Time</CardTitle>
                      <CardDescription>Within 24 hours</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            {/* Enquiry Form */}
            <Card>
              <CardHeader>
                <CardTitle>Business Enquiry Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Business Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="businessType">Business Type</Label>
                    <Select value={formData.businessType} onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corporate">Corporate</SelectItem>
                        <SelectItem value="startup">Startup</SelectItem>
                        <SelectItem value="realestate">Real Estate</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="hospitality">Hospitality</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select value={formData.projectType} onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="office">Office Space</SelectItem>
                        <SelectItem value="warehouse">Warehouse</SelectItem>
                        <SelectItem value="retail">Retail Space</SelectItem>
                        <SelectItem value="investment">Investment</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="budgetRange">Budget Range</Label>
                    <Select value={formData.budgetRange} onValueChange={(value) => setFormData({ ...formData, budgetRange: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="below50">Below ₹50 Lakhs</SelectItem>
                        <SelectItem value="50to100">₹50 Lakhs - ₹1 Crore</SelectItem>
                        <SelectItem value="1to5">₹1 Crore - ₹5 Crores</SelectItem>
                        <SelectItem value="5to10">₹5 Crores - ₹10 Crores</SelectItem>
                        <SelectItem value="above10">Above ₹10 Crores</SelectItem>
                        <SelectItem value="discuss">Prefer to Discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="timeline">Timeline</Label>
                    <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (1-3 months)</SelectItem>
                        <SelectItem value="short">Short Term (3-6 months)</SelectItem>
                        <SelectItem value="medium">Medium Term (6-12 months)</SelectItem>
                        <SelectItem value="long">Long Term (12+ months)</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="location">Preferred Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="details">Project Details & Requirements</Label>
                    <Textarea
                      id="details"
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessEnquiry;
