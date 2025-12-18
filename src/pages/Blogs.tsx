import Navigation from "@/components/Navigation";
import BlogCard from "@/components/BlogCard";

const Blogs = () => {
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
      <BlogCard />
    </div>
  );
};

export default Blogs;
