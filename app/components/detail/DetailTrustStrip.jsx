"use client";

import { ShieldCheck, FileText, Landmark, Clock, Award } from "lucide-react";

export default function DetailTrustStrip() {
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: "100% Statutory Compliance",
      desc: "Fully aligned with official Ministry frameworks",
    },
    {
      icon: FileText,
      title: "Bank-Grade DPR Standards",
      desc: "Prepared to meet strict lender credit appraisal",
    },
    {
      icon: Landmark,
      title: "Direct Portal Submissions",
      desc: "KVIC, Udyam, SPICe+ & DGFT electronic filing",
    },
    {
      icon: Clock,
      title: "Dedicated Advisory Desk",
      desc: "Structured tracking from submission to release",
    },
  ];

  return (
    <section className="bg-[#0A2540] text-white py-6 border-b border-[#C89D3C]/30 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-white/10 text-[#C89D3C]">
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
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
    </section>
  );
}
