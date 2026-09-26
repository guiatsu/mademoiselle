import { FAQ } from "@/features/marketing/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section id="duvidas" className="py-section-standard">
      <div className="mx-auto max-w-site px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-light sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>
        <Accordion
          type="single"
          collapsible
          defaultValue="faq-0"
          className="mx-auto mt-12 max-w-3xl border-t"
        >
          {FAQ.map((item, i) => (
            <AccordionItem value={`faq-${i}`} key={item.q}>
              <AccordionTrigger className="py-6 font-display text-lg font-normal">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pr-10 pb-6 leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
