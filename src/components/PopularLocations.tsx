import { MapPin, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const PopularLocations = () => {
  const locations = [
    {
      city: "Mumbai",
      area: "Bandra West",
      priceRange: "₹2.1 - 4.5 Cr",
      properties: "120+ Properties",
      growth: "+12.3%",
      image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400"
    },
    {
      city: "Delhi NCR",
      area: "Gurgaon Sector 54",
      priceRange: "₹1.2 - 3.2 Cr",
      properties: "95+ Properties",
      growth: "+8.7%",
      image: "https://images.unsplash.com/photo-1582454603088-a4ec4bbbd329?w=400"
    },
    {
      city: "Bangalore",
      area: "Whitefield",
      priceRange: "₹85L - 2.1 Cr",
      properties: "150+ Properties",
      growth: "+15.2%",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400"
    },
    {
      city: "Hyderabad",
      area: "Hitec City",
      priceRange: "₹65L - 1.8 Cr",
      properties: "80+ Properties",
      growth: "+11.4%",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400"
    },
    {
      city: "Chennai",
      area: "OMR Thoraipakkam",
      priceRange: "₹70L - 1.9 Cr",
      properties: "75+ Properties",
      growth: "+9.8%",
      image: "https://images.unsplash.com/photo-1595856776060-85208bab3a1f?w=400"
    },
    {
      city: "Pune",
      area: "Hinjewadi Phase 2",
      priceRange: "₹55L - 1.4 Cr",
      properties: "110+ Properties",
      growth: "+13.1%",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 via-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Popular Locations Across India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the most sought-after residential areas in India's major metropolitan cities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-smooth group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={location.image}
                  alt={`${location.area}, ${location.city}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-xs font-medium text-green-600">{location.growth}</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {location.area}
                  </h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{location.city}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Price Range</span>
                    <span className="font-semibold text-foreground">{location.priceRange}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Available</span>
                    <span className="font-medium text-accent">{location.properties}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="px-8">
            View All Locations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularLocations;