"use client";

import {
  BriefcaseBusiness,
  Landmark,
  ShieldCheck,
  Rocket,
  Cpu,
  BarChart3,
  Megaphone,
} from "lucide-react";
import Link from "next/link";

export default function AreasOfExpertise() {
  const areas = [
    { name: "Startup & Business Setup", icon: BriefcaseBusiness },
    { name: "Finance & Funding Preparation", icon: Landmark },
    { name: "Taxation & Statutory Compliance", icon: ShieldCheck },
    { name: "Government Scheme Research & Certification", icon: Rocket },
    { name: "Digital Development & Custom Software", icon: Cpu },
    { name: "Automation & Analytics", icon: BarChart3 },
    { name: "Marketing & Brand Positioning", icon: Megaphone },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-slate-50/60 overflow-hidden border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C58A1B]/35 bg-[#C58A1B]/10 px-3 py-1 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C58A1B]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#001A40]">
              Integrated Scope
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#001A40] mb-4">
            Our Areas of{" "}
            <span className="bg-gradient-to-r from-[#C58A1B] via-[#E5A93C] to-[#F58220] bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="text-base sm:text-lg font-semibold text-[#001A40] mb-3">
            Business Services and Technology Working Together
          </p>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our service portfolio covers startup and business setup, finance and funding preparation, taxation and compliance, government scheme research and certification guidance, digital development, automation and analytics, and marketing and branding.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.name}
                className="flex items-center gap-3 rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs hover:border-[#C58A1B]/50 transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#001A40]/5 text-[#001A40]">
                  <Icon size={18} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#001A40]">
                  {area.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Scope Note from PDF */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-500 text-center max-w-3xl mx-auto leading-relaxed">
          The exact services available for each engagement depend on the client's requirements, applicable rules, professional qualifications where required and the agreed scope of work.
        </div>
      </div>
    </section>
  );
}
