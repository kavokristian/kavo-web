import Image from "next/image";
import Link from "next/link";

const customerImages = [
  {
    src: "/hero-lokal-bedrift.jpg",
    alt: "Salongeier som blir synlig på nett",
  },
  {
    src: "/hero-handverk-mann.jpg",
    alt: "Håndverker som blir synlig på nett",
  },
];

export function Hero() {
  return (
    <section className="bg-atmosphere relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-28 sm:px-8 sm:pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-up text-[2.75rem] font-semibold tracking-tight text-foreground sm:text-[3.5rem] md:text-[4rem]">
            Kavo
          </p>

          <h1 className="animate-fade-up delay-100 mt-6 text-[1.625rem] font-semibold leading-[1.25] tracking-tight text-foreground sm:text-[2rem] sm:leading-[1.2] md:text-[2.375rem]">
            Nettside og synlighet på Google
          </h1>

          <p className="animate-fade-up delay-200 mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
            Ingen skjulte kostnader. Vi bygger, drifter og optimaliserer
            nettsiden din - og sørger for at bedriften din blir synlig på nett.
          </p>

          <div className="animate-fade-up delay-300 mt-9 flex justify-center">
            <Link
              href="/bestill-demo"
              className="inline-flex h-12 w-full max-w-md items-center justify-center rounded-full bg-accent px-7 text-center text-[0.9375rem] font-medium leading-snug text-white shadow-[0_1px_2px_rgba(37,99,235,0.2),0_8px_24px_rgba(37,99,235,0.25)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_1px_2px_rgba(37,99,235,0.25),0_12px_28px_rgba(37,99,235,0.3)] active:scale-[0.98] sm:w-auto sm:max-w-none"
            >
              Få gratis utkast
            </Link>
          </div>
        </div>

        <div className="animate-scale-in delay-400 relative mt-14 sm:mt-20">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {customerImages.map((image, index) => (
              <div
                key={image.src}
                className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-border/70 shadow-[0_16px_40px_-20px_rgba(17,17,17,0.25)] sm:rounded-[1.5rem]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
