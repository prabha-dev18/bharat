"use client";

import { Target, Compass, Sparkles, CheckCircle2 } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-slate-50/70 overflow-hidden border-y border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-[0_12px_36px_rgba(0,26,64,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C58A1B]/50 hover:shadow-xl">
            {/* Top Icon & Label */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#001A40]/5 text-[#001A40] transition-colors duration-300 group-hover:bg-[#001A40] group-hover:text-[#E5A93C]">
                <Target size={24} />
              </div>
              <span className="rounded-full bg-[#C58A1B]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#C58A1B]">
                Purpose &amp; Action
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#001A40] mb-2 group-hover:text-[#C58A1B] transition-colors">
              Our Mission
            </h3>
            <p className="text-sm font-bold text-[#C58A1B] mb-4">
              Making Business Support More Accessible
            </p>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 mb-4">
              Our mission is to help entrepreneurs and organizations navigate business requirements through practical guidance, coordinated services and technology-driven solutions.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
              We aim to simplify processes, improve access to relevant information and support informed decision-making at different stages of the business journey.
            </p>
          </div>

          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-[0_12px_36px_rgba(0,26,64,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#001A40]/50 hover:shadow-xl">
            {/* Top Icon & Label */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C58A1B]/10 text-[#C58A1B] transition-colors duration-300 group-hover:bg-[#C58A1B] group-hover:text-white">
                <Compass size={24} />
              </div>
              <span className="rounded-full bg-[#001A40]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#001A40]">
                Aspiration &amp; Future
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#001A40] mb-2 group-hover:text-[#001A40] transition-colors">
              Our Vision
            </h3>
            <p className="text-sm font-bold text-[#001A40] mb-4">
              Enabling Sustainable Business Growth and Innovation
            </p>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 mb-4">
              Our vision is to build a trusted business solutions platform that supports entrepreneurship, operational development and digital progress.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
              We aspire to contribute to an environment where business ideas can become structured ventures, established enterprises can explore new opportunities and organizations can adapt to evolving business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
