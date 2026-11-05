"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, Landmark, Scale, Cpu, Users } from "lucide-react";

export default function Hero() {
  const features = [
    { icon: Building2, label: "Business", sub: "Setup Support" },
    { icon: Landmark, label: "Financial", sub: "Preparation" },
    { icon: Scale, label: "Regulatory", sub: "Compliance" },
    { icon: Cpu, label: "Technology-Driven", sub: "Solutions" },
  ];

  return (
    <section
      className="relative isolate flex min-h-[460px] sm:min-h-[500px] lg:h-[calc(100svh-220px)] lg:max-h-[580px] w-full overflow-hidden bg-cover bg-[center_80%] bg-no-repeat font-sans"
      style={{
        backgroundImage: "url('/images/home-bg.png')",
      }}
    >
     

      {/* Background Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#FAF7F0]/75 via-[#FAF7F0]/55 to-[#FAF7F0]/0"
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] items-center px-5 sm:px-8 lg:px-12 xl:px-0">
        <div className="flex max-h-full w-full flex-col justify-center py-2 sm:py-4 lg:w-[60%] xl:w-[56%]">
          {/* Official Government Eyebrow Badge */}
          <div className="mb-3.5 inline-flex">
            <span className="rounded-sm border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[10.5px] sm:text-[11px] font-bold tracking-widest text-[#0A2540] uppercase shadow-2xs">
              NATIONAL STARTUP &amp; MSME FACILITATION PLATFORM
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading max-w-2xl text-[clamp(1.5rem,2.8vw,3rem)] font-bold leading-[1.12] tracking-tight text-[#0A2540]">
            Building Businesses.
            <br />
            Enabling Innovation.
            <br />
            <span className="bg-[#C89D3C] bg-clip-text text-transparent">
              Creating Opportunities.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-3 max-w-xl text-xs font-normal leading-relaxed text-slate-700 sm:mt-4 sm:text-sm lg:text-[13px]">
            Bharat Startup Ventures Pvt. Ltd. supports entrepreneurs, startups, MSMEs and growing organizations with business setup,
            financial preparation, regulatory compliance and technology-driven solutions.
          </p>

          <p className="mt-2.5 max-w-xl text-xs font-normal leading-relaxed text-slate-700 sm:mt-3 sm:text-sm lg:text-[13px]">
            From establishing your business and preparing funding documentation to improving operations and building your digital presence,
            we help you understand the right next steps for your business goals.
          </p>

          {/* CTA Buttons */}
          <div className="mt-4 flex flex-col min-[420px]:flex-row flex-wrap items-stretch min-[420px]:items-center gap-3 sm:mt-5 sm:gap-4">
            <Link
              href="/services"
              className="group relative inline-flex min-h-10 w-full min-[420px]:w-auto shrink-0 items-center justify-center gap-2 overflow-hidden rounded-sm bg-[#0A2540] px-5 py-2.5 text-xs font-semibold sm:px-6 sm:text-sm"
            >
              {/* Animated Gold Border */}
              <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-full animate-border-top bg-gradient-to-l from-transparent to-[#C89D3C]" />
              <span className="pointer-events-none absolute right-0 top-0 h-full w-[2px] animate-border-right bg-gradient-to-t from-transparent to-[#C89D3C]" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full animate-border-bottom bg-gradient-to-r from-transparent to-[#C89D3C]" />
              <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] animate-border-left bg-gradient-to-b from-transparent to-[#C89D3C]" />

              <span className="relative z-10 font-bold text-white">Explore Our Services</span>

              <ArrowRight
                size={14}
                className="relative z-10 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-10 w-full min-[420px]:w-auto items-center justify-center gap-2 rounded-sm border border-[#0A2540]/30 bg-white/75 px-5 py-2.5 text-xs font-semibold text-[#0A2540] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C89D3C] hover:bg-white sm:px-6 sm:text-sm"
            >
              <Users size={15} className="text-[#C89D3C]" />

              <span>Talk to Our Team</span>

              <ArrowUpRight
                size={15}
                className="text-[#C89D3C] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Feature Badges */}
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#0A2540]/15 pt-3.5 sm:mt-5 sm:grid-cols-4 sm:gap-4 sm:pt-4">
            {features.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex min-w-0 items-center gap-2.5 text-left sm:gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-[#C89D3C]/30 bg-white/90 text-[#C89D3C] sm:h-10 sm:w-10">
                  <Icon size={18} strokeWidth={1.7} />
                </div>

                <div className="flex min-w-0 flex-col gap-1">
                  <span className="text-[10px] font-bold leading-tight text-[#0A2540] sm:text-xs">{label}</span>

                  <span className="text-[9px] font-normal leading-snug text-slate-900 sm:text-[10px]">{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
