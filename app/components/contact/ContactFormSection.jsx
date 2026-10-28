"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Globe,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  ShieldCheck,
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

    // Simulated working workflow
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="enquiry-form" className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-[0_12px_40px_rgba(0,26,64,0.06)]">
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C58A1B]">
                  Enquiry Form
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#001A40] mt-1">
                  Tell Us How We Can Help
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Share a few details about your requirements so our team can understand your enquiry and determine the appropriate next steps.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-[#00843D] mx-auto mb-4">
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-900 mb-2">
                    Enquiry Received Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto mb-6">
                    Thank you, <span className="font-semibold">{formData.fullName}</span>. We have logged your request regarding <span className="font-semibold">{formData.serviceRequired}</span>. Our team will review your requirements and reach out within 1 business day.
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
                    className="inline-flex items-center gap-2 rounded-xl bg-[#001A40] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#00122E] transition-colors"
                  >
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#001A40] mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-[#C58A1B] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Company / Organization Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#001A40] mb-1.5">
                        Company or Organization Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Bharat Tech Pvt Ltd"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-[#C58A1B] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold text-[#001A40] mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-[#C58A1B] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-[#001A40] mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-[#C58A1B] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Industry */}
                    <div>
                      <label className="block text-xs font-bold text-[#001A40] mb-1.5">
                        Industry / Sector
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. IT, Manufacturing, Agribusiness"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-[#C58A1B] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Service Required Dropdown (All 12 options from PDF!) */}
                    <div>
                      <label className="block text-xs font-bold text-[#001A40] mb-1.5">
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2.5 text-xs font-medium text-slate-900 focus:border-[#C58A1B] focus:bg-white focus:outline-none transition-colors"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Brief Description */}
                  <div>
                    <label className="block text-xs font-bold text-[#001A40] mb-1.5">
                      Brief Description of Your Requirement <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please summarize your current business situation, what services or schemes you are exploring, and any specific deadlines..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-xs text-slate-900 placeholder-slate-400 focus:border-[#C58A1B] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#001A40] via-[#00245A] to-[#00122E] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#001A40]/15 hover:shadow-xl hover:shadow-[#C58A1B]/20 transition-all disabled:opacity-75 cursor-pointer"
                    >
                      <Send size={15} className="text-[#E5A93C] transition-transform group-hover:translate-x-1" />
                      <span>{loading ? "Submitting Your Request..." : "Submit Enquiry"}</span>
                    </button>
                  </div>

                  {/* Privacy Message from PDF */}
                  <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                    Privacy message: Your information will be used to review and respond to your enquiry in accordance with our Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right Information Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Contact Card */}
            <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-[#F8F5ED] p-6 sm:p-8 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C58A1B]">
                Direct Contact
              </span>
              <h3 className="text-xl font-bold text-[#001A40] mt-1 mb-2">
                Connect with Bharat Startup Ventures
              </h3>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Have a question about our services or a project you would like to discuss? Contact us using the verified business details below.
              </p>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#001A40] text-[#E5A93C] shrink-0 shadow-2xs">
                    <Building2 size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400">Legal Company Name</span>
                    <p className="font-bold text-[#001A40] text-sm">Bharat Startup Ventures Pvt. Ltd.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#001A40] text-[#E5A93C] shrink-0 shadow-2xs">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400">Direct Helpline</span>
                    <a href="tel:+919876543210" className="block font-bold text-[#001A40] text-sm hover:text-[#C58A1B]">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#001A40] text-[#E5A93C] shrink-0 shadow-2xs">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400">Official Business Email</span>
                    <a href="mailto:contact@bharatstartupventures.com" className="block font-bold text-[#001A40] text-xs hover:text-[#C58A1B] break-all">
                      contact@bharatstartupventures.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#001A40] text-[#E5A93C] shrink-0 shadow-2xs">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400">Operating Hours</span>
                    <p className="font-medium text-slate-700">Mon – Sat: 9:30 AM – 6:30 PM (IST)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#001A40] text-[#E5A93C] shrink-0 shadow-2xs">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400">Corporate Location</span>
                    <p className="font-medium text-slate-700">New Delhi, India (Pan-India Service Reach)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Assurance Badge */}
            <div className="rounded-2xl border border-[#C58A1B]/30 bg-[#C58A1B]/10 p-4 flex items-center gap-3">
              <ShieldCheck size={20} className="text-[#00843D] shrink-0" />
              <p className="text-xs text-slate-800 leading-snug">
                <strong>Confidentiality Assured:</strong> All financial and business information shared with our team is governed by strict non-disclosure ethics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
