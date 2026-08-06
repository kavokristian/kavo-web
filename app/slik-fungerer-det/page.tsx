import type { Metadata } from "next";
import Image from "next/image";
import { PageCTA } from "../components/FinalCTA";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Slik fungerer det",
  description:
    "Fra utkast til lansering: se hvordan Kavo får bedriften din synlig på nett.",
};

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

export default function HowItWorksPage() {
  return (
    <main>
      <section className="bg-atmosphere pt-28 sm:pt-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-[2.25rem] font-semibold tracking-tight text-foreground sm:text-[2.75rem] md:text-[3.25rem]">
                Slik fungerer det
              </h1>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
                Enkelt fra start til slutt. Du forteller oss om bedriften - vi
                tar oss av resten.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-12 sm:mt-16">
            <div className="relative mx-auto aspect-[16/10] max-w-5xl overflow-hidden rounded-[1.5rem] border border-border/80 shadow-[0_20px_50px_-20px_rgba(17,17,17,0.25)] sm:rounded-[1.75rem]">
              <Image
                src="/journey-onboarding.jpg"
                alt="Visuell kundereise fra avtale til lansert nettside"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-[1.75rem] font-semibold tracking-tight text-foreground sm:text-[2.25rem]">
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
                  delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}
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
        </div>
      </section>

      <PageCTA
        title="Klar for å komme i gang?"
        description="Få gratis utkast til nettside - uten forpliktelser."
      />
    </main>
  );
}
