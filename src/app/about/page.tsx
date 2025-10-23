import Image from "next/image";
import React from "react";
// Assuming HeroDark is imported and defined elsewhere
import MeetTheTeam from "@/components/MeetTheTeam";
import HeroDark from "@/components/HeroDark";
HeroDark
const AboutPage = () => {
  // The specific color for //bakchodi #3BBCA6.
  const accentColorClass = "#3BBCA6";

  return (
    <div className="min-h-screen bg-white">
      <HeroDark text="About us"/>

      {/* --- Main Content Section (White area) --- */}

      <main className="container mx-auto px-4 py-12 lg:py-20 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* LEFT SIDE: Mission Statement and Large Image */}
          <div className="flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-2">
              About Company
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-8">
              We Work For Building a Brighter Future Together and Grow Business
            </h2>

            {/* Image of the two people */}
            <div
              className="relative w-full overflow-hidden rounded-lg shadow-xl mt-4"
              style={{ height: "400px" }}
            >
              <Image
                src="/whatwedo.png"
                alt="Two smiling business professionals"
                fill
                className="object-cover rounded-lg"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Experience, Text Block, and Consulting Image */}
          <div className="mt-10 lg:mt-0">
            <div className="mb-8">
              <p
                className="font-extralight text-7xl md:text-[100px] lg:text-[140px] leading-none tracking-[-0.02em]"
                style={{ color: accentColorClass }} // #3BBCA6
              >
                25+
              </p>
              <p className="text-lg text-gray-700 font-semibold mt-2">
                Years Of Experience In Business Consulting
              </p>
            </div>

            {/* Consulting Image (meeting) */}
            <div
              className="relative w-full overflow-hidden rounded-lg mb-6 shadow-md"
              style={{ height: "350px" }}
            >
              <Image
                src="/about2.png"
                alt="Business consulting meeting"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Block and Checkmarks */}
            <div className="text-gray-600 space-y-4">
              <p>
                Business consulting services are designed help organizations
                navigate challenges, streamline operations a achieve long-term
                success we work closely with clients to identify areas.
              </p>

              <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm font-medium">
                {["Customized Solutions", "Expertise & Experience"].map(
                  (text) => (
                    <span
                      key={text}
                      className="flex items-center text-gray-800"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke={accentColorClass}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {text}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#F3F3F3] rounded-2xl mt-12 md:mt-20 p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 shadow-sm">
          {/* LEFT SIDE */}
          <div className="flex-1 space-y-8">
            {/* Company Mission */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-teal-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904 9 18.75l-2.25-6.75H3l4.5-6.75h6L18 12H9.813z"
                    />
                  </svg>
                </div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  Company Mission
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to empower businesses by providing innovative,
                data-driven solutions that drive growth, enhance efficiency, and
                create lasting value. We are committed to delivering exceptional
                service and personalized experiences.
              </p>
              <hr className="mt-5 border-gray-300" />
            </div>

            {/* Company Vision */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-teal-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  Company Vision & Goals
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our vision is to be a global leader delivering transformative
                business solutions that empower organizations to reach their
                full potential. We strive to set a standard for innovation,
                excellence, and customer success by continuously evolving.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE (Next.js Image) */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full h-[250px] sm:h-[400px] overflow-hidden">
              <Image
                src="/table.png"
                alt="Company Team"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        <MeetTheTeam />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default AboutPage;
