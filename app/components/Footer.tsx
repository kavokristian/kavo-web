const footerLinks = [
  { href: "#fordeler", label: "Fordeler" },
  { href: "#tjenester", label: "Tjenester" },
  { href: "#slik-fungerer-det", label: "Slik fungerer det" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="border-t border-border pb-10 pt-14 sm:pb-12 sm:pt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a
              href="#"
              className="text-xl font-semibold tracking-tight text-foreground sm:text-[1.375rem]"
            >
              Kavo
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Vi gjør bedriften din synlig på nett — slik at flere kunder finner
              deg.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3 sm:items-end">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-light">
            © {new Date().getFullYear()} Kavo. Alle rettigheter forbeholdt.
          </p>
          <a
            href="mailto:kontakt@kavo.no"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            kontakt@kavo.no
          </a>
        </div>
      </div>
    </footer>
  );
}
