import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Offerings } from "./components/Offerings";
import { Pricing } from "./components/Pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Offerings />
      <Pricing />
      <HowItWorks />
      <FAQ />
    </main>
  );
}
