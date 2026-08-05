import { Reveal } from "./Reveal";

const benefits = [
  {
    title: "Flere henvendelser",
    description:
      "Nettsiden din jobber døgnet rundt — klar når kundene søker etter noen som deg.",
  },
  {
    title: "Ser profesjonell ut",
    description:
      "Førsteinntrykket avgjør. Vi sørger for at du fremstår som det trygge valget.",
  },
  {
    title: "Fungerer på mobil",
    description:
      "De fleste søker fra telefonen. Din nettside er rask, tydelig og enkel å bruke.",
  },
  {
    title: "Uten teknisk stress",
    description:
      "Du slipper å tenke på hosting, design og oppsett. Vi tar oss av det.",
  },
];

export function Benefits() {
  return (
    <section id="fordeler" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-[2.25rem] font-semibold tracking-tight text-foreground sm:text-[2.75rem] md:text-[3rem]">
              Fordeler
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
              En god nettside er ikke pynt. Den er et verktøy som gjør det
              enklere for kundene å velge deg.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}
            >
              <div className="relative">
                <div className="mb-4 h-px w-8 bg-accent" />
                <h3 className="text-[1.0625rem] font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
