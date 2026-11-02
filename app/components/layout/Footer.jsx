"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ShieldCheck, ChevronRight, Clock, Landmark, AlertCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  // Footer items remain fully visible on initial load and reload
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const items = footer.querySelectorAll("[data-footer-animate]");
    items.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  }, []);

  const navigationPages = [
    { name: "Home Portal", href: "/" },
    { name: "About Organisation", href: "/about" },
    { name: "All Core Services", href: "/services" },
    { name: "Government Schemes Directory", href: "/government-schemes" },
    { name: "Advisory Desk & Contact", href: "/contact" },
  ];

  const centralSchemes = [
    {
      name: "DPIIT & Startup India Recognition",
      href: "/government-schemes#scheme-4",
    },
    {
      name: "Section 80-IAC 3-Year Tax Exemption",
      href: "/government-schemes#scheme-4",
    },
    {
      name: "Startup India Seed Fund Scheme (SISFS)",
      href: "/government-schemes",
    },
    {
      name: "MSME PMEGP & CGTMSE Credit Subsidies",
      href: "/government-schemes#scheme-1",
    },
    {
      name: "Banking DPR & CMA Proposal Readiness",
      href: "/services#startup-funding",
    },
    {
      name: "GeM Registration & ROC Compliance",
      href: "/services#taxation-compliance",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/",
    },
  ];

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-[#030B17] text-white font-sans">
      <div className="relative w-full">
        {/* Clean National Tricolor Ribbon */}
        <div className="grid h-1.5 w-full grid-cols-3">
          <div className="bg-[#FF9933]" />
          <div className="bg-[#FFFFFF]" />
          <div className="bg-[#138808]" />
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        {/* Subtle Cyber Grid */}
        <svg className="absolute inset-0 h-full w-full opacity-35" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-live-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.03" />
              <circle cx="48" cy="0" r="1" fill="#C89D3C" fillOpacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-live-grid)" />
        </svg>

        {/* Dynamic Ambient Aurora Glows */}
        <div className="absolute -top-32 left-1/3 h-80 w-96 rounded-full bg-[#1A3A6B]/20 blur-[100px] animate-[pulse_7s_ease-in-out_infinite]" />
        <div className="absolute -bottom-32 right-1/4 h-80 w-96 rounded-full bg-[#C89D3C]/10 blur-[90px] animate-[pulse_9s_ease-in-out_infinite_2s]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 pb-8 sm:px-6 sm:pt-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div data-footer-animate className="flex flex-col lg:col-span-4">
            {/* Official White Logo */}
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/images/white-logo.png"
                alt="Bharat Startup Ventures Pvt. Ltd."
                width={240}
                height={60}
                priority
                style={{ width: "auto" }}
                className="h-10 sm:h-11 w-auto object-contain transition-opacity hover:opacity-95"
              />
            </Link>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#F3D072]">
              National Facilitation • Strategic Advisory • Digital Innovation
            </p>

            <p className="mb-5 text-xs leading-relaxed text-slate-300">
              Bharat Startup Ventures Pvt. Ltd. provides institutional advisory, government scheme facilitation, funding documentation and
              regulatory compliance support to empower Indian entrepreneurs, MSMEs and growing enterprises under national economic
              initiatives.
            </p>
          </div>
          <div data-footer-animate className="lg:col-span-2">
            <h4 className="mb-3.5 flex items-center gap-2 border-b border-white/15 pb-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#F3D072]">
              <span>Quick Links</span>
            </h4>

            <ul className="space-y-2 text-xs">
              {navigationPages.map((page) => (
                <li key={page.name}>
                  <Link
                    href={page.href}
                    className="group inline-flex items-center gap-1.5 text-slate-300 transition-colors duration-200 hover:text-[#F3D072]"
                  >
                    <ChevronRight size={11} className="text-[#C89D3C] transition-transform duration-200 group-hover:translate-x-1" />
                    <span>{page.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div data-footer-animate className="lg:col-span-3">
            <h4 className="mb-3.5 flex items-center gap-2 border-b border-white/15 pb-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#F3D072]">
              <span>Government Schemes</span>
            </h4>

            <ul className="space-y-2 text-xs">
              {centralSchemes.map((scheme) => (
                <li key={scheme.name}>
                  <Link
                    href={scheme.href}
                    className="group inline-flex items-center gap-1.5 text-slate-300 transition-colors duration-200 hover:text-[#F3D072]"
                  >
                    <ChevronRight
                      size={11}
                      className="shrink-0 text-[#C89D3C] transition-transform duration-200 group-hover:translate-x-1"
                    />
                    <span className="line-clamp-1">{scheme.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div data-footer-animate className="lg:col-span-3">
            <h4 className="mb-3.5 flex items-center gap-2 border-b border-white/15 pb-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#F3D072]">
              <span>Advisory Helpline</span>
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              {/* Phone Helpline */}
              <a
                href="tel:+919876543210"
                className="group flex items-start gap-2.5 rounded-lg border border-white/10 bg-white/5 p-2.5 transition-all duration-200 hover:border-[#F3D072]/50 hover:bg-white/10"
              >
                <Phone size={14} className="mt-0.5 shrink-0 text-[#F3D072] transition-transform group-hover:scale-110" />
                <div>
                  <span className="block font-bold text-white group-hover:text-[#F3D072] transition-colors">+91 98765 43210</span>
                  <span className="text-[10px] text-slate-400">National Facilitation Helpline</span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@bharatstartupventures.com"
                className="flex items-start gap-2.5 transition-colors duration-200 hover:text-[#F3D072]"
              >
                <Mail size={14} className="mt-0.5 shrink-0 text-[#C89D3C]" />
                <div className="min-w-0">
                  <span className="block truncate font-semibold text-white">contact@bharatstartupventures.com</span>
                  <span className="text-[10px] text-slate-400">Official Inquiries &amp; Submissions</span>
                </div>
              </a>

              {/* Operating Hours */}
              <div className="flex items-start gap-2.5">
                <Clock size={14} className="mt-0.5 shrink-0 text-[#C89D3C]" />
                <div>
                  <span className="block font-semibold text-white">Mon – Sat: 9:30 AM – 6:30 PM</span>
                  <span className="text-[10px] text-slate-400">Indian Standard Time (IST)</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#C89D3C]" />
                <div>
                  <span className="block font-semibold text-white">New Delhi, India</span>
                  <span className="text-[10px] text-slate-400">Pan-India Network Across All States</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-footer-animate
          className="mt-10 rounded-lg border border-[#C89D3C]/30 bg-[#06152B]/80 p-3.5 sm:p-4 text-[11px] leading-relaxed text-slate-300 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 font-bold text-[#F3D072] mb-1">
            <AlertCircle size={14} className="text-[#C89D3C] shrink-0" />
            <span>Important Statutory &amp; Regulatory Disclaimer</span>
          </div>
          <p className="text-[10.5px] text-slate-300 sm:text-[11px]">
            Bharat Startup Ventures Pvt. Ltd. operates as an independent startup consultancy and business enablement platform. It is not an
            official government department, agency, or representative of the Government of India or any State Government. Government scheme
            eligibility, subsidy allocations, grant approvals, DPIIT recognition, tax exemptions, and loan sanctions are determined solely
            by the respective competent authorities and financial institutions under applicable official policies. No outcome or financial
            disbursement is guaranteed.
          </p>
        </div>
        <div
          data-footer-animate
          className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row"
        >
          <div className="text-center sm:text-left">
            <p>© {currentYear} Bharat Startup Ventures Pvt. Ltd. All rights reserved.</p>
            <p className="mt-0.5 text-[10px] text-slate-500">
              National Startup &amp; Enterprise Facilitation Infrastructure • Aligned with Digital India Standards
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/terms-and-conditions" className="transition-colors duration-200 hover:text-[#F3D072] text-[11px]">
              Terms &amp; Conditions
            </Link>

            <Link href="/privacy-policy" className="transition-colors duration-200 hover:text-[#F3D072] text-[11px]">
              Privacy Policy
            </Link>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 border-l border-white/15 pl-4">
              {socialLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="flex h-7 w-7 items-center justify-center rounded border border-white/10 bg-white/5 text-slate-300 transition-all duration-200 hover:border-[#F3D072]/50 hover:bg-[#C89D3C]/20 hover:text-[#F3D072]"
                >
                  {name === "Instagram" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                    </svg>
                  )}
                  {name === "Facebook" && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3.2h2.8V21h3.7Z" />
                    </svg>
                  )}
                  {name === "YouTube" && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
