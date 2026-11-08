import React, { useState } from 'react';
import { Search, Sparkles, Code2, Terminal, Cpu, ChevronRight, CheckCircle2, X } from 'lucide-react';
import { SKILL_CATEGORIES, SkillCategory } from '../data/portfolioData';

export const SkillsGrid: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillCategory | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-emerald-500" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-cyan-500" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      default:
        return <Code2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-slate-200 dark:border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono font-medium uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            Competencies &amp; Technical Depth
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
            Core Skills &amp; Areas of Expertise
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Structured around high-impact search architecture, production front-end engineering, and enterprise AI prompt systems.
          </p>
        </div>

        {/* 5 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((skill, index) => {
            const isWide = index === 4; // Technical Stack spans across 2 columns on lg
            return (
              <div
                key={skill.id}
                className={`p-6 sm:p-7 rounded-2xl glass-card glass-card-interactive flex flex-col justify-between group cursor-pointer border border-slate-200 dark:border-white/[0.08] ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                onClick={() => setSelectedSkill(skill)}
              >
                <div>
                  {/* Card Top: Index & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      0{index + 1}. Domain
                    </span>
                    <div className="w-9 h-9 rounded-xl glass-subtle flex items-center justify-center transition-transform group-hover:scale-105">
                      {getIcon(skill.icon)}
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    {skill.fullDesc}
                  </p>

                  {/* Clean unboxed tags with typographic separators */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.08]">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {skill.tags.map((tag, tIndex) => (
                        <React.Fragment key={tag}>
                          <span className="text-slate-700 dark:text-slate-300">{tag}</span>
                          {tIndex < skill.tags.length - 1 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center justify-between text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Detail Modal */}
        {selectedSkill && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setSelectedSkill(null)}
          >
            <div
              className="glass-card max-w-xl w-full p-8 rounded-2xl border border-white/20 shadow-2xl space-y-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="text-xs font-mono font-semibold uppercase text-emerald-400">
                  Competency Specification
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedSkill.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  {selectedSkill.fullDesc}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="text-xs font-mono uppercase text-slate-400">
                  Technological Capabilities &amp; Standards
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-mono text-slate-300 rounded-lg glass-subtle border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="px-5 py-2 text-xs font-semibold rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-colors"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
