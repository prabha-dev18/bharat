"use client";

import { Inbox, FileSearch, MessageSquare, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export default function WhatHappensNext() {
  const steps = [
    {
      number: "01",
      code: "STAGE-01",
      title: "Enquiry Intake & Docket Logging",
      description:
        "Your submitted requirements are registered securely in our internal facilitation ledger and assigned an institutional reference identifier.",
      benchmark: "Logged within 2 Hours",
      icon: Inbox,
    },
    {
      number: "02",
      code: "STAGE-02",
      title: "Statutory & Technical Assessment",
      description:
        "Our specialized advisory team conducts a preliminary review of your venture stage, statutory requirements, and eligible scheme options.",
      benchmark: "Review within 24 Hours",
      icon: FileSearch,
    },
    {
      number: "03",
      code: "STAGE-03",
      title: "Discovery & Scope Consultation",
      description:
        "We coordinate a structured consultation session to clarify objectives, outline statutory pathways, and define project deliverables.",
      benchmark: "Direct Specialist Discussion",
      icon: MessageSquare,
    },
    {
      number: "04",
      code: "STAGE-04",
      title: "Transparent Engagement Roadmap",
      description:
        "You receive a defined scope of work detailing deliverables, milestones, timelines, and commercial parameters with complete clarity.",
      benchmark: "Formal Engagement Scope",
      icon: ArrowRight,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white font-sans border-b border-slate-200/80 overflow-hidden">
      {/* Background Micro Security Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0A2540_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================================
            SECTION HEADER - IDENTICAL HOME & ABOUT PAGE COMPONENT PATTERN
            ===================================================================== */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow Badge */}
          <div className="mb-3.5 inline-flex items-center gap-1.5">
            <span className="rounded-sm border border-[#D5E2F0] bg-[#FAF9F5] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase shadow-2xs">
              Standard Operating Procedure
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-[34px] leading-tight">
            What Happens{" "}
            <span className="bg-gradient-to-r from-[#C89D3C] via-[#C89D3C] to-[#F3D072] bg-clip-text text-transparent">
              Next?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-base sm:text-lg font-semibold text-[#0A2540]">
            A Structured Four-Stage Facilitation Workflow
          </p>

          {/* Centered Gold Accent Line */}
          <div className="my-3.5 h-1 w-16 rounded-full bg-[#C89D3C]" />

          {/* Supporting Text */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
            From the moment you transmit your enquiry, our advisory team follows a defined institutional protocol to review, assess, and formulate clear next steps for your enterprise.
          </p>
        </div>

        {/* =====================================================================
            CONNECTED 4-STAGE FACILITATION ROADMAP (PREMIUM SOVEREIGN EXECUTION)
            ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group relative flex flex-col justify-between rounded-sm border border-slate-200/90 bg-[#FAF9F5]/70 p-5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C89D3C] hover:bg-white hover:shadow-md text-left"
              >
                {/* Top Step Authority Header */}
                <div>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                    <span className="font-mono text-sm font-bold text-[#C89D3C]">
                      {item.number}
                    </span>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {item.code}
                    </span>
                  </div>

                  {/* Icon Medallion */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A192F] text-[#F3D072] shadow-2xs mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#0A2540]">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>

                  {/* Step Title */}
                  <h3 className="font-heading text-[14.5px] font-bold text-[#0A2540] group-hover:text-[#C89D3C] transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Benchmark Protocol */}
                <div className="mt-5 pt-3.5 border-t border-slate-200/80 flex items-center justify-between text-[10.5px]">
                  <span className="font-semibold text-slate-500">Benchmark:</span>
                  <span className="font-bold text-[#0A2540] flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-[#00843D]" />
                    {item.benchmark}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================================
            BOTTOM TIMELINE SERVICE LEVEL GUARANTEE STRIP
            ===================================================================== */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600 text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[#00843D]" />
            <span className="font-semibold text-[#0A2540]">Service Level Commitment:</span>
            <span>All corporate and startup submissions logged within 24 business hours.</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-semibold text-[#0A2540] shrink-0">
            <ShieldCheck size={14} className="text-[#00843D]" />
            <span>Structured Consultation Protocol</span>
          </div>
        </div>
      </div>
    </section>
  );
}
