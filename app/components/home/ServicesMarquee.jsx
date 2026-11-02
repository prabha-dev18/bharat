"use client";

import { Megaphone } from "lucide-react";

const officialNotices = [
  {
    title: "Startup India Seed Fund Scheme (SISFS):",
    desc: "Applications active for seed-stage technology ventures.",
  },
  {
    title: "MSME ZED Subsidy:",
    desc: "Micro & Small enterprises eligible for up to 80% subsidy on certification fees.",
  },
  {
    title: "Income Tax & GST Compliance Notice:",
    desc: "Compliance schedule for FY 2026-27.",
  },
  {
    title: "AI & Software Subsidies:",
    desc: "Facilitation active for technology adoption in manufacturing MSMEs.",
  },
];

export default function ServicesMarquee() {
  return (
    <section
      className="official-notice relative z-20 w-full overflow-hidden border-b border-[#C89D3C]/35 bg-[#FFF8E7] px-3 sm:px-6 lg:px-8 py-2.5 flex items-center gap-3 sm:gap-4"
      aria-label="Official announcements and notices"
    >
      {/* Notice Badge Label */}
      <div className="flex shrink-0 items-center gap-2 rounded border border-[#C89D3C]/75 bg-[#0A2540] px-3 py-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#F3D072] shadow-xs z-10 select-none">
        <Megaphone size={14} className="text-[#F3D072] shrink-0" />
        <span>OFFICIAL NOTICE</span>
      </div>

      {/* Marquee Content Track */}
      <div className="relative flex min-w-0 flex-1 items-center overflow-hidden">
        {/* Subtle Left & Right Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-4 sm:w-8 bg-gradient-to-r from-[#FFF8E7] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 sm:w-10 bg-gradient-to-l from-[#FFF8E7] to-transparent" />

        <div className="notice-marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center gap-8 sm:gap-14 pr-8 sm:pr-14"
              aria-hidden={copy === 1 ? "true" : undefined}
            >
              {officialNotices.map((notice, idx) => (
                <span
                  key={`${copy}-${idx}`}
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12.5px] text-slate-800 font-medium whitespace-nowrap"
                >
                  <span className="text-[12px] shrink-0">📌</span>
                  <strong className="font-bold text-[#0A2540]">{notice.title}</strong>
                  <span className="text-slate-700">{notice.desc}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
