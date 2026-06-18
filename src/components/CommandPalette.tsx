import React, { useState, useEffect, useRef } from "react";
import { Search, Terminal, Award, FileText, Moon, Sun, Laptop, ArrowRightLeft, Sparkles, X, ChevronRight } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [filterInput, setFilterInput] = useState("");
  const [easterEggActive, setEasterEggActive] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle global close on escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleActionClick = (actionType: string, payload?: string) => {
    if (actionType === "scroll") {
      const el = document.querySelector(payload || "");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      onClose();
    } else if (actionType === "resume") {
      alert("Resume download triggered! Muhammad Shahzad's file is compiled with his deep PERN/MERN credentials.");
      onClose();
    } else if (actionType === "theme") {
      const doc = document.documentElement;
      if (doc.classList.contains("dark")) {
        doc.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        doc.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
      onClose();
    } else if (actionType === "command_run") {
      if (filterInput.trim() === "npm run hire-shahzad") {
        setEasterEggActive(true);
      } else {
        alert(`CMD execution: '${filterInput}' typed. Type 'npm run hire-shahzad' to explore Muhammad Shahzad's active placement status.`);
      }
    }
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filterInput.trim() === "npm run hire-shahzad") {
      setEasterEggActive(true);
    } else {
      handleActionClick("command_run");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fade-in font-sans select-none">
      
      {/* Outer panel box */}
      <div
        ref={modalRef}
        className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-805 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between max-h-[85vh]"
      >
        
        {/* Typable query bar */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
          <form onSubmit={handleTerminalSubmit} className="flex-1 flex items-center space-x-2.5">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Type navigate link, search term, or terminal command..."
              value={filterInput}
              onChange={(e) => setFilterInput(e.target.value)}
              className="flex-1 bg-transparent text-slate-800 dark:text-white border-none focus:outline-none focus:ring-0 text-sm font-mono placeholder:font-sans placeholder:text-slate-400"
              autoFocus
            />
          </form>
          <button
            onClick={onClose}
            className="p-1 px-2.5 text-xs text-slate-400 hover:text-slate-900 dark:hover:text-white rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center cursor-pointer shadow-sm"
          >
            <X className="w-3.5 h-3.5 mr-1" />
            <span>ESC</span>
          </button>
        </div>

        {/* Command entries list */}
        <div className="p-4 overflow-y-auto space-y-4 max-h-[250px] text-xs sm:text-sm">
          
          <div className="space-y-1.5">
            <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold px-1.5">
              Rapid System Navigation
            </span>
            <button
              onClick={() => handleActionClick("scroll", "#welcome")}
              className="w-full p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 flex items-center justify-between text-left transition-colors cursor-pointer text-slate-705 dark:text-slate-300"
            >
              <span className="flex items-center space-x-2.5 font-sans font-medium">
                <Laptop className="w-4 h-4 text-brand-secondary" />
                <span>Jump to Hero Welcome Gate</span>
              </span>
              <ChevronRight className="w-4 h-4 text-slate-450" />
            </button>

            <button
              onClick={() => handleActionClick("scroll", "#about")}
              className="w-full p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 flex items-center justify-between text-left transition-colors cursor-pointer text-slate-705 dark:text-slate-300"
            >
              <span className="flex items-center space-x-2.5 font-sans font-medium">
                <Award className="w-4 h-4 text-brand-accent" />
                <span>Jump to About &amp; Experience Overview</span>
              </span>
              <ChevronRight className="w-4 h-4 text-slate-450" />
            </button>

            <button
              onClick={() => handleActionClick("scroll", "#projects")}
              className="w-full p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 flex items-center justify-between text-left transition-colors cursor-pointer text-slate-705 dark:text-slate-300"
            >
              <span className="flex items-center space-x-2.5 font-sans font-medium">
                <Laptop className="w-4 h-4 text-blue-400" />
                <span>Jump to Visual Projects Showcases</span>
              </span>
              <ChevronRight className="w-4 h-4 text-slate-450" />
            </button>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold px-1.5">
              System Operations
            </span>
            <button
              onClick={() => handleActionClick("resume")}
              className="w-full p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 flex items-center justify-between text-left transition-colors cursor-pointer text-slate-705 dark:text-slate-300"
            >
              <span className="flex items-center space-x-2.5 font-sans font-medium">
                <FileText className="w-4 h-4 text-emerald-500" />
                <span>Download Executive Profile CV</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-brand-accent font-bold">PDF</span>
            </button>

            <button
              onClick={() => handleActionClick("theme")}
              className="w-full p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 flex items-center justify-between text-left transition-colors cursor-pointer text-slate-705 dark:text-slate-300"
            >
              <span className="flex items-center space-x-2.5 font-sans font-medium">
                <Moon className="w-4 h-4 text-amber-500" />
                <span>Toggle Visual Dark / Light Modes</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-brand-secondary font-bold">TOGGLE</span>
            </button>
          </div>

        </div>

        {/* Terminal Hint Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-150/10 dark:border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-450 px-4">
          <div className="flex items-center space-x-1.5">
            <Terminal className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
            <span>Cmd hint: Type <strong className="text-brand-accent hover:underline cursor-pointer select-all" onClick={() => setFilterInput("npm run hire-shahzad")}>npm run hire-shahzad</strong></span>
          </div>
          <button
            onClick={() => handleActionClick("command_run")}
            className="px-2 py-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-850 dark:hover:text-brand-accent border border-slate-200 dark:border-slate-800 rounded font-bold cursor-pointer text-[10px]"
          >
            RUN
          </button>
        </div>

      </div>

      {/* Easter Egg Overlay modal popup */}
      {easterEggActive && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in font-mono">
          <div className="w-full max-w-sm rounded-2xl bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white border border-brand-accent/50 p-6 shadow-2xl shadow-brand-accent/20 text-center space-y-5 relative">
            <div className="absolute top-4 right-4">
              <button
                onClick={() => {
                  setEasterEggActive(false);
                  onClose();
                }}
                className="p-1 rounded-md hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/35 rounded-full flex items-center justify-center mx-auto text-brand-accent">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>

            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-slate-100 tracking-wider">COMMAND EXECUTED SUCCESSFULLY</h4>
              <p className="text-[11.5px] text-brand-accent font-bold tracking-widest uppercase">
                &gt; npm run hire-shahzad
              </p>
            </div>

            {/* Custom Modal trigger details */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-1 text-left">
              <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-widest">DEPLOYMENT STATUS</span>
              <p className="text-xs text-slate-200 font-medium">
                "Available for Remote Opportunities &amp; Global Relocation."
              </p>
              <p className="text-[10px] text-slate-400 pt-2 font-sans">
                Muhammad has all visas and technical validations up to date. Prompt him via chat, email, or LinkedIn to secure an interview!
              </p>
            </div>

            <button
              onClick={() => {
                setEasterEggActive(false);
                onClose();
              }}
              className="w-full py-2.5 bg-brand-accent hover:bg-brand-accent/90 text-slate-950 font-bold uppercase text-xs rounded-xl transition-colors cursor-pointer shadow"
            >
              Initialize Contact Router
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
