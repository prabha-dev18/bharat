"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * SmoothScrollProvider
 * Automatically applies high-performance, mobile-safe fade-in-from-left scroll animations
 * to all website components and sections across all pages.
 */
export default function SmoothScrollProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Honor accessibility motion settings
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let observer = null;

    const setupAnimations = () => {
      // Collect all main sections & component containers
      const elements = Array.from(
        document.querySelectorAll(
          "main > section, main > div > section, main > div[id], main > article"
        )
      );

      if (elements.length === 0) return;

      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("scroll-fade-visible");
                observer.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.05,
            rootMargin: "0px 0px -40px 0px",
          }
        );
      }

      const viewportHeight = window.innerHeight;

      elements.forEach((el, index) => {
        // Skip hidden elements or utility elements marked with data-no-animate
        if (el.hasAttribute("data-no-animate") || el.classList.contains("hidden")) {
          return;
        }

        const rect = el.getBoundingClientRect();
        const isInInitialView = rect.top < viewportHeight * 0.85 && rect.bottom > 0;

        // Apply fade-left base class
        el.classList.add("scroll-fade-left");

        // Top-most components or elements already on screen reveal immediately
        if (index === 0 || isInInitialView) {
          requestAnimationFrame(() => {
            el.classList.add("scroll-fade-visible");
          });
        } else if (observer) {
          observer.observe(el);
        } else {
          // Fallback if IntersectionObserver not available
          el.classList.add("scroll-fade-visible");
        }
      });
    };

    // Initialize with a short delay to allow DOM settlement
    const initTimer = setTimeout(setupAnimations, 50);

    // Safety fallback: reveal any remaining unrevealed components after 3.5s
    const safetyTimer = setTimeout(() => {
      document.querySelectorAll(".scroll-fade-left:not(.scroll-fade-visible)").forEach((el) => {
        el.classList.add("scroll-fade-visible");
      });
    }, 3500);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(safetyTimer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return <>{children}</>;
}
