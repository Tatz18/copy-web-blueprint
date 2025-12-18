import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BlogCard = () => {
  const navigate = useNavigate();
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.05 });

  const blogs = [
    {
      id: 1,
      title: "Your Equity Could Change Everything About Your Next Move.",
      subtitle: "A lot of people are asking the same thing right now: “Is it even a good time to sell?” And the truth may come as a bit of a surprise...",
      description: "A lot of people are asking the same thing right now: “Is it even a good time to sell?” And the truth may come as a bit of a surprise. For many homeowners, the answer is a strong yes.",
      image: "/blogs/kolkata-building-1.jpg",
      date: "August 15, 2024"
    },
    {
      id: 2,
      title: "Is Buyer Demand Picking Back Up? What Sellers Should Know.",
      subtitle: "The housing market hasn’t felt this energized in a long time – and the numbers backing that up are hard to ignore.",
      description: "The housing market hasn’t felt this energized in a long time – and the numbers backing that up are hard to ignore. Mortgage rates have eased almost a full percentage point this year, and that shift is starting to wake up buyers.",
      image: "/blogs/kolkata-building-2.jpg",
      date: "August 15, 2024"
    }
  ];

  const handleBlogClick = (blog: any) => {
    navigate(`/blog/${blog.id}`, { state: blog });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-secondary/30 via-background to-secondary/10">
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} >

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <div 
              key={blog.id}
              className={`gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-smooth group cursor-pointer ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => handleBlogClick(blog)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={`${blog.title}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {blog.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <span>{blog.subtitle}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{blog.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
