"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Scale,
} from "lucide-react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "",
    serviceRequired: "Business Registration & Startup Support",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const serviceOptions = [
    "Business Registration & Startup Support",
    "Taxation & Compliance",
    "Funding & Financial Assistance",
    "Government Schemes, Grants & Subsidies",
    "Licences & Certifications",
    "Website & E-commerce Development",
    "Mobile Applications & Custom Software",
    "AI & Business Automation",
    "Digital Marketing & Branding",
    "Data Analytics & Digital Transformation",
    "Industry-Specific Business Support",
    "Other Enquiry",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="enquiry-form" className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF9F5] font-sans border-b border-slate-200/80 overflow-hidden">
      {/* Background Micro-Dot Security Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#0A2540_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================================
            SECTION HEADER - IDENTICAL HOME & ABOUT PAGE COMPONENT PATTERN
            ===================================================================== */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow Badge */}
          <div className="mb-3.5 inline-flex items-center gap-1.5">
            <span className="rounded-sm border border-[#D5E2F0] bg-white px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase shadow-2xs">
              Official Communication Portal
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-[34px] leading-tight">
            Initiate Official{" "}
            <span className="bg-gradient-to-r from-[#C89D3C] via-[#C89D3C] to-[#F3D072] bg-clip-text text-transparent">
              Business Enquiry
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-base sm:text-lg font-semibold text-[#0A2540]">
            Single-Window Registration, Compliance &amp; Technology Consultation
          </p>

          {/* Centered Gold Accent Line */}
          <div className="my-3.5 h-1 w-16 rounded-full bg-[#C89D3C]" />

          {/* Supporting Narrative */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
            Submit your venture details, statutory queries, or technical requirements below. Our single-window desk reviews all submissions under institutional due diligence standards.
          </p>
        </div>

        {/* =====================================================================
            MAIN CONTENT GRID: INSTITUTIONAL FORM & SECRETARIAT DESK
            ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Form: Official Institutional Docket (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-sm border border-slate-300/85 bg-white p-6 sm:p-8 shadow-xs">
              {/* Form Docket Header */}
              <div className="flex items-center justify-between border-b border-slate-200/90 pb-3.5 mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#00843D]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A2540]">
                    Statutory Facilitation Docket
                  </span>
                </div>
                <span className="font-mono text-[10.5px] font-bold text-[#C89D3C]">
                  REF: BSV/ENQ-2026
                </span>
              </div>

              {submitted ? (
                <div className="rounded-sm border border-emerald-200 bg-emerald-50/70 p-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00843D] text-white mx-auto mb-4 shadow-2xs">
                    <CheckCircle2 size={24} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0A2540] mb-2">
                    Enquiry Logged Successfully
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-[#0A2540]">{formData.fullName}</strong>. Your enquiry regarding <strong className="text-[#0A2540]">{formData.serviceRequired}</strong> has been assigned to our consulting desk. An advisor will reach out within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        companyName: "",
                        email: "",
                        phone: "",
                        industry: "",
                        serviceRequired: "Business Registration & Startup Support",
                        description: "",
                      });
                    }}
                    className="inline-flex items-center justify-center rounded-sm bg-[#0A2540] px-5 py-2.5 text-xs font-semibold text-white shadow-2xs hover:bg-[#0A2540] transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1.5">
                        Full Name <span className="text-[#C89D3C]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full rounded-sm border border-slate-300 bg-[#FAF9F5]/70 px-3.5 py-2.5 text-xs text-[#0A2540] font-medium placeholder-slate-400 focus:border-[#C89D3C] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Company / Organization Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1.5">
                        Company or Venture Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Bharat Tech Pvt Ltd"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full rounded-sm border border-slate-300 bg-[#FAF9F5]/70 px-3.5 py-2.5 text-xs text-[#0A2540] font-medium placeholder-slate-400 focus:border-[#C89D3C] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1.5">
                        Official Email Address <span className="text-[#C89D3C]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="abc@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-sm border border-slate-300 bg-[#FAF9F5]/70 px-3.5 py-2.5 text-xs text-[#0A2540] font-medium placeholder-slate-400 focus:border-[#C89D3C] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1.5">
                        Phone Number <span className="text-[#C89D3C]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-sm border border-slate-300 bg-[#FAF9F5]/70 px-3.5 py-2.5 text-xs text-[#0A2540] font-medium placeholder-slate-400 focus:border-[#C89D3C] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Industry */}
                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1.5">
                        Industry / Domain
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. IT, Manufacturing, Agribusiness"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full rounded-sm border border-slate-300 bg-[#FAF9F5]/70 px-3.5 py-2.5 text-xs text-[#0A2540] font-medium placeholder-slate-400 focus:border-[#C89D3C] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Service Required Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1.5">
                        Service Category <span className="text-[#C89D3C]">*</span>
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full rounded-sm border border-slate-300 bg-[#FAF9F5]/70 px-3 py-2.5 text-xs font-medium text-[#0A2540] focus:border-[#C89D3C] focus:bg-white focus:outline-none transition-colors"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Requirement Description */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1.5">
                      Scope &amp; Requirement Details <span className="text-[#C89D3C]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please summarize your current enterprise situation, required government scheme/statutory services, or software development scope..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full rounded-sm border border-slate-300 bg-[#FAF9F5]/70 p-3 text-xs text-[#0A2540] font-medium placeholder-slate-400 focus:border-[#C89D3C] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Submit Button with Animated Gold Border matching Hero.jsx */}
                  <div className="pt-0">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative inline-flex w-full min-h-11 items-center justify-center gap-2 overflow-hidden rounded-sm bg-[#0A2540] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 disabled:opacity-75 cursor-pointer"
                    >
                      <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-full animate-border-top bg-gradient-to-l from-transparent to-[#C89D3C]" />
                      <span className="pointer-events-none absolute right-0 top-0 h-full w-[2px] animate-border-right bg-gradient-to-t from-transparent to-[#C89D3C]" />
                      <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full animate-border-bottom bg-gradient-to-r from-transparent to-[#C89D3C]" />
                      <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] animate-border-left bg-gradient-to-b from-transparent to-[#C89D3C]" />

                      <Send size={15} className="relative z-10 text-[#C89D3C] transition-transform duration-300 group-hover:translate-x-1" />
                      <span className="relative z-10 font-bold">
                        {loading ? "Transmitting Docket to Advisory Desk..." : "Submit Official Enquiry"}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Secretariat Information Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Secretariat Information Docket */}
            <div className="relative overflow-hidden rounded-sm border border-[#E5D7B7] bg-[#FAF7F0] p-6 sm:p-7 shadow-xs text-left">
              {/* Dharma Chakra Watermark */}
              <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-10 h-44 w-44 opacity-[0.06] select-none">
                <svg viewBox="0 0 100 100" fill="none" className="text-[#C89D3C] w-full h-full">
                  <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2.5" />
                  {Array.from({ length: 24 }).map((_, i) => (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2="50"
                      y2="4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      transform={`rotate(${i * 15} 50 50)`}
                    />
                  ))}
                </svg>
              </div>

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-[#E5D7B7] pb-3 mb-5">
                <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#0A2540]">
                  Central Secretariat &amp; Advisory Desk
                </span>
                <span className="rounded bg-[#C89D3C]/15 px-2 py-0.5 text-[9.5px] font-bold text-[#C89D3C]">
                  EST. 2026
                </span>
              </div>

              {/* Details List */}
              <div className="relative z-10 space-y-4 text-xs">
                {/* Legal Name */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0A192F] text-[#F3D072] shadow-2xs mt-0.5">
                    <Building2 size={16} strokeWidth={1.8} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Legal Corporate Entity</span>
                    <p className="font-bold text-[#0A2540] text-[13.5px]">Bharat Startup Ventures Pvt. Ltd.</p>
                  </div>
                </div>

                {/* Direct Helpline */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0A192F] text-[#F3D072] shadow-2xs mt-0.5">
                    <Phone size={16} strokeWidth={1.8} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Official Facilitation Helpline</span>
                    <a href="tel:+919876543210" className="block font-bold text-[#0A2540] text-[13.5px] hover:text-[#C89D3C] transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0A192F] text-[#F3D072] shadow-2xs mt-0.5">
                    <Mail size={16} strokeWidth={1.8} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Corporate Enquiries Email</span>
                    <a href="mailto:contact@bharatstartupventures.com" className="block font-bold text-[#0A2540] text-xs hover:text-[#C89D3C] transition-colors break-all">
                      contact@bharatstartupventures.com
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0A192F] text-[#F3D072] shadow-2xs mt-0.5">
                    <Clock size={16} strokeWidth={1.8} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Statutory Working Hours</span>
                    <p className="font-medium text-slate-700">Mon – Sat: 9:30 AM to 6:30 PM (IST)</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0A192F] text-[#F3D072] shadow-2xs mt-0.5">
                    <MapPin size={16} strokeWidth={1.8} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Registered Office</span>
                    <p className="font-medium text-slate-700">New Delhi, India (Pan-India Operational Mandate)</p>
                  </div>
                </div>
              </div>

              {/* Bottom Authority Seal */}
              <div className="relative z-10 mt-6 pt-3.5 border-t border-[#E5D7B7] flex items-center justify-between text-[10.5px] font-medium text-slate-500">
                <span>Pan-India Coverage</span>
                <span className="font-bold text-[#00843D] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00843D]" />
                  Active National Desk
                </span>
              </div>
            </div>

            {/* Statutory Compliance Seal */}
            <div className="rounded-sm border border-slate-300/80 bg-white p-4.5 flex items-start gap-3 shadow-2xs text-left">
              <ShieldCheck size={20} className="text-[#00843D] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#0A2540]">Confidential Advisory Protocol</h4>
                <p className="text-[11.5px] text-slate-600 leading-relaxed mt-0.5">
                  All enterprise documents, proprietary specifications, and financial disclosures are strictly handled under institutional non-disclosure standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
