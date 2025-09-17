import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Bed, Bath, Square, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PropertyListings = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { toast } = useToast();
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const { data: properties, isLoading, error } = useQuery({
    queryKey: ['properties', currentPage],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('status', 'available')
        .range(currentPage * 6, (currentPage * 6) + 5);
      
      if (error) throw error;
      return data;
    },
  });

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      toast({
        title: "Previous Properties",
        description: "Loading previous property listings..."
      });
    }
  };

  const handleNext = () => {
    if (properties && properties.length === 6) {
      setCurrentPage(currentPage + 1);
      toast({
        title: "Next Properties", 
        description: "Loading more property listings..."
      });
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatSquareFeet = (sqft: number) => {
    return `${sqft.toLocaleString()} sqft`;
  };

  if (isLoading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Current Listings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="gradient-card rounded-2xl overflow-hidden shadow-card animate-pulse">
                <div className="w-full h-64 bg-muted"></div>
                <div className="p-6 space-y-4">
                  <div className="h-8 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-2/3"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !properties) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Current Listings</h2>
          <p className="text-center text-muted-foreground">Unable to load properties at this time.</p>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-20">
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-foreground">Current Listings</h2>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={handlePrevious}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleNext}
              disabled={!properties || properties.length < 6}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Link
              key={property.id}
              to={`/property/${property.id}`}
              className={`gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-smooth group cursor-pointer block ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image_url}
                  alt={`Property at ${property.location}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {formatPrice(property.price)}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-foreground/90">
                    {property.title}
                  </h4>

                  <div className="flex items-center text-muted-foreground text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{property.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                    <div className="flex items-center space-x-1">
                      <Bed className="h-4 w-4" />
                      <span>{property.bedrooms} BHK</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bath className="h-4 w-4" />
                      <span>{property.bathrooms} Bath</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Square className="h-4 w-4" />
                      <span>{formatSquareFeet(property.square_feet)}</span>
                    </div>
                  </div>

                  <div className="text-muted-foreground text-sm">
                    {property.property_type}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;