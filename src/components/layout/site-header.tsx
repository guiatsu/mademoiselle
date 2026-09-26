import Image from "next/image";
import Link from "next/link";
import { NAV } from "@/components/layout/navigation";
import { MobileMenu } from "@/components/layout/mobile-menu";
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-site items-center justify-between gap-3 px-6 sm:gap-6">
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-2 leading-none sm:gap-3"
        >
          <Image
            src="/mademoiselle-mark.svg"
            alt=""
            width={48}
            height={48}
            className="size-9 shrink-0 sm:size-12"
          />
          <span className="flex min-w-0 flex-col">
            <span className="truncate font-display text-base font-medium tracking-[0.14em] text-foreground sm:text-2xl">
              MADEMOISELLE
            </span>
            <span className="mt-1 label-eyebrow text-[0.6rem]">
              Estética Avançada
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 min-w-11 items-center justify-center px-2 text-[0.8rem] tracking-[0.08em] text-muted-foreground transition-colors duration-300 hover:text-champagne"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/agendar"
            className="hidden min-h-11 items-center rounded-md bg-primary px-5 py-2.5 text-[0.78rem] tracking-[0.1em] text-primary-foreground transition-[background-color,transform] duration-150 ease-out hover:bg-primary/90 active:scale-[0.98] md:inline-flex"
          >
            Agendar avaliação
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
