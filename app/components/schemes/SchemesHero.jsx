"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Search, CheckCircle2, FileText, Send, Phone, ChevronRight } from "lucide-react";

export default function SchemesHero() {
  const steps = [
    { number: "01", icon: Search, label: "Scheme Research", sub: "Central & State" },
    { number: "02", icon: CheckCircle2, label: "Eligibility Review", sub: "Prerequisite Check" },
    { number: "03", icon: FileText, label: "Documentation", sub: "DPR & Preparation" },
    { number: "04", icon: Send, label: "Application Support", sub: "Submission Guidance" },
  ];

  return (
    <section
      className="relative isolate flex min-h-[460px] sm:min-h-[500px] lg:h-[calc(100svh-220px)] lg:max-h-[580px] w-full overflow-hidden bg-cover bg-[75%_center] sm:bg-[center_center] bg-no-repeat font-sans border-b border-slate-200/80"
      style={{
        backgroundImage: "url('/images/gov-schemes-hero.jpg')",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#FAF7F0]/95 via-[#FAF7F0]/88 to-[#FAF7F0]/95"
      />

      {/* Main Content - Majestic Centered Sovereign Directives Layout with Bottom Stepper Ribbon */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] flex-col justify-between px-5 sm:px-8 lg:px-12 xl:px-0 py-6 sm:py-8 lg:py-6">
        {/* Top/Center Section: Centered Sovereign Directive Architecture */}
        <div className="flex flex-col items-center text-center my-auto w-full max-w-4xl mx-auto">
          {/* Official Government Eyebrow Badge */}
          <div className="mb-3 inline-flex">
            <span className="rounded-sm border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[10.5px] sm:text-[11px] font-bold tracking-widest text-[#0A2540] uppercase shadow-2xs">
              CENTRAL &amp; STATE GOVERNMENT SCHEMES PORTAL
            </span>
          </div>

          {/* Main Centered Heading */}
          <h1 className="font-heading max-w-3xl text-[clamp(1.5rem,2.8vw,2.75rem)] font-bold leading-[1.14] tracking-tight text-[#0A2540]">
            Credit Subsidies, Collateral-Free Loans &amp;{" "}
            <span className="bg-[#C89D3C] bg-clip-text text-transparent">Statutory Incentives.</span>
          </h1>

          {/* Gold Decorative Divider */}
          <div className="my-2.5 flex items-center justify-center gap-2">
            <div className="h-[1.5px] w-12 bg-gradient-to-r from-transparent to-[#C89D3C]" />
            <div className="h-1.5 w-1.5 rotate-45 bg-[#C89D3C]" />
            <div className="h-[1.5px] w-12 bg-gradient-to-l from-transparent to-[#C89D3C]" />
          </div>

          {/* Supporting Text Paragraphs */}
          <p className="max-w-2xl text-xs font-normal leading-relaxed text-slate-700 sm:text-[13px]">
            Comprehensive advisory navigating flagship schemes by the Government of India and State Governments. We assist eligible
            startups, micro, small and medium enterprises with preliminary eligibility vetting, bankable project report (DPR) preparation,
            and official portal filings.
          </p>

          <p className="mt-1.5 max-w-2xl text-xs font-normal leading-relaxed text-slate-600 sm:text-[12.5px] hidden sm:block">
            Explore PMEGP (15% to 35% margin subsidy), CGTMSE (collateral-free credit up to ₹5 Crore), MUDRA institutional finance, PMFME
            agri-food grants, and DPIIT tax exemptions under Section 80-IAC.
          </p>

          {/* Centered Action Buttons */}
          <div className="mt-4 flex flex-col min-[420px]:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#eligibility-matcher"
              className="group relative inline-flex min-h-10 w-full min-[420px]:w-auto shrink-0 items-center justify-center gap-2 overflow-hidden rounded-sm bg-[#0A2540] px-5 py-2.5 text-xs font-semibold sm:px-6 sm:text-sm"
            >
              {/* Animated Gold Border */}
              <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-full animate-border-top bg-gradient-to-l from-transparent to-[#C89D3C]" />
              <span className="pointer-events-none absolute right-0 top-0 h-full w-[2px] animate-border-right bg-gradient-to-t from-transparent to-[#C89D3C]" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full animate-border-bottom bg-gradient-to-r from-transparent to-[#C89D3C]" />
              <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] animate-border-left bg-gradient-to-b from-transparent to-[#C89D3C]" />

              <span className="relative z-10 font-bold text-white">Check Scheme Eligibility</span>

              <ArrowRight
                size={14}
                className="relative z-10 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <Link
              href="/contact"
              className="group inline-flex min-h-10 w-full min-[420px]:w-auto items-center justify-center gap-2 rounded-sm border border-[#0A2540]/30 bg-white/75 px-5 py-2.5 text-xs font-semibold text-[#0A2540] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C89D3C] hover:bg-white sm:px-6 sm:text-sm"
            >
              <Phone size={15} className="text-[#C89D3C]" />

              <span>Consult Scheme Advisor</span>

              <ArrowUpRight
                size={15}
                className="text-[#C89D3C] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Horizontal 4-Stage Stepper Pipeline Ribbon */}
        <div className="w-full pt-3 border-t border-slate-300/60 mt-auto">
          <div className="mb-2 flex items-center justify-between text-[11px] text-slate-500 font-semibold px-1">
            <span className="uppercase tracking-wider text-[#0A2540] flex items-center gap-1.5 font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00843D]" />
              Scheme Execution Pipeline
            </span>
            <span className="text-[10.5px] text-slate-500">15%–35% Subsidies | KVIC &amp; SIDBI Aligned</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
            {steps.map(({ number, icon: Icon, label, sub }, index) => (
              <div
                key={label}
                className="relative flex items-center gap-2.5 rounded-sm border border-slate-200/90 bg-white/90 backdrop-blur-xs p-2.5 transition-all hover:border-[#C89D3C] hover:bg-white hover:shadow-xs group"
              >
                {/* Step Number + Medallion */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[#0A2540] text-[#C89D3C] font-mono font-bold text-xs shadow-2xs group-hover:bg-[#00843D] group-hover:text-white transition-colors">
                  {number}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="block text-xs font-bold text-[#0A2540] truncate leading-tight group-hover:text-[#0A2540]">
                      {label}
                    </span>
                    <Icon size={13} className="text-[#00843D] shrink-0 ml-1 hidden sm:block" />
                  </div>
                  <span className="block text-[10px] text-slate-500 truncate leading-tight mt-0.5 font-medium">{sub}</span>
                </div>

                {/* Horizontal Chevron Connector (Desktop) */}
                {index < steps.length - 1 && (
                  <ChevronRight
                    size={14}
                    className="absolute -right-2 top-1/2 -translate-y-1/2 text-slate-400 hidden md:block z-20 pointer-events-none"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
