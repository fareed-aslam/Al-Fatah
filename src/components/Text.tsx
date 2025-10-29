"use client";
import { Orbitron } from "next/font/google";
import { motion } from "framer-motion";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Text() {
  return (
    <div className="w-full py-24 bg-white text-zinc-500 flex flex-col items-center justify-center overflow-hidden">
      {/* --- Static Heading --- */}
      <div className="relative text-center">
        <h1
          className={`${orbitron.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-zinc-300 tracking-wider`}
        >
          AL FATAH DENTAL CARE
        </h1>

        {/* --- Animated Underline --- */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 0.9,
            ease: [0.45, 0, 0.55, 1],
          }}
          viewport={{ once: false, amount: 0.5 }} // 👈 replay every time visible
          className="absolute left-1/2 bottom-[-10px] h-[3px] w-[70%] -translate-x-1/2 bg-teal-500 rounded-full origin-center"
        />
      </div>

      {/* --- Animated Stats Line --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: false, amount: 0.5 }} // 👈 animate every view
        className="mt-8 flex flex-wrap justify-center items-center gap-3 text-center"
      >
        {[
          "Since 2016",
          "Trusted by Thousands",
          "Over 8000 Satisfied Patients",
        ].map((text, i) => (
          <motion.span
            key={text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
            className={`${
              text.includes("•")
                ? "text-zinc-400 font-medium"
                : "text-teal-600 font-semibold"
            } text-xl sm:text-2xl`}
          >
            {text}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
