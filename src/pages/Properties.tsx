import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bed, Bath, Square, MapPin, Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Properties = () => {
  const [searchParams] = useSearchParams();
  const locationFilter = searchParams.get('location');
  const areaFilter = searchParams.get('area');
  const [searchLocation, setSearchLocation] = useState('');
  
  // Set initial search location from URL params
  useEffect(() => {
    if (locationFilter || areaFilter) {
      const locationText = areaFilter ? `${areaFilter}, ${locationFilter}` : locationFilter || '';
      setSearchLocation(locationText);
    }
  }, [locationFilter, areaFilter]);

  const { data: properties, isLoading } = useQuery({
    queryKey: ['all-properties', locationFilter, areaFilter],
    queryFn: async () => {
      let query = supabase
        .from('properties')
        .select('*')
        .eq('status', 'available');
      
      // Apply location filter if provided
      if (locationFilter) {
        query = query.ilike('location', `%${locationFilter}%`);
      }
      
      // Apply area filter if provided  
      if (areaFilter) {
        query = query.or(`location.ilike.%${areaFilter}%,title.ilike.%${areaFilter}%`);
      }
      
      const { data, error } = await query;
      
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Search */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {locationFilter || areaFilter ? `Properties in ${areaFilter ? areaFilter + ', ' : ''}${locationFilter || ''}` : 'Find Your Dream Home'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {locationFilter || areaFilter ? `Discover premium properties in ${locationFilter || areaFilter}` : 'Discover premium properties across India\'s most sought-after locations'}
            </p>
          </div>

          {/* Search Filters */}
          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-6 shadow-xl">
            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <Input 
                placeholder="Location" 
                className="h-12" 
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 BHK</SelectItem>
                  <SelectItem value="2">2 BHK</SelectItem>
                  <SelectItem value="3">3 BHK</SelectItem>
                  <SelectItem value="4+">4+ BHK</SelectItem>
                </SelectContent>
              </Select>
              <Button className="h-12" size="lg">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-foreground">
              {locationFilter || areaFilter ? `Properties in ${areaFilter ? areaFilter + ', ' : ''}${locationFilter || ''}` : 'Available Properties'}
            </h2>
            <div className="text-muted-foreground">
              {properties?.length || 0} properties found
            </div>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
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
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {properties?.map((property) => (
                <Link
                  key={property.id}
                  to={`/property/${property.id}`}
                  className="gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-smooth group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={property.image_url}
                      alt={property.title}
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
                          <span>{property.square_feet} sqft</span>
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
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties;