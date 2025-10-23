import Image from "next/image";
import React from "react";
interface HeroDarkProps {
  text: string;
}
const HeroDark = ({ text }: HeroDarkProps) => {
  // Split the string into words
  const words = text.split(" ");
  const firstWord = words[0] || "";
  const rest = words.slice(1).join(" "); // join remaining words

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full grid md:grid-cols-2 gap-0">
        {/* LEFT HALF */}
        <div className="bg-gray-900 text-white flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl md:ml-0 md:mr-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4">
                <span className="font-light">{firstWord}</span>{" "}
                <span className="font-bold">{rest}</span>
            </h1>
            <div className="flex items-center space-x-2 text-sm sm:text-base">
              <a href="#" className="hover:text-teal-400 transition">
                Home
              </a>
              <span className="text-teal-400">›</span>
              <span className="text-teal-400">{text}</span>
            </div>
          </div>
        </div>

        {/* RIGHT HALF */}
        <div className="relative w-full h-[350px] sm:h-[450px] md:h-auto min-h-[400px]">
          <Image
            src="/hero.png"
            alt="Business team meeting"
            fill
            className="object-cover object-top w-full h-full"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroDark;
