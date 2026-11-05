import { About } from "@/components/about";
import { Closing } from "@/components/closing";
import { Comparison } from "@/components/comparison";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Moments } from "@/components/moments";
import { Packages } from "@/components/packages";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main id="content">
        <Hero />
        <About />
        <Comparison />
        <Services />
        <Packages />
        <Moments />
        <Portfolio />
        <Testimonials />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
