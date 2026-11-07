import React, { useState } from 'react';
import { ShieldCheck, ExternalLink, Check, Award, BookOpen, Sparkles } from 'lucide-react';
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
    <section id="certifications" className="py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Verified Credentials &amp; Badges
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
              Coursera Specializations
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
              Formal industry-recognized credentials certified across SEO, Generative Engine Optimization, Vibe Coding, and Google Prompting.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Verification: coursera.org/verify/specialization</span>
          </div>
        </div>

        {/* 3 Sleek Verified Badges Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => {
            const isEmerald = cert.badgeAccent === 'emerald';
            const isCyan = cert.badgeAccent === 'cyan';

            return (
              <div
                key={cert.id}
                className={`p-6 sm:p-7 rounded-2xl transition-all flex flex-col justify-between group hover:-translate-y-1 ${
                  isEmerald
                    ? 'glass-emerald-card hover:border-emerald-500/60'
                    : isCyan
                    ? 'glass-cyan-card hover:border-cyan-500/60'
                    : 'glass-blue-card hover:border-blue-500/60'
                }`}
              >
                <div>
                  {/* Top Badge Ribbon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                          isEmerald
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                            : isCyan
                            ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                            : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                        }`}
                      >
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

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>

                  {/* Issuer Subtext & Credential ID */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                    <span>{cert.organization} · {cert.coursesCount} Courses</span>
                    {cert.credentialId && (
                      <>
                        <span>·</span>
                        <span className="text-emerald-500 font-semibold">ID: {cert.credentialId}</span>
                      </>
                    )}
                  </div>

                  {/* Courses Checklist */}
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                    {cert.courses.map((course) => (
                      <div
                        key={course}
                        className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                      >
                        <span
                          className={`mt-0.5 shrink-0 ${
                            isEmerald
                              ? 'text-emerald-500'
                              : isCyan
                              ? 'text-cyan-500'
                              : 'text-blue-500'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span className="leading-tight">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="mt-7 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs font-semibold inline-flex items-center gap-1 transition-colors ${
                      isEmerald
                        ? 'text-emerald-600 dark:text-emerald-400 hover:text-emerald-500'
                        : isCyan
                        ? 'text-cyan-600 dark:text-cyan-400 hover:text-cyan-500'
                        : 'text-blue-600 dark:text-blue-400 hover:text-blue-500'
                    }`}
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Interactive Certificate Detail View */}
        {activeCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm"
            onClick={handleClose}
          >
            <div
              className="w-full max-w-xl p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{activeCert.issuer} · Verified Specialization</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {activeCert.title}
                  </h3>
                </div>
                <button
                  onClick={handleClose}
                  className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                {activeCert.description}
              </p>

              {/* Courses Breakdown */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                  Courses Completed in Specialization ({activeCert.coursesCount} Total)
                </div>
                <div className="space-y-2">
                  {activeCert.courses.map((course, i) => (
                    <div
                      key={course}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-medium">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{course}</span>
                      </div>
                      <span className="font-mono text-slate-400 text-[11px]">Completed</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verification Callout */}
              <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="font-semibold text-emerald-700 dark:text-emerald-300">
                    Officially Verified by Coursera
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    {activeCert.credentialId ? (
                      <span>Credential ID: <strong className="text-emerald-500 font-mono">{activeCert.credentialId}</strong></span>
                    ) : (
                      <span>Credential ID &amp; transcript authenticatable on coursera.org</span>
                    )}
                  </div>
                </div>
                <a
                  href={activeCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors shrink-0 text-center"
                >
                  Verify Now ↗
                </a>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
