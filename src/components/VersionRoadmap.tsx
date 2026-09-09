import React from 'react';
import { motion } from 'motion/react';
import { VERSION_METRICS } from '../data/portfolioData';
import { ArrowRight, CheckCircle2, GitBranch, GitCommit, GitPullRequest, Rocket, Sparkles, Terminal } from 'lucide-react';

export const VersionRoadmap: React.FC = () => {
  return (
    <section 
      id="version" 
      className="py-24 relative overflow-hidden bg-[#070b16] border-t border-slate-800/80"
      aria-label="Version Control Journey Roadmap"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-mono">
            <GitBranch className="w-3.5 h-3.5 text-violet-400" />
            <span>RELEASE TRAIN // CONTINUOUS EVOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            THIS IS VERSION 2.0 OF MY JOURNEY
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Framing academic and engineering growth like modern software updates: grounded in current verified foundations while preparing upcoming feature milestones.
          </p>
        </div>

        {/* Release Diff Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Version 2.0: Current Deployed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-7 rounded-2xl bg-slate-900/80 border border-cyan-500/40 shadow-2xl relative overflow-hidden text-left flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold">
                  {VERSION_METRICS.current.version} // CURRENT VERSION
                </span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {VERSION_METRICS.current.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white mb-1">
                {VERSION_METRICS.current.milestone}
              </h3>
              <p className="text-xs font-mono text-cyan-400 mb-4">
                {VERSION_METRICS.current.focus}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono text-slate-300 mb-6">
                <span className="text-slate-500 mr-2">stack:</span>
                <span className="text-cyan-200 font-semibold">{VERSION_METRICS.current.coreLanguages}</span>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase text-slate-400">Deployed Changelog:</div>
                {VERSION_METRICS.current.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Environment: REVA University</span>
              <span className="text-cyan-400">Verified Credentials</span>
            </div>
          </motion.div>

          {/* Version 2.5+: Next Up Roadmap */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-7 rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-violet-500/40 shadow-xl relative overflow-hidden text-left flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/40 font-bold">
                  {VERSION_METRICS.next.version} // NEXT UP
                </span>
                <span className="text-[11px] font-mono text-violet-400 flex items-center gap-1.5">
                  <GitPullRequest className="w-3.5 h-3.5" />
                  {VERSION_METRICS.next.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white mb-1">
                {VERSION_METRICS.next.milestone}
              </h3>
              <p className="text-xs font-mono text-violet-400 mb-4">
                {VERSION_METRICS.next.focus}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono text-slate-300 mb-6">
                <span className="text-slate-500 mr-2">target_stack:</span>
                <span className="text-violet-200 font-semibold">{VERSION_METRICS.next.coreLanguages}</span>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase text-slate-400">Upcoming Roadmaps:</div>
                {VERSION_METRICS.next.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Rocket className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Goal: End-to-End AI & Data Science</span>
              <span className="text-violet-400">In Development</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
