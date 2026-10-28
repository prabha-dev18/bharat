"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, MessageSquare, AlertCircle } from "lucide-react";

export default function SchemesCta() {
  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main CTA Box */}
        <div className="relative overflow-hidden rounded-3xl border border-[#C58A1B]/35 bg-gradient-to-br from-[#001A40] via-[#00245A] to-[#001026] p-8 sm:p-12 lg:p-16 text-white shadow-2xl mb-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#C58A1B]/15 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#F58220]/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C58A1B]/40 bg-[#C58A1B]/15 px-3.5 py-1 mb-5">
              <Sparkles size={12} className="text-[#E5A93C]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#E5A93C]">
                Explore Your Possibilities
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
              Find the Right Next Step for{" "}
              <span className="bg-gradient-to-r from-[#C58A1B] via-[#E5A93C] to-[#F58220] bg-clip-text text-transparent">
                Your Business
              </span>
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto mb-8">
              Tell us about your business, sector, location and funding or project requirement. We can help you explore potentially relevant programmes and understand the application process.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#eligibility-matcher"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#C58A1B] via-[#D9A12E] to-[#F58220] px-7 py-3.5 text-xs sm:text-sm font-bold text-[#001A40] shadow-xl shadow-[#C58A1B]/20 transition-all duration-300 hover:brightness-110 active:scale-95"
              >
                <span>Check Your Eligibility</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/15"
              >
                <MessageSquare size={15} className="text-[#E5A93C]" />
                <span>Request a Consultation</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Official Statutory Disclaimer Callout from PDF */}
        <div className="rounded-2xl border border-amber-200/80 bg-amber-50/70 p-5 sm:p-6 text-xs text-amber-950 leading-relaxed max-w-4xl mx-auto shadow-sm">
          <div className="flex items-center gap-2 font-bold text-[#001A40] mb-2 text-sm">
            <AlertCircle size={17} className="text-[#C58A1B]" />
            <span>Important Statutory &amp; Regulatory Disclaimer</span>
          </div>
          <p>
            Bharat Startup Ventures Pvt. Ltd. is an independent consultancy and is not a government department or an official government representative. Scheme names, availability, eligibility, benefits and application timelines are subject to current official guidelines. Final eligibility, approval, sanction, subsidy, credit and disbursement decisions rest with the relevant authorities, programme administrators or financial institutions. No outcome is guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
