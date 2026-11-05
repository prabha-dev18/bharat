"use client";

import { ShieldCheck, Clock, FileCheck2, Headphones } from "lucide-react";

export default function ContactProtocolStrip() {
  const protocolPoints = [
    {
      icon: ShieldCheck,
      title: "Statutory Docket Logging",
      desc: "Every enquiry logged with an official reference tracking code",
    },
    {
      icon: Clock,
      title: "Operational Hours",
      desc: "Mon – Sat, 9:30 AM to 6:30 PM IST (Direct Phone Helpline)",
    },
    {
      icon: FileCheck2,
      title: "24-Hour Review Turnaround",
      desc: "Preliminary statutory vetting within 1 working business day",
    },
    {
      icon: Headphones,
      title: "Single-Window Nodal Desk",
      desc: "Dedicated facilitation officers for schemes, legal & IT queries",
    },
  ];

  return (
    <div className="bg-[#0A2540] text-white py-5 sm:py-6 border-b border-[#C89D3C]/30 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {protocolPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-white/10 text-[#C89D3C] border border-[#C89D3C]/20">
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-white leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 leading-tight mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
