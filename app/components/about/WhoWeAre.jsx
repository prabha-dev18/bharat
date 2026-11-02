"use client";

import Image from "next/image";
import { Users, Landmark, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function WhoWeAre() {
  const highlights = [
    {
      icon: Users,
      title: "One Partner Many Solutions",
      sub: "End-to-end statutory & business support across the enterprise lifecycle",
      badgeColor: "border-[#C89D3C]/40 text-[#0A2540] bg-white",
    },
    {
      icon: Landmark,
      title: "Trusted by Entrepreneurs",
      sub: "Facilitating startups and MSMEs across 28 States & 8 Union Territories",
      badgeColor: "border-emerald-300 text-[#00843D] bg-emerald-50/50",
    },
    {
      icon: ShieldCheck,
      title: "Focused on Long-Term Growth",
      sub: "Robust governance, regulatory adherence and continuous advisory",
      badgeColor: "border-sky-300 text-[#0A2540] bg-sky-50/50",
    },
  ];

  return (
    <section
      id="who-we-are"
      className="relative py-8 sm:py-10 lg:py-18 bg-[#FAF9F5] border-t border-b border-slate-200/80 font-sans scroll-mt-24 overflow-hidden"
    >
      {/* Background Micro Gov Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#0A2540_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Equal-Height 3-Column Grid - Compact Vertical Footprint */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-5 xl:gap-6 lg:items-stretch">
          {/* ===================================================================
              1. LEFT: India Gate Visual Card (Decreased Height, Equal to Row)
              =================================================================== */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="group relative overflow-hidden rounded-sm sm:rounded-sm border border-slate-300/80 bg-white shadow-md shadow-slate-900/5 w-full h-full min-h-[290px] sm:min-h-[320px] lg:min-h-full flex flex-col justify-between">
              {/* 1200x896 True HD Image filling full height */}
              <Image
                src="/images/who-we-are-india-gate-hd.jpg"
                alt="India Gate, New Delhi - Supporting Entrepreneurs Building A Stronger India"
                fill
                priority
                quality={100}
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 480px"
              />

              {/* Official Motto Overlay matching reference design */}
              <div className="relative z-10 pt-3 pr-3 sm:pt-4 sm:pr-4 ml-auto max-w-[200px] sm:max-w-[220px] text-right pointer-events-none">
                <div className="inline-block rounded-sm bg-white/85 p-2.5 sm:p-3 backdrop-blur-xs border border-white/60 shadow-xs text-right">
                  <p className="font-heading italic text-sm sm:text-base md:text-lg font-bold text-[#0A2540] leading-snug">
                    Supporting <br />
                    Entrepreneurs <br />
                    Building <br />
                    A Stronger <br />
                    <span className="not-italic font-extrabold text-[#0A2540] tracking-wide">India</span>
                  </p>

                  {/* Official Saffron-White-Green Tricolor Accent Ribbon */}
                  <div className="mt-1.5 ml-auto flex h-[3px] w-12 overflow-hidden rounded-full shadow-2xs">
                    <div className="h-full w-1/3 bg-[#FF9933]" />
                    <div className="h-full w-1/3 bg-[#FFFFFF]" />
                    <div className="h-full w-1/3 bg-[#138808]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full text-left py-0.5">
            <div>
              {/* Gov Eyebrow */}
              <div className="mb-2 flex items-center gap-2">
                <span className="h-0.5 w-5 bg-[#C89D3C]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C89D3C]">WHO WE ARE</span>
              </div>

              {/* Headline */}
              <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#0A2540] leading-snug mb-2 sm:mb-2.5">
                A Connected Approach to Business Development
              </h2>

              {/* Paragraphs - Exact Same Font Styles & Sizes, Compact Spacing */}
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 mb-2 sm:mb-2">
                Building and managing a business involves several interconnected statutory responsibilities. Entrepreneurs must consider
                registrations, documentation, financial planning, compliance, customer acquisition and the technology needed to operate
                efficiently.
              </p>

              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 mb-2 sm:mb-2">
                <strong className="font-semibold text-[#0A2540]">Bharat Startup Ventures Pvt. Ltd.</strong> aims to make these requirements
                easier to navigate by bringing relevant services together under one unified institutional brand. We focus on understanding
                individual requirements, identifying appropriate service options and coordinating the agreed work through a structured,
                compliant approach.
              </p>

              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 mb-2.5 sm:mb-3">
                Our goal is to help clients address immediate business needs while establishing a solid statutory foundation for
                sustainable, long-term enterprise growth.
              </p>
            </div>

            {/* Institutional Framework Alignment Strip at bottom */}
            <div className="pt-2.5 border-t border-slate-300/80 flex flex-wrap items-center gap-2.5 text-[11px] font-semibold text-slate-600 mt-auto">
              <span className="inline-flex items-center gap-1.5 text-[#0A2540]">
                <CheckCircle2 size={13.5} className="text-[#00843D]" />
                <span>Single-Window Facilitation</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1.5 text-[#0A2540]">
                <CheckCircle2 size={13.5} className="text-[#C89D3C]" />
                <span>Regulatory Governance</span>
              </span>
            </div>
          </div>

          {/* ===================================================================
              3. RIGHT: 3rd Table / Attributes Card (Compact, Equal Height)
              =================================================================== */}
          <div className="lg:col-span-3 flex flex-col h-full">
            <div className="relative overflow-hidden rounded-sm sm:rounded-sm border border-[#E5D7B7] bg-[#FAF7F0] p-4 sm:p-4.5 lg:p-5 shadow-sm flex flex-col justify-between h-full w-full space-y-3">
              {/* Top Card Authority Micro-Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-[#E5D7B7]/80 pb-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0A2540]">Core Facilitation Attributes</span>
                <span className="rounded bg-[#C89D3C]/15 px-1.5 py-0.5 text-[9.5px] font-bold text-[#C89D3C]">EST. 2026</span>
              </div>

              {/* 24-Spoke Dharma Chakra Watermark */}
              <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-10 h-44 w-44 opacity-[0.07] select-none">
                <svg viewBox="0 0 100 100" fill="none" className="text-[#C89D3C] w-full h-full">
                  <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2.5" />
                  {Array.from({ length: 24 }).map((_, i) => (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2="50"
                      y2="4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      transform={`rotate(${i * 15} 50 50)`}
                    />
                  ))}
                </svg>
              </div>

              {/* 3 Value Pillars distributed evenly in height */}
              <div className="relative z-10 flex-1 flex flex-col justify-around py-0.5 space-y-2.5 sm:space-y-3">
                {highlights.map(({ icon: Icon, title, sub, badgeColor }) => (
                  <div key={title} className="flex items-start gap-2.5 text-left">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${badgeColor} shadow-2xs mt-0.5`}
                    >
                      <Icon size={16} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-[13px] font-bold text-[#0A2540] leading-snug">{title}</h3>
                      <p className="text-[11px] font-normal leading-relaxed text-slate-600 mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Institutional Bottom Seal Strip */}
              <div className="relative z-10 pt-2 border-t border-[#E5D7B7]/80 flex items-center justify-between text-[10px] text-slate-500 font-medium mt-auto">
                <span>Pan-India Coverage</span>
                <span className="font-bold text-[#00843D]">● Active Portal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
