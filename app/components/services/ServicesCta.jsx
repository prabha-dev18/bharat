"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";

export default function ServicesCta() {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-sm border border-[#C89D3C]/35 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#0A2540] p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#C89D3C]/15 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#F3D072]/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C89D3C]/40 bg-[#C89D3C]/15 px-3.5 py-1 mb-5">
              <Sparkles size={12} className="text-[#C89D3C]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#C89D3C]">
                Ready to Engage
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
              Tell Us What Your{" "}
              <span className="bg-gradient-to-r from-[#C89D3C] via-[#C89D3C] to-[#F3D072] bg-clip-text text-transparent">
                Business Needs
              </span>
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto mb-8">
              Share your business objective, current challenge or project idea. We can discuss relevant service options and appropriate next steps.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-sm bg-gradient-to-r from-[#C89D3C] via-[#F3D072] to-[#F3D072] px-7 py-3.5 text-xs sm:text-sm font-bold text-[#0A2540] shadow-xl shadow-[#C89D3C]/20 transition-all duration-300 hover:brightness-110 active:scale-95"
              >
                <span>Request a Consultation</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-sm border border-white/25 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/15"
              >
                <MessageSquare size={15} className="text-[#C89D3C]" />
                <span>Contact Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
