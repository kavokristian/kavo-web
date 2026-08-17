import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kavo.no"),
  title: {
    default: "Kavo - Synlighet på nett for norske bedrifter",
    template: "%s - Kavo",
  },
  description:
    "Ingen skjulte kostnader. Vi bygger, drifter og optimaliserer nettsiden din - og sørger for at bedriften din blir synlig på nett.",
  verification: {
    google: "tEK86jlREKzra7UfTAUn9_39aIG7bKRHp8wJ1X2Upl0",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nb"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
