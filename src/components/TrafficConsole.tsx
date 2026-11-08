import React, { useState, useEffect } from 'react';
import {
  Activity,
  Shield,
  LogIn,
  LogOut,
  Mail,
  Clock,
  Eye,
  CheckCircle,
  ExternalLink,
  Users,
  BarChart2,
  X,
  AlertCircle
} from 'lucide-react';
import {
  auth,
  db,
  signInWithGoogle,
  logOut,
  OperationType,
  handleFirestoreError
} from '../lib/firebase';
import { SignUpButton } from '../shaders/sign-up-button/SignUpButton';
import { onAuthStateChanged, User } from 'firebase/auth';
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  doc,
  updateDoc
} from 'firebase/firestore';

interface TrafficConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TrafficItem {
  id: string;
  path: string;
  referrer: string;
  userAgent: string;
  timestamp: any;
}

interface InquiryItem {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt: any;
  status: 'unread' | 'read' | 'archived';
}

export const TrafficConsole: React.FC<TrafficConsoleProps> = ({ isOpen, onClose }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [trafficEvents, setTrafficEvents] = useState<TrafficItem[]>([]);
  const [inquiries, setInquiries] = useState<InquiryItem[]>([]);
  const [activeTab, setActiveTab] = useState<'traffic' | 'inquiries'>('traffic');
  const [authError, setAuthError] = useState<string | null>(null);

  const isAdmin = user?.email === 'zaim98269@gmail.com';

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  // Listen to Traffic and Inquiries only when Admin is authenticated
  useEffect(() => {
    if (!isAdmin) {
      setTrafficEvents([]);
      setInquiries([]);
      return;
    }

    // Traffic listener
    const trafficPath = 'traffic';
    const trafficQuery = query(
      collection(db, trafficPath),
      orderBy('timestamp', 'desc'),
      limit(25)
    );

    const unsubTraffic = onSnapshot(
      trafficQuery,
      (snapshot) => {
        const events: TrafficItem[] = [];
        snapshot.forEach((docSnap) => {
          events.push({ id: docSnap.id, ...docSnap.data() } as TrafficItem);
        });
        setTrafficEvents(events);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, trafficPath);
      }
    );

    // Inquiries listener
    const inqPath = 'inquiries';
    const inqQuery = query(
      collection(db, inqPath),
      orderBy('createdAt', 'desc'),
      limit(25)
    );

    const unsubInquiries = onSnapshot(
      inqQuery,
      (snapshot) => {
        const inqs: InquiryItem[] = [];
        snapshot.forEach((docSnap) => {
          inqs.push({ id: docSnap.id, ...docSnap.data() } as InquiryItem);
        });
        setInquiries(inqs);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, inqPath);
      }
    );

    return () => {
      unsubTraffic();
      unsubInquiries();
    };
  }, [isAdmin]);

  const handleSignIn = async () => {
    setAuthError(null);
    try {
      await signInWithGoogle();
    } catch (err: any) {
      setAuthError(err?.message || 'Failed to sign in with Google');
    }
  };

  const handleMarkAsRead = async (inqId: string, currentStatus: string) => {
    const nextStatus = currentStatus === 'unread' ? 'read' : 'unread';
    try {
      await updateDoc(doc(db, 'inquiries', inqId), { status: nextStatus });
    } catch (err) {
      console.error('Error updating inquiry status:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[88vh] rounded-2xl glass-card shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Firebase Backend &amp; Traffic Monitor
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Live Firestore Connected
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Persistent database, real-time visitor event logging, and secure authentication.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-2.5">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || 'User'}
                    className="w-7 h-7 rounded-full border border-white/20"
                  />
                )}
                <div className="hidden sm:block text-right">
                  <div className="text-xs font-semibold text-slate-900 dark:text-white truncate max-w-[140px]">
                    {user.displayName || user.email}
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400">
                    {isAdmin ? 'Admin / Owner' : 'Verified Visitor'}
                  </div>
                </div>
                <button
                  onClick={() => logOut()}
                  className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-white/5 transition-colors"
                  title="Sign out"
                  aria-label="Sign out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleSignIn}
                className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-colors flex items-center gap-1.5"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Google Sign-In</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Auth Error Banner */}
        {authError && (
          <div className="px-6 py-2 bg-rose-500/10 border-b border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{authError}</span>
          </div>
        )}

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Status & Overview Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl glass-subtle">
              <div className="text-xs font-mono text-slate-400">DATABASE STATUS</div>
              <div className="text-base font-bold text-emerald-400 mt-1 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>Active &amp; Scalable</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Firebase Cloud Firestore</div>
            </div>

            <div className="p-4 rounded-xl glass-subtle">
              <div className="text-xs font-mono text-slate-400">TRAFFIC MONITORING</div>
              <div className="text-base font-bold text-cyan-400 mt-1">
                {trafficEvents.length > 0 ? `${trafficEvents.length}+ Events Logged` : 'Listening...'}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Automatic page view beacons</div>
            </div>

            <div className="p-4 rounded-xl glass-subtle">
              <div className="text-xs font-mono text-slate-400">AUTHENTICATION</div>
              <div className="text-base font-bold text-indigo-400 mt-1">
                {user ? (isAdmin ? 'Admin Console Unlocked' : 'Signed In') : 'Google Auth Ready'}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Firebase Auth (OAuth 2.0)</div>
            </div>
          </div>

          {/* Conditional Admin View vs Visitor View */}
          {!user ? (
            <div className="p-8 rounded-2xl glass-subtle text-center space-y-6 flex flex-col items-center">
              <div className="space-y-1">
                <Shield className="w-10 h-10 text-emerald-400 mx-auto mb-2 opacity-90" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Owner &amp; Admin Authentication
                </h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Click the interactive capsule button below to authenticate with <strong className="text-emerald-400">zaim98269@gmail.com</strong> (or any Google account) to unlock the Firebase traffic monitoring and client inquiries console.
                </p>
              </div>

              {/* Tactile 3D Capsule Sign-In Button with liquid orb, envelope animation & fingerprint */}
              <div className="flex flex-col items-center justify-center -my-2">
                <SignUpButton
                  label="SIGN IN"
                  onClick={handleSignIn}
                  width={305}
                  height={116}
                />
                <span className="text-[11px] font-mono text-slate-400 mt-2 flex items-center gap-1.5">
                  <LogIn className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Click capsule to trigger Google Sign-In with Firebase</span>
                </span>
              </div>
            </div>
          ) : !isAdmin ? (
            <div className="p-8 rounded-2xl glass-subtle text-center space-y-3">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                Signed in as visitor: {user.email}
              </div>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Authentication works smoothly! Admin metrics (traffic analytics and contact inbox) are reserved for portfolio owner <strong>zaim98269@gmail.com</strong>.
              </p>
            </div>
          ) : (
            /* Admin Console View */
            <div className="space-y-4">
              {/* Tab Selector */}
              <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                <button
                  onClick={() => setActiveTab('traffic')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                    activeTab === 'traffic'
                      ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>Real-Time Traffic ({trafficEvents.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('inquiries')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                    activeTab === 'inquiries'
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Client Inquiries ({inquiries.length})</span>
                </button>
              </div>

              {/* Traffic Tab Content */}
              {activeTab === 'traffic' && (
                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400">
                    RECENT VISITOR SESSIONS (REAL-TIME FIRESTORE STREAM)
                  </div>
                  {trafficEvents.length === 0 ? (
                    <div className="p-8 text-center text-xs text-slate-500">
                      Listening for incoming page view beacons...
                    </div>
                  ) : (
                    <div className="border border-white/[0.08] rounded-xl overflow-hidden divide-y divide-white/[0.08] glass-subtle">
                      {trafficEvents.map((evt) => (
                        <div
                          key={evt.id}
                          className="p-3 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white/[0.02] hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="space-y-0.5">
                            <div className="font-mono font-semibold text-slate-200">
                              Path: {evt.path}
                            </div>
                            <div className="text-[11px] text-slate-400 truncate max-w-md">
                              UA: {evt.userAgent}
                            </div>
                          </div>
                          <div className="text-right text-[11px] font-mono text-slate-400">
                            Referrer: {evt.referrer || 'direct'}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Inquiries Tab Content */}
              {activeTab === 'inquiries' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-mono text-slate-400">
                      MESSAGES SUBMITTED VIA CONTACT FORM (/inquiries)
                    </div>
                    <a
                      href="https://console.firebase.google.com/project/gen-lang-client-0109825597/firestore/databases/ai-studio-zainahmedpatelpo-2ec4862c-2c3a-4ae7-98cd-b34a8037a84d/data"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    >
                      <span>Open in Firebase Console</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  {inquiries.length === 0 ? (
                    <div className="p-8 text-center text-xs text-slate-500">
                      No client inquiries recorded yet in Firestore. Fill out the contact form below to test!
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {inquiries.map((inq) => (
                        <div
                          key={inq.id}
                          className={`p-4 rounded-xl border transition-colors ${
                            inq.status === 'unread'
                              ? 'bg-emerald-500/10 border-emerald-500/30'
                              : 'glass-subtle border-white/[0.08]'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div>
                              <div className="font-bold text-sm text-white">
                                {inq.name}{' '}
                                <span className="font-normal text-xs text-slate-400">
                                  ({inq.email})
                                </span>
                              </div>
                              <div className="text-xs font-semibold text-emerald-400">
                                {inq.subject}
                              </div>
                            </div>
                            <button
                              onClick={() => handleMarkAsRead(inq.id, inq.status)}
                              className="text-[11px] font-mono px-2 py-1 rounded bg-white/10 hover:bg-white/15 text-slate-200 transition-colors"
                            >
                              Status: {inq.status}
                            </button>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed bg-black/30 p-3 rounded-lg border border-white/[0.06]">
                            {inq.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white/[0.02] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <div>Project ID: <span className="font-mono text-slate-300">gen-lang-client-0109825597</span></div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-mono">Firestore Rules: Deployed &amp; Active</span>
            <a
              href="https://console.firebase.google.com/project/gen-lang-client-0109825597/firestore/databases/ai-studio-zainahmedpatelpo-2ec4862c-2c3a-4ae7-98cd-b34a8037a84d/data"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium transition-colors"
            >
              <span>Firebase Console</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
