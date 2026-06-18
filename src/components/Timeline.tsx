import React, { useState } from "react";
import { EXPERIENCES } from "../data";
import { Briefcase, Calendar, ChevronRight, MapPin, Sparkle, Milestone } from "lucide-react";

export default function Timeline() {
  const [selectedExp, setSelectedExp] = useState<string>("dh");

  return (
    <section
      id="experience"
      className="py-20 bg-slate-50 dark:bg-brand-dark/40 border-y border-slate-200/50 dark:border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs text-brand-secondary dark:text-brand-accent tracking-widest uppercase font-bold">
            03 // Timeline
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience Timeline
          </p>
          <div className="w-12 h-1 bg-brand-secondary dark:bg-brand-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic Vertical Timeline and Detail layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Click Roles Navigation (Left Side) - Column 4/12 */}
          <div className="lg:col-span-4 bg-white/60 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200/60 dark:border-white/5 p-4 rounded-2xl shadow-sm space-y-2">
            <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-3 px-2">
              Corporate Record
            </span>
            {EXPERIENCES.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedExp(exp.id)}
                className={`w-full text-left p-3.5 rounded-xl transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                  selectedExp === exp.id
                    ? "bg-brand-secondary text-white shadow-md shadow-brand-secondary/15"
                    : "hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300"
                }`}
              >
                <div className="space-y-1">
                  <h4 className="text-xs font-bold font-display uppercase tracking-wider group-hover:translate-x-0.5 transition-transform">
                    {exp.company.split(" ")[0]}
                  </h4>
                  <p className={`text-[10px] font-mono ${
                    selectedExp === exp.id ? "text-brand-accent/90" : "text-slate-400"
                  }`}>
                    {exp.duration}
                  </p>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                  selectedExp === exp.id ? "rotate-90 text-brand-accent" : "text-slate-400 group-hover:translate-x-1"
                }`} />
              </button>
            ))}
          </div>

          {/* Expanded Core Details Display (Right Side) - Column 8/12 */}
          <div className="lg:col-span-8 bg-white/60 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200/60 dark:border-white/5 p-6 md:p-8 rounded-2xl shadow-md min-h-[420px] flex flex-col justify-between">
            {(() => {
              const current = EXPERIENCES.find((e) => e.id === selectedExp);
              if (!current) return null;
              return (
                <div className="space-y-6 animate-fade-in">
                  
                  {/* Job Title and Metadata */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-100 dark:border-slate-800 pb-4 gap-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold font-display text-slate-900 dark:text-white">
                        {current.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-slate-500 font-medium">
                        <span className="font-bold text-brand-secondary dark:text-brand-accent font-display">
                          @ {current.company}
                        </span>
                        <span className="hidden md:inline text-slate-300">•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{current.duration}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements and bullets */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                      Impact &amp; Key Deliverables
                    </h4>
                    <ul className="space-y-3.5">
                      {current.achievements.map((bullet, i) => (
                        <li key={i} className="flex items-start space-x-3 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                          <span className="p-1 rounded-full bg-brand-accent/15 mt-0.5 shrink-0">
                            <Sparkle className="w-3 h-3 text-emerald-600 dark:text-brand-accent" />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Tech Badges used in the role */}
                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2.5">
                      Core Technology Applied
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {current.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] font-mono tracking-wider bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/50 rounded-md hover:border-brand-accent/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
}
