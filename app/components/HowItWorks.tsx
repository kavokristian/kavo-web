import { Reveal } from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Vi snakker sammen",
    description:
      "En kort, uforpliktende samtale om bedriften din, kundene dine og hva du trenger.",
  },
  {
    number: "02",
    title: "Vi designer",
    description:
      "Du får et klart forslag tilpasset bransjen din — enkelt å forstå, enkelt å si ja til.",
  },
  {
    number: "03",
    title: "Vi bygger og lanserer",
    description:
      "Ferdig nettside, klar til å ta imot kunder. Mobilvennlig, rask og profesjonell.",
  },
  {
    number: "04",
    title: "Vi følger opp",
    description:
      "Du er ikke alene etter lansering. Vi hjelper deg med små justeringer og videre drift.",
  },
];

export function HowItWorks() {
  return (
    <section id="slik-fungerer-det" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-accent">Prosessen</p>
            <h2 className="mt-3 text-[1.75rem] font-semibold tracking-tight text-foreground sm:text-[2.25rem]">
              Slik fungerer Kavo
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
              En ryddig prosess uten overraskelser. Du vet alltid hva som skjer
              — og når.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16 sm:mt-20">
          {/* Connecting line — desktop */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[1.125rem] hidden h-px bg-border lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal
                key={step.number}
                delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}
              >
                <div className="relative">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-xs font-medium text-foreground shadow-sm">
                    {step.number}
                  </div>
                  <h3 className="mt-5 text-[1.0625rem] font-semibold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
