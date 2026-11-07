import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowRight, ShieldCheck, Sparkles, Terminal, Award } from 'lucide-react';
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
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-mono font-medium tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-0.5 bg-emerald-500 inline-block" />
              <span>Available for Front-End &amp; SEO Architecture Worldwide</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] text-balance">
              {PERSONAL_INFO.name}
            </h1>

            {/* Subtitle / Roles */}
            <div className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-200">
              Front-End Developer <span className="text-slate-300 dark:text-slate-700">|</span> SEO Specialist <span className="text-slate-300 dark:text-slate-700">|</span> Vibe Coder &amp; Prompt Engineer
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-xl">
              &ldquo;{PERSONAL_INFO.tagline}&rdquo;
            </p>

            {/* Contact Details Quick Bar with 1-click copy */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-slate-300">
              {/* Email */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-subtle">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-subtle">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap inline-flex items-center gap-2"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#certifications"
                className="px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white glass-subtle hover:border-white/20 rounded-xl transition-all whitespace-nowrap inline-flex items-center gap-2"
              >
                <span>View Certifications</span>
                <Award className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Anchor & Verified Credentials Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl p-6 glass-card shadow-2xl transition-all relative">
              
              {/* Real founder portrait photo */}
              <div className="relative mb-5 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 aspect-[4/5]">
                <img
                  src="/src/assets/images/zain-ahmed-founder.png"
                  alt="Zain Ahmed Patel - Front-End Developer and SEO Specialist"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (target.src !== 'https://www.shadowtalk-ai.com/zain-ahmed-founder.png') {
                      target.src = 'https://www.shadowtalk-ai.com/zain-ahmed-founder.png';
                    }
                  }}
                />
                
                {/* Verified Credential Tag Overlay */}
                <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono text-slate-200">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Coursera Verified</span>
                  </div>
                  <span className="text-emerald-400 font-bold">Jul 2026</span>
                </div>
              </div>

              {/* Verified Badges Summary List */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Specialization Credentials
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => onOpenCertModal('ibm-seo-geo')}
                    className="w-full text-left p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-slate-200 group-hover:text-emerald-500 transition-colors">
                        IBM &amp; SkillUp
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-[210px]">
                        SEO Mastery &amp; GEO Strategies
                      </div>
                    </div>
                    <span className="text-xs text-emerald-500 font-mono">4 Courses</span>
                  </button>

                  <button
                    onClick={() => onOpenCertModal('scrimba-vibe-coding')}
                    className="w-full text-left p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-slate-200 group-hover:text-cyan-500 transition-colors">
                        Scrimba
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-[210px]">
                        Vibe Coding Essentials &amp; MCP
                      </div>
                    </div>
                    <span className="text-xs text-cyan-500 font-mono">5 Courses</span>
                  </button>

                  <button
                    onClick={() => onOpenCertModal('google-prompting')}
                    className="w-full text-left p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-slate-200 group-hover:text-blue-500 transition-colors">
                        Google
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-[210px]">
                        Prompting Essentials &amp; Analysis
                      </div>
                    </div>
                    <span className="text-xs text-blue-500 font-mono">4 Courses</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Proof Metric Strip Below Split (Domain Reference Requirement) */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl glass-card">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                3x
              </span>
              <Award className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-xs font-semibold text-slate-200 mt-2">
              Coursera Specializations
            </div>
            <div className="text-xs text-slate-400 mt-1">
              IBM, Scrimba, and Google verified credentials covering 13 rigorous multi-discipline courses.
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold font-mono text-cyan-400 tabular-nums">
                GEO &amp; SEO
              </span>
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-xs font-semibold text-slate-200 mt-2">
              Next-Gen Search Visibility
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Engineering schema and entity markup for Perplexity, ChatGPT Search, Claude, and Google AI Overviews.
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold font-mono text-slate-100 tabular-nums">
                Vibe Coding
              </span>
              <Terminal className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="text-xs font-semibold text-slate-200 mt-2">
              Agentic Tooling &amp; MCP
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Building apps with Claude Code, Cursor, GitHub Copilot, and Model Context Protocol at maximum speed.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
