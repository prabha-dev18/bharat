"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Rocket,
  Landmark,
  ShieldCheck,
  Building2,
  ShoppingCart,
  Award,
  Sprout,
  Compass,
  Cpu,
  Globe,
  FileCheck2,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Layers,
  Phone,
  Sparkles,
} from "lucide-react";

export default function SchemesList() {
  const [activeSchemeIndex, setActiveSchemeIndex] = useState(0);

  const schemes = [
    {
      id: "scheme-1",
      slug: "pmegp",
      number: "01",
      title: "Prime Minister's Employment Generation Programme (PMEGP)",
      shortTitle: "PMEGP Scheme",
      category: "15%–35% Margin Money Subsidy",
      description:
        "PMEGP is a major credit-linked subsidy programme intended to support eligible new micro-enterprises across manufacturing and service sectors, subject to current scheme rules.",
      icon: Landmark,
      badge: "Flagship Subsidy",
      parameters: "Manufacturing up to ₹50L | Service up to ₹20L",
      assist: [
        "Preliminary eligibility and project requirement review",
        "Detailed Project Report (DPR) preparation assistance",
        "Business and financial document checklist organization",
        "Guidance on the application process and applicable margin-money subsidy provisions (15% to 35%)",
      ],
    },
    {
      id: "scheme-2",
      slug: "mudra",
      number: "02",
      title: "Pradhan Mantri MUDRA Yojana (PMMY)",
      shortTitle: "MUDRA Yojana",
      category: "Collateral-Free Credit up to ₹20 Lakhs",
      description:
        "MUDRA-related lending supports non-corporate, non-farm small/micro enterprises through participating commercial banks, RRBs, and NBFCs across Shishu, Kishore, and Tarun categories.",
      icon: Building2,
      badge: "Micro Credit",
      parameters: "Shishu (₹50k), Kishore (₹5L), Tarun (₹20L)",
      assist: [
        "Review of business financing requirements and viability",
        "Guidance on applicable loan categories and lender documentation requirements",
        "Preparation of business and financial documentation",
        "Application process coordination and follow-up guidance",
      ],
    },
    {
      id: "scheme-3",
      slug: "cgtmse",
      number: "03",
      title: "Credit Guarantee Scheme / CGTMSE",
      shortTitle: "CGTMSE Scheme",
      category: "Credit Guarantee Cover up to ₹5 Crore",
      description:
        "Credit guarantee arrangements help eligible micro and small enterprises access collateral-free credit through participating lenders under applicable scheme rules. A guarantee is not the same as a direct grant.",
      icon: ShieldCheck,
      badge: "Credit Guarantee",
      parameters: "Up to 85% Guarantee Cover | No Collateral",
      assist: [
        "Preliminary business and funding requirement review",
        "Explanation of lender and guarantee-related documentation",
        "Financial projections, CMA banking data, and business document preparation",
        "Coordination support during the bank application process",
      ],
    },
    {
      id: "scheme-4",
      slug: "startup-india",
      number: "04",
      title: "Startup India and DPIIT Recognition",
      shortTitle: "Startup India & DPIIT",
      category: "Section 80-IAC 3-Year Tax Exemption & Seed Fund",
      description:
        "Eligible innovative startups may explore recognition under the Startup India framework to access benefits including Section 80-IAC tax exemption, self-certification, and Startup India Seed Fund eligibility.",
      icon: Rocket,
      badge: "Tax Exemption",
      parameters: "3-Year Tax Holiday | SISFS Grants up to ₹50L",
      assist: [
        "Preliminary recognition eligibility review against DPIIT guidelines",
        "DPIIT recognition application assistance on the national portal",
        "Business pitch profile and supporting innovation document preparation",
        "Guidance on relevant startup programmes, patent rebates, and seed fund applications",
      ],
    },
    {
      id: "scheme-5",
      slug: "udyam-registration",
      number: "05",
      title: "Udyam Registration and MSME Support",
      shortTitle: "Udyam Registration",
      category: "Official URN & MSMED Statutory Benefits",
      description:
        "Eligible enterprises can explore Udyam registration to access statutory MSME benefits, delayed payment protection under MSMED Act, priority lending, and government portal access.",
      icon: Building2,
      badge: "Statutory MSME",
      parameters: "Permanent URN | 45-Day Payment Recovery",
      assist: [
        "Udyam registration guidance and category determination (Micro, Small, Medium)",
        "Enterprise information, NIC codes, and document preparation",
        "Explanation of potentially relevant MSME schemes and interest subvention",
        "Assistance with related statutory business documentation",
      ],
    },
    {
      id: "scheme-6",
      slug: "gem-registration",
      number: "06",
      title: "Government e-Marketplace (GeM)",
      shortTitle: "GeM Portal",
      category: "Public Procurement & Tender Exemptions",
      description:
        "Eligible businesses may explore seller registration and opportunities to offer products or services directly to government departments, ministries, and PSUs through the GeM portal.",
      icon: ShoppingCart,
      badge: "Public Tenders",
      parameters: "Zero EMD for MSMEs | ₹4+ Lakh Cr Annual Market",
      assist: [
        "GeM seller registration guidance and primary user verification",
        "Business profile, brand approval, and product/service catalogue preparation",
        "Product or service listing support and OEM compliance",
        "Tender, bid documentation, and direct purchase assistance",
      ],
    },
    {
      id: "scheme-7",
      slug: "zed-certification",
      number: "07",
      title: "ZED Certification Scheme (Zero Defect Zero Effect)",
      shortTitle: "ZED Certification",
      category: "Up to 80% Subsidy on Bronze/Silver/Gold",
      description:
        "Eligible MSMEs may explore the Zero Defect Zero Effect certification framework to strengthen quality practices, reduce waste, enhance productivity, and adopt environmentally responsible manufacturing.",
      icon: Award,
      badge: "Green Quality",
      parameters: "Bronze, Silver, Gold | Up to 80% Govt Subsidy",
      assist: [
        "Preliminary eligibility and factory readiness review",
        "Certification process guidance across Bronze, Silver, and Gold tiers",
        "Documentation assistance and quality audit compliance checklists",
        "Guidance on applicable subsidy support (up to 80%) under current programme rules",
      ],
    },
    {
      id: "scheme-8",
      slug: "pmfme-agri",
      number: "08",
      title: "Agriculture, Food Processing and Livestock Programmes",
      shortTitle: "PMFME & AIF Agri",
      category: "35% Food Processing Subsidy & 3% Interest Subvention",
      description:
        "Agribusiness, food-processing, dairy and livestock enterprises may be eligible for central programmes including PMFME, Agriculture Infrastructure Fund (AIF), and cold-chain subsidies.",
      icon: Sprout,
      badge: "Agro / Food",
      parameters: "35% Subsidy (Max ₹10L) | 3% AIF Subvention",
      assist: [
        "Relevant central and state agricultural scheme research",
        "Preliminary project eligibility and capital outlay review",
        "Detailed Project Report (DPR) and bank documentation assistance",
        "Application process guidance and subsidy claim coordination",
      ],
    },
    {
      id: "scheme-9",
      slug: "state-incentives",
      number: "09",
      title: "State Government Incentives & Industrial Policies",
      shortTitle: "State Incentives",
      category: "Capital Subsidies & Stamp Duty Exemptions",
      description:
        "State governments offer localized capital subsidies, stamp duty exemptions, electricity duty rebates, and employment generation incentives for eligible manufacturing and IT projects.",
      icon: Compass,
      badge: "State Level",
      parameters: "10% to 25% Capital Subsidy | SGST Reimbursement",
      assist: [
        "Research into potentially relevant state industrial development programmes",
        "Preliminary eligibility review based on location, sector, and investment tier",
        "Documentation and application guidance for State Single Window Portals",
        "Coordination support for applicable departmental procedures",
      ],
    },
    {
      id: "scheme-10",
      slug: "technology-grants",
      number: "10",
      title: "Technology, Innovation and Startup Support",
      shortTitle: "Tech Innovation Grants",
      category: "Non-Dilutive Grants up to ₹50 Lakhs",
      description:
        "Eligible technology-driven businesses may explore grant-in-aid and incubation programmes offered by government bodies (MeitY, BIRAC, DST, TIDE 2.0) and authorized innovation partners.",
      icon: Cpu,
      badge: "R&D Grants",
      parameters: "Zero Equity Dilution | MeitY, BIRAC & DST",
      assist: [
        "Identification of potentially relevant innovation and technology grant programmes",
        "Startup profile, technical proposal, and pitch deck documentation",
        "Application preparation guidance and milestone roadmap definition",
        "Guidance on approaching recognized incubators or research institutions",
      ],
    },
    {
      id: "scheme-11",
      slug: "iec-code",
      number: "11",
      title: "Import Export Code (IEC) and Export Readiness",
      shortTitle: "IEC & Export Promotion",
      category: "10-Digit DGFT Licence & Export Incentives",
      description:
        "Businesses planning cross-border trade must obtain an Import Export Code from DGFT and understand applicable international trade regulations, customs compliance, and export incentives.",
      icon: Globe,
      badge: "Foreign Trade",
      parameters: "Lifetime DGFT Code | RoDTEP & EPCG Linkage",
      assist: [
        "IEC online application guidance on the DGFT portal",
        "Import-export statutory documentation checklist",
        "Export readiness review, RCMC registration, and logistics orientation",
        "Research into relevant export promotion schemes (RoDTEP, EPCG)",
      ],
    },
    {
      id: "scheme-12",
      slug: "licences-certifications",
      number: "12",
      title: "Licences, Certification and Sector-Specific Support",
      shortTitle: "Licences & Certification",
      category: "FSSAI, Trade Licences, ISO & Labour Support",
      description:
        "Enterprises require specific mandatory registrations and operational licences before commencing business operations or becoming eligible for particular government schemes.",
      icon: FileCheck2,
      badge: "Regulatory",
      parameters: "Municipal, FSSAI & Quality Certifications",
      assist: [
        "Initial review of mandatory regulatory requirements for your sector",
        "FSSAI food licences, trade licences, and labour compliance support",
        "Certification process coordination (ISO, Trademark, Patent readiness)",
        "Guidance on relevant official government application channels",
      ],
    },
  ];

  const activeScheme = schemes[activeSchemeIndex] || schemes[0];
  const ActiveIcon = activeScheme.icon;

  return (
    <section className="relative py-12 sm:py-16 bg-[#FAF9F5] border-b border-slate-200/80 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header matching Home Page Typography */}
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
          <div className="mb-3.5 inline-flex">
            <span className="rounded-sm border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase">
              GOVERNMENT INITIATIVES
            </span>
          </div>

          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-[34px] mb-2">
            Central &amp; State Schemes Directory
          </h2>

          <div className="mt-3.5 h-1 w-16 rounded-full bg-[#C89D3C] mx-auto" />

          <p className="mt-4 max-w-2xl text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px] sm:leading-[1.8] mx-auto">
            Select an initiative from the official portal sidebar to review guidelines, subsidy rates, and dedicated application guides.
          </p>
        </div>

        {/* Mobile Dropdown Navigator (No Long Scroll on Mobile!) */}
        <div className="lg:hidden mb-6">
          <label htmlFor="scheme-mobile-select" className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-2">
            Select Scheme ({schemes.length} Available):
          </label>
          <div className="relative">
            <select
              id="scheme-mobile-select"
              value={activeSchemeIndex}
              onChange={(e) => setActiveSchemeIndex(Number(e.target.value))}
              className="w-full appearance-none rounded-sm border-2 border-[#0A2540] bg-white px-4 py-3 text-xs font-bold text-[#0A2540] shadow-sm focus:border-[#C89D3C] focus:outline-none"
            >
              {schemes.map((s, idx) => (
                <option key={s.id} value={idx}>
                  {s.number}. {s.title}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#0A2540]">
              <ChevronRight size={16} className="rotate-90" />
            </div>
          </div>
        </div>

        {/* Government Portal 2-Column Sidebar + Content Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* ===================================================================
              LEFT SIDEBAR: Sticky Government Schemes List
              =================================================================== */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28">
            <div className="rounded-sm border border-slate-200 bg-white p-3 shadow-md">
              <div className="flex items-center justify-between px-3 py-2.5 border-b border-slate-100 mb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0A2540] flex items-center gap-1.5">
                  <Layers size={14} className="text-[#C89D3C]" />
                  Schemes Navigator
                </span>
                <span className="text-[10px] font-mono font-bold text-[#C89D3C] bg-[#C89D3C]/10 px-2 py-0.5 rounded-full">
                  12 Schemes
                </span>
              </div>

              {/* Vertical Directory Tabs */}
              <div className="space-y-1 max-h-[560px] overflow-y-auto pr-1">
                {schemes.map((scheme, idx) => {
                  const Icon = scheme.icon;
                  const isActive = activeSchemeIndex === idx;
                  return (
                    <button
                      key={scheme.id}
                      type="button"
                      onClick={() => setActiveSchemeIndex(idx)}
                      className={`w-full text-left flex items-center justify-between gap-2.5 rounded-sm px-3 py-2.5 text-xs transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#0A2540] text-white shadow-sm font-bold"
                          : "text-slate-700 hover:bg-slate-100 font-medium"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`font-mono text-[11px] font-bold shrink-0 ${
                            isActive ? "text-[#F3D072]" : "text-slate-400"
                          }`}
                        >
                          {scheme.number}
                        </span>
                        <Icon
                          size={15}
                          className={`shrink-0 ${
                            isActive ? "text-[#C89D3C]" : "text-[#0A2540]"
                          }`}
                        />
                        <span className="truncate text-xs">{scheme.shortTitle || scheme.title}</span>
                      </div>
                      <ChevronRight
                        size={14}
                        className={`shrink-0 transition-transform ${
                          isActive ? "text-[#C89D3C] translate-x-0.5" : "text-slate-300"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ===================================================================
              RIGHT CONTENT PANEL: Active Selected Scheme Showcase
              =================================================================== */}
          <div className="lg:col-span-8">
            <div className="rounded-sm border border-slate-200 bg-white p-6 sm:p-8 lg:p-9 shadow-md transition-all">
              {/* Top Header Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#00843D] text-white shadow-sm">
                    <ActiveIcon size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C89D3C]">
                      SCHEME {activeScheme.number} OF 12
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0A2540] leading-tight">
                      {activeScheme.title}
                    </h3>
                  </div>
                </div>

                <span className="rounded-full bg-[#C89D3C]/10 text-[#0A2540] text-xs font-bold px-3 py-1 border border-[#C89D3C]/30">
                  {activeScheme.badge}
                </span>
              </div>

              {/* Tagline & Parameters Pill */}
              <div className="mb-6">
                <div className="inline-block rounded-sm bg-slate-50 border border-slate-200 px-3.5 py-1.5 text-xs font-semibold text-[#0A2540] mb-3">
                  <span className="text-[#C89D3C] font-bold">Key Limits: </span>
                  {activeScheme.parameters}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeScheme.description}
                </p>
              </div>

              {/* Scope of Assistance */}
              <div className="mb-8">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-3.5">
                  How Bharat Startup Ventures Can Assist:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 py-1">
                  {activeScheme.assist.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-2.5 py-1.5 transition-colors"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#00843D] border border-emerald-200 mt-0.5">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-xs sm:text-[13px] font-medium text-slate-800 leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Direct Slug Page + Eligibility Check */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/government-schemes/${activeScheme.slug}`}
                  className="group inline-flex items-center justify-center gap-2 rounded-sm bg-[#0A2540] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#12365c] hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Open Dedicated Scheme Page &amp; Subsidy Guide</span>
                  <ArrowRight size={15} className="text-[#C89D3C] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href={`/contact?subject=${encodeURIComponent(activeScheme.title)}`}
                  className="inline-flex items-center gap-2 rounded-sm border border-slate-300 bg-white px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#0A2540] hover:border-[#C89D3C] hover:bg-slate-50 transition-colors"
                >
                  <Phone size={14} className="text-[#00843D]" />
                  <span>Check Eligibility</span>
                </Link>
              </div>

              {/* Regulatory Footer */}
              <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Direct application guidance &amp; bankable DPR preparation</span>
                <span className="font-semibold text-[#00843D]">Verified Guidelines</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
