import React, { useState } from "react";
import { BLOGS } from "../data";
import { BlogPost } from "../types";
import { Calendar, Clock, BookOpen, X, ArrowUpRight, Share2, CornerDownRight } from "lucide-react";

export default function Blogs() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShare = (post: BlogPost, e: React.MouseEvent) => {
    e.stopPropagation();
    // Simulate share link creation
    const dummyUrl = `${window.location.origin}/#blogs/${post.id}`;
    navigator.clipboard.writeText(dummyUrl);
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="blogs"
      className="py-20 bg-slate-50 dark:bg-brand-dark/40 border-y border-slate-200/50 dark:border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs text-brand-secondary dark:text-brand-accent tracking-widest uppercase font-bold">
            08 // Articles
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Logs &amp; Insights
          </p>
          <div className="w-12 h-1 bg-brand-secondary dark:bg-brand-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Blogs Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white/60 dark:bg-white/[0.02] backdrop-blur-md border border-slate-200/60 dark:border-white/5 p-6 rounded-2xl shadow-xs hover:shadow-xl hover:border-brand-accent/30 dark:hover:border-brand-accent/30 transition-all duration-300 group cursor-pointer flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                
                {/* Meta details */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-4">
                  <span className="text-brand-secondary dark:text-brand-accent font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-secondary dark:group-hover:text-brand-accent transition-colors duration-200 leading-snug mb-3 font-display">
                  {post.title}
                </h3>
                
                <p className="text-xs text-slate-505 dark:text-slate-350 leading-relaxed line-clamp-3 mb-4">
                  {post.description}
                </p>

              </div>

              {/* Bottom tag listing and share */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-4">
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-slate-400">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={(e) => handleShare(post, e)}
                    className="p-1.5 rounded bg-slate-50 dark:bg-slate-950 text-slate-400 hover:text-brand-accent transition-colors cursor-pointer"
                    title="Copy unique link to clipboard"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                  {copiedId === post.id && (
                    <span className="text-[9px] font-mono text-emerald-500 animate-slide-in">Copied!</span>
                  )}
                  <div className="text-[11px] font-bold font-mono uppercase tracking-widest text-brand-secondary dark:text-brand-accent flex items-center group-hover:underline">
                    <span>Read</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Deep Blog Post Reader Dialog Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
            
            <div className="relative w-full max-w-3xl bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
              
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-150/10 bg-slate-50/50 dark:bg-slate-950/40">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-accent font-bold">
                    Technical Log / {selectedPost.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {selectedPost.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg cursor-pointer"
                  aria-label="Close Post"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Reader */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm leading-relaxed prose prose-slate dark:prose-invert max-w-none">
                
                {/* Meta Row */}
                <div className="flex items-center space-x-3 text-slate-400 font-mono text-xs pb-4 border-b border-slate-100 dark:border-slate-850">
                  <span>Published: {selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                  <span>•</span>
                  <span className="text-brand-secondary dark:text-brand-accent font-bold uppercase">{selectedPost.category}</span>
                </div>

                {/* Simulated Markdown Render */}
                <div className="markdown-body text-slate-700 dark:text-slate-300 font-sans space-y-4">
                  {selectedPost.content.split("\n\n").map((chunk, index) => {
                    const trimmed = chunk.trim();
                    if (trimmed.startsWith("##")) {
                      return (
                        <h3 key={index} className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white pt-4 tracking-tight">
                          {trimmed.replace("##", "").trim()}
                        </h3>
                      );
                    } else if (trimmed.startsWith("####")) {
                      return (
                        <h5 key={index} className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 pt-2">
                          {trimmed.replace("####", "").trim()}
                        </h5>
                      );
                    } else if (trimmed.startsWith("-")) {
                      return (
                        <ul key={index} className="list-disc pl-5 space-y-1 text-xs sm:text-sm font-sans pt-1">
                          {trimmed.split("\n").map((li, i) => (
                            <li key={i}>{li.replace("-", "").trim()}</li>
                          ))}
                        </ul>
                      );
                    } else if (trimmed.startsWith("```")) {
                      const codeLineArray = trimmed.split("\n");
                      const lang = codeLineArray[0].replace("```", "").trim();
                      const code = codeLineArray.slice(1, -1).join("\n");
                      return (
                        <div key={index} className="p-4 bg-slate-950 text-slate-200 border border-slate-800 rounded-xl font-mono text-[11px] leading-relaxed my-3 overflow-x-auto select-all">
                          <div className="flex justify-between items-center text-[9px] text-slate-500 border-b border-slate-900 pb-2 mb-2 font-mono uppercase tracking-widest">
                            <span>{lang || "code block"}</span>
                            <span>CTRL+C</span>
                          </div>
                          <code>{code}</code>
                        </div>
                      );
                    }

                    return (
                      <p key={index} className="text-xs sm:text-sm leading-relaxed font-sans">
                        {trimmed}
                      </p>
                    );
                  })}
                </div>

              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50/50 dark:bg-slate-950/40 border-t border-slate-150/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {selectedPost.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 font-mono text-[10px] text-slate-450 border border-slate-205/10">
                      #{tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-5 py-2 rounded-lg bg-brand-secondary hover:bg-brand-secondary/90 text-white text-xs font-bold uppercase cursor-pointer"
                >
                  Close Reader
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
