"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PhoneCall, CheckCircle2, FileCheck2, Landmark, ShieldCheck, MapPin } from "lucide-react";

export default function HomeCta({
  badge = "SINGLE-WINDOW SCHEME & STATUTORY ADVISORY",
  title = "Looking for business setup assistance, funding & preparation, compliance support or a technology solution?",
  description = "Connect with Bharat Startup Ventures Pvt. Ltd. to discuss your requirements.",
  phone = "+91 98765 43210",
  phoneTel = "+919876543210",
  deskStatus = "Desk Open (9:30 AM – 6:30 PM)",
  pillars = [
    "DPIIT Recognition & Section 80-IAC",
    "MSME, PMEGP & CGTMSE Subsidies",
    "Banking DPR, CMA Data & Pitch Decks",
    "GeM Portal, ROC & Statutory Governance",
  ],
  className = "",
  id = "contact",
} = {}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

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
      { threshold: 0.12 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id={id} className={`relative w-full overflow-hidden bg-[#051329] text-white ${className}`}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle Architectural Radial Glow */}
        <div className="absolute -top-32 left-1/4 h-[420px] w-[500px] rounded-full bg-[#1A3A6B]/25 blur-[100px]" />
        <div className="absolute -bottom-32 right-10 h-[380px] w-[450px] rounded-full bg-[#C89D3C]/10 blur-[110px]" />

        {/* Guilloche Security Lattice / Banknote Wave Lines */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gov-guilloche-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="38" stroke="#C89D3C" strokeWidth="0.8" fill="none" />
              <circle cx="40" cy="40" r="28" stroke="#FFFFFF" strokeWidth="0.5" fill="none" />
              <circle cx="40" cy="40" r="18" stroke="#C89D3C" strokeWidth="0.6" fill="none" />
              <path d="M0 40 Q20 20, 40 40 T80 40" stroke="#C89D3C" strokeWidth="0.6" fill="none" />
              <path d="M40 0 Q60 20, 40 40 T40 80" stroke="#C89D3C" strokeWidth="0.6" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gov-guilloche-grid)" />
        </svg>

        {/* Small India Map Watermark Positioned on the Left Side */}
        <div className="absolute -left-4 bottom-0 h-48 w-48 opacity-[0.08] sm:h-56 sm:w-56 sm:opacity-[0.10] mix-blend-screen pointer-events-none">
          <Image
            src="/images/map.jpg"
            alt="India Map Watermark"
            fill
            sizes="(max-width: 640px) 192px, 224px"
            className="object-contain filter invert"
          />
        </div>
      </div>

      {/* =========================================================================
          MAIN COMPACT CTA CONTAINER
          ========================================================================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
          {/* -------------------------------------------------------------------
              LEFT COLUMN: Official Heading, Subtitle & 4 Pillars
              ------------------------------------------------------------------- */}
          <div
            className={`text-left lg:col-span-7 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {/* Institutional Badge */}
            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-[#C89D3C]/40 bg-[#0A2244]/80 px-3 py-1 shadow-sm backdrop-blur-md">
              <Landmark size={12} className="text-[#F3D072]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F3D072]">{badge}</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-heading text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-[26px] leading-snug">{title}</h2>

            {/* Explanatory Paragraph */}
            <p className="mt-1.5 text-xs leading-relaxed text-slate-200 sm:text-[13px]">{description}</p>

            {/* 4 Pillars / Verification Grid */}
            <div className="mt-3.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-slate-200 backdrop-blur-sm sm:text-[11.5px]"
                >
                  <CheckCircle2 size={13} className="text-[#F3D072] shrink-0" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </div>

          {/* -------------------------------------------------------------------
              RIGHT COLUMN: Compact Facilitation Card
              ------------------------------------------------------------------- */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-150 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-sm border border-[#C89D3C]/40 bg-gradient-to-b from-[#091F3C] to-[#061427] p-4 shadow-xl backdrop-blur-md sm:p-5">
              {/* Card Top Header: Desk Title & Status */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-sm border border-[#C89D3C]/40 bg-[#C89D3C]/10 text-[#F3D072]">
                    <ShieldCheck size={14} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F3D072]">Enterprise Advisory Desk</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-2 py-0.5 text-[9px] font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{deskStatus}</span>
                </div>
              </div>

              {/* Action Prompt */}
              <div className="my-2.5">
                <p className="text-[11px] leading-relaxed text-slate-300">
                  Initiate your official inquiry or connect directly with our advisory officers for tailored scheme mapping and
                  documentation guidance.
                </p>
              </div>

              {/* Action Button: Advisory Desk Helpline */}
              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${phoneTel}`}
                  className="group flex w-full items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-[#C89D3C] via-[#E2BD5F] to-[#C89D3C] px-4 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[#051329] shadow-md transition-all duration-300 hover:brightness-110 active:scale-[0.99] sm:text-[13px]"
                >
                  <PhoneCall size={14} className="text-[#051329] transition-transform duration-300 group-hover:scale-110" />
                  <span>Advisory Desk: {phone}</span>
                </a>
              </div>

              {/* Security & Verification Micro-Notes */}
              <div className="mt-2.5 flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-slate-400">
                <span className="flex items-center gap-1">
                  <FileCheck2 size={11} className="text-[#F3D072]" />
                  <span>100% Confidential Data Protection</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={11} className="text-[#F3D072]" />
                  <span>Pan-India Coverage (28 States &amp; 8 UTs)</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
