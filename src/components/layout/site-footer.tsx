import { Camera, MessageCircle } from "lucide-react";
import { CONTACT } from "@/features/marketing/contact-details";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background py-16">
      <div className="mx-auto max-w-site px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg tracking-widest">MADEMOISELLE</p>
            <p className="mt-2 label-eyebrow">Estética Avançada</p>
          </div>
          <div>
            <h2 className="text-sm">Contato e endereço</h2>
            <address className="mt-3 space-y-3 text-sm text-muted-foreground not-italic">
              <a href="#contato" className="block hover:underline">
                {CONTACT.address}
              </a>
              <a href={CONTACT.phoneHref} className="block hover:underline">
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 underline underline-offset-4"
              >
                <MessageCircle
                  className="size-4"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                Fale pelo WhatsApp
              </a>
            </address>
            <a
              href={CONTACT.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 underline underline-offset-4"
            >
              <Camera className="size-4" strokeWidth={1.5} aria-hidden="true" />
              @centro.mademoiselle
            </a>
          </div>
          <div>
            <h2 className="text-sm">Atendimento</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Horários serão divulgados em breve.
            </p>
          </div>
        </div>
        <div className="my-10 hairline" />
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mademoiselle Estética Avançada
        </p>
      </div>
    </footer>
  );
}
