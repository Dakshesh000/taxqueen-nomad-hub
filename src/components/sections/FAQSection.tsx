import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Placeholder FAQs - to be replaced with actual content
const faqs = [
  {
    question: "[FAQ Question 1]",
    answer: "[Answer to FAQ 1]",
  },
  {
    question: "[FAQ Question 2]",
    answer: "[Answer to FAQ 2]",
  },
  {
    question: "[FAQ Question 3]",
    answer: "[Answer to FAQ 3]",
  },
  {
    question: "[FAQ Question 4]",
    answer: "[Answer to FAQ 4]",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            [FAQ Headline]
          </h2>
          <p className="text-muted-foreground">
            [Common questions about digital nomad taxes]
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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

export default FAQSection;
