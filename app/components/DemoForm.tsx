"use client";

import { useActionState, useState, type ReactNode } from "react";
import {
  submitDemoRequest,
  type DemoFormState,
} from "../actions/bestill-demo";

const industries = [
  "Rørlegger",
  "Elektriker",
  "Snekker",
  "Maler",
  "Frisør",
  "Restaurant",
  "Annet",
];

const initialState: DemoFormState = {};

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
  const [state, formAction, pending] = useActionState(
    submitDemoRequest,
    initialState,
  );
  const [hasWebsite, setHasWebsite] = useState<"Ja" | "Nei" | "">("");

  return (
    <form action={formAction} className="space-y-6">
      <Section title="Om bedriften">
        <div>
          <label htmlFor="companyName" className={labelClass}>
            Hva heter bedriften? *
          </label>
          <input
            id="companyName"
            name="companyName"
            required
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
            defaultValue=""
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
                  hasWebsite === option
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border bg-white text-foreground"
                }`}
              >
                <input
                  type="radio"
                  name="hasWebsite"
                  value={option}
                  required
                  className="sr-only"
                  onChange={() => setHasWebsite(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>

        {hasWebsite === "Ja" ? (
          <div>
            <label htmlFor="websiteUrl" className={labelClass}>
              Adresse til nettsiden
            </label>
            <input
              id="websiteUrl"
              name="websiteUrl"
              required
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
            className={fieldClass}
            placeholder="F.eks. ønsker fokus på en bestemt tjeneste"
          />
        </div>
      </Section>

      {state.error ? (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
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
