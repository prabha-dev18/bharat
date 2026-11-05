"use client";

import { CheckCircle2, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DetailOverview({ item }) {
  if (!item || !item.whatIs) return null;

  const { title, paragraphs, highlights } = item.whatIs;

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex">
          <span className="rounded-full border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase">
            PROGRAM OVERVIEW &bull; SCOPE
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-4xl leading-snug mb-3">
          {title || `What is ${item.title}?`}
        </h2>

        {/* Gold accent bar */}
        <div className="mb-6 h-1 w-16 rounded-full bg-[#C89D3C]" />

        {/* Fluid 2-Column Editorial Narrative (No Box Card!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 text-xs sm:text-[14px] text-slate-700 leading-relaxed sm:leading-[1.8] mb-8">
          {paragraphs &&
            paragraphs.map((p, idx) => (
              <p key={idx} className="text-slate-700">
                {p}
              </p>
            ))}
        </div>

        {/* Full-Width Institutional Advisory Reassurance Strip */}
        <div className="rounded-sm border-l-4 border-[#C89D3C] bg-amber-50/50 p-4 sm:p-5 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="max-w-3xl">
            <h3 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A2540] mb-1 flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#00843D] shrink-0" />
              Professional Advisory &amp; Single-Window Liaison
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              Bharat Startup Ventures Pvt. Ltd. provides complete advisory assistance to ensure accurate classification, compliant project report creation, proper portal filing, and systematic follow-up with nodal departments and partner banking institutions.
            </p>
          </div>
          <Link
            href={`/contact?subject=${encodeURIComponent(item.title)}`}
            className="shrink-0 inline-flex items-center gap-1.5 rounded-sm bg-[#0A2540] px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#12365c] transition-colors"
          >
            <span>Check Eligibility</span>
            <ArrowRight size={13} className="text-[#C89D3C]" />
          </Link>
        </div>

        {/* Open Strategic Benefits Grid (Replaces the clunky right-side box card!) */}
        {highlights && highlights.length > 0 && (
          <div className="pt-6 border-t border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={16} className="text-[#C89D3C]" />
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A2540]">
                Key Benefits &amp; Strategic Value
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-sm bg-slate-50/70 border border-slate-100 transition-colors hover:border-[#C89D3C]/40"
                >
                  <CheckCircle2 size={15} className="text-[#00843D] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-[13px] font-medium text-slate-800 leading-snug">
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
