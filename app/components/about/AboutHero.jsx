"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Landmark, Cpu, Users, Globe2, ShieldCheck, Sparkles } from "lucide-react";

export default function AboutHero() {
  const features = [
    { icon: Landmark, label: "Institutional", sub: "Scheme Advisory" },
    { icon: Globe2, label: "Pan-India", sub: "28 States & 8 UTs" },
    { icon: ShieldCheck, label: "Regulatory", sub: "ROC & Compliance" },
    { icon: Cpu, label: "Technology-Driven", sub: "Digital Solutions" },
  ];

  return (
    <section
      className="relative isolate flex min-h-[460px] sm:min-h-[500px] lg:h-[calc(100svh-220px)] lg:max-h-[580px] w-full overflow-hidden bg-no-repeat bg-[position:center_40%] font-sans"
      style={{
        backgroundImage: "url('/images/about-bg-hd.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
      }}
    >
      {/* Background HD Image - Full Height Matching the Hero Component */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Overlay for Text Clarity matching Home Hero */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F0] via-[#FAF7F0]/92 to-transparent sm:via-[#FAF7F0]/75 lg:via-[#FAF7F0]/25" />
      </div>

      {/* Main Content Container - EXACT SAME STRUCTURE AS HOME HERO */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] items-center px-5 sm:px-8 lg:px-12 xl:px-0">
        <div className="flex max-h-full w-full flex-col justify-center py-2 sm:py-4 lg:w-[60%] xl:w-[56%]">
          {/* Eyebrow */}
          <div className="mb-3 flex items-center gap-3 sm:mb-4">
            <span className="h-px w-8 bg-[#C89D3C] sm:w-10" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A2540] sm:text-xs">
              About Bharat Startup Ventures Pvt. Ltd.
            </span>

            <span className="h-px w-8 bg-[#C89D3C] sm:w-10" />
          </div>

          {/* Main Heading */}
          <h1 className="font-heading max-w-2xl text-[clamp(1.5rem,2.8vw,3rem)] font-bold leading-[1.12] tracking-tight text-[#0A2540]">
            Supporting Business Ambitions
            <br />
            Through Guidance, Services
            <br />
            <span className="bg-[#C89D3C] bg-clip-text text-transparent">&amp; Innovation.</span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-3 max-w-xl text-xs font-normal leading-relaxed text-slate-700 sm:mt-4 sm:text-sm lg:text-[13px]">
            Bharat Startup Ventures Pvt. Ltd. brings together business-focused assistance and technology capabilities to support
            entrepreneurs, startups and organizations with essential business requirements, financial preparation, regulatory processes and
            digital development.
          </p>

          <p className="mt-2.5 max-w-xl text-xs font-normal leading-relaxed text-slate-700 sm:mt-3 sm:text-sm lg:text-[13px]">
            Our institutional approach helps clients understand their options, organize their statutory requirements and plan their next
            steps with greater clarity and confidence.
          </p>

          {/* CTA Buttons */}
          <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-5 sm:gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex min-h-10 sm:min-h-11 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-sm border border-[#0A2540]/30 bg-white/90 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#0A2540] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0A2540] hover:shadow-md active:translate-y-0 active:scale-[0.98]"
            >
              {/* Smooth Slide-In Background Overlay */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-[#0A2540] transition-transform duration-300 ease-out group-hover:translate-x-0"
              />

              <Users
                size={15}
                className="relative z-10 text-[#C89D3C] transition-colors duration-300 group-hover:text-[#F3D072]"
              />

              <span className="relative z-10 font-bold transition-colors duration-300 group-hover:text-white">
                Connect With Us
              </span>

              <ArrowUpRight
                size={15}
                className="relative z-10 text-slate-500 transition-all duration-300 group-hover:text-[#F3D072] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
         </div>
      </div>
    </section>
  );
}
