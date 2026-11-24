import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { Services } from "@/components/sections/Services";
import { Workshop } from "@/components/sections/Workshop";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Workshop />
      <Gallery />
      <Contact />
      <Location />
    </main>
  );
}
