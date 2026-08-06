import type { Metadata } from "next";
import { DemoForm } from "../components/DemoForm";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Få et gratis utkast",
  description:
    "Fortell oss litt om bedriften din, så lager vi et kostnadsfritt utkast av nettsiden deres.",
};

export default function BestillDemoPage() {
  return (
    <main>
      <section className="bg-atmosphere pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center">
              <h1 className="text-[2.25rem] font-semibold tracking-tight text-foreground sm:text-[2.75rem]">
                Få et gratis utkast
              </h1>
              <p className="mx-auto mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
                Svar på noen få spørsmål om bedriften din. Vi lager et
                kostnadsfritt utkast innen 2-3 virkedager.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 sm:mt-14">
            <DemoForm />
          </div>
        </div>
      </section>
    </main>
  );
}
