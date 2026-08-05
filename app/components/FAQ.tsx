"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    question: "Hva koster en nettside hos Kavo?",
    answer:
      "Prisen avhenger av omfanget, men du får alltid et klart tilbud før vi starter. Ingen skjulte kostnader eller timebaserte overraskelser.",
  },
  {
    question: "Hvor lang tid tar det?",
    answer:
      "De fleste prosjekter er klare i løpet av noen uker. Vi avtaler en tydelig tidslinje i den første samtalen, så du vet hva du kan forvente.",
  },
  {
    question: "Må jeg levere tekst og bilder selv?",
    answer:
      "Vi hjelper deg med struktur og budskap. Har du bilder og info fra før, bruker vi det. Mangler du noe, finner vi en praktisk løsning sammen.",
  },
  {
    question: "Fungerer nettsiden på mobil?",
    answer:
      "Ja. Alle nettsider vi leverer er mobilvennlige, raske og enkle å bruke — fordi det er der de fleste kundene dine søker.",
  },
  {
    question: "Hva skjer etter lansering?",
    answer:
      "Du får en nettside som er klar til bruk. Vi kan også hjelpe med drift, små oppdateringer og videre forbedringer etter behov.",
  },
  {
    question: "Passer dette for min type bedrift?",
    answer:
      "Vi jobber spesielt godt med håndverkere og lokale småbedrifter — rørleggere, elektrikere, snekkere, malere og lignende. Er du usikker, book en samtale så finner vi ut av det.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-medium text-accent">FAQ</p>
            <h2 className="mt-3 text-[1.75rem] font-semibold tracking-tight text-foreground sm:text-[2.25rem]">
              Vanlige spørsmål
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
              Kort og ærlig — det folk vanligvis lurer på før de tar kontakt.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 sm:mt-14">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i < 4 ? ((i + 1) as 1 | 2 | 3 | 4) : undefined}>
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
