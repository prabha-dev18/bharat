"use client";

import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function DetailRelated({ item }) {
  if (!item || !item.related || item.related.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 bg-slate-50/60 border-b border-slate-200/70 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <div className="mb-3 inline-flex">
              <span className="rounded-full border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase">
                CROSS-PROGRAM ADVISORY
              </span>
            </div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl">
              Related Services &amp; Schemes
            </h2>
            <div className="mt-2.5 h-1 w-16 rounded-full bg-[#C89D3C]" />
          </div>

          <Link
            href="/services"
            className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0A2540] hover:text-[#C89D3C] transition-colors"
          >
            <span>View All Services Directory</span>
            <ArrowRight size={14} className="text-[#C89D3C]" />
          </Link>
        </div>

        {/* Clean Open Related Directory Grid (No Boxy Square Cards!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {item.related.map((rel, idx) => (
            <Link
              key={idx}
              href={rel.href}
              className="group flex flex-col justify-between rounded-sm border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-300 hover:border-[#C89D3C]/60 hover:shadow-md hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  {rel.badge ? (
                    <span className="inline-block rounded-full bg-[#C89D3C]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0A2540] border border-[#C89D3C]/20">
                      {rel.badge}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500">
                      <Compass size={12} className="text-[#C89D3C]" />
                      Advisory Scope
                    </span>
                  )}
                  <span className="font-mono text-xs text-slate-400 group-hover:text-[#C89D3C] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading text-base font-bold text-[#0A2540] group-hover:text-[#C89D3C] transition-colors mb-2 leading-snug">
                  {rel.title}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0A2540]">
                <span>Explore Details</span>
                <ArrowRight size={13} className="text-[#C89D3C] transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
