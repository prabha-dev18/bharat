"use client";

import Link from "next/link";
import {
  Building2,
  Scale,
  Landmark,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  FileCheck2,
  Compass,
  Award,
} from "lucide-react";

export default function Introduction() {
  const pillars = [
    {
      num: "01",
      icon: Building2,
      title: "Statutory Formation & Incorporation",
      badge: "Corporate Formation",
      description:
        "Fast-track company incorporation under MCA SPICe+, LLP structuring, OPC, Section 8, and statutory documentation tailored for Indian enterprise scale.",
      benefits: [
        "MCA SPICe+ Expedited Incorporation",
        "PAN, TAN, MOA, AOA & Digital Signature",
        "Bank Account & Capital Structuring",
      ],
      accent: "border-[#C89D3C]/40 text-[#C89D3C] bg-[#C89D3C]/10",
    },
    {
      num: "02",
      icon: Scale,
      title: "Taxation & Regulatory Adherence",
      badge: "Tax & Compliance",
      description:
        "End-to-end statutory compliance management ensuring seamless alignment with GST regulations, direct taxes, and ROC annual filing mandates.",
      benefits: [
        "GST Registration & Monthly Return Desk",
        "Income Tax & TDS Statutory Filings",
        "ROC Annual Returns & Board Resolutions",
      ],
      accent: "border-emerald-400/40 text-[#00843D] bg-emerald-50",
    },
    {
      num: "03",
      icon: Landmark,
      title: "Government Schemes & Subsidies",
      badge: "Government Desk",
      description:
        "Single-window facilitation unlocking central and state incentive frameworks, seed funds, capital margin subsidies, and collateral-free credit.",
      benefits: [
        "DPIIT Recognition & Section 80-IAC Exemption",
        "Startup India Seed Fund & Grant Advisory",
        "PMEGP (Up to 35% Subsidy) & CGTMSE Loans",
      ],
      accent: "border-[#0A2540]/30 text-[#0A2540] bg-[#0A2540]/5",
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "IPR & Enterprise Governance",
      badge: "Asset Protection",
      description:
        "Robust intellectual property safeguarding and corporate governance advisory to build defensible valuation and long-term enterprise credibility.",
      benefits: [
        "Trademark Search, Filing & Prosecution",
        "Patent Drafting & Copyright Registration",
        "ISO Certifications & Trade Licences",
      ],
      accent: "border-sky-400/40 text-sky-700 bg-sky-50",
    },
  ];

  const trustMetrics = [
    { label: "National Coverage", value: "28 States & 8 UTs", icon: Compass },
    { label: "Regulatory Standard", value: "MCA & DPIIT Aligned", icon: Award },
    { label: "Execution Model", value: "100% Digital Single-Window", icon: FileCheck2 },
    { label: "Compliance Quality", value: "End-to-End Governance", icon: ShieldCheck },
  ];

  return (
    <section
      id="introduction"
      className="relative py-12 sm:py-16 lg:py-20 bg-[#FAF9F5] border-t border-b border-slate-200/80 font-sans scroll-mt-24 overflow-hidden"
    >
      {/* Background Micro Gov Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#0A2540_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ===================================================================
            1. HEADER BLOCK: Single-Window Government Facilitation Overview
            =================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow */}
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-0.5 w-6 bg-[#C89D3C]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C89D3C]">
              NATIONAL SINGLE-WINDOW FACILITATION &bull; BHARAT STARTUP
            </span>
            <span className="h-0.5 w-6 bg-[#C89D3C]" />
          </div>

          {/* Main Headline */}
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0A2540] leading-tight mb-3 sm:mb-4">
            One Unified Institutional Gateway for India&apos;s Next Generation of Entrepreneurs
          </h2>

          {/* Core Introduction Paragraph */}
          <p className="text-xs sm:text-[14px] leading-relaxed text-slate-700 max-w-2xl mx-auto sm:leading-[1.7]">
            From early-stage ideation to market scale, Bharat Startup Ventures delivers the statutory clarity, corporate governance, and government scheme facilitation founders need to thrive across India&apos;s 28 States and 8 Union Territories.
          </p>

          {/* Horizontal National Trust Metrics Bar */}
          <div className="mt-6 pt-5 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-3">
            {trustMetrics.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="rounded-sm border border-slate-200/90 bg-white/90 p-2.5 sm:p-3 text-center shadow-xs backdrop-blur-xs"
              >
                <div className="flex items-center justify-center gap-1.5 text-[#C89D3C] mb-1">
                  <Icon size={14} />
                  <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-500">{label}</span>
                </div>
                <p className="text-xs sm:text-[13px] font-bold text-[#0A2540] leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================================
            2. MAIN FEATURE GRID: 4 Enterprise Lifecycle Strategic Pillars
            (Modern rounded-sm cards with soft shadows, zero rigid squares)
            =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {pillars.map(({ num, icon: Icon, title, badge, description, benefits, accent }) => (
            <div
              key={title}
              className="group relative rounded-sm border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:border-[#C89D3C]/60"
            >
              <div>
                {/* Header row: Icon & Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-sm border ${accent}`}>
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#C89D3C] transition-colors">
                    {num}
                  </span>
                </div>

                {/* Pillar Badge */}
                <span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-2.5 border border-slate-200/60">
                  {badge}
                </span>

                {/* Pillar Title */}
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#0A2540] leading-snug mb-2 group-hover:text-[#C89D3C] transition-colors">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[12.5px] leading-relaxed text-slate-600 mb-4">
                  {description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-[#00843D] shrink-0 mt-0.5" />
                      <span className="text-[11px] font-medium text-slate-700 leading-tight">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Assurance Tag */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[10.5px] text-slate-500 font-semibold">
                <span>Single-Window Advisory</span>
                <span className="text-[#00843D]">● Active Desk</span>
              </div>
            </div>
          ))}
        </div>

        {/* ===================================================================
            3. BOTTOM EXECUTIVE MISSION & ACTION RIBBON
            =================================================================== */}
        <div className="mt-10 sm:mt-12 rounded-sm border-2 border-[#C89D3C]/40 bg-gradient-to-r from-[#0A2540] via-[#0E3359] to-[#0A2540] p-6 sm:p-7 shadow-xl shadow-slate-900/10 text-white flex flex-col lg:flex-row items-center justify-between gap-6">
          
          <div className="max-w-2xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#F3D072]">
                Sovereign Enterprise Mission
              </span>
              <span className="text-white/40">&bull;</span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">28 States &bull; 8 UTs</span>
            </div>

            <p className="font-heading italic text-lg sm:text-xl font-bold text-white leading-snug">
              Supporting Entrepreneurs Building A Stronger{" "}
              <span className="not-italic font-extrabold text-[#F3D072] tracking-wide">India</span>
            </p>

            <p className="mt-1.5 text-xs text-slate-300 leading-relaxed max-w-xl">
              Navigate government schemes, institutional banking, statutory compliances, and corporate expansion through one trusted public-private facilitation window.
            </p>

            {/* Tricolor Ribbon Accent */}
            <div className="mt-3 flex h-[3.5px] w-14 overflow-hidden rounded-full shadow-2xs mx-auto lg:mx-0">
              <div className="h-full w-1/3 bg-[#FF9933]" />
              <div className="h-full w-1/3 bg-[#FFFFFF]" />
              <div className="h-full w-1/3 bg-[#138808]" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <Link
              href="/government-schemes"
              className="group relative inline-flex min-h-10 items-center justify-center gap-2 overflow-hidden rounded-sm bg-[#C89D3C] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#0A2540] shadow-md transition-all hover:bg-[#F3D072]"
            >
              <span>Explore Government Schemes</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-sm border border-white/25 bg-white/10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/40"
            >
              <span>Consult Facilitation Desk</span>
              <ArrowUpRight size={14} className="text-[#F3D072]" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
