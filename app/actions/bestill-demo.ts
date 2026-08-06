"use server";

import { redirect } from "next/navigation";

function getText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export type DemoFormState = {
  error?: string;
};

export async function submitDemoRequest(
  _prevState: DemoFormState,
  formData: FormData,
): Promise<DemoFormState> {
  const companyName = getText(formData, "companyName");
  const industry = getText(formData, "industry");
  const location = getText(formData, "location");
  const hasWebsite = getText(formData, "hasWebsite");
  const websiteUrl = getText(formData, "websiteUrl");
  const offerings = getText(formData, "offerings");
  const phone = getText(formData, "phone");
  const email = getText(formData, "email");
  const other = getText(formData, "other");

  if (
    !companyName ||
    !industry ||
    !location ||
    !hasWebsite ||
    !offerings ||
    !phone ||
    !email
  ) {
    return { error: "Vennligst fyll ut alle påkrevde felt." };
  }

  if (hasWebsite === "Ja" && !websiteUrl) {
    return { error: "Oppgi adressen til nettsiden deres." };
  }

  const message = [
    "Ny forespørsel: Få et gratis utkast",
    "",
    `Bedriftsnavn: ${companyName}`,
    `Bransje: ${industry}`,
    `Sted: ${location}`,
    `Har nettside: ${hasWebsite}`,
    hasWebsite === "Ja" ? `Nettsideadresse: ${websiteUrl}` : null,
    `Hva tilbyr dere: ${offerings}`,
    `Telefon: ${phone}`,
    `E-post: ${email}`,
    `Annet: ${other || "Ikke oppgitt"}`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const outbound = new FormData();
  outbound.append("_subject", `Ny forespørsel om gratis utkast: ${companyName}`);
  outbound.append("_template", "table");
  outbound.append("_captcha", "false");
  outbound.append("Bedriftsnavn", companyName);
  outbound.append("Bransje", industry);
  outbound.append("Sted", location);
  outbound.append("Har nettside", hasWebsite);
  if (websiteUrl) outbound.append("Nettsideadresse", websiteUrl);
  outbound.append("Hva tilbyr dere", offerings);
  outbound.append("Telefon", phone);
  outbound.append("E-post", email);
  outbound.append("Annet", other || "Ikke oppgitt");
  outbound.append("message", message);

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/kontakt@kavo.no",
      {
        method: "POST",
        body: outbound,
        headers: {
          Accept: "application/json",
        },
      },
    );

    if (!response.ok) {
      return {
        error:
          "Noe gikk galt under sending. Prøv igjen, eller send e-post til kontakt@kavo.no.",
      };
    }
  } catch {
    return {
      error:
        "Noe gikk galt under sending. Prøv igjen, eller send e-post til kontakt@kavo.no.",
    };
  }

  redirect("/bestill-demo/takk");
}
