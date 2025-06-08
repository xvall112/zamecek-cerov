import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  heading?: string;
  items?: FaqItem[];
}

const Faq = ({
  heading = "Často kladené dotazy",
  items = [
    {
      question: "Chek-in a check-out",
      answer:
        "Check-in je možný od 14:00 do 20:00, check-out do 10:00. V případě potřeby lze domluvit individuální čas.",
    },
    {
      question: "Stravování",
      answer:
        "Stravování není zajištěno, ale v apartmánech je plně vybavená kuchyňka, kde si můžete připravit vlastní jídlo. V okolí několik restaurací a obchodů s potravinami.",
    },
    {
      question: "Domácí mazlíčci",
      answer:
        "Domácí mazlíčci nejsou v apartmánech povoleni, abychom zajistili pohodlí a čistotu pro všechny hosty.",
    },
    {
      question: "Parkování",
      answer:
        "Parkování je zajištěno přímo u apartmánů a je zdarma. Parkoviště je oplocené a bezpečné.",
    },
  ],
}: FaqProps) => {
  return (
    <section className="py-32 bg-primary-foreground">
      <div className="container max-w-3xl">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
          {heading}
        </h1>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { Faq };
