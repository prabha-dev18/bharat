"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, PhoneCall } from "lucide-react";

export default function ContactHero() {
  return (
    <section
      className="relative isolate flex min-h-[460px] sm:min-h-[500px] lg:h-[calc(100svh-220px)] lg:max-h-[580px] w-full overflow-hidden bg-[#FAF7F0] font-sans border-b border-slate-200/80"
    >
      {/* Background Emblem Image - Proportional Width, Seamless Uniform Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="relative h-full w-full flex items-center justify-end pr-0 sm:pr-2 lg:pr-4">
          <Image
            src="/images/contact-hero-emblem-faded.png"
            alt="National Emblem of India - Ashoka Lion Capital with Satyameva Jayate"
            fill
            priority
            unoptimized
            quality={100}
            className="object-contain object-right select-none"
            sizes="100vw"
          />
        </div>
      </div>

      {/* =====================================================================
          MAIN CONTENT CONTAINER - EXECUTIVE FACILITATION DESK CANVAS
          Clean, Centered, Zero Bottom Stage Blocks
          ===================================================================== */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] items-center px-5 sm:px-8 lg:px-12 xl:px-0 py-8 sm:py-10 lg:py-0">
        
        {/* Main Text Content */}
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl">
          {/* Official Government Eyebrow Badge */}
          <div className="mb-3.5 inline-flex">
            <span className="rounded-sm border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[10.5px] sm:text-[11px] font-bold tracking-widest text-[#0A2540] uppercase shadow-2xs">
              NATIONAL FACILITATION &amp; GRIEVANCE HELPDESK
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading max-w-2xl text-[clamp(1.6rem,3vw,3.2rem)] font-bold leading-[1.12] tracking-tight text-[#0A2540]">
            Official Facilitation Desk.
            <br />
            Single-Window Schemes &amp;
            <br />
            <span className="bg-[#C89D3C] bg-clip-text text-transparent">
              Statutory Advisory.
            </span>
          </h1>

          {/* Supporting Text Paragraphs */}
          <p className="mt-3.5 max-w-xl text-xs font-normal leading-relaxed text-slate-700 sm:text-[13.5px] sm:leading-[1.7]">
            Direct institutional single-window contact desk for entrepreneurs, MSMEs, startups, and industrial applicants across all 28 States and 8 Union Territories.
          </p>

          <p className="mt-2 max-w-xl text-xs font-normal leading-relaxed text-slate-700 sm:text-[13.5px] sm:leading-[1.7]">
            Submit business formation inquiries, scheme subsidy feasibility reviews, banking DPR requirements, or statutory compliance filings for structured evaluation under official benchmarks.
          </p>

          {/* CTA Buttons */}
          <div className="mt-5 flex flex-col min-[420px]:flex-row flex-wrap items-stretch min-[420px]:items-center gap-3 sm:gap-4">
            <a
              href="#enquiry-form"
              className="group relative inline-flex min-h-10 w-full min-[420px]:w-auto shrink-0 items-center justify-center gap-2 overflow-hidden rounded-sm bg-[#0A2540] px-6 py-2.5 text-xs font-semibold sm:text-sm"
            >
              <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-full animate-border-top bg-gradient-to-l from-transparent to-[#C89D3C]" />
              <span className="pointer-events-none absolute right-0 top-0 h-full w-[2px] animate-border-right bg-gradient-to-t from-transparent to-[#C89D3C]" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full animate-border-bottom bg-gradient-to-r from-transparent to-[#C89D3C]" />
              <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] animate-border-left bg-gradient-to-b from-transparent to-[#C89D3C]" />

              <span className="relative z-10 font-bold text-white">Submit Facilitation Docket</span>
              <ArrowRight
                size={14}
                className="relative z-10 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="tel:+919876543210"
              className="group inline-flex min-h-10 w-full min-[420px]:w-auto items-center justify-center gap-2 rounded-sm border border-[#0A2540]/30 bg-white/80 px-6 py-2.5 text-xs font-semibold text-[#0A2540] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C89D3C] hover:bg-white sm:text-sm"
            >
              <PhoneCall size={15} className="text-[#00843D]" />
              <span>Direct Helpline Desk</span>
              <ArrowUpRight
                size={15}
                className="text-[#00843D] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
