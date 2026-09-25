import { MapPin, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/features/marketing/contact-details";

export function Contact() {
  const mapQuery = encodeURIComponent(CONTACT.mapCoordinates);

  return (
    <section
      id="contato"
      className="border-t border-border/70 bg-surface py-28 sm:py-32"
    >
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="label-eyebrow">Contato</p>
        <h2 className="mt-6 font-display text-3xl leading-tight font-light sm:text-5xl">
          Seu cuidado começa com uma conversa.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-[0.98rem] leading-relaxed text-muted-foreground">
          Agende uma avaliação e descubra quais cuidados fazem sentido para
          você.
        </p>
        <a
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-2 rounded-md bg-champagne px-8 py-4 text-[0.8rem] tracking-[0.12em] text-primary-foreground transition-colors duration-300 hover:bg-champagne/85"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Agendar pelo WhatsApp
        </a>
      </div>
      <div className="mx-auto mt-16 max-w-site px-6">
        <div className="overflow-hidden rounded-lg border border-border bg-background">
          <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:flex-row lg:items-center">
            <div>
              <h3 className="font-display text-2xl font-light">
                Venha nos visitar
              </h3>
              <address className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-muted-foreground not-italic">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {CONTACT.address}
              </address>
              <a
                href={CONTACT.phoneHref}
                className="mt-3 inline-flex items-center gap-3 text-sm text-muted-foreground hover:underline"
              >
                <Phone className="size-4" aria-hidden="true" />
                {CONTACT.phone}
              </a>
            </div>
            <a
              href={CONTACT.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-md border border-champagne/70 px-6 py-3 text-sm text-foreground transition-colors hover:bg-champagne/10"
            >
              Abrir no Google Maps
            </a>
          </div>
          <iframe
            title="Mapa do endereço da Mademoiselle Estética Avançada"
            src={`https://www.google.com/maps?q=${mapQuery}&z=17&output=embed&hl=pt-BR`}
            width="1200"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-80 w-full border-0 border-t border-border sm:h-100"
          />
        </div>
      </div>
    </section>
  );
}
