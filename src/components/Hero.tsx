import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-architecture.jpg";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("find");
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSearch = () => {
    if (!searchValue.trim()) {
      toast({
        title: "Search Query Required",
        description: "Please enter a city, locality or project name to search.",
        variant: "destructive"
      });
      return;
    }
    
    // Navigate to properties page with search query
    navigate(`/properties?search=${encodeURIComponent(searchValue.trim())}`);
    
    toast({
      title: "Searching Properties",
      description: `Looking for properties in "${searchValue.trim()}"...`
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleViewCities = () => {
    navigate("/properties");
    toast({
      title: "Explore Cities",
      description: "Viewing all available cities and locations."
    });
  };

  const handleHomeValue = () => {
    if (activeTab === "value") {
      navigate("/market-analysis");
      toast({
        title: "Home Valuation",
        description: "Get your property valued by our experts."
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Discover{" "}
                <span className="block">Your Dream Home</span>
                <span className="text-pink-500">in India</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Find premium properties across India's most vibrant cities. Based in Kolkata, we serve the cultural capital and major metros with expert guidance for your perfect home.
              </p>

              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Kolkata, Mumbai, Delhi, Bangalore & more</span>
                <Button 
                  variant="link" 
                  className="text-primary p-0 h-auto"
                  onClick={handleViewCities}
                >
                  View cities <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>

            {/* Search Section */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button
                  variant={activeTab === "find" ? "default" : "secondary"}
                  onClick={() => setActiveTab("find")}
                  className="px-6"
                >
                  Find a home
                </Button>
                <Button
                  variant={activeTab === "value" ? "default" : "secondary"}
                  onClick={() => {
                    setActiveTab("value");
                    handleHomeValue();
                  }}
                  className="px-6 dark:bg-pink-500 dark:hover:bg-pink-600 dark:text-white"
                >
                  My home value
                </Button>
              </div>

              <div className="relative">
                <Input
                  placeholder="Enter city, locality or project name"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-4 pr-12 py-6 text-lg bg-card border-border"
                />
                <Button
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10"
                  onClick={handleSearch}
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-luxury">
              <img
                src={heroImage}
                alt="Modern luxury skyscrapers"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;