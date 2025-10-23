"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 sm:pt-0 min-h-screen bg-black flex items-center">
      <div className="mx-auto w-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1 px-4 sm:px-6 lg:px-8  lg:ml-20">
            <div className="w-full">
              <h1 className="text-4xl  text-white sm:text-5xl lg:text-6xl font-bold leading-tight lg:text-left">
                Bright Smiles, Gentle Care, Trusted Experts{" "}
                <span className="text-teal-500">in Karachi</span>
              </h1>
            </div>
            <p className="text-muted-foreground text-base sm:text-base leading-relaxed max-w-md">
              Al Fatah Dental Care is one of Karachi’s leading dental clinics,
              combining expert treatments with a warm, caring environment. We
              help patients achieve healthy, confident smiles using advanced
              technology and professional care.
            </p>

            <button className="inline-flex bg-teal-500 w-max items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors">
              Book Your Appointment Today <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Image Section */}
          <div className="relative order-1 lg:order-2 h-96 lg:h-screen min-h-96">
            <div className="relative w-full h-full  overflow-hidden">
              <Image
                src="/hero.png"
                alt="Business team meeting"
                fill
                className="object-cover"
              />
            </div>

            {/* Testimonial Card */}
            <div className="absolute bg-white text-black bottom-6 left-6 bg-card rounded-lg p-4 shadow-xl max-w-50">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex -space-x-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/person1.png"
                      alt="Client 1"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/person2.png"
                      alt="Client 1"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/person3.png"
                      alt="Client 1"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <div className="w-full h-[2px] bg-gray-200"></div>
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold">100</span>
                  <sup className="text-sm font-semibold">%</sup>
                </div>
                <p className="text-sm text-muted-foreground">
                  Clients are Satisfied with the Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
