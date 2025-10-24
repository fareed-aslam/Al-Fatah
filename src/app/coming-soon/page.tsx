// pages/coming-soon.jsx
import Link from "next/link";
import HeroDark from "@/components/HeroDark";

export default function ComingSoon() {
  return (
    <div className="w-full min-h-screen bg-white text-black">
      <HeroDark text="Coming Soon" />
      <div className="flex flex-col justify-center items-center my-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-teal-400">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl mb-8 text-center text-black/80">
          We're working hard to bring something amazing. Stay tuned!
        </p>
        <Link href="/">
          <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
