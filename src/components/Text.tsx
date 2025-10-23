"use client";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Text() {
  return (
    <div className="w-full py-24 bg-white text-zinc-500 flex items-center justify-center">
      <h1
        className={`${orbitron.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-zinc-300 text-center tracking-wider`}
      >
        AL FATAH DENTAL CARE
      </h1>
    </div>
  );
}
