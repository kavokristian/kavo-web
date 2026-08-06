import type { Metadata } from "next";
import Image from "next/image";
import { PageCTA } from "../components/FinalCTA";
import { Location } from "../components/Location";
import { Reveal } from "../components/Reveal";
import { WhyKavo } from "../components/WhyKavo";

export const metadata: Metadata = {
  title: "Bak Kavo",
  description:
    "Vi startet Kavo for å gjøre profesjonelle nettsider tilgjengelige for små bedrifter – enkelt, transparent og til en rettferdig pris.",
};

export default function HvemErKavoPage() {
  return (
    <main>
      <section className="bg-atmosphere pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-[2.25rem] font-semibold tracking-tight text-foreground sm:text-[2.75rem] md:text-[3.25rem]">
                Bak Kavo
              </h1>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
                Kort versjon: Vi hjelper små bedrifter med nettside og synlighet
                på Google – uten dyre tilbud og uten kronglete priser.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-12 sm:mt-14" delay={1}>
            <div className="relative mx-auto aspect-[4/3] max-w-3xl overflow-hidden rounded-[1.5rem] border border-border/70 shadow-[0_20px_50px_-28px_rgba(17,17,17,0.28)] sm:rounded-[1.75rem]">
              <Image
                src="/hvem-er-kavo.jpg"
                alt="Kavo – personlig hjelp til små bedrifter"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-8 sm:pb-12">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <Reveal>
            <div className="space-y-6 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
              <p>
                Vi startet Kavo fordi vi så det samme om og om igjen: mange små
                bedrifter manglet en skikkelig nettside. Eller så hadde de fått
                tilbud som kostet langt mer enn det de egentlig trengte.
              </p>
              <p>
                Vår filosofi er ganske enkel. En profesjonell nettside skal være
                tilgjengelig for alle – ikke bare de største bedriftene med store
                budsjetter.
              </p>
              <p>
                Derfor tilbyr vi en fast og forutsigbar pris som inkluderer det
                du trenger. Vi bygger nettsiden, sørger for at den er på nett,
                gjør endringer når du trenger det, og hjelper deg med å bli
                synlig på Google.
              </p>
              <p className="font-medium text-foreground">
                Enkelt, transparent og rettferdig. Det er Kavo.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <WhyKavo />

      <Location />

      <PageCTA
        title="Klar for å se hvordan det kan se ut?"
        description="Få gratis utkast til nettside - uten forpliktelser."
      />
    </main>
  );
}
