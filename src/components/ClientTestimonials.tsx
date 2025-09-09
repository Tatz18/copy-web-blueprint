import { Star, Quote } from "lucide-react";

const ClientTestimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Mumbai",
      property: "3 BHK Apartment in Bandra",
      rating: 5,
      text: "AstraVista made my dream of owning a home in Mumbai come true. Their team handled everything from property selection to loan approval. Exceptional service!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Priya Patel",
      location: "Bangalore",
      property: "2 BHK Villa in Whitefield",
      rating: 5,
      text: "The transparency and professionalism of AstraVista team is commendable. They helped us find the perfect home within our budget in just 2 weeks.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Arjun Reddy",
      location: "Hyderabad",
      property: "4 BHK Independent House",
      rating: 5,
      text: "Bought my first property through AstraVista. Their legal team ensured all documents were verified. The process was smooth and hassle-free.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Neeta Agarwal",
      location: "Delhi NCR",
      property: "Commercial Space in Gurgaon",
      rating: 5,
      text: "Invested in commercial property with AstraVista's guidance. Their market analysis and investment advice helped me make the right decision.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Vikram Singh",
      location: "Pune",
      property: "3 BHK Apartment in Hinjewadi",
      rating: 5,
      text: "Excellent service from start to finish. The team was always available to answer questions and provided regular updates throughout the buying process.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Kavita Menon",
      location: "Chennai",
      property: "2 BHK Apartment in OMR",
      rating: 5,
      text: "AstraVista's home loan assistance program saved me months of paperwork. They connected me with the right bank and got me the best interest rate.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from families who found their dream homes with AstraVista
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-smooth relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              
              <div className="space-y-4">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                      <p className="text-xs text-primary font-medium">
                        {testimonial.property}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-card rounded-full px-6 py-3 shadow-sm">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.9/5</span>
            <span className="text-muted-foreground">from 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;