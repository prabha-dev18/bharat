"use client";

import { ShieldCheck, FileCheck, Landmark, Globe } from "lucide-react";

export default function ServicesTrustStrip() {
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: "MCA & SPICe+ Compliant",
      desc: "Electronic incorporation under Ministry of Corporate Affairs",
    },
    {
      icon: FileCheck,
      title: "Bank-Grade DPR Standards",
      desc: "Bankable project reports aligned with institutional appraisal",
    },
    {
      icon: Landmark,
      title: "Statutory Tax Governance",
      desc: "GST, ROC returns & Section 80-IAC tax holiday filing",
    },
    {
      icon: Globe,
      title: "Pan-India Facilitation",
      desc: "Single-window advisory desk across 28 States & 8 UTs",
    },
  ];

  return (
    <div className="bg-[#0A2540] text-white py-5 sm:py-6 border-b border-[#C89D3C]/30 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {trustPoints.map((item, idx) => {
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
