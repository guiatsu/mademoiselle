import { Flower2, HeartHandshake, SlidersHorizontal } from "lucide-react";
import { VALUES } from "@/features/marketing/content";

const valueIcons = [Flower2, SlidersHorizontal, HeartHandshake];

export function Values() {
  return (
    <section className="border-y border-white/20 bg-taupe-deep py-section-compact">
      <div className="mx-auto max-w-site px-6">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <h2 className="font-display text-3xl leading-tight font-light text-white sm:text-4xl">
            Valores que orientam cada cuidado.
          </h2>
          <div className="grid gap-9 sm:grid-cols-3 sm:gap-0">
            {VALUES.map((value, index) => {
              const Icon = valueIcons[index] ?? Flower2;

              return (
                <div
                  key={value.title}
                  className="sm:px-6 sm:first:pl-0 sm:last:pr-0 xl:border-l xl:border-white/20 xl:first:border-l-0"
                >
                  <Icon
                    className="size-5 text-white"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 font-display text-2xl font-light text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-white">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
