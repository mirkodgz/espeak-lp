// import { Benefits } from "@/components/sections/benefits"; // Sezione "Per chi è espeak" nascosta temporaneamente, da usare in futuro quando ci saranno le foto
// import { BentoGrid } from "@/components/sections/bento"; // Sezione nascosta temporaneamente, da usare in futuro
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { FeatureHighlight } from "@/components/sections/feature-highlight";
import { FeatureScroll } from "@/components/sections/feature-scroll";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <FeatureScroll />
      <FeatureHighlight />
      {/* <BentoGrid /> Sezione "Perché espeak" nascosta temporaneamente, da usare in futuro */}
      {/* <Benefits /> Sezione "Per chi è espeak" nascosta temporaneamente, da usare in futuro quando ci saranno le foto */}
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
