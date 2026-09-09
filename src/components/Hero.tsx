import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, FolderCode, Github, Linkedin, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { DigitalMind } from './DigitalMind';
import { IdentityCard } from './IdentityCard';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-4rem)] pt-24 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern"
      aria-label="Introduction Hero"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Core Identity & Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
          >
            {/* Small label */}
            <div 
              id="hero-student-label"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider shadow-inner"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>AI & DATA SCIENCE ENGINEERING STUDENT</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-display text-white">
                HI, I'M{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400">
                  RUCHITHA.
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-cyan-200/90 tracking-tight font-display">
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            {/* Introduction Statement */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              “I'm a 2nd-year AI & Data Science engineering student at REVA University, exploring programming, data science, and intelligent technologies through practical projects.”
            </p>

            {/* Interactive Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                id="btn-explore-journey"
                onClick={() => scrollToSection('journey')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>EXPLORE MY JOURNEY</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                id="btn-view-projects"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/40 font-semibold text-sm tracking-wide shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <FolderCode className="w-4 h-4 text-cyan-400" />
                <span>VIEW PROJECTS</span>
              </button>

              {/* Social icons */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  id="link-hero-github"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ruchitha GitHub Profile"
                  className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  id="link-hero-linkedin"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ruchitha LinkedIn Profile"
                  className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Supporting Micro Highlights */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-400 w-full">
              <div className="flex flex-col">
                <span className="text-slate-400 text-[10px] uppercase">University</span>
                <span className="text-slate-200 font-medium">REVA University</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-[10px] uppercase">Admission</span>
                <span className="text-emerald-400 font-medium">Merit through KCET</span>
              </div>
              <div className="flex flex-col col-span-2 sm:col-span-1">
                <span className="text-slate-400 text-[10px] uppercase">Core Tools</span>
                <span className="text-cyan-300 font-medium">Python • C • C++</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Digital Mind & Identity Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center gap-6"
          >
            <DigitalMind />
            <IdentityCard />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
