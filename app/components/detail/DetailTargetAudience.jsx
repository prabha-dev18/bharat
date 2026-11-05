"use client";

import { Rocket, Factory, Building2, Globe2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DetailTargetAudience({ item }) {
  if (!item) return null;

  const audiences = [
    {
      title: "New Entrepreneurs & Founders",
      desc: "First-time founders setting up legal corporate structures, obtaining licenses, and seeking initial government subsidies.",
      icon: Rocket,
      highlight: "Early-Stage Setup",
    },
    {
      title: "Operating MSMEs & Small Businesses",
      desc: "Existing enterprises seeking working capital loans, collateral-free credit (CGTMSE), and statutory tax compliance.",
      icon: Building2,
      highlight: "Growth & Liquidity",
    },
    {
      title: "Manufacturing & Agro Units",
      desc: "Industrial plants seeking capital subsidies (PMEGP, PMFME, AIF) and green quality accreditation under ZED.",
      icon: Factory,
      highlight: "Plant Upgrades",
    },
    {
      title: "Exporters & High-Growth Startups",
      desc: "Ventures requiring DPIIT recognition, 80-IAC tax exemptions, DGFT Import Export Codes, and custom web software.",
      icon: Globe2,
      highlight: "Scale & Expansion",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
          <div className="mb-3 inline-flex">
            <span className="rounded-full border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase">
              WHO IS THIS FOR?
            </span>
          </div>

          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-4xl mb-2">
            Target Beneficiaries for {item.title}
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-[#C89D3C] mx-auto" />

          <p className="mt-3.5 max-w-2xl text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px] sm:leading-[1.7] mx-auto">
            Explore how our structured advisory and execution directly aligns with your current enterprise phase.
          </p>
        </div>

        {/* Segmented Beneficiary Spectrum (Replaces 4 repetitive square box cards!) */}
        <div className="rounded-sm border border-slate-200/90 bg-slate-50/50 divide-y md:divide-y-0 md:divide-x divide-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden shadow-xs">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 flex flex-col justify-between bg-white/60 hover:bg-white transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#0A2540]/5 text-[#0A2540]">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider rounded-full bg-slate-100 text-slate-700 px-2.5 py-0.5 border border-slate-200/60">
                      {aud.highlight}
                    </span>
                  </div>

                  <h3 className="font-heading text-sm sm:text-base font-bold text-[#0A2540] mb-2 leading-snug">
                    {aud.title}
                  </h3>

                  <p className="text-xs sm:text-[12.5px] text-slate-600 leading-relaxed">
                    {aud.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <Link
                    href={`/contact?subject=${encodeURIComponent(`${item.title} - ${aud.title}`)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A2540] hover:text-[#C89D3C] transition-colors"
                  >
                    <span>Check Suitability</span>
                    <ArrowRight size={12} className="text-[#C89D3C]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
