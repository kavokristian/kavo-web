import type { Metadata } from "next";
import { CustomerOnboardingForm } from "../components/CustomerOnboardingForm";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Informasjon til din nye nettside",
  description:
    "Fyll inn informasjonen Kavo trenger for å lage nettsiden og klargjøre bedriften for synlighet på Google.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function CustomerOnboardingPage() {
  return (
    <main>
      <section className="bg-atmosphere pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center">
              <p className="text-sm font-medium tracking-tight text-accent">
                Kavo
              </p>
              <h1 className="mt-3 text-[2rem] font-semibold tracking-tight text-foreground sm:text-[2.5rem]">
                Informasjon til din nye nettside
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
                Fyll inn informasjonen under, så har vi det vi trenger for å
                lage nettsiden og klargjøre bedriften for synlighet på Google.
              </p>
              <p className="mx-auto mt-3 max-w-xl text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
                Du trenger ikke skrive ferdige tekster til nettsiden –{" "}
                <span className="font-medium text-foreground">det ordner vi.</span>
              </p>
            </div>
          </Reveal>

          <div className="mt-12 sm:mt-14">
            <CustomerOnboardingForm />
          </div>
        </div>
      </section>
    </main>
  );
}
