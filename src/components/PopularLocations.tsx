import { MapPin, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import kolkataBuilding1 from "@/assets/kolkata-building-1.jpg";
import kolkataBuilding2 from "@/assets/kolkata-building-2.jpg";
import kolkataBuilding3 from "@/assets/kolkata-building-3.jpg";
import kolkataBuilding4 from "@/assets/kolkata-building-4.jpg";

const PopularLocations = () => {
  const navigate = useNavigate();

  const handleLocationClick = (city: string, area: string) => {
    // Navigate to properties page with location filter
    navigate(`/properties?location=${encodeURIComponent(city)}&area=${encodeURIComponent(area)}`);
  };
  const locations = [
    {
      city: "North Kolkata",
      area: "Shyambazar & Bagbazar",
      priceRange: "₹45L - 1.2 Cr",
      properties: "85+ Properties",
      growth: "+8.5%",
      image: kolkataBuilding1
    },
    {
      city: "South Kolkata",
      area: "Ballygunge & Bakulbagan",
      priceRange: "₹65L - 2.5 Cr",
      properties: "120+ Properties",
      growth: "+12.3%",
      image: kolkataBuilding2
    },
    {
      city: "Central Kolkata",
      area: "Park Street & Rupchand Mukherjee Lane",
      priceRange: "₹85L - 2.1 Cr",
      properties: "95+ Properties",
      growth: "+10.7%",
      image: kolkataBuilding4
    },
    {
      city: "Salt Lake",
      area: "Sector V & New Town",
      priceRange: "₹55L - 12 Cr",
      properties: "65+ Properties",
      growth: "+15.2%",
      image: kolkataBuilding3
    },
    {
      city: "Paikpara",
      area: "Sovabajar & Tilljala",
      priceRange: "₹65L - 1.1 Cr",
      properties: "45+ Properties",
      growth: "+11.4%",
      image: kolkataBuilding1
    },
    {
      city: "P. Majumdar road",
      area: "Beldanga Area",
      priceRange: "₹26L - 45L",
      properties: "35+ Properties",
      growth: "+9.1%",
      image: kolkataBuilding2
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 via-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Popular Locations Across Kolkata
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the most sought-after residential areas across North, South, Central, East & West Kolkata
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-smooth group cursor-pointer"
              onClick={() => handleLocationClick(location.city, location.area)}
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
          <Button size="lg" className="px-8" onClick={() => navigate('/properties')}>
            View All Locations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularLocations;