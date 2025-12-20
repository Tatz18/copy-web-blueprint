import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FAQ = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const faqs = [
    {
      question: "How do I buy a property through Phoenix Realesthatic?",
      answer: "You can begin by sharing your requirements with our team. We provide verified property options, arrange site visits, assist with negotiations, and support you through documentation and registration for a smooth purchase experience."
    },
    {
      question: "What are the charges for property consultation?",
      answer: "Our consultation charges depend on the nature of the service and property requirements. We maintain complete transparency, and all fees are communicated clearly in advance with no hidden costs."
    },
    {
      question: "How does Phoenix Realesthatic verify property documents?",
      answer: "We conduct a thorough verification process that includes title checks, ownership validation, legal compliance review, and verification of approvals to ensure every property is safe and authentic."
    },
    {
      question: "Which locations do you cover in Kolkata?",
      answer: "We cover prime residential and commercial locations across North, South, Central, East, and West Kolkata, including major areas such as New Town, Salt Lake, Rajarhat, and South Kolkata."
    },
    {
      question: "Do you assist with home loan and financing options?",
      answer:"Yes, we connect our clients with trusted banking and financial partners to help secure competitive home loan options and guide them through the loan approval process.",
    },
    {
      question:"Is there any brokerage or hidden fee involved? ",
      answer: "No. Phoenix Realesthatic follows a transparent pricing policy. All charges, including brokerage or service fees, are clearly communicated upfront with no hidden costs.",
    },
    {
      question:"Do you handle legal documentation and property registration? ",
      answer: "Yes, our legal experts assist with documentation, agreement drafting, stamp duty guidance, and registration to ensure a smooth and legally compliant transaction. "
    },
    {
      question:"Can you help with both residential and commercial properties? ",
      answer :"Absolutely. We offer expert assistance for residential apartments, independent houses, plots, office spaces, and commercial properties across Kolkata and select Indian cities. ",
    },
    {
      question: "Do you offer property investment advisory services?",
      answer : "Yes, we provide data-driven investment guidance based on market treands, location analysis, and growth potential to help clients make informed real estate investment decisions. "
    },
    {
      question : "How long does the property buying process usually take? ",
      answer : "The timeline depends on property type, documentation readiness, and financing. However, our streamlined process significantly reduces delays and ensures faster closure.",
    },
    { question : "Do you assist NRIs in buying property in India?",
      answer : "Yes, we provide end-to-end support for NRI property buyers, including property selection, legal verification, documentation, and remote coordination.",
    },
    { question : "Are all properties listed on your website verified?",
      answer : "Yes. Every property is carefully verified for legal compliance, ownership clarity, and authenticity before being listed."
    },
    {
      question: "Can I schedule site visits through Phoenix Realesthatic? ",
    answer : "Yes, we arrange and coordinate site visits at your convenience, accompanied by our experts to guide you through each property.",
    },
    {
      question : "How do I get started with Phoenix Realesthatic? ",
      answer :"You can contact us via phone, email, or enquiry form. Our team will understand your requirements and provide personalized property options. "
    }

    ];

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about buying, selling, and investing in Indian real estate
          </p>
        </div>

        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
