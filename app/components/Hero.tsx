import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-atmosphere relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-28 sm:px-8 sm:pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-up text-[2.75rem] font-semibold tracking-tight text-foreground sm:text-[3.5rem] md:text-[4rem]">
            Kavo
          </p>

          <h1 className="animate-fade-up delay-100 mt-6 text-[1.5rem] font-semibold leading-[1.25] tracking-tight text-foreground sm:text-[1.875rem] sm:leading-[1.2] md:text-[2.25rem]">
            Vi lager din nye nettside og sikrer synlighet på Google
          </h1>

          <div className="animate-fade-up delay-200 mt-9 flex justify-center">
            <Link
              href="/bestill-demo"
              className="inline-flex h-12 w-full max-w-md items-center justify-center rounded-full bg-accent px-7 text-center text-[0.9375rem] font-medium leading-snug text-white shadow-[0_1px_2px_rgba(37,99,235,0.2),0_8px_24px_rgba(37,99,235,0.25)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_1px_2px_rgba(37,99,235,0.25),0_12px_28px_rgba(37,99,235,0.3)] active:scale-[0.98] sm:w-auto sm:max-w-none"
            >
              Få gratis utkast til nettside
            </Link>
          </div>
        </div>

        <div className="animate-scale-in delay-400 relative mt-14 sm:mt-20">
          <div className="relative mx-auto aspect-[16/10] max-w-4xl overflow-hidden rounded-[1.25rem] border border-border/70 shadow-[0_20px_50px_-24px_rgba(17,17,17,0.35)] sm:rounded-[1.5rem]">
            <Image
              src="/hero-laptop-smb.jpg"
              alt="Bærbar PC som viser nettside for lokal håndverkerbedrift"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
