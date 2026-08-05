import { Benefits } from "./components/Benefits";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { WhyKavo } from "./components/WhyKavo";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Services />
        <HowItWorks />
        <WhyKavo />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
