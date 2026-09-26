import Image from "next/image";
import heroImage from "@/features/marketing/assets/hero.jpg";
export function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-site px-6 py-section-hero">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div className="reveal">
          <h1 className="font-display text-4xl leading-[1.12] font-light text-foreground sm:text-5xl lg:text-6xl">
            Cuidado, tecnologia e beleza em harmonia.
          </h1>
          <p className="mt-7 max-w-lg text-[0.98rem] leading-relaxed text-muted-foreground">
            Tratamentos estéticos personalizados para valorizar sua beleza com
            naturalidade, cuidado e atenção aos detalhes.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contato"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-7 py-3.5 text-center text-[0.8rem] tracking-[0.12em] text-primary-foreground transition-[background-color,transform] duration-150 ease-out hover:bg-primary/90 active:scale-[0.98]"
            >
              Agendar avaliação
            </a>
            <a
              href="#tratamentos"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-champagne/70 px-7 py-3.5 text-center text-[0.8rem] tracking-[0.12em] text-foreground transition-[background-color,transform] duration-150 ease-out hover:bg-champagne/10 active:scale-[0.98]"
            >
              Conhecer tratamentos
            </a>
          </div>
        </div>

        <div className="relative reveal">
          <div
            className="absolute -inset-2 rounded-4xl border border-champagne-light/50"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-4xl">
            <Image
              src={heroImage}
              preload
              sizes="(min-width: 1024px) 520px, 100vw"
              alt="Paciente em ambiente de clínica de estética com iluminação suave"
              width={1200}
              height={1504}
              className="h-[380px] w-full image-zoom object-cover sm:h-[520px] lg:h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
