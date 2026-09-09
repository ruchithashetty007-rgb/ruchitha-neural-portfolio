import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_ITEMS } from '../data/portfolioData';
import { SkillItem } from '../types';
import { 
  BarChart3, 
  Binary, 
  BrainCircuit, 
  Code2, 
  Database, 
  Info, 
  LineChart, 
  ShieldCheck, 
  Sparkles, 
  TerminalSquare 
} from 'lucide-react';

const iconLookup: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-blue-400" />,
  Binary: <Binary className="w-5 h-5 text-cyan-400" />,
  TerminalSquare: <TerminalSquare className="w-5 h-5 text-indigo-400" />,
  Database: <Database className="w-5 h-5 text-emerald-400" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-amber-400" />,
  LineChart: <LineChart className="w-5 h-5 text-teal-400" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-violet-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-purple-400" />,
};

export const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(SKILL_ITEMS[0]);

  const foundations = SKILL_ITEMS.filter((s) => s.stage === 'foundation');
  const exploring = SKILL_ITEMS.filter((s) => s.stage === 'exploring');

  return (
    <section 
      id="skills" 
      className="py-24 relative overflow-hidden bg-[#050811] border-t border-slate-800/80"
      aria-label="Technical Skills and Current Toolkit"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>HONEST SKILL MAP // 0% FAKE METRICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            MY CURRENT TOOLKIT
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Categorized transparently by my genuine learning progression as a 2nd-year student. No inflated percentage bars or synthetic expertise claims.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Grid: Two Distinct Clusters */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Cluster 1: Programming Foundations */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <h3 className="text-lg font-bold font-display text-white tracking-wide">
                    Programming Foundations
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 bg-blue-950/60 px-2.5 py-0.5 rounded border border-blue-900">
                  Basic Level • Actively Practicing
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {foundations.map((skill) => {
                  const isSelected = activeSkill?.name === skill.name;
                  return (
                    <motion.div
                      key={skill.name}
                      id={`skill-${skill.name.toLowerCase()}`}
                      whileHover={{ y: -3 }}
                      onClick={() => setActiveSkill(skill)}
                      onMouseEnter={() => setActiveSkill(skill)}
                      className={`cursor-pointer p-5 rounded-xl transition-all duration-200 border flex flex-col justify-between ${
                        isSelected
                          ? 'bg-slate-900 border-blue-500/80 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/40'
                          : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-900/90 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="p-2.5 rounded-lg bg-slate-800/90 border border-slate-700/60">
                          {iconLookup[skill.iconName]}
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30">
                          {skill.level}
                        </span>
                      </div>

                      <div className="text-left">
                        <h4 className="text-lg font-bold text-white font-display">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                          {skill.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>Foundation</span>
                        <span className="text-cyan-400 text-xs">Explore →</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Cluster 2: Currently Exploring */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-400" />
                  <h3 className="text-lg font-bold font-display text-white tracking-wide">
                    Currently Exploring
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-violet-400 bg-violet-950/60 px-2.5 py-0.5 rounded border border-violet-900">
                  Curriculum & Lab Studies
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {exploring.map((skill) => {
                  const isSelected = activeSkill?.name === skill.name;
                  return (
                    <motion.div
                      key={skill.name}
                      id={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                      whileHover={{ y: -3 }}
                      onClick={() => setActiveSkill(skill)}
                      onMouseEnter={() => setActiveSkill(skill)}
                      className={`cursor-pointer p-4 rounded-xl transition-all duration-200 border flex flex-col justify-between ${
                        isSelected
                          ? 'bg-slate-900 border-violet-500/80 shadow-lg shadow-violet-500/10 ring-1 ring-violet-500/40'
                          : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/90 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700/60">
                          {iconLookup[skill.iconName]}
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/30">
                          {skill.level}
                        </span>
                      </div>

                      <div className="text-left">
                        <h4 className="text-base font-bold text-white font-display">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                          {skill.description}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>Active Study</span>
                        <span className="text-violet-300">View Topics</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Detail Inspector Card */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md text-left">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  <span>TOOLKIT INSPECTOR</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  {activeSkill?.stage === 'foundation' ? 'CORE' : 'STUDY'}
                </span>
              </div>

              {activeSkill ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700">
                      {iconLookup[activeSkill.iconName]}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-display text-white">
                        {activeSkill.name}
                      </h4>
                      <div className="text-xs font-mono text-emerald-400 mt-0.5">
                        Status: {activeSkill.level}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {activeSkill.description}
                  </p>

                  <div className="pt-3 border-t border-slate-800">
                    <div className="text-[11px] font-mono uppercase text-slate-400 mb-2">
                      Key Topics & Focus:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeSkill.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-[11px] font-mono text-slate-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-[11px] text-slate-400 font-mono">
                    <span className="text-cyan-400 font-semibold">Self-Evaluation:</span> Focused on clear comprehension, clean syntax, and practical problem application rather than claiming early mastery.
                  </div>
                </div>
              ) : (
                <div className="text-xs text-slate-400">Hover or click any skill card to inspect current focus.</div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
