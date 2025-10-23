import About from "@/components/About";
import { FAQSection } from "@/components/FAQSection";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurServices from "@/components/Services";
import Text from "@/components/Text";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <About />
      <Text />
      <WhatWeDo />
      <OurServices />
      <FAQSection/>
    </main>
  );
}
