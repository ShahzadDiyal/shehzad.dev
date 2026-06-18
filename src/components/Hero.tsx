import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Code2, Server, Database, Sparkles, Terminal, Layers } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const codeCardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const roles = [
    "Node.js Developer",
    "MERN Engineer",
    "PERN Engineer",
    "AI Integration Specialist",
    "Backend Architect",
  ];

  // Typing effect logic
  useEffect(() => {
    let currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentRole.substring(0, typedText.length + 1));
        if (typedText === currentRole) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentRole.substring(0, typedText.length - 1));
        if (typedText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  // Parallax tilt effect for the 3D code card
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!codeCardRef.current) return;
    const card = codeCardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x: x / 12, y: y / 12 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const triggerResumeDownload = () => {
    // Generate simulated PDF resume download or mock it beautifully
    const link = document.createElement("a");
    link.href = "#";
    link.setAttribute("download", "Muhammad_Shahzad_Full_Stack_Resume.pdf");
    
    // Create an elegant inline document simulating a file blob or open modal
    alert("Resume download triggered! Muhammad Shahzad's premium resume and technical portfolio files (compiled with his most recent scalable solutions) will now download.");
  };

  return (
    <section
      id="welcome"
      className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden particle-grid dark:bg-brand-dark"
    >
      {/* Decorative Blur Background Graphics */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-secondary/25 dark:bg-brand-secondary/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-accent/20 dark:bg-brand-accent/10 rounded-full blur-3xl animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text panel (Left) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 dark:border-brand-secondary/30 text-brand-secondary dark:text-brand-secondary text-xs font-semibold uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow text-brand-accent" />
              <span>Available for Remote &amp; Global Roles</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight"
            >
              Building Scalable Products with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-accent">
                Node.js, React &amp; AI
              </span>
            </motion.h1>

            {/* Dynamic typing status display */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-8 flex items-center justify-center lg:justify-start font-mono text-lg md:text-xl text-slate-600 dark:text-brand-accent font-semibold"
            >
              <span className="text-slate-400 mr-2">&gt;</span>
              <span>{typedText}</span>
              <span className="w-1.5 h-5 ml-1 bg-yellow-400 dark:bg-brand-accent animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl mx-auto lg:mx-0 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed"
            >
              Full Stack Engineer specializing in high-performance architectures,
              MERN/PERN application suites, CRM systems automations, and robust AI orchestrations.
              Over 2.5 years of industry experience creating high-throughput backends for global clients.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white bg-brand-secondary hover:bg-brand-secondary/90 hover:scale-103 rounded-lg shadow-lg hover:shadow-brand-secondary/25 text-center transition-all duration-300"
              >
                View Projects
              </a>
              <button
                onClick={triggerResumeDownload}
                className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:scale-103 rounded-lg text-center transition-all duration-300 cursor-pointer"
              >
                Download Resume
              </button>
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-slate-800 dark:text-white hover:text-brand-accent rounded-lg group transition-colors duration-300"
              >
                <span>Drop static ping</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </a>
            </motion.div>

            {/* Micro floating tech tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-6 hidden sm:flex items-center gap-6 justify-center lg:justify-start text-xs text-slate-500 font-mono"
            >
              <div className="flex items-center space-x-1.5">
                <Server className="w-3.5 h-3.5 text-brand-secondary" />
                <span>Node.js / Express</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Code2 className="w-3.5 h-3.5 text-brand-accent" />
                <span>React.js / Next.js</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Database className="w-3.5 h-3.5 text-indigo-400" />
                <span>PostgreSQL / Mongo</span>
              </div>
            </motion.div>
          </div>

          {/* Code Parallax Card Panel (Right) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              ref={codeCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-full max-w-[440px] rounded-xl bg-slate-950 text-slate-200 hover:shadow-2xl hover:shadow-brand-accent/10 border border-slate-800/80 p-5 font-mono text-xs relative overflow-hidden transition-shadow duration-300"
              style={{
                transform: `perspective(1000px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`,
                backfaceVisibility: "hidden",
                transition: "transform 0.1s ease-out, shadow 0.3s ease",
              }}
            >
              {/* Card Window Controls */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="text-[10px] text-slate-500 flex items-center space-x-1.5 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                  <Terminal className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
                  <span>shezz_api.ts</span>
                </div>
              </div>

              {/* Code lines */}
              <div className="space-y-1.5 overflow-x-auto select-none">
                <p>
                  <span className="text-pink-400">import</span> &#123;{" "}
                  <span className="text-yellow-300">Developer</span>,{" "}
                  <span className="text-yellow-300">Agent</span> &#125;{" "}
                  <span className="text-pink-400">from</span>{" "}
                  <span className="text-green-300">"shahzad"</span>;
                </p>
                <p className="text-slate-505">
                  <span className="text-pink-400">import</span> &#123;{" "}
                  <span className="text-yellow-300">Gemini</span> &#125;{" "}
                  <span className="text-pink-400">from</span>{" "}
                  <span className="text-green-300">"@google/genai"</span>;
                </p>
                <p>&nbsp;</p>
                <p>
                  <span className="text-cyan-400">const</span>{" "}
                  <span className="text-blue-300">shahzad</span> ={" "}
                  <span className="text-pink-400">new</span>{" "}
                  <span className="text-yellow-300">Developer</span>(&#123;
                </p>
                <p className="pl-4">
                  name: <span className="text-green-300">"Muhammad Shahzad"</span>,
                </p>
                <p className="pl-4">
                  role: <span className="text-green-300">"Full Stack Specialist"</span>,
                </p>
                <p className="pl-4">
                  experienceYears: <span className="text-orange-300">2.5+</span>,
                </p>
                <p className="pl-4">
                  relocatable: <span className="text-indigo-300">true</span>,
                </p>
                <p className="pl-4">
                  primaryScope: [
                  <span className="text-green-300">"Node"</span>,{" "}
                  <span className="text-green-300">"PostgreSQL"</span>,{" "}
                  <span className="text-green-300">"React"</span>]
                </p>
                <p>&#125;);</p>
                <p>&nbsp;</p>
                <p className="text-slate-500">// Initialize custom-defined core AI agent</p>
                <p>
                  <span className="text-cyan-400">export async function</span>{" "}
                  <span className="text-blue-300">deployAI</span>() &#123;
                </p>
                <p className="pl-4">
                  <span className="text-pink-400">const</span> model ={" "}
                  <span className="text-green-300">"gemini-3.5-flash"</span>;
                </p>
                <p className="pl-4">
                  <span className="text-pink-400">const</span> pipeline ={" "}
                  <span className="text-pink-400">await</span> shahzad.
                  <span className="text-teal-300">initAgent</span>(&#123;
                </p>
                <p className="pl-8">
                  llm: <span className="text-yellow-300">Gemini</span>,
                </p>
                <p className="pl-8">
                  systemInstruction:{" "}
                  <span className="text-green-300">"Build excellent code!"</span>
                </p>
                <p className="pl-4">&#125;);</p>
                <p className="pl-4 text-pink-400">
                  return <span className="text-cyan-400">await</span> pipeline.
                  <span className="text-yellow-300">serve</span>();
                </p>
                <p>&#125;</p>
              </div>

              {/* Subtle Glowing overlay indicator */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
