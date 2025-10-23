import Image from "next/image";
import React from "react";

const HeroDark = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full grid md:grid-cols-2 gap-0">
        {/* LEFT HALF */}
        <div className="bg-gray-900 text-white flex flex-col justify-center pl-40 sm:pl-44 lg:pl-56 pr-6 sm:pr-8 lg:pr-12 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl md:ml-0 md:mr-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              About <span className="font-light">Company</span>
            </h1>
            <div className="flex items-center space-x-2 text-xs sm:text-sm">
              <a href="#" className="hover:text-teal-400 transition">
                Home
              </a>
              <span className="text-teal-400">›</span>
              <span className="text-teal-400">About Company</span>
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
