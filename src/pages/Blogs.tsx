import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

const fetchBlogs = async () => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

const Blogs = () => {
  const navigate = useNavigate();
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0 });

  const {
    data: blogs = [],
    isLoading,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    staleTime: 1000 * 60 * 5, // cache 5 min
  });

  const handleBlogClick = (blog: any) => {
    navigate(`/blog/${blog.id}`, { state: blog });
  };
  
  return (
    <div className="min-h-screen bg-background">
    <Navigation />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink/20 via-pink-soft/20 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-foreground">Real Estate Blogs</span>
            </h1>
          </div>
        </div>
      </section>
      {/* Blog Cards */}

      <section ref={sectionRef} className="py-20 bg-gradient-to-br from-secondary/30 via-background to-secondary/10">
        <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} >

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogs.map((blog, index) => (
              <div 
                key={blog.id}
                className={`gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-smooth group cursor-pointer ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0}ms` }}
                onClick={() => handleBlogClick(blog)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.featured_image_url}
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
                      <span>{blog.excerpt}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{new Date(blog.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
