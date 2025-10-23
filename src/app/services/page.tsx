// app/services/page.tsx (App Router) or pages/services.tsx (Pages Router)
"use client";

import { FAQSection } from "@/components/FAQSection";
import HeroDark from "@/components/HeroDark";
import OurServices from "@/components/Services";
import ServicesExtra from "@/components/ServicesExtra";



export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero / Page Title Section */}
      <HeroDark text="Our Services" />
      <OurServices/>
      <ServicesExtra />
      <FAQSection />
      {/* Services Section */}
      {/* Footer */}
    </main>
  );
}
