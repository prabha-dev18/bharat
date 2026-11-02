"use client";

/**
 * SmoothScrollProvider
 * Ensures native hardware-accelerated scrolling with zero layout shift or delayed component pop-in.
 * All elements render immediately and remain fully visible on page load and reload.
 */
export default function SmoothScrollProvider({ children }) {
  return <>{children}</>;
}
