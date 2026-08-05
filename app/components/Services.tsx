import { Reveal } from "./Reveal";

const services = [
  {
    title: "Du blir funnet",
    description:
      "Vi sørger for at bedriften din dukker opp når kunder søker etter tjenestene dine på Google og Google Maps.",
  },
  {
    title: "Du gir et godt førsteinntrykk",
    description:
      "En moderne nettside som gjør det enkelt å stole på bedriften din og ta kontakt.",
  },
  {
    title: "Du slipper å tenke på det",
    description:
      "Vi holder alt oppdatert og fungerer som din digitale samarbeidspartner.",
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
            <h2 className="text-[2.25rem] font-semibold tracking-tight text-foreground sm:text-[2.75rem] md:text-[3rem]">
              Tjenester
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
              Du slipper å forholde deg til nettsider, Google eller tekniske
              løsninger. Vi sørger for at bedriften din er synlig, ser
              profesjonell ut og fungerer som den skal.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-y border-border sm:mt-16">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}
            >
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
