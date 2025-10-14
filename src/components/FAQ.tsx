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
      question: "What services does your company provide?",
      answer: "We specialize in property buying, selling, for both residential and commercial properties."
    },
    {
      question: "What are the charges for property consultation?",
      answer: "Property consultation is completely free for buyers. We earn through partnerships with developers and verified sellers, ensuring no hidden costs for our clients."
    },
    {
      question: "Do you provide home loan assistance?",
      answer: "Yes, we have partnerships with leading Indian banks like SBI, HDFC, ICICI, and Axis Bank. We help you get pre-approved loans with competitive interest rates."
    },
    {
      question: "How do you verify property documents?",
      answer: "Our legal team conducts thorough due diligence including title verification, encumbrance checks, approval verifications, and compliance with local regulations before listing any property."
    },
    {
      question: "What locations do you cover in India?",
      answer: "We operate in major Indian cities including Mumbai, Delhi NCR, Bangalore, Hyderabad, Chennai, Pune, Kolkata, and Ahmedabad with plans to expand to more cities."
    },
    {
      question: "Can I sell my property through Phoenix Realesthatic?",
      answer: "Absolutely! We provide end-to-end selling services including property valuation, marketing, buyer verification, and transaction support with competitive commission rates."
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