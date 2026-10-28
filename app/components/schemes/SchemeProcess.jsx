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
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C58A1B]/35 bg-[#C58A1B]/10 px-3 py-1 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C58A1B]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#001A40]">
              Application Guidance
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#001A40] mb-2">
            Our Scheme Assistance Process
          </h2>

          <p className="text-sm sm:text-base font-semibold text-[#C58A1B]">
            From Scheme Research to Application Preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-[#C58A1B]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xl font-mono font-black text-[#C58A1B] mb-2 block">
                  {item.number}
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
