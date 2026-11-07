import React from 'react';
import { BarChart3, Zap, Layout, Search, Bot, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const strengthIcons = [
    <BarChart3 className="w-5 h-5 text-emerald-500" key="data" />,
    <Zap className="w-5 h-5 text-cyan-500" key="ai" />,
    <Layout className="w-5 h-5 text-indigo-500" key="design" />,
  ];

  return (
    <section id="about" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-mono font-medium uppercase tracking-widest text-emerald-400">
            Background &amp; Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Professional Summary
          </h2>
          
          {/* Exact Resume Summary */}
          <div className="p-6 sm:p-8 rounded-2xl glass-card relative">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              &ldquo;{PERSONAL_INFO.summary}&rdquo;
            </p>
          </div>
        </div>

        {/* Core Strengths Grid */}
        <div className="space-y-6">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Core Strengths &amp; Work Ethic
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PERSONAL_INFO.strengths.map((strength, index) => (
              <div
                key={strength.title}
                className="p-6 rounded-2xl glass-card glass-card-interactive flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl glass-subtle flex items-center justify-center mb-5">
                    {strengthIcons[index]}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {strength.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {strength.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs font-mono text-slate-400">
                  <span>Pillar {index + 1} of 3</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Triple Synergy Section */}
        <div className="mt-16 p-8 rounded-2xl glass-card">
          <div className="max-w-xl mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              The Triple Advantage
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Why combining SEO + Vibe Coding + Front-End wins
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Most developers only write code. Most SEOs never touch the codebase. By unifying both with AI acceleration, every build is discoverable and fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl glass-subtle space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400 font-mono">
                <Search className="w-4 h-4" />
                <span>01. Built-in SEO &amp; GEO</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Structured data schemas, meta tags, Core Web Vitals, and AI engine entity mapping are baked into the architecture from Day 1.
              </p>
            </div>

            <div className="p-4 rounded-xl glass-subtle space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400 font-mono">
                <Bot className="w-4 h-4" />
                <span>02. Vibe Coding Velocity</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Using Claude Code, Cursor, and Copilot with Model Context Protocol (MCP) to turn specs into production code at unprecedented velocity.
              </p>
            </div>

            <div className="p-4 rounded-xl glass-subtle space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-indigo-400 font-mono">
                <Layers className="w-4 h-4" />
                <span>03. Polished Accessible UI</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Responsive layouts adhering to WCAG AA accessibility, semantic HTML5, zero-pill discipline, and sleek micro-interactions.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
