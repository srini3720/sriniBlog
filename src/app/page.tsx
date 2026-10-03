import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/footer";
import {
  About,
  Contact,
  Experience,
  Projects,
  Skills,
  Writing,
} from "@/components/landing/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
