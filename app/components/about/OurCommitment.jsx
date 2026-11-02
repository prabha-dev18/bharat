"use client";

import { CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";

export default function OurCommitment() {
  const commitments = [
    "A clear understanding of client objectives from the outset",
    "Transparent discussions about project scope and defined deliverables",
    "Appropriate documentation standards and process coordination",
    "Realistic expectations regarding timelines, eligibility and outcomes",
    "Structured follow-up support where agreed within the engagement scope",
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C89D3C]/35 bg-[#C89D3C]/10 px-3 py-1 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C89D3C]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#0A2540]">
                Professional Responsibility
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A2540] mb-3">
              Our Commitment
            </h2>

            <p className="text-base sm:text-lg font-semibold text-[#0A2540] mb-3">
              Clear Communication and Practical Execution
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We believe a good business relationship begins with understanding the requirement and explaining available options clearly.
            </p>
          </div>

          {/* List of Commitments */}
          <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 sm:p-8 mb-8">
            <div className="space-y-3.5">
              {commitments.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#00843D] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory Note from PDF */}
          <div className="flex items-start gap-3 rounded-xl border border-amber-200/80 bg-amber-50/60 p-4 text-xs text-amber-900 leading-relaxed">
            <AlertCircle size={18} className="text-[#C89D3C] shrink-0 mt-0.5" />
            <p>
              For government schemes, licences, certifications, funding and statutory matters, eligibility and final decisions remain subject to the relevant authorities, financial institutions and applicable rules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
