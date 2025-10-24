"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "1",
    question:
      "How do dental implants at Al Fatah Dental Care compare with other options available in Karachi?",
    answer:
      "Our implants are high-quality, natural-looking, and long-lasting — designed to restore chewing function, confidence, and a complete smile.",
  },
  {
    id: "2",
    question: "Are zirconia crowns safe for all ages?",
    answer:
      "Yes, zirconia crowns are biocompatible, durable, and blend seamlessly with your natural teeth, making them safe for patients of all ages.",
  },
  {
    id: "3",
    question: "How do PFM crowns differ from zirconia crowns?",
    answer:
      "PFM (Porcelain Fused to Metal) crowns offer additional strength while maintaining a natural appearance — ideal for teeth that need extra durability compared to zirconia crowns.",
  },
  {
    id: "4",
    question: "Can removable dentures feel natural and comfortable?",
    answer:
      "Yes, our custom-made dentures are crafted for a precise fit, allowing clear speech and normal eating while ensuring a natural look and comfortable wear.",
  },
  {
    id: "5",
    question:
      "What makes whitening and scaling treatments at Al Fatah Dental Care unique?",
    answer:
      "We combine professional whitening with deep cleaning to remove stains, plaque, and tartar while promoting long-term gum and oral health.",
  },
  {
    id: "6",
    question:
      "Are braces and invisible aligners effective for all types of misalignments?",
    answer:
      "Yes, we offer both traditional braces and invisible aligners to correct a wide range of alignment issues through personalized orthodontic treatment plans.",
  },
  {
    id: "7",
    question: "How do you ensure patient comfort during procedures?",
    answer:
      "We use modern anesthesia, gentle dental techniques, and compassionate care to ensure your comfort and reduce stress throughout every procedure.",
  },
  {
    id: "8",
    question: "Is it safe to receive dental treatments in Karachi?",
    answer:
      "Absolutely. Our clinic follows strict sterilization and hygiene protocols using international-grade equipment and materials to guarantee patient safety.",
  },
  {
    id: "9",
    question:
      "Can cosmetic and restorative treatments be combined for a complete smile makeover?",
    answer:
      "Yes, we create customized smile makeover plans that combine multiple procedures — such as whitening, crowns, and implants — for a full transformation.",
  },
  {
    id: "10",
    question: "How do I know which treatment is right for me?",
    answer:
      "Our experienced dentists conduct a thorough evaluation of your teeth and gums to recommend a clear, personalized treatment plan tailored to your needs.",
  },
];

export function FAQSection() {
  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-950 via-zinc-800 to-zinc-950 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="flex flex-col justify-start">
            <div className="mb-8">
              <p className="text-teal-400 text-sm font-semibold tracking-widest mb-4">
                F A Q S
              </p>
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-teal-400">Frequently Asked</span>
                <br />
                <span className="text-white">Questions</span>
              </h1>
              <p className="text-gray-400 text-base leading-relaxed max-w-md">
                Get clarity on the most common questions clients ask services.
              </p>
            </div>
            <Link href="/contact">
              <button className="w-max flex items-center bg-teal-400 hover:bg-cyan-500 text-zinc-900 font-semibold px-6 py-2 rounded-md transition-colors">
                Get a Quote
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </Link>
          </div>

          {/* Right Section - Shadcn Accordion */}
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border border-zinc-700 rounded-lg bg-zinc-800/60 backdrop-blur-sm data-[state=open]:border-teal-500 transition-all"
              >
                <AccordionTrigger className="px-6 py-4 text-white text-left hover:bg-zinc-700/40">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-300 text-sm leading-relaxed bg-zinc-900/30 border-t border-zinc-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
