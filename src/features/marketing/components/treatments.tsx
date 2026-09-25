import Image from "next/image";
import { TREATMENTS } from "@/features/marketing/content";
import { TreatmentCarousel } from "@/features/marketing/components/treatment-carousel";
export function Treatments() {
  return (
    <section
      id="tratamentos"
      className="border-t border-border/70 bg-surface py-24 sm:py-28"
    >
      <div className="mx-auto max-w-site px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="label-eyebrow">Tratamentos</p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-light sm:text-4xl">
              Tratamentos pensados para você
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              Cada atendimento é pensado de forma individual, respeitando seus
              objetivos, suas características e a avaliação profissional.
            </p>
          </div>
        </div>
      </div>

      <TreatmentCarousel>
        {TREATMENTS.map((t) => (
          <article
            key={t.name}
            className="group w-[78vw] shrink-0 snap-start overflow-hidden rounded-lg border border-border bg-background sm:w-[360px]"
          >
            <div className="overflow-hidden">
              <Image
                src={t.image}
                sizes="(min-width: 640px) 360px, 78vw"
                alt={t.alt}
                width={900}
                height={1100}
                loading="lazy"
                className="h-[300px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] sm:h-[340px]"
              />
            </div>
            <div className="p-7">
              <h3 className="font-display text-xl font-normal text-foreground">
                {t.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.text}
              </p>
              <a
                href="#contato"
                className="mt-6 inline-block text-[0.7rem] tracking-[0.16em] text-champagne uppercase transition-opacity duration-300 group-hover:opacity-70"
              >
                Saiba mais
              </a>
            </div>
          </article>
        ))}
      </TreatmentCarousel>
    </section>
  );
}
