"use client";

import { useState } from "react";
import { FileCheck, ShieldCheck, CheckCircle2, AlertCircle, ChevronRight, FolderCheck } from "lucide-react";

export default function DetailDocuments({ item }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!item) return null;

  const defaultDocuments = [
    {
      category: "Promoter & Identity KYC",
      short: "Identity KYC",
      docs: [
        "Aadhaar Card of all Directors / Partners / Proprietor",
        "PAN Card of all Promoters & Business Entity",
        "Passport size photographs of authorized signatories",
        "Voter ID / Driving License / Passport (secondary ID)",
      ],
    },
    {
      category: "Business & Registered Office Proof",
      short: "Office Proof",
      docs: [
        "Certificate of Incorporation / Partnership Deed / Trust Deed",
        "Current Electricity Bill or Property Tax Receipt (not older than 2 months)",
        "Rent Agreement & No Objection Certificate (NOC) from landlord",
        "Active GSTIN and existing statutory licences (if applicable)",
      ],
    },
    {
      category: "Banking & Financial Records",
      short: "Bank Records",
      docs: [
        "Last 6 to 12 months updated Bank Account Statements",
        "Income Tax Returns (ITR) of entity & promoters for last 2–3 years",
        "Audited Balance Sheets and Profit & Loss accounts (for existing firms)",
        "Provisional balance sheet and projected sales estimates",
      ],
    },
    {
      category: "Project & Quotation Documents",
      short: "Quotations",
      docs: [
        "Detailed machinery quotations and equipment technical specs",
        "Civil construction estimates from chartered engineers (if applicable)",
        "Raw material supplier details and working capital breakdown",
        "Existing Udyam Registration certificate (URN)",
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
          <div className="mb-3 inline-flex">
            <span className="rounded-full border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase">
              DOCUMENTATION CHECKLIST
            </span>
          </div>

          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-4xl mb-2">
            Required Documents for {item.title}
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-[#C89D3C] mx-auto" />

          <p className="mt-3.5 max-w-2xl text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px] sm:leading-[1.7] mx-auto">
            Prepare these essential records for swift verification, compliant DPR drafting, and error-free portal submission.
          </p>
        </div>

        {/* Tabbed Docket Navigation (Replaces 4 square box cards!) */}
        <div className="max-w-4xl mx-auto">
          {/* Horizontal Pill Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {defaultDocuments.map((group, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === idx
                    ? "bg-[#0A2540] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <span className="font-mono text-[11px] opacity-75">0{idx + 1}.</span>
                <span>{group.category}</span>
              </button>
            ))}
          </div>

          {/* Active Docket Document Panel */}
          <div className="rounded-sm border border-slate-200/90 bg-slate-50/70 p-5 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#0A2540] text-[#C89D3C]">
                  <FolderCheck size={18} />
                </div>
                <div>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-[#0A2540]">
                    {defaultDocuments[activeTab].category}
                  </h3>
                  <span className="text-[11px] text-slate-500">Official statutory verification standard</span>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <ShieldCheck size={13} className="text-[#00843D]" />
                <span>100% Confidential</span>
              </span>
            </div>

            {/* 2-Column Document Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {defaultDocuments[activeTab].docs.map((doc, docIdx) => (
                <div key={docIdx} className="flex items-start gap-2.5 p-3 rounded-sm bg-white border border-slate-100">
                  <CheckCircle2 size={15} className="text-[#00843D] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-[13px] text-slate-800 leading-snug font-medium">
                    {doc}
                  </span>
                </div>
              ))}
            </div>

            {/* Advisory Note */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
              <AlertCircle size={15} className="text-[#C89D3C] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#0A2540]">Need assistance with missing documents? </strong>
                Our advisory team assists with obtaining Digital Signatures (DSC), Udyam registration, Chartered Engineer certificates, and preparing bank-compliant projected financial statements.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
