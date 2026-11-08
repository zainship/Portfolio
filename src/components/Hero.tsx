import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowRight, ShieldCheck, Award, Terminal, Code2, Sparkles, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCertModal: (id?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCertModal }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="top" className="relative pt-12 pb-20 overflow-hidden">
      {/* Subtle top ambient illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[360px] bg-gradient-to-b from-emerald-500/[0.07] via-cyan-500/[0.04] to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Kicker with clean unboxed styling */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-medium tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              <span>Founder of ShadowTalk AI</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 dark:text-slate-400">Front-End &amp; Technical Architecture</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] text-balance">
              {PERSONAL_INFO.name}
            </h1>

            {/* Executive Title & Focus */}
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
                Founder of ShadowTalk AI &amp; Technical SEO Architect
              </div>
              <div className="text-sm font-mono text-slate-500 dark:text-slate-400">
                Autonomous AI Workspaces · Generative Engine Optimization (GEO) · Modern Front-End
              </div>
            </div>

            {/* Editorial Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-xl">
              Architect of <a href="https://www.shadowtalk-ai.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">ShadowTalk AI</a> (his flagship and most successful autonomous agentic platform). Engineering search-dominant web systems, generative engine optimization (GEO), and production-grade software with modern AI development velocity.
            </p>

            {/* Flagship Project Quick Banner */}
            <div className="p-3.5 rounded-xl glass-subtle border border-emerald-500/25 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-500">
                  <Globe className="w-4 h-4" />
                </span>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>ShadowTalk AI</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      FLAGSHIP
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    Autonomous multi-tool agentic AI workspace · shadowtalk-ai.com
                  </div>
                </div>
              </div>
              <a
                href="https://www.shadowtalk-ai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-3 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs flex items-center gap-1 transition-colors"
              >
                <span>Visit Platform</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Contact Details Quick Bar with 1-click copy */}
            <div className="pt-1 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono">
              {/* Email */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-subtle text-slate-700 dark:text-slate-300">
                <Mail className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors ml-1"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-subtle text-slate-700 dark:text-slate-300">
                <Phone className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0" />
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors ml-1"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-cyan-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Karachi, PK (Remote Worldwide)</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap inline-flex items-center gap-2"
              >
                <span>Inquire for Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#case-studies"
                className="px-5 py-3.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl glass-subtle hover:border-slate-300 dark:hover:border-white/20 transition-all whitespace-nowrap inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>Explore ShadowTalk AI Case Study</span>
              </a>

              <a
                href="#certifications"
                className="px-4 py-3.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap"
              >
                Coursera Credentials →
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Workstation Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl glass-card overflow-hidden border border-slate-200 dark:border-white/[0.08] p-2 group">
              <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-xl overflow-hidden bg-slate-950">
                <img
                  src="/src/assets/images/hero_workspace_1794142773706.jpg"
                  alt="Zain Ahmed Patel - Founder of ShadowTalk AI & Technical SEO Architect"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Architectural Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-900/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                  <div>
                    <div className="text-white font-semibold">Founder of ShadowTalk AI</div>
                    <div className="text-slate-400 text-[11px]">shadowtalk-ai.com · Autonomous Workspace</div>
                  </div>
                  <span className="text-emerald-400 font-bold tabular-nums">Flagship</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Metric Strip Below Hero Split */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400 tabular-nums tracking-tight">
              ShadowTalk AI
            </div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Flagship &amp; Biggest Success (shadowtalk-ai.com)
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 dark:text-white tabular-nums tracking-tight">
              3x Certified
            </div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Coursera Specializations (IBM · Google · Scrimba)
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-600 dark:text-cyan-400 tabular-nums tracking-tight">
              SEO + GEO
            </div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Traditional &amp; Generative Engine Dominance
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 dark:text-white tabular-nums tracking-tight">
              Firebase
            </div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Live Cloud Firestore Persistence &amp; OAuth 2.0
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
