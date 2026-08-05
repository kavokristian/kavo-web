import { Reveal } from "./Reveal";

const reasons = [
  {
    title: "Laget for håndverkere",
    description:
      "Vi forstår bransjen din. Budskap, struktur og design er tilpasset lokale bedrifter — ikke tech-startups.",
  },
  {
    title: "Fast pris",
    description:
      "Du vet hva det koster før vi starter. Ingen skjulte timer, ingen overraskelser på slutten.",
  },
  {
    title: "Rask leveranse",
    description:
      "Du trenger ikke vente i månedsvis. Vi jobber effektivt uten å kompromisse på kvalitet.",
  },
  {
    title: "Teknologi som fungerer",
    description:
      "Moderne, raske nettsider bygget for ytelse, mobil og Google — ikke gammel WordPress-rot.",
  },
];

export function WhyKavo() {
  return (
    <section className="scroll-mt-24 bg-foreground py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-blue-300">Hvorfor Kavo</p>
            <h2 className="mt-3 text-[1.75rem] font-semibold tracking-tight sm:text-[2.25rem]">
              Et teknologiselskap — ikke et vanlig byrå
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-white/60 sm:text-lg">
              Vi bygger produkter som skaper tillit. Enkelt, tydelig og laget
              for bedrifter som lever av omdømme.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:mt-16 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
          {reasons.map((reason, i) => (
            <Reveal
              key={reason.title}
              delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}
            >
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {reason.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/55 sm:text-base">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
