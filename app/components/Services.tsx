import { Reveal } from "./Reveal";

const services = [
  {
    title: "Ny nettside",
    description:
      "Fra idé til lansering. En moderne nettside tilpasset bransjen din og målene dine.",
  },
  {
    title: "Oppgradering",
    description:
      "Har du allerede en nettside? Vi gjør den raskere, tydeligere og mer profesjonell.",
  },
  {
    title: "Synlighet",
    description:
      "Grunnleggende SEO slik at flere lokale kunder faktisk finner deg på Google.",
  },
  {
    title: "Drift og support",
    description:
      "Vi holder nettsiden oppdatert, trygg og i gang — så du kan fokusere på jobben.",
  },
];

export function Services() {
  return (
    <section
      id="tjenester"
      className="scroll-mt-24 bg-atmosphere-subtle py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent">Tjenester</p>
            <h2 className="mt-3 text-[1.75rem] font-semibold tracking-tight text-foreground sm:text-[2.25rem]">
              Det vi leverer
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
              Enkel, tydelig leveranse — uten byrå-jargon og unødvendige
              tillegg.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-y border-border sm:mt-16">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}>
              <div className="group grid gap-3 py-8 transition-colors duration-300 sm:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] sm:items-baseline sm:gap-12 sm:py-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-muted-light tabular-nums">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[1.375rem]">
                    {service.title}
                  </h3>
                </div>
                <p className="pl-9 text-[0.9375rem] leading-relaxed text-muted sm:pl-0 sm:text-base">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
