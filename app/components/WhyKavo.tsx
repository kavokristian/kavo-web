import { Reveal } from "./Reveal";
import { IconCoin, IconHandshake, IconRocket } from "./Icons";

const reasons = [
  {
    title: "Rask levering",
    description: "Gratis utkast innen 2-3 virkedager.",
    icon: IconRocket,
  },
  {
    title: "Fast pris",
    description: "5 000 kr + 500 kr/mnd. Ingen overraskelser.",
    icon: IconCoin,
  },
  {
    title: "Personlig oppfølging",
    description: "Du snakker alltid med samme person.",
    icon: IconHandshake,
  },
];

export function WhyKavo() {
  return (
    <section
      id="hvorfor-kavo"
      className="scroll-mt-24 bg-atmosphere-subtle py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[2.25rem] font-semibold tracking-tight text-foreground sm:text-[2.75rem] md:text-[3rem]">
              Hvorfor Kavo?
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-3 sm:gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal
                key={reason.title}
                delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}
              >
                <div className="h-full rounded-[1.5rem] border border-border/70 bg-white px-6 py-8 text-center sm:px-7 sm:py-10">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
