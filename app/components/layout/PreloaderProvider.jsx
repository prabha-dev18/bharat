"use client";

import { useState, useEffect } from "react";
import Preloader from "./Preloader";

export default function PreloaderProvider({ children }) {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Clear any previous persistent preloader seen state so refreshes and reloads always show it
    try {
      sessionStorage.removeItem("bsv_preloader_seen");
    } catch {
      // ignore
    }
  }, []);

  const handleComplete = () => {
    setShowPreloader(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("bsv_preloader_completed"));
    }
  };

  return (
    <>
      {showPreloader && <Preloader onComplete={handleComplete} />}
      <div className="min-h-screen flex flex-col opacity-100">
        {children}
      </div>
    </>
  );
}
