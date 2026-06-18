import React from "react";
import { SERVICES } from "../data";
import { Globe, Layers, Cpu, Code2, Users, CloudLightning, Activity } from "lucide-react";

export default function Services() {
  const getServiceIcon = (iconName: string) => {
    const cls = "w-6 h-6 text-brand-secondary dark:text-brand-accent transition-transform duration-300 group-hover:scale-110";
    switch (iconName) {
      case "Globe":
        return <Globe className={cls} />;
      case "Layers":
        return <Layers className={cls} />;
      case "Cpu":
        return <Cpu className={cls} />;
      case "Code2":
        return <Code2 className={cls} />;
      case "Users":
        return <Users className={cls} />;
      case "CloudLightning":
        return <CloudLightning className={cls} />;
      default:
        return <Activity className={cls} />;
    }
  };

  return (
    <section
      id="services"
      className="py-20 bg-slate-50 dark:bg-brand-dark/40 border-y border-slate-200/50 dark:border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs text-brand-secondary dark:text-brand-accent tracking-widest uppercase font-bold">
            06 // Capabilities
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Consultancy &amp; Core Services
          </p>
          <div className="w-12 h-1 bg-brand-secondary dark:bg-brand-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="bg-white/60 dark:bg-white/[0.02] backdrop-blur-md border border-slate-200/60 dark:border-white/5 p-6 sm:p-8 rounded-2xl shadow-xs hover:shadow-xl hover:shadow-brand-secondary/5 transition-all duration-300 group hover:-translate-y-1 hover:border-brand-secondary/30 dark:hover:border-brand-secondary/30 relative overflow-hidden"
            >
              {/* Icon area */}
              <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 dark:bg-brand-accent/10 border border-brand-secondary/20 dark:border-brand-accent/20 flex items-center justify-center mb-6">
                {getServiceIcon(serv.iconName)}
              </div>

              {/* Service title and description */}
              <div className="space-y-3 relative z-10">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-secondary dark:group-hover:text-brand-accent transition-colors duration-200 font-display">
                  {serv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-505 dark:text-slate-350 leading-relaxed font-sans">
                  {serv.description}
                </p>
              </div>

              {/* Subtle visual bento background glow */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-brand-secondary/5 dark:bg-brand-accent/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-accent/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
