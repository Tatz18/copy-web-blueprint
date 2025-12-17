import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, MapPin, Clock, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client';

const Careers = () => {
  const { toast } = useToast();
  const [selectedPosition, setSelectedPosition] = useState<string>("");
  
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    toast({
      title: "Application Process",
      description: `To apply for ${position}, please send your resume to careers@phoenixrealesthatic.com`,
    });
  };

  const fileToBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.onload = () => {
        const result = reader.result as string;
        // strip "data:<mime>;base64," prefix
        const base64 = result.split(",")[1];
        resolve(base64);
      };
      reader.readAsDataURL(file);
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !mobile || !position || !file) {
      toast({ title: "Missing fields", description: "Please fill all fields and upload your resume." });
      return;
    }  
    // Optional size limit (recommended)
    if (file.size > 1 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Resume must be under 1MB",
      });
      return;
    }

    setSubmitting(true);
    try {
      const base64 = await fileToBase64(file);

      const payload  = {
        name,
        email,
        mobile,
        position,
        file: {
          name: file.name,
          type: file.type,
          data: base64, // base64-encoded string (no prefix)
        },
      };

      const { data, error } = await supabase.functions.invoke("careers-email",
        { body: payload }
      );

      if (error) throw error;

      toast({ title: "Application sent", description: "Your application has been sent. HR will contact you soon." });
      // reset form
      setName("");
      setEmail("");
      setMobile("");
      setPosition("");
      setFile(null);
    } catch (error: any) {
      console.error(error);
      toast({ title: "Error", description: error.message || "Something went wrong." });
    } finally {
      setSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Users,
      title: "Great Team Culture",
      description: "Work with passionate professionals in a supportive environment that encourages growth.",
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Attractive salary packages with performance-based incentives and growth opportunities.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career progression paths with training programs and skill development opportunities.",
    },
  ];

  const positions = [
    {
      title: "Sales Executive",
      type: "Full Time",
      location: "Kolkata, Salt Lake",
      salary: "₹3-5 LPA + Incentives",
      description: "We are looking for a dynamic Sales Executive to join our growing team. You'll be responsible for generating leads, conducting property showings, and closing deals.",
      requirements: [
        "1-3 years of sales experience (real estate preferred)",
        "Excellent communication and negotiation skills",
        "Bachelor's degree in any field",
        "Strong networking abilities",
        "Own vehicle preferred",
      ],
      responsibilities: [
        "Generate and follow up on leads",
        "Conduct property tours and presentations",
        "Negotiate deals and close sales",
      ],
    },
    {
      title: "Back Office Executive",
      type: "Full Time",
      location: "Kolkata, Salt Lake",
      salary: "₹2.5-4 LPA",
      description: "Join our administrative team as a Back Office Executive. Handle documentation, client support, and ensure smooth operations behind the scenes.",
      requirements: [
        "0-2 years of administrative experience",
        "Proficiency in MS Office Suite",
        "Strong organizational skills",
        "Attention to detail",
        "Graduate in any discipline",
      ],
      responsibilities: [
        "Manage property documentation",
        "Handle client inquiries and support",
        "Maintain databases and records",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 gradient-pink-soft">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build Your Career in Real Estate with Phoenix Realesthatic. We're looking for passionate individuals to grow with us.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>Apply Now</CardTitle>
              <CardDescription>
                Submit your details and our HR team will contact you.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>

                {/* Select Position */}
                <div className="flex flex-col">
                  <label className="font-medium mb-1">Select Position</label>
                  <select
                    className="border rounded-lg px-4 py-2"
                    name="position"
                    defaultValue=""
                    required
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                  >
                    <option value="" disabled>Select a position</option>
                      <option value="Sales Executive">
                        Sales Executive
                      </option>
                      <option value="Back Office Executive">
                        Back Office Executive
                      </option>
                  </select>
                </div>

                {/* Full Name */}
                <div className="flex flex-col">
                  <label className="font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="border rounded-lg px-4 py-2"
                    placeholder="Enter your full name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="border rounded-lg px-4 py-2"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Mobile */}
                <div className="flex flex-col">
                  <label className="font-medium mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    className="border rounded-lg px-4 py-2"
                    placeholder="Enter mobile number"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>

                {/* Upload File */}
                <div className="flex flex-col">
                  <label className="font-medium mb-1">Upload Resume</label>
                  <input
                    type="file"
                    name="file"
                    className="border rounded-lg px-4 py-2 bg-white"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full gradient-pink" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Application"}
                </Button>

              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join a dynamic team that values growth, innovation, and excellence in real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground">
              Discover exciting career opportunities with us
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {position.salary}
                        </div>
                      </div>
                    </div>
                    <Button className="gradient-pink" onClick={() => handleApply(position.title)}>
                      Apply Now
                    </Button>
                  </div>
                  <CardDescription className="mt-4">
                    {position.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
