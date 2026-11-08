import React, { useState } from 'react';
import { ShieldCheck, ExternalLink, Check, Award, BookOpen, Sparkles, X } from 'lucide-react';
import { CERTIFICATIONS, Certification } from '../data/portfolioData';

interface CertificationsProps {
  selectedCertId?: string | null;
  onSelectCert?: (id: string | null) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({
  selectedCertId,
  onSelectCert,
}) => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  // Sync with prop if opened from hero
  React.useEffect(() => {
    if (selectedCertId) {
      const match = CERTIFICATIONS.find((c) => c.id === selectedCertId);
      if (match) setActiveCert(match);
    }
  }, [selectedCertId]);

  const handleClose = () => {
    setActiveCert(null);
    if (onSelectCert) onSelectCert(null);
  };

  return (
    <section id="certifications" className="py-24 border-t border-slate-200 dark:border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Verified Credentials &amp; Certifications
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
              Coursera Specializations
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
              Industry-recognized specializations issued by IBM, Google, and Scrimba. Click any credential to verify live on Coursera.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Public Verification: coursera.org/verify</span>
          </div>
        </div>

        {/* 3 Sleek Verified Badges Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => {
            return (
              <div
                key={cert.id}
                className="p-6 sm:p-7 rounded-2xl glass-card glass-card-interactive flex flex-col justify-between group border border-slate-200 dark:border-white/[0.08]"
              >
                <div>
                  {/* Top Badge Ribbon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg glass-subtle flex items-center justify-center font-bold text-xs text-emerald-600 dark:text-emerald-400">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-900 dark:text-slate-200">
                        {cert.issuer}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono text-slate-400">
                      {cert.date}
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    {cert.organization} · {cert.coursesCount} Courses Completed
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Courses Outline Preview */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/[0.08] space-y-1.5">
                    <div className="text-[11px] font-mono font-semibold uppercase text-slate-400">
                      Curriculum Highlights
                    </div>
                    {cert.courses.slice(0, 3).map((course, cIdx) => (
                      <div key={cIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2 truncate">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                        <span className="truncate">{course}</span>
                      </div>
                    ))}
                    {cert.courses.length > 3 && (
                      <div className="text-[11px] font-mono text-slate-400 pt-1">
                        + {cert.courses.length - 3} additional capstone courses
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Bottom: Verification ID & Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <div>
                    <div className="text-[10px] text-slate-400">CREDENTIAL ID</div>
                    <div className="font-bold text-slate-900 dark:text-slate-200">{cert.credentialId}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveCert(cert)}
                      className="px-3 py-1.5 rounded-lg glass-subtle text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      Syllabus
                    </button>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold transition-colors inline-flex items-center gap-1"
                      title="Verify live on Coursera"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Certification Modal */}
        {activeCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={handleClose}
          >
            <div
              className="glass-card max-w-2xl w-full p-8 rounded-2xl border border-white/20 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{activeCert.issuer} · {activeCert.organization}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {activeCert.title}
                </h3>
                <div className="text-xs font-mono text-slate-400">
                  Issued: {activeCert.date} · Credential ID: {activeCert.credentialId}
                </div>
              </div>

              <div className="p-4 rounded-xl glass-subtle space-y-2">
                <div className="text-xs font-mono uppercase text-slate-400">
                  Specialization Overview
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {activeCert.description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-mono uppercase text-slate-400">
                  Completed Specialization Curriculum ({activeCert.courses.length} Courses)
                </div>
                <div className="space-y-2">
                  {activeCert.courses.map((course, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg glass-subtle flex items-start gap-3 text-xs sm:text-sm text-slate-200"
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Official Coursera Verification Link
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleClose}
                    className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href={activeCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-xs font-semibold rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Open Coursera Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
