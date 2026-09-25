import Image from "next/image";
import professionalImage from "@/features/marketing/assets/professional.jpg";

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-28">
      <div className="mx-auto grid max-w-site items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={professionalImage}
              sizes="(min-width: 1024px) 536px, 100vw"
              alt="Imagem ilustrativa de profissional em ambiente de estética"
              width={1008}
              height={1264}
              loading="lazy"
              className="h-[420px] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03] sm:h-[560px]"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="label-eyebrow">Sobre</p>
          <h2 className="mt-5 font-display text-3xl leading-tight font-light sm:text-4xl">
            Beleza começa com cuidado.
          </h2>
          <p className="mt-6 text-[0.98rem] leading-relaxed text-muted-foreground">
            Na Mademoiselle, cada atendimento começa entendendo você. Unimos
            conhecimento, tecnologia e uma abordagem cuidadosa para criar
            protocolos personalizados e experiências que respeitam a
            individualidade de cada paciente.
          </p>
          <div className="mt-8 max-w-lg border-t border-champagne-light/70 pt-5">
            <p className="font-display text-lg">Atendimento personalizado</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Estética avançada
            </p>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Informações sobre a equipe serão disponibilizadas em breve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
