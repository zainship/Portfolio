import React, { useState } from 'react';
import { Search, Terminal, Sparkles, Check, Copy, Code2, Cpu, Globe2, ShieldCheck, ArrowRight } from 'lucide-react';

export const InteractiveLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'geo' | 'mcp' | 'prompt'>('geo');
  const [auditUrl, setAuditUrl] = useState('https://zainpatel.dev');
  const [copiedCode, setCopiedCode] = useState(false);
  const [promptRole, setPromptRole] = useState('Senior Front-End Architect');
  const [promptTask, setPromptTask] = useState('Implement a zero-pill accessible React component with Tailwind v4');

  const generatedPrompt = `[ROLE] You are a ${promptRole}.
[OBJECTIVE] ${promptTask}.
[CONTEXT] The application is a high-performance web system requiring 100/100 Core Web Vitals and WCAG AA compliance.
[CONSTRAINTS]
- Zero static pill enclosures (render metadata as unboxed text with · separators)
- Single-line controls with whitespace-nowrap and truncate
- Responsive desktop (1440px) and mobile (<15% sticky cap)
- Strict TypeScript with semantic HTML5 elements
[OUTPUT SCHEMA] Clean, self-contained TSX module with full typing and no mock stubs.`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="interactive-lab" className="py-24 border-t border-slate-200 dark:border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Technical Architecture &amp; Search Workbench
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
            Interactive Engineering Lab
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Explore the exact frameworks and workflows Zain uses to bridge traditional technical SEO with AI search engines and agentic coding loops.
          </p>
        </div>

        {/* Tab Controls (Functional Segmented Control) */}
        <div className="flex items-center gap-1 p-1 rounded-xl glass-subtle max-w-md mb-8 border border-slate-200 dark:border-white/[0.08]">
          <button
            onClick={() => setActiveTab('geo')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'geo'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Search className="w-3.5 h-3.5 text-emerald-500" />
            <span>SEO &amp; GEO Engine</span>
          </button>

          <button
            onClick={() => setActiveTab('mcp')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'mcp'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-500" />
            <span>AI &amp; MCP Stack</span>
          </button>

          <button
            onClick={() => setActiveTab('prompt')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'prompt'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Google Prompting</span>
          </button>
        </div>

        {/* Tab 1: SEO & GEO Engine */}
        {activeTab === 'geo' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 glass-card p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/[0.08]">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono font-semibold uppercase text-emerald-600 dark:text-emerald-400">
                Technical SEO vs. Generative Engine Optimization
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                How Modern Search Really Works
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Traditional SEO targeted keyword density and backlink signals. Generative Engines (Perplexity, ChatGPT, Google AI Overviews) parse semantic entity graphs, citation authority, and structured data schemas.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl glass-subtle space-y-1">
                  <div className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                    Traditional Organic Search
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300">
                    Keyword matching, page title tags, backlinks, Core Web Vitals crawling.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl glass-subtle space-y-1">
                  <div className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400">
                    Generative Engine Optimization (GEO)
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300">
                    Semantic knowledge graphs (Schema.org), structured data entities, direct factual citations by LLMs.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-950 p-6 rounded-xl border border-white/10 font-mono text-xs text-slate-300 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-slate-400 text-[11px]">Schema.org Knowledge Graph (JSON-LD)</span>
                <span className="text-emerald-400 text-[11px]">Validated &amp; Search-Ready</span>
              </div>
              <pre className="text-slate-300 overflow-x-auto text-[11px] leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://zainpatel.dev/#person",
      "name": "Zain Ahmed Patel",
      "jobTitle": "Front-End Engineer & Technical SEO Architect",
      "email": "zaim98269@gmail.com",
      "knowsAbout": [
        "Generative Engine Optimization (GEO)",
        "Technical SEO & Core Web Vitals",
        "React & TypeScript Engineering",
        "Prompt Engineering Architectures"
      ],
      "alumniOf": "Coursera Certified IBM & Google Fellow"
    }
  ]
}`}
              </pre>
            </div>
          </div>
        )}

        {/* Tab 2: AI & MCP Stack */}
        {activeTab === 'mcp' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 glass-card p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/[0.08]">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono font-semibold uppercase text-cyan-600 dark:text-cyan-400">
                Agentic Loops &amp; Tool Protocols
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Modern AI Development Stack
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Rather than using AI merely for chat, Zain configures automated development environments with Model Context Protocol (MCP) servers and deterministic Cursor rules.
              </p>
              
              <div className="space-y-2 pt-2 text-xs font-mono text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Claude Code CLI &amp; autonomous agent loops</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Model Context Protocol (MCP) file &amp; DB servers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Strict zero-pill WCAG AA frontend verification</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-950 p-6 rounded-xl border border-white/10 font-mono text-xs text-slate-300 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-slate-400 text-[11px]">.cursorrules Architecture Profile</span>
                <span className="text-cyan-400 text-[11px]">Production Standard</span>
              </div>
              <pre className="text-slate-300 overflow-x-auto text-[11px] leading-relaxed">
{`# Project Guidelines for Zain Ahmed Patel Studio
- Framework: React 19 + TypeScript + Vite
- Design System: Architectural Glassmorphism (Tailwind CSS v4)
- Accessibility: Strict WCAG AA contrast (4.5:1 text, 3:1 large)
- Anti-Slop Discipline: Zero static pills; unboxed metadata with ·
- Performance: 100/100 Core Web Vitals; no render-blocking assets
- Cloud Backend: Firebase Firestore with atomic transactional writes`}
              </pre>
            </div>
          </div>
        )}

        {/* Tab 3: Google Prompting */}
        {activeTab === 'prompt' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 glass-card p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/[0.08]">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono font-semibold uppercase text-indigo-600 dark:text-indigo-400">
                Google Prompting Essentials Standard
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Interactive Prompt Constructor
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Applies the official Google 5-part prompting framework: Role, Objective, Context, Constraints, and Output Schema.
              </p>

              <div className="space-y-3 pt-2">
                <div>
                  <label className="text-[11px] font-mono text-slate-500 uppercase">Target Role</label>
                  <input
                    type="text"
                    value={promptRole}
                    onChange={(e) => setPromptRole(e.target.value)}
                    className="w-full mt-1 px-3 py-2 text-xs rounded-lg glass-subtle border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-500 uppercase">Primary Task</label>
                  <input
                    type="text"
                    value={promptTask}
                    onChange={(e) => setPromptTask(e.target.value)}
                    className="w-full mt-1 px-3 py-2 text-xs rounded-lg glass-subtle border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-950 p-6 rounded-xl border border-white/10 font-mono text-xs text-slate-300 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-slate-400 text-[11px]">Generated Production Prompt</span>
                  <button
                    onClick={handleCopyPrompt}
                    className="flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied' : 'Copy Prompt'}</span>
                  </button>
                </div>
                <pre className="text-slate-300 overflow-x-auto text-[11px] leading-relaxed pt-3 whitespace-pre-wrap">
                  {generatedPrompt}
                </pre>
              </div>

              <div className="pt-4 border-t border-white/10 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Google Prompting Essentials Certified</span>
                <span className="text-slate-400">Formula: R · O · C · C · S</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
