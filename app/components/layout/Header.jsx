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
  Home,
  Clock,
  Globe,
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
  FileText,
} from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [formattedTime, setFormattedTime] = useState("");

  const pathname = usePathname();
  const [clickedPath, setClickedPath] = useState(null);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const isActive = (path) => {
    const current = clickedPath || pathname || (typeof window !== "undefined" ? window.location.pathname : "/");
    if (path === "/") {
      return current === "/" || current === "";
    }
    return current?.startsWith(path);
  };

  // Live dynamic clock for Top Utility Strip matching the portal framework
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const dayName = days[now.getDay()];
      const day = now.getDate();
      const month = months[now.getMonth()];
      const year = now.getFullYear();

      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12 || 12;
      const formattedHours = String(hours).padStart(2, "0");

      setFormattedTime(`${dayName}, ${day} ${month}, ${year}, ${formattedHours}:${minutes}:${seconds} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
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

  const handleNavigationClick = (href, event) => {
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);

    if (href === "/") {
      if (typeof window !== "undefined") {
        if (event && event.preventDefault) event.preventDefault();
        // eslint-disable-next-line @next/next/no-location-assign-relative-destination
        window.location.href = "/";
        return;
      }
    }

    if (!href.startsWith("#")) {
      setClickedPath(href);
    }

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    if (href.startsWith("#")) {
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault();
        const headerOffset = 115;
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

  const handleFontSize = (delta) => {
    if (typeof document === "undefined") return;
    const current = parseFloat(document.documentElement.style.fontSize || "16");
    if (delta === 0) {
      document.documentElement.style.fontSize = "16px";
    } else {
      const nextSize = Math.min(Math.max(current + delta, 14), 19);
      document.documentElement.style.fontSize = `${nextSize}px`;
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

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* =========================================================================
          TOP TRICOLOR MICRO-STRIP
          ========================================================================= */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808]" />

      {/* =========================================================================
          TIER 1: TOP GOV / PORTAL UTILITY BAR (Solid Navy #0A2540)
          ========================================================================= */}
      <div className="w-full bg-[#0A2540] text-white/90 border-b border-[#0A2540]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 py-1.5 text-[11px] sm:text-xs">
          {/* Left: Official Authority Identification & Live Clock */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="font-bold text-[#F3D072] tracking-wider text-[11px] sm:text-xs">उद्यम भारत • स्टार्टअप संवर्धन मंच</span>
            <span className="text-slate-500">|</span>
            <span className="font-bold uppercase tracking-wider text-slate-200 text-[10px] sm:text-[11px]">
              NATIONAL STARTUP &amp; MSME FACILITATION PLATFORM
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] text-[#F3D072] font-mono">
              <Clock size={12} className="text-[#F3D072] shrink-0" />
              <span>{formattedTime || "Thu, 29 Oct, 2026, 05:45:56 pm"}</span>
            </span>
          </div>

          {/* Right: Accessibility Controls & Utilities */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#main-content" className="hidden lg:inline text-[11px] text-slate-300 hover:text-[#F3D072] transition-colors">
              Skip to Main Content
            </a>

            {/* Text Size: A- A A+ */}
            <div className="hidden sm:flex items-center gap-1 text-[10.5px]">
              <span className="text-slate-400">Text Size:</span>
              <div className="inline-flex items-center rounded border border-slate-700 bg-[#07192C] px-0.5">
                <button
                  type="button"
                  onClick={() => handleFontSize(-1)}
                  className="px-1.5 py-0.5 text-slate-300 hover:text-[#F3D072] font-bold cursor-pointer"
                  aria-label="Decrease font size"
                >
                  A-
                </button>
                <button
                  type="button"
                  onClick={() => handleFontSize(0)}
                  className="px-1.5 py-0.5 text-slate-200 border-x border-slate-700 hover:text-[#F3D072] font-bold cursor-pointer"
                  aria-label="Reset font size"
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => handleFontSize(1)}
                  className="px-1.5 py-0.5 text-slate-300 hover:text-[#F3D072] font-bold cursor-pointer"
                  aria-label="Increase font size"
                >
                  A+
                </button>
              </div>
            </div>

            {/* Language Selector */}
            <div className="inline-flex items-center gap-1 rounded border border-slate-700 bg-[#07192C] px-2 py-0.5 text-[10.5px] font-medium text-slate-200">
              <Globe size={11} className="text-[#C89D3C]" />
              <span>English (English)</span>
              <ChevronDown size={10} className="text-slate-400" />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          TIER 2: MIDDLE BRAND & IDENTITY BAR (Crisp White, Compact Height)
          ========================================================================= */}
      <div className="w-full bg-white border-b border-slate-200/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 py-1 sm:py-1.5">
          {/* Left Brand Area: Official Logo + Divider + Portal Titles */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 pr-3 -ml-1 sm:-ml-2.5 lg:-ml-6.5">
            <Link
              href="/"
              onClick={(event) => handleNavigationClick("/", event)}
              className="flex shrink-0 items-center"
              aria-label="Bharat Startup Ventures home"
            >
              <Image
                src="/images/logo2.png"
                alt="Bharat Startup Ventures Pvt. Ltd."
                width={240}
                height={60}
                priority
                style={{ width: "auto" }}
                className="h-10 sm:h-12 md:h-14 object-contain transition-transform duration-300 hover:scale-[1.02]"
              />
            </Link>

            {/* Vertical Divider */}
            <div className="hidden sm:block h-8 sm:h-9 w-[1.5px] bg-slate-300 mx-1 lg:mx-1.5" />

            {/* Portal Title & Departmental Alignment */}
            <div className="hidden sm:flex flex-col justify-center">
              <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-tight text-[#0A2540] uppercase leading-tight">
                STARTUP &amp; MSME FACILITATION PORTAL
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight mt-0.5">
                Departmental Alignment: Business &amp; Legal Solutions Framework
              </span>
            </div>
          </div>

          {/* Right Authority Badges (Compact) + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Badge 1: Recognized Startup Ecosystem */}
            <div className="hidden md:flex items-center gap-2 rounded-sm border border-slate-200 bg-white px-2.5 py-1 shadow-2xs">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-[#C89D3C]/12 text-[#C89D3C]">
                <ShieldCheck size={17} className="text-[#C89D3C]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 leading-none">RECOGNIZED</span>
                <span className="text-[11.5px] font-bold text-[#0A2540] leading-tight mt-0.5">Startup Ecosystem</span>
              </div>
            </div>

            {/* Badge 2: Government Scheme Guidance */}
            <div className="hidden md:flex items-center gap-2 rounded-sm border border-slate-200 bg-white px-2.5 py-1 shadow-2xs">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-emerald-50 text-[#00843D] border border-emerald-200/60">
                <CheckCircle2 size={17} className="text-[#00843D]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 leading-none">GOVERNMENT</span>
                <span className="text-[11.5px] font-bold text-[#0A2540] leading-tight mt-0.5">Scheme Guidance</span>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((previous) => !previous)}
              className="lg:hidden p-1.5 rounded-sm border border-slate-200 text-[#0A2540] hover:bg-slate-50 active:scale-95 transition-all cursor-pointer shrink-0"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} className="text-[#0A2540]" /> : <Menu size={20} className="text-[#0A2540]" />}
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          TIER 3: PRIMARY HORIZONTAL NAVIGATION BAR (Navy #0A2540 + Gold Trim)
          ========================================================================= */}
      <nav className="w-full bg-[#0A2540] border-t-2 border-[#C89D3C] relative shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center">
            {/* 1. Home */}
            <Link
              href="/"
              onClick={(event) => handleNavigationClick("/", event)}
              style={{
                color: isActive("/") ? "#C89D3C" : "#FFFFFF",
                borderColor: isActive("/") ? "#C89D3C" : "transparent",
              }}
              className="flex items-center gap-1.5 px-4 py-3 text-[13.5px] font-bold transition-colors border-b-[3px] hover:!text-[#C89D3C] hover:!border-[#C89D3C]"
            >
              <Home size={16} className="shrink-0" style={{ color: isActive("/") ? "#C89D3C" : "#FFFFFF" }} />
              <span>Home</span>
            </Link>

            {/* 2. About Us */}
            <Link
              href="/about"
              onClick={(event) => handleNavigationClick("/about", event)}
              style={{
                color: isActive("/about") ? "#C89D3C" : "#FFFFFF",
                borderColor: isActive("/about") ? "#C89D3C" : "transparent",
              }}
              className="px-4 py-3 text-[13.5px] font-bold transition-colors border-b-[3px] hover:!text-[#C89D3C] hover:!border-[#C89D3C]"
            >
              <span>About Us</span>
            </Link>

            {/* 3. Our Services (Mega Dropdown) */}
            <div ref={dropdownRef} className="relative flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link
                href="/services"
                onClick={(event) => handleNavigationClick("/services", event)}
                style={{
                  color: isActive("/services") || isServicesDropdownOpen ? "#C89D3C" : "#FFFFFF",
                  borderColor: isActive("/services") || isServicesDropdownOpen ? "#C89D3C" : "transparent",
                }}
                className="flex items-center gap-1.5 px-4 py-3 text-[13.5px] font-bold transition-colors border-b-[3px] cursor-pointer hover:!text-[#C89D3C] hover:!border-[#C89D3C]"
                aria-expanded={isServicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Our Services</span>
                <ChevronDown
                  size={14}
                  style={{ color: isActive("/services") || isServicesDropdownOpen ? "#C89D3C" : "#FFFFFF" }}
                  className={`transition-transform duration-300 ${
                    isActive("/services") || isServicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>
              ...
            </div>

            {/* 4. Government Schemes */}
            <Link
              href="/government-schemes"
              onClick={(event) => handleNavigationClick("/government-schemes", event)}
              style={{
                color: isActive("/government-schemes") ? "#C89D3C" : "#FFFFFF",
                borderColor: isActive("/government-schemes") ? "#C89D3C" : "transparent",
              }}
              className="px-4 py-3 text-[13.5px] font-bold transition-colors border-b-[3px] hover:!text-[#C89D3C] hover:!border-[#C89D3C]"
            >
              <span>Government Schemes</span>
            </Link>

            {/* 5. Contact Us */}
            <Link
              href="/contact"
              onClick={(event) => handleNavigationClick("/contact", event)}
              style={{
                color: isActive("/contact") ? "#C89D3C" : "#FFFFFF",
                borderColor: isActive("/contact") ? "#C89D3C" : "transparent",
              }}
              className="px-4 py-3 text-[13.5px] font-bold transition-colors border-b-[3px] hover:!text-[#C89D3C] hover:!border-[#C89D3C]"
            >
              <span>Contact Us</span>
            </Link>
          </div>
          {/* Right CTA Button (Matching Hero Button Animation & Styling) */}
          <div className="hidden lg:flex shrink-0 py-1.5">
            <Link
              href="/contact"
              onClick={(event) => handleNavigationClick("/contact", event)}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm border border-[#C89D3C]/50 bg-[#0A2540] px-4 py-2 text-xs sm:text-[13px] font-bold text-white shadow-md shadow-[#0A2540]/25 transition-all duration-300 hover:border-[#F3D072] hover:bg-[#0A2540] hover:shadow-[0_0_20px_rgba(200,157,60,0.35)] active:scale-[0.98] before:pointer-events-none before:absolute before:inset-0 before:bg-[#C89D3C]/15 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
            >
              {/* 4 Animated Border Lines (#C89D3C Gold) */}
              <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-l from-transparent to-[#C89D3C] animate-border-top" />
              <span className="pointer-events-none absolute right-0 top-0 h-full w-[2px] bg-gradient-to-t from-transparent to-[#C89D3C] animate-border-right" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent to-[#C89D3C] animate-border-bottom" />
              <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent to-[#C89D3C] animate-border-left" />

              <span className="relative z-10 font-bold text-white">Apply / Submit Requirement</span>

              <ArrowRight
                size={14}
                className="relative z-10 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* =========================================================================
            MOBILE NAVIGATION DRAWER
            ========================================================================= */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out border-t border-slate-200/90 bg-white shadow-2xl overflow-y-auto overscroll-contain ${
            isMobileMenuOpen
              ? "max-h-[calc(100vh-140px)] opacity-100 visible py-4"
              : "max-h-0 opacity-0 invisible py-0 border-transparent pointer-events-none"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-4 sm:px-8 text-sm font-semibold text-[#0A2540]">
            {/* 1. Home */}
            <Link
              href="/"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={(event) => handleNavigationClick("/", event)}
              className={`min-h-[44px] flex items-center justify-between rounded-sm px-3.5 py-2.5 transition-colors duration-200 hover:bg-slate-50 hover:text-[#C89D3C] active:bg-slate-100 ${
                isActive("/") ? "bg-slate-50 text-[#C89D3C] font-bold" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <Home size={15} className="text-[#C89D3C]" />
                <span>Home</span>
              </div>
              <ArrowRight size={14} className={isActive("/") ? "text-[#C89D3C]" : "text-slate-400"} />
            </Link>

            {/* 2. About Us */}
            <Link
              href="/about"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={(event) => handleNavigationClick("/about", event)}
              className={`min-h-[44px] flex items-center justify-between rounded-sm px-3.5 py-2.5 transition-colors duration-200 hover:bg-slate-50 hover:text-[#C89D3C] active:bg-slate-100 ${
                isActive("/about") ? "bg-slate-50 text-[#C89D3C] font-bold" : ""
              }`}
            >
              <span>About Us</span>
              <ArrowRight size={14} className={isActive("/about") ? "text-[#C89D3C]" : "text-slate-400"} />
            </Link>

            {/* 3. Our Services (Accordion) */}
            <div className="rounded-sm overflow-hidden">
              <div
                className={`min-h-[44px] flex w-full items-center justify-between rounded-sm px-3.5 py-2.5 transition-colors duration-200 hover:bg-slate-50 hover:text-[#C89D3C] active:bg-slate-100 ${
                  isActive("/services") ? "bg-slate-50 text-[#C89D3C] font-bold" : ""
                }`}
              >
                <Link
                  href="/services"
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  onClick={(event) => handleNavigationClick("/services", event)}
                  className="flex-1 flex items-center gap-2"
                >
                  <span>Our Services</span>
                  <span className="rounded-full bg-[#C89D3C]/15 px-2 py-0.5 text-[10px] font-bold text-[#C89D3C]">6 Pillars</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen((previous) => !previous)}
                  className="p-1.5 text-[#C89D3C] hover:bg-slate-100 rounded-sm cursor-pointer"
                  aria-label="Toggle services list"
                  aria-expanded={isMobileServicesOpen}
                >
                  <ChevronDown
                    size={16}
                    className={`text-[#C89D3C] transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  isMobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="mt-1 flex flex-col gap-1.5 rounded-sm border border-slate-200/80 bg-slate-50/70 p-2 sm:p-2.5">
                    {serviceGroups.map((group) => {
                      const Icon = group.icon;
                      return (
                        <Link
                          key={group.badge}
                          href={group.href}
                          tabIndex={isMobileMenuOpen && isMobileServicesOpen ? 0 : -1}
                          onClick={(event) => handleNavigationClick(group.href, event)}
                          className="group/mobile flex items-center justify-between gap-2.5 rounded-sm border border-transparent p-2 transition-colors duration-200 hover:border-[#C89D3C]/30 hover:bg-white hover:text-[#C89D3C] active:bg-white cursor-pointer"
                        >
                          <div className="flex min-w-0 items-center gap-2.5">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-white text-[#0A2540] border border-slate-200/70 shadow-2xs">
                              <Icon size={14} className="text-[#0A2540]" />
                            </div>

                            <div className="min-w-0">
                              <span className="block text-xs font-semibold leading-snug text-slate-800 group-hover/mobile:text-[#C89D3C] truncate">
                                {group.title}
                              </span>
                              <span className="block text-[10px] text-[#C89D3C] font-medium leading-tight">{group.category}</span>
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
                      className="mt-1 flex items-center justify-between rounded-sm bg-[#0A2540]/5 p-2 text-xs font-bold text-[#0A2540] hover:bg-[#0A2540]/10 transition-colors"
                    >
                      <span>Explore All Services</span>
                      <ArrowRight size={13} className="text-[#C89D3C]" />
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
              className={`min-h-[44px] flex items-center justify-between rounded-sm px-3.5 py-2.5 transition-colors duration-200 hover:bg-slate-50 hover:text-[#C89D3C] active:bg-slate-100 ${
                isActive("/government-schemes") ? "bg-slate-50 text-[#C89D3C] font-bold" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <span>Government Schemes</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-500/20">
                  Schemes
                </span>
              </div>
              <ArrowRight size={14} className={isActive("/government-schemes") ? "text-[#C89D3C]" : "text-slate-400"} />
            </Link>

            {/* 5. Contact Us */}
            <Link
              href="/contact"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={(event) => handleNavigationClick("/contact", event)}
              className={`min-h-[44px] flex items-center justify-between rounded-sm px-3.5 py-2.5 transition-colors duration-200 hover:bg-slate-50 hover:text-[#C89D3C] active:bg-slate-100 ${
                isActive("/contact") ? "bg-slate-50 text-[#C89D3C] font-bold" : ""
              }`}
            >
              <span>Contact Us</span>
              <ArrowRight size={14} className={isActive("/contact") ? "text-[#C89D3C]" : "text-slate-400"} />
            </Link>

            {/* Mobile CTA Button with Animated Border & Glow */}
            <div className="pt-2">
              <Link
                href="/contact"
                tabIndex={isMobileMenuOpen ? 0 : -1}
                onClick={(event) => handleNavigationClick("/contact", event)}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-sm border border-[#C89D3C]/50 bg-[#0A2540] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[#0A2540]/25 transition-all duration-300 hover:border-[#F3D072] active:scale-[0.98]"
              >
                {/* 4 Animated Border Lines (#C89D3C Gold) */}
                <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-l from-transparent to-[#C89D3C] animate-border-top" />
                <span className="pointer-events-none absolute right-0 top-0 h-full w-[2px] bg-gradient-to-t from-transparent to-[#C89D3C] animate-border-right" />
                <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent to-[#C89D3C] animate-border-bottom" />
                <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent to-[#C89D3C] animate-border-left" />

                <span className="relative z-10 font-bold text-white">Apply / Submit Requirement</span>
                <ArrowRight size={14} className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Direct Quick Tap Strip (Call & Email) at bottom of drawer */}
            <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-sm bg-slate-50 text-[#0A2540] font-semibold border border-slate-200/80 active:bg-slate-100 transition-colors"
              >
                <Phone size={13} className="text-[#C89D3C]" />
                <span>Call Helpline</span>
              </a>

              <a
                href="mailto:contact@bharatstartupventures.com"
                className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-sm bg-slate-50 text-[#0A2540] font-semibold border border-slate-200/80 active:bg-slate-100 transition-colors"
              >
                <Mail size={13} className="text-[#C89D3C]" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Backdrop overlay for mobile drawer */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 top-[140px] bg-[#0A2540]/40 backdrop-blur-[2px] z-[-1] lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </nav>
    </header>
  );
}
