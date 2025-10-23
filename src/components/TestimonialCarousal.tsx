"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonalCard";

const testimonials = [
  {
    id: 1,
    quote:
      "Al Fatah Dental Care completely changed how I feel about visiting the dentist. The staff is kind, professional, and made my treatment totally pain-free!",
    author: "Sara Ahmed",
    title: "Patient – Teeth Whitening",
    variant: "light" as const,
  },
  {
    id: 2,
    quote:
      "I got my dental implants done here and couldn’t be happier. They look and feel completely natural — truly the best dental experience I’ve had in Karachi.",
    author: "Muhammad Ali",
    title: "Patient – Dental Implants",
    variant: "light" as const,
  },
  {
    id: 3,
    quote:
      "The doctors at Al Fatah Dental Care are incredibly skilled. My braces journey was smooth, and the results exceeded my expectations!",
    author: "Ayesha Khan",
    title: "Patient – Braces Treatment",
    variant: "light" as const,
  },
  {
    id: 4,
    quote:
      "From the clean environment to the friendly staff, everything was perfect. I highly recommend Al Fatah Dental Care for anyone looking for reliable dental care in Karachi.",
    author: "Hassan Raza",
    title: "Patient – General Checkup",
    variant: "light" as const,
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Show 3 cards at a time, centered on current
  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + testimonials.length) % testimonials.length;
      cards.push({ ...testimonials[index], position: i });
    }
    return cards;
  };

  return (
    <section className="py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-teal-500 uppercase mb-4">
            Customer Feedback
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            <span className="text-foreground">What Customer</span>
            <span className="text-muted-foreground ml-2">Say About Us</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex justify-center items-center gap-4 md:gap-6 mb-8">
            {getVisibleCards().map((card) => (
              <div
                key={card.id}
                className={`transition-all duration-300 ${
                  card.position === 0
                    ? "w-full md:w-1/3 scale-100 z-10"
                    : "hidden md:block md:w-1/4 scale-90 opacity-60"
                }`}
              >
                <TestimonialCard
                  quote={card.quote}
                  author={card.author}
                  title={card.title}
                  variant={card.variant}
                />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-foreground w-8"
                      : "bg-muted-foreground hover:bg-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
