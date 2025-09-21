import { Bed, Bath, Square, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

const PropertyListings = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.05 });
  
  const { data: properties, isLoading, isFetching, error } = useQuery({
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

  const onCarouselSelect = useCallback(() => {
    if (!api) return;
    
    const current = api.selectedScrollSnap();
    const total = api.scrollSnapList().length;
    
    // Load next batch when near the end
    if (current >= total - 2 && properties && properties.length === 6) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsTransitioning(false);
      }, 300);
    }
  }, [api, properties]);

  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => onCarouselSelect();
    api.on("select", handleSelect);
    
    return () => {
      api.off("select", handleSelect);
    };
  }, [api, onCarouselSelect]);

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
      <section ref={sectionRef} className="py-20">
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
      <section ref={sectionRef} className="py-20">
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
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          {(isFetching || isTransitioning) && (
            <div className="absolute inset-0 z-10 bg-background/80 backdrop-blur-sm flex items-center justify-center rounded-2xl">
              <div className="flex flex-col items-center space-y-4">
                <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
                <p className="text-muted-foreground text-sm">Loading upcoming properties...</p>
              </div>
            </div>
          )}
          
          <CarouselContent className="-ml-2 md:-ml-4">
            {properties.map((property, index) => (
              <CarouselItem key={property.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Link
                  to={`/property/${property.id}`}
                  className={`gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-smooth group cursor-pointer block transform-gpu ${
                    isVisible 
                      ? `${isTransitioning ? 'animate-slide-in-from-back' : 'animate-property-entrance'} opacity-100` 
                      : 'opacity-0'
                  }`}
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    transformStyle: 'preserve-3d',
                  }}
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-12 hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default PropertyListings;