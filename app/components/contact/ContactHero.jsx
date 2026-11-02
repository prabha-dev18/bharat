"use client";

import { Sparkles, Phone, Mail } from "lucide-react";

export default function ContactHero() {
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
              Direct Engagement &amp; Advisory
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A2540] mb-5 leading-tight">
            Let&apos;s Discuss Your{" "}
            <span className="bg-gradient-to-r from-[#C89D3C] via-[#C89D3C] to-[#F3D072] bg-clip-text text-transparent">
              Business Goals
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-3xl mx-auto mb-4">
            Whether you are planning a new venture, exploring funding opportunities, addressing compliance requirements or developing a technology solution, Bharat Startup Ventures Pvt. Ltd. welcomes your enquiry.
          </p>

          <p className="text-xs sm:text-sm leading-relaxed text-slate-500 max-w-2xl mx-auto mb-8">
            Tell us what you are working towards so we can discuss relevant services and potential next steps.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#enquiry-form"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0A2540] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#0A2540]/15 hover:bg-[#0A2540] transition-all"
            >
              <Mail size={15} className="text-[#C89D3C]" />
              <span>Send an Enquiry</span>
            </a>

            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-[#0A2540] hover:border-[#C89D3C]/60 hover:bg-slate-50 transition-colors"
            >
              <Phone size={15} className="text-[#C89D3C]" />
              <span>Call Our Team: +91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
