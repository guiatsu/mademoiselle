import { FAQ } from "@/features/marketing/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export function Faq() {
  return (
    <section id="duvidas" className="py-24 sm:py-28">
      <div className="mx-auto grid max-w-site gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="label-eyebrow">Dúvidas</p>
          <h2 className="mt-5 font-display text-3xl font-light sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>
        <Accordion
          type="single"
          collapsible
          defaultValue="faq-0"
          className="border-t"
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
