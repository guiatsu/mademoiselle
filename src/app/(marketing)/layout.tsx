import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only fixed top-2 left-2 z-50 rounded bg-background p-3 focus:not-sr-only"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
