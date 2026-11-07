import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsGrid } from './components/SkillsGrid';
import { Certifications } from './components/Certifications';
import { InteractiveLab } from './components/InteractiveLab';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ExportModal } from './components/ExportModal';
import { CursorTrail } from './components/CursorTrail';
import { TrafficConsole } from './components/TrafficConsole';
import { BackgroundControls } from './components/BackgroundControls';
import { GlobeCollection, GlobeVariant } from './shaders/globe/GlobeCollection';
import './shaders/threeui.css';
import { testConnection, logTrafficEvent } from './lib/firebase';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [exportModalOpen, setExportModalOpen] = useState<boolean>(false);
  const [trafficModalOpen, setTrafficModalOpen] = useState<boolean>(false);
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);

  // Background WebGL shader states
  const [globeVariant, setGlobeVariant] = useState<GlobeVariant>('energy-orb');
  const [orbHue, setOrbHue] = useState<number>(0); // 0 = author's cosmic violet/indigo
  const [orbSpeed, setOrbSpeed] = useState<number>(1.0);
  const [interactiveMode, setInteractiveMode] = useState<boolean>(false);

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
      // Also scroll smoothly to certifications section
      const certEl = document.getElementById('certifications');
      if (certEl) {
        certEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-200 relative overflow-x-hidden">
      {/* Interactive WebGL Globe / Energy Orb Background */}
      <div
        className={`fixed inset-0 -z-30 overflow-hidden transition-opacity duration-700 ${
          interactiveMode ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        style={{
          background: '#05030e',
        }}
      >
        <GlobeCollection
          variant={globeVariant}
          speed={orbSpeed}
          scale={1.0}
          smokeScale={1.0}
          smokeStrength={1.0}
          smokeSpeed={1.0}
          hue={orbHue}
          saturation={1.0}
          glow={1.0}
          starDensity={1.0}
          starSpeed={1.0}
          starSize={1.0}
          brightness={1.0}
          opacity={1.0}
        />
      </div>

      {/* Gentle Frosted Scrim & Ambient Light Mesh for Glassmorphic Refraction */}
      <div className="fixed inset-0 pointer-events-none -z-20 bg-slate-950/45 backdrop-blur-[0.5px]" />
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-50">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/12 rounded-full blur-[160px]" />
        <div className="absolute top-1/4 -right-40 w-[650px] h-[650px] bg-cyan-500/12 rounded-full blur-[180px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-500/10 rounded-full blur-[200px]" />
        <div className="absolute -bottom-32 right-1/4 w-[650px] h-[650px] bg-cyan-500/10 rounded-full blur-[180px]" />
      </div>

      {/* Custom Animated Neon Cursor Trail (performant, canvas-based, pointer-events-none) */}
      <CursorTrail />

      {/* Top Bar Navigation */}
      <Navbar
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onOpenExport={() => setExportModalOpen(true)}
        onOpenTrafficConsole={() => setTrafficModalOpen(true)}
      />

      {/* Main Content Layout */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero onOpenCertModal={handleOpenCertModal} />

        {/* Professional Summary & Strengths */}
        <About />

        {/* Core Skills & Areas of Expertise */}
        <SkillsGrid />

        {/* Verified Coursera Certifications */}
        <Certifications
          selectedCertId={selectedCertId}
          onSelectCert={(id) => setSelectedCertId(id)}
        />

        {/* Interactive GEO, Vibe Coding & Prompting Lab */}
        <InteractiveLab />

        {/* Contact & Inquiry Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenExport={() => setExportModalOpen(true)} />

      {/* Export Standalone HTML Modal */}
      <ExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
      />

      {/* Firebase Traffic Monitor & Authentication Console */}
      <TrafficConsole
        isOpen={trafficModalOpen}
        onClose={() => setTrafficModalOpen(false)}
      />

      {/* Floating Shader Background Controls (Variant Switcher, Hue, Interactive Mode) */}
      <BackgroundControls
        currentVariant={globeVariant}
        onChangeVariant={(v) => setGlobeVariant(v)}
        hue={orbHue}
        onChangeHue={(h) => setOrbHue(h)}
        speed={orbSpeed}
        onChangeSpeed={(s) => setOrbSpeed(s)}
        interactiveMode={interactiveMode}
        onToggleInteractive={() => setInteractiveMode((prev) => !prev)}
      />
    </div>
  );
}
