import React, { useState } from 'react';
import { Sun, Moon, Code2, Menu, X, ArrowUpRight, Activity, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenExport: () => void;
  onOpenTrafficConsole: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  onOpenExport,
  onOpenTrafficConsole,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Expertise', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Technical Lab', href: '#interactive-lab' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 glass-navbar transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="text-base font-bold tracking-tight text-slate-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
        >
          Zain Ahmed Patel
        </a>

        {/* Zone 2: Navigation Links (Clean unboxed typography) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Theme Toggle + Firebase Console + Inquire CTA) */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Firebase Traffic & Client Console Trigger */}
          <button
            onClick={onOpenTrafficConsole}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-white/10 transition-colors whitespace-nowrap shrink-0"
            title="Firebase Real-Time Inquiries & Traffic Console"
          >
            <Activity className="w-3.5 h-3.5 text-emerald-500" />
            <span className="hidden sm:inline">Firebase Console</span>
          </button>

          {/* Export Code Modal Trigger */}
          <button
            onClick={onOpenExport}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors whitespace-nowrap shrink-0"
            title="Export Standalone HTML file"
          >
            <Code2 className="w-3.5 h-3.5 text-slate-400" />
            <span>Export</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={onToggleTheme}
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <span>Inquire</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-white/10 bg-slate-950/95 backdrop-blur-xl px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-emerald-400 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrafficConsole();
              }}
              className="w-full py-2.5 text-xs font-mono rounded-lg glass-subtle text-white flex items-center justify-center gap-2"
            >
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>Open Firebase Traffic Console</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-xs font-semibold rounded-lg bg-emerald-400 text-slate-950"
            >
              Inquire for Projects
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
