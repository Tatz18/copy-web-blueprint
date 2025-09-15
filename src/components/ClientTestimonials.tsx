import { Star, Quote } from "lucide-react";
import bengaliMan1 from "@/assets/testimonial-bengali-man-1.jpg";
import bengaliWoman1 from "@/assets/testimonial-bengali-woman-1.jpg";
import bengaliMan2 from "@/assets/testimonial-bengali-man-2.jpg";
import bengaliWoman2 from "@/assets/testimonial-bengali-woman-2.jpg";
import bengaliMan3 from "@/assets/testimonial-bengali-man-3.jpg";
import bengaliWoman3 from "@/assets/testimonial-bengali-woman-3.jpg";

const ClientTestimonials = () => {
  const testimonials = [
    {
      name: "Subhash Chatterjee",
      location: "Salt Lake, Kolkata",
      property: "3 BHK Apartment in Sector V",
      rating: 5,
      text: "Phoenix Realesthatic made my dream of owning a home in Kolkata's IT hub come true. Their team's knowledge of local areas and transparent dealings impressed me throughout.",
      avatar: bengaliMan1
    },
    {
      name: "Priya Banerjee",
      location: "Park Street, Kolkata",
      property: "2 BHK Heritage Flat",
      rating: 5,
      text: "The professionalism of Phoenix Realesthatic team is commendable. They helped us find the perfect heritage property in the heart of Kolkata within our budget in just 3 weeks.",
      avatar: bengaliWoman1
    },
    {
      name: "Arjun Mukherjee",
      location: "New Town, Kolkata",
      property: "4 BHK Independent House",
      rating: 5,
      text: "Bought my first property through Phoenix Realesthatic. Their legal team ensured all documents were verified properly. The process was smooth and completely hassle-free.",
      avatar: bengaliMan2
    },
    {
      name: "Sutapa Das",
      location: "Behala, Kolkata",
      property: "Commercial Space for Clinic",
      rating: 5,
      text: "Invested in commercial property with Phoenix Realesthatic's expert guidance. Their deep understanding of Kolkata's real estate market helped me make the right investment decision.",
      avatar: bengaliWoman2
    },
    {
      name: "Biswajit Sen",
      location: "Garia, Kolkata",
      property: "3 BHK Apartment in South Kolkata",
      rating: 5,
      text: "Excellent service from Phoenix Realesthatic from start to finish. The team was always available to answer questions and provided regular updates throughout the buying process.",
      avatar: bengaliMan3
    },
    {
      name: "Ruma Ghosh",
      location: "Tollygunge, Kolkata",
      property: "2 BHK Near Metro Station",
      rating: 5,
      text: "Phoenix Realesthatic's home loan assistance program saved me months of paperwork. They connected me with the right bank and secured the best interest rate available in Kolkata.",
      avatar: bengaliWoman3
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50/40 via-purple-50/20 to-blue-50/30 dark:from-pink-900/10 dark:via-purple-900/5 dark:to-blue-900/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-300/15 dark:bg-blue-600/8 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from families who found their dream homes with Phoenix Realesthatic in Kolkata
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-card hover:shadow-glow transition-smooth relative border border-white/10 dark:border-gray-800/50"
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