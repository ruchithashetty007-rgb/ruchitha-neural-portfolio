import React from 'react';
import { motion } from 'motion/react';
import { WHAT_DRIVES_ME, PERSONAL_INFO } from '../data/portfolioData';
import { BookOpen, Compass, Cpu, Layers, Sparkles, Terminal, Code2, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5 text-cyan-400" />,
  BookOpen: <BookOpen className="w-5 h-5 text-blue-400" />,
  Cpu: <Cpu className="w-5 h-5 text-violet-400" />,
  Layers: <Layers className="w-5 h-5 text-emerald-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
};

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden bg-[#070b16] border-t border-slate-800/80"
      aria-label="Behind the Code"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Bio statement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Terminal className="w-3.5 h-3.5" />
              <span>PERSPECTIVE // PROFILE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              BEHIND THE CODE
            </h2>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none" />
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                “{PERSONAL_INFO.shortBio}”
              </p>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-cyan-400 font-semibold">RUCHITHA</span>
                <span>B.Tech AI & DS • 2nd Year</span>
              </div>
            </div>

            {/* Quick Core Philosophy callout */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>Dedicated student builder • Truthful credentials • Practical implementations</span>
            </div>
          </motion.div>

          {/* Right: What drives me */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="text-left mb-6">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Values & Motives</div>
              <h3 className="text-2xl font-bold font-display text-white mt-1">What Drives Me</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {WHAT_DRIVES_ME.map((item, index) => (
                <div
                  key={item.title}
                  id={`drive-item-${index}`}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-200 text-left flex flex-col justify-between group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                      {iconMap[item.icon] || <Sparkles className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <h4 className="font-semibold font-display text-white text-base">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
