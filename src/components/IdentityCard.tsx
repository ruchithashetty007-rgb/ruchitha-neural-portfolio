import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, GraduationCap, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const IdentityCard: React.FC = () => {
  return (
    <motion.div
      id="live-identity-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative p-5 rounded-xl border border-cyan-500/20 bg-slate-900/90 shadow-2xl backdrop-blur-xl max-w-sm w-full overflow-hidden group hover:border-cyan-500/40 transition-all duration-300"
    >
      {/* Subtle glowing corner highlight */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Status Header */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
            {PERSONAL_INFO.status}
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300 border border-slate-700/60">
          ID: RUCHITHA::V2.0
        </span>
      </div>

      {/* Main Student Persona */}
      <div className="space-y-3">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Core Identity</div>
          <div className="text-xl font-bold font-display tracking-tight text-white flex items-center gap-2">
            <span>{PERSONAL_INFO.name}</span>
            <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-mono font-normal">
              2nd Year
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 text-xs">
          <div className="flex items-center gap-2.5 text-slate-300 bg-slate-800/40 px-3 py-2 rounded-lg border border-slate-800">
            <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <div className="font-medium text-slate-200">AI & DS Engineering</div>
              <div className="text-[11px] text-slate-400">REVA UNIVERSITY • Merit Admission</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-slate-300 bg-slate-800/40 px-3 py-2 rounded-lg border border-slate-800">
            <Terminal className="w-4 h-4 text-violet-400 shrink-0" />
            <div>
              <div className="text-[11px] text-slate-400 font-mono">Currently Learning</div>
              <div className="font-mono text-[12px] text-cyan-200 font-medium">
                {PERSONAL_INFO.statusSubtext}
              </div>
            </div>
          </div>
        </div>

        {/* Footer telemetry */}
        <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800/60">
          <span className="flex items-center gap-1 text-slate-400">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Active Student
          </span>
          <span className="text-slate-500">KCET Merit 14K</span>
        </div>
      </div>
    </motion.div>
  );
};
