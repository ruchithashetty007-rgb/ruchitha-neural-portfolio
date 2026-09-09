import React from 'react';
import { motion } from 'motion/react';
import { CAREER_PIPELINE } from '../data/portfolioData';
import { ArrowRight, BookMarked, CheckCircle2, FlaskConical, Hammer, Sparkles, TrendingUp } from 'lucide-react';

const iconPipelineMap: Record<string, React.ReactNode> = {
  BookMarked: <BookMarked className="w-5 h-5 text-blue-400" />,
  Hammer: <Hammer className="w-5 h-5 text-cyan-400" />,
  FlaskConical: <FlaskConical className="w-5 h-5 text-teal-400" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-violet-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-400" />,
};

export const CareerVision: React.FC = () => {
  return (
    <section 
      id="vision" 
      className="py-24 relative overflow-hidden bg-[#050811] border-t border-slate-800/80"
      aria-label="Career Vision and Pipeline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRAJECTORY // HORIZON</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            WHERE I'M HEADING
          </h2>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg font-medium">
            “My goal is to continuously strengthen my technical foundations and grow toward a career in Data Science and Artificial Intelligence.”
          </p>
        </div>

        {/* Visual Pipeline Flow */}
        <div className="relative mt-8">
          
          {/* Animated Flow Track */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-1 -translate-y-1/2 bg-gradient-to-r from-blue-500/20 via-cyan-500/30 to-emerald-500/30 rounded-full z-0">
            <motion.div 
              className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 shadow-[0_0_12px_#38bdf8]"
              animate={{ x: ['0%', '1000%'] }}
              transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
            />
          </div>

          {/* Pipeline Stage Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {CAREER_PIPELINE.map((stage, index) => (
              <motion.div
                key={stage.name}
                id={`pipeline-stage-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/40 hover:bg-slate-900 shadow-xl transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded border border-slate-700">
                      PHASE {stage.step}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700/80 group-hover:scale-105 transition-transform">
                      {iconPipelineMap[stage.icon]}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                    {stage.name}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {stage.detail}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Iteration {index + 1}</span>
                  {index < CAREER_PIPELINE.length - 1 ? (
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  ) : (
                    <span className="text-emerald-400 font-bold">IMPACT</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
