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
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C58A1B]/35 bg-[#C58A1B]/10 px-3 py-1 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C58A1B]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#001A40]">
              Delivery Methodology
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#001A40] mb-2">
            How We Deliver Our Services
          </h2>

          <p className="text-sm sm:text-base font-semibold text-[#C58A1B]">
            A Structured Approach from Planning to Execution
          </p>
        </div>

        {/* 5 Steps Horizontal / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-[#C58A1B]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xl font-mono font-black text-[#C58A1B] mb-2 block">
                  {item.step}
                </span>
                <h3 className="text-sm font-bold text-[#001A40] mb-2">
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
