"use client";

import { CheckCircle2 } from "lucide-react";

export default function SchemeProcess() {
  const steps = [
    {
      number: "01",
      title: "Understand Your Business",
      description: "We review your commercial activity, project location, sector, and capital objectives.",
    },
    {
      number: "02",
      title: "Research Relevant Schemes",
      description: "We identify potentially suitable programmes and review current published notifications.",
    },
    {
      number: "03",
      title: "Check Preliminary Eligibility",
      description: "We compare your data with official parameters before investing preparation time.",
    },
    {
      number: "04",
      title: "Prepare Documentation",
      description: "We help structure DPRs, financial estimates, and compliance checklists.",
    },
    {
      number: "05",
      title: "Support the Application",
      description: "We assist with official portal submissions and subsequent coordination requirements.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
          <div className="mb-3.5 inline-flex">
            <span className="rounded-sm border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase">
              APPLICATION GUIDANCE
            </span>
          </div>

          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-[34px] mb-2">
            Our Scheme Assistance Process
          </h2>

          <div className="mt-3.5 h-1 w-16 rounded-full bg-[#C89D3C] mx-auto" />

          <p className="mt-4 max-w-2xl text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px] sm:leading-[1.8] mx-auto">
            From preliminary scheme research to DPR drafting and portal submission support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((item) => (
            <div
              key={item.number}
              className="rounded-sm border border-slate-200/90 bg-white p-5 shadow-xs hover:border-[#C89D3C]/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xl font-mono font-black text-[#C89D3C] mb-2 block">
                  {item.number}
                </span>
                <h3 className="font-heading text-sm sm:text-base font-bold text-[#0A2540] mb-2">
                  {item.title}
                </h3>
                <span className="text-xl font-mono font-black text-[#C89D3C] mb-2 block">
                  {item.number}
                </span>
                <h3 className="text-sm font-bold text-[#0A2540] mb-2">
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
