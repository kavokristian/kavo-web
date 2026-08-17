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

const MAX_PHOTOS = 12;
const MAX_CERT_IMAGES = 8;
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;

type Tri = "Ja" | "Nei" | "Usikker" | "";
type LogoHelp = "Ja" | "Nei" | "Kontakt meg først" | "";

type FormValues = {
  companyName: string;
  orgNumber: string;
  address: string;
  serviceArea: string;
  services: string;
  focusServices: string;
  aboutCompany: string;
  differentiators: string;
  phone: string;
  emailPublic: string;
  openingHours: string;
  emailLeads: string;
  hasDomain: Tri;
  existingDomain: string;
  desiredDomain: string;
  hasLogo: "Ja" | "Nei" | "";
  photoSources: string;
  allowStock: "Ja" | "Nei" | "";
  wantLogo: LogoHelp;
  certifications: string;
  references: string;
  socialLinks: string;
  hasGbp: Tri;
  gbpAccess: Tri;
  other: string;
};

type ImageItem = {
  id: string;
  file: File;
  previewUrl: string;
};

const emptyValues: FormValues = {
  companyName: "",
  orgNumber: "",
  address: "",
  serviceArea: "",
  services: "",
  focusServices: "",
  aboutCompany: "",
  differentiators: "",
  phone: "",
  emailPublic: "",
  openingHours: "",
  emailLeads: "",
  hasDomain: "",
  existingDomain: "",
  desiredDomain: "",
  hasLogo: "",
  photoSources: "",
  allowStock: "",
  wantLogo: "",
  certifications: "",
  references: "",
  socialLinks: "",
  hasGbp: "",
  gbpAccess: "",
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

function RadioGroup({
  name,
  legend,
  options,
  value,
  onChange,
  required,
}: {
  name: string;
  legend: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <fieldset>
      <legend className={labelClass}>
        {legend}
        {required ? " *" : ""}
      </legend>
      <div className="mt-3 flex flex-wrap gap-3">
        {options.map((option) => (
          <label
            key={option}
            className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
              value === option
                ? "border-accent bg-accent-soft text-accent"
                : "border-border bg-white text-foreground"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option}
              required={required}
              checked={value === option}
              className="sr-only"
              onChange={() => onChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function createImageItem(file: File): ImageItem {
  return {
    id: `${file.name}-${file.size}-${file.lastModified}-${Math.random()}`,
    file,
    previewUrl: URL.createObjectURL(file),
  };
}

export function CustomerOnboardingForm() {
  const router = useRouter();
  const logoInputId = useId();
  const photosInputId = useId();
  const certInputId = useId();
  const logoInputRef = useRef<HTMLInputElement>(null);
  const photosInputRef = useRef<HTMLInputElement>(null);
  const certInputRef = useRef<HTMLInputElement>(null);

  const [values, setValues] = useState<FormValues>(emptyValues);
  const [logo, setLogo] = useState<ImageItem | null>(null);
  const [photos, setPhotos] = useState<ImageItem[]>([]);
  const [certImages, setCertImages] = useState<ImageItem[]>([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (logo) URL.revokeObjectURL(logo.previewUrl);
      photos.forEach((photo) => URL.revokeObjectURL(photo.previewUrl));
      certImages.forEach((image) => URL.revokeObjectURL(image.previewUrl));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleLogoSelect(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    setError(null);

    if (!file.type.startsWith("image/") && file.type !== "image/svg+xml") {
      setError("Logo må være en bildefil (JPG, PNG, WEBP eller SVG).");
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setError("Logoen må være under 5 MB.");
      return;
    }

    setLogo((prev) => {
      if (prev) URL.revokeObjectURL(prev.previewUrl);
      return createImageItem(file);
    });
  }

  function removeLogo() {
    setLogo((prev) => {
      if (prev) URL.revokeObjectURL(prev.previewUrl);
      return null;
    });
  }

  function addImagesToList(
    files: File[],
    currentCount: number,
    maxCount: number,
    onAdd: (items: ImageItem[]) => void,
  ) {
    const remaining = maxCount - currentCount;
    if (remaining <= 0) {
      setError(`Du kan laste opp maks ${maxCount} bilder.`);
      return;
    }

    const next: ImageItem[] = [];
    for (const file of files.slice(0, remaining)) {
      if (!file.type.startsWith("image/")) {
        setError("Du kan bare laste opp bildefiler.");
        continue;
      }
      if (file.size > MAX_IMAGE_BYTES) {
        setError(`Hvert bilde må være under 5 MB. «${file.name}» er for stort.`);
        continue;
      }
      next.push(createImageItem(file));
    }

    if (next.length) onAdd(next);
  }

  function handlePhotosSelect(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (!files.length) return;
    setError(null);
    addImagesToList(files, photos.length, MAX_PHOTOS, (items) =>
      setPhotos((prev) => [...prev, ...items]),
    );
  }

  function removePhoto(id: string) {
    setPhotos((prev) => {
      const target = prev.find((photo) => photo.id === id);
      if (target) URL.revokeObjectURL(target.previewUrl);
      return prev.filter((photo) => photo.id !== id);
    });
  }

  function handleCertSelect(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (!files.length) return;
    setError(null);
    addImagesToList(files, certImages.length, MAX_CERT_IMAGES, (items) =>
      setCertImages((prev) => [...prev, ...items]),
    );
  }

  function removeCertImage(id: string) {
    setCertImages((prev) => {
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
      !values.orgNumber.trim() ||
      !values.address.trim() ||
      !values.serviceArea.trim() ||
      !values.services.trim() ||
      !values.aboutCompany.trim() ||
      !values.differentiators.trim() ||
      !values.phone.trim() ||
      !values.emailPublic.trim() ||
      !values.emailLeads.trim() ||
      !values.hasDomain ||
      !values.hasLogo ||
      !values.allowStock ||
      !values.hasGbp
    ) {
      setError("Vennligst fyll ut alle påkrevde felt.");
      return;
    }

    if (values.hasLogo === "Nei" && !values.wantLogo) {
      setError("Oppgi om Kavo skal lage logo for dere.");
      return;
    }

    if (values.hasDomain === "Ja" && !values.existingDomain.trim()) {
      setError("Oppgi domenet dere allerede har.");
      return;
    }

    if (values.hasGbp === "Ja" && !values.gbpAccess) {
      setError("Oppgi om dere har tilgang til Google Business Profile.");
      return;
    }

    setPending(true);

    const outbound = new FormData();
    outbound.append(
      "_subject",
      `Kundeoppstart: ${values.companyName.trim()}`,
    );
    outbound.append("_template", "table");
    outbound.append("_captcha", "false");

    const fields: Record<string, string> = {
      Bedriftsnavn: values.companyName.trim(),
      Organisasjonsnummer: values.orgNumber.trim(),
      Adresse: values.address.trim(),
      Dekningsområde: values.serviceArea.trim(),
      Tjenester: values.services.trim(),
      "Prioriterte tjenester": optionalLabel(values.focusServices),
      "Om bedriften": values.aboutCompany.trim(),
      "Hva skiller dere ut": values.differentiators.trim(),
      "Telefon på nettsiden": values.phone.trim(),
      "E-post på nettsiden": values.emailPublic.trim(),
      Åpningstider: optionalLabel(values.openingHours),
      "E-post for henvendelser": values.emailLeads.trim(),
      "Har domene": values.hasDomain,
      "Eksisterende domene":
        values.hasDomain === "Ja"
          ? values.existingDomain.trim()
          : "Ikke relevant",
      "Ønsket domenenavn":
        values.hasDomain === "Ja"
          ? "Ikke relevant"
          : optionalLabel(values.desiredDomain),
      "Bilder andre steder": optionalLabel(values.photoSources),
      "Kan bruke stockbilder": values.allowStock,
      "Har logo": values.hasLogo,
      "Ønsker logo fra Kavo":
        values.hasLogo === "Nei"
          ? values.wantLogo || "Ikke oppgitt"
          : "Ikke relevant (har logo)",
      Sertifiseringer: optionalLabel(values.certifications),
      "Omtaler / referanser": optionalLabel(values.references),
      "Sosiale profiler": optionalLabel(values.socialLinks),
      "Har Google Business Profile": values.hasGbp,
      "Tilgang til GBP":
        values.hasGbp === "Ja"
          ? values.gbpAccess || "Ikke oppgitt"
          : "Ikke relevant",
      Annet: optionalLabel(values.other),
      "Antall bilder lastet opp": String(photos.length),
      "Antall sertifiseringsbilder": String(certImages.length),
      "Logo lastet opp": logo ? "Ja" : "Nei",
    };

    Object.entries(fields).forEach(([key, value]) => {
      outbound.append(key, value);
    });

    outbound.append(
      "message",
      [
        "Ny kundeoppstart – informasjon til nettside",
        "",
        ...Object.entries(fields).map(([key, value]) => `${key}: ${value}`),
      ].join("\n"),
    );

    if (logo) {
      outbound.append("Logo", logo.file, logo.file.name);
    }
    photos.forEach((photo, index) => {
      outbound.append(`Bilde ${index + 1}`, photo.file, photo.file.name);
    });
    certImages.forEach((image, index) => {
      outbound.append(
        `Sertifisering ${index + 1}`,
        image.file,
        image.file.name,
      );
    });

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/kontakt@kavo.no",
        {
          method: "POST",
          headers: { Accept: "application/json" },
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
        setError(
          "Noe gikk galt under sending. Prøv igjen, eller send e-post til kontakt@kavo.no. Det du har fylt inn er lagret i skjemaet.",
        );
        setPending(false);
        return;
      }

      router.push("/kunde-oppstart/takk");
    } catch {
      setError(
        "Noe gikk galt under sending. Prøv igjen, eller send e-post til kontakt@kavo.no. Det du har fylt inn er lagret i skjemaet.",
      );
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <Section title="1. Om bedriften">
        <div>
          <label htmlFor="companyName" className={labelClass}>
            1. Hva heter bedriften? *
          </label>
          <input
            id="companyName"
            required
            value={values.companyName}
            onChange={(e) => update("companyName", e.target.value)}
            className={fieldClass}
            placeholder="F.eks. Nordisk VVS AS"
          />
        </div>

        <div>
          <label htmlFor="orgNumber" className={labelClass}>
            2. Hva er organisasjonsnummeret? *
          </label>
          <input
            id="orgNumber"
            required
            value={values.orgNumber}
            onChange={(e) => update("orgNumber", e.target.value)}
            className={fieldClass}
            placeholder="9XX XXX XXX"
          />
        </div>

        <div>
          <label htmlFor="address" className={labelClass}>
            3. Hva er bedriftens adresse? *
          </label>
          <textarea
            id="address"
            required
            rows={2}
            value={values.address}
            onChange={(e) => update("address", e.target.value)}
            className={fieldClass}
            placeholder="Gateadresse, postnummer og sted"
          />
        </div>

        <div>
          <label htmlFor="serviceArea" className={labelClass}>
            4. Hvilke områder leverer dere tjenester i? *
          </label>
          <textarea
            id="serviceArea"
            required
            rows={2}
            value={values.serviceArea}
            onChange={(e) => update("serviceArea", e.target.value)}
            className={fieldClass}
            placeholder="F.eks. Kristiansand, Vennesla, Søgne og Lillesand"
          />
        </div>

        <div>
          <label htmlFor="services" className={labelClass}>
            5. Hvilke tjenester tilbyr dere? *
          </label>
          <textarea
            id="services"
            required
            rows={3}
            value={values.services}
            onChange={(e) => update("services", e.target.value)}
            className={fieldClass}
            placeholder="List opp de viktigste tjenestene"
          />
        </div>

        <div>
          <label htmlFor="focusServices" className={labelClass}>
            6. Er det noen tjenester dere spesielt ønsker å få flere kunder på?
            (valgfritt)
          </label>
          <textarea
            id="focusServices"
            rows={2}
            value={values.focusServices}
            onChange={(e) => update("focusServices", e.target.value)}
            className={fieldClass}
            placeholder="F.eks. varmepumper, akutthjelp, bad"
          />
        </div>

        <div>
          <label htmlFor="aboutCompany" className={labelClass}>
            7. Fortell kort om bedriften. *
          </label>
          <textarea
            id="aboutCompany"
            required
            rows={4}
            value={values.aboutCompany}
            onChange={(e) => update("aboutCompany", e.target.value)}
            className={fieldClass}
            placeholder="F.eks. hvor lenge dere har holdt på, erfaring, antall ansatte"
          />
        </div>

        <div>
          <label htmlFor="differentiators" className={labelClass}>
            8. Hva skiller dere fra konkurrentene? *
          </label>
          <textarea
            id="differentiators"
            required
            rows={3}
            value={values.differentiators}
            onChange={(e) => update("differentiators", e.target.value)}
            className={fieldClass}
            placeholder="F.eks. rask respons, lang erfaring, sertifiseringer, døgnvakt"
          />
        </div>
      </Section>

      <Section title="2. Kontaktinformasjon">
        <div>
          <label htmlFor="phone" className={labelClass}>
            9. Hvilket telefonnummer skal vises på nettsiden? *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={fieldClass}
            placeholder="9X XX XX XX"
          />
        </div>

        <div>
          <label htmlFor="emailPublic" className={labelClass}>
            10. Hvilken e-postadresse skal vises på nettsiden? *
          </label>
          <input
            id="emailPublic"
            type="email"
            required
            value={values.emailPublic}
            onChange={(e) => update("emailPublic", e.target.value)}
            className={fieldClass}
            placeholder="post@bedrift.no"
          />
        </div>

        <div>
          <label htmlFor="openingHours" className={labelClass}>
            11. Hva er åpningstidene deres? (valgfritt)
          </label>
          <textarea
            id="openingHours"
            rows={2}
            value={values.openingHours}
            onChange={(e) => update("openingHours", e.target.value)}
            className={fieldClass}
            placeholder="F.eks. Man–fre 07–16. Kan stå tomt hvis dere ikke har faste tider."
          />
        </div>

        <div>
          <label htmlFor="emailLeads" className={labelClass}>
            12. Hvilken e-postadresse skal henvendelser fra nettsiden sendes til?
            *
          </label>
          <input
            id="emailLeads"
            type="email"
            required
            value={values.emailLeads}
            onChange={(e) => update("emailLeads", e.target.value)}
            className={fieldClass}
            placeholder="Kan være samme som over, eller en annen"
          />
        </div>
      </Section>

      <Section title="3. Domene">
        <RadioGroup
          name="hasDomain"
          legend="13. Har bedriften allerede et domene?"
          options={["Ja", "Nei", "Usikker"] as const}
          value={values.hasDomain}
          onChange={(value) => update("hasDomain", value as Tri)}
          required
        />

        {values.hasDomain === "Ja" ? (
          <div>
            <label htmlFor="existingDomain" className={labelClass}>
              14. Hva er domenet? *
            </label>
            <input
              id="existingDomain"
              required
              value={values.existingDomain}
              onChange={(e) => update("existingDomain", e.target.value)}
              className={fieldClass}
              placeholder="f.eks. bedriften.no"
            />
          </div>
        ) : null}

        {values.hasDomain === "Nei" || values.hasDomain === "Usikker" ? (
          <div>
            <label htmlFor="desiredDomain" className={labelClass}>
              15. Har dere et ønsket domenenavn? (valgfritt)
            </label>
            <input
              id="desiredDomain"
              value={values.desiredDomain}
              onChange={(e) => update("desiredDomain", e.target.value)}
              className={fieldClass}
              placeholder="F.eks. bedriftsnavn.no"
            />
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Kavo undersøker tilgjengelighet og hjelper med registrering.
            </p>
          </div>
        ) : null}
      </Section>

      <Section title="4. Logo og bilder">
        <div className="space-y-4">
          <RadioGroup
            name="hasLogo"
            legend="16. Har dere logo i dag?"
            options={["Ja", "Nei"] as const}
            value={values.hasLogo}
            onChange={(value) => {
              update("hasLogo", value as "Ja" | "Nei" | "");
              if (value === "Ja") update("wantLogo", "");
              if (value === "Nei") removeLogo();
            }}
            required
          />

          {values.hasLogo === "Ja" ? (
            <div>
              <label htmlFor={logoInputId} className={labelClass}>
                Last opp logoen
              </label>
              <p className="mt-1 text-sm text-muted">
                JPG, PNG, WEBP eller SVG. Maks 5 MB.
              </p>
              <input
                ref={logoInputRef}
                id={logoInputId}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/svg+xml,image/gif"
                className="sr-only"
                onChange={handleLogoSelect}
              />
              <button
                type="button"
                onClick={() => logoInputRef.current?.click()}
                className="mt-3 inline-flex h-11 items-center justify-center rounded-full border border-border bg-white px-5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-accent-soft/40"
              >
                {logo ? "Bytt logo" : "Velg logo"}
              </button>
              {logo ? (
                <div className="relative mt-4 inline-block overflow-hidden rounded-2xl border border-border/70 bg-surface">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.previewUrl}
                    alt="Opplastet logo"
                    className="h-28 w-auto max-w-full object-contain p-3"
                  />
                  <button
                    type="button"
                    onClick={removeLogo}
                    className="absolute right-2 top-2 rounded-full bg-foreground/80 px-2.5 py-1 text-xs font-medium text-white"
                  >
                    Fjern
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}

          {values.hasLogo === "Nei" ? (
            <div>
              <RadioGroup
                name="wantLogo"
                legend="Skal Kavo lage logo for dere?"
                options={["Ja", "Nei", "Kontakt meg først"] as const}
                value={values.wantLogo}
                onChange={(value) => update("wantLogo", value as LogoHelp)}
                required
              />
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Vi kan lage en enkel, profesjonell logo som passer bedriften –
                uten at dere trenger et eget designbyrå.
              </p>
            </div>
          ) : null}
        </div>

        <div>
          <label htmlFor={photosInputId} className={labelClass}>
            17. Last opp bilder til nettsiden (valgfritt)
          </label>
          <p className="mt-1 text-sm text-muted">
            Ansatte, biler, jobber, lokaler eller prosjekter. Opptil{" "}
            {MAX_PHOTOS} bilder, maks 5 MB per fil.
          </p>
          <input
            ref={photosInputRef}
            id={photosInputId}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            multiple
            className="sr-only"
            onChange={handlePhotosSelect}
          />
          <button
            type="button"
            onClick={() => photosInputRef.current?.click()}
            className="mt-3 inline-flex h-11 items-center justify-center rounded-full border border-border bg-white px-5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-accent-soft/40"
          >
            Velg bilder
          </button>
          {photos.length > 0 ? (
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {photos.map((photo) => (
                <li
                  key={photo.id}
                  className="relative overflow-hidden rounded-2xl border border-border/70 bg-surface"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.previewUrl}
                    alt={photo.file.name}
                    className="aspect-square w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(photo.id)}
                    className="absolute right-2 top-2 rounded-full bg-foreground/80 px-2.5 py-1 text-xs font-medium text-white"
                  >
                    Fjern
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div>
          <label htmlFor="photoSources" className={labelClass}>
            18. Har dere bilder andre steder Kavo kan hente fra? (valgfritt)
          </label>
          <textarea
            id="photoSources"
            rows={2}
            value={values.photoSources}
            onChange={(e) => update("photoSources", e.target.value)}
            className={fieldClass}
            placeholder="Lenke til Facebook, Instagram, Google eller annen nettside"
          />
        </div>

        <RadioGroup
          name="allowStock"
          legend="19. Hvis dere ikke har nok egne bilder, kan Kavo bruke relevante profesjonelle stockbilder?"
          options={["Ja", "Nei"] as const}
          value={values.allowStock}
          onChange={(value) =>
            update("allowStock", value as "Ja" | "Nei" | "")
          }
          required
        />
      </Section>

      <Section title="5. Innhold">
        <div>
          <label htmlFor="certifications" className={labelClass}>
            20. Har dere sertifiseringer, godkjenninger eller medlemskap som bør
            fremheves? (valgfritt)
          </label>
          <textarea
            id="certifications"
            rows={2}
            value={values.certifications}
            onChange={(e) => update("certifications", e.target.value)}
            className={fieldClass}
            placeholder="F.eks. Mesterregisteret, StartBANK, våtromsgodkjenning"
          />
          <p className="mt-3 text-sm text-muted">
            Du kan også laste opp bilder av sertifikater, godkjenninger eller
            medlemskap (valgfritt).
          </p>
          <input
            ref={certInputRef}
            id={certInputId}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            multiple
            className="sr-only"
            onChange={handleCertSelect}
          />
          <button
            type="button"
            onClick={() => certInputRef.current?.click()}
            className="mt-3 inline-flex h-11 items-center justify-center rounded-full border border-border bg-white px-5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-accent-soft/40"
          >
            Last opp sertifiseringer
          </button>
          {certImages.length > 0 ? (
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {certImages.map((image) => (
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
                    onClick={() => removeCertImage(image.id)}
                    className="absolute right-2 top-2 rounded-full bg-foreground/80 px-2.5 py-1 text-xs font-medium text-white"
                  >
                    Fjern
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div>
          <label htmlFor="references" className={labelClass}>
            21. Har dere kundeomtaler, referanser eller tidligere prosjekter
            dere ønsker å vise frem? (valgfritt)
          </label>
          <textarea
            id="references"
            rows={3}
            value={values.references}
            onChange={(e) => update("references", e.target.value)}
            className={fieldClass}
            placeholder="Tekst eller lenke"
          />
        </div>

        <div>
          <label htmlFor="socialLinks" className={labelClass}>
            22. Har dere Facebook, Instagram eller andre relevante profiler?
            (valgfritt)
          </label>
          <textarea
            id="socialLinks"
            rows={2}
            value={values.socialLinks}
            onChange={(e) => update("socialLinks", e.target.value)}
            className={fieldClass}
            placeholder="Lim inn lenker"
          />
        </div>
      </Section>

      <Section title="6. Google">
        <RadioGroup
          name="hasGbp"
          legend="23. Har bedriften allerede en Google Business Profile / er bedriften synlig på Google Maps?"
          options={["Ja", "Nei", "Usikker"] as const}
          value={values.hasGbp}
          onChange={(value) => update("hasGbp", value as Tri)}
          required
        />

        {values.hasGbp === "Ja" ? (
          <div className="space-y-3">
            <RadioGroup
              name="gbpAccess"
              legend="24. Har dere tilgang til å administrere profilen?"
              options={["Ja", "Nei", "Usikker"] as const}
              value={values.gbpAccess}
              onChange={(value) => update("gbpAccess", value as Tri)}
              required
            />
            <p className="text-sm leading-relaxed text-muted">
              Dersom dere allerede har en Google Business Profile, kan Kavo
              hjelpe dere med å gi oss administratortilgang. Vi trenger aldri
              passordet til Google-kontoen deres.
            </p>
          </div>
        ) : null}
      </Section>

      <Section title="7. Til slutt">
        <div>
          <label htmlFor="other" className={labelClass}>
            25. Er det noe annet dere ønsker på nettsiden eller som vi bør vite
            før vi setter i gang? (valgfritt)
          </label>
          <textarea
            id="other"
            rows={4}
            value={values.other}
            onChange={(e) => update("other", e.target.value)}
            className={fieldClass}
            placeholder="F.eks. ønsket stil, spesielle sider, booking, osv."
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
