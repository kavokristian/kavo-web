import { Reveal } from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Vi blir kjent",
    description:
      "En kort prat om bedriften din, kundene dine og hva du ønsker å oppnå.",
  },
  {
    number: "02",
    title: "Vi gjør jobben",
    description:
      "Vi setter opp det du trenger for å bli synlig på nett. Alt fra synlighet på Google til en profesjonell nettside.",
  },
  {
    number: "03",
    title: "Du godkjenner",
    description:
      "Vi viser deg resultatet og gjør eventuelle justeringer før vi går live.",
  },
  {
    number: "04",
    title: "Vi følger opp",
    description:
      "Vi passer på at alt fungerer, holder nettsiden i full drift og er tilgjengelige når du trenger oss.",
  },
];

export function HowItWorks() {
  return (
    <section id="slik-fungerer-det" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[2.25rem] font-semibold tracking-tight text-foreground sm:text-[2.75rem] md:text-[3rem]">
              Slik fungerer Kavo
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
              Det skal være enkelt å bli synlig på nett. Vi tar oss av jobben,
              og du godkjenner underveis.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16 sm:mt-20">
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
