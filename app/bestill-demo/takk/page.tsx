import type { Metadata } from "next";
import Link from "next/link";
import { IconCheck } from "../../components/Icons";
import { Reveal } from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Takk",
  description: "Vi setter nå sammen et kostnadsfritt utkast av nettsiden deres.",
};

const nextSteps = [
  "Vi analyserer bedriften deres",
  "Vi designer et første utkast",
  "Dere mottar utkastet innen 2-3 virkedager",
];

export default function DemoThanksPage() {
  return (
    <main>
      <section className="bg-atmosphere flex flex-1 items-center pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <Reveal>
            <h1 className="text-[2.5rem] font-semibold tracking-tight text-foreground sm:text-[3.25rem]">
              Takk!
            </h1>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
              Vi setter nå sammen et kostnadsfritt utkast av nettsiden deres.
            </p>
          </Reveal>

          <Reveal className="mt-12 text-left sm:mt-14" delay={1}>
            <div className="rounded-[1.5rem] border border-border/70 bg-white p-6 sm:p-8">
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                Hva skjer videre?
              </h2>
              <ul className="mt-6 space-y-4">
                {nextSteps.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <IconCheck className="h-4 w-4" />
                    </span>
                    <span className="text-[0.975rem] leading-relaxed text-foreground">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="mt-10" delay={2}>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-white px-7 text-[0.9375rem] font-medium text-foreground transition-colors hover:border-foreground/20"
            >
              Til forsiden
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
