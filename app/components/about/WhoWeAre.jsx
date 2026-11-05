"use client";

import { Users, Landmark, ShieldCheck, CheckCircle2, Award, FileCheck2, Scale, Compass } from "lucide-react";

export default function WhoWeAre() {
  const pillars = [
    {
      icon: Users,
      num: "01",
      section: "SECTION 01",
      title: "One Partner, Many Solutions",
      sub: "End-to-end statutory and regulatory advisory across the enterprise lifecycle, eliminating multi-vendor complexity.",
      tag: "Lifecycle Governance",
      directive: "MCA SPICe+ Standard",
    },
    {
      icon: Landmark,
      num: "02",
      section: "SECTION 02",
      title: "Trusted Sovereign Facilitation",
      sub: "Connecting founders and MSMEs directly with DPIIT recognition, Startup India seed grants, and Central/State incentives.",
      tag: "Government Scheme Desk",
      directive: "DPIIT & Subsidy Alignment",
    },
    {
      icon: ShieldCheck,
      num: "03",
      section: "SECTION 03",
      title: "Focused on Long-Term Growth",
      sub: "Robust statutory compliance frameworks, trademark protection, annual filings, and ongoing enterprise advisory.",
      tag: "Continuous Compliance",
      directive: "Statutory ROC Adherence",
    },
  ];

  const highlights = [
    "Single-Window Corporate & Statutory Gateway",
    "DPIIT Recognition & Startup India Seed Fund Support",
    "MCA Incorporation, GST, MSME Udyam & Tax Filing",
    "Full-Spectrum IPR: Trademark, Copyright & Patent",
    "Active Facilitation Network Across 28 States & 8 UTs",
  ];

  return (
    <section
      id="who-we-are"
      className="relative py-12 sm:py-16 lg:py-20 bg-[#FAF9F5] border-t border-b border-slate-200/80 font-sans scroll-mt-24 overflow-hidden"
    >
      {/* Background Micro Gov Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#0A2540_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===================================================================
            TIER 1: Institutional Overview (2-Column Asymmetric Layout)
            =================================================================== */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-stretch">
          {/* LEFT: Detailed Institutional Narrative (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Official Eyebrow */}
              <div className="mb-3 flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#C89D3C]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C89D3C]">
                  WHO WE ARE &bull; INSTITUTIONAL FACILITATION
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0A2540] leading-snug mb-4">
                A Connected National Framework for Enterprise Growth &amp; Startup Governance
              </h2>

              {/* Narrative Content */}
              <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 mb-3">
                Building and scaling an enterprise in India involves complex statutory checkpoints. Founders and business leaders navigate
                company formation, taxation laws, regulatory compliance, intellectual property protection, and government incentive
                structures across multiple departments.
              </p>

              <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 mb-4">
                <strong className="font-bold text-[#0A2540]">Bharat Startup Ventures Pvt. Ltd.</strong> bridges this gap through a unified
                single-window platform. By consolidating regulatory advisory, statutory registrations, and government scheme facilitation
                under one institutional umbrella, we eliminate friction and empower entrepreneurs to focus on building viable, scalable
                enterprises.
              </p>

              {/* Checklist Grid */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-200">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#00843D] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-[13px] font-medium text-[#0A2540] leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Verification Note */}
            <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#0A2540]">
                <Scale size={14} className="text-[#C89D3C]" />
                Corporate Governance Standard: MCA &amp; DPIIT Aligned
              </span>
              <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                &bull; Single-Window Active
              </span>
            </div>
          </div>

          {/* RIGHT: Executive Sovereign Charter Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative overflow-hidden rounded-sm border-2 border-[#C89D3C]/40 bg-gradient-to-br from-[#0A2540] via-[#0E3359] to-[#0A2540] p-6 sm:p-7 shadow-xl shadow-slate-900/15 flex flex-col justify-between h-full text-white">
              {/* Background 24-Spoke Dharma Chakra Watermark */}
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 opacity-[0.06] select-none">
                <svg viewBox="0 0 100 100" fill="none" className="text-[#C89D3C] w-full h-full">
                  <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2" />
                  {Array.from({ length: 24 }).map((_, i) => (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2="50"
                      y2="4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      transform={`rotate(${i * 15} 50 50)`}
                    />
                  ))}
                </svg>
              </div>

              {/* Card Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-3">
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-[#F3D072]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F3D072]">INSTITUTIONAL CHARTER</span>
                </div>
                <span className="font-mono text-[10px] font-bold text-white/80 bg-white/10 px-2 py-0.5 rounded border border-white/15">
                  EST. 2026
                </span>
              </div>

              {/* Center Motto Banner */}
              <div className="relative z-10 my-6 rounded-sm bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#F3D072] mb-1">National Enterprise Mission</p>
                <p className="font-heading italic text-lg sm:text-xl font-bold text-white leading-snug">
                  Supporting Entrepreneurs Building A Stronger{" "}
                  <span className="not-italic font-extrabold text-[#F3D072] tracking-wide">India</span>
                </p>

                {/* Saffron-White-Green Tricolor Ribbon */}
                <div className="mt-3 flex h-[4px] w-20 overflow-hidden rounded-full shadow-sm">
                  <div className="h-full w-1/3 bg-[#FF9933]" />
                  <div className="h-full w-1/3 bg-[#FFFFFF]" />
                  <div className="h-full w-1/3 bg-[#138808]" />
                </div>
              </div>

              {/* Strategic Coverage Metrics Strip */}
              <div className="relative z-10 grid grid-cols-2 gap-3 pt-3 border-t border-white/15">
                <div className="rounded-sm bg-black/25 p-3 border border-white/10">
                  <div className="flex items-center gap-1.5 text-[#F3D072] mb-1">
                    <Compass size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Pan-India Reach</span>
                  </div>
                  <p className="font-heading text-lg font-bold text-white">28 States</p>
                  <p className="text-[10px] text-slate-300">&amp; 8 Union Territories</p>
                </div>

                <div className="rounded-sm bg-black/25 p-3 border border-white/10">
                  <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                    <FileCheck2 size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Single-Window</span>
                  </div>
                  <p className="font-heading text-lg font-bold text-white">100% Digital</p>
                  <p className="text-[10px] text-slate-300">Regulatory Advisory</p>
                </div>
              </div>

              {/* Bottom Authority Seal Tag */}
              <div className="relative z-10 mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300">
                <span>DPIIT &amp; MSME Facilitation Desk</span>
                <span className="text-[#F3D072] font-semibold">Government Scheme Aligned</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
            TIER 2: OPERATIONAL PILLARS - NO SQUARE CARDS
            Completely Novel Sovereign Gazetted Statutory Directorate Framework
            (Never used anywhere else in the entire website)
            =================================================================== */}
        <div className="mt-14 sm:mt-18 pt-10">
          {/* Official Gazetted Framework Container - A Single Unified Sovereign Document Stele */}
          <div className="relative rounded-sm border-2 border-[#C89D3C]/40 bg-[#FAF7F0] shadow-md shadow-slate-900/5 overflow-hidden">
            <div className="px-5 py-4 sm:px-8 sm:py-5 bg-gradient-to-r from-[#0A2540] via-[#0E3359] to-[#0A2540] text-white flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#C89D3C]/40">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-[#F3D072]/40 bg-white/10 text-[#F3D072]">
                  <Scale size={20} strokeWidth={2} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F3D072]">
                      OPERATIONAL PILLARS &bull; STATUTORY DIRECTIVE
                    </span>
                    <span className="hidden sm:inline text-white/40">&bull;</span>
                    <span className="hidden sm:inline font-mono text-[9.5px] font-semibold text-emerald-400">ACTIVE GAZETTE 2026</span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                    How Bharat Startup Facilitates Your Business
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start md:self-auto">
                <span className="font-mono text-[10px] font-bold text-[#F3D072] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  3 Sovereign Directives
                </span>
              </div>
            </div>

            {/* Continuous 3-Column Sovereign Gazetted Ledger (ZERO square box cards!) */}
            <div className="relative divide-y lg:divide-y-0 lg:divide-x-2 divide-[#E5D7B7] grid grid-cols-1 lg:grid-cols-3 items-stretch">
              {pillars.map(({ icon: Icon, num, section, title, sub, tag, directive }, idx) => (
                <div
                  key={title}
                  className="p-6 sm:p-7 flex flex-col justify-between hover:bg-[#F5EED9]/40 transition-colors duration-300 relative group"
                >
                  {/* Subtle 24-Spoke Dharma Chakra Trace in background */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 bottom-4 h-24 w-24 opacity-[0.035] select-none text-[#0A2540]"
                  >
                    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
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

                  <div>
                    {/* Top Legislative Section Tag */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5D7B7]">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-black text-[#0A2540]">{section}</span>
                        <span className="text-[10px] text-slate-400">&bull;</span>
                        <span className="font-mono text-[10px] font-bold text-[#C89D3C]">PART {num}</span>
                      </div>
                      <span className="rounded-full bg-[#C89D3C]/15 px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-[#0A2540] border border-[#C89D3C]/30">
                        {tag}
                      </span>
                    </div>

                    {/* Insignia Icon & Formal Title */}
                    <div className="flex items-start gap-3.5 mb-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border-2 border-[#C89D3C]/40 bg-[#0A2540] text-[#F3D072] shadow-xs">
                        <Icon size={20} strokeWidth={2} />
                      </div>
                      <h4 className="font-heading text-lg sm:text-xl font-bold text-[#0A2540] leading-snug pt-0.5 group-hover:text-[#C89D3C] transition-colors">
                        {title}
                      </h4>
                    </div>

                    {/* Exact Subtitle (Zero extra content) */}
                    <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-700 pl-0.5">{sub}</p>
                  </div>

                  {/* Gazetted Directives Strip at Bottom */}
                  <div className="mt-6 pt-3.5 border-t border-[#E5D7B7] flex items-center justify-between text-[11px] text-slate-600">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-[#0A2540]">
                      <CheckCircle2 size={13.5} className="text-[#00843D] shrink-0" />
                      <span>{directive}</span>
                    </span>
                    <span className="font-mono text-[9.5px] text-[#00843D] font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      &bull; Enforced
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Gazette Masthead Footer Strip */}
            <div className="px-5 py-3 sm:px-8 bg-[#0A2540]/5 border-t border-[#E5D7B7] flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 text-[#0A2540] font-bold">
                <FileCheck2 size={14} className="text-[#C89D3C]" />
                Institutional Single-Window Directorate Standard
              </span>
              <span>Central &amp; State Enterprise Facilitation Framework</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
