import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  icons: { icon: { url: "/mademoiselle-mark.svg", type: "image/svg+xml" } },
  title: {
    default: "Mademoiselle Estética Avançada | Clínica de Estética",
    template: "%s | Mademoiselle",
  },
  description:
    "Tratamentos estéticos personalizados com cuidado, tecnologia e atenção aos detalhes. Conheça a Mademoiselle Estética Avançada.",
  openGraph: {
    title: "Mademoiselle Estética Avançada",
    description:
      "Tratamentos estéticos personalizados para valorizar sua beleza com naturalidade e cuidado.",
    locale: "pt_BR",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
