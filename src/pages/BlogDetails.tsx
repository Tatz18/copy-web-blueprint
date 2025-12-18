import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  let blog = location.state;

  if (!blog) {
    blog = blogs.find((b) => b.id === Number(id));
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold">Blog not found</h2>
          <Link to="/blogs">
            <Button>Back to Blogs</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-between mb-6">
          <Link to="/blogs">
            <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blogs
            </Button>
          </Link>
        </div>
      </div>
      
      <section className="py-20 bg-gradient-to-br from-pink/20 via-pink-soft/20 to-transparent">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-4xl md:text-5xl font-bold mb-4">
            {blog.title}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[400px] object-cover rounded-2xl mb-10"
          />

          <p className="text-lg leading-8">
            {blog.description}
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
