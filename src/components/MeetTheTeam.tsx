import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function MeetTheTeam() {
  return (
    <div className="flex flex-col items-center py-20 bg-white">
      {/* Top Text */}
      <p
        className="text-[#555555] uppercase font-semibold text-[14px] tracking-[0.5em] mb-3"
        style={{ fontFamily: "Public Sans" }}
      >
        Meet The Team
      </p>

      {/* Main Heading */}
      <h2
        className="text-[32px] md:text-[52px]  text-center text-[#1B1E23] leading-[62px] mb-12"
        style={{ fontFamily: "Manrope" }}
      >
        <span className="font-bold">Expert</span> Team and Partners
      </h2>

      {/* Team Members */}
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        {/* --- Member 1 --- */}
        <div className="relative w-[300px] h-[370px] rounded-[10px] overflow-hidden shadow-md group cursor-pointer transition-all">
          <Image
            src={"/woman.png"}
            alt="Daniel L. Braddock"
            fill
            className="object-cover rounded-[10px]"
            style={{
              opacity: 1,
              transform: "rotate(0deg)",
            }}
          />

          {/* Info Box */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#2DC6A5] text-white p-4 rounded-t-[10px] flex flex-col items-start transition-all duration-300 group-hover:p-6">
            <h3 className="font-semibold text-[14px] leading-none mb-1">
              Dr faiza jamali
            </h3>
            <p className="text-[12px] mb-2">
              BDS, RDS, Clearpath Certified Dr faiza jamali
            </p>

            {/* Icons (hidden by default, show on hover) */}
            <div className="flex items-center gap-3 text-white text-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <FaFacebookF className="hover:scale-110 transition-transform" />
              <FaTwitter className="hover:scale-110 transition-transform" />
              <FaLinkedinIn className="hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>

        {/* --- Member 2 --- */}
        <div className="relative w-[300px] h-[370px] rounded-[10px] overflow-hidden shadow-md group cursor-pointer transition-all">
          <Image
            src={"/woman.png"}
            alt="Michael B. Reader"
            fill
            className="object-cover rounded-[10px]"
            style={{
              opacity: 1,
              transform: "rotate(0deg)",
            }}
          />

          {/* Info Box */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/90 text-[#1B1E23] p-4 rounded-t-[10px] flex flex-col items-start transition-all duration-300 group-hover:p-6">
            <h3 className="font-semibold text-[14px] leading-none mb-1">
              Dr. Shaista Zafar
            </h3>
            <p className="text-[12px] mb-2">
              BDS, RDS C-implant C-Endo Clear aligners certified Dr. Shaista
              Zafar
            </p>

            {/* Icons (hidden by default, show on hover) */}
            <div className="flex items-center gap-3 text-[#1B1E23] text-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <FaFacebookF className="hover:scale-110 transition-transform" />
              <FaTwitter className="hover:scale-110 transition-transform" />
              <FaLinkedinIn className="hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
