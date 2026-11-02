"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Phone, Landmark } from "lucide-react";

export default function SchemesHero() {
  const highlights = [
    "Scheme Research",
    "Preliminary Eligibility Review",
    "Documentation Guidance",
    "Application Support",
  ];

  return (
    <section className="relative isolate py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/40 overflow-hidden border-b border-slate-200/60">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#C89D3C]/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-[#0A2540]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#0A254006_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C89D3C]/35 bg-[#C89D3C]/10 px-3.5 py-1 mb-4">
            <Sparkles size={12} className="text-[#C89D3C]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#0A2540]">
              Government Schemes &amp; Funding Support
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A2540] mb-5 leading-tight">
            Explore Government Schemes for{" "}
            <span className="bg-gradient-to-r from-[#C89D3C] via-[#C89D3C] to-[#F3D072] bg-clip-text text-transparent">
              Startups, MSMEs and Businesses
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-3xl mx-auto mb-4">
            Discover government initiatives and business-support programmes that may help eligible entrepreneurs and enterprises explore credit, incentives, entrepreneurship support, market access, innovation and business development opportunities.
          </p>

          <p className="text-xs sm:text-sm leading-relaxed text-slate-500 max-w-2xl mx-auto mb-8">
            Bharat Startup Ventures Pvt. Ltd. provides independent consultancy support to help businesses identify potentially relevant schemes, understand eligibility requirements, organize documentation and navigate application procedures.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-9">
            <a
              href="#eligibility-matcher"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#0A2540] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#0A2540]/15 transition-all duration-300 hover:bg-[#0A2540] hover:shadow-[0_12px_24px_rgba(200, 157, 60,0.25)]"
            >
              <span>Check Your Eligibility</span>
              <ArrowRight size={15} className="text-[#C89D3C] transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-[#0A2540] hover:border-[#C89D3C]/60 hover:bg-slate-50 transition-colors"
            >
              <Phone size={14} className="text-[#C89D3C]" />
              <span>Talk to Our Team</span>
            </Link>
          </div>

          {/* Highlights Bar from PDF */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 rounded-2xl border border-slate-200 bg-white/80 p-3 text-xs text-slate-600 shadow-2xs backdrop-blur-xs">
            {highlights.map((h, i) => (
              <span key={h} className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 size={13} className="text-[#00843D]" />
                <span>{h}</span>
                {i < highlights.length - 1 && (
                  <span className="hidden sm:inline text-slate-300 ml-2">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
