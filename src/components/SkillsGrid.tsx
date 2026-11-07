import React, { useState } from 'react';
import { Search, Sparkles, Code2, Terminal, Cpu, ChevronRight, CheckCircle2 } from 'lucide-react';
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
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-800">
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
            Structured around high-impact search architecture, front-end implementation, and AI prompt engineering.
          </p>
        </div>

        {/* 5 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((skill, index) => {
            const isWide = index === 4; // Technical Stack spans across 2 columns on lg
            return (
              <div
                key={skill.id}
                className={`p-6 rounded-2xl glass-card glass-card-interactive flex flex-col justify-between group cursor-pointer ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                onClick={() => setSelectedSkill(skill)}
              >
                <div>
                  {/* Card Top: Index & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      0{index + 1}. DISCIPLINE
                    </span>
                    <div className="w-9 h-9 rounded-xl glass-subtle flex items-center justify-center transition-transform group-hover:scale-110">
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
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {skill.tags.map((tag, tIndex) => (
                        <React.Fragment key={tag}>
                          <span className="text-slate-700 dark:text-slate-300">{tag}</span>
                          {tIndex < skill.tags.length - 1 && <span className="text-slate-300 dark:text-slate-700">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <span>View Breakdown &amp; Workflows</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Deep Dive on Selected Skill */}
        {selectedSkill && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setSelectedSkill(null)}
          >
            <div
              className="w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    {getIcon(selectedSkill.icon)}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-emerald-500 uppercase tracking-wider">
                      Area of Expertise
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {selectedSkill.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                {selectedSkill.fullDesc}
              </p>

              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                  Core Implementation Areas
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedSkill.tags.map((tag) => (
                    <div
                      key={tag}
                      className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
