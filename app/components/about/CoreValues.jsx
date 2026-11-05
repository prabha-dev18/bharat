"use client";

import Image from "next/image";
import {
  ShieldCheck,
  UserCheck,
  ClipboardCheck,
  Cpu,
  Handshake,
  TrendingUp,
} from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      title: "Integrity",
      description:
        "Communicating honestly, providing transparent scopes, and setting clear, realistic expectations at every milestone.",
      icon: ShieldCheck,
    },
    {
      title: "Client-Centric Approach",
      description:
        "Understanding your unique business context and operational requirements before recommending tailored solutions.",
      icon: UserCheck,
    },
    {
      title: "Statutory Diligence",
      description:
        "Working strictly within established professional guidelines, regulatory standards, and compliance frameworks.",
      icon: ClipboardCheck,
    },
    {
      title: "Digital Innovation",
      description:
        "Leveraging modern technology tools, AI automation, and intelligent workflows to streamline enterprise processes.",
      icon: Cpu,
    },
    {
      title: "Seamless Collaboration",
      description:
        "Unifying business setup, funding preparation, compliance, and IT services under a cohesive single-window desk.",
      icon: Handshake,
    },
    {
      title: "Continuous Excellence",
      description:
        "Constantly refining our advisory capabilities and technical methodologies as market dynamics and policies evolve.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-18 bg-[#FFFFFF] font-sans border-b border-slate-200/80 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Soft Tri-Atmospheric Ambient Glow */}
        <div className="absolute -top-32 -left-20 h-[480px] w-[480px] rounded-full bg-[#FF9933]/[0.045] blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-[#C89D3C]/[0.035] blur-[150px]" />
        <div className="absolute -bottom-32 -right-20 h-[480px] w-[480px] rounded-full bg-[#138808]/[0.045] blur-[130px]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.045]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="core-guilloche-pattern" width="120" height="120" patternUnits="userSpaceOnUse">
              <path
                d="M0 60 Q30 20, 60 60 T120 60"
                stroke="#0A2540"
                strokeWidth="0.8"
                fill="none"
              />
              <path
                d="M0 60 Q30 100, 60 60 T120 60"
                stroke="#C89D3C"
                strokeWidth="0.7"
                fill="none"
              />
              <path
                d="M60 0 Q20 30, 60 60 T60 120"
                stroke="#0A2540"
                strokeWidth="0.8"
                fill="none"
              />
              <path
                d="M60 0 Q100 30, 60 60 T60 120"
                stroke="#C89D3C"
                strokeWidth="0.7"
                fill="none"
              />
              <circle cx="60" cy="60" r="48" stroke="#C89D3C" strokeWidth="0.6" strokeDasharray="3 3" fill="none" />
              <circle cx="60" cy="60" r="28" stroke="#0A2540" strokeWidth="0.6" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#core-guilloche-pattern)" />
        </svg>

        {/* Subtle Pan-India Geographical Map Silhouette Centerpiece */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] sm:h-[620px] sm:w-[620px] lg:h-[720px] lg:w-[720px] opacity-[0.055] select-none pointer-events-none">
          <Image
            src="/images/map.jpg"
            alt="National Geographic Coverage"
            fill
            priority={false}
            sizes="(max-width: 640px) 520px, (max-width: 1024px) 620px, 720px"
            className="object-contain filter grayscale contrast-125"
          />
        </div>

        {/* Micro-dot Blueprint Grid */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#0A2540_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12 xl:px-0">
        
        {/* =====================================================================
            SECTION HEADER - PREMIUM CORPORATE STYLE
            ===================================================================== */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow Badge */}
          <div className="mb-3.5 inline-flex">
            <span className="rounded-sm border border-[#D5E2F0] bg-white/95 px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase shadow-2xs">
              OUR GUIDING ETHOS
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-[34px]">
            Core Values That Drive Us
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-xs font-normal text-slate-600 sm:text-[13.5px] max-w-xl">
            Foundational commitments that define how we advise founders, structure deliverables, and maintain professional excellence.
          </p>

          {/* Centered Gold Accent Line */}
          <div className="mt-3.5 h-1 w-16 rounded-full bg-[#C89D3C]" />
        </div>

        {/* =====================================================================
            3x2 GRID OF MODERN VALUE CARDS
            ===================================================================== */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex items-start gap-4 rounded-sm border border-slate-200/90 bg-white/95 backdrop-blur-md p-5 shadow-[0_2px_10px_rgba(0,0,0,0.025)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C89D3C]/70 hover:shadow-lg sm:p-6"
              >
                {/* Modern Dark Navy Tile with Gold Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-[#0A192F] text-[#F3D072] transition-colors duration-300 group-hover:bg-[#0A2540] sm:h-12 sm:w-12 shadow-2xs">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1 pt-0.5 text-left">
                  <h3 className="text-[14.5px] font-bold leading-snug text-[#0A2540] sm:text-[15.5px] transition-colors group-hover:text-[#C89D3C]">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate-600 sm:text-[12.5px]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}