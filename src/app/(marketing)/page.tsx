import { Hero } from "@/features/marketing/components/hero";
import { Treatments } from "@/features/marketing/components/treatments";
import { Catalog } from "@/features/marketing/components/catalog";
import { About } from "@/features/marketing/components/about";
import { Values } from "@/features/marketing/components/values";
import { Testimonials } from "@/features/marketing/components/testimonials";
import { Faq } from "@/features/marketing/components/faq";
import { Contact } from "@/features/marketing/components/contact";
export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Treatments />
      <Catalog />
      <About />
      <Values />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
}
