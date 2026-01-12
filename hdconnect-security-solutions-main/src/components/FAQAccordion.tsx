import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  title?: string;
  items: FAQItem[];
};

const FAQAccordion = ({ title = "Questions fréquentes", items }: FAQAccordionProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          {title}
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="rounded-lg border bg-card px-2"
            >
              <AccordionTrigger className="px-4 text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQAccordion;
