"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function HomeCta() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative w-full bg-[#001D3A] overflow-hidden">
      {/* Full-height India Gate Image at the Extreme Left */}
      <div
        className={`absolute inset-y-0 left-0 w-full lg:w-1/3 overflow-hidden transition-all duration-1000 ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }`}
      >
        <Image
          src="/images/india-gate.png"
          alt="India Gate"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover object-left scale-y-100"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#001D3A]/70 to-[#001D3A]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-5 lg:gap-4">
          {/* Left Spacer: reserves space for the background image */}
          <div className="hidden lg:block lg:w-4/12 shrink-0" />

          {/* Center: Headline & Subtext (Fade Up) */}
          <div
            className={`relative z-10 w-full lg:w-5/12 py-4 lg:py-5 text-left transition-all duration-800 delay-150 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <h2 className="text-base sm:text-lg lg:text-xl font-normal tracking-tight text-white mb-1 leading-tight">
              Have a Business Idea or a Growth Plan?
            </h2>

            <p className="text-xs leading-normal text-slate-200 font-normal">
              Whether you need support establishing a business, preparing a funding application, managing compliance or developing a digital
              solution, start by sharing your requirements with Bharat Startup Ventures Pvt. Ltd.
            </p>
          </div>

          {/* Right Side: Action Buttons (Fade Up with Delay) */}
          <div
            className={`relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 lg:py-5 transition-all duration-800 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <Link
              href="/contact"
              className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#E59B1F] hover:bg-[#d88e1b] px-5 py-2.5 text-xs font-semibold text-[#001D3A] transition-colors duration-200"
            >
              <span>Discuss Requirements</span>
              <ArrowRight size={14} className="text-[#001D3A] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <a
              href="tel:+919876543210"
              className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-2.5 text-xs font-semibold text-[#001D3A] transition-colors duration-200"
            >
              <Phone size={13} className="text-[#E59B1F] transition-transform duration-200 group-hover:rotate-12" />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
