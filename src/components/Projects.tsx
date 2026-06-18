import React, { useState } from "react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { Github, ExternalLink, BookOpen, X, Rocket, Cpu, BarChart2 } from "lucide-react";

export default function Projects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleCloseModal = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <section id="projects" className="py-20 dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs text-brand-secondary dark:text-brand-accent tracking-widest uppercase font-bold">
            04 // Portfolio
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects &amp; Ventures
          </p>
          <div className="w-12 h-1 bg-brand-secondary dark:bg-brand-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white/60 dark:bg-white/[0.02] backdrop-blur-md border border-slate-200/60 dark:border-white/5 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl dark:hover:shadow-[#00F5D4]/5 flex flex-col justify-between group transition-all duration-300 transform hover:-translate-y-1.5 hover:border-brand-accent/30 dark:hover:border-brand-accent/30 glow-card"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              
              {/* Card Image and category */}
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-[10px] uppercase font-mono tracking-wider font-semibold text-brand-accent px-2.5 py-1 rounded-md border border-slate-700/50">
                  {project.category}
                </span>
              </div>

              {/* Card Core context */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-505 dark:text-slate-300 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[9.5px] font-mono tracking-wide bg-slate-100 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/50 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 text-[9.5px] font-mono text-brand-secondary dark:text-brand-accent font-bold">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Links */}
              <div className="px-5 py-3.5 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex space-x-3 text-xs font-mono">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1 hover:text-brand-accent text-slate-500 dark:text-slate-400 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1 hover:text-brand-accent text-slate-500 dark:text-slate-400 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Launch</span>
                  </a>
                </div>

                <button
                  onClick={() => setSelectedCaseStudy(project)}
                  className="flex items-center space-x-1 text-[10.5px] font-bold font-mono tracking-widest text-brand-secondary dark:text-brand-accent hover:underline uppercase cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Case Study Immersive Sub-Modal Dialog */}
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
            
            <div className="relative w-full max-w-2xl bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
              
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-150/10 bg-slate-50/50 dark:bg-slate-950/40">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-accent font-bold">
                    Case Study Analysis
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {selectedCaseStudy.title}
                  </h3>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg cursor-pointer"
                  aria-label="Close Case Study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Core case study content */}
              <div className="p-6 overflow-y-auto space-y-6 text-sm leading-relaxed">
                
                {/* Tech Stack items */}
                <div className="flex flex-wrap gap-1.5 pb-2 border-b border-slate-150/10">
                  {selectedCaseStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-slate-100 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/50 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Case paragraphs */}
                <div className="space-y-4">
                  
                  {/* Overview */}
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-mono uppercase font-bold text-brand-secondary dark:text-brand-accent tracking-widest flex items-center space-x-1.5">
                      <Rocket className="w-3.5 h-3.5" />
                      <span>Project Overview</span>
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 font-sans text-xs sm:text-sm">
                      {selectedCaseStudy.caseStudy?.overview}
                    </p>
                  </div>

                  {/* Challenge */}
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-mono uppercase font-bold text-red-500 dark:text-red-400 tracking-widest flex items-center space-x-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>The Core Challenge</span>
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 font-sans text-xs sm:text-sm">
                      {selectedCaseStudy.caseStudy?.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-mono uppercase font-bold text-brand-secondary tracking-widest flex items-center space-x-1.5">
                      <Rocket className="w-3.5 h-3.5" />
                      <span>Engineered Solution</span>
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 font-sans text-xs sm:text-sm">
                      {selectedCaseStudy.caseStudy?.solution}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="space-y-1.5 bg-slate-50 dark:bg-slate-955 p-3.5 rounded-xl border border-slate-100 dark:border-slate-900">
                    <h4 className="text-xs font-mono uppercase font-bold text-emerald-600 dark:text-brand-accent tracking-widest flex items-center space-x-1.5">
                      <BarChart2 className="w-3.5 h-3.5" />
                      <span>Metrics &amp; Realized Impact</span>
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 font-sans text-xs sm:text-sm">
                      {selectedCaseStudy.caseStudy?.impact}
                    </p>
                  </div>

                </div>

                {/* Features listing */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <h5 className="text-xs uppercase font-mono text-slate-400 font-bold">Key Architectural Deliverables:</h5>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-500">
                    {selectedCaseStudy.features.map((feat, index) => (
                      <li key={index}>{feat}</li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50/50 dark:bg-slate-950/40 border-t border-slate-150/10 flex items-center justify-end space-x-3">
                <a
                  href={selectedCaseStudy.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-mono hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Inspect Source
                </a>
                <a
                  href={selectedCaseStudy.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-brand-accent text-slate-950 text-xs font-bold uppercase tracking-wider hover:bg-brand-accent/90 transition-colors shadow"
                >
                  Launch Live App
                </a>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
