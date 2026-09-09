import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ACADEMIC_JOURNEY } from '../data/portfolioData';
import { Award, BookOpen, CheckCircle2, ChevronRight, Database, GraduationCap, MapPin, Sparkles, TrendingUp } from 'lucide-react';

export const JourneyData: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<number>(3); // Default to current B.Tech

  return (
    <section 
      id="journey" 
      className="py-24 relative overflow-hidden bg-[#050811] border-t border-slate-800/80"
      aria-label="Academic Journey as Data"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono">
            <Database className="w-3.5 h-3.5 text-cyan-400" />
            <span>DATASTREAM RECORD // ACADEMIC LEDGER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            MY JOURNEY AS DATA
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Tracking verified academic milestones as sequential telemetry points — demonstrating consistent dedication from foundational schooling to AI & Data Science engineering.
          </p>
        </div>

        {/* Aggregate Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="text-[11px] font-mono text-slate-400 uppercase">10th / SSLC Score</div>
            <div className="text-2xl font-bold font-display text-white mt-1">93.76%</div>
            <div className="text-xs text-cyan-400 font-mono mt-0.5">586 / 625 Marks</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="text-[11px] font-mono text-slate-400 uppercase">PUC Board Score</div>
            <div className="text-2xl font-bold font-display text-white mt-1">97.86%</div>
            <div className="text-xs text-violet-400 font-mono mt-0.5">587 / 600 Marks</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="text-[11px] font-mono text-slate-400 uppercase">KCET State Rank</div>
            <div className="text-2xl font-bold font-display text-white mt-1">14K Rank</div>
            <div className="text-xs text-blue-400 font-mono mt-0.5">100 / 180 Marks</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="text-[11px] font-mono text-slate-400 uppercase">Undergraduate Status</div>
            <div className="text-2xl font-bold font-display text-emerald-400 mt-1">2nd Year</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">REVA Univ • Merit</div>
          </div>
        </div>

        {/* Interactive Data Timeline Flow */}
        <div className="relative">
          {/* Central Connecting Data Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-gradient-to-r from-blue-500/20 via-cyan-500/40 to-violet-500/40 z-0">
            {/* Animated data packet traveling on line */}
            <motion.div 
              className="w-8 h-1 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8]"
              animate={{ x: ['0%', '100%'] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            />
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {ACADEMIC_JOURNEY.map((node, index) => {
              const isSelected = selectedNode === index;
              return (
                <motion.div
                  key={node.level}
                  id={`journey-node-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  onClick={() => setSelectedNode(index)}
                  className={`cursor-pointer text-left rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-slate-900 border-cyan-500/60 shadow-xl shadow-cyan-500/10 ring-1 ring-cyan-500/30' 
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                  }`}
                >
                  <div>
                    {/* Node Header & Indicator */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700/60">
                        {node.metricType}
                      </span>
                      <div className={`w-3 h-3 rounded-full border-2 transition-all ${
                        isSelected 
                          ? 'border-cyan-400 bg-cyan-400 shadow-[0_0_10px_#38bdf8]' 
                          : 'border-slate-600 bg-slate-800'
                      }`} />
                    </div>

                    {/* Stage Title */}
                    <div className="text-xs font-mono text-slate-400 mb-1">{node.period}</div>
                    <h3 className="text-lg font-bold text-white font-display mb-3">
                      {node.level}
                    </h3>

                    {/* Main Score Callout */}
                    <div className="my-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/90">
                      <div className="text-2xl font-black font-display tracking-tight text-white flex items-baseline gap-2">
                        <span>{node.score}</span>
                        {node.percentage && (
                          <span className="text-sm font-semibold text-emerald-400 font-mono">
                            {node.percentage}
                          </span>
                        )}
                      </div>
                      {node.rank && (
                        <div className="text-xs font-mono text-cyan-300 mt-1 font-semibold">
                          ★ {node.rank}
                        </div>
                      )}
                      {node.admissionMode && (
                        <div className="text-xs font-mono text-emerald-400 mt-1 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{node.admissionMode}</span>
                        </div>
                      )}
                    </div>

                    {/* Institution / Location */}
                    {node.institution && (
                      <div className="text-xs text-slate-300 font-medium mt-2 flex items-start gap-1.5">
                        <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <span>{node.institution}</span>
                          {node.location && (
                            <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                              <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                              <span>{node.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Highlight Footer */}
                  <div className="mt-4 pt-3 border-t border-slate-800/70 text-xs text-slate-400 leading-relaxed">
                    {node.highlight}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Interactive Deep-Dive Details Banner */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-slate-950 border border-blue-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-cyan-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider">
                Active Engineering Milestone
              </div>
              <div className="text-sm sm:text-base font-medium text-slate-200">
                Merit-admitted 2nd-Year AI & Data Science student at REVA University focusing on practical execution.
              </div>
            </div>
          </div>
          <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700 whitespace-nowrap">
            STATUS: ACTIVE DEGREE TRACK
          </div>
        </div>

      </div>
    </section>
  );
};
