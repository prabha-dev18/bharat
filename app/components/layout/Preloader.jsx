"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { Sparkles, Check, FastForward, RotateCcw } from "lucide-react";

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState("blank");
  const [replayKey, setReplayKey] = useState(0);
  const [grid, setGrid] = useState({ rows: 8, cols: 14 });
  const [tiles, setTiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing Business & Startup Solutions...");
  const [isLeaving, setIsLeaving] = useState(false);

  const phaseTimerRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const exitTimerRef = useRef(null);
  const onCompleteCalledRef = useRef(false);

  const getStatusText = useCallback((val) => {
    if (val < 25) return "Initializing Business & Startup Solutions...";
    if (val < 50) return "Loading Registration & Compliance Engines...";
    if (val < 75) return "Connecting Financial & Funding Guidance...";
    if (val < 92) return "Configuring Software & AI Automation...";
    if (val < 100) return "Preparing Your Business Experience...";
    return "Ready • Welcome to Bharat Startup Ventures Pvt. Ltd.";
  }, []);

  const clearAllTimers = useCallback(() => {
    if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
  }, []);

  const triggerCompletion = useCallback(() => {
    if (onComplete && !onCompleteCalledRef.current) {
      setIsLeaving(true);
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
      exitTimerRef.current = setTimeout(() => {
        if (!onCompleteCalledRef.current) {
          onCompleteCalledRef.current = true;
          onComplete();
        }
      }, 700);
    }
  }, [onComplete]);

  const handleSkip = useCallback(() => {
    clearAllTimers();
    setPhase("revealed");
    setProgress(100);
    setStatusText("Ready • Welcome to Bharat Startup Ventures Pvt. Ltd.");
    exitTimerRef.current = setTimeout(() => {
      triggerCompletion();
    }, 280);
  }, [clearAllTimers, triggerCompletion]);

  const handleReplay = useCallback(() => {
    clearAllTimers();
    setIsLeaving(false);
    setProgress(0);
    setPhase("blank");
    setStatusText("Initializing Business & Startup Solutions...");
    setReplayKey((prev) => prev + 1);
  }, [clearAllTimers]);

  useEffect(() => {
    const calculateGrid = () => {
      const width = typeof window !== "undefined" ? window.innerWidth : 1440;
      const height = typeof window !== "undefined" ? window.innerHeight : 900;

      const targetSize = width < 640 ? 70 : 95;
      const cols = Math.max(6, Math.ceil(width / targetSize));
      const rows = Math.max(6, Math.ceil(height / targetSize));

      const newTiles = [];
      const colStep = 0.03; // Left-to-right progression delay
      const rowStep = 0.075; // Row-by-row progression delay

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // Strict top-left (0,0) across to right, row by row
          const delay = Number((r * rowStep + c * colStep).toFixed(3));
          newTiles.push({
            id: `tile-${r}-${c}`,
            row: r,
            col: c,
            delay,
          });
        }
      }

      setGrid({ rows, cols });
      setTiles(newTiles);

      // Total reveal time calculation: maxDelay + tile animation duration (440ms)
      const maxDelay = (rows - 1) * rowStep + (cols - 1) * colStep;
      const totalRevealTimeMs = Math.round((maxDelay + 0.44) * 1000);

      // Phase 1: Blank Screen hold (350ms) -> Transition to Phase 2 (revealing)
      phaseTimerRef.current = setTimeout(() => {
        setPhase("revealing");

        // Phase 2 to Phase 3: Transition to "revealed" once all squares have cleared
        phaseTimerRef.current = setTimeout(() => {
          setPhase("revealed");
        }, totalRevealTimeMs);
      }, 350);
    };

    calculateGrid();

    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }

    const handleResize = () => {
      calculateGrid();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearAllTimers();
      window.removeEventListener("resize", handleResize);
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [replayKey, clearAllTimers]);

  // Phase 4: Loading progress starts after the square reveal finishes
  useEffect(() => {
    if (phase !== "revealed") return;

    let currentVal = 0;
    const startTime = Date.now();
    const targetDuration = 2200; // ~2.2s silky corporate progression

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / targetDuration, 1);
      const easeOut = 1 - Math.pow(1 - t, 2.5);
      currentVal = Math.min(Math.round(easeOut * 100), 100);

      setProgress(currentVal);
      setStatusText(getStatusText(currentVal));

      if (currentVal >= 100) {
        clearInterval(progressIntervalRef.current);
        setPhase("complete");

        if (onComplete) {
          exitTimerRef.current = setTimeout(() => {
            triggerCompletion();
          }, 450);
        }
      }
    }, 28);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [phase, getStatusText, triggerCompletion, onComplete]);

  const isComplete = phase === "complete" || progress === 100;
  const isContentVisible = phase === "revealing" || phase === "revealed" || phase === "complete";
  const showCoverGrid = phase === "blank" || phase === "revealing";

  return (
    <div
      className={`preloader-overlay ${isLeaving ? "preloader-exit" : ""}`}
      aria-label="Loading Bharat Startup Ventures"
      role="status"
      aria-live="polite"
    >
      {showCoverGrid && (
        <div
          key={`cover-grid-${replayKey}`}
          className="reveal-cover-grid"
          style={{
            gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
            gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
          }}
          aria-hidden="true"
        >
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className={`reveal-cover-tile ${phase === "revealing" ? "tile-uncovering" : ""}`}
              style={{
                animationDelay: `${tile.delay}s`,
              }}
            >
              <div className="tile-accent-border" />
            </div>
          ))}
        </div>
      )}

      <div className={`preloader-unified-canvas ${isContentVisible ? "canvas-visible" : "canvas-hidden"}`}>
        <div className="preloader-bg-ambient" aria-hidden="true" />{" "}
        <div className="preloader-stage">
          <div className="preloader-brand-showcase">
            <div className="preloader-logo-frame">
              <Image
                src="/images/logo1.png"
                alt="Bharat Startup Ventures Pvt. Ltd."
                width={340}
                height={84}
                priority
                className="preloader-brand-img"
              />
            </div>

            <h1 className="preloader-motto">
              Building Businesses. <span className="motto-gold-shimmer">Enabling Innovation.</span> Creating Opportunities.
            </h1>
            <p className="preloader-sub-motto">BUSINESS SETUP • FINANCIAL ASSISTANCE • COMPLIANCE • TECHNOLOGY SOLUTIONS</p>
          </div>

          <div className="preloader-progress-module">
            <div className="preloader-progress-track">
              <div className="preloader-progress-bar" style={{ width: `${progress}%` }}>
                <div className="preloader-progress-comet" />
              </div>
            </div>

            <div className="preloader-status-row">
              <span className="preloader-status-msg" key={statusText}>
                {isComplete ? (
                  <span className="text-[#00843D] inline-flex items-center gap-1.5 font-semibold">
                    <Check size={13} strokeWidth={3} />
                    {statusText}
                  </span>
                ) : (
                  statusText
                )}
              </span>
              <span className="preloader-counter-val">
                <span className="counter-number">{progress}</span>
                <span className="counter-percent">%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
