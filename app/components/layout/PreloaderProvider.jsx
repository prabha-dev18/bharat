"use client";

import { useState } from "react";
import Preloader from "./Preloader";

export default function PreloaderProvider({ children }) {
  const [showPreloader, setShowPreloader] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("bsv_preloader_seen");
    }
    return false;
  });

  const handleComplete = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("bsv_preloader_seen", "true");
    }
    setShowPreloader(false);
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
