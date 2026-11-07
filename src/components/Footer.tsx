import React from 'react';
import { ArrowUp, Code2, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenExport: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenExport }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Identity */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Front-End Developer · SEO Specialist · Vibe Coder &amp; Prompt Engineer
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenExport}
              className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Export Standalone HTML</span>
            </button>

            <span className="text-slate-300 dark:text-slate-700">·</span>

            <a
              href="https://coursera.org/verify/specialization"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verify Coursera</span>
            </a>

            <span className="text-slate-300 dark:text-slate-700">·</span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 dark:text-slate-500">
          <div>
            © {new Date().getFullYear()} Zain Ahmed Patel. All rights reserved.
          </div>
          <div className="flex items-center gap-2 font-mono">
            <span>WCAG AA Compliant</span>
            <span>·</span>
            <span>Tailwind CSS</span>
            <span>·</span>
            <span>Schema.org JSON-LD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
