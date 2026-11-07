import React, { useState } from 'react';
import { Sparkles, Terminal, Search, Bot, ArrowRight, Check, Code, Database, Eye } from 'lucide-react';

export const InteractiveLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'geo' | 'vibe' | 'prompt'>('geo');
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const samplePrompt = `[TASK] Architect a responsive portfolio showcase component.
[CONTEXT] The user is a certified SEO specialist, GEO engineer, and vibe coder.
[CONSTRAINTS] Zero pills for static metadata; WCAG AA contrast; Tailwind v4 syntax; no hallucinated scoreboards.
[OUTPUT SCHEMA] Clean TypeScript React component with accessible ARIA tags and semantic HTML5.`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(samplePrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <section id="interactive-lab" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Interactive Engineering Lab
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
            GEO, Vibe Coding &amp; Prompting in Action
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Explore the exact frameworks and workflows Zain uses to bridge traditional web development with AI systems.
          </p>
        </div>

        {/* Tab Controls (Functional Segmented Control) */}
        <div className="flex items-center gap-1 p-1 rounded-xl glass-card max-w-md mb-8">
          <button
            onClick={() => setActiveTab('geo')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'geo'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Search className="w-3.5 h-3.5 text-emerald-400" />
            <span>SEO vs GEO</span>
          </button>

          <button
            onClick={() => setActiveTab('vibe')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'vibe'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Vibe / MCP Stack</span>
          </button>

          <button
            onClick={() => setActiveTab('prompt')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'prompt'
                ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Prompt Framework</span>
          </button>
        </div>

        {/* Tab Content 1: SEO vs GEO Architecture */}
        {activeTab === 'geo' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Traditional SEO Box */}
            <div className="p-6 sm:p-8 rounded-2xl glass-card flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Layer 1 · Traditional Search Engine Optimization
                </div>
                <h3 className="text-xl font-bold text-white">
                  Crawler &amp; Indexer Target (Google, Bing)
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Focuses on keywords, crawlability, backlink authority, and Core Web Vitals to rank links in the SERP.
                </p>

                <div className="mt-6 space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg glass-subtle text-slate-300">
                    <span className="text-emerald-400">&lt;title&gt;</span> Front-End Developer &amp; SEO Specialist | Zain Ahmed Patel
                  </div>
                  <div className="p-3 rounded-lg glass-subtle text-slate-300">
                    <span className="text-cyan-400">&lt;meta name=&quot;description&quot;&gt;</span> Fast, search-friendly, accessible web experiences.
                  </div>
                  <div className="p-3 rounded-lg glass-subtle text-slate-300">
                    <span className="text-indigo-400">&lt;link rel=&quot;canonical&quot;&gt;</span> https://zainahmedpatel.dev
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400">
                Primary Goal: Top 3 organic rank on Google SERP.
              </div>
            </div>

            {/* Generative Engine Optimization Box */}
            <div className="p-6 sm:p-8 rounded-2xl glass-emerald-card flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                  Layer 2 · Generative Engine Optimization (GEO)
                </div>
                <h3 className="text-xl font-bold text-white">
                  Perceptual AI Answer Engine (ChatGPT, Claude, Perplexity)
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Focuses on structured entities, Schema.org JSON-LD graphs, citation grounding, and direct answer synthesis so LLMs recommend you directly.
                </p>

                <div className="mt-6 space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg glass-subtle text-slate-300">
                    <span className="text-emerald-400">&quot;@type&quot;: &quot;Person&quot;</span>, &quot;name&quot;: &quot;Zain Ahmed Patel&quot;
                  </div>
                  <div className="p-3 rounded-lg glass-subtle text-slate-300">
                    <span className="text-cyan-400">&quot;knowsAbout&quot;:</span> [&quot;Front-End Development&quot;, &quot;GEO&quot;, &quot;MCP&quot;, &quot;Cursor&quot;]
                  </div>
                  <div className="p-3 rounded-lg glass-subtle text-slate-300">
                    <span className="text-indigo-400">&quot;hasCredential&quot;:</span> IBM SEO &amp; Scrimba Vibe Coding
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-emerald-400 font-medium">
                Primary Goal: Direct citation &amp; recommendation in AI synthesis.
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Vibe Coding & MCP Stack */}
        {activeTab === 'vibe' && (
          <div className="p-6 sm:p-8 rounded-2xl glass-card">
            <div className="max-w-2xl mb-8">
              <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                Vibe Coding Architecture
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                From Natural Language Intent to Tested Production Apps
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Zain uses agentic coding workflows where AI assistants read codebase context through Model Context Protocol (MCP) servers, preventing hallucinations and ensuring clean code.
              </p>
            </div>

            {/* Workflow Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="text-xs font-mono text-emerald-500 font-bold">01. INTENT &amp; SPEC</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">Structured Prompting</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Google Prompting framework defining context, boundaries, and acceptance criteria.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="text-xs font-mono text-cyan-500 font-bold">02. CONTEXT HARNESS</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">MCP Servers</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Model Context Protocol connecting tools directly to files, git history, and schemas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="text-xs font-mono text-indigo-500 font-bold">03. AGENTIC LOOPS</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">Claude Code &amp; Cursor</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Autonomous generation with continuous terminal feedback, lint checks, and test runner.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="text-xs font-mono text-emerald-500 font-bold">04. HUMAN POLISH</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">Clean UI &amp; Accessibility</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Auditing WCAG AA contrast, responsiveness, Core Web Vitals, and zero-pill discipline.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 3: Prompt Engineering Anatomy */}
        {activeTab === 'prompt' && (
          <div className="p-6 sm:p-8 rounded-2xl glass-card">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                  Google Prompting Essentials Certified
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Structured Prompt Architecture
                </h3>
              </div>
              <button
                onClick={handleCopyPrompt}
                className="px-3.5 py-2 text-xs font-semibold rounded-lg glass-subtle hover:border-white/20 text-slate-300 transition-colors flex items-center gap-1.5 self-start"
              >
                {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Code className="w-3.5 h-3.5 text-cyan-400" />}
                <span>{copiedPrompt ? 'Copied to Clipboard' : 'Copy Prompt Template'}</span>
              </button>
            </div>

            <pre className="p-5 rounded-xl glass-subtle text-slate-200 font-mono text-xs overflow-x-auto leading-relaxed border border-white/10">
              <code>{samplePrompt}</code>
            </pre>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-6 text-xs">
              <div className="p-3 rounded-lg glass-subtle">
                <div className="font-bold text-emerald-400 mb-1">[TASK]</div>
                <div className="text-slate-400">Unambiguous objective and deliverables.</div>
              </div>
              <div className="p-3 rounded-lg glass-subtle">
                <div className="font-bold text-cyan-400 mb-1">[CONTEXT]</div>
                <div className="text-slate-400">Persona, target audience, and business goals.</div>
              </div>
              <div className="p-3 rounded-lg glass-subtle">
                <div className="font-bold text-indigo-400 mb-1">[CONSTRAINTS]</div>
                <div className="text-slate-400">Strict negative rules &amp; anti-patterns banned.</div>
              </div>
              <div className="p-3 rounded-lg glass-subtle">
                <div className="font-bold text-emerald-400 mb-1">[SCHEMA]</div>
                <div className="text-slate-400">Exact structure of expected output.</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
