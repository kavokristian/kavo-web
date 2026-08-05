import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="kontakt" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-accent px-6 py-16 text-center sm:rounded-[2rem] sm:px-12 sm:py-20">
            {/* Soft atmosphere inside CTA */}
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 70% 80% at 20% 100%, #1d4ed8 0%, transparent 55%), radial-gradient(ellipse 60% 70% at 90% 0%, #3b82f6 0%, transparent 50%)",
              }}
            />

            <div className="relative mx-auto max-w-xl">
              <h2 className="text-[1.75rem] font-semibold tracking-tight text-white sm:text-[2.5rem] sm:leading-tight">
                Klar for flere kunder?
              </h2>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-white/80 sm:text-lg">
                Book en uforpliktende samtale. Vi forteller deg ærlig om vi kan
                hjelpe — og hvordan.
              </p>
              <a
                href="mailto:hei@kavo.no"
                className="mt-9 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-[0.9375rem] font-medium text-foreground transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Book gratis samtale
              </a>
              <p className="mt-5 text-sm text-white/55">
                Eller skriv til{" "}
                <a
                  href="mailto:hei@kavo.no"
                  className="text-white/85 underline-offset-2 hover:underline"
                >
                  hei@kavo.no
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
