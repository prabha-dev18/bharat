"use client";

import { CheckCircle2, ShieldCheck, Sparkles, Building2, TrendingUp } from "lucide-react";

export default function WhoWeAre() {
  const highlights = [
    "Understanding individual client requirements before recommending any solution",
    "Identifying appropriate service options matched to business scale and stage",
    "Coordinating the agreed scope of work through a structured, transparent process",
    "Balancing immediate compliance needs with sustainable long-term enterprise growth",
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C58A1B]/35 bg-[#C58A1B]/10 px-3 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C58A1B]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#001A40]">
                Who We Are
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#001A40] mb-5 leading-tight">
              A Connected Approach to{" "}
              <span className="bg-gradient-to-r from-[#C58A1B] via-[#E5A93C] to-[#F58220] bg-clip-text text-transparent">
                Business Development
              </span>
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-4">
              Building and managing a business involves several interconnected responsibilities. Entrepreneurs must consider registrations, documentation, financial planning, compliance, customer acquisition and the technology needed to operate efficiently.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-4">
              Bharat Startup Ventures Pvt. Ltd. aims to make these requirements easier to navigate by bringing relevant services together under one brand. We focus on understanding individual requirements, identifying appropriate service options and coordinating the agreed work through a structured approach.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6">
              Our goal is to help clients address immediate business needs while considering opportunities for future development.
            </p>

            {/* Checklist */}
            <div className="space-y-2.5">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#00843D] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Highlight Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-[#F8F5ED] p-7 sm:p-9 shadow-[0_16px_45px_rgba(0,26,64,0.06)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#001A40] text-[#E5A93C] mb-6 shadow-md shadow-[#001A40]/15">
                <Building2 size={24} />
              </div>

              <h3 className="text-xl font-bold text-[#001A40] mb-3">
                Unified Ecosystem for Indian Enterprises
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 mb-6">
                From registering a private limited company to securing DPIIT recognition, raising seed capital, and integrating AI automations, we eliminate the need to coordinate between multiple disjointed agencies.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200/80">
                <div className="rounded-xl bg-white p-3 border border-slate-100 shadow-2xs">
                  <p className="text-lg font-black text-[#001A40]">11+</p>
                  <p className="text-[11px] font-semibold text-[#C58A1B]">Core Service Divisions</p>
                </div>
                <div className="rounded-xl bg-white p-3 border border-slate-100 shadow-2xs">
                  <p className="text-lg font-black text-[#001A40]">100%</p>
                  <p className="text-[11px] font-semibold text-[#00843D]">Compliance-Led</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
