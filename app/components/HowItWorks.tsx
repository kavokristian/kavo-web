import Link from "next/link";
import { Reveal } from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Fortell om bedriften",
    description: "Svar på noen få spørsmål - det tar et par minutter.",
  },
  {
    number: "02",
    title: "Motta gratis utkast",
    description: "Du får et kostnadsfritt utkast innen 2-3 virkedager.",
  },
  {
    number: "03",
    title: "Vi finjusterer sammen",
    description: "Du gir tilbakemeldinger, og vi justerer løsningen.",
  },
  {
    number: "04",
    title: "Godkjenn og lanser",
    description:
      "Når du er fornøyd, publiserer vi og sørger for at du blir synlig på Google.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="slik-fungerer-det"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[2.25rem] font-semibold tracking-tight text-foreground sm:text-[2.75rem] md:text-[3rem]">
              Kundereisen i fire steg
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14 sm:mt-16">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[1.125rem] hidden h-px bg-border lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal
                key={step.number}
                delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}
              >
                <div>
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

        <Reveal className="mt-12 sm:mt-14" delay={2}>
          <div className="flex justify-center">
            <Link
              href="/bestill-demo"
              className="inline-flex h-12 w-full max-w-md items-center justify-center rounded-full bg-accent px-7 text-center text-[0.9375rem] font-medium leading-snug text-white shadow-[0_1px_2px_rgba(37,99,235,0.2),0_8px_24px_rgba(37,99,235,0.25)] transition-all duration-200 hover:brightness-110 sm:w-auto sm:max-w-none"
            >
              Få gratis utkast til nettside
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
