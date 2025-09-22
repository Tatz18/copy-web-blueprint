import { Bed, Bath, Square, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useCallback, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const PropertyListings = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);
  const [visibleSlides, setVisibleSlides] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const newIndex = api.selectedScrollSnap();
      const currentlyVisible = api.slidesInView();
      
      // Find slides that are newly visible (not in previous visible set)
      setVisibleSlides(prev => {
        const newlyVisible = currentlyVisible.filter(index => !prev.has(index));
        
        if (newlyVisible.length > 0) {
          // Apply animation immediately to prevent flash
          const slideToAnimate = newlyVisible[newlyVisible.length - 1];
          setAnimatingIndex(slideToAnimate);
          
          // Reset animation after it completes
          setTimeout(() => setAnimatingIndex(null), 1200);
        }
        
        return new Set(currentlyVisible);
      });
      
      setCurrent(newIndex);
    };

    api.on("select", onSelect);
    
    // Initialize with currently visible slides on mount
    const initialVisible = api.slidesInView();
    setVisibleSlides(new Set(initialVisible));
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  
  const { data: properties, isLoading, error } = useQuery({
    queryKey: ['properties'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('status', 'available')
        .limit(12);
      
      if (error) throw error;
      return data;
    },
  });

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
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {properties.map((property, index) => (
              <CarouselItem key={property.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Link
                  to={`/property/${property.id}`}
                  className={`gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-smooth group cursor-pointer block relative ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  } ${
                    animatingIndex === index ? 'animate-slide-in-from-back' : ''
                  }`}
                  style={{ 
                    animationDelay: isVisible ? `${index * 100}ms` : '0ms',
                    transformStyle: 'preserve-3d'
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
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default PropertyListings;