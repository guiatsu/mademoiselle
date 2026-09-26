import Image from "next/image";
import professionalImage from "@/features/marketing/assets/professional.jpg";

export function About() {
  return (
    <section id="sobre" className="bg-surface py-section-standard">
      <div className="mx-auto grid max-w-site items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="relative order-2 lg:order-1">
          <div className="rounded-4xl bg-champagne-light/35 p-2">
            <div className="overflow-hidden rounded-[10px]">
              <Image
                src={professionalImage}
                sizes="(min-width: 1024px) 500px, 100vw"
                alt="Imagem ilustrativa de profissional em ambiente de estética"
                width={1008}
                height={1264}
                loading="lazy"
                className="h-[420px] w-full image-zoom object-cover sm:h-[560px]"
              />
            </div>
          </div>
          <p className="mt-5 max-w-sm font-display text-xl leading-snug text-foreground sm:text-2xl">
            Um atendimento que começa pela sua história.
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="max-w-xl font-display text-3xl leading-tight font-light sm:text-4xl">
            Beleza começa com cuidado.
          </h2>
          <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
            Na Mademoiselle, cada atendimento começa entendendo você. Unimos
            conhecimento, tecnologia e uma abordagem cuidadosa para criar
            protocolos personalizados e experiências que respeitam a
            individualidade de cada paciente.
          </p>
          <dl className="mt-10 grid max-w-xl gap-7 border-t border-champagne-light/70 pt-7 sm:grid-cols-2 sm:gap-10">
            <div>
              <dt className="font-display text-xl text-foreground">
                Escuta individual
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Cada escolha parte dos seus objetivos, da sua rotina e da sua
                experiência.
              </dd>
            </div>
            <div>
              <dt className="font-display text-xl text-foreground">
                Cuidado personalizado
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Estética avançada com atenção aos detalhes em cada etapa do
                atendimento.
              </dd>
            </div>
          </dl>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Informações sobre a equipe serão disponibilizadas em breve.
          </p>
        </div>
      </div>
    </section>
  );
}
