import { Star } from "lucide-react";
import { siGoogle } from "simple-icons/icons";
import { CONTACT } from "@/features/marketing/contact-details";
import { TESTIMONIAL_EXAMPLES } from "@/features/marketing/content";

export function Testimonials() {
  return (
    <section className="border-y border-border/70 bg-surface py-section-standard">
      <div className="mx-auto max-w-site px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-foreground">
              <svg
                viewBox="0 0 24 24"
                className="size-5 fill-current text-champagne"
                aria-hidden="true"
              >
                <path d={siGoogle.path} />
              </svg>
              <span className="text-xs tracking-[0.12em] uppercase">
                Avaliações no Google
              </span>
            </div>
            <h2 className="mt-5 font-display text-3xl leading-tight font-light sm:text-4xl">
              Confiança construída em cada atendimento.
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              A sua experiência é parte importante da nossa história.
            </p>
          </div>
          <a
            href={CONTACT.googleProfileHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-champagne/70 px-6 py-3 text-sm text-foreground transition-[background-color,transform] duration-150 ease-out hover:bg-champagne/10 active:scale-[0.98]"
          >
            Ver perfil no Google
          </a>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {TESTIMONIAL_EXAMPLES.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex min-h-72 flex-col rounded-4xl bg-background p-7 sm:p-8"
            >
              <div
                className="flex gap-1 text-champagne"
                aria-label="5 de 5 estrelas"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className="size-4 fill-current"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-7 font-display text-xl leading-snug text-foreground">
                “{testimonial.quote}”
              </p>
              <footer className="mt-auto border-t border-border pt-5">
                <cite className="text-sm font-medium text-foreground not-italic">
                  {testimonial.name}
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Confira outras avaliações no perfil da Mademoiselle no Google.
        </p>
      </div>
    </section>
  );
}
