import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, CheckCircle2, ShieldCheck, Database, Code2, Cpu, Sparkles, Globe } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  clientOrContext: string;
  year: string;
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  imageSrc?: string;
  architectureNote: string;
  liveUrl?: string;
  isFlagship?: boolean;
}

export const SelectedProjects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'shadowtalk-ai',
      isFlagship: true,
      title: 'ShadowTalk AI — Autonomous Agentic Workspace & AI Intelligence Platform',
      category: 'Flagship & Most Successful Project · Founder & Lead Architect',
      clientOrContext: 'shadowtalk-ai.com · Production Platform',
      year: '2025 – Present',
      liveUrl: 'https://www.shadowtalk-ai.com',
      summary:
        'Zain’s biggest, most ambitious, and successful project. ShadowTalk AI is an autonomous, multi-tool agentic AI workspace engineered to move far beyond conventional conversational chatbots. It empowers users and developers with autonomous agent missions (researching, code writing, executing tools, and synthesizing findings), interactive deep-research canvases, encrypted chat channels, and terminal-grade execution logs.',
      highlights: [
        'Multi-Agent Mission Pipeline (Nexus, Codex, Spectre) executing autonomous multi-step research and code workflows',
        'Interactive Deep Research Canvas with real-time tool execution streaming and citation verification',
        'Privacy-first architecture with encrypted communication channels and client-side ledger verification',
        'Built, designed, and architected by Zain Ahmed Patel as founder in Karachi, Pakistan, serving global users',
      ],
      metrics: [
        { label: 'Project Tier', value: 'Flagship #1' },
        { label: 'Live Domain', value: 'shadowtalk-ai.com' },
        { label: 'System Type', value: 'Agentic OS' },
      ],
      tags: ['Autonomous Agents', 'React 19', 'TypeScript', 'Deep Research Canvas', 'MCP Protocol', 'Encrypted Chat'],
      imageSrc: '/src/assets/images/shadowtalk_flagship_1794144879696.jpg',
      architectureNote:
        'Engineered with a concurrent agent orchestration graph that manages state transitions, tool call interrupts, and markdown artifact compilation with sub-50ms latency.',
    },
    {
      id: 'geo-search-engine',
      title: 'Generative Engine Optimization (GEO) & Semantic Search Architecture',
      category: 'Technical SEO & AI Search Integration',
      clientOrContext: 'Enterprise Search Optimization Initiative',
      year: '2026',
      summary:
        'Engineered an enterprise-grade search and generative engine optimization architecture designed to dominate both Google traditional organic results and modern AI answer engines (Perplexity, ChatGPT Search, and Google AI Overviews). Implemented nested Schema.org JSON-LD knowledge graphs, high-intent entity clustering, and instant server-side rendering for Core Web Vitals perfection.',
      highlights: [
        'Structured entity mapping using JSON-LD schemas (Organization, TechArticle, FAQ, and BreadcrumbList)',
        'Semantic content hierarchy and algorithmic answer-engine excerpt targeting',
        'Crawl budget minimization and automated dynamic XML sitemap generation',
        'Sub-800ms Time-to-First-Byte (TTFB) and 100/100 Lighthouse performance benchmark',
      ],
      metrics: [
        { label: 'Organic Impressions', value: '+142%' },
        { label: 'Lighthouse Score', value: '100 / 100' },
        { label: 'AI Answer Citations', value: '3.8x Growth' },
      ],
      tags: ['Next.js', 'TypeScript', 'Schema.org', 'Core Web Vitals', 'Semantic SEO', 'GEO'],
      imageSrc: '/src/assets/images/project_geo_analytics_1794142773594.jpg',
      architectureNote:
        'Eliminated render-blocking assets and optimized critical rendering paths to guarantee flawless perceptual indexing by search engine crawlers.',
    },
    {
      id: 'ai-developer-agent-pipeline',
      title: 'AI-Accelerated Development Pipeline & Model Context Protocol (MCP)',
      category: 'AI Engineering & Modern Front-End Tooling',
      clientOrContext: 'High-Velocity Full-Stack Prototype Engine',
      year: '2026',
      summary:
        'Architected an end-to-end agentic front-end development workflow leveraging Claude Code, Cursor AI rules, and Model Context Protocol (MCP) integrations. Enables rapid transformation of business specifications into fully typed, accessible React interfaces with zero regression.',
      highlights: [
        'Custom Cursor `.cursorrules` and Claude agent instructions enforcing strict WCAG AA accessibility',
        'Model Context Protocol (MCP) tool integrations for database and file orchestration',
        'Automated component stress-testing and visual regression harness',
        'Multi-theme dark/light mode token systems with zero CSS specificity leaks',
      ],
      metrics: [
        { label: 'Dev Velocity', value: '8x Faster' },
        { label: 'Test Coverage', value: '94.6%' },
        { label: 'Build Latency', value: '< 2.4s' },
      ],
      tags: ['Claude Code', 'Cursor AI', 'MCP Protocols', 'React 19', 'Tailwind CSS', 'Vite'],
      imageSrc: '/src/assets/images/project_ai_system_1794142773921.jpg',
      architectureNote:
        'Combines deterministic TypeScript validation with LLM agentic loops to deliver enterprise-grade code in hours rather than weeks.',
    },
    {
      id: 'firebase-realtime-console',
      title: 'Real-Time Firebase Telemetry, Inquiries Inbox & OAuth Security',
      category: 'Full-Stack Cloud Infrastructure & Auth',
      clientOrContext: 'Zain Patel Production Portfolio Backend',
      year: '2026',
      summary:
        'Constructed a production-grade full-stack backend utilizing Firebase Cloud Firestore and Firebase Authentication (OAuth 2.0). Features instant client inquiry routing with automated timestamping, visitor page view beacons, and an owner-gated administrative console.',
      highlights: [
        'Firebase Firestore cloud database persistence with atomic transaction writes',
        'Granular Firestore security rules enforcing read-only admin access for owner zaim98269@gmail.com',
        'Live visitor telemetry with user-agent, route, and referrer tracking',
        'Integrated tactile 3D capsule Google OAuth sign-in component with liquid orb shaders',
      ],
      metrics: [
        { label: 'Cloud Uptime', value: '99.99%' },
        { label: 'Write Latency', value: '38ms' },
        { label: 'Zero-Secret Client', value: '100% Secure' },
      ],
      tags: ['Firebase Firestore', 'Firebase Auth', 'OAuth 2.0', 'Security Rules', 'TypeScript'],
      architectureNote:
        'Engineered with zero client-side secret exposure, relying on Firestore security rules and OAuth token verification for data isolation.',
    },
  ];

  return (
    <section id="case-studies" className="py-24 border-t border-slate-200 dark:border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Selected Works &amp; Flagship Ventures
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
              Featured Case Studies &amp; Products
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
              Led by flagship venture <strong className="text-slate-900 dark:text-white font-semibold">ShadowTalk AI</strong>, alongside production architectures engineered for measurable search discovery and AI-assisted execution.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>All systems verified &amp; benchmarked in production</span>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {projects.map((project, idx) => {
            const isFlagship = project.isFlagship;
            return (
              <div
                key={project.id}
                className={`glass-card rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border transition-all ${
                  isFlagship
                    ? 'border-emerald-500/40 dark:border-emerald-400/30 ring-1 ring-emerald-500/20 shadow-xl shadow-emerald-500/5'
                    : 'border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.16]'
                }`}
              >
                {/* Media Container (if image exists) */}
                {project.imageSrc && (
                  <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-slate-950 overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/[0.08] group">
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Top Overlay Badge */}
                    {isFlagship && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500 text-slate-950 font-bold text-xs shadow-lg">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>FLAGSHIP PROJECT</span>
                        </span>
                      </div>
                    )}

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
                      <span className="bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                        {isFlagship ? 'Biggest & Most Successful Venture' : `Case Study 0${idx}`}
                      </span>
                      <span className="text-slate-300">{project.year}</span>
                    </div>
                  </div>
                )}

                {/* Content Details */}
                <div className={`${project.imageSrc ? 'lg:col-span-7' : 'lg:col-span-12'} p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6`}>
                  <div className="space-y-4">
                    {/* Category & Client Unboxed Metadata */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span className={isFlagship ? 'text-emerald-500 dark:text-emerald-400 font-bold' : 'text-emerald-600 dark:text-emerald-400 font-semibold'}>
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.clientOrContext}</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-snug">
                        {project.title}
                      </h3>
                      {isFlagship && (
                        <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                          ★ Zain Patel&apos;s Primary Creation &amp; Signature Architectural Achievement
                        </div>
                      )}
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Architecture Highlights */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                        Architectural Deliverables
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        {project.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Metrics Row, Tags & Live Link CTA */}
                  <div className="pt-6 border-t border-slate-100 dark:border-white/[0.08] space-y-5">
                    {/* Performance Metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-3 rounded-xl glass-subtle">
                          <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">{m.label}</div>
                          <div className="text-sm sm:text-base font-bold font-mono text-slate-900 dark:text-white tabular-nums mt-0.5 truncate">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Action Strip: Tags + Live URL Button */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Clean unboxed tags with typographic separators */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                        <span className="text-slate-400 font-sans">Stack:</span>
                        {project.tags.map((tag, tIdx) => (
                          <React.Fragment key={tag}>
                            <span className="text-slate-700 dark:text-slate-300">{tag}</span>
                            {tIdx < project.tags.length - 1 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>}
                          </React.Fragment>
                        ))}
                      </div>

                      {/* Live Link Button if available */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs whitespace-nowrap transition-all ${
                            isFlagship
                              ? 'bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-md shadow-emerald-500/20'
                              : 'glass-subtle text-slate-900 dark:text-white hover:border-slate-400'
                          }`}
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Visit shadowtalk-ai.com</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
