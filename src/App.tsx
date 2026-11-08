import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SelectedProjects } from './components/SelectedProjects';
import { SkillsGrid } from './components/SkillsGrid';
import { Certifications } from './components/Certifications';
import { InteractiveLab } from './components/InteractiveLab';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ExportModal } from './components/ExportModal';
import { TrafficConsole } from './components/TrafficConsole';
import { testConnection, logTrafficEvent } from './lib/firebase';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [exportModalOpen, setExportModalOpen] = useState<boolean>(false);
  const [trafficModalOpen, setTrafficModalOpen] = useState<boolean>(false);
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // Initialize Firebase connection and log traffic event
    testConnection();
    logTrafficEvent(window.location.pathname);
  }, []);

  const handleToggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  const handleOpenCertModal = (certId?: string) => {
    if (certId) {
      setSelectedCertId(certId);
      const certEl = document.getElementById('certifications');
      if (certEl) {
        certEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#08090d] text-slate-900 dark:text-slate-100 transition-colors duration-200 relative overflow-x-hidden">
      
      {/* Architectural Minimalist Canvas & Subtle Micro-Grid */}
      <div className="fixed inset-0 -z-30 pointer-events-none bg-slate-50 dark:bg-[#08090d]" />
      <div className="fixed inset-0 -z-20 pointer-events-none bg-architectural-grid opacity-50 dark:opacity-60 [mask-image:radial-gradient(ellipse_at_50%_0%,black_35%,transparent_85%)]" />
      
      {/* Quiet, measured top ambient aura (strictly controlled color budget) */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden opacity-30 dark:opacity-40">
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[920px] h-[360px] bg-gradient-to-b from-emerald-500/12 via-cyan-500/08 to-transparent rounded-full blur-[140px]" />
      </div>

      {/* Top Bar Navigation (Strict 3-zone contract) */}
      <Navbar
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onOpenExport={() => setExportModalOpen(true)}
        onOpenTrafficConsole={() => setTrafficModalOpen(true)}
      />

      {/* Main Content Layout */}
      <main id="main-content">
        {/* Architectural Hero Section */}
        <Hero onOpenCertModal={handleOpenCertModal} />

        {/* Professional Summary & Core Principles */}
        <About />

        {/* Selected Works & Architecture Case Studies */}
        <SelectedProjects />

        {/* Core Skills & Technical Depth */}
        <SkillsGrid />

        {/* Verified Coursera Specializations (IBM · Scrimba · Google) */}
        <Certifications
          selectedCertId={selectedCertId}
          onSelectCert={(id) => setSelectedCertId(id)}
        />

        {/* Interactive Technical Architecture & Search Lab */}
        <InteractiveLab />

        {/* Contact & Inquiries (Atomic Firebase Persistence) */}
        <ContactSection />
      </main>

      {/* Executive Footer */}
      <Footer onOpenExport={() => setExportModalOpen(true)} />

      {/* Export Standalone HTML Modal */}
      <ExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
      />

      {/* Firebase Real-Time Inquiries & Traffic Console */}
      <TrafficConsole
        isOpen={trafficModalOpen}
        onClose={() => setTrafficModalOpen(false)}
      />
    </div>
  );
}
