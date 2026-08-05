export function Hero() {
  return (
    <section className="bg-atmosphere relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-28 sm:px-8 sm:pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-up text-[1.75rem] font-semibold tracking-tight text-foreground sm:text-[2rem]">
            Kavo
          </p>

          <h1 className="animate-fade-up delay-100 mt-5 text-[2.25rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-[3.25rem] sm:leading-[1.08] md:text-[3.75rem]">
            Flere kunder. Mindre administrasjon. En nettside som jobber for
            deg.
          </h1>

          <p className="animate-fade-up delay-200 mx-auto mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
            Vi hjelper håndverkere og småbedrifter i Norge med moderne nettsider
            som bygger tillit — og får telefonen til å ringe.
          </p>

          <div className="animate-fade-up delay-300 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#kontakt"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-7 text-[0.9375rem] font-medium text-white shadow-[0_1px_2px_rgba(37,99,235,0.2),0_8px_24px_rgba(37,99,235,0.25)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_1px_2px_rgba(37,99,235,0.25),0_12px_28px_rgba(37,99,235,0.3)] active:scale-[0.98] sm:w-auto"
            >
              Book gratis samtale
            </a>
            <a
              href="#slik-fungerer-det"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-border bg-white/70 px-7 text-[0.9375rem] font-medium text-foreground backdrop-blur-sm transition-colors duration-200 hover:border-foreground/20 hover:bg-white sm:w-auto"
            >
              Se hvordan det fungerer
            </a>
          </div>
        </div>

        {/* Dominant product visual — full-bleed plane */}
        <div className="animate-scale-in delay-400 relative mt-14 sm:mt-20">
          <div className="pointer-events-none absolute inset-x-0 -top-8 h-40 bg-gradient-to-b from-transparent to-white/0" />
          <div className="animate-float mx-auto max-w-5xl">
            <ProductPreview />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent sm:h-32" />
        </div>
      </div>
    </section>
  );
}

function ProductPreview() {
  return (
    <div
      className="relative overflow-hidden rounded-t-[1.25rem] border border-b-0 border-border/80 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_20px_50px_-12px_rgba(17,17,17,0.18)] sm:rounded-t-[1.75rem]"
      aria-hidden="true"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border/70 bg-surface px-4 py-3 sm:px-5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1.5 text-center text-[0.6875rem] text-muted-light sm:text-xs">
          nordiskvvs.no
        </div>
      </div>

      {/* Site mock */}
      <div className="relative bg-gradient-to-br from-[#f7f8fa] via-white to-[#eef2ff] px-5 pb-10 pt-8 sm:px-10 sm:pb-14 sm:pt-12">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Nordisk VVS
          </span>
          <div className="hidden gap-6 text-xs text-muted sm:flex">
            <span>Tjenester</span>
            <span>Om oss</span>
            <span>Kontakt</span>
          </div>
          <span className="rounded-full bg-foreground px-3 py-1.5 text-[0.6875rem] font-medium text-white sm:text-xs">
            Ring oss
          </span>
        </div>

        <div className="mt-10 max-w-lg sm:mt-14">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-accent sm:text-xs">
            Rørlegger i Oslo
          </p>
          <p className="mt-3 text-[1.5rem] font-semibold leading-tight tracking-tight text-foreground sm:text-[2.25rem]">
            Pålitelig VVS når du trenger det
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
            Rask respons. Ryddig arbeid. Enkel booking direkte fra nettsiden.
          </p>
          <div className="mt-6 flex gap-3">
            <span className="rounded-full bg-accent px-4 py-2 text-xs font-medium text-white">
              Få tilbud
            </span>
            <span className="rounded-full border border-border bg-white px-4 py-2 text-xs font-medium text-foreground">
              Se tjenester
            </span>
          </div>
        </div>

        {/* Abstract metric strip — part of mock product UI */}
        <div className="mt-10 grid grid-cols-3 gap-3 sm:mt-14 sm:gap-4">
          {[
            { label: "Respons", value: "< 2 t" },
            { label: "Område", value: "Oslo & Omegn" },
            { label: "Erfaring", value: "15+ år" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border/60 bg-white/80 px-3 py-3 sm:px-4 sm:py-4"
            >
              <p className="text-[0.625rem] text-muted-light sm:text-xs">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-semibold tracking-tight text-foreground sm:text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
