"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Rocket, Coins, ShieldCheck, Cpu, Users } from "lucide-react";

export default function Hero() {
  const features = [
    { icon: Rocket, label: "Business", sub: "Setup Support" },
    { icon: Coins, label: "Financial", sub: "Preparation" },
    { icon: ShieldCheck, label: "Regulatory", sub: "Compliance" },
    { icon: Cpu, label: "Technology-Driven", sub: "Solutions" },
  ];

  return (
    <section
      className="relative isolate flex h-[calc(100svh-160px)] min-h-0 w-full overflow-hidden bg-cover bg-[center_55%] bg-no-repeat font-sans"
      style={{
        backgroundImage: "url('/images/home-bg.png')",
      }}
    >
      {/* Background Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#FAF7F0]/95 via-[#FAF7F0]/65 to-[#FAF7F0]/10"
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] items-center px-5 sm:px-8 lg:px-12 xl:px-0">
        <div className="flex max-h-full w-full flex-col justify-center py-2 sm:py-4 lg:w-[60%] xl:w-[56%]">
          {/* Eyebrow */}
          <div className="mb-3 flex items-center gap-3 sm:mb-4">
            <span className="h-px w-8 bg-[#C58A1B] sm:w-10" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#001A40] sm:text-xs">
              Your Partner in Business Growth
            </span>

            <span className="h-px w-8 bg-[#C58A1B] sm:w-10" />
          </div>

          {/* Main Heading */}
          <h1 className="font-heading max-w-2xl text-[clamp(1.5rem,2.8vw,3rem)] font-bold leading-[1.12] tracking-tight text-[#001A40]">
            Building Businesses.
            <br />
            Enabling Innovation.
            <br />
            <span className="bg-gradient-to-r from-[#C58A1B] via-[#D9A12E] to-[#F58220] bg-clip-text text-transparent">
              Creating Opportunities.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-4 max-w-xl text-xs font-normal leading-relaxed text-slate-700 sm:mt-5 sm:text-sm lg:text-[13px]">
            Bharat Startup Ventures Pvt. Ltd. supports entrepreneurs, startups, MSMEs and growing organizations with business setup,
            financial preparation, regulatory compliance and technology-driven solutions.
          </p>

          <p className="mt-3 max-w-xl text-xs font-normal leading-relaxed text-slate-700 sm:mt-4 sm:text-sm lg:text-[13px]">
            From establishing your business and preparing funding documentation to improving operations and building your digital presence,
            we help you understand the right next steps for your business goals.
          </p>

          {/* CTA Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-6 sm:gap-4">
            <Link
              href="/services"
              className="group relative inline-flex min-h-10 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-md bg-[#001A40] px-5 py-2.5 text-xs font-semibold sm:px-6 sm:text-sm"
            >
              {/* Animated Gold Border */}
              <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-full animate-border-top bg-gradient-to-l from-transparent to-[#C58A1B]" />
              <span className="pointer-events-none absolute right-0 top-0 h-full w-[2px] animate-border-right bg-gradient-to-t from-transparent to-[#C58A1B]" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full animate-border-bottom bg-gradient-to-r from-transparent to-[#C58A1B]" />
              <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] animate-border-left bg-gradient-to-b from-transparent to-[#C58A1B]" />

              <span className="relative z-10 font-bold text-white">Explore Our Services</span>

              <ArrowRight
                size={14}
                className="relative z-10 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-[#001A40]/30 bg-white/75 px-5 py-2.5 text-xs font-semibold text-[#001A40] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C58A1B] hover:bg-white sm:px-6 sm:text-sm"
            >
              <Users size={15} className="text-[#C58A1B]" />

              <span>Talk to Our Team</span>

              <ArrowUpRight
                size={15}
                className="text-[#C58A1B] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Feature Badges */}

          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-[#001A40]/15 pt-4 sm:mt-7 sm:grid-cols-4 sm:gap-4 sm:pt-5">
            {features.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex min-w-0 items-center gap-2.5 text-left sm:gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#C58A1B]/30 bg-white/90 text-[#C58A1B] sm:h-10 sm:w-10">
                  <Icon size={18} strokeWidth={1.7} />
                </div>

                <div className="flex min-w-0 flex-col gap-1">
                  <span className="text-[10px] font-bold leading-tight text-[#001A40] sm:text-xs">{label}</span>

                  <span className="text-[9px] font-normal leading-snug text-slate-600 sm:text-[10px]">{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
