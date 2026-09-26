import { siWhatsapp } from "simple-icons/icons";
import { CONTACT } from "@/features/marketing/contact-details";

export function WhatsAppWidget() {
  return (
    <a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Mademoiselle pelo WhatsApp"
      className="fixed right-6 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] z-40 inline-grid size-16 place-items-center rounded-full transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:-translate-y-1"
    >
      <span aria-hidden="true" className="whatsapp-wave" />
      <span
        aria-hidden="true"
        className="whatsapp-wave whatsapp-wave-delayed"
      />
      <span
        aria-hidden="true"
        className="relative z-10 grid size-12 place-items-center rounded-full border-2 border-white bg-[#25d366] shadow-[0_12px_24px_rgb(37_211_102_/_0.24),inset_0_1px_0_rgb(255_255_255_/_0.28)]"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-7 fill-white"
          aria-hidden="true"
        >
          <path d={siWhatsapp.path} />
        </svg>
      </span>
    </a>
  );
}
