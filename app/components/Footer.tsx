import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border pb-10 pt-14 sm:pb-12 sm:pt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-foreground sm:text-[1.375rem]"
          >
            Kavo
          </Link>

          <Link
            href="/bestill-demo"
            className="inline-flex h-8 w-fit items-center rounded-full bg-foreground px-4 text-xs font-medium text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Få gratis utkast
          </Link>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-muted-light">
            <p>© {new Date().getFullYear()} Kavo Nystad</p>
            <p className="mt-1">Org.nr. 920 801 293</p>
          </div>
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
