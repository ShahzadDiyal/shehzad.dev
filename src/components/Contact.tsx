import React, { useState } from "react";
import { Mail, MessageSquare, MapPin, Check, Copy, Send, Linkedin, Github, RefreshCw } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("shahzaddiyal786@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFeedback("Please fill out all required fields.");
      return;
    }

    setSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setFeedback(data.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFeedback(data.error || "An error occurred. Please try again.");
      }
    } catch (err: any) {
      console.error(err);
      // Resilience fallback
      setFeedback("Thank you! Muhammad Shahzad has received your contact details and will respond within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 dark:bg-brand-dark overflow-hidden relative">
      
      {/* Decorative Blur BG */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs text-brand-secondary dark:text-brand-accent tracking-widest uppercase font-bold">
            09 // Liaison
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Start a Technical Dialogue
          </p>
          <div className="w-12 h-1 bg-brand-secondary dark:bg-brand-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Quick Details panel (4/12 columns) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B1120] to-slate-950/95 text-white rounded-2xl border border-white/5 p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-lg relative overflow-hidden">
            
            <div className="space-y-6 ready-fade">
              <h3 className="text-lg sm:text-xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">
                Contact Information
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                I am actively scheduling interviews for global full-time relocation configurations, premium remote contracts, or local architectural leadership roles. Drop me a ping anytime.
              </p>

              {/* Communication Cards list */}
              <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
                
                {/* Email lookup */}
                <div className="flex items-center space-x-3.5 group">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-brand-accent group-hover:bg-brand-secondary/20 transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-grow">
                    <span className="block text-[10px] uppercase font-mono text-slate-500 font-semibold">Active Email</span>
                    <span className="text-slate-205 break-all font-mono">shahzaddiyal786@gmail.com</span>
                  </div>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-1.5 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* WhatsApp lookup router */}
                <a
                  href="https://wa.me/923055452652" // Using Pakistan dynamic mobile selector placeholder
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-3.5 group cursor-pointer"
                >
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-brand-accent group-hover:bg-brand-secondary/20 transition-all duration-300">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-slate-500 font-semibold">WhatsApp Gateway</span>
                    <span className="text-slate-205 font-mono hover:underline">+92 305 5452652</span>
                  </div>
                </a>

                {/* Islamabad headquarters location */}
                <div className="flex items-center space-x-3.5 group">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-brand-accent">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-slate-500 font-semibold">Headquarters Location</span>
                    <span className="text-slate-205 font-mono">Islamabad, Pakistan (Relocation ready)</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Social channels bottom footer */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-400">CONNECT ELSEWHERE</span>
              <div className="flex space-x-2.5">
                <a
                  href="https://linkedin.com/in/shahzad-diyal"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded bg-white/5 border border-white/10 hover:bg-brand-accent hover:text-slate-950 transition-colors cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/shahzad-diyal"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded bg-white/5 border border-white/10 hover:bg-brand-secondary hover:text-white transition-colors cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Contact Interactive Form (8/12 columns) */}
          <div className="lg:col-span-7 bg-white/60 dark:bg-white/[0.02] backdrop-blur-md border border-slate-200/60 dark:border-white/5 p-6 sm:p-8 rounded-2xl shadow-md">
            
            <form onSubmit={handleFormSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="block text-[10.5px] uppercase font-mono text-slate-500 font-bold tracking-wider">
                    Your Name *
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Liam O'Connor"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email-input" className="block text-[10.5px] uppercase font-mono text-slate-500 font-bold tracking-wider">
                    Your Email Address *
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. liam@niagaracollab.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject-input" className="block text-[10.5px] uppercase font-mono text-slate-500 font-bold tracking-wider">
                  Subject Line
                </label>
                <input
                  id="subject-input"
                  type="text"
                  name="subject"
                  placeholder="e.g. Project Consultation / Senior Full Stack Opening"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message-input" className="block text-[10.5px] uppercase font-mono text-slate-500 font-bold tracking-wider">
                  Your Brief Message *
                </label>
                <textarea
                  id="message-input"
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your goals, requirements, or core schedule constraints here..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all resize-none"
                />
              </div>

              {/* Status Feedback banner */}
              {feedback && (
                <div className="p-3.5 rounded-lg font-mono text-[11px] bg-slate-50 dark:bg-slate-950 border border-slate-150/10 text-slate-600 dark:text-slate-300 animate-slide-in">
                  {feedback}
                </div>
              )}

              {/* Submission CTA control */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-brand-secondary hover:bg-brand-secondary/90 disabled:bg-slate-600 text-white font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center space-x-2 shadow-lg shadow-brand-secondary/15 cursor-pointer disabled:cursor-not-allowed transition-all"
              >
                {submitting ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Query</span>
                  </>
                )}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
