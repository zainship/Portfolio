import React from 'react';
import { BarChart3, Zap, Layout, Search, Bot, Layers, ArrowUpRight, CheckCircle2, Sparkles, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const strengthIcons = [
    <BarChart3 className="w-5 h-5 text-emerald-500" key="data" />,
    <Zap className="w-5 h-5 text-cyan-500" key="ai" />,
    <Layout className="w-5 h-5 text-indigo-500" key="design" />,
  ];

  return (
    <section id="about" className="py-24 border-t border-slate-200 dark:border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-mono font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Professional Profile &amp; Approach
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering Philosophy &amp; Founder Story
          </h2>
          
          {/* Executive Summary Card */}
          <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-200 dark:border-white/[0.08] space-y-4">
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              &ldquo;{PERSONAL_INFO.summary}&rdquo;
            </p>
          </div>

          {/* Featured Founder Box: ShadowTalk AI */}
          <div className="p-6 sm:p-8 rounded-2xl glass-card border border-emerald-500/30 bg-emerald-500/[0.03] relative space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Signature Creation &amp; Biggest Success
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  ShadowTalk AI (shadowtalk-ai.com)
                </h3>
              </div>

              <a
                href="https://www.shadowtalk-ai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs transition-colors self-start sm:self-auto"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Visit shadowtalk-ai.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              ShadowTalk AI stands as Zain&apos;s proudest and most successful technical achievement. Conceiving and architecting the platform from Karachi, Pakistan, he built an end-to-end agentic AI ecosystem where autonomous models execute multi-step research missions, write and verify code, and format complex findings inside a unified desktop and web workspace.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl glass-subtle text-xs">
                <div className="font-semibold text-slate-900 dark:text-white">Agentic Orchestration</div>
                <div className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">Autonomous multi-tool missions</div>
              </div>
              <div className="p-3 rounded-xl glass-subtle text-xs">
                <div className="font-semibold text-slate-900 dark:text-white">Deep Research Canvas</div>
                <div className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">Live tool execution streaming</div>
              </div>
              <div className="p-3 rounded-xl glass-subtle text-xs">
                <div className="font-semibold text-slate-900 dark:text-white">Privacy Architecture</div>
                <div className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">Encrypted chat &amp; client ledger</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Strengths Grid */}
        <div className="space-y-6">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Core Architectural Principles
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PERSONAL_INFO.strengths.map((strength, index) => (
              <div
                key={strength.title}
                className="p-6 sm:p-7 rounded-2xl glass-card glass-card-interactive flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl glass-subtle flex items-center justify-center mb-5">
                    {strengthIcons[index]}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {strength.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {strength.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Principle 0{index + 1}</span>
                  <span className="text-emerald-500">Active Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Technical Synergy Section */}
        <div className="mt-16 p-8 rounded-2xl glass-card border border-slate-200 dark:border-white/[0.08]">
          <div className="max-w-xl mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              The Engineering Advantage
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Unifying Technical SEO, AI Velocity &amp; Modern Front-End
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              Most front-end developers ignore search crawl architecture. Most SEO specialists never write production code. Zain bridges both disciplines with modern AI-accelerated velocity demonstrated in ShadowTalk AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl glass-subtle space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
                <Search className="w-4 h-4" />
                <span>Search Dominance (SEO/GEO)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Clean semantic entity schemas, perfect Core Web Vitals, and AI answer engine excerpt positioning ensure every product gets discovered organically.
              </p>
            </div>

            <div className="p-5 rounded-xl glass-subtle space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 font-mono">
                <Bot className="w-4 h-4" />
                <span>AI Agentic Velocity</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Leveraging Claude Code loops, Cursor AI orchestration, and Model Context Protocol (MCP) servers as architected in ShadowTalk AI.
              </p>
            </div>

            <div className="p-5 rounded-xl glass-subtle space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 font-mono">
                <Layers className="w-4 h-4" />
                <span>Production Front-End</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Accessible (WCAG AA), responsive React 19 architecture with zero visual fluff, fast hydration, and type-safe data modeling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
