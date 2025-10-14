import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Building2, Home, Users, Shield, Briefcase, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const {
    toast
  } = useToast();
  const handleNewsletterSubmit = async () => {
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive"
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    setIsSubscribing(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully Subscribed!",
        description: "You'll receive the latest property updates and market insights."
      });
      setEmail("");
      setIsSubscribing(false);
    }, 1000);
  };
  const handleSocialClick = (platform: string, url: string) => {
    if (url === "#") {
      toast({
        title: `Follow us on ${platform}`,
        description: "Social media links will be available soon!"
      });
    } else {
      window.open(url, '_blank');
    }
  };
  const quickLinks = [{
    name: "Home",
    href: "/"
  }, {
    name: "Properties",
    href: "/properties"
  }, {
    name: "About Us",
    href: "/about"
  }, {
    name: "Services",
    href: "/services"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  const services = [{
    name: "Property Sales",
    icon: Home,
    href: "/property-sales"
  }, {
    name: "Property Rental",
    icon: Building2,
    href: "/property-rental"
  }, {
    name: "Investment Consulting",
    icon: Shield,
    href: "/investment-consulting"
  }, {
    name: "Property Management",
    icon: Users,
    href: "/property-management"
  }, {
    name: "Market Analysis",
    icon: Building2,
    href: "/market-analysis"
  }, {
    name: "Commercial Services",
    icon: Home,
    href: "/commercial-services"
  }, {
    name: "Careers",
    icon: Briefcase,
    href: "/careers"
  }, {
    name: "Business Enquiry",
    icon: Handshake,
    href: "/business-enquiry"
  }];
  const socialLinks = [{
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/phoenixrealesthatic"
  }, {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/phoenixrealestate"
  }, {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/phoenixrealesthatic"
  }, {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/company/phoenixrealesthatic"
  }];
  return <footer className="bg-card border-t">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img src="/ph-logo.png" alt="Phoenix Realestatic - Turning Properties into Prosperities" className="h-16 w-auto mb-3" />
              <p className="text-muted-foreground leading-relaxed">Your trusted real estate partner in Kolkata and across India. Helping families find their dream homes since 2018.</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start text-muted-foreground">
                <MapPin className="h-4 w-4 mr-3 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div>Regus Globsyn Crystals</div>
                  <div>X-11& 12, Block-EP</div>
                  <div>Saltlake Sector-V, Kolkata-91, IN</div>
                </div>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="text-sm">+91 93301 02817</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="text-sm">info@phoenixrealesthatic.com</span>
              </div>
              <div className="flex items-start text-muted-foreground">
                <Clock className="h-4 w-4 mr-3 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                  <div>Saturday: 10:00 AM - 4:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => <li key={index}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
            
            <div className="pt-4">
              <h5 className="font-medium text-foreground mb-3">Legal</h5>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => {
              const Icon = service.icon;
              return <li key={index}>
                    <Link to={service.href} className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <Icon className="h-4 w-4 mr-3" />
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  </li>;
            })}
            </ul>

            <div className="pt-4">
              <h5 className="font-medium text-foreground mb-3">Coverage Areas</h5>
              <ul className="space-y-2">
                <li className="text-muted-foreground text-sm">• Kolkata North</li>
                <li className="text-muted-foreground text-sm">• Central Kolkata</li>
                <li className="text-muted-foreground text-sm">• South Kolkata</li>
                <li className="text-muted-foreground text-sm">• Saltlake</li>
                <li className="text-muted-foreground text-sm">• NewTown</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground">Stay Updated</h4>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for the latest property listings, market insights, and investment tips.
            </p>
            
            <div className="space-y-3">
              <Input placeholder="Enter your email" className="bg-background border-border" value={email} onChange={e => setEmail(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleNewsletterSubmit()} />
              <Button className="w-full bg-pink-500 hover:bg-pink-600" onClick={handleNewsletterSubmit} disabled={isSubscribing}>
                {isSubscribing ? "Subscribing..." : "Subscribe Now"}
              </Button>
            </div>

            <div className="pt-4">
              <h5 className="font-medium text-foreground mb-4">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return <button key={index} onClick={() => handleSocialClick(social.name, social.href)} className="w-10 h-10 bg-muted hover:bg-primary/10 rounded-lg flex items-center justify-center transition-colors group" aria-label={social.name}>
                      <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </button>;
              })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-muted-foreground">© 2025 Phoenix Realesthatic. All rights reserved. | RERA Registration: WB RERA/A/KOL/2024/000577</div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>Made with ❤️ in Kolkata</span>
            <div className="flex items-center space-x-1">
              <span>🏆</span>
              <span>Award Winning Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;