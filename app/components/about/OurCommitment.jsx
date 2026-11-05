"use client";

import { CheckCircle2, Scale, ShieldCheck } from "lucide-react";

export default function OurCommitment() {
  const commitments = [
    {
      id: "01",
      code: "CHARTER-01",
      title: "Client Objective Alignment",
      standard:
        "Developing a clear, comprehensive understanding of client business objectives and operational requirements from the outset.",
      protocol: "Initial Assessment Mandate",
    },
    {
      id: "02",
      code: "CHARTER-02",
      title: "Transparent Scope & Defined Deliverables",
      standard:
        "Conducting open, transparent discussions regarding project scope, documented milestones, fee structures, and agreed deliverables.",
      protocol: "Pre-Engagement Agreement",
    },
    {
      id: "03",
      code: "CHARTER-03",
      title: "Statutory Documentation Standards",
      standard:
        "Maintaining meticulous documentation standards, regulatory accuracy, and structured inter-departmental process coordination.",
      protocol: "Regulatory Compliance Standard",
    },
    {
      id: "04",
      code: "CHARTER-04",
      title: "Realistic Milestones & Timelines",
      standard:
        "Setting realistic expectations regarding departmental processing timelines, statutory prerequisites, eligibility benchmarks, and outcomes.",
      protocol: "Empirical Timelines & Due Diligence",
    },
    {
      id: "05",
      code: "CHARTER-05",
      title: "Structured Follow-Up Support",
      standard:
        "Providing dependable, structured follow-up advisory and ongoing coordination where agreed within the professional engagement scope.",
      protocol: "Scope Review & Handover",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white font-sans border-b border-slate-200/80 overflow-hidden">
      {/* Background Micro Security Grid matching previous component */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0A2540_1px,transparent_1px)] [background-size:24px_24px]"
      />

      {/* Subtle Sovereign 24-Spoke Watermark in Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -bottom-16 h-80 w-80 opacity-[0.035] select-none"
      >
        <svg viewBox="0 0 100 100" fill="none" className="text-[#0A2540] w-full h-full">
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
              strokeWidth="1.2"
              transform={`rotate(${i * 15} 50 50)`}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================================
            CENTERED INSTITUTIONAL HEADER (Different from AreasOfExpertise split)
            ===================================================================== */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Eyebrow Badge matching previous component font & style */}
          <div className="mb-3.5 inline-flex items-center gap-1.5">
            <span className="rounded-sm border border-[#D5E2F0] bg-[#FAF9F5] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase shadow-2xs">
              Institutional Citizen Charter
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-[34px] leading-tight">
            Our Professional{" "}
            <span className="bg-gradient-to-r from-[#C89D3C] via-[#C89D3C] to-[#F3D072] bg-clip-text text-transparent">
              Commitment
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-base sm:text-lg font-semibold text-[#0A2540]">
            Clear Communication and Practical Execution
          </p>

          {/* Centered Gold Accent Line matching previous component */}
          <div className="my-3.5 h-1 w-16 rounded-full bg-[#C89D3C]" />

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            We believe an enduring business relationship begins with understanding client objectives and explaining available options clearly. Every engagement is governed by transparent scope, statutory discipline, and realistic outcome planning.
          </p>
        </div>

        {/* =====================================================================
            FULL-WIDTH OFFICIAL CHARTER SCHEDULE MATRIX (Zero Cards)
            Desktop Tabular Schedule with Thin Sovereign Rules
            ===================================================================== */}
        <div className="mt-12 hidden md:block">
          <div className="w-full border-t-2 border-b-2 border-[#0A2540]">
            {/* Table Header Row */}
            <div className="grid grid-cols-12 py-3 px-3 bg-[#FAF9F5] border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-[#0A2540]">
              <div className="col-span-1 text-center font-mono">Dkt #</div>
              <div className="col-span-4">Commitment Pillar</div>
              <div className="col-span-5">Institutional Service Standard</div>
              <div className="col-span-2 text-right">Protocol</div>
            </div>

            {/* Table Body Rows - Zero Cards, Thin Border Dividers */}
            <div className="divide-y divide-slate-200/90">
              {commitments.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 py-4 px-3 items-center transition-colors duration-150 hover:bg-[#FAF9F5]/70"
                >
                  {/* Column 1: Docket # */}
                  <div className="col-span-1 text-center font-mono text-xs font-bold text-[#C89D3C]">
                    {item.id}
                  </div>

                  {/* Column 2: Pillar Title with Icon Medallion */}
                  <div className="col-span-4 flex items-center gap-3 pr-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0A192F] text-[#F3D072] shadow-2xs">
                      <CheckCircle2 size={14} strokeWidth={2.2} />
                    </div>
                    <div>
                      <span className="block text-[13.5px] font-bold text-[#0A2540] leading-snug">
                        {item.title}
                      </span>
                      <span className="block font-mono text-[10px] text-slate-400">
                        {item.code}
                      </span>
                    </div>
                  </div>

                  {/* Column 3: Service Standard Narrative */}
                  <div className="col-span-5 pr-6 text-xs text-slate-600 leading-relaxed">
                    {item.standard}
                  </div>

                  {/* Column 4: Accountability Protocol */}
                  <div className="col-span-2 text-right">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[10.5px] font-bold uppercase tracking-wider bg-[#0A2540]/5 text-[#0A2540] border border-[#0A2540]/15">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00843D]" />
                      {item.protocol}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================================
            MOBILE / TABLET LINEAR CHARTER SCHEDULE (Zero Cards)
            Simple Border-Separated Ledger
            ===================================================================== */}
        <div className="mt-8 block md:hidden divide-y divide-slate-200 border-t border-b border-slate-200 text-left">
          {commitments.map((item) => (
            <div key={item.id} className="py-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#C89D3C]">
                    {item.id}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {item.code}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[10px] font-semibold text-[#00843D] bg-emerald-50 border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00843D]" />
                  Active Standard
                </span>
              </div>

              <div className="flex items-start gap-2.5 mb-1.5">
                <CheckCircle2 size={16} className="text-[#C89D3C] mt-0.5 shrink-0" strokeWidth={2.2} />
                <h3 className="text-sm font-bold text-[#0A2540] leading-snug">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                {item.standard}
              </p>

              <div className="mt-2.5 pl-6 text-[10.5px] font-medium text-slate-500">
                <span className="text-[#0A2540] font-semibold">Protocol: </span>
                {item.protocol}
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================================
            STATUTORY DISCLOSURE STRIP - FULL WIDTH (Zero Cards)
            ===================================================================== */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600 text-left">
          <div className="flex items-start gap-3 max-w-3xl">
            <Scale size={18} className="text-[#C89D3C] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              <strong className="font-semibold text-[#0A2540]">Statutory Advisory Disclosure:</strong> For government schemes, licences, certifications, funding and statutory matters, eligibility and final decisions remain subject to the relevant authorities, financial institutions and applicable rules.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-semibold text-[#0A2540] shrink-0">
            <ShieldCheck size={15} className="text-[#00843D]" />
            <span>Charter Framework Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
