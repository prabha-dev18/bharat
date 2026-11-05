"use client";

import {
  BriefcaseBusiness,
  Landmark,
  ShieldCheck,
  Rocket,
  Cpu,
  BarChart3,
  Megaphone,
  Scale,
} from "lucide-react";

export default function AreasOfExpertise() {
  const areas = [
    { id: "01", name: "Startup & Business Setup", icon: BriefcaseBusiness },
    { id: "02", name: "Finance & Funding Preparation", icon: Landmark },
    { id: "03", name: "Taxation & Statutory Compliance", icon: ShieldCheck },
    { id: "04", name: "Government Scheme Research & Certification", icon: Rocket },
    { id: "05", name: "Digital Development & Custom Software", icon: Cpu },
    { id: "06", name: "Automation & Analytics", icon: BarChart3 },
    { id: "07", name: "Marketing & Brand Positioning", icon: Megaphone },
  ];

  return (
    <section className="relative w-full py-14 sm:py-18 lg:py-22 bg-[#FAF9F5] font-sans border-t border-b border-slate-200/80 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0A2540_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between text-left lg:pr-4">
            <div>
              {/* Eyebrow Badge */}
              <div className="mb-3.5 inline-flex items-center gap-1.5">
                <span className="rounded-sm border border-[#D5E2F0] bg-white px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase shadow-2xs">
                  Integrated Scope
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-[34px] leading-tight">
                Our Areas of{" "}
                <span className="bg-gradient-to-r from-[#C89D3C] via-[#C89D3C] to-[#F3D072] bg-clip-text text-transparent">
                  Expertise
                </span>
              </h2>

              {/* Subtitle 1 */}
              <p className="mt-3 text-base sm:text-lg font-semibold text-[#0A2540]">
                Business Services and Technology Working Together
              </p>

              {/* Centered Gold Accent Line */}
              <div className="my-3.5 h-1 w-16 rounded-full bg-[#C89D3C]" />

              {/* Subtitle 2 */}
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our service portfolio covers startup and business setup, finance and funding preparation, taxation and compliance, government scheme research and certification guidance, digital development, automation and analytics, and marketing and branding.
              </p>
            </div>

            {/* Scope Note: Statutory Framework Statement */}
            <div className="mt-8 pt-5 border-t border-slate-200/90">
              <div className="flex items-start gap-3">
                <Scale size={18} className="text-[#C89D3C] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  The exact services available for each engagement depend on the client&apos;s requirements, applicable rules, professional qualifications where required and the agreed scope of work.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="border-t border-slate-200/90">
              {areas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.name}
                    className="group flex items-center justify-between py-3.5 sm:py-4 border-b border-slate-200/90 transition-all duration-200 hover:pl-2"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                      {/* Serial Docket Number */}
                      <span className="font-mono text-xs sm:text-[13px] font-bold text-[#C89D3C] w-6 shrink-0">
                        {area.id}
                      </span>

                      {/* Official Medallion with Gold Icon */}
                      <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#0A192F] text-[#F3D072] shadow-2xs transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#0A2540]">
                        <Icon size={19} strokeWidth={1.8} />
                      </div>

                      {/* Domain Title */}
                      <span className="text-[13.5px] sm:text-[14.5px] font-bold text-[#0A2540] group-hover:text-[#C89D3C] transition-colors leading-snug">
                        {area.name}
                      </span>
                    </div>

                    {/* Government Operational Indicator */}
                    <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-medium text-slate-400 shrink-0 ml-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00843D]" />
                      <span>Active Desk</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}