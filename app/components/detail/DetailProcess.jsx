"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function DetailProcess({ item }) {
  if (!item || !item.process) return null;

  const { title, subtitle, steps } = item.process;

  return (
    <section className="py-12 sm:py-16 bg-slate-50/60 border-b border-slate-200/70 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
          <div className="mb-3 inline-flex">
            <span className="rounded-full border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase">
              EXECUTION ROADMAP &bull; PROCESS
            </span>
          </div>

          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-4xl mb-2">
            {title || "How We Facilitate Your Execution"}
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-[#C89D3C] mx-auto" />

          {subtitle && (
            <p className="mt-3.5 max-w-2xl text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px] sm:leading-[1.7] mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Connected Horizontal Timeline Roadmap (Replaces 4 square box cards!) */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-[#C89D3C] via-[#0A2540] to-[#00843D] z-0"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps &&
              steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  {/* Step Milestone Circle */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-[#C89D3C] text-[#0A2540] shadow-md mb-4 shrink-0">
                    <span className="font-mono text-base font-black text-[#0A2540]">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Details */}
                  <div className="w-full">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#C89D3C] block mb-1">
                      Phase 0{idx + 1}
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-[#0A2540] mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Bottom Process Assurance Note */}
        <div className="mt-10 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#0A2540]">
            <CheckCircle2 size={14} className="text-[#00843D]" />
            Official Nodal SLA Tracking
          </span>
          <span>&bull;</span>
          <span>End-to-End Single-Window Coordination</span>
        </div>
      </div>
    </section>
  );
}
