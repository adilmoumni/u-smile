"use client";

import { useEffect } from "react";
import { initAnalytics } from "@/lib/firebase";

export default function FirebaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize analytics on the client side
    const setupAnalytics = async () => {
      try {
        await initAnalytics();
        console.log("Firebase Analytics initialized");
      } catch (error) {
        console.error("Firebase Analytics initialization failed:", error);
      }
    };

    setupAnalytics();
  }, []);

  return <>{children}</>;
}
