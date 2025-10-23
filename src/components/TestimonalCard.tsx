import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  variant?: "dark" | "light";
}

export default function TestimonialCard({
  quote,
  author,
  title,
  variant = "light",
}: TestimonialCardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`rounded-lg p-8 transition-all ${
        isDark ? "bg-slate-900 text-white" : "bg-slate-100 text-foreground"
      }`}
    >
      {/* Quote Icon */}
      <div className="mb-6">
        <Quote
          size={40}
          className={isDark ? "text-teal-400" : "text-slate-400"}
          fill={isDark ? "currentColor" : "none"}
        />
      </div>

      {/* Quote Text */}
      <p
        className={`text-base leading-relaxed mb-6 ${
          isDark ? "text-gray-200" : "text-slate-700"
        }`}
      >
        "{quote}"
      </p>

      {/* Author Info */}
      <div>
        <p
          className={`font-semibold ${
            isDark ? "text-white" : "text-foreground"
          }`}
        >
          {author}
        </p>
        <p className={`text-sm ${isDark ? "text-gray-400" : "text-slate-600"}`}>
          {title}
        </p>
      </div>
    </div>
  );
}
