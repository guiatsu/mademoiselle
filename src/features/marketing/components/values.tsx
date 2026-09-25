import { VALUES } from "@/features/marketing/content";

export function Values() {
  return (
    <section className="border-y border-border/70 bg-surface py-24 sm:py-28 lg:py-21">
      <div className="mx-auto max-w-site px-6">
        <div className="grid gap-14 sm:grid-cols-3 sm:gap-10">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className="flex flex-col items-center text-center"
            >
              <span className="font-display text-sm text-champagne">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl font-light">
                {v.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
