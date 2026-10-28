"use client";

import { Inbox, FileSearch, MessageSquare, ArrowRight } from "lucide-react";

export default function WhatHappensNext() {
  const steps = [
    {
      number: "01",
      title: "Enquiry Received",
      description: "We receive the information submitted through the secure contact form or direct phone/email.",
      icon: Inbox,
    },
    {
      number: "02",
      title: "Requirement Review",
      description: "Our consulting team reviews your stated needs, business stage and identifies any initial points of clarification.",
      icon: FileSearch,
    },
    {
      number: "03",
      title: "Discovery Discussion",
      description: "We schedule an introductory discussion to explore relevant service options, scope, and mutual expectations.",
      icon: MessageSquare,
    },
    {
      number: "04",
      title: "Clear Next Steps",
      description: "We explain the proposed scope of work, transparent deliverables, timelines and commercial terms where applicable.",
      icon: ArrowRight,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C58A1B]/35 bg-[#C58A1B]/10 px-3 py-1 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C58A1B]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#001A40]">
              Transparent Workflow
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#001A40] mb-2">
            What Happens Next?
          </h2>

          <p className="text-sm sm:text-base font-semibold text-[#C58A1B]">
            A Clear Process for Your Enquiry
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs hover:border-[#C58A1B]/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-mono font-black text-[#C58A1B]">
                      {item.number}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#001A40]/5 text-[#001A40]">
                      <Icon size={16} />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-[#001A40] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
