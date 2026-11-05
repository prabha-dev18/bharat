"use client";

import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  ChevronRight,
  Building2,
  CheckCircle2,
} from "lucide-react";

const DETAIL_HERO_IMAGE_MAP = {
  // 12 Services (Each has a 100% unique background image according to content)
  "business-registration": "/images/gov-legal.jpg",
  "taxation-compliance": "/images/contact-facilitation-desk-bg.jpg",
  "startup-funding": "/images/sector-startups.jpg",
  "website-ecommerce": "/images/gov-retail.jpg",
  "ai-automation": "/images/gov-tech.jpg",
  "digital-marketing": "/images/why.png",
  "government-schemes": "/images/about-hero-prestigious.jpg",
  "licences-certifications": "/images/contact-hero-solid-emblem.jpg",
  "mobile-software": "/images/home-modern-enterprise-hq.jpg",
  "data-analytics": "/images/home-digital-bharat-network.jpg",
  "industry-specific": "/images/sector-manufacturing.jpg",
  "udyam-registration": "/images/gov-msme.jpg",

  // 10 Schemes (Each has a 100% unique background image according to content)
  "pmegp": "/images/gov-manufacturing.jpg",
  "mudra": "/images/contact-hero-premium-gov.jpg",
  "cgtmse": "/images/contact-hero-gov.jpg",
  "startup-india": "/images/gov-startups.jpg",
  "gem-registration": "/images/sector-export.jpg",
  "zed-certification": "/images/about-growth.png",
  "pmfme-agri": "/images/gov-agri.jpg",
  "state-incentives": "/images/sector-agri.jpg",
  "technology-grants": "/images/about-hero-modern-gov.jpg",
  "iec-code": "/images/gov-export.jpg",
};

function getDetailBgImage(item) {
  if (!item || !item.slug) return "/images/gov-services-hero.jpg";
  return DETAIL_HERO_IMAGE_MAP[item.slug] || "/images/gov-services-hero.jpg";
}

export default function DetailHero({
  item,
  parentLabel = "Services",
  parentHref = "/services",
}) {
  if (!item) return null;

  const bgImage = getDetailBgImage(item);

  return (
    <section
      className="relative isolate overflow-hidden bg-cover bg-[78%_center] sm:bg-center bg-no-repeat pt-8 pb-10 sm:pt-12 sm:pb-12 border-b border-slate-200/80 font-sans"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      {/* High-Contrast Translucent Protective Government Overlay for 100% Font Visibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#FAF7F0]/98 via-[#FAF7F0]/94 to-[#FAF7F0]/88 backdrop-blur-[0.5px]"
      />

      {/* Top Tricolor Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 w-full grid grid-cols-3 z-20">
        <div className="bg-[#FF9933]" />
        <div className="bg-[#FFFFFF]" />
        <div className="bg-[#138808]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs - responsive wrapping for mobile */}
        <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5 flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-500">
          <Link href="/" className="hover:text-[#0A2540] transition-colors font-medium">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400 shrink-0" />
          <Link href={parentHref} className="hover:text-[#0A2540] transition-colors font-medium">
            {parentLabel}
          </Link>
          <ChevronRight size={13} className="text-slate-400 shrink-0" />
          <span className="font-semibold text-[#0A2540] truncate max-w-[220px] sm:max-w-none">
            {item.title}
          </span>
        </nav>

        {/* Expansive Full-Width Editorial Hero (NO square box card on right) */}
        <div className="max-w-4xl">
          {/* Eyebrow Badges */}
          <div className="mb-3.5 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase shadow-2xs">
              {item.badge || "GOVERNMENT SCHEME & SERVICE"}
            </span>
            {item.authority && (
              <span className="inline-block rounded-full bg-[#C89D3C]/10 text-[#0A2540] border border-[#C89D3C]/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                {item.authority}
              </span>
            )}
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <CheckCircle2 size={12} className="text-[#00843D]" />
              Single-Window Active
            </span>
          </div>

          {/* Title with Home font-heading */}
          <h1 className="font-heading text-2xl sm:text-3xl md:text-[38px] lg:text-[44px] font-bold text-[#0A2540] tracking-tight leading-[1.14] mb-3 sm:mb-4">
            {item.title}
          </h1>

          {/* Subtitle / Tagline with pristine high-contrast legibility */}
          <p className="text-xs sm:text-[14px] md:text-[15px] text-slate-700 leading-relaxed font-normal mb-6 max-w-3xl sm:leading-[1.7]">
            {item.tagline || item.subtitle}
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-5">
            <Link
              href={`/contact?subject=${encodeURIComponent(item.title)}`}
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-sm border border-[#C89D3C]/50 bg-[#0A2540] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#0A2540]/25 transition-all duration-300 hover:border-[#F3D072] hover:bg-[#0A2540] hover:shadow-[0_0_20px_rgba(200,157,60,0.35)] active:scale-[0.98]"
            >
              <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-l from-transparent to-[#C89D3C] animate-border-top" />
              <span className="pointer-events-none absolute right-0 top-0 h-full w-[2px] bg-gradient-to-t from-transparent to-[#C89D3C] animate-border-right" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent to-[#C89D3C] animate-border-bottom" />
              <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent to-[#C89D3C] animate-border-left" />

              <span className="relative z-10 font-bold text-white">Apply / Enquire Now</span>
              <ArrowRight size={15} className="relative z-10 text-[#C89D3C] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="tel:+919876543210"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-sm border border-[#0A2540]/30 bg-white/90 px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#0A2540] shadow-sm transition-all duration-300 hover:border-[#C89D3C] hover:bg-white"
            >
              <Phone size={15} className="text-[#00843D]" />
              <span>Talk to Scheme Advisor</span>
            </a>
          </div>

          {/* Statutory Disclaimer Pill */}
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <ShieldCheck size={15} className="text-[#00843D] shrink-0" />
            <span>Independent consultancy, application filing &amp; bank liaison by Bharat Startup Ventures</span>
          </div>
        </div>

        {/* Horizontal Quick Highlights Ribbon (Replaces the clunky right-side box card!) */}
        {item.quickStats && item.quickStats.length > 0 && (
          <div className="mt-8 pt-5 border-t border-[#0A2540]/15 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-sm bg-white/90 border border-slate-200/90 p-3 sm:px-5 sm:py-3.5 shadow-sm backdrop-blur-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0A2540] shrink-0">
                <Building2 size={16} className="text-[#C89D3C]" />
                <span>Key Parameters:</span>
              </div>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 sm:gap-6 sm:divide-x sm:divide-slate-200">
                {item.quickStats.map((stat, idx) => (
                  <div key={idx} className={`${idx > 0 ? "sm:pl-6" : ""} flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs`}>
                    <span className="text-slate-500 font-medium text-[11px] sm:text-xs">{stat.label}:</span>
                    <span className="font-bold text-[#0A2540] font-mono text-xs sm:text-[13px]">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
