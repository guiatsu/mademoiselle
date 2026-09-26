import Image from "next/image";
import { TREATMENTS } from "@/features/marketing/content";

const catalogDetails: Record<string, string> = {
  "Harmonização facial":
    "A indicação é definida em consulta, considerando proporções, expressões e o resultado que faz sentido para você.",
  "Tratamentos faciais":
    "A proposta de cuidado é construída a partir da avaliação da pele, da rotina e dos objetivos de cada pessoa.",
  "Tratamentos corporais":
    "As possibilidades são apresentadas com clareza após uma análise individual das necessidades e expectativas.",
  Rejuvenescimento:
    "O acompanhamento prioriza escolhas graduais, com atenção à qualidade da pele e à preservação da sua identidade.",
  Bioestimuladores:
    "A avaliação profissional orienta as possibilidades, o planejamento e os cuidados necessários em cada etapa.",
  "Cuidados com a pele":
    "A orientação combina hábitos possíveis e produtos adequados para apoiar uma rotina consistente em casa.",
};

export function Catalog() {
  return (
    <section
      id="catalogo"
      className="border-t border-border/70 bg-background py-section-standard"
    >
      <div className="mx-auto max-w-site px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl leading-tight font-light sm:text-4xl">
            Um catálogo de cuidados feito para a sua história.
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
            Conheça as principais possibilidades de atendimento. A definição de
            qualquer protocolo acontece sempre após avaliação profissional.
          </p>
        </div>

        <div className="mt-14">
          {TREATMENTS.map((treatment, index) => {
            const comparisonImage = TREATMENTS[(index + 1) % TREATMENTS.length];

            return (
              <article
                key={treatment.name}
                className="grid gap-8 border-t border-border py-10 first:border-t-0 first:pt-0 lg:grid-cols-[minmax(0,0.8fr)_minmax(31rem,1.2fr)] lg:items-center lg:gap-16"
              >
                <div>
                  <h3 className="font-display text-3xl font-light text-foreground">
                    {treatment.name}
                  </h3>
                  <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
                    {treatment.text}
                  </p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {catalogDetails[treatment.name]}
                  </p>
                  <a
                    href="#contato"
                    className="mt-7 inline-flex min-h-11 items-center text-[0.72rem] tracking-[0.14em] text-champagne uppercase transition-opacity duration-200 hover:opacity-70"
                  >
                    Conversar sobre este cuidado
                  </a>
                </div>

                <figure>
                  <div className="grid grid-cols-2 overflow-hidden rounded-4xl border border-border bg-surface">
                    <div className="relative aspect-[4/3] overflow-hidden border-r border-border">
                      <Image
                        src={treatment.image}
                        alt={`Imagem ilustrativa para ${treatment.name}`}
                        sizes="(min-width: 1024px) 340px, 44vw"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute top-4 left-4 rounded-sm bg-background/90 px-3 py-1.5 text-[0.65rem] tracking-[0.12em] text-foreground uppercase">
                        Antes
                      </span>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={comparisonImage.image}
                        alt={`Imagem ilustrativa para ${comparisonImage.name}`}
                        sizes="(min-width: 1024px) 340px, 44vw"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute top-4 left-4 rounded-sm bg-background/90 px-3 py-1.5 text-[0.65rem] tracking-[0.12em] text-foreground uppercase">
                        Depois
                      </span>
                    </div>
                  </div>
                  <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Comparativo ilustrativo horizontal — será substituído por
                    casos autorizados.
                  </figcaption>
                </figure>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
