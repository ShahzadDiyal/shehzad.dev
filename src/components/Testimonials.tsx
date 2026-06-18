import React, { useState, useEffect } from "react";
import { TESTIMONIALS } from "../data";
import { ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto scroll testimonials
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  const getGradientAvatar = (seed: string) => {
    // Generate lovely colorful gradient background initials for avatars!
    const initials = seed.substring(0, 2).toUpperCase();
    const gradients = [
      "from-brand-secondary to-indigo-500",
      "from-brand-accent to-teal-500 text-slate-950",
      "from-amber-400 to-orange-500",
    ];
    const index = seed.charCodeAt(0) % gradients.length;
    return (
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${gradients[index]} flex items-center justify-center font-bold text-sm shadow-md text-white shrink-0 font-mono select-none uppercase`}>
        {initials}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 dark:bg-brand-dark overflow-hidden relative">
      
      {/* Visual background lights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs text-brand-secondary dark:text-brand-accent tracking-widest uppercase font-bold">
            07 // Endorsements
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Client &amp; Team Testimonials
          </p>
          <div className="w-12 h-1 bg-brand-secondary dark:bg-brand-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Area container */}
        <div className="max-w-4xl mx-auto relative px-6 md:px-12 py-10 rounded-2xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200/60 dark:border-white/5 shadow-sm flex flex-col justify-between min-h-[320px]">
          
          {/* Quote Icon watermark */}
          <div className="absolute top-6 right-8 text-brand-secondary/15 dark:text-brand-accent/10">
            <Quote className="w-20 h-20 rotate-180" />
          </div>

          <div className="animate-fade-in space-y-6">
            
            <Quote className="w-8 h-8 text-brand-secondary dark:text-brand-accent mb-2" />
            
            {/* Project quotes body */}
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200 italic font-medium leading-relaxed font-sans">
              "{TESTIMONIALS[activeIndex].body}"
            </p>

            {/* Endorser details */}
            <div className="flex items-center space-x-3 text-xs sm:text-sm pt-4 border-t border-slate-100 dark:border-slate-800">
              {getGradientAvatar(TESTIMONIALS[activeIndex].author)}
              <div>
                <h4 className="font-extrabold text-slate-900 dark:text-white font-display">
                  {TESTIMONIALS[activeIndex].author}
                </h4>
                <p className="text-xs text-slate-505 dark:text-slate-400 font-sans font-medium">
                  {TESTIMONIALS[activeIndex].role} <span className="text-brand-secondary dark:text-brand-accent font-bold">@ {TESTIMONIALS[activeIndex].company}</span>
                </p>
              </div>
            </div>

          </div>

          {/* Action Carousel buttons */}
          <div className="flex items-center justify-between pt-8">
            
            {/* Left/Right controls */}
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-300 hover:text-brand-accent hover:border-brand-accent/50 transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-300 hover:text-brand-accent hover:border-brand-accent/50 transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Indicator Dots */}
            <div className="flex items-center space-x-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                    idx === activeIndex
                      ? "bg-brand-secondary dark:bg-brand-accent w-5"
                      : "bg-slate-300 dark:bg-slate-850"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
