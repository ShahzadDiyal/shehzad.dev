import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { Award, Briefcase, Globe2, Target, Milestone, MapPin, Compass } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function About() {
  const [selectedDest, setSelectedDest] = useState("remote");

  const relocations = [
    { id: "remote", city: "Worldwide / Remote", details: "Highly seasoned in remote setups, Slack/Discord collaboration, and asynchronous task delivery." },
    { id: "uk", city: "London, UK", details: "Open to sponsor relocations. Active communication aligned with BST timelines." },
    { id: "germany", city: "Berlin, Germany", details: "Ready for EU-based corporate integration or remote engagements." },
    { id: "pk", city: "Islamabad, Pakistan", details: "Current local physical headquarters. Available for state agencies/local lead posts." },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-slate-50 dark:bg-brand-dark/40 border-y border-slate-200/50 dark:border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs text-brand-secondary dark:text-brand-accent tracking-widest uppercase font-bold">
            01 // About Me
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering High-Performance Business Value
          </p>
          <div className="w-12 h-1 bg-brand-secondary dark:bg-brand-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Summary Column (Left) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Who is Muhammad Shahzad?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              I am a resilient and technical Full Stack developer driven by code perfection. I specialize in backend efficiency, REST and WebSockets API creation, and translating complex LLM behaviors into actionable business apps.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              My core ethos is structural optimization: whether rewriting slow database queries, setting up multi-worker clustering, or isolating UI layers to maintain a full 60FPS. I aim to create architectures that aren't just functional, but scalable under heavy enterprise use.
            </p>

            {/* Simulated timeline mini milestones */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Key Professional Milestones
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-2.5">
                  <div className="p-1 rounded-md bg-brand-secondary/15 text-brand-secondary mt-0.5">
                    <Milestone className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800 dark:text-white">Enterprise Architecting</h5>
                    <p className="text-[11px] text-slate-500">Formulated accounting and inventory micro-systems.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <div className="p-1 rounded-md bg-brand-accent/15 text-slate-950 mt-0.5">
                    <Target className="w-4 h-4 text-emerald-600 dark:text-brand-accent" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800 dark:text-white">AI Deployment Specialty</h5>
                    <p className="text-[11px] text-slate-500">Fine-tuned complex routing strategies on Gemini endpoints.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stat Board & Relocator (Right) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Bento Grid Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200/60 dark:border-white/5 hover:border-brand-secondary/35 dark:hover:border-brand-secondary/35 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <Briefcase className="w-5 h-5 text-brand-secondary mb-2" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                  <Counter value={2} suffix=".5+" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Years Experience</div>
              </div>

              <div className="p-4 rounded-xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200/60 dark:border-white/5 hover:border-brand-accent/35 dark:hover:border-brand-accent/35 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <Award className="w-5 h-5 text-brand-accent mb-2" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                  <Counter value={10} suffix="+" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Projects Delivered</div>
              </div>

              <div className="p-4 rounded-xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200/60 dark:border-white/5 hover:border-brand-secondary/35 dark:hover:border-brand-secondary/35 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <Globe2 className="w-5 h-5 text-indigo-405 dark:text-indigo-400 mb-2" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                  <Counter value={8} suffix="+" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Global Clients</div>
              </div>

              <div className="p-4 rounded-xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200/60 dark:border-white/5 hover:border-brand-accent/35 dark:hover:border-brand-accent/35 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <Milestone className="w-5 h-5 text-amber-500 mb-2" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                  <Counter value={100} suffix="%" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Uptime Commit</div>
              </div>
            </div>

            {/* Live Relocation and Global Target selection Widget */}
            <div className="p-5 rounded-xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200/60 dark:border-white/5 shadow-md shadow-slate-900/5 dark:shadow-none space-y-4">
              <div className="flex items-center space-x-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <Compass className="w-4 h-4 text-brand-accent animate-spin-slow" />
                <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider font-mono">
                  Relocation / Global Setup
                </h4>
              </div>
              <p className="text-[11.5px] text-slate-500 leading-relaxed">
                Shahzad is dynamic and highly relocatable. Select a location to view his compatibility:
              </p>
              
              <div className="flex flex-wrap gap-1.5 pb-2">
                {relocations.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedDest(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-200 ${
                      selectedDest === item.id
                        ? "bg-brand-secondary text-white shadow-sm"
                        : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {item.city.split(",")[0]}
                  </button>
                ))}
              </div>

              {/* Location Feedback log */}
              <div className="p-3.5 bg-slate-50/50 dark:bg-brand-dark/80 rounded-xl border border-slate-100/80 dark:border-white/5 flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-slate-800 dark:text-white">
                    {relocations.find((r) => r.id === selectedDest)?.city}
                  </span>
                  <p className="mt-1 text-slate-500">
                    {relocations.find((r) => r.id === selectedDest)?.details}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
