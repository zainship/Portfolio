import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, User } from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp,
  getDocFromServer,
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// CRITICAL: getFirestore must pass databaseId
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Error handling conforming to Firebase skill standard
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
    },
    operationType,
    path,
  };
  console.error('Firestore Error:', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Connection test on boot
export async function testConnection(): Promise<boolean> {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    return true;
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firebase client is offline or initializing.');
    }
    return false;
  }
}

// Generate or get persistent session ID for traffic tracking
function getSessionId(): string {
  let sid = sessionStorage.getItem('portfolio_session_id');
  if (!sid) {
    sid = 'sess_' + Math.random().toString(36).substring(2, 12) + '_' + Date.now().toString(36);
    sessionStorage.setItem('portfolio_session_id', sid);
  }
  return sid;
}

// Traffic Event Logger (logs visits to Firestore)
export async function logTrafficEvent(path: string = window.location.pathname): Promise<void> {
  const eventId = 'trf_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
  const pathForWrite = `traffic/${eventId}`;
  
  try {
    const payload = {
      sessionId: getSessionId().substring(0, 64),
      path: (path || '/').substring(0, 128),
      referrer: (document.referrer || 'direct').substring(0, 256),
      userAgent: (navigator.userAgent || 'unknown').substring(0, 256),
      timestamp: serverTimestamp(),
    };

    await setDoc(doc(db, 'traffic', eventId), payload);
  } catch (error) {
    // Non-blocking log catch to protect user UX
    console.debug('Traffic logging caught:', error);
  }
}

// Inquiry Form Submission (submits contact messages to Firestore)
export async function submitInquiry(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}): Promise<string> {
  const inquiryId = 'inq_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
  const pathForWrite = `inquiries/${inquiryId}`;

  try {
    const payload = {
      name: data.name.trim().substring(0, 100),
      email: data.email.trim().toLowerCase().substring(0, 150),
      subject: (data.subject || 'Portfolio Inquiry').trim().substring(0, 200),
      message: data.message.trim().substring(0, 3000),
      createdAt: serverTimestamp(),
      status: 'unread' as const,
    };

    await setDoc(doc(db, 'inquiries', inquiryId), payload);
    return inquiryId;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, pathForWrite);
  }
}

// Sync user profile on authentication
export async function syncUserProfile(user: User): Promise<void> {
  const pathForWrite = `users/${user.uid}`;
  const isAdminUser = user.email === 'zaim98269@gmail.com';

  try {
    await setDoc(
      doc(db, 'users', user.uid),
      {
        uid: user.uid,
        email: user.email || '',
        displayName: (user.displayName || 'Visitor').substring(0, 100),
        photoURL: (user.photoURL || '').substring(0, 500),
        role: isAdminUser ? 'admin' : 'visitor',
        lastLoginAt: serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, pathForWrite);
  }
}

// Google Sign-In helper
export async function signInWithGoogle(): Promise<User | null> {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    if (result.user) {
      await syncUserProfile(result.user);
      return result.user;
    }
    return null;
  } catch (error) {
    console.error('Sign-in error:', error);
    throw error;
  }
}

// Sign-Out helper
export async function logOut(): Promise<void> {
  await signOut(auth);
}
