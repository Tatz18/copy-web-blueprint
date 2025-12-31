import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Link2, Share2, Tag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const BlogDetails = () => {
  const { id } = useParams();
  const [showLoader, setShowLoader] = useState(false);

  // Delay loader to avoid flash
  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(true), 5);
    return () => clearTimeout(timer);
  }, []);
  
  const handleShare = async () => {
    const url = window.location.href;

    // Native share (mobile + supported browsers)
    if (navigator.share) {
      try {
          await navigator.share({
          title: blog.title,
          text: blog.excerpt || "Check out this blog",
          url,
        });
      } catch {
        // user cancelled → do nothing
      }
      return;
    }

    // Fallback: copy to clipboard
    await navigator.clipboard.writeText(url);

    // Optional toast
    toast({
      title: "Link copied",
      description: "Blog link copied to clipboard",
    });
  };
  const {
    data: blog,
    isLoading,
  } = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

  // 🔹 Skeleton Loader
  if (isLoading && showLoader) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-10 space-y-6 animate-pulse">
          <div className="h-8 w-3/4 bg-muted rounded" />
          <div className="h-64 bg-muted rounded" />
          <div className="space-y-3">
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-5/6" />
            <div className="h-4 bg-muted rounded w-4/6" />
          </div>
        </div>
      </div>
    );
  }

  // 🔹 Blog not found (after loading finishes)
  if (!isLoading && !blog) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
          <Link to="/blogs">
            <Button>Back to Blogs</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) return null; // safety

  // 🔹 Blog Page
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <Link to="/blogs">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blogs
            </Button>
          </Link>

          <Button variant="outline" size="sm" onClick={handleShare} title="Share this blog">
            <Share2 className="h-4 w-4" />            
          </Button>
        </div>

        <img
          src={blog.featured_image_url}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-2xl mb-8"
        />

        <div className="space-y-6">
          <div>
            <div className="flex items-center text-muted-foreground mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(blog.created_at).toLocaleDateString()}
            </div>
            <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
              <div className="flex items-center space-x-4 text-muted-foreground text-sm mb-4">
                <span className="flex items-center">
                  <Link2 className="h-4 w-4 mr-1" />
                  {blog.slug}
                </span>
              </div>
          </div>

          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed">{blog.excerpt}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
