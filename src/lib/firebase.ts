import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkynsUAFYfGscUdTd8ftmulPZo81OPqWg",
  authDomain: "u-smile-cabinet.firebaseapp.com",
  projectId: "u-smile-cabinet",
  storageBucket: "u-smile-cabinet.firebasestorage.app",
  messagingSenderId: "803082667615",
  appId: "1:803082667615:web:9269eb505c66066d46fdea",
  measurementId: "G-TDJPBDBGN0"
};

import { getFunctions } from "firebase/functions";

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Functions
export const functions = getFunctions(app, 'us-central1');

// Initialize Analytics (Client-side only)
export const initAnalytics = async () => {
  if (typeof window !== "undefined") {
    const supported = await isSupported();
    if (supported) {
      return getAnalytics(app);
    }
  }
  return null;
};

export { app };
