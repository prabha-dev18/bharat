"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Sparkles,
  ArrowRight,
  Briefcase,
  Landmark,
  Rocket,
  Sprout,
  Cpu,
  Megaphone,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll on mobile when menu drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsServicesDropdownOpen(false);
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);

      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 180);
  };

  const toggleServicesClick = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    setIsServicesDropdownOpen((previous) => !previous);
  };

  const handleNavigationClick = (href, event) => {
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    if (href.startsWith("#")) {
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault();

        const headerOffset = isScrolled ? 72 : 110;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        window.history.pushState(null, "", href);
      }
    }
  };

  const serviceGroups = [
    {
      title: "Business Registration & Compliance",
      category: "Incorporation & Statutory Filings",
      description: "Pvt Ltd, LLP, MSME registration, ROC statutory annual filings & corporate legal governance.",
      icon: Briefcase,
      badge: "Pillar 01",
      href: "/services#business-registration",
    },
    {
      title: "Loans & Financial Assistance",
      category: "MSME Loans & Working Capital",
      description: "MSME business loans, Detailed Project Reports (DPR), CMA banking data & proposal readiness.",
      icon: Landmark,
      badge: "Pillar 02",
      href: "/services#startup-funding",
    },
    {
      title: "Startup Funding & Government Schemes",
      category: "DPIIT Recognition & Grants",
      description: "Startup India Seed Fund (SISFS), Section 80-IAC tax exemption & pitch deck preparation.",
      icon: Rocket,
      badge: "Pillar 03",
      href: "/government-schemes",
    },
    {
      title: "Agriculture, Food & Livestock",
      category: "Agri-Infrastructure & Processing",
      description: "Agri-Infrastructure Fund (AIF), PMFME food processing grants, cold chain & dairy schemes.",
      icon: Sprout,
      badge: "Pillar 04",
      href: "/services#sector-specific-solutions",
    },
    {
      title: "Technology & Innovation",
      category: "Custom Software & AI Automation",
      description: "Enterprise software, mobile & web applications, custom CRM platforms & AI workflow systems.",
      icon: Cpu,
      badge: "Pillar 05",
      href: "/services#technology-web-app",
    },
    {
      title: "Digital Marketing & Creative Services",
      category: "Brand Growth & Digital Presence",
      description: "Performance SEO, corporate identity design, search visibility & multi-channel digital marketing.",
      icon: Megaphone,
      badge: "Pillar 06",
      href: "/services#digital-marketing-branding",
    },
  ];

  const navLinkClass =
    "group/nav relative py-2 transition-colors duration-300 hover:text-[#C58A1B] whitespace-nowrap";

  const navUnderline =
    "absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#C58A1B] to-[#F58220] transition-all duration-300 group-hover/nav:w-full";

  const consultationButton =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md border border-[#C58A1B]/50 bg-[#001A40] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#001A40]/25 transition-all duration-300 hover:border-[#D9A12E] hover:bg-[#001A40] hover:shadow-[0_0_20px_rgba(197,138,27,0.35)] active:scale-[0.98] before:pointer-events-none before:absolute before:inset-0 before:bg-[#C58A1B]/15 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100";

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* =========================================================================
          TOP UTILITY & CREDIBILITY ANNOUNCEMENT STRIP
          Mobile-responsive: cleanly wraps without overflow, collapses smoothly on scroll
          ========================================================================= */}
      <div
        className={`overflow-hidden border-b border-[#C58A1B]/25 bg-[#001A40] text-white/90 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "max-h-0 border-transparent py-0 opacity-0"
            : "max-h-24 sm:max-h-12 px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1.5 sm:flex-row sm:gap-2">
          {/* Left Credibility Pill */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C58A1B]/35 bg-[#C58A1B]/15 px-2.5 py-0.5 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#D9A12E]">
              <Sparkles size={11} className="text-[#D9A12E] shrink-0" />
              Government Recognized Startup Enabler
            </span>

            <span className="hidden text-[11px] font-medium text-slate-300 md:inline">
              • Bharat Startup Ventures Pvt. Ltd.
            </span>
          </div>

          {/* Right Direct Helpline */}
          <div className="flex items-center justify-center gap-3 text-[10.5px] text-slate-200 sm:gap-4 sm:text-[11.5px]">
            <a
              href="mailto:contact@bharatstartupventures.com"
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-[#D9A12E] active:opacity-75"
            >
              <Mail size={12} className="text-[#C58A1B] shrink-0" />
              <span className="hidden sm:inline">contact@bharatstartupventures.com</span>
              <span className="sm:hidden">Email</span>
            </a>

            <span className="text-slate-500">|</span>

            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-1.5 font-semibold text-white transition-colors duration-200 hover:text-[#D9A12E] active:opacity-75"
            >
              <Phone size={12} className="text-[#C58A1B] shrink-0" />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN EXECUTIVE NAVIGATION BAR
          Ultra-responsive on all screen sizes (320px to 4K)
          ========================================================================= */}
      <nav
        className={`w-full border-b transition-all duration-300 relative ${
          isScrolled
            ? "border-slate-200/90 bg-white/95 py-2 sm:py-2.5 backdrop-blur-xl shadow-sm"
            : "border-slate-100 bg-white py-2 sm:py-2.5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
          {/* Brand Logo with responsive height */}
          <Link
            href="/"
            onClick={(event) => handleNavigationClick("/", event)}
            className="group flex shrink-0 items-center py-0.5"
            aria-label="Bharat Startup Ventures home"
          >
            <Image
              src="/images/logo1.png"
              alt="Bharat Startup Ventures Pvt. Ltd."
              width={225}
              height={56}
              priority
              style={{ width: "auto" }}
              className={`object-contain transition-all duration-300 group-hover:scale-[1.02] ${
                isScrolled ? "h-7 sm:h-9 md:h-10" : "h-8 sm:h-9 md:h-10"
              }`}
            />
          </Link>

          {/* Desktop Navigation: 5 Strategic Pages */}
          <div className="hidden items-center gap-5 text-[13.5px] font-semibold xl:gap-8 lg:flex">
            {/* 1. Home */}
            <Link
              href="/"
              onClick={(event) => handleNavigationClick("/", event)}
              className={`${navLinkClass} ${isActive("/") ? "text-[#C58A1B]" : "text-[#001A40]"}`}
            >
              Home
              <span className={`${navUnderline} ${isActive("/") ? "!w-full" : ""}`} />
            </Link>

            {/* 2. About Us */}
            <Link
              href="/about"
              onClick={(event) => handleNavigationClick("/about", event)}
              className={`${navLinkClass} ${isActive("/about") ? "text-[#C58A1B]" : "text-[#001A40]"}`}
            >
              About Us
              <span className={`${navUnderline} ${isActive("/about") ? "!w-full" : ""}`} />
            </Link>

            {/* 3. Our Services ▾ (Mega Dropdown) */}
            <div ref={dropdownRef} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="flex items-center">
                <Link
                  href="/services"
                  onClick={(event) => handleNavigationClick("/services", event)}
                  className={`group/nav relative flex items-center gap-1.5 py-2 transition-colors duration-300 cursor-pointer ${
                    isActive("/services") || isServicesDropdownOpen ? "text-[#C58A1B]" : "text-[#001A40] hover:text-[#C58A1B]"
                  }`}
                  aria-expanded={isServicesDropdownOpen}
                  aria-haspopup="true"
                >
                  <span>Our Services</span>
                  <ChevronDown
                    size={14}
                    className={`text-[#C58A1B] transition-transform duration-300 ${
                      isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#C58A1B] to-[#F58220] transition-all duration-300 ${
                      isActive("/services") || isServicesDropdownOpen ? "w-full" : "w-0 group-hover/nav:w-full"
                    }`}
                  />
                </Link>
              </div>

              {/* Mega Dropdown Panel with Hover Bridge */}
              <div
                className={`invisible pointer-events-none absolute left-1/2 top-full z-[100] translate-x-[-50%] pt-3 opacity-0 transition-[opacity,transform,visibility] duration-300 ease-out ${
                  isServicesDropdownOpen ? "!visible !pointer-events-auto translate-y-0 !opacity-100" : "translate-y-3"
                }`}
              >
                <div className="w-[740px] max-w-[calc(100vw-2rem)] rounded-md border border-[#C58A1B]/25 bg-white p-5 sm:p-6 shadow-2xl">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#001A40]">
                        Our Strategic Service Divisions
                      </span>

                      <span className="rounded-full bg-[#C58A1B]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#C58A1B]">
                        6 Core Pillars
                      </span>
                    </div>

                    <span className="text-[11px] font-medium text-slate-400">
                      Explore our expertise
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {serviceGroups.map((group) => {
                      const Icon = group.icon;

                      return (
                        <Link
                          key={group.badge}
                          href={group.href}
                          onClick={(event) => handleNavigationClick(group.href, event)}
                          role="menuitem"
                          className="group/item flex min-w-0 gap-3 rounded-md border border-transparent p-3 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#C58A1B]/40 hover:bg-[#F5F5F5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C58A1B] cursor-pointer"
                        >
                          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200/80 bg-slate-50 text-[#001A40] transition-colors duration-300 group-hover/item:border-[#C58A1B]/50 group-hover/item:bg-[#001A40] group-hover/item:text-[#D9A12E]">
                            <Icon size={18} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="mb-1 flex items-start justify-between gap-1">
                              <h4 className="text-[12px] font-bold leading-snug text-[#001A40] transition-colors duration-200 group-hover/item:text-[#C58A1B] sm:text-[13px]">
                                {group.title}
                              </h4>

                              <ChevronRight
                                size={14}
                                className="mt-0.5 shrink-0 text-slate-400 transition-transform duration-300 group-hover/item:translate-x-1 group-hover/item:text-[#C58A1B]"
                              />
                            </div>

                            <p className="mb-1 text-[10px] font-semibold leading-tight text-[#C58A1B] sm:text-[11px]">
                              {group.category}
                            </p>

                            <p className="line-clamp-2 text-[11px] font-normal leading-relaxed text-slate-500 sm:text-[11.5px]">
                              {group.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3.5 text-xs">
                    <span className="flex items-center gap-1.5 font-medium text-slate-600">
                      <ShieldCheck size={15} className="shrink-0 text-[#00843D]" />
                      Pan-India Registration, Funding &amp; Compliance
                    </span>

                    <Link
                      href="/services"
                      onClick={(event) => handleNavigationClick("/services", event)}
                      className="group/link inline-flex items-center gap-1.5 font-bold text-[#001A40] transition-colors duration-200 hover:text-[#C58A1B]"
                    >
                      <span>Explore All Services</span>
                      <ArrowRight size={13} className="text-[#C58A1B] transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Government Schemes */}
            <Link
              href="/government-schemes"
              onClick={(event) => handleNavigationClick("/government-schemes", event)}
              className={`${navLinkClass} ${isActive("/government-schemes") ? "text-[#C58A1B]" : "text-[#001A40]"}`}
            >
              Government Schemes
              <span className={`${navUnderline} ${isActive("/government-schemes") ? "!w-full" : ""}`} />
            </Link>

            {/* 5. Contact Us */}
            <Link
              href="/contact"
              onClick={(event) => handleNavigationClick("/contact", event)}
              className={`${navLinkClass} ${isActive("/contact") ? "text-[#C58A1B]" : "text-[#001A40]"}`}
            >
              Contact Us
              <span className={`${navUnderline} ${isActive("/contact") ? "!w-full" : ""}`} />
            </Link>
          </div>

          {/* Desktop Consultation CTA with 4 Running Border Tracers */}
          <div className="hidden shrink-0 lg:flex">
            <Link
              href="/contact"
              onClick={(event) => handleNavigationClick("/contact", event)}
              className={consultationButton}
            >
              {/* 4 Animated Border Lines (#C58A1B Gold) */}
              <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-l from-transparent to-[#C58A1B] animate-border-top" />
              <span className="pointer-events-none absolute right-0 top-0 h-full w-[2px] bg-gradient-to-t from-transparent to-[#C58A1B] animate-border-right" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent to-[#C58A1B] animate-border-bottom" />
              <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent to-[#C58A1B] animate-border-left" />

              <span className="relative z-10 font-bold text-[#FFFFFF]">Get Consultation</span>

              <ArrowRight
                size={14}
                className="relative z-10 shrink-0 text-[#FFFFFF] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Mobile Right Controls: Compact Consult + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-2.5 lg:hidden">
            <Link
              href="/contact"
              onClick={(event) => handleNavigationClick("/contact", event)}
              className={`${consultationButton} gap-1 !px-2.5 sm:!px-3 !py-1.5 !text-[11px] sm:!text-xs shrink-0`}
            >
              <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-l from-transparent to-[#C58A1B] animate-border-top" />
              <span className="pointer-events-none absolute right-0 top-0 h-full w-[2px] bg-gradient-to-t from-transparent to-[#C58A1B] animate-border-right" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent to-[#C58A1B] animate-border-bottom" />
              <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent to-[#C58A1B] animate-border-left" />

              <span className="relative z-10 font-bold">Consult</span>

              <ArrowUpRight size={12} className="relative z-10 text-[#D9A12E] shrink-0" />
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((previous) => !previous)}
              className="p-1.5 sm:p-2 rounded-md border border-slate-200/90 text-[#001A40] hover:border-[#C58A1B]/60 hover:bg-slate-50 active:scale-95 transition-all cursor-pointer shrink-0"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X size={20} className="text-[#001A40]" />
              ) : (
                <Menu size={20} className="text-[#001A40]" />
              )}
            </button>
          </div>
        </div>

        {/* =========================================================================
            MOBILE NAVIGATION DRAWER
            Fully responsive, scrollable container, never gets cut off on mobile devices
            ========================================================================= */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out border-t border-slate-200/90 bg-white/98 backdrop-blur-2xl shadow-2xl overflow-y-auto overscroll-contain ${
            isMobileMenuOpen
              ? "max-h-[calc(100vh-65px)] opacity-100 visible py-4"
              : "max-h-0 opacity-0 invisible py-0 border-transparent pointer-events-none"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-4 sm:px-8 text-sm font-semibold text-[#001A40]">
            {/* 1. Home */}
            <Link
              href="/"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={(event) => handleNavigationClick("/", event)}
              className={`min-h-[44px] flex items-center justify-between rounded- px-3.5 py-2.5 transition-colors duration-200 hover:bg-slate-50 hover:text-[#C58A1B] active:bg-slate-100 ${
                isActive("/") ? "bg-slate-50 text-[#C58A1B] font-bold" : ""
              }`}
            >
              <span>Home</span>
              <ArrowRight size={14} className={isActive("/") ? "text-[#C58A1B]" : "text-slate-400"} />
            </Link>

            {/* 2. About Us */}
            <Link
              href="/about"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={(event) => handleNavigationClick("/about", event)}
              className={`min-h-[44px] flex items-center justify-between rounded-md px-3.5 py-2.5 transition-colors duration-200 hover:bg-slate-50 hover:text-[#C58A1B] active:bg-slate-100 ${
                isActive("/about") ? "bg-slate-50 text-[#C58A1B] font-bold" : ""
              }`}
            >
              <span>About Us</span>
              <ArrowRight size={14} className={isActive("/about") ? "text-[#C58A1B]" : "text-slate-400"} />
            </Link>

            {/* 3. Our Services (Expandable Accordion) */}
            <div className="rounded-md overflow-hidden">
              <div
                className={`min-h-[44px] flex w-full items-center justify-between rounded-md px-3.5 py-2.5 transition-colors duration-200 hover:bg-slate-50 hover:text-[#C58A1B] active:bg-slate-100 ${
                  isActive("/services") ? "bg-slate-50 text-[#C58A1B] font-bold" : ""
                }`}
              >
                <Link
                  href="/services"
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  onClick={(event) => handleNavigationClick("/services", event)}
                  className="flex-1 flex items-center gap-2"
                >
                  <span>Our Services</span>
                  <span className="rounded-full bg-[#C58A1B]/15 px-2 py-0.5 text-[10px] font-bold text-[#C58A1B]">
                    6 Pillars
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen((previous) => !previous)}
                  className="p-1.5 text-[#C58A1B] hover:bg-slate-100 rounded-md cursor-pointer"
                  aria-label="Toggle services list"
                  aria-expanded={isMobileServicesOpen}
                >
                  <ChevronDown
                    size={16}
                    className={`text-[#C58A1B] transition-transform duration-300 ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  isMobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="mt-1 flex flex-col gap-1.5 rounded-md border border-slate-200/80 bg-slate-50/70 p-2 sm:p-2.5">
                    {serviceGroups.map((group) => {
                      const Icon = group.icon;
                      return (
                        <Link
                          key={group.badge}
                          href={group.href}
                          tabIndex={isMobileMenuOpen && isMobileServicesOpen ? 0 : -1}
                          onClick={(event) => handleNavigationClick(group.href, event)}
                          className="group/mobile flex items-center justify-between gap-2.5 rounded-md border border-transparent p-2 transition-colors duration-200 hover:border-[#C58A1B]/30 hover:bg-white hover:text-[#C58A1B] active:bg-white cursor-pointer"
                        >
                          <div className="flex min-w-0 items-center gap-2.5">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white text-[#001A40] border border-slate-200/70 shadow-2xs">
                              <Icon size={14} className="text-[#001A40]" />
                            </div>

                            <div className="min-w-0">
                              <span className="block text-xs font-semibold leading-snug text-slate-800 group-hover/mobile:text-[#C58A1B] truncate">
                                {group.title}
                              </span>
                              <span className="block text-[10px] text-[#C58A1B] font-medium leading-tight">
                                {group.category}
                              </span>
                            </div>
                          </div>

                          <ChevronRight
                            size={13}
                            className="shrink-0 text-slate-400 transition-transform duration-200 group-hover/mobile:translate-x-0.5"
                          />
                        </Link>
                      );
                    })}

                    <Link
                      href="/services"
                      tabIndex={isMobileMenuOpen && isMobileServicesOpen ? 0 : -1}
                      onClick={(event) => handleNavigationClick("/services", event)}
                      className="mt-1 flex items-center justify-between rounded-md bg-[#001A40]/5 p-2 text-xs font-bold text-[#001A40] hover:bg-[#001A40]/10 transition-colors"
                    >
                      <span>Explore All Services</span>
                      <ArrowRight size={13} className="text-[#C58A1B]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Government Schemes */}
            <Link
              href="/government-schemes"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={(event) => handleNavigationClick("/government-schemes", event)}
              className={`min-h-[44px] flex items-center justify-between rounded-md px-3.5 py-2.5 transition-colors duration-200 hover:bg-slate-50 hover:text-[#C58A1B] active:bg-slate-100 ${
                isActive("/government-schemes") ? "bg-slate-50 text-[#C58A1B] font-bold" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <span>Government Schemes</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-500/20">
                  Schemes
                </span>
              </div>
              <ArrowRight size={14} className={isActive("/government-schemes") ? "text-[#C58A1B]" : "text-slate-400"} />
            </Link>

            {/* 5. Contact Us */}
            <Link
              href="/contact"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={(event) => handleNavigationClick("/contact", event)}
              className={`min-h-[44px] flex items-center justify-between rounded-md px-3.5 py-2.5 transition-colors duration-200 hover:bg-slate-50 hover:text-[#C58A1B] active:bg-slate-100 ${
                isActive("/contact") ? "bg-slate-50 text-[#C58A1B] font-bold" : ""
              }`}
            >
              <span>Contact Us</span>
              <ArrowRight size={14} className={isActive("/contact") ? "text-[#C58A1B]" : "text-slate-400"} />
            </Link>

            {/* Mobile Highlighted Consultation CTA */}
            <div className="pt-2">
              <Link
                href="/contact"
                tabIndex={isMobileMenuOpen ? 0 : -1}
                onClick={(event) => handleNavigationClick("/contact", event)}
                className={`${consultationButton} w-full justify-center py-3 text-xs uppercase tracking-wider`}
              >
                <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-l from-transparent to-[#C58A1B] animate-border-top" />
                <span className="pointer-events-none absolute right-0 top-0 h-full w-[2px] bg-gradient-to-t from-transparent to-[#C58A1B] animate-border-right" />
                <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent to-[#C58A1B] animate-border-bottom" />
                <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent to-[#C58A1B] animate-border-left" />

                <Sparkles size={14} className="relative z-10 shrink-0 text-[#D9A12E]" />
                <span className="relative z-10 font-bold text-[#FFFFFF]">Get Consultation</span>
                <ArrowRight size={14} className="relative z-10 text-[#FFFFFF]" />
              </Link>
            </div>

            {/* Direct Quick Tap Strip (Call & Email) at bottom of drawer */}
            <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-md bg-slate-50 text-[#00245A] font-semibold border border-slate-200/80 active:bg-slate-100 transition-colors"
              >
                <Phone size={13} className="text-[#C58A1B]" />
                <span>Call Helpline</span>
              </a>

              <a
                href="mailto:contact@bharatstartupventures.com"
                className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-md bg-slate-50 text-[#00245A] font-semibold border border-slate-200/80 active:bg-slate-100 transition-colors"
              >
                <Mail size={13} className="text-[#C58A1B]" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tap-to-dismiss Backdrop overlay when mobile drawer is open */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 top-[60px] sm:top-[70px] bg-[#001A40]/35 backdrop-blur-[2px] z-[-1] lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </nav>
    </header>
  );
}
