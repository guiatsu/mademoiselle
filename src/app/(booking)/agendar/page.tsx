import Link from "next/link";
import type { Metadata } from "next";
import { CONTACT } from "@/features/marketing/contact-details";

export const metadata: Metadata = {
  title: "Agendamento",
  robots: { index: false, follow: false },
};

const calendarUrl =
  "https://calendar.google.com/calendar/u/0?cid=Z3VpYXRzdWdhbWVyQGdtYWlsLmNvbQ";
const calendarEmbedUrl =
  "https://calendar.google.com/calendar/embed?src=guiatsugamer%40gmail.com&ctz=America%2FSao_Paulo&mode=WEEK&showTitle=0&showNav=1&showDate=0&showPrint=0&showTabs=0&showCalendars=0";

export default function Page() {
  return (
    <main className="mx-auto max-w-site px-6 py-16 sm:py-24">
      <Link
        href="/"
        className="text-sm text-muted-foreground underline underline-offset-4"
      >
        Voltar ao início
      </Link>
      <p className="mt-10 label-eyebrow">Mademoiselle</p>
      <h1 className="mt-5 font-display text-4xl font-light sm:text-5xl">
        Agende sua avaliação
      </h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
        Consulte os horários disponíveis e fale com nossa equipe pelo WhatsApp
        para agendar sua avaliação.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-champagne px-6 py-3 text-center text-sm text-primary-foreground transition-colors hover:bg-champagne/85"
        >
          Falar pelo WhatsApp
        </a>
        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-champagne/70 px-6 py-3 text-center text-sm transition-colors hover:bg-champagne/10"
        >
          Abrir no Google Agenda
        </a>
      </div>
      <div className="mt-10 overflow-hidden rounded-lg border border-border bg-surface">
        <iframe
          src={calendarEmbedUrl}
          title="Agenda da Mademoiselle no Google Agenda"
          width="1200"
          height="800"
          className="h-200 w-full border-0"
        />
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Não conseguiu visualizar os horários? Abra o Google Agenda pelo botão
        acima ou entre em contato pelo WhatsApp.
      </p>
    </main>
  );
}
