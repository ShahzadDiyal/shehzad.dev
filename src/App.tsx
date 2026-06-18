import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import GithubDashboard from "./components/GithubDashboard";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import AiAssistant from "./components/AiAssistant";
import CommandPalette from "./components/CommandPalette";

import { Cpu, Terminal, Sparkles, ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const loadingTexts = [
    "Compiling critical system metrics...",
    "Querying public GitHub profile arrays...",
    "Initializing generative core AI agents...",
    "Synchronizing database schemas...",
    "Establishing premium portfolio pipelines..."
  ];

  // Global Keybindings monitoring (Ctrl+K to launch palette)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Monitor total scroll percentages for top progress index
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((window.scrollY / scrollHeight) * 100);
      }
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simulated premium introductory boot loader
  useEffect(() => {
    const textInterval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < loadingTexts.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 350);

    const completeTimeout = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => {
      clearInterval(textInterval);
      clearTimeout(completeTimeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center p-6 text-white select-none">
        <div className="space-y-6 max-w-sm text-center">
          
          {/* Animated custom visual key */}
          <div className="w-16 h-16 rounded-xl bg-linear-to-tr from-brand-secondary to-brand-accent flex items-center justify-center text-white relative overflow-hidden shadow-2xl mx-auto shadow-brand-accent/20 animate-bounce">
            <span className="font-mono font-bold text-2xl">S</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-2 text-brand-accent text-xs font-mono font-bold tracking-widest uppercase">
              <Cpu className="w-4 h-4 animate-spin-slow" />
              <span>STABLE BOOT INITIALIZATION</span>
            </div>
            
            <p className="text-xs text-slate-400 font-mono italic animate-pulse h-4 truncate">
              &gt; {loadingTexts[loadingStep]}
            </p>
          </div>

          {/* Core progress meter */}
          <div className="h-1.5 w-48 bg-slate-900 rounded-full mx-auto overflow-hidden border border-white/5">
            <div
              className="h-full bg-linear-to-r from-brand-secondary to-brand-accent rounded-full transition-all duration-300"
              style={{ width: `${((loadingStep + 1) / loadingTexts.length) * 100}%` }}
            />
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-brand-dark text-slate-805 dark:text-slate-100 selection:bg-brand-secondary/30 relative">
      
      {/* Sticky Top Scroll Progress Indicator */}
      <div
        id="scroll-progress-indicator"
        className="fixed top-0 left-0 h-1 bg-linear-to-r from-brand-secondary to-brand-accent z-55 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Primary Header/Navbar */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Main Core Elements container */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <GithubDashboard />
        <Services />
        <Testimonials />
        <Blogs />
        <Contact />
      </main>

      {/* Floating Interactive Assistants */}
      <AiAssistant />

      {/* Search Terminal Palette dialogues overlay */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* Scroll to Top Trigger (Lower-left region) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-2xl hover:scale-105 transition-all cursor-pointer"
          title="Scroll Back to Top"
        >
          <ArrowUp className="w-5 h-5 animate-pulse" />
        </button>
      )}

      {/* Premium Elegant Sticky Footer */}
      <footer className="bg-slate-950 border-t border-slate-900/80 py-16 text-white overflow-hidden relative font-mono text-xs text-slate-505 select-none">
        
        {/* Particle visual canvas indicators */}
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-brand-dark/20 to-black pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-slate-900">
            
            {/* Developer credentials */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-brand-secondary/15 border border-brand-secondary/25 flex items-center justify-center text-brand-accent">
                  <Terminal className="w-4 h-4" />
                </div>
                <span className="font-sans font-extrabold text-sm text-white">Muhammad Shahzad</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                Full Stack Engineer &amp; AI Specialist committed to clean modularity, high database scalability, and flawless responsive layouts. Setting up scalable backend gateways for global users.
              </p>
            </div>

            {/* Sitemap index */}
            <div className="md:col-span-4 grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">NAVIGATE</span>
                <ul className="space-y-1.5 text-xs text-slate-400 font-sans">
                  <li><a href="#about" className="hover:text-brand-accent">About</a></li>
                  <li><a href="#skills" className="hover:text-brand-accent">Skills</a></li>
                  <li><a href="#experience" className="hover:text-brand-accent text-slate-400">Timeline</a></li>
                </ul>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">RESOURCES</span>
                <ul className="space-y-1.5 text-xs text-slate-400 font-sans">
                  <li><a href="#projects" className="hover:text-brand-accent">Projects</a></li>
                  <li><a href="#blogs" className="hover:text-brand-accent">Writing logs</a></li>
                  <li><a href="#contact" className="hover:text-brand-accent">Contact link</a></li>
                </ul>
              </div>
            </div>

            {/* Micro details */}
            <div className="md:col-span-3 space-y-4 text-xs md:text-right font-mono">
              <span className="block text-[10px] font-bold text-slate-505 uppercase tracking-wider">LIAISON NETWORKS</span>
              <div className="flex md:justify-end space-x-3 text-slate-400">
                <a href="https://github.com/shahzad-diyal" target="_blank" rel="noreferrer" className="hover:text-brand-accent">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/in/shahzad-diyal" target="_blank" rel="noreferrer" className="hover:text-brand-accent">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="mailto:shahzaddiyal786@gmail.com" className="hover:text-brand-accent">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <span className="block text-[9.5px] text-slate-500 pt-2 font-mono uppercase tracking-widest">FPS TARGET: 60 // PING: 12MS</span>
            </div>

          </div>

          {/* Copy statements */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-sans font-medium text-center sm:text-left">
            <span>
              Designed and Developed by <strong>Muhammad Shahzad</strong> &copy; 2026. All visual standards protected.
            </span>
            <div className="flex items-center justify-center space-x-1.5 text-slate-500 text-xs">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
              <span>and React 19 / Tailwind v4</span>
            </div>
          </div>

        </div>

      </footer>

    </div>
  );
}
