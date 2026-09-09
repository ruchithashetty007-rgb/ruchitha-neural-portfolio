import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LEARNING_LAB_ITEMS } from '../data/portfolioData';
import { Beaker, Binary, Brain, Cpu, Database, Flame, Layers, LineChart, Sparkles, Terminal } from 'lucide-react';

export const LearningLab: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <section 
      id="learning-lab" 
      className="py-24 relative overflow-hidden bg-[#060a15] border-t border-slate-800/80"
      aria-label="Active Learning Laboratory"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Beaker className="w-3.5 h-3.5 text-cyan-400" />
            <span>INCUBATION BENCH // ACTIVE LAB</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            MY LEARNING LAB
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            An open testbed of concepts undergoing active study, trial implementations, and conceptual reinforcement.
          </p>
        </div>

        {/* Central Prominent Philosophy Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/80 to-violet-950/40 border border-cyan-500/30 shadow-2xl relative overflow-hidden text-center"
        >
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
              CORE PHILOSOPHY & TRAJECTORY
            </span>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-white tracking-tight">
              “This portfolio is a snapshot of my journey — not the final destination.”
            </p>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Every day is dedicated to compounding programming proficiency, reading computer science literature, and coding small modular experiments.
            </p>
          </div>
        </motion.div>

        {/* Animated Learning Lab Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LEARNING_LAB_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              id={`lab-card-${idx}`}
              whileHover={{ y: -4, scale: 1.02 }}
              onMouseEnter={() => setActiveItem(idx)}
              onMouseLeave={() => setActiveItem(null)}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                    {item.tag}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {item.focusArea}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Lab Cycle: 2024–2025</span>
                <span className="text-cyan-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                  Active →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
