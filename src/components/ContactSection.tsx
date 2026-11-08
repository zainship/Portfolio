import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, MessageSquare, Download, CheckCircle2, Loader2, Database, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { submitInquiry } from '../lib/firebase';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      // Save directly to Firebase Firestore inquiries collection
      await submitInquiry({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setFormSubmitted(false);
      }, 7000);
    } catch (err: any) {
      console.error('Submission error:', err);
      setSubmissionError('Could not connect to Firebase Firestore. Please check your internet connection or reach out directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Patel;Zain;Ahmed;;
FN:Zain Ahmed Patel
TITLE:Front-End Engineer & Technical SEO Architect
EMAIL;TYPE=INTERNET,HOME:${PERSONAL_INFO.email}
TEL;TYPE=CELL:${PERSONAL_INFO.phone}
NOTE:Certified across SEO Mastery (IBM), AI Vibe Coding (Scrimba), and Google Prompting.
URL:https://zainpatel.dev
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Zain_Ahmed_Patel.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-200 dark:border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Project Inquiries &amp; Consultations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
            Let&apos;s Build Something Search-Dominant &amp; Fast
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Available for front-end architecture, technical SEO/GEO engagements, and high-velocity web development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl glass-card space-y-6 border border-slate-200 dark:border-white/[0.08]">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Direct Contact
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Fast response within 24 hours across time zones.
                </p>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl glass-subtle flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Email Address
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-slate-800 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl glass-subtle flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Phone / WhatsApp
                  </div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-slate-800 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                  title="Copy phone"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-cyan-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Quick Action */}
              <a
                href={`https://wa.me/923211798561?text=Hi%20Zain,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold text-xs border border-emerald-500/20 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Direct Message on WhatsApp</span>
              </a>

              {/* Download vCard */}
              <button
                onClick={handleDownloadVCard}
                className="w-full py-3 px-4 rounded-xl glass-subtle hover:border-slate-300 dark:hover:border-white/20 text-slate-700 dark:text-slate-300 font-medium text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Save Executive vCard File</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-200 dark:border-white/[0.08] relative">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Dispatch an Inquiry
                </h3>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  <span>Cloud Firestore Persistence</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                All client submissions are written atomically to Firebase Cloud Firestore (<code className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">/inquiries</code>).
              </p>

              {submissionError && (
                <div className="p-3.5 mb-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 dark:text-rose-300 text-xs flex items-center gap-2">
                  <span>{submissionError}</span>
                </div>
              )}

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <div className="text-base font-bold text-slate-900 dark:text-white">
                    Inquiry Confirmed in Firebase
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                    Your message has been stored in Cloud Firestore (<span className="text-emerald-600 dark:text-emerald-400 font-mono">/inquiries</span>). Zain will get back to you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl glass-subtle border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@company.com"
                        className="w-full px-4 py-2.5 rounded-xl glass-subtle border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Technical SEO Architecture & Front-End Build"
                      className="w-full px-4 py-2.5 rounded-xl glass-subtle border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                      Project Details &amp; Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell Zain about your project, current search challenges, technical requirements, and target timeline..."
                      className="w-full px-4 py-2.5 rounded-xl glass-subtle border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-y"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">
                      * Required fields
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs transition-colors flex items-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Writing to Firestore...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
