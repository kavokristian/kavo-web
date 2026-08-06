import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section id="sted" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[2.25rem] font-semibold tracking-tight text-foreground sm:text-[2.75rem] md:text-[3rem]">
              Hovedkontor i Oslo
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
              Vi hjelper små bedrifter over hele Norge med profesjonelle
              nettsider og økt synlighet på Google. Uansett hvor du holder til,
              er du velkommen hos Kavo
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12 sm:mt-14" delay={1}>
          <div className="overflow-hidden rounded-[1.5rem] border border-border/70 shadow-[0_20px_50px_-28px_rgba(17,17,17,0.22)] sm:rounded-[1.75rem]">
            <iframe
              title="Kavo - Oslo"
              src="https://www.google.com/maps?q=Oslo,+Norway&hl=no&z=11&output=embed"
              className="h-[280px] w-full border-0 sm:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
