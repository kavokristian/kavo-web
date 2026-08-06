import Link from "next/link";
import { Reveal } from "./Reveal";
import { IconCheck } from "./Icons";

const included = [
  "Profesjonell nettside",
  "Hosting og domene",
  "Drift og vedlikehold",
  "Enkle endringer underveis (tekst, bilder, nye sider)",
  "Grunnleggende synlighet på Google",
  "Google Business Profile",
  "Mobiltilpasset design",
  "Support",
];

export function Pricing() {
  return (
    <section id="pris" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[2.25rem] font-semibold tracking-tight text-foreground sm:text-[2.75rem] md:text-[3rem]">
              Én pakke. Alt inkludert.
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
              Vi mener små bedrifter ikke skal betale titusenvis av kroner for en
              profesjonell nettside. Derfor har vi gjort prismodellen enkel,
              transparent og rettferdig.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12 sm:mt-16" delay={1}>
          <div className="mx-auto max-w-xl rounded-[1.75rem] border border-border/70 bg-white p-7 shadow-[0_20px_50px_-28px_rgba(17,17,17,0.28)] sm:rounded-[2rem] sm:p-10">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
              <div className="text-center">
                <p className="text-[2.75rem] font-semibold tracking-tight text-foreground sm:text-[3.25rem]">
                  7 500 kr
                </p>
                <p className="mt-1 text-sm text-muted">Engangskostnad</p>
              </div>

              <span
                className="text-2xl font-medium text-muted-light"
                aria-hidden="true"
              >
                +
              </span>

              <div className="text-center">
                <p className="text-[2.75rem] font-semibold tracking-tight text-foreground sm:text-[3.25rem]">
                  500 kr
                  <span className="text-[1.25rem] font-semibold text-muted sm:text-[1.5rem]">
                    /mnd
                  </span>
                </p>
                <p className="mt-1 text-sm text-muted">Fast månedspris</p>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-muted">
              12 måneders binding. Ved oppsigelse får du nettsiden til odel og
              eie - inkludert domenet.
            </p>

            <div className="my-8 h-px bg-border" />

            <ul className="space-y-3.5">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <span className="text-[0.975rem] font-medium tracking-tight text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-center text-[0.975rem] leading-relaxed text-muted">
              Ingen skjulte kostnader. Ingen kompliserte valg. Bare én rettferdig
              pris.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href="/bestill-demo"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-7 text-[0.9375rem] font-medium text-white shadow-[0_1px_2px_rgba(37,99,235,0.2),0_8px_24px_rgba(37,99,235,0.25)] transition-all duration-200 hover:brightness-110 sm:w-auto"
              >
                Få gratis utkast
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
