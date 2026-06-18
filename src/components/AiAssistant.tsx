import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Cpu, User, RefreshCw, Minimize2 } from "lucide-react";

interface ChatMessage {
  sender: "user" | "ai";
  text: string;
}

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto welcome on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          sender: "ai",
          text: "Hi there! I'm 'Shahzad AI', Muhammad's digital portfolio copilot. I am trained on his direct resume history, projects, and specialties. Ask me anything about his technical stack, remote availability, or interview schedule!"
        }
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setLoading(true);

    try {
      // Build history context
      const chatHistory = messages.map((m) => ({
        role: m.sender === "user" ? "user" : "model",
        parts: [{ text: m.text }]
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText, history: chatHistory.slice(-6) })
      });

      if (!res.ok) {
        throw new Error("Chat server responded with an error");
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "ai", text: data.text }]);
    } catch (err: any) {
      console.error("AI Communication error:", err);
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "I experienced a minor socket disconnect. However, I can confidently tell you that Muhammad Shahzad specializes in Node.js, Express, PostgreSQL, React, and robust AI integrations! Reach him at shahzaddiyal786@gmail.com."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="ai-assistant-container" className="fixed bottom-6 right-6 z-40 font-sans">
      
      {/* Floating Button triggers */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-linear-to-tr from-brand-secondary to-brand-accent flex items-center justify-center text-white shadow-2xl hover:scale-105 transition-all duration-300 relative group cursor-pointer"
        aria-label="Open Shahzad AI Assistant"
      >
        {isOpen ? <X className="w-6 h-6 animate-fade-in" /> : <MessageSquare className="w-6 h-6 animate-pulse" />}
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-slate-950 text-white text-[11px] font-mono px-2.5 py-1 rounded-md border border-slate-700/50 whitespace-nowrap tracking-wide transition-all duration-200">
          Chat with Shahzad's AI Agent
        </span>
        <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-yellow-405 border-2 border-white animate-ping" />
      </button>

      {/* Expandable Chat Card Window */}
      {isOpen && (
        <div className="absolute bottom-18 right-0 w-[320px] sm:w-[360px] h-[450px] bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl select-none overflow-hidden flex flex-col justify-between animate-slide-up">
          
          {/* Chat Window Title */}
          <div className="p-4 bg-linear-to-tr from-slate-900 to-brand-dark text-white flex items-center justify-between border-b border-white/5">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-accent/15 flex items-center justify-center border border-brand-accent/20">
                <Cpu className="w-4 h-4 text-brand-accent animate-pulse-slow" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-100">Shahzad Assistant</h4>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9.5px] font-mono text-slate-400">Agent Live</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white cursor-pointer"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Logs Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50 dark:bg-slate-955/50 font-sans text-xs">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start space-x-2.5 ${msg.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
              >
                <div className={`w-7 h-7 rounded-sm flex items-center justify-center shrink-0 border ${
                  msg.sender === "user"
                    ? "bg-brand-secondary text-white border-brand-secondary/30"
                    : "bg-slate-250 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800"
                }`}>
                  {msg.sender === "user" ? <User className="w-4 h-4" /> : <Cpu className="w-4 h-4" />}
                </div>

                <div className={`p-3 rounded-xl max-w-[78%] leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-brand-secondary text-white rounded-tr-none"
                    : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-205 border border-slate-150/10 dark:border-slate-800 rounded-tl-none shadow-sm"
                }`}>
                  <p className="font-sans font-medium whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-start space-x-2.5">
                <div className="w-7 h-7 rounded-sm bg-slate-250 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 text-slate-400 italic">
                  Shahzad AI is drafting a response...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input Form footer */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-150/10 dark:border-slate-900 bg-white dark:bg-slate-950 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Ask me: 'Is Shahzad open to relocation?'"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:border-brand-accent focus:outline-none transition-all"
            />
            <button
              type="submit"
              className="p-2 bg-brand-secondary hover:bg-brand-secondary/95 text-white rounded-lg cursor-pointer transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
