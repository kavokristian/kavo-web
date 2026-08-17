import Link from "next/link";
import { Reveal } from "./Reveal";
import {
  FeatureChip,
  IconHeadset,
  IconLayout,
  IconMapPin,
  IconPhone,
  IconRefresh,
  IconSearch,
  IconShield,
} from "./Icons";

const offerings = [
  {
    number: "01",
    title: "Profesjonell nettside",
    description:
      "En moderne nettside som gir et godt førsteinntrykk og gjør det enkelt for kundene å ta kontakt.",
    features: [
      { label: "Moderne design", icon: <IconLayout /> },
      { label: "Fungerer på mobil", icon: <IconPhone /> },
      { label: "Trygg og rask", icon: <IconShield /> },
    ],
  },
  {
    number: "02",
    title: "Synlig på Google",
    description:
      "Vi setter opp det tekniske grunnlaget slik at Google forstår nettsiden din, og at bedriften kan bli funnet i søk og på Maps.",
    features: [
      { label: "Google-søk", icon: <IconSearch /> },
      { label: "Google Maps", icon: <IconMapPin /> },
    ],
  },
  {
    number: "03",
    title: "Drift uten stress",
    description:
      "Vi passer på nettsiden etter lansering - inkludert enkle endringer som tekst, bilder og nye sider.",
    features: [
      { label: "Drift og oppdateringer", icon: <IconRefresh /> },
      { label: "Support", icon: <IconHeadset /> },
    ],
  },
];

export function Offerings() {
  return (
    <section id="tjenester" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[2.25rem] font-semibold tracking-tight text-foreground sm:text-[2.75rem] md:text-[3rem]">
              Hva får du?
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 space-y-6 sm:mt-16 sm:space-y-8">
          {offerings.map((item, i) => (
            <Reveal
              key={item.number}
              delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}
            >
              <article className="group relative overflow-hidden rounded-[1.5rem] border border-border/70 bg-gradient-to-br from-white via-white to-accent-soft/40 p-6 transition-shadow duration-300 hover:shadow-[0_20px_50px_-28px_rgba(17,17,17,0.35)] sm:rounded-[1.75rem] sm:p-8 lg:p-10">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-muted-light tabular-nums">
                        {item.number}
                      </span>
                      <span className="h-px w-8 bg-accent/70" />
                    </div>
                    <h3 className="mt-4 text-[1.375rem] font-semibold tracking-tight text-foreground sm:text-[1.625rem]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[0.975rem] leading-relaxed text-muted sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5 lg:max-w-md lg:justify-end">
                    {item.features.map((feature) => (
                      <FeatureChip
                        key={feature.label}
                        icon={feature.icon}
                        label={feature.label}
                      />
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center sm:mt-12">
          <Link
            href="/dette-er-inkludert"
            className="text-[0.975rem] font-medium text-accent underline-offset-4 transition-colors hover:underline"
          >
            Se alt som er inkludert
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
