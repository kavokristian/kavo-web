import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: {
    absolute: "Hva er inkludert i nettsiden? | Kavo",
  },
  description:
    "Alt du trenger for å bli sett og tatt seriøst på nett – nettside, Google, Maps, statistikk, drift og support.",
  alternates: {
    canonical: "https://www.kavo.no/dette-er-inkludert",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    number: "01",
    title: "En profesjonell nettside",
    paragraphs: [
      "Vi lager en moderne nettside som passer bedriften din og fungerer like bra på mobil som på PC.",
      "Det skal være enkelt for kundene å forstå hvem dere er, hva dere tilbyr og hvordan de kan kontakte dere.",
    ],
    listTitle: "Dette er inkludert:",
    bullets: [
      "Moderne webdesign",
      "Responsivt design",
      "Mobiltilpasning",
      "Kontaktskjema",
      "Klikk-for-å-ringe",
      "HTTPS / SSL",
      "Hastighetsoptimalisering",
      "Brukervennlig navigasjon",
    ],
  },
  {
    number: "02",
    title: "Gjør nettsiden klar for Google",
    paragraphs: [
      "Vi setter opp nettsiden slik at Google kan finne den og forstå hva bedriften din tilbyr og hvor dere tilbyr tjenestene deres.",
      "Dette gir nettsiden et godt teknisk grunnlag for å kunne bli synlig når potensielle kunder søker på Google.",
    ],
    listTitle: "Dette er inkludert:",
    bullets: [
      "Teknisk SEO",
      "Lokal SEO",
      "Google Search Console",
      "Sitemap.xml",
      "Robots.txt",
      "SEO-titler",
      "Meta descriptions",
      "Strukturert data / Schema.org",
      "Innsending til Google for indeksering",
      "Grunnleggende søkeordsoptimalisering",
    ],
  },
  {
    number: "03",
    title: "Synlighet på Google Maps",
    paragraphs: [
      "Vi hjelper deg med bedriftens profil på Google slik at potensielle kunder kan finne riktig informasjon om bedriften når de søker på Google og Google Maps.",
      "Har du ikke en profil fra før, hjelper vi deg med å komme i gang. Har du allerede en, går vi gjennom og optimaliserer den.",
    ],
    listTitle: "Dette er inkludert:",
    bullets: [
      "Google Business Profile",
      "Google Maps",
      "Bedriftskategori",
      "Tjenesteområder",
      "Kontaktinformasjon",
      "Åpningstider",
      "Nettsidekobling",
      "Grunnleggende profiloptimalisering",
    ],
  },
  {
    number: "04",
    title: "Statistikk og innsikt",
    paragraphs: [
      "Vi kobler nettsiden til Googles analyseverktøy slik at det er mulig å se hvordan nettsiden faktisk blir brukt.",
      "Da kan vi blant annet se hvor mange som besøker nettsiden, hvordan de finner den og hvilke sider de besøker.",
    ],
    listTitle: "Dette er inkludert:",
    bullets: [
      "Google Analytics 4 (GA4)",
      "Besøksstatistikk",
      "Trafikkilder",
      "Sidevisninger",
      "Enhetsdata",
      "Grunnleggende konverteringsmåling",
    ],
  },
  {
    number: "05",
    title: "Drift, hastighet og sikkerhet",
    paragraphs: [
      "Vi sørger for at nettsiden er tilgjengelig på nett og tar oss av det tekniske i bakgrunnen.",
      "Du trenger ikke kjøpe hosting eller sette deg inn i servere, sertifikater og teknisk vedlikehold.",
    ],
    listTitle: "Dette er inkludert:",
    bullets: [
      "Hosting",
      "SSL-sertifikat",
      "HTTPS",
      "Teknisk drift",
      "Vedlikehold",
      "Overvåking",
      "Hastighetsoptimalisering",
      "DNS-oppsett",
      "Domeneoppsett",
    ],
  },
  {
    number: "06",
    title: "Endringer og support",
    paragraphs: [
      "Bedriften din kommer til å endre seg, og da skal det være enkelt å holde nettsiden oppdatert.",
      "Send oss det du ønsker å endre, så ordner vi det.",
    ],
    listTitle: "Mindre endringer er inkludert, for eksempel:",
    bullets: [
      "Tekstendringer",
      "Bytte av bilder",
      "Kontaktinformasjon",
      "Åpningstider",
      "Oppdatering av eksisterende tjenester",
      "Mindre innholdsjusteringer",
      "Teknisk support",
    ],
    after: "Større endringer, nye funksjoner eller større utvidelser avtales separat.",
  },
];

export default function IncludedPage() {
  return (
    <main>
      <section className="bg-atmosphere pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h1 className="text-[2.25rem] font-semibold tracking-tight text-foreground sm:text-[2.75rem] md:text-[3.25rem]">
              Alt du trenger for å bli sett og tatt seriøst på nett
            </h1>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
              Vi lager en profesjonell nettside, hjelper bedriften din med å bli
              funnet på Google og tar oss av alt det tekniske – slik at du kan
              fokusere på jobben din.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-8 sm:pb-12">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-14 sm:space-y-16">
            {sections.map((section, i) => (
              <Reveal
                key={section.number}
                delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}
              >
                <article>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-light tabular-nums">
                      {section.number}
                    </span>
                    <span className="h-px w-8 bg-accent/70" />
                  </div>
                  <h2 className="mt-4 text-[1.5rem] font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 text-[1.0625rem] leading-relaxed text-muted sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                  <p className="mt-6 text-sm font-medium tracking-tight text-foreground">
                    {section.listTitle}
                  </p>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {section.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[0.975rem] leading-relaxed text-foreground"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {section.after ? (
                    <p className="mt-5 text-[0.975rem] leading-relaxed text-muted">
                      {section.after}
                    </p>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-atmosphere-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="text-[1.75rem] font-semibold tracking-tight text-foreground sm:text-[2.25rem]">
              Én samarbeidspartner. Alt samlet.
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
              Med Kavo trenger du ikke vite hva SEO, hosting, DNS, Schema eller
              Search Console betyr.
            </p>
            <p className="mt-4 text-[1.0625rem] font-medium leading-relaxed text-foreground sm:text-lg">
              Vi bygger nettsiden, hjelper deg med synligheten og tar oss av det
              tekniske.
            </p>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
              Du får én samarbeidspartner å forholde deg til – og en løsning som
              sørger for at bedriften din ser profesjonell ut på nett.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/bestill-demo"
                className="inline-flex h-12 w-full max-w-md items-center justify-center rounded-full bg-accent px-7 text-center text-[0.9375rem] font-medium leading-snug text-white shadow-[0_1px_2px_rgba(37,99,235,0.2),0_8px_24px_rgba(37,99,235,0.25)] transition-all duration-200 hover:brightness-110 sm:w-auto sm:max-w-none"
              >
                Få gratis utkast til nettside
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
