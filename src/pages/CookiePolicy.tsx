import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when 
                you visit a website. They are widely used to make websites work more efficiently and 
                provide information to website owners about how visitors use their sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Phoenix Realesthatic uses cookies to enhance your browsing experience and provide 
                personalized services. We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Essential website functionality and security</li>
                <li>Remembering your preferences and settings</li>
                <li>Analyzing website traffic and user behavior</li>
                <li>Improving our services and user experience</li>
                <li>Providing personalized property recommendations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable basic 
                    functions like page navigation, access to secure areas, and form submissions. The 
                    website cannot function properly without these cookies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Performance Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These cookies collect information about how visitors use our website, such as which 
                    pages are visited most often and if users receive error messages. This information 
                    helps us improve website performance and user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Functionality Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These cookies allow the website to remember choices you make (such as your preferred 
                    language or region) and provide enhanced, more personal features. They may also be 
                    used to provide services you have requested.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Analytics Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We use analytics cookies to understand how visitors interact with our website. This 
                    includes information about pages visited, time spent on the site, and any errors 
                    encountered. This data helps us improve our website and services.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may also use third-party services that place cookies on your device. These include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Google Analytics for website traffic analysis</li>
                <li>Social media platforms for sharing content</li>
                <li>Map services for location-based features</li>
                <li>Customer support and chat services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Browser Settings</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most web browsers allow you to control cookies through their settings. You can 
                    usually find these options in the 'Preferences' or 'Settings' menu of your browser. 
                    You can choose to accept all cookies, reject all cookies, or be notified when a 
                    cookie is set.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Cookie Preferences</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You can manage your cookie preferences at any time. However, please note that 
                    disabling certain cookies may affect the functionality of our website and your 
                    user experience.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookie Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies have different lifespans. Session cookies are temporary and are deleted when 
                you close your browser. Persistent cookies remain on your device for a specified 
                period or until you delete them manually. We regularly review and update our cookie 
                retention periods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or legal requirements. When we make changes, we will update the "Last updated" date 
                at the top of this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p>Email: privacy@phoenixrealesthatic.com</p>
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

export default CookiePolicy;