import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Offerings } from "./components/Offerings";
import { Pricing } from "./components/Pricing";
import { WhyKavo } from "./components/WhyKavo";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyKavo />
      <Offerings />
      <Pricing />
      <FAQ />
      <Location />
    </main>
  );
}
