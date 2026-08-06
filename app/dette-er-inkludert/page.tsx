import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageCTA } from "../components/FinalCTA";
import { IconCheck } from "../components/Icons";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Dette er inkludert",
  description:
    "Se hva som følger med hos Kavo - nettside, drift, Google-synlighet og support til én fast pris.",
};

const groups = [
  {
    title: "Nettside",
    items: [
      "Profesjonell nettside",
      "Mobiltilpasset design",
      "Kontaktskjema",
      "Rask og trygg løsning",
    ],
  },
  {
    title: "Synlighet",
    items: [
      "Teknisk oppsett for Google-søk",
      "Google Business Profile",
      "Lokal synlighet i Maps",
    ],
  },
  {
    title: "Drift",
    items: [
      "Hosting og domene",
      "Enkle endringer (tekst, bilder, nye sider)",
      "Oppdateringer og sikkerhet",
      "Support",
    ],
  },
  {
    title: "Avtale",
    items: [
      "12 måneders binding",
      "Ved oppsigelse får du nettsiden til odel og eie",
      "Ingen skjulte kostnader",
    ],
  },
];

export default function IncludedPage() {
  return (
    <main>
      <section className="bg-atmosphere pt-28 sm:pt-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-[2.25rem] font-semibold tracking-tight text-foreground sm:text-[2.75rem] md:text-[3.25rem]">
                Dette er inkludert
              </h1>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
                Én avtale. Vi tar oss av det tekniske - du får en synlig og
                profesjonell tilstedeværelse på nett.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-12 sm:mt-16">
            <div className="relative mx-auto aspect-[16/10] max-w-5xl overflow-hidden rounded-[1.5rem] border border-border/80 shadow-[0_20px_50px_-20px_rgba(17,17,17,0.25)] sm:rounded-[1.75rem]">
              <Image
                src="/inkludert-enkelhet.jpg"
                alt="Kompleksitet gjort enkelt - Kavo tar seg av det tekniske"
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
          <div className="grid gap-10 sm:grid-cols-2 lg:gap-12">
            {groups.map((group, i) => (
              <Reveal
                key={group.title}
                delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}
              >
                <div>
                  <h2 className="text-lg font-semibold tracking-tight text-foreground">
                    {group.title}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                          <IconCheck className="h-4 w-4" />
                        </span>
                        <span className="text-[0.975rem] text-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <Link
              href="/#pris"
              className="text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              Se pris og pakke
            </Link>
          </Reveal>
        </div>
      </section>

      <PageCTA
        title="Vil du se hvordan det kan bli?"
        description="Få gratis utkast - uten forpliktelser."
      />
    </main>
  );
}
