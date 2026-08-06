import Link from "next/link";
import { Reveal } from "./Reveal";

export function PageCTA({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="rounded-[1.75rem] border border-border bg-surface px-6 py-14 text-center sm:rounded-[2rem] sm:px-12 sm:py-16">
            <h2 className="text-[1.75rem] font-semibold tracking-tight text-foreground sm:text-[2.25rem]">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/bestill-demo"
              className="inline-flex h-12 w-full max-w-md items-center justify-center rounded-full bg-accent px-7 text-center text-[0.9375rem] font-medium leading-snug text-white"
            >
                Få gratis utkast til nettside
              </Link>
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-white px-7 text-[0.9375rem] font-medium text-foreground"
              >
                Til forsiden
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
