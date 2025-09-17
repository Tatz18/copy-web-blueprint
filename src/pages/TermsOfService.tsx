import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Phoenix Realesthatic's website and services, you accept and 
                agree to be bound by the terms and provision of this agreement. If you do not agree 
                to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on Phoenix 
                Realesthatic's website for personal, non-commercial transitory viewing only. This is 
                the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Real Estate Services</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Professional Services</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Phoenix Realesthatic provides professional real estate services including property 
                    sales, rentals, investment consulting, and property management. All services are 
                    provided in accordance with applicable laws and regulations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Property Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    While we strive to provide accurate property information, we make no warranties 
                    regarding the completeness, accuracy, or reliability of any property details, 
                    prices, or availability. All property information is subject to change without notice.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Client Responsibilities</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Clients are responsible for conducting their own due diligence, including property 
                    inspections, financial assessments, and legal verification before making any 
                    real estate decisions.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on Phoenix Realesthatic's website are provided on an 'as is' basis. 
                Phoenix Realesthatic makes no warranties, expressed or implied, and hereby disclaims 
                and negates all other warranties including without limitation, implied warranties or 
                conditions of merchantability, fitness for a particular purpose, or non-infringement 
                of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Phoenix Realesthatic or its suppliers be liable for any damages 
                (including, without limitation, damages for loss of data or profit, or due to business 
                interruption) arising out of the use or inability to use the materials on Phoenix 
                Realesthatic's website, even if Phoenix Realesthatic or an authorized representative 
                has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws 
                of India, and you irrevocably submit to the exclusive jurisdiction of the courts in 
                Kolkata, West Bengal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Phoenix Realesthatic may revise these terms of service at any time without notice. 
                By using this website, you are agreeing to be bound by the then current version of 
                these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p>Email: legal@phoenixrealesthatic.com</p>
                <p>Phone: +91 93301 02817</p>
                <p>Address: Regus Globsyn Crystals, X-11& 12, Block-EP, Saltlake Sector-V, Kolkata-91, IN</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TermsOfService;