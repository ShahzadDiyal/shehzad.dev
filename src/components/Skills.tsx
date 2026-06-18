import React, { useState } from "react";
import { SKILL_GROUPS } from "../data";
import { Server, Layout, Database, Cpu, Cloud, ToggleLeft, Activity, Info } from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getIcon = (category: string) => {
    switch (category) {
      case "Backend Architecture":
        return <Server className="w-5 h-5" />;
      case "Frontend Engineering":
        return <Layout className="w-5 h-5" />;
      case "Databases & Storage":
        return <Database className="w-5 h-5" />;
      case "AI & Modern Integrations":
        return <Cpu className="w-5 h-5 text-brand-accent" />;
      case "DevOps & Cloud Systems":
        return <Cloud className="w-5 h-5" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  // Quick explanations for skills to show senior mastery!
  const getSkillDesc = (name: string) => {
    const descMap: { [key: string]: string } = {
      "Node.js (Next-tier)": "Vast expertise in event loop tuning, cluster orchestration (PM2), asynchronous structures, and streams.",
      "TypeScript": "Rigid code typing schemas, complex generics, brand types, custom decorators, and strict compilation checks.",
      "Express.js": "High-throughput API routing structures, custom security middlewares, error handlers, and rate limiting.",
      "REST APIs & SOAP": "Idempotent resource verbs, nested routers, query parameter parsing, and complete OpenAPI/Swagger specifications.",
      "WebSockets / Socket.io": "High-speed bidirectional event pipelines, authorization handshake gates, and active chat syncing.",
      "Scale Microservices": "Event-driven, asynchronous workers communicating via queue adapters, containerized under clean networks.",
      "React.js (v18/19)": "Strict state boundaries, useTransition, useDeferredValue, custom hooks optimization, and layout effects.",
      "Next.js": "App Router configurations, Server components data fetching, route boundaries, and static pre-rendering.",
      "Tailwind CSS & v4": "Tailwind configuration layers, v4 import pipelines, custom design tokens, and highly structured mobile responsive classes.",
      "Redux Toolkit / Context": "Global immutable state layers, asynchronous thunk integrations, slice creations, and local caches.",
      "Framer Motion": "Complex nested orchestration delays, staggered child entry trees, layout transitions and exit animations.",
      "Responsive UI": "Fluid designs ensuring comfortable touch targets on mobile and high-density layouts on ultra-wide screens.",
      "PostgreSQL": "SQL index tuning, composite attributes, custom views, stored procedures, and secure database pooling.",
      "MongoDB": "Schemaless collection designs, heavy projection pipelines, sharding, and optimized search indices.",
      "Redis Caching": "High performance in-memory key-value lookups, session states database caches, and pub-sub pipelines.",
      "Firebase (Firestore/Auth)": "Instant cloud real-time updates, secure rules config, and multi-provider client authentications.",
      "OpenAI API (GPT Models)": "Dynamic prompt engineering pipelines, function calling routines, extraction schemas, and model completions.",
      "Anthropic / Claude APIs": "Rich context window prompting, complex reasoning, system configurations, and structured output parsing.",
      "Gemini SDK Integration": "Official @google/genai implementations, server-side proxies, chat streaming, and search grounding.",
      "Prompt Engineering & Agents": "Establishing strict boundaries, self-correcting logic, chain-of-thought patterns, and execution workers.",
      "Docker Containerization": "Clean multi-stage Dockerfiles, Docker Compose orchestrations, microservices isolation, and shared volumes.",
      "AWS S3 / EC2": "Secure S3 bucket attachments, EC2 Linux setups, security groups editing, and light load-balancing.",
      "GitHub Actions CI/CD": "Continuous compilation, automated linters validation, Docker image pushes, and server hook deployment.",
      "Vercel / VPS Setup": "Standalone reverse proxies (nginx), SSL certification configs, systemctl process, and cloud deployments."
    };
    return descMap[name] || "Expert level application and execution.";
  };

  return (
    <section id="skills" className="py-20 dark:bg-brand-dark relative overflow-hidden">
      
      {/* Absolute graphic overlays */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs text-brand-secondary dark:text-brand-accent tracking-widest uppercase font-bold">
            02 // Technical Core
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Specialized Skills &amp; Technology Stack
          </p>
          <div className="w-12 h-1 bg-brand-secondary dark:bg-brand-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {SKILL_GROUPS.map((group, index) => (
            <button
              key={group.category}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === index
                  ? "bg-brand-secondary text-white shadow-lg shadow-brand-secondary/20"
                  : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800/50"
              }`}
            >
              {getIcon(group.category)}
              <span>{group.category.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Main Skills Dashboard Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Progress Bars (Left Side) - Takes 7/12 columns */}
          <div className="lg:col-span-7 bg-white/60 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200/60 dark:border-white/5 rounded-2xl p-6 shadow-md space-y-6">
            <h3 className="text-base font-bold text-slate-800 dark:text-white flex items-center space-x-2">
              <span>{getIcon(SKILL_GROUPS[activeTab].category)}</span>
              <span>{SKILL_GROUPS[activeTab].category} Spectrum</span>
            </h3>

            <div className="space-y-5">
              {SKILL_GROUPS[activeTab].skills.map((skill) => (
                <div
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="space-y-2 group cursor-help transition-all"
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-brand-accent transition-colors">
                      {skill.name}
                    </span>
                    <span className="font-mono text-slate-500 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Track Area */}
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200/20 dark:border-slate-800/30">
                    <div
                      className="h-full bg-linear-to-r from-brand-secondary to-brand-accent rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Drill Down Card (Right Side) - Takes 5/12 columns */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B1120] to-slate-950/95 text-white rounded-2xl border border-white/5 p-6 flex flex-col justify-between relative overflow-hidden shadow-lg min-h-[300px]">
            <div>
              <div className="flex items-center space-x-2 text-brand-accent border-b border-white/10 pb-3 mb-4">
                <Info className="w-4 h-4 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Professional Breakdown
                </span>
              </div>

              {hoveredSkill ? (
                <div className="space-y-3 animate-fade-in">
                  <h4 className="text-sm font-bold text-brand-accent tracking-tight">
                    {hoveredSkill}
                  </h4>
                  <p className="text-xs text-slate-350 leading-relaxed font-sans">
                    {getSkillDesc(hoveredSkill)}
                  </p>
                </div>
              ) : (
                <div className="text-center py-10 space-y-3">
                  <Cpu className="w-10 h-10 text-brand-secondary mx-auto animate-bounce" />
                  <p className="text-xs text-slate-400 font-sans max-w-xs mx-auto">
                    Hover over any skill block on the left panel to trigger a deep technical breakdown of Muhammad Shahzad's field competence.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom mini-dashboard stats */}
            <div className="pt-4 border-t border-white/10 mt-6 grid grid-cols-2 gap-4 text-center">
              <div>
                <span className="block text-2xl font-bold font-mono text-brand-accent">95%</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Clean Code Index</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-mono text-indigo-400">REST/WS</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Native Protocols</span>
              </div>
            </div>

            {/* Tiny accent glow */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-brand-secondary/20 rounded-full blur-2xl" />
          </div>

        </div>

      </div>
    </section>
  );
}
