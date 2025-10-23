import { Bone, Sparkles, ShieldCheck, Cross } from "lucide-react";
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section className="w-full m-4 rounded-lg bg-linear-to-b from-white via-teal-50 to-teal-200 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-gray-600 mb-4">
            WHAT WE DO
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Bright Smiles, Gentle Care,
          </h1>
          <p className="text-4xl md:text-5xl text-gray-900">
            Trusted Experts in <span className="font-light">Karachi</span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-white/80 backdrop-blur-md p-4 rounded-xl gap-6 shadow-lg">
          {/* Left Card - Teal */}
          <div className="bg-teal-600 rounded-xl p-8 text-white flex flex-col justify-between shadow-md">
            <div>
              <div className="mb-6">
                <Cross className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Comprehensive Dental Care
              </h3>
              <div className="w-12 h-0.5 bg-white/40 mb-4"></div>
              <p className="text-sm leading-relaxed text-white/90">
                From dental implants to whitening and braces, we provide
                complete dental solutions under one roof. Our expert team
                ensures every patient feels comfortable, confident, and cared
                for.
              </p>
            </div>
          </div>

          {/* Middle Card - Image */}
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/whatwedo.png"
              alt="Al Fatah Dental Care Clinic"
              width={600}
              height={500}
              className="w-full h-full object-cover"
              sizes="100vw"
              priority
            />
          </div>

          {/* Right Card - Dark */}
          <div className="bg-gray-900 rounded-xl p-8 text-white flex flex-col justify-between shadow-md">
            <div>
              <div className="mb-6">
                <Sparkles className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Advanced & Gentle Treatments
              </h3>
              <div className="w-12 h-0.5 bg-white/40 mb-4"></div>
              <p className="text-sm leading-relaxed text-white/90">
                Using state-of-the-art technology, we offer safe, painless, and
                precise treatments for all ages. From zirconia crowns to
                invisible aligners, we bring innovation and comfort together.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
