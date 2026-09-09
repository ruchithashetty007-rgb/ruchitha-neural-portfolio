import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowRight, Code, ExternalLink, Eye, FolderCode, Github, Sparkles } from 'lucide-react';
import { HealthcareVisual, SmartFarmingVisual, GraphicsEditorVisual } from './ProjectVisuals';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section 
      id="projects" 
      className="py-24 relative overflow-hidden bg-[#060a14] border-t border-slate-800/80"
      aria-label="Academic and Practical Projects"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-300 text-xs font-mono">
            <FolderCode className="w-3.5 h-3.5 text-cyan-400" />
            <span>PRACTICAL IMPLEMENTATIONS // STAR SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            THINGS I'VE BUILT
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Detailed mini-case studies of engineering prototypes built through university coursework and independent technical curiosity.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-12">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={project.id}
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden backdrop-blur-sm"
              >
                {/* Subtle top border gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
                  
                  {/* Visual Simulation Display */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer overflow-hidden rounded-xl group-hover:shadow-lg transition-transform duration-300 group-hover:scale-[1.01]"
                    >
                      {project.visualType === 'healthcare' && <HealthcareVisual />}
                      {project.visualType === 'iot' && <SmartFarmingVisual />}
                      {project.visualType === 'graphics' && <GraphicsEditorVisual />}
                    </div>
                  </div>

                  {/* Project Details & Case Study Meta */}
                  <div className={`lg:col-span-7 flex flex-col justify-between text-left space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    <div>
                      {/* Number and Category */}
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-900/60">
                          PROJECT {project.number}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {project.category}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 
                        onClick={() => setSelectedProject(project)}
                        className="text-2xl sm:text-3xl font-extrabold text-white font-display hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-cyan-200/90 mt-1">
                        {project.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                        “{project.description}”
                      </p>
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-md bg-slate-800/90 border border-slate-700/80 text-xs font-mono text-slate-300 group-hover:border-cyan-500/40 group-hover:text-cyan-200 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-semibold text-xs tracking-wider shadow-md hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>VIEW PROJECT CASE STUDY</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-slate-200 text-xs font-mono font-medium transition-colors"
                        >
                          <Github className="w-4 h-4 text-cyan-400" />
                          <span>GITHUB</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </a>
                      ) : (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/40 border border-slate-800 text-slate-400 hover:text-slate-300 text-xs font-mono transition-colors cursor-pointer"
                        >
                          <Code className="w-3.5 h-3.5" />
                          <span>CODE SPECS</span>
                        </button>
                      )}
                    </div>

                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
