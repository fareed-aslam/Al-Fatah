// app/page.tsx or pages/homepage.tsx (if using pages directory)
"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Text from "@/components/Text";
import WhatWeDo from "@/components/WhatWeDo";
import OurServices from "@/components/Services";
import { FAQSection } from "@/components/FAQSection";
import TestimonialCarousel from "@/components/TestimonialCarousal";
import BlogNewsSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <About />
      <Text />
      <WhatWeDo />
      <OurServices />
      <FAQSection />
      <TestimonialCarousel />
      <BlogNewsSection />
    </main>
  );
}
