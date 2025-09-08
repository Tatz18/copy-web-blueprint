import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Bed, Bath, Square } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const PropertyListings = () => {
  const properties = [
    {
      id: 1,
      price: "$689,000",
      image: property1,
      beds: 3,
      baths: 3,
      sqft: "1,684 sqft",
      type: "Single Family",
      address: "1349 Teslin Avenue, Vista, CA 92083",
    },
    {
      id: 2,
      price: "$194,900",
      image: property2,
      beds: 2,
      baths: 3,
      sqft: "1,200 sqft",
      type: "Condo",
      address: "35 Fm 2712, Crockett, TX 75835",
    },
    {
      id: 3,
      price: "$339,900",
      image: property3,
      beds: 3,
      baths: 2,
      sqft: "1,450 sqft",
      type: "Single Family",
      address: "35 Fm 2712, Crockett, TX 75835",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-foreground">Current Listings</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-smooth group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={`Property at ${property.address}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {property.price}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                    <div className="flex items-center space-x-1">
                      <Bed className="h-4 w-4" />
                      <span>{property.beds} beds</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bath className="h-4 w-4" />
                      <span>{property.baths} baths</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                    <div className="flex items-center space-x-1">
                      <Square className="h-4 w-4" />
                      <span>{property.sqft}</span>
                    </div>
                    <span>| {property.type}</span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {property.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;