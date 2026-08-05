import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "Endelig en nettside som ser ut som bedriften vår fortjener. Vi får flere henvendelser allerede første uken.",
    name: "Ole Hansen",
    role: "Rørlegger, Oslo",
  },
  {
    quote:
      "Enkel prosess, tydelig pris og ferdig uten stress. Kundeservice på telefonen har blitt merkbart bedre.",
    name: "Maria Berg",
    role: "Elektriker, Bergen",
  },
  {
    quote:
      "Før ble vi ofte sammenlignet med billigere alternativer. Nå fremstår vi som det profesjonelle valget.",
    name: "Lars Nilsen",
    role: "Snekker, Trondheim",
  },
];

export function Testimonials() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent">Kunder</p>
            <h2 className="mt-3 text-[1.75rem] font-semibold tracking-tight text-foreground sm:text-[2.25rem]">
              Det kundene sier
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
              Eksempler på tilbakemeldinger — placeholders mens vi samler
              ekte sitater.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:mt-16 sm:grid-cols-3 sm:gap-8 lg:gap-12">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.name}
              delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}
            >
              <figure>
                <blockquote className="text-[1.0625rem] leading-relaxed text-foreground sm:text-lg">
                  «{item.quote}»
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-sm font-semibold tracking-tight text-foreground">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-sm text-muted">{item.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
