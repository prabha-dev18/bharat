"use client";

import { CheckCircle2 } from "lucide-react";

export default function HowWeDeliver() {
  const steps = [
    {
      step: "01",
      title: "Requirement Assessment",
      description: "Understand the commercial objective and identify the underlying legal and financial need.",
    },
    {
      step: "02",
      title: "Service Planning",
      description: "Review suitable statutory options, regulatory eligibility criteria and documentation requirements.",
    },
    {
      step: "03",
      title: "Scope Definition",
      description: "Agree on defined deliverables, official documentation, mutual responsibilities and expected timelines.",
    },
    {
      step: "04",
      title: "Execution",
      description: "Carry out the agreed services with prompt turnaround and clear, continuous communication.",
    },
    {
      step: "05",
      title: "Follow-Up",
      description: "Coordinate outstanding filings, compliance tracking and further assistance where included in the engagement.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
          <div className="mb-3.5 inline-flex">
            <span className="rounded-sm border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase">
              DELIVERY METHODOLOGY
            </span>
          </div>

          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-[34px] mb-2">
            How We Deliver Our Services
          </h2>

          <div className="mt-3.5 h-1 w-16 rounded-full bg-[#C89D3C] mx-auto" />

          <p className="mt-4 max-w-2xl text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px] sm:leading-[1.8] mx-auto">
            A structured, transparent consulting approach from initial discovery to milestone execution and follow-up.
          </p>
        </div>

        {/* 5 Steps Horizontal / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-sm border border-slate-200/90 bg-white p-5 shadow-xs hover:border-[#C89D3C]/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xl font-mono font-black text-[#C89D3C] mb-2 block">
                  {item.step}
                </span>
                <h3 className="font-heading text-sm sm:text-base font-bold text-[#0A2540] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
