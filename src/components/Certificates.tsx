import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CERTIFICATES } from '../data/portfolioData';
import { Certificate } from '../types';
import { Award, CheckCircle, ExternalLink, FileCheck, Layers, ShieldCheck, Sparkles, X } from 'lucide-react';

export const Certificates: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <section 
      id="certificates" 
      className="py-24 relative overflow-hidden bg-[#050811] border-t border-slate-800/80"
      aria-label="Certificates and Learning Milestones"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>AUTHENTICATED ACCREDITATIONS // MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            LEARNING MILESTONES
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Verified online learning certifications in Python programming, data analytics, and visual reasoning completed alongside university coursework.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between text-left group backdrop-blur-sm"
            >
              <div>
                {/* Issuer Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded border ${
                    cert.organization.includes('IBM')
                      ? 'bg-blue-950/80 text-blue-300 border-blue-800'
                      : 'bg-emerald-950/80 text-emerald-300 border-emerald-800'
                  }`}>
                    {cert.organization}
                  </span>
                  <div className="p-1.5 rounded-md bg-slate-800 text-cyan-400">
                    <FileCheck className="w-4 h-4" />
                  </div>
                </div>

                {/* Certificate Title */}
                <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-200 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  {cert.category}
                </div>

                {/* Verification Note */}
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {cert.verificationNote}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => setActiveCert(cert)}
                  className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold transition-colors cursor-pointer border border-slate-700/60 hover:border-cyan-500/40"
                >
                  <span>VIEW CERTIFICATE SPEC</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Truthful Note */}
        <div className="mt-12 text-center text-xs font-mono text-slate-400 max-w-xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Completed via IBM SkillsBuild and Wadhwani student learning initiatives.</span>
        </div>

      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {activeCert && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setActiveCert(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-cyan-500/30 p-6 sm:p-7 shadow-2xl text-left"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                  DIGITAL CREDENTIAL
                </span>
                <button 
                  onClick={() => setActiveCert(null)}
                  className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-5 space-y-4">
                <div className="text-xs font-mono text-cyan-400 uppercase">Issuing Organization</div>
                <div className="text-xl font-bold font-display text-white">
                  {activeCert.organization}
                </div>

                <div className="text-xs font-mono text-slate-400 uppercase">Program / Course</div>
                <div className="text-lg font-semibold text-cyan-200">
                  {activeCert.title}
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 leading-relaxed font-mono">
                  {activeCert.verificationNote}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Curriculum Completed & Verified</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => setActiveCert(null)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-medium transition-colors"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
