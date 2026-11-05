"use client";

import { CheckCircle2, FileCheck2 } from "lucide-react";

export default function DetailWhatsIncluded({ item }) {
  if (!item || !item.whatsIncluded) return null;

  const { title, subtitle, items } = item.whatsIncluded;

  return (
    <section className="py-12 sm:py-16 bg-slate-50/60 border-b border-slate-200/70 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
          <div className="mb-3 inline-flex">
            <span className="rounded-full border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase">
              DELIVERABLES &bull; SCOPE OF WORK
            </span>
          </div>

          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-4xl mb-2">
            {title || `Our ${item.title} Services`}
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-[#C89D3C] mx-auto" />

          {subtitle && (
            <p className="mt-3.5 max-w-2xl text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px] sm:leading-[1.7] mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Clean 2-Column Deliverables List (NO repetitive square box cards) */}
        <div className="max-w-5xl mx-auto rounded-sm border border-slate-200/90 bg-white p-4 sm:p-7 shadow-xs divide-y divide-slate-100">
          <div className="pb-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0A2540]">
            <span className="flex items-center gap-1.5">
              <FileCheck2 size={15} className="text-[#C89D3C]" />
              Structured Facilitation Checklist
            </span>
            <span className="text-emerald-700 font-mono text-[11px]">
              {items ? items.length : 0} Deliverables
            </span>
          </div>

          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5">
            {items &&
              items.map((servicePoint, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 py-1.5"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#00843D] border border-emerald-200 mt-0.5">
                    <CheckCircle2 size={13} />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-[13.5px] font-bold text-[#0A2540] leading-snug">
                      {servicePoint}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                      Executed according to official regulatory frameworks &amp; standards.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
