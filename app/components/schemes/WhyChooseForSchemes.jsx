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
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C58A1B]/35 bg-[#C58A1B]/10 px-3 py-1 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C58A1B]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#001A40]">
              Ethical Advisory
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#001A40] mb-3">
            Why Choose Bharat Startup Ventures for Scheme Guidance?
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Professional guidance built on thorough regulatory research, transparent deliverables, and honest client communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-[#C58A1B]/50 hover:shadow-md transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#001A40]/5 text-[#001A40] mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-bold text-[#001A40] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
