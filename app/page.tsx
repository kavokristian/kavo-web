import type { Metadata } from "next";
import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Offerings } from "./components/Offerings";
import { Pricing } from "./components/Pricing";

export const metadata: Metadata = {
  title: {
    absolute: "Nettside for bedrifter | Profesjonell nettside fra Kavo",
  },
  description:
    "Kavo lager profesjonelle nettsider for små bedrifter og hjelper deg å bli synlig på Google. Nettside, Google-oppsett, drift og support samlet på ett sted.",
  alternates: {
    canonical: "https://www.kavo.no/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.kavo.no/#organization",
      name: "Kavo",
      legalName: "Kavo Nystad",
      url: "https://www.kavo.no/",
      email: "kontakt@kavo.no",
      taxID: "920 801 293",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Oslo",
        addressCountry: "NO",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.kavo.no/#website",
      name: "Kavo",
      url: "https://www.kavo.no/",
      publisher: {
        "@id": "https://www.kavo.no/#organization",
      },
      inLanguage: "nb-NO",
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Offerings />
      <Pricing />
      <HowItWorks />
      <FAQ />
    </main>
  );
}
