"use client";

import { useRouter } from "next/navigation";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";

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

const websiteGoals = [
  "Få flere henvendelser / telefoner",
  "Se mer profesjonell ut",
  "Bli synlig på Google",
  "Erstatte gammel nettside",
  "Annet",
];

const MAX_IMAGES = 8;
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;

type FormValues = {
  companyName: string;
  industry: string;
  location: string;
  offerings: string;
  hasWebsite: "Ja" | "Nei" | "";
  websiteUrl: string;
  phone: string;
  email: string;
  websiteGoal: string;
  serviceArea: string;
  differentiators: string;
  inspiration: string;
  other: string;
};

type ImageItem = {
  id: string;
  file: File;
  previewUrl: string;
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
  websiteGoal: "",
  serviceArea: "",
  differentiators: "",
  inspiration: "",
  other: "",
};

const fieldClass =
  "mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-[0.975rem] text-foreground outline-none transition-colors placeholder:text-muted-light focus:border-accent/50 focus:ring-2 focus:ring-accent/15";

const labelClass = "block text-sm font-medium tracking-tight text-foreground";

function optionalLabel(value: string) {
  return value.trim() || "Ikke oppgitt";
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[1.5rem] border border-border/70 bg-white p-6 sm:p-8">
      <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-[1.375rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
}

export function DemoForm() {
  const router = useRouter();
  const fileInputId = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [images, setImages] = useState<ImageItem[]>([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      images.forEach((image) => URL.revokeObjectURL(image.previewUrl));
    };
    // Only revoke on unmount; individual removals revoke themselves.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleImageSelect(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (!files.length) return;

    setError(null);

    const remaining = MAX_IMAGES - images.length;
    if (remaining <= 0) {
      setError(`Du kan laste opp maks ${MAX_IMAGES} bilder.`);
      return;
    }

    const next: ImageItem[] = [];
    for (const file of files.slice(0, remaining)) {
      if (!file.type.startsWith("image/")) {
        setError("Du kan bare laste opp bildefiler (JPG, PNG, WEBP eller GIF).");
        continue;
      }
      if (file.size > MAX_IMAGE_BYTES) {
        setError(`Hvert bilde må være under 5 MB. «${file.name}» er for stort.`);
        continue;
      }
      next.push({
        id: `${file.name}-${file.size}-${file.lastModified}-${Math.random()}`,
        file,
        previewUrl: URL.createObjectURL(file),
      });
    }

    if (next.length) {
      setImages((prev) => [...prev, ...next]);
    }
  }

  function removeImage(id: string) {
    setImages((prev) => {
      const target = prev.find((image) => image.id === id);
      if (target) URL.revokeObjectURL(target.previewUrl);
      return prev.filter((image) => image.id !== id);
    });
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

    const websiteGoal = optionalLabel(values.websiteGoal);
    const serviceArea = optionalLabel(values.serviceArea);
    const differentiators = optionalLabel(values.differentiators);
    const inspiration = optionalLabel(values.inspiration);
    const other = optionalLabel(values.other);

    const outbound = new FormData();
    outbound.append(
      "_subject",
      `Ny forespørsel om gratis utkast: ${values.companyName.trim()}`,
    );
    outbound.append("_template", "table");
    outbound.append("_captcha", "false");
    outbound.append("Bedriftsnavn", values.companyName.trim());
    outbound.append("Bransje", values.industry);
    outbound.append("Sted", values.location.trim());
    outbound.append("Har nettside", values.hasWebsite);
    if (values.hasWebsite === "Ja") {
      outbound.append("Nettsideadresse", values.websiteUrl.trim());
    }
    outbound.append("Hva tilbyr dere", values.offerings.trim());
    outbound.append("Viktigste mål med nettsiden", websiteGoal);
    outbound.append("Dekningsområde", serviceArea);
    outbound.append("Hva skiller dere ut", differentiators);
    outbound.append("Nettsider dere liker", inspiration);
    outbound.append("Telefon", values.phone.trim());
    outbound.append("E-post", values.email.trim());
    outbound.append("Annet", other);
    outbound.append(
      "Antall bilder",
      images.length ? String(images.length) : "Ingen",
    );
    outbound.append(
      "message",
      [
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
        `Viktigste mål med nettsiden: ${websiteGoal}`,
        `Dekningsområde: ${serviceArea}`,
        `Hva skiller dere ut: ${differentiators}`,
        `Nettsider dere liker: ${inspiration}`,
        `Antall bilder: ${images.length || "Ingen"}`,
        `Telefon: ${values.phone.trim()}`,
        `E-post: ${values.email.trim()}`,
        `Annet: ${other}`,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    );

    images.forEach((image, index) => {
      outbound.append(`Bilde ${index + 1}`, image.file, image.file.name);
    });

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/kontakt@kavo.no",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: outbound,
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

      <Section
        title="For et bedre utkast"
        description="Valgfritt – men jo mer du fyller ut, jo mer treffsikkert blir utkastet."
      >
        <div>
          <label htmlFor="websiteGoal" className={labelClass}>
            Hva er viktigst at nettsiden skal hjelpe dere med? (valgfritt)
          </label>
          <select
            id="websiteGoal"
            name="websiteGoal"
            className={fieldClass}
            value={values.websiteGoal}
            onChange={(e) => update("websiteGoal", e.target.value)}
          >
            <option value="">Velg hvis du vil</option>
            {websiteGoals.map((goal) => (
              <option key={goal} value={goal}>
                {goal}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="serviceArea" className={labelClass}>
            Hvilke områder dekker dere? (valgfritt)
          </label>
          <input
            id="serviceArea"
            name="serviceArea"
            value={values.serviceArea}
            onChange={(e) => update("serviceArea", e.target.value)}
            className={fieldClass}
            placeholder="F.eks. Oslo og Akershus, eller hele Sørlandet"
          />
        </div>

        <div>
          <label htmlFor="differentiators" className={labelClass}>
            Hva skiller dere fra andre i bransjen? (valgfritt)
          </label>
          <textarea
            id="differentiators"
            name="differentiators"
            rows={3}
            value={values.differentiators}
            onChange={(e) => update("differentiators", e.target.value)}
            className={fieldClass}
            placeholder="F.eks. rask utrykning, fast pris, lang erfaring, familiebedrift"
          />
        </div>

        <div>
          <label htmlFor="inspiration" className={labelClass}>
            Nettsider dere liker stilen til? (valgfritt)
          </label>
          <textarea
            id="inspiration"
            name="inspiration"
            rows={2}
            value={values.inspiration}
            onChange={(e) => update("inspiration", e.target.value)}
            className={fieldClass}
            placeholder="Lim inn 1–2 lenker, eller beskriv stilen kort"
          />
        </div>

        <div>
          <label htmlFor={fileInputId} className={labelClass}>
            Last opp bilder (valgfritt)
          </label>
          <p className="mt-1 text-sm text-muted">
            Logo, team, arbeid eller lokaler. Opptil {MAX_IMAGES} bilder, maks 5
            MB per fil.
          </p>
          <input
            ref={fileInputRef}
            id={fileInputId}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            multiple
            className="sr-only"
            onChange={handleImageSelect}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="mt-3 inline-flex h-11 items-center justify-center rounded-full border border-border bg-white px-5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-accent-soft/40"
          >
            Velg bilder
          </button>

          {images.length > 0 ? (
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {images.map((image) => (
                <li
                  key={image.id}
                  className="relative overflow-hidden rounded-2xl border border-border/70 bg-surface"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.previewUrl}
                    alt={image.file.name}
                    className="aspect-square w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(image.id)}
                    className="absolute right-2 top-2 rounded-full bg-foreground/80 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm transition-opacity hover:bg-foreground"
                  >
                    Fjern
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
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
