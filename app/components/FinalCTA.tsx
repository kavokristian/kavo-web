import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="kontakt" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-accent px-6 py-16 text-center sm:rounded-[2rem] sm:px-12 sm:py-20">
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
                Har du ikke nettside?
              </h2>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-white/80 sm:text-lg">
                Vi kan ha deg synlig på nett i løpet av få dager.
              </p>
              <div className="mt-9">
                <p className="text-sm text-white/55">Kontakt oss</p>
                <a
                  href="mailto:kontakt@kavo.no"
                  className="mt-2 inline-block text-[1.125rem] font-semibold tracking-tight text-white underline-offset-4 transition-opacity hover:opacity-90 hover:underline sm:text-xl"
                >
                  kontakt@kavo.no
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
