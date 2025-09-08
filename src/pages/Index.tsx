import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PropertyListings from "@/components/PropertyListings";
import Partners from "@/components/Partners";
import Services from "@/components/Services";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PropertyListings />
      <Partners />
      <Services />
    </div>
  );
};

export default Index;
