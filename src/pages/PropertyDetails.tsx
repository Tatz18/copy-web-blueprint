import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bed, Bath, Square, MapPin, ArrowLeft, Heart, Share2, 
  Car, Sofa, Star, Phone, Mail 
} from "lucide-react";
import { useState } from "react";

const PropertyDetails = () => {
  const { id } = useParams();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const { data: property, isLoading } = useQuery({
    queryKey: ['property', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

  const { data: propertyImages } = useQuery({
    queryKey: ['property-images', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('property_images')
        .select('*')
        .eq('property_id', id)
        .order('display_order');
      
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-8">
          <div className="animate-pulse">
            <div className="h-96 bg-muted rounded-2xl mb-8"></div>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="h-8 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="h-32 bg-muted rounded"></div>
              </div>
              <div className="h-96 bg-muted rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-8 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Property Not Found</h1>
          <Link to="/properties">
            <Button>Back to Properties</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <Link to="/properties">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Properties
            </Button>
          </Link>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Property Images */}
        <div className="grid lg:grid-cols-4 gap-4 mb-8">
          <div className="lg:col-span-3">
            <img
              src={property.image_url}
              alt={property.title}
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {propertyImages?.slice(0, 4).map((image, index) => (
              <img
                key={image.id}
                src={image.image_url}
                alt={image.alt_text || `Property image ${index + 1}`}
                className="w-full h-44 lg:h-20 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Info */}
            <div>
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                <span className="text-muted-foreground">{property.location}</span>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{property.title}</h1>
              <div className="flex items-center space-x-4 text-muted-foreground text-sm mb-4">
                <span className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  {property.bedrooms} Bedroom
                </span>
                <span className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  {property.bathrooms} Bathroom
                </span>
                <span className="flex items-center">
                  <Square className="h-4 w-4 mr-1" />
                  {property.square_feet}ft
                </span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-500" />
                  <span>4.5 Review</span>
                </div>
              </div>
            </div>

            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <Bed className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">{property.bedrooms} Bedroom</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">{property.bathrooms} Bathroom</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Square className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">{property.square_feet}ft</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sofa className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">Furnished</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">1 Car Garage</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description || `This stunning ${property.property_type} in ${property.location} offers a perfect blend of modern luxury and comfort. With ${property.bedrooms} bedrooms and ${property.bathrooms} bathrooms spread across ${property.square_feet} square feet, this property provides spacious living for families. Located in one of the most sought-after neighborhoods, it offers easy access to schools, shopping centers, and transportation hubs.`}
                </p>
                
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The property features modern amenities and is designed with attention to detail. Whether you're looking for your dream home or a smart investment opportunity, this property offers excellent value in today's market.
                </p>
              </CardContent>
            </Card>

            {/* Address */}
            <Card>
              <CardHeader>
                <CardTitle>Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium">City</span>
                    <p className="text-muted-foreground">{property.location}</p>
                  </div>
                  <div>
                    <span className="font-medium">Country</span>
                    <p className="text-muted-foreground">India</p>
                  </div>
                  <div>
                    <span className="font-medium">State</span>
                    <p className="text-muted-foreground">West Bengal</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Details */}
            <Card>
              <CardHeader>
                <CardTitle>Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium">Property ID:</span>
                    <p className="text-muted-foreground">{property.id.slice(0, 8)}</p>
                  </div>
                  <div>
                    <span className="font-medium">Bedrooms:</span>
                    <p className="text-muted-foreground">{property.bedrooms}</p>
                  </div>
                  <div>
                    <span className="font-medium">Bathrooms:</span>
                    <p className="text-muted-foreground">{property.bathrooms}</p>
                  </div>
                  <div>
                    <span className="font-medium">Area:</span>
                    <p className="text-muted-foreground">{property.square_feet} sq ft</p>
                  </div>
                  <div>
                    <span className="font-medium">Type:</span>
                    <p className="text-muted-foreground">{property.property_type}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {formatPrice(property.price)}
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Enter your name here" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <div className="flex">
                      <div className="flex items-center px-3 bg-muted border border-r-0 rounded-l-md">
                        <span className="text-sm">🇮🇳 +91</span>
                      </div>
                      <Input 
                        placeholder="Enter your number" 
                        className="rounded-l-none" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input placeholder="Enter your email here" type="email" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="Hello, I am interested in this property. Please contact me."
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <Button variant="outline" className="flex-1 mr-2">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" className="flex-1 ml-2">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;