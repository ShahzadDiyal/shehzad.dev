import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Terminal as TermIcon, Search, Command } from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Initializer check
    const savedTheme = localStorage.getItem("theme");
    const doc = document.documentElement;
    if (savedTheme === "light") {
      setIsDark(false);
      doc.classList.remove("dark");
    } else {
      setIsDark(true);
      doc.classList.add("dark");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const doc = document.documentElement;
    if (isDark) {
      doc.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      doc.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "GitHub", href: "#github" },
    { name: "Services", href: "#services" },
    { name: "Blogs", href: "#blogs" },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass-panel border-b border-light shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#welcome" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 rounded-lg bg-linear-to-tr from-brand-secondary to-brand-accent flex items-center justify-center text-white relative overflow-hidden shadow-md">
              <span className="font-mono font-bold text-lg select-none">S</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-slate-900 dark:text-white transition-colors duration-200">
                Muhammad Shahzad
              </span>
              <span className="font-mono text-[9px] text-slate-500 dark:text-brand-accent/80 tracking-widest font-semibold uppercase -mt-0.5">
                Full Stack & AI Core
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-xs font-semibold tracking-wide text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Tools */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Command Palette Button */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center space-x-2 px-3 py-1.5 text-xs font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-accent/50 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-brand-accent rounded-lg transition-all duration-300 group cursor-pointer"
              title="Open Command Palette (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-200" />
              <span>Search</span>
              <span className="flex items-center gap-0.5 kbd-hint">
                <Command className="w-2.5 h-2.5" />
                <span>K</span>
              </span>
            </button>

            {/* Dark Mode Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-lg transition-all duration-300 cursor-pointer"
              aria-label="Toggle visual theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-brand-accent animate-pulse-slow" />
              ) : (
                <Moon className="w-4 h-4 text-brand-secondary" />
              )}
            </button>

            {/* CTA Hire Me */}
            <a
              href="#contact"
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-brand-accent hover:bg-brand-accent/90 rounded-lg shadow-lg hover:shadow-brand-accent/25 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Actions Overlay Trigger */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-lg cursor-pointer"
            >
              {isDark ? <Sun className="w-4 h-4 text-brand-accent" /> : <Moon className="w-4 h-4 text-brand-secondary" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-lg cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden animate-fade-in py-4 px-4 bg-white dark:bg-brand-dark/95 border-b border-slate-200 dark:border-slate-800 shadow-xl space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col space-y-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="flex items-center justify-between px-4 py-2.5 text-sm font-mono text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg"
            >
              <span className="flex items-center space-x-2">
                <Search className="w-4 h-4" />
                <span>Command Terminal</span>
              </span>
              <span className="flex items-center gap-0.5 kbd-hint">
                <Command className="w-2.5 h-2.5" />
                <span>K</span>
              </span>
            </button>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-slate-950 bg-brand-accent rounded-lg"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
