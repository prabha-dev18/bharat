"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Landmark, ShieldCheck, Cpu } from "lucide-react";

export default function ServicesHero() {
  const features = [
    { icon: BriefcaseBusiness, label: "Statutory Incorporation", sub: "MCA & SPICe+ Desk" },
    { icon: Landmark, label: "Banking & DPR", sub: "CMA & Bankable Reports" },
    { icon: ShieldCheck, label: "Compliance Desk", sub: "Statutory Adherence" },
    { icon: Cpu, label: "Digital Solutions", sub: "Software & Portals" },
  ];

  return (
    <section
      className="relative isolate flex min-h-[460px] sm:min-h-[500px] lg:h-[calc(100svh-220px)] lg:max-h-[580px] w-full overflow-hidden bg-cover bg-[78%_center] sm:bg-[center_center] bg-no-repeat font-sans border-b border-slate-200/80"
      style={{
        backgroundImage: "url('/images/gov-services-hero.jpg')",
      }}
    >
      {/* High-Contrast Protective Government Scrim for 100% Font Visibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#FAF7F0]/96 via-[#FAF7F0]/92 to-[#FAF7F0]/96 backdrop-blur-[0.5px]"
      />

      {/* =====================================================================
          MAIN CONTENT CONTAINER - EXECUTIVE SERVICES ARCHITECTURE
          Exact Same Height & Width as AboutHero
          ===================================================================== */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] flex-col justify-between px-5 sm:px-8 lg:px-12 xl:px-0 py-6 sm:py-7">
        
        {/* Top & Middle Section: Headline, 2-Column Story & Action Buttons */}
        <div className="my-auto">
          {/* Eyebrow Badge */}
          <div className="mb-3 inline-flex">
            <span className="rounded-sm border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[10.5px] sm:text-[11px] font-bold tracking-widest text-[#0A2540] uppercase shadow-2xs">
              NATIONAL SINGLE-WINDOW SERVICES FACILITATION
            </span>
          </div>

          {/* Main Heading - Crystal Clear High Contrast */}
          <h1 className="font-heading max-w-4xl text-[clamp(1.6rem,3vw,3.2rem)] font-bold leading-[1.12] tracking-tight text-[#0A2540]">
            Comprehensive Advisory.{" "}
            <span className="bg-[#C89D3C] bg-clip-text text-transparent">
              Statutory Governance.
            </span>{" "}
            Scale &amp; Technology.
          </h1>

          {/* 2-Column Split Editorial Narrative - Perfect Font Visibility */}
          <div className="mt-3.5 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl">
            <p className="text-xs sm:text-[13.5px] font-normal leading-relaxed text-slate-700 sm:leading-[1.7]">
              End-to-end statutory registrations, regulatory governance, institutional finance preparation and technology enablement. We support founders, MSMEs, and established enterprises at every milestone of business maturity across India.
            </p>
            <p className="text-xs sm:text-[13.5px] font-normal leading-relaxed text-slate-700 sm:leading-[1.7]">
              From corporate structuring under the Ministry of Corporate Affairs (MCA) to ongoing tax compliance, bankable project reports (DPR), and digital automation, access transparent execution through one institutional gateway.
            </p>
          </div>

          {/* 2 Action Buttons */}
          <div className="mt-5 flex flex-col min-[420px]:flex-row flex-wrap items-stretch min-[420px]:items-center gap-3 sm:gap-4">
            <a
              href="#catalogue"
              className="group relative inline-flex min-h-10 w-full min-[420px]:w-auto shrink-0 items-center justify-center gap-2 overflow-hidden rounded-sm bg-[#0A2540] px-6 py-2.5 text-xs font-semibold sm:text-sm"
            >
              <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-full animate-border-top bg-gradient-to-l from-transparent to-[#C89D3C]" />
              <span className="pointer-events-none absolute right-0 top-0 h-full w-[2px] animate-border-right bg-gradient-to-t from-transparent to-[#C89D3C]" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full animate-border-bottom bg-gradient-to-r from-transparent to-[#C89D3C]" />
              <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] animate-border-left bg-gradient-to-b from-transparent to-[#C89D3C]" />

              <span className="relative z-10 font-bold text-white">Explore All Services</span>
              <ArrowRight size={14} className="relative z-10 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <Link
              href="/contact"
              className="group inline-flex min-h-10 w-full min-[420px]:w-auto items-center justify-center gap-2 rounded-sm border border-[#0A2540]/30 bg-white/85 px-6 py-2.5 text-xs font-semibold text-[#0A2540] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C89D3C] hover:bg-white sm:text-sm"
            >
              <BriefcaseBusiness size={15} className="text-[#C89D3C]" />
              <span>Consult Facilitation Desk</span>
              <ArrowUpRight size={15} className="text-[#C89D3C] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Anchored Institutional Pillars Ribbon matching AboutHero */}
        <div className="mt-4 pt-3.5 border-t border-[#0A2540]/15 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {features.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 sm:gap-3 rounded-sm border border-slate-200/80 bg-white/80 p-2 sm:px-3 sm:py-2 backdrop-blur-xs transition-colors hover:border-[#C89D3C]/60 hover:bg-white"
              >
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-sm border border-[#C89D3C]/30 bg-[#0A2540] text-[#C89D3C] shadow-2xs">
                  <Icon size={16} strokeWidth={1.8} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] sm:text-xs font-bold leading-tight text-[#0A2540] truncate">{label}</span>
                  <span className="text-[9.5px] sm:text-[10px] font-medium leading-snug text-slate-600 truncate mt-0.5">{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
