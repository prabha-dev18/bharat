"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Filter } from "lucide-react";
import Link from "next/link";

export default function SchemeMatcher() {
  const [businessStatus, setBusinessStatus] = useState("new");
  const [sector, setSector] = useState("startup");
  const [objective, setObjective] = useState("funding");

  // Scheme database for preliminary recommendation
  const schemeDatabase = {
    "new-startup-funding": {
      name: "Startup India Seed Fund Scheme (SISFS) & DPIIT",
      details: "Proof of concept, prototype development, product trials, and market-entry grants up to ₹20L to ₹50L.",
      link: "#scheme-4",
    },
    "new-startup-tax": {
      name: "Section 80-IAC Tax Exemption",
      details: "100% tax exemption for 3 consecutive years out of 10 years for DPIIT-recognized private limited companies.",
      link: "#scheme-4",
    },
    "new-msme-funding": {
      name: "PMEGP (Prime Minister's Employment Generation Programme)",
      details: "Credit-linked subsidy programme offering 15% to 35% margin money subsidy on project costs up to ₹50 Lakhs.",
      link: "#scheme-1",
    },
    "existing-msme-funding": {
      name: "Credit Guarantee Scheme / CGTMSE",
      details: "Collateral-free credit facility up to ₹500 Lakhs through scheduled commercial banks and financial institutions.",
      link: "#scheme-3",
    },
    "existing-manufacturing-quality": {
      name: "ZED Certification Scheme (Zero Defect Zero Effect)",
      details: "Financial support up to 80% on certification cost for Bronze, Silver, and Gold sustainable manufacturing tiers.",
      link: "#scheme-7",
    },
    "default": {
      name: "Pradhan Mantri MUDRA Yojana (PMMY) & Udyam Support",
      details: "Micro-credit support across Shishu (up to ₹50k), Kishore (up to ₹5L), and Tarun (up to ₹10L) categories.",
      link: "#scheme-2",
    },
  };

  const key = `${businessStatus}-${sector}-${objective}`;
  const matched = schemeDatabase[key] || schemeDatabase["default"];

  return (
    <section id="eligibility-matcher" className="relative py-16 bg-slate-50 border-b border-slate-200/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C58A1B]/35 bg-[#C58A1B]/10 px-3 py-1 mb-3">
            <Filter size={12} className="text-[#C58A1B]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#001A40]">
              Interactive Scheme Navigator
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001A40] mb-3">
            Which Scheme May Fit Your Business?
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Select your business criteria below to see potentially relevant central and state support programmes.
          </p>
        </div>

        {/* Interactive Filter Controls */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {/* Step 1: Business Status */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#001A40] mb-2">
                1. Business Stage
              </label>
              <select
                value={businessStatus}
                onChange={(e) => setBusinessStatus(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs font-semibold text-[#001A40] focus:border-[#C58A1B] focus:bg-white focus:outline-none"
              >
                <option value="new">New Proposed Venture</option>
                <option value="existing">Existing Operating Business</option>
              </select>
            </div>

            {/* Step 2: Industry Sector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#001A40] mb-2">
                2. Industry Sector
              </label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs font-semibold text-[#001A40] focus:border-[#C58A1B] focus:bg-white focus:outline-none"
              >
                <option value="startup">Tech &amp; Innovation Startup</option>
                <option value="msme">MSME / Trading / Service</option>
                <option value="manufacturing">Manufacturing / Industry</option>
                <option value="agri">Agriculture / Food Processing</option>
              </select>
            </div>

            {/* Step 3: Primary Objective */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#001A40] mb-2">
                3. Primary Goal
              </label>
              <select
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs font-semibold text-[#001A40] focus:border-[#C58A1B] focus:bg-white focus:outline-none"
              >
                <option value="funding">Grants &amp; Subsidies</option>
                <option value="loans">Bank Loans &amp; Credit</option>
                <option value="tax">Tax Exemptions &amp; Filing</option>
                <option value="quality">ZED / ISO Certification</option>
              </select>
            </div>
          </div>

          {/* Preliminary Recommendation Result Card */}
          <div className="rounded-2xl border border-[#C58A1B]/35 bg-gradient-to-br from-[#001A40] via-[#00245A] to-[#001026] p-5 sm:p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-2 w-2 rounded-full bg-[#00843D] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5A93C]">
                  Preliminary Recommended Programme
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                {matched.name}
              </h3>
              <p className="text-xs text-slate-300 max-w-xl">
                {matched.details}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={matched.link}
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#C58A1B] to-[#D9A12E] px-4 py-2.5 text-xs font-bold text-[#001A40] hover:brightness-110 transition-all"
              >
                <span>Read Scheme Details</span>
                <ArrowRight size={13} />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-bold text-white hover:bg-white/20 transition-all"
              >
                <span>Apply Guidance</span>
              </Link>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 text-center mt-4">
            Note: Preliminary screening does not constitute official approval. Scheme eligibility criteria must be verified against current government rules.
          </p>
        </div>
      </div>
    </section>
  );
}
