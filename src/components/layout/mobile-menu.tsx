"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/components/layout/navigation";
import { Button } from "@/components/ui/button";
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="lg:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <Button
        variant="outline"
        size="icon"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </Button>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação móvel"
          className="absolute inset-x-0 top-20 border-b bg-surface px-6 py-4"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block border-b py-3 text-sm"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/agendar"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-md bg-champagne px-5 py-3 text-center text-sm text-primary-foreground hover:bg-champagne/85"
          >
            Agendar avaliação
          </Link>
        </nav>
      )}
    </div>
  );
}
