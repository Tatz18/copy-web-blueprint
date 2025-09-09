import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PropertyListings from "@/components/PropertyListings";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import PopularLocations from "@/components/PopularLocations";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import ClientTestimonials from "@/components/ClientTestimonials";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PropertyListings />
      <PopularLocations />
      <WhyWorkWithUs />
      <Partners />
      <Services />
      <ClientTestimonials />
      <FAQ />
    </div>
  );
};

export default Index;
