import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { Offerings } from "./components/Offerings";
import { Pricing } from "./components/Pricing";
import { WhyKavo } from "./components/WhyKavo";

export default function Home() {
  return (
    <main>
      <Hero />
      <Offerings />
      <WhyKavo />
      <Pricing />
      <FAQ />
    </main>
  );
}
