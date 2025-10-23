import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 px-4 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-teal-600 text-sm font-semibold tracking-widest mb-4">
              ABOUT US
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Excellence in Dentistry in the{" "}
              <span className="font-light">Heart of Karachi</span>
            </h2>
            <p className="text-zinc-700 text-base mb-8 leading-relaxed">
              Al Fatah Dental Care has earned a reputation in Karachi for
              delivering exceptional dental care with compassion and precision.
              Our highly skilled dentists bring years of experience in general,
              cosmetic, and restorative dentistry. Every smile we care for
              reflects our commitment to comfort, safety, and patient
              satisfaction.
            </p>
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Learn More &gt;
            </button>
          </div>

          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/about.png" // replace with your actual dental clinic image
              alt="Al Fatah Dental Care Clinic"
              width={600}
              height={500}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
