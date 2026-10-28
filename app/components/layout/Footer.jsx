"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ShieldCheck, ChevronRight, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  // Staggered fade-up animation triggered when footer scrolls into view
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = footer.querySelectorAll("[data-footer-animate]");

    if (prefersReduced) {
      items.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    // Set initial hidden state
    items.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(32px)";
      el.style.transition = `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 90}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 90}ms`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el) => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const navigationPages = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Government Schemes", href: "/government-schemes" },
    { name: "Contact Us", href: "/contact" },
  ];

  const coreServices = [
    {
      name: "Company Incorporation (Pvt Ltd & LLP)",
      href: "/services#business-registration",
    },
    {
      name: "DPIIT & Startup India Recognition",
      href: "/government-schemes#scheme-4",
    },
    {
      name: "MSME Loans & Project Reports (DPR)",
      href: "/services#startup-funding",
    },
    {
      name: "GST & ROC Statutory Compliance",
      href: "/services#taxation-compliance",
    },
    {
      name: "PMEGP & CGTMSE Scheme Assistance",
      href: "/government-schemes#scheme-1",
    },
    {
      name: "AI Automation & Custom Software",
      href: "/services#ai-automation",
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
    <footer ref={footerRef} className="relative overflow-hidden border-t border-[#C58A1B]/30 bg-[#001026] text-white">
      {/* Ambient Gradient Glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-[#C58A1B]/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-[#00245A]/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#C58A1B08_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      {/* Main Footer Container */}
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 sm:pt-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand & Positioning */}
          <div data-footer-animate className="flex flex-col lg:col-span-4">
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <Image
                src="/images/logo1.png"
                alt="Bharat Startup Ventures Pvt. Ltd."
                width={220}
                height={55}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D9A12E]">
              Business Support. Strategic Guidance. Digital Innovation.
            </p>

            <p className="mb-6 text-xs leading-relaxed text-slate-300">
              Bharat Startup Ventures Pvt. Ltd. brings together business-focused assistance, funding preparation, regulatory compliance and
              technology capabilities to support entrepreneurs, MSMEs and growing enterprises under one unified brand.
            </p>

            <div className="inline-flex items-center gap-2 rounded-md border border-[#C58A1B]/30 bg-[#C58A1B]/10 px-3 py-2 text-[11px] text-slate-200">
              <ShieldCheck size={16} className="shrink-0 text-[#00843D]" />
              <span>Independent Corporate &amp; Startup Consultancy</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div data-footer-animate className="lg:col-span-2">
            <h4 className="mb-4 border-b border-white/10 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#D9A12E]">Navigation</h4>

            <ul className="space-y-2.5 text-xs">
              {navigationPages.map((page) => (
                <li key={page.name}>
                  <Link
                    href={page.href}
                    className="group inline-flex items-center gap-1.5 text-slate-300 transition-colors duration-200 hover:text-[#D9A12E]"
                  >
                    <ChevronRight size={12} className="text-[#C58A1B] transition-transform duration-200 group-hover:translate-x-1" />
                    <span>{page.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Strategic Services */}
          <div data-footer-animate className="lg:col-span-3">
            <h4 className="mb-4 border-b border-white/10 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#D9A12E]">
              Strategic Services
            </h4>

            <ul className="space-y-2.5 text-xs">
              {coreServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-1.5 text-slate-300 transition-colors duration-200 hover:text-[#D9A12E]"
                  >
                    <ChevronRight
                      size={12}
                      className="shrink-0 text-[#C58A1B] transition-transform duration-200 group-hover:translate-x-1"
                    />
                    <span className="line-clamp-1">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Enquiries */}
          <div data-footer-animate className="lg:col-span-3">
            <h4 className="mb-4 border-b border-white/10 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#D9A12E]">
              Contact &amp; Enquiries
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              <a href="tel:+919876543210" className="flex items-start gap-2.5 transition-colors duration-200 hover:text-[#D9A12E]">
                <Phone size={14} className="mt-0.5 shrink-0 text-[#C58A1B]" />
                <div>
                  <span className="block font-semibold text-white">+91 98765 43210</span>
                  <span className="text-[10.5px] text-slate-400">Direct Helpline &amp; Advisory</span>
                </div>
              </a>

              <a
                href="mailto:contact@bharatstartupventures.com"
                className="flex items-start gap-2.5 transition-colors duration-200 hover:text-[#D9A12E]"
              >
                <Mail size={14} className="mt-0.5 shrink-0 text-[#C58A1B]" />
                <div className="min-w-0">
                  <span className="block truncate font-semibold text-white">contact@bharatstartupventures.com</span>
                  <span className="text-[10.5px] text-slate-400">Official Business Email</span>
                </div>
              </a>

              <div className="flex items-start gap-2.5">
                <Clock size={14} className="mt-0.5 shrink-0 text-[#C58A1B]" />
                <div>
                  <span className="block font-semibold text-white">Mon – Sat: 9:30 AM – 6:30 PM</span>
                  <span className="text-[10.5px] text-slate-400">IST Business Operating Hours</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#C58A1B]" />
                <div>
                  <span className="block font-semibold text-white">New Delhi, India</span>
                  <span className="text-[10.5px] text-slate-400">Pan-India Virtual &amp; On-Site Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <div data-footer-animate className="mt-12 rounded-md border border-white/10 bg-white/5 p-4 text-[11px] leading-relaxed text-slate-300">
          <p className="mb-1 font-semibold text-[#D9A12E]">Important Regulatory &amp; Statutory Disclaimer:</p>
          <p>
            Bharat Startup Ventures Pvt. Ltd. provides independent consultancy and business support. It is not a government department or an
            official government representative. Government scheme eligibility, funding, approvals, certification and statutory decisions are
            determined solely by the relevant government authorities or financial institutions under applicable official guidelines. No
            outcome or funding sanction is guaranteed.
          </p>
        </div>

        {/* Copyright, Legal Links & Social Media */}
        <div data-footer-animate className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p className="text-center sm:text-left">© {currentYear} Bharat Startup Ventures Pvt. Ltd. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <Link href="/terms-and-conditions" className="transition-colors duration-200 hover:text-[#D9A12E]">
              Terms &amp; Conditions
            </Link>

            <Link href="/privacy-policy" className="transition-colors duration-200 hover:text-[#D9A12E]">
              Privacy Policy
            </Link>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 border-l border-white/15 pl-4">
              {socialLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 transition-all duration-200 hover:border-[#D9A12E]/50 hover:bg-[#C58A1B]/15 hover:text-[#D9A12E]"
                >
                  {/* Instagram */}
                  {name === "Instagram" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="17"
                      height="17"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                    </svg>
                  )}

                  {/* Facebook */}
                  {name === "Facebook" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="17"
                      height="17"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3.2h2.8V21h3.7Z" />
                    </svg>
                  )}

                  {/* YouTube */}
                  {name === "YouTube" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="currentColor"
                      aria-hidden="true"
                    >
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
