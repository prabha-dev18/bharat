"use client";

import { Target, Compass, CheckCircle2, ShieldCheck } from "lucide-react";

export default function MissionVision() {
  const missionPillars = [
    "Practical Guidance",
    "Process Simplification",
    "Informed Decisions",
  ];

  const visionPillars = [
    "Venture Structuring",
    "Operational Progress",
    "Sustainable Growth",
  ];

  return (
    <section className="relative py-8 sm:py-12 lg:py-16 bg-[#FAF9F5] font-sans border-b border-slate-200/80 overflow-hidden">
      {/* Background Micro Gov Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#0A2540_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <div className="group relative overflow-hidden rounded-sm border border-slate-300/85 bg-white shadow-xs hover:shadow-md transition-all duration-300 text-left h-full flex flex-col justify-between">
            <div className="p-6 sm:p-7 lg:p-8">
              {/* Header: Medallion + Eyebrow Badge + Title */}
              <div className="flex items-start gap-4 mb-4">
                {/* Official Circular Medallion */}
                <div className="flex h-12 w-12 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#9C6D21] via-[#B8872F] to-[#7C5311] p-[2.5px] shadow-xs">
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-white/60 bg-gradient-to-br from-[#0A2540] to-[#061427]">
                    <Target size={20} className="text-[#F3D072]" strokeWidth={2.2} />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase bg-amber-50 text-amber-900 border border-amber-200/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF9933]" />
                    OUR MISSION
                  </div>
                  <h3 className="font-heading text-lg sm:text-[21px] lg:text-[22px] font-bold text-[#0A2540] leading-snug mt-1.5">
                    Making Business Support More Accessible
                  </h3>
                </div>
              </div>
              <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#334E68] font-normal">
                Our mission is to help entrepreneurs and organizations navigate business requirements through practical guidance, coordinated services, and technology-driven solutions. We aim to simplify processes, improve access to relevant information, and support informed decision-making at different stages of the business journey.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 sm:gap-2.5">
                {missionPillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[11px] sm:text-[11.5px] font-medium bg-[#FAF9F5] text-[#0A2540] border border-slate-200/90 shadow-2xs"
                  >
                    <CheckCircle2 size={13} className="text-[#C89D3C]" strokeWidth={2.2} />
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-slate-100 bg-[#FAF9F5] px-6 py-2.5 sm:px-8 flex items-center justify-between text-[10px] text-slate-500">
              <span className="flex items-center gap-1.5 font-medium text-[#0A2540]">
                <ShieldCheck size={12} className="text-[#00843D]" />
                <span>Verified Corporate Mandate</span>
              </span>
              <span className="font-mono text-[9px] text-slate-400">REF: BSV/MSN-01</span>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-sm border border-slate-300/85 bg-white shadow-xs hover:shadow-md transition-all duration-300 text-left h-full flex flex-col justify-between">
            <div className="p-6 sm:p-7 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0A2540] via-[#1E3A8A] to-[#00843D] p-[2.5px] shadow-xs">
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-white/60 bg-gradient-to-br from-[#0A2540] to-[#041224]">
                    <Compass size={20} className="text-[#38BDF8]" strokeWidth={2.2} />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase bg-blue-50 text-blue-900 border border-blue-200/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
                    OUR VISION
                  </div>
                  <h3 className="font-heading text-lg sm:text-[21px] lg:text-[22px] font-bold text-[#0A2540] leading-snug mt-1.5">
                    Enabling Sustainable Business Growth and Innovation
                  </h3>
                </div>
              </div>
              <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#334E68] font-normal">
                Our vision is to build a trusted business solutions platform that supports entrepreneurship, operational development, and digital progress. We aspire to contribute to an environment where business ideas can become structured ventures, established enterprises can explore new opportunities, and organizations can adapt to evolving business needs.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 sm:gap-2.5">
                {visionPillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[11px] sm:text-[11.5px] font-medium bg-[#FAF9F5] text-[#0A2540] border border-slate-200/90 shadow-2xs"
                  >
                    <CheckCircle2 size={13} className="text-[#00843D]" strokeWidth={2.2} />
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-slate-100 bg-[#FAF9F5] px-6 py-2.5 sm:px-8 flex items-center justify-between text-[10px] text-slate-500">
              <span className="flex items-center gap-1.5 font-medium text-[#0A2540]">
                <ShieldCheck size={12} className="text-[#00843D]" />
                <span>Atmanirbhar Bharat Aligned</span>
              </span>
              <span className="font-mono text-[9px] text-slate-400">REF: BSV/VSN-01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}