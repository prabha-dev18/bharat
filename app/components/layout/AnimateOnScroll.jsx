"use client";

import { useEffect, useRef, useState } from "react";

/**
 * AnimateOnScroll
 * High-performance, zero-glitch scroll-reveal wrapper using IntersectionObserver.
 *
 * @param {'up' | 'down' | 'left' | 'right' | 'zoom'} direction - Slide/fade direction
 * @param {number} delay - Animation transition delay in milliseconds
 * @param {number} duration - Animation duration in milliseconds
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Wrapped content
 */
export default function AnimateOnScroll({
  children,
  direction = "up",
  delay = 0,
  duration = 850,
  className = "",
  threshold = 0.12,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion preferences immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getDirectionClass = () => {
    switch (direction) {
      case "up":
        return "reveal-fade-up";
      case "down":
        return "reveal-fade-down";
      case "left":
        return "reveal-fade-left";
      case "right":
        return "reveal-fade-right";
      case "zoom":
        return "reveal-zoom-in";
      default:
        return "reveal-fade-up";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      className={`reveal-init ${getDirectionClass()} ${
        isVisible ? "reveal-visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
