"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";

const industries = [
  "Rørlegger",
  "Elektriker",
  "Snekker",
  "Maler",
  "Frisør",
  "Skjønnhetssalong",
  "Restaurant",
  "Café",
  "Renhold",
  "Annet",
];

type FormValues = {
  companyName: string;
  industry: string;
  location: string;
  offerings: string;
  hasWebsite: "Ja" | "Nei" | "";
  websiteUrl: string;
  phone: string;
  email: string;
  other: string;
};

const emptyValues: FormValues = {
  companyName: "",
  industry: "",
  location: "",
  offerings: "",
  hasWebsite: "",
  websiteUrl: "",
  phone: "",
  email: "",
  other: "",
};

const fieldClass =
  "mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-[0.975rem] text-foreground outline-none transition-colors placeholder:text-muted-light focus:border-accent/50 focus:ring-2 focus:ring-accent/15";

const labelClass = "block text-sm font-medium tracking-tight text-foreground";

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[1.5rem] border border-border/70 bg-white p-6 sm:p-8">
      <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-[1.375rem]">
        {title}
      </h2>
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
}

export function DemoForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (
      !values.companyName.trim() ||
      !values.industry ||
      !values.location.trim() ||
      !values.hasWebsite ||
      !values.offerings.trim() ||
      !values.phone.trim() ||
      !values.email.trim()
    ) {
      setError("Vennligst fyll ut alle påkrevde felt.");
      return;
    }

    if (values.hasWebsite === "Ja" && !values.websiteUrl.trim()) {
      setError("Oppgi adressen til nettsiden deres.");
      return;
    }

    setPending(true);

    const payload = {
      _subject: `Ny forespørsel om gratis utkast: ${values.companyName.trim()}`,
      _template: "table",
      _captcha: "false",
      Bedriftsnavn: values.companyName.trim(),
      Bransje: values.industry,
      Sted: values.location.trim(),
      "Har nettside": values.hasWebsite,
      ...(values.hasWebsite === "Ja"
        ? { Nettsideadresse: values.websiteUrl.trim() }
        : {}),
      "Hva tilbyr dere": values.offerings.trim(),
      Telefon: values.phone.trim(),
      "E-post": values.email.trim(),
      Annet: values.other.trim() || "Ikke oppgitt",
      message: [
        "Ny forespørsel: Få gratis utkast til nettside",
        "",
        `Bedriftsnavn: ${values.companyName.trim()}`,
        `Bransje: ${values.industry}`,
        `Sted: ${values.location.trim()}`,
        `Har nettside: ${values.hasWebsite}`,
        values.hasWebsite === "Ja"
          ? `Nettsideadresse: ${values.websiteUrl.trim()}`
          : null,
        `Hva tilbyr dere: ${values.offerings.trim()}`,
        `Telefon: ${values.phone.trim()}`,
        `E-post: ${values.email.trim()}`,
        `Annet: ${values.other.trim() || "Ikke oppgitt"}`,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    };

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/kontakt@kavo.no",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const result = (await response.json().catch(() => null)) as {
        success?: string | boolean;
        message?: string;
      } | null;

      const ok =
        response.ok &&
        (result?.success === true ||
          result?.success === "true" ||
          typeof result?.success === "string");

      if (!ok) {
        const activationHint =
          result?.message?.toLowerCase().includes("activate") ||
          result?.message?.toLowerCase().includes("confirm")
            ? " Sjekk innboksen til kontakt@kavo.no og bekreft FormSubmit-e-posten første gang."
            : "";

        setError(
          `Noe gikk galt under sending. Prøv igjen, eller send e-post til kontakt@kavo.no.${activationHint}`,
        );
        setPending(false);
        return;
      }

      router.push("/bestill-demo/takk");
    } catch {
      setError(
        "Noe gikk galt under sending. Prøv igjen, eller send e-post til kontakt@kavo.no.",
      );
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <Section title="Om bedriften">
        <div>
          <label htmlFor="companyName" className={labelClass}>
            Hva heter bedriften? *
          </label>
          <input
            id="companyName"
            name="companyName"
            required
            value={values.companyName}
            onChange={(e) => update("companyName", e.target.value)}
            className={fieldClass}
            placeholder="F.eks. Nordisk VVS AS"
          />
        </div>

        <div>
          <label htmlFor="industry" className={labelClass}>
            Hvilken bransje er dere i? *
          </label>
          <select
            id="industry"
            name="industry"
            required
            className={fieldClass}
            value={values.industry}
            onChange={(e) => update("industry", e.target.value)}
          >
            <option value="" disabled>
              Velg bransje
            </option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="location" className={labelClass}>
            Hvor holder dere til? *
          </label>
          <input
            id="location"
            name="location"
            required
            value={values.location}
            onChange={(e) => update("location", e.target.value)}
            className={fieldClass}
            placeholder="F.eks. Oslo"
          />
        </div>

        <div>
          <label htmlFor="offerings" className={labelClass}>
            Hva tilbyr dere? *
          </label>
          <textarea
            id="offerings"
            name="offerings"
            required
            rows={3}
            value={values.offerings}
            onChange={(e) => update("offerings", e.target.value)}
            className={fieldClass}
            placeholder="F.eks. installasjon, service og rehabilitering"
          />
        </div>

        <fieldset>
          <legend className={labelClass}>Har dere en nettside i dag? *</legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {(["Ja", "Nei"] as const).map((option) => (
              <label
                key={option}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                  values.hasWebsite === option
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border bg-white text-foreground"
                }`}
              >
                <input
                  type="radio"
                  name="hasWebsite"
                  value={option}
                  required
                  checked={values.hasWebsite === option}
                  className="sr-only"
                  onChange={() => update("hasWebsite", option)}
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>

        {values.hasWebsite === "Ja" ? (
          <div>
            <label htmlFor="websiteUrl" className={labelClass}>
              Adresse til nettsiden
            </label>
            <input
              id="websiteUrl"
              name="websiteUrl"
              required
              value={values.websiteUrl}
              onChange={(e) => update("websiteUrl", e.target.value)}
              className={fieldClass}
              placeholder="www.bedriften.no"
            />
          </div>
        ) : null}
      </Section>

      <Section title="Kontakt">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Telefonnummer *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={fieldClass}
            placeholder="9X XX XX XX"
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            E-post *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={fieldClass}
            placeholder="navn@bedrift.no"
          />
        </div>

        <div>
          <label htmlFor="other" className={labelClass}>
            Noe annet vi bør vite? (valgfritt)
          </label>
          <textarea
            id="other"
            name="other"
            rows={3}
            value={values.other}
            onChange={(e) => update("other", e.target.value)}
            className={fieldClass}
            placeholder="F.eks. ønsker fokus på en bestemt tjeneste"
          />
        </div>
      </Section>

      {error ? (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-7 text-[0.9375rem] font-medium text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {pending ? "Sender..." : "Send inn"}
      </button>
    </form>
  );
}
