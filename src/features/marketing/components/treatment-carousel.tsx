"use client";
import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export function TreatmentCarousel({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  function scroll(direction: number) {
    const element = ref.current;
    if (!element) return;
    const card = element.querySelector("article");
    const distance = card
      ? card.getBoundingClientRect().width + 24
      : element.clientWidth;
    element.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  return (
    <div className="mx-auto max-w-site px-6">
      <div className="mt-8 flex justify-end gap-3">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          aria-label="Ver tratamento anterior"
          aria-controls="treatments-list"
          onClick={() => scroll(-1)}
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          aria-label="Ver próximo tratamento"
          aria-controls="treatments-list"
          onClick={() => scroll(1)}
        >
          <ChevronRight />
        </Button>
      </div>
      <div
        id="treatments-list"
        ref={ref}
        role="region"
        aria-label="Tratamentos disponíveis"
        tabIndex={0}
        className="mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
      >
        {children}
      </div>
    </div>
  );
}
