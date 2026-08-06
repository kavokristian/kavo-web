"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    question: "Hva koster det?",
    answer:
      "Det koster 5 000 kr engang, pluss 500 kr i måneden. Alt er inkludert - nettside, hosting, drift, Google-synlighet og support. Avtalen har 12 måneders binding.",
  },
  {
    question: "Hva skjer hvis jeg avslutter?",
    answer:
      "Du beholder domenet ditt. Nettsiden og driften hos Kavo avsluttes, men domenet er ditt.",
  },
  {
    question: "Hvor lang tid tar det?",
    answer:
      "Du får et gratis utkast innen 2-3 virkedager. Når du er fornøyd, publiserer vi - ofte i løpet av få dager etter godkjenning.",
  },
  {
    question: "Må jeg levere tekst og bilder selv?",
    answer:
      "Nei, ikke for utkastet. Fortell oss litt om bedriften, så lager vi et første utkast. Har du logo eller bilder, kan du sende dem senere.",
  },
  {
    question: "Passer dette for min type bedrift?",
    answer:
      "Vi jobber spesielt godt med håndverkere og lokale småbedrifter - rørleggere, elektrikere, snekkere, malere og lignende. Er du usikker, ta kontakt så finner vi ut av det.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="text-[2.25rem] font-semibold tracking-tight text-foreground sm:text-[2.75rem] md:text-[3rem]">
              Vanlige spørsmål
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
              Kort og ærlig - det folk vanligvis lurer på før de tar kontakt.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 sm:mt-14">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal
                key={faq.question}
                delay={i < 4 ? ((i + 1) as 1 | 2 | 3 | 4) : undefined}
              >
                <div className="border-b border-border">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors sm:py-6"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="text-[1.0125rem] font-medium tracking-tight text-foreground sm:text-[1.0625rem]">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-white text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M6 1v10M1 6h10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pr-10 text-[0.9375rem] leading-relaxed text-muted sm:pb-6 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
