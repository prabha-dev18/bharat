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
  Building2,
  Award,
  BarChart3,
  Check,
} from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isSchemesDropdownOpen, setIsSchemesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileSchemesOpen, setIsMobileSchemesOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("bsv_lang");
      if (saved === "hi" || (document.cookie && document.cookie.includes("googtrans=/en/hi"))) {
        return "hi";
      }
    }
    return "en";
  });
  const [formattedTime, setFormattedTime] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || window.pageYOffset || 0;
      setIsScrolled(scrollPos > 110);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();
  const [clickedPath, setClickedPath] = useState(null);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const schemesDropdownRef = useRef(null);
  const schemesHoverTimeoutRef = useRef(null);
  const langDropdownRef = useRef(null);

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
      if (schemesDropdownRef.current && !schemesDropdownRef.current.contains(event.target)) {
        setIsSchemesDropdownOpen(false);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsServicesDropdownOpen(false);
        setIsSchemesDropdownOpen(false);
        setIsLangDropdownOpen(false);
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
        setIsMobileSchemesOpen(false);
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
      if (schemesHoverTimeoutRef.current) {
        clearTimeout(schemesHoverTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsSchemesDropdownOpen(false);
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 200);
  };

  const handleSchemesMouseEnter = () => {
    if (schemesHoverTimeoutRef.current) {
      clearTimeout(schemesHoverTimeoutRef.current);
    }
    setIsServicesDropdownOpen(false);
    setIsSchemesDropdownOpen(true);
  };

  const handleSchemesMouseLeave = () => {
    if (schemesHoverTimeoutRef.current) {
      clearTimeout(schemesHoverTimeoutRef.current);
    }
    schemesHoverTimeoutRef.current = setTimeout(() => {
      setIsSchemesDropdownOpen(false);
    }, 200);
  };

  const handleNavigationClick = (href, event) => {
    setIsServicesDropdownOpen(false);
    setIsSchemesDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileSchemesOpen(false);

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

  const handleLanguageSelect = (langCode) => {
    setCurrentLang(langCode);
    setIsLangDropdownOpen(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("bsv_lang", langCode);
      const cookieValue = langCode === "hi" ? "/en/hi" : "/en/en";

      // Set cookie for current domain and root path
      document.cookie = `googtrans=${cookieValue}; path=/;`;
      try {
        if (window.location.hostname && window.location.hostname !== "localhost") {
          document.cookie = `googtrans=${cookieValue}; path=/; domain=.${window.location.hostname};`;
        }
      } catch {
        // ignore cookie domain errors
      }

      window.dispatchEvent(new CustomEvent("bsv_change_language", { detail: { lang: langCode } }));

      const combo = document.querySelector(".goog-te-combo");
      if (combo) {
        combo.value = langCode;
        combo.dispatchEvent(new Event("change"));
      } else {
        setTimeout(() => {
          const retryCombo = document.querySelector(".goog-te-combo");
          if (retryCombo) {
            retryCombo.value = langCode;
            retryCombo.dispatchEvent(new Event("change"));
          } else {
            window.location.reload();
          }
        }, 150);
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

  const allServicesNav = [
    {
      title: "Business Registration & Incorporation",
      category: "Pvt Ltd, LLP, OPC & Partnerships",
      icon: Briefcase,
      href: "/services/business-registration",
    },
    {
      title: "MSME / Udyam Registration",
      category: "Official URN & Statutory Benefits",
      icon: Building2,
      href: "/services/udyam-registration",
    },
    {
      title: "Taxation & Statutory Compliance",
      category: "GST Returns, ITR, TDS & ROC Filings",
      icon: ShieldCheck,
      href: "/services/taxation-compliance",
    },
    {
      title: "Startup Funding & DPR Preparation",
      category: "Bankable DPRs, Pitch Decks & CMA Projections",
      icon: Landmark,
      href: "/services/startup-funding",
    },
    {
      title: "Licences, Certifications & IP",
      category: "FSSAI, Trade Licences, ISO & Trademarks",
      icon: FileText,
      href: "/services/licences-certifications",
    },
    {
      title: "Website & E-Commerce Development",
      category: "Modern Corporate Websites & Web Stores",
      icon: Globe,
      href: "/services/website-ecommerce",
    },
    {
      title: "Mobile Apps & Custom Software",
      category: "iOS / Android Apps & Custom Business CRM",
      icon: Cpu,
      href: "/services/mobile-software",
    },
    {
      title: "AI & Business Automation",
      category: "Intelligent Chatbots & WhatsApp Workflows",
      icon: Sparkles,
      href: "/services/ai-automation",
    },
    {
      title: "Digital Marketing, SEO & Branding",
      category: "Google SEO, Lead Campaigns & Identity",
      icon: Megaphone,
      href: "/services/digital-marketing",
    },
    {
      title: "Data Analytics & Digital Transformation",
      category: "Executive BI Dashboards & Digitization",
      icon: BarChart3,
      href: "/services/data-analytics",
    },
    {
      title: "Industry-Specific Business Support",
      category: "Advisory for Agri, Food, Mfg & Tech Units",
      icon: Sprout,
      href: "/services/industry-specific",
    },
  ];

  const allSchemesNav = [
    {
      title: "PMEGP Scheme (15-35% Subsidy)",
      category: "Margin Money Subsidy up to ₹50L",
      icon: Landmark,
      href: "/government-schemes/pmegp",
      badge: "Flagship",
    },
    {
      title: "Pradhan Mantri MUDRA Yojana",
      category: "Collateral-Free Credit up to ₹20 Lakhs",
      icon: Building2,
      href: "/government-schemes/mudra",
      badge: "Credit",
    },
    {
      title: "CGTMSE Credit Guarantee",
      category: "Collateral-Free Bank Loans up to ₹5 Crore",
      icon: ShieldCheck,
      href: "/government-schemes/cgtmse",
      badge: "Guarantee",
    },
    {
      title: "Startup India & DPIIT Recognition",
      category: "Section 80-IAC 3-Year Tax Exemption & SISFS",
      icon: Rocket,
      href: "/government-schemes/startup-india",
      badge: "Tax Exemption",
    },
    {
      title: "Udyam Registration & MSME Support",
      category: "Priority Lending & 45-Day Payment Rule",
      icon: Building2,
      href: "/government-schemes/udyam-registration",
      badge: "Statutory",
    },
    {
      title: "Government e-Marketplace (GeM)",
      category: "Direct Public Procurement & EMD Waivers",
      icon: Globe,
      href: "/government-schemes/gem-registration",
      badge: "Tenders",
    },
    {
      title: "ZED Certification Scheme",
      category: "Up to 80% Subsidy on Bronze/Silver/Gold",
      icon: Award,
      href: "/government-schemes/zed-certification",
      badge: "Quality",
    },
    {
      title: "PMFME & Agri-Infrastructure Fund",
      category: "35% Food Processing Subsidy & 3% Subvention",
      icon: Sprout,
      href: "/government-schemes/pmfme-agri",
      badge: "Agro / Food",
    },
    {
      title: "State Government Incentives",
      category: "Capital Subsidies & Stamp Duty Exemptions",
      icon: Landmark,
      href: "/government-schemes/state-incentives",
      badge: "State Level",
    },
    {
      title: "Technology & Innovation Grants",
      category: "MeitY TIDE 2.0, BIRAC & DST Non-Dilutive Grants",
      icon: Cpu,
      href: "/government-schemes/technology-grants",
      badge: "R&D Grants",
    },
    {
      title: "Import Export Code (IEC) & DGFT",
      category: "10-Digit DGFT Licence & Export Incentives",
      icon: Globe,
      href: "/government-schemes/iec-code",
      badge: "Export",
    },
    {
      title: "Licences, Certification & Sector Support",
      category: "FSSAI, Trade Licences, ISO & Labour Support",
      icon: FileText,
      href: "/government-schemes/licences-certifications",
      badge: "Compliance",
    },
  ];

  const serviceGroups = allServicesNav.slice(0, 6);

  return (
    <>
      <header className="relative z-40 w-full bg-white">
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

            {/* Language Selector (English / Hindi Full-Site Switcher) */}
            <div ref={langDropdownRef} className="relative inline-block text-left notranslate">
              <button
                type="button"
                onClick={() => setIsLangDropdownOpen((prev) => !prev)}
                aria-expanded={isLangDropdownOpen}
                aria-haspopup="true"
                className="inline-flex items-center gap-1.5 rounded border border-slate-700 bg-[#07192C] px-2 py-0.5 text-[10.5px] font-medium text-slate-200 hover:border-[#C89D3C] hover:text-[#F3D072] transition-colors cursor-pointer"
              >
                <Globe size={11} className="text-[#C89D3C]" />
                <span className="font-semibold">{currentLang === "hi" ? "हिंदी (Hindi)" : "English (English)"}</span>
                <ChevronDown
                  size={10}
                  className={`text-slate-400 transition-transform duration-200 ${
                    isLangDropdownOpen ? "rotate-180 text-[#F3D072]" : ""
                  }`}
                />
              </button>

              {/* Language Dropdown Menu */}
              {isLangDropdownOpen && (
                <div
                  className="absolute right-0 top-full mt-1 w-36 rounded-md border border-slate-700 bg-[#0A2540] py-1 shadow-xl z-50 text-xs font-sans notranslate"
                  role="menu"
                >
                  <button
                    type="button"
                    onClick={() => handleLanguageSelect("en")}
                    className={`w-full flex items-center justify-between px-3 py-1.5 text-left text-[11px] transition-colors cursor-pointer ${
                      currentLang === "en"
                        ? "bg-[#C89D3C]/20 text-[#F3D072] font-bold"
                        : "text-slate-200 hover:bg-slate-800/80 hover:text-white"
                    }`}
                    role="menuitem"
                  >
                    <span>English</span>
                    {currentLang === "en" && <Check size={12} className="text-[#F3D072]" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleLanguageSelect("hi")}
                    className={`w-full flex items-center justify-between px-3 py-1.5 text-left text-[11px] transition-colors cursor-pointer ${
                      currentLang === "hi"
                        ? "bg-[#C89D3C]/20 text-[#F3D072] font-bold"
                        : "text-slate-200 hover:bg-slate-800/80 hover:text-white"
                    }`}
                    role="menuitem"
                  >
                    <span>हिंदी (Hindi)</span>
                    {currentLang === "hi" && <Check size={12} className="text-[#F3D072]" />}
                  </button>
                </div>
              )}
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
    </header>

    {/* =========================================================================
        TIER 3: PRIMARY HORIZONTAL NAVIGATION BAR (Navy #0A2540 + Gold Trim)
        Fixed top-0 when scrolling down so ONLY this menu portion stays visible!
        ========================================================================= */}
    <nav
      className={`w-full bg-[#0A2540] border-t-2 border-[#C89D3C] transition-all duration-200 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 z-50 shadow-2xl"
          : "relative z-40 shadow-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Mobile Sticky Bar: Visible on screens < lg when scrolled */}
        <div className={`flex lg:hidden items-center justify-between w-full py-1.5 ${isScrolled ? "flex" : "hidden"}`}>
          <Link
            href="/"
            onClick={(event) => handleNavigationClick("/", event)}
            className="flex items-center"
            aria-label="Bharat Startup Ventures home"
          >
            <Image
              src="/images/logo2.png"
              alt="Bharat Startup Ventures"
              width={140}
              height={34}
              priority
              className="h-7 w-auto object-contain brightness-0 invert"
            />
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              onClick={(event) => handleNavigationClick("/contact", event)}
              className="rounded-sm border border-[#C89D3C]/60 bg-[#C89D3C]/20 px-2.5 py-1 text-[11px] font-bold text-[#F3D072] hover:bg-[#C89D3C]/30 transition-colors"
            >
              Apply
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="p-1 rounded text-white hover:text-[#F3D072] border border-white/20 active:scale-95 transition-all cursor-pointer"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

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
            <div
              ref={dropdownRef}
              className="relative flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
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
                <span
                  role="button"
                  tabIndex={0}
                  aria-label="Toggle services dropdown"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsServicesDropdownOpen((prev) => !prev);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setIsServicesDropdownOpen((prev) => !prev);
                    }
                  }}
                  className="p-0.5 cursor-pointer"
                >
                  <ChevronDown
                    size={14}
                    style={{ color: isActive("/services") || isServicesDropdownOpen ? "#C89D3C" : "#FFFFFF" }}
                    className={`transition-transform duration-300 ${
                      isActive("/services") || isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </Link>

              {/* Desktop Services Mega Menu Card */}
              {isServicesDropdownOpen && (
                <div
                  className="absolute left-0 top-full mt-0 w-[720px] max-w-[calc(100vw-40px)] rounded-sm border border-slate-200/90 bg-white p-5 shadow-2xl z-50 font-sans before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']"
                  role="menu"
                >
                  {/* Top Golden Decorative Strip */}
                  <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-[#FF9933] via-[#C89D3C] to-[#138808] rounded-t-sm" />

                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2.5 pt-1">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#0A2540]">
                        Single-Window Business &amp; IT Services
                      </span>
                      <p className="text-[11px] text-slate-500">
                        Explore dedicated service pages tailored for founders, MSMEs &amp; corporations
                      </p>
                    </div>
                    <Link
                      href="/services"
                      onClick={(e) => handleNavigationClick("/services", e)}
                      className="text-xs font-bold text-[#C89D3C] hover:underline flex items-center gap-1"
                    >
                      <span>All Services Directory</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>

                  {/* 2-column grid of all 11 services */}
                  <div className="grid grid-cols-2 gap-1.5 max-h-[380px] overflow-y-auto pr-1">
                    {allServicesNav.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={(e) => handleNavigationClick(item.href, e)}
                          className="group flex items-start gap-2.5 rounded-sm p-2 transition-colors hover:bg-slate-50 border border-transparent hover:border-slate-200/80"
                        >
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-[#0A2540]/5 text-[#0A2540] transition-colors group-hover:bg-[#0A2540] group-hover:text-[#C89D3C] mt-0.5">
                            <Icon size={14} />
                          </div>
                          <div className="min-w-0">
                            <span className="block text-xs font-bold text-[#0A2540] group-hover:text-[#C89D3C] transition-colors truncate">
                              {item.title}
                            </span>
                            <span className="block text-[10.5px] text-slate-500 truncate">
                              {item.category}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50/70 -mx-5 -mb-5 px-5 py-2.5 rounded-b-2xl">
                    <span className="text-slate-600 text-[11.5px]">
                      Need assistance choosing the right business structure or DPR?
                    </span>
                    <Link
                      href="/contact"
                      onClick={(e) => handleNavigationClick("/contact", e)}
                      className="font-bold text-[#0A2540] hover:text-[#C89D3C] flex items-center gap-1 text-[11.5px]"
                    >
                      <span>Request Free Consultation</span>
                      <ArrowRight size={12} className="text-[#C89D3C]" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Government Schemes (Mega Dropdown) */}
            <div
              ref={schemesDropdownRef}
              className="relative flex items-center"
              onMouseEnter={handleSchemesMouseEnter}
              onMouseLeave={handleSchemesMouseLeave}
            >
              <Link
                href="/government-schemes"
                onClick={(event) => handleNavigationClick("/government-schemes", event)}
                style={{
                  color: isActive("/government-schemes") || isSchemesDropdownOpen ? "#C89D3C" : "#FFFFFF",
                  borderColor: isActive("/government-schemes") || isSchemesDropdownOpen ? "#C89D3C" : "transparent",
                }}
                className="flex items-center gap-1.5 px-4 py-3 text-[13.5px] font-bold transition-colors border-b-[3px] cursor-pointer hover:!text-[#C89D3C] hover:!border-[#C89D3C]"
                aria-expanded={isSchemesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Government Schemes</span>
                <span
                  role="button"
                  tabIndex={0}
                  aria-label="Toggle government schemes dropdown"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsSchemesDropdownOpen((prev) => !prev);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setIsSchemesDropdownOpen((prev) => !prev);
                    }
                  }}
                  className="p-0.5 cursor-pointer"
                >
                  <ChevronDown
                    size={14}
                    style={{ color: isActive("/government-schemes") || isSchemesDropdownOpen ? "#C89D3C" : "#FFFFFF" }}
                    className={`transition-transform duration-300 ${
                      isActive("/government-schemes") || isSchemesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </Link>

              {/* Desktop Schemes Mega Menu Card */}
              {isSchemesDropdownOpen && (
                <div
                  className="absolute lg:-left-28 xl:left-0 top-full mt-0 w-[740px] max-w-[calc(100vw-40px)] rounded-sm border border-slate-200/90 bg-white p-5 shadow-2xl z-50 font-sans before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']"
                  role="menu"
                >
                  {/* Top Golden Decorative Strip */}
                  <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-[#FF9933] via-[#C89D3C] to-[#138808] rounded-t-sm" />

                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2.5 pt-1">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#0A2540]">
                        Central &amp; State Government Schemes
                      </span>
                      <p className="text-[11px] text-slate-500">
                        15% to 35% margin money subsidies, collateral-free credit &amp; tax holidays
                      </p>
                    </div>
                    <Link
                      href="/government-schemes"
                      onClick={(e) => handleNavigationClick("/government-schemes", e)}
                      className="text-xs font-bold text-[#C89D3C] hover:underline flex items-center gap-1"
                    >
                      <span>All 12 Schemes Directory</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>

                  {/* 2-column grid of all 12 schemes */}
                  <div className="grid grid-cols-2 gap-1.5 max-h-[380px] overflow-y-auto pr-1">
                    {allSchemesNav.map((scheme) => {
                      const Icon = scheme.icon;
                      return (
                        <Link
                          key={scheme.href}
                          href={scheme.href}
                          onClick={(e) => handleNavigationClick(scheme.href, e)}
                          className="group flex items-start gap-2.5 rounded-sm p-2 transition-colors hover:bg-slate-50 border border-transparent hover:border-slate-200/80"
                        >
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-[#00843D]/10 text-[#00843D] transition-colors group-hover:bg-[#00843D] group-hover:text-white mt-0.5">
                            <Icon size={14} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <span className="block text-xs font-bold text-[#0A2540] group-hover:text-[#C89D3C] transition-colors truncate">
                                {scheme.title}
                              </span>
                              {scheme.badge && (
                                <span className="text-[9.5px] font-bold uppercase rounded-full bg-[#C89D3C]/10 text-[#0A2540] px-1.5 py-0.2 shrink-0">
                                  {scheme.badge}
                                </span>
                              )}
                            </div>
                            <span className="block text-[10.5px] text-slate-500 truncate">
                              {scheme.category}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50/70 -mx-5 -mb-5 px-5 py-2.5 rounded-b-2xl">
                    <span className="text-slate-600 text-[11.5px]">
                      Check eligibility for PMEGP, MUDRA, CGTMSE &amp; Section 80-IAC
                    </span>
                    <Link
                      href="/government-schemes#eligibility-matcher"
                      onClick={(e) => handleNavigationClick("/government-schemes#eligibility-matcher", e)}
                      className="font-bold text-[#0A2540] hover:text-[#C89D3C] flex items-center gap-1 text-[11.5px]"
                    >
                      <span>Interactive Scheme Matcher</span>
                      <ArrowRight size={12} className="text-[#C89D3C]" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
                  <span className="rounded-full bg-[#C89D3C]/15 px-2 py-0.5 text-[10px] font-bold text-[#C89D3C]">All 11</span>
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
                  <div className="mt-1 flex flex-col gap-1 rounded-sm border border-slate-200/80 bg-slate-50/70 p-2 sm:p-2.5">
                    {allServicesNav.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          tabIndex={isMobileMenuOpen && isMobileServicesOpen ? 0 : -1}
                          onClick={(event) => handleNavigationClick(service.href, event)}
                          className="group/mobile flex items-center justify-between gap-2.5 rounded-sm border border-transparent p-2 transition-colors duration-200 hover:border-[#C89D3C]/30 hover:bg-white hover:text-[#C89D3C] active:bg-white cursor-pointer"
                        >
                          <div className="flex min-w-0 items-center gap-2.5">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-white text-[#0A2540] border border-slate-200/70 shadow-2xs">
                              <Icon size={13} className="text-[#0A2540]" />
                            </div>

                            <div className="min-w-0">
                              <span className="block text-xs font-semibold leading-snug text-slate-800 group-hover/mobile:text-[#C89D3C] truncate">
                                {service.title}
                              </span>
                              <span className="block text-[10px] text-[#C89D3C] font-medium leading-tight">{service.category}</span>
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
                      <span>Explore All 11 Services Catalogue</span>
                      <ArrowRight size={13} className="text-[#C89D3C]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Government Schemes (Accordion) */}
            <div className="rounded-sm overflow-hidden">
              <div
                className={`min-h-[44px] flex w-full items-center justify-between rounded-sm px-3.5 py-2.5 transition-colors duration-200 hover:bg-slate-50 hover:text-[#C89D3C] active:bg-slate-100 ${
                  isActive("/government-schemes") ? "bg-slate-50 text-[#C89D3C] font-bold" : ""
                }`}
              >
                <Link
                  href="/government-schemes"
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  onClick={(event) => handleNavigationClick("/government-schemes", event)}
                  className="flex-1 flex items-center gap-2"
                >
                  <span>Government Schemes</span>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-500/20">
                    All 12
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsMobileSchemesOpen((previous) => !previous)}
                  className="p-1.5 text-[#C89D3C] hover:bg-slate-100 rounded-sm cursor-pointer"
                  aria-label="Toggle schemes list"
                  aria-expanded={isMobileSchemesOpen}
                >
                  <ChevronDown
                    size={16}
                    className={`text-[#C89D3C] transition-transform duration-300 ${isMobileSchemesOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  isMobileSchemesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="mt-1 flex flex-col gap-1 rounded-sm border border-slate-200/80 bg-slate-50/70 p-2 sm:p-2.5">
                    {allSchemesNav.map((scheme) => {
                      const Icon = scheme.icon;
                      return (
                        <Link
                          key={scheme.href}
                          href={scheme.href}
                          tabIndex={isMobileMenuOpen && isMobileSchemesOpen ? 0 : -1}
                          onClick={(event) => handleNavigationClick(scheme.href, event)}
                          className="group/mobile flex items-center justify-between gap-2.5 rounded-sm border border-transparent p-2 transition-colors duration-200 hover:border-[#C89D3C]/30 hover:bg-white hover:text-[#C89D3C] active:bg-white cursor-pointer"
                        >
                          <div className="flex min-w-0 items-center gap-2.5">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-white text-[#00843D] border border-slate-200/70 shadow-2xs">
                              <Icon size={13} className="text-[#00843D]" />
                            </div>

                            <div className="min-w-0">
                              <span className="block text-xs font-semibold leading-snug text-slate-800 group-hover/mobile:text-[#C89D3C] truncate">
                                {scheme.title}
                              </span>
                              <span className="block text-[10px] text-[#C89D3C] font-medium leading-tight">{scheme.category}</span>
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
                      href="/government-schemes"
                      tabIndex={isMobileMenuOpen && isMobileSchemesOpen ? 0 : -1}
                      onClick={(event) => handleNavigationClick("/government-schemes", event)}
                      className="mt-1 flex items-center justify-between rounded-sm bg-[#0A2540]/5 p-2 text-xs font-bold text-[#0A2540] hover:bg-[#0A2540]/10 transition-colors"
                    >
                      <span>Explore All 12 Government Schemes</span>
                      <ArrowRight size={13} className="text-[#C89D3C]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

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
                href="mailto:info@bharatstartup.com"
                className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-sm bg-slate-50 text-[#0A2540] font-semibold border border-slate-200/80 active:bg-slate-100 transition-colors"
              >
                <Mail size={13} className="text-[#C89D3C]" />
                <span>Send Email</span>
              </a>
            </div>

            {/* Mobile Language Switcher (English / Hindi) */}
            <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs px-1 notranslate">
              <span className="text-slate-500 font-medium flex items-center gap-1.5">
                <Globe size={13} className="text-[#C89D3C]" />
                Language / भाषा:
              </span>
              <div className="inline-flex rounded border border-slate-300 overflow-hidden text-xs">
                <button
                  type="button"
                  onClick={() => handleLanguageSelect("en")}
                  className={`px-3 py-1 font-semibold transition-colors cursor-pointer ${
                    currentLang === "en" ? "bg-[#0A2540] text-[#F3D072]" : "bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => handleLanguageSelect("hi")}
                  className={`px-3 py-1 font-semibold transition-colors border-l border-slate-300 cursor-pointer ${
                    currentLang === "hi" ? "bg-[#0A2540] text-[#F3D072]" : "bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  हिंदी
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Backdrop overlay for mobile drawer */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 top-[52px] bg-[#0A2540]/50 backdrop-blur-[2px] z-[-1] lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </nav>

      {/* Layout Spacer when nav is fixed on desktop to prevent content jump */}
      {isScrolled && <div className="hidden lg:block h-[47px] w-full" aria-hidden="true" />}
    </>
  );
}
