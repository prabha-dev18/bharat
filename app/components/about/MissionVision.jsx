"use client";

import { Target, Eye, CheckCircle2 } from "lucide-react";

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
    <section className="relative pt-6 pb-12 sm:pb-16 lg:pb-18 bg-[#FAF9F5] font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* ===================================================================
              1. LEFT CARD: OUR MISSION
              Government Portal Layout - Clean, Structured, Image-Free
              =================================================================== */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-6 sm:p-7 lg:p-8 shadow-xs hover:shadow-md transition-all duration-300 text-left h-full flex flex-col justify-between">
            {/* Top Official Government Accent Strip (Saffron / Gold) */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9933] via-[#D97706] to-[#B45309]" />

            <div>
              {/* Header: Medallion + Eyebrow + Title */}
              <div className="flex items-start gap-4 mb-4">
                {/* Official Circular Medallion */}
                <div className="flex h-12 w-12 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#9C6D21] via-[#B8872F] to-[#7C5311] p-[3px] shadow-sm">
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-white/60 bg-gradient-to-br from-[#A67727] via-[#B98931] to-[#855914]">
                    <Target size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                </div>

                {/* Eyebrow & Title */}
                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] sm:text-[11px] font-bold tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    OUR MISSION
                  </div>
                  <h3 className="font-heading text-lg sm:text-[21px] lg:text-[22px] font-bold text-[#0A2540] leading-snug mt-1.5">
                    Making Business Support More Accessible
                  </h3>
                </div>
              </div>

              {/* Statement Paragraph */}
              <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#334E68] font-normal">
                Our mission is to help entrepreneurs and organizations navigate business requirements through practical guidance, coordinated services and technology-driven solutions. We aim to simplify processes, improve access to relevant information and support informed decision-making at different stages of the business journey.
              </p>
            </div>

            {/* Official Key Focus Pillars */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 sm:gap-2.5">
              {missionPillars.map((pillar) => (
                <span
                  key={pillar}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] sm:text-[11.5px] font-medium bg-[#FAF9F5] text-[#0A2540] border border-slate-200/80"
                >
                  <CheckCircle2 size={13} className="text-[#C89D3C]" strokeWidth={2.2} />
                  {pillar}
                </span>
              ))}
            </div>
          </div>

          {/* ===================================================================
              2. RIGHT CARD: OUR VISION
              Government Portal Layout - Clean, Structured, Image-Free
              =================================================================== */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-6 sm:p-7 lg:p-8 shadow-xs hover:shadow-md transition-all duration-300 text-left h-full flex flex-col justify-between">
            {/* Top Official Government Accent Strip (Navy / Tricolor) */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A2540] via-[#1E3A8A] to-[#138808]" />

            <div>
              {/* Header: Medallion + Eyebrow + Title */}
              <div className="flex items-start gap-4 mb-4">
                {/* Official Circular Medallion */}
                <div className="flex h-12 w-12 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0A2540] via-[#1E3A8A] to-[#0f172a] p-[3px] shadow-sm">
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-white/60 bg-gradient-to-br from-[#0f2e4e] via-[#1a406e] to-[#0A2540]">
                    <Eye size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                </div>

                {/* Eyebrow & Title */}
                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] sm:text-[11px] font-bold tracking-wider uppercase bg-blue-50 text-blue-900 border border-blue-200/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />
                    OUR VISION
                  </div>
                  <h3 className="font-heading text-lg sm:text-[21px] lg:text-[22px] font-bold text-[#0A2540] leading-snug mt-1.5">
                    Enabling Sustainable Business Growth and Innovation
                  </h3>
                </div>
              </div>

              {/* Statement Paragraph */}
              <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#334E68] font-normal">
                Our vision is to build a trusted business solutions platform that supports entrepreneurship, operational development and digital progress. We aspire to contribute to an environment where business ideas can become structured ventures, established enterprises can explore new opportunities and organizations can adapt to evolving business needs.
              </p>
            </div>

            {/* Official Key Focus Pillars */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 sm:gap-2.5">
              {visionPillars.map((pillar) => (
                <span
                  key={pillar}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] sm:text-[11.5px] font-medium bg-[#FAF9F5] text-[#0A2540] border border-slate-200/80"
                >
                  <CheckCircle2 size={13} className="text-[#00843D]" strokeWidth={2.2} />
                  {pillar}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
