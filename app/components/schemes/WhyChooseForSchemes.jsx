"use client";

import { Target, AlertCircle, FileText, Factory, Eye, ShieldCheck } from "lucide-react";

export default function WhyChooseForSchemes() {
  const points = [
    {
      title: "Requirement-Based Research",
      description: "Focus on schemes and programmes strictly relevant to your stated commercial activities and investment scale.",
      icon: Target,
    },
    {
      title: "Clear Eligibility Discussions",
      description: "Understand clearly that preliminary screening is a professional advisory review, not a government approval.",
      icon: AlertCircle,
    },
    {
      title: "Documentation Support",
      description: "Systematically compile project profiles, financial forecasts, DPRs, and compliance checklists.",
      icon: FileText,
    },
    {
      title: "Deep Sector Awareness",
      description: "Explore tailored options for tech startups, MSMEs, manufacturing, agriculture, food-processing, and exports.",
      icon: Factory,
    },
    {
      title: "Transparent Scope of Work",
      description: "Understand the advisory engagement, consulting deliverables, and statutory limitations before proceeding.",
      icon: Eye,
    },
    {
      title: "Responsible Communication",
      description: "Ethical consultancy with strictly no false promises of guaranteed funding, sanctions, or government approval.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
          <div className="mb-3.5 inline-flex">
            <span className="rounded-sm border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase">
              ETHICAL ADVISORY
            </span>
          </div>

          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-[34px] mb-2">
            Why Choose Bharat Startup Ventures for Scheme Guidance?
          </h2>

          <div className="mt-3.5 h-1 w-16 rounded-full bg-[#C89D3C] mx-auto" />

          <p className="mt-4 max-w-2xl text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px] sm:leading-[1.8] mx-auto">
            Professional guidance built on thorough regulatory research, transparent deliverables, and honest client communication.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {points.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-sm border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:border-[#C89D3C]/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-slate-50 text-[#0A2540] border border-slate-200/60 mb-4 group-hover:bg-[#0A2540] group-hover:text-[#C89D3C] transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#0A2540] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-slate-600">
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
