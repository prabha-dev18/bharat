"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Landmark, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function Introduction() {
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
      id="introduction"
      className="relative py-8 sm:py-10 lg:py-12 bg-[#FAF9F5] border-t border-b border-slate-200/80 font-sans scroll-mt-24 overflow-hidden"
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
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-300/80 bg-white shadow-md shadow-slate-900/5 w-full h-full min-h-[290px] sm:min-h-[320px] lg:min-h-full flex flex-col justify-between">
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

              {/* Subtle Ambient Light Gradient on right edge for motto clarity */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent sm:bg-gradient-to-l sm:from-white/80 sm:via-white/30 sm:to-transparent"
              />

              {/* Official Motto Overlay matching reference design */}
              <div className="relative z-10 pt-3 pr-3 sm:pt-4 sm:pr-4 ml-auto max-w-[200px] sm:max-w-[220px] text-right pointer-events-none">
                <div className="inline-block rounded-lg bg-white/85 p-2.5 sm:p-3 backdrop-blur-xs border border-white/60 shadow-xs text-right">
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

              {/* Bottom Authority Micro-Label */}
              <div className="relative z-10 pb-2.5 pl-2.5 sm:pb-3 sm:pl-3 mt-auto">
                <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#0A2540]/85 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-xs border border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F3D072]" />
                  National Capital Territory of Delhi • Kartavya Path
                </span>
              </div>
            </div>
          </div>

          {/* ===================================================================
              2. MIDDLE: Center Content (Compact Padding, Exact Same Fonts)
              =================================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full text-left py-0.5">
            <div>
              {/* Gov Eyebrow */}
              <div className="mb-2 flex items-center gap-2">
                <span className="h-0.5 w-5 bg-[#C89D3C]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C89D3C]">
                  INTRODUCTION
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#0A2540] leading-snug mb-2 sm:mb-2.5">
                One Partner for Your Business Journey
              </h2>

              {/* Paragraphs - Exact Same Font Styles & Sizes, Compact Spacing */}
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 mb-2 sm:mb-2">
                Every business needs a strong foundation, informed decisions and effective execution. Company registration, documentation, financial planning, compliance, technology and customer acquisition can each require time and specialist attention.
              </p>

              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 mb-2 sm:mb-2">
                <strong className="font-semibold text-[#0A2540]">Bharat Startup Ventures Pvt. Ltd.</strong> brings a range of business support and technology capabilities together under one unified brand. We help clients understand their requirements, explore suitable service options and navigate the steps involved in moving their projects forward.
              </p>

              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 mb-2.5 sm:mb-3">
                Whether you are launching a startup, expanding an existing enterprise or improving business processes, our approach focuses on practical guidance, clear communication and solutions aligned with your objectives.
              </p>
            </div>

            {/* Action & Institutional Strip at bottom */}
            <div className="pt-2.5 border-t border-slate-300/80 flex flex-wrap items-center gap-2.5 mt-auto">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-sm bg-[#0A2540] px-4 py-2 text-xs font-bold text-white shadow-xs transition-all duration-300 hover:bg-[#0A192F] hover:shadow-md"
              >
                <span>Discover Who We Are</span>
                <ArrowRight size={13} className="text-[#F3D072] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="hidden sm:flex items-center gap-2 text-[11px] font-semibold text-slate-600 pl-1">
                <span className="inline-flex items-center gap-1.5 text-[#0A2540]">
                  <CheckCircle2 size={13.5} className="text-[#00843D]" />
                  <span>Single-Window Facilitation</span>
                </span>
              </div>
            </div>
          </div>

          {/* ===================================================================
              3. RIGHT: 3rd Table / Attributes Card (Compact, Equal Height)
              =================================================================== */}
          <div className="lg:col-span-3 flex flex-col h-full">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-[#E5D7B7] bg-[#FAF7F0] p-4 sm:p-4.5 lg:p-5 shadow-sm flex flex-col justify-between h-full w-full space-y-3">
              {/* Top Card Authority Micro-Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-[#E5D7B7]/80 pb-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0A2540]">
                  Core Facilitation Attributes
                </span>
                <span className="rounded bg-[#C89D3C]/15 px-1.5 py-0.5 text-[9.5px] font-bold text-[#C89D3C]">
                  EST. 2026
                </span>
              </div>

              {/* 24-Spoke Dharma Chakra Watermark */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-10 h-44 w-44 opacity-[0.07] select-none"
              >
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
                      <h3 className="text-[13px] font-bold text-[#0A2540] leading-snug">
                        {title}
                      </h3>
                      <p className="text-[11px] font-normal leading-relaxed text-slate-600 mt-0.5">
                        {sub}
                      </p>
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
