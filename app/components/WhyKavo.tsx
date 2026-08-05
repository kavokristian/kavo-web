import { Reveal } from "./Reveal";

const reasons = [
  {
    number: "01",
    title: "Vi snakker vanlig norsk",
    description:
      "Du trenger ikke kunne noe om nettsider, Google eller SEO. Vi forklarer ting enkelt og tar oss av resten.",
  },
  {
    number: "02",
    title: "Send en melding. Vi fikser det.",
    description:
      "Har du ønske om endring på din digitale tilstedeværelse? Bare si ifra.",
  },
  {
    number: "03",
    title: "Ingen lange prosjekter",
    description:
      "Vi bruker tiden på å få deg synlig, ikke på møter og presentasjoner.",
  },
  {
    number: "04",
    title: "Nettsiden er bare starten",
    description:
      "Vi hjelper deg også etter at alt er publisert.",
  },
];

export function WhyKavo() {
  return (
    <section className="scroll-mt-24 bg-foreground py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-[2.25rem] font-semibold tracking-tight sm:text-[2.75rem] md:text-[3rem]">
              Derfor velger bedrifter Kavo
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:mt-16 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
          {reasons.map((reason, i) => (
            <Reveal
              key={reason.number}
              delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}
            >
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-white/35 tabular-nums">
                    {reason.number}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {reason.title}
                  </h3>
                </div>
                <p className="mt-2 pl-8 text-[0.9375rem] leading-relaxed text-white/55 sm:text-base">
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
