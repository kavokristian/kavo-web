import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { Offerings } from "./components/Offerings";
import { Pricing } from "./components/Pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Offerings />
      <Pricing />
      <FAQ />
    </main>
  );
}
