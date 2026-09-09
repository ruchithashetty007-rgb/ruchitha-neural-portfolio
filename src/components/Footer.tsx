import React from 'react';
import { ArrowUp, Github, Heart, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden text-left">
      {/* Subtle bottom ambient gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-radial-vignette opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Prominent Footer Quote Callout */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-violet-950/40 border border-slate-800 mb-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              {PERSONAL_INFO.tagline}
            </div>
            <p className="text-lg sm:text-xl font-medium text-slate-200 italic font-display">
              “{PERSONAL_INFO.closingQuote}”
            </p>
            <div className="text-xs font-mono text-slate-500 pt-1">
              {PERSONAL_INFO.name} • 2nd Year AI & DS • REVA University
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900 items-start">
          
          {/* Col 1: Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 flex items-center justify-center text-white font-black text-sm tracking-tighter shadow-md">
                R
              </div>
              <span className="text-xl font-extrabold font-display text-white tracking-wider">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {PERSONAL_INFO.supportingStatement}
            </p>
            <div className="text-xs font-mono text-cyan-400">
              Admission: Merit through KCET
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2 text-xs font-mono">
            <div className="text-slate-300 font-bold uppercase tracking-wider mb-2">Sections</div>
            <div className="flex flex-col space-y-1.5 text-slate-400">
              <a href="#home" className="hover:text-cyan-300 transition-colors">Home & Core Identity</a>
              <a href="#journey" className="hover:text-cyan-300 transition-colors">My Journey as Data</a>
              <a href="#skills" className="hover:text-cyan-300 transition-colors">Current Toolkit</a>
              <a href="#projects" className="hover:text-cyan-300 transition-colors">Things I've Built</a>
              <a href="#certificates" className="hover:text-cyan-300 transition-colors">Certificates</a>
              <a href="#learning-lab" className="hover:text-cyan-300 transition-colors">Learning Lab</a>
              <a href="#terminal" className="hover:text-cyan-300 transition-colors">Interactive Terminal</a>
            </div>
          </div>

          {/* Col 3: Social & Back to Top */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-slate-300 font-bold text-xs font-mono uppercase tracking-wider mb-2">
              Connect Channels
            </div>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-violet-500/50 text-slate-300 hover:text-violet-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>RETURN TO APEX [TOP]</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All verified portfolio data truthful & student-scoped.
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <span>AI Interface</span>
            <span>•</span>
            <span>Digital Laboratory</span>
            <span>•</span>
            <span>Data Visualization</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
