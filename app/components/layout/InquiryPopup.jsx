"use client";

import { useState, useEffect, useRef } from "react";
import {
  X,
  User,
  Phone,
  Mail,
  Briefcase,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Send,
  MessageSquareText,
  Building2,
} from "lucide-react";

export default function InquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "Startup Registration (Pvt Ltd, LLP, OPC)",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const modalRef = useRef(null);
  const nameInputRef = useRef(null);

  const serviceOptions = [
    "Startup Registration (Pvt Ltd, LLP, OPC)",
    "DPIIT Recognition & Section 80-IAC Tax Exemption",
    "Government Schemes & Grants (PMEGP, MSME, AIF)",
    "Seed & Angel Funding Assistance",
    "GST, Trademark & Annual ROC Compliance",
    "Website, App & AI Tech Development",
    "DPR & Bank Loan Credit Proposal",
    "General / Other Business Inquiry",
  ];

  // Auto-open logic when starting the website
  useEffect(() => {
    // Check if user already submitted the form in this session
    try {
      const alreadySubmitted = sessionStorage.getItem("bsv_inquiry_submitted") === "true";
      if (alreadySubmitted) {
        return;
      }
    } catch {
      // ignore storage access issues
    }

    let timer = null;

    const openModalWithDelay = (delayMs = 1000) => {
      timer = setTimeout(() => {
        setIsOpen(true);
      }, delayMs);
    };

    // Listen for preloader completion event
    const handlePreloaderDone = () => {
      openModalWithDelay(900);
    };

    window.addEventListener("bsv_preloader_completed", handlePreloaderDone);

    // Also listen to any custom trigger across the app to open the inquiry modal
    const handleManualOpen = () => {
      setIsOpen(true);
    };
    window.addEventListener("bsv_open_inquiry", handleManualOpen);

    // If preloader is running, handlePreloaderDone will fire on completion.
    // Fallback: If preloader doesn't fire event within 4 seconds, open anyway
    timer = setTimeout(() => {
      setIsOpen((current) => current || true);
    }, 4200);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("bsv_preloader_completed", handlePreloaderDone);
      window.removeEventListener("bsv_open_inquiry", handleManualOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  // Handle ESC key and body scroll locking
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      // Autofocus first input after animation
      const focusTimer = setTimeout(() => {
        if (nameInputRef.current) {
          nameInputRef.current.focus();
        }
      }, 250);
      return () => {
        clearTimeout(focusTimer);
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        sessionStorage.setItem("bsv_inquiry_submitted", "true");
      } catch {
        // ignore
      }
    }, 850);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      service: "Startup Registration (Pvt Ltd, LLP, OPC)",
      message: "",
    });
    setErrors({});
    setIsOpen(false);
  };

  return (
    <>
      {/* =========================================================================
          PERSISTENT FLOATING TRIGGER (Quick Enquiry Button)
          Visible when popup is closed so visitors can reopen it anytime
          ========================================================================= */}
      {!isOpen && (
        <aside aria-label="Quick consultation launcher" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[9990]">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 rounded-full border border-[#C89D3C]/60 bg-[#0A2540] px-4 py-2.5 sm:px-5 sm:py-3 text-white shadow-xl shadow-[#0A2540]/35 transition-all duration-300 hover:border-[#F3D072] hover:bg-[#0D3156] hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Open Quick Inquiry Form"
          >
            {/* Glowing Aura */}
            <span className="absolute -inset-0.5 -z-10 rounded-full bg-gradient-to-r from-[#C89D3C] to-[#F3D072] opacity-30 blur-sm transition-opacity group-hover:opacity-60" />

            {/* Pulsing Alert Dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F3D072] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C89D3C]" />
            </span>

            {/* Icon */}
            <MessageSquareText size={17} className="text-[#F3D072] shrink-0" />

            {/* Text */}
            <span className="text-xs sm:text-sm font-bold tracking-wide">
              Quick Inquiry
            </span>

            {/* Micro Badge */}
            <span className="hidden sm:inline-block rounded-full bg-[#C89D3C]/20 border border-[#C89D3C]/50 px-2 py-0.5 text-[10px] font-extrabold uppercase text-[#F3D072]">
              Free Advice
            </span>
          </button>
        </aside>
      )}

      {/* =========================================================================
          POPUP MODAL BACKDROP & CONTAINER
          ========================================================================= */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="inquiry-modal-title"
          className="fixed inset-0 z-[99995] flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
        >
          {/* Dark Glass Backdrop */}
          <div
            className="fixed inset-0 bg-[#0A2540]/75 backdrop-blur-sm transition-opacity duration-300"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal Card */}
          <div
            ref={modalRef}
            className="relative w-full max-w-lg my-auto rounded-sm bg-white shadow-2xl shadow-black/40 border border-slate-200 overflow-hidden transition-all duration-300 transform scale-100 max-h-[92vh] flex flex-col z-10"
          >
            {/* National Tricolor Top Micro-Band */}
            <div className="h-[3px] w-full bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808]" />

            {/* Modal Header */}
            <div className="relative bg-gradient-to-r from-[#0A2540] via-[#0E2F54] to-[#0A2540] text-white px-5 sm:px-6 py-4 sm:py-5 border-b border-[#0A2540] shrink-0">
              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close inquiry popup"
              >
                <X size={19} />
              </button>

              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#C89D3C]/20 border border-[#C89D3C]/40 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-[#F3D072] mb-1.5">
                <Sparkles size={11} className="text-[#F3D072]" />
                <span>Instant Consultation Desk</span>
              </div>

              {/* Main Title */}
              <h2
                id="inquiry-modal-title"
                className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug"
              >
                Connect with a Startup Advisor
              </h2>

              {/* Subtitle */}
              <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                Incorporation • DPIIT Recognition • Government Subsidies • Funding
              </p>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto px-5 sm:px-6 py-4 sm:py-5 bg-[#FAF9F6]">
              {isSubmitted ? (
                /* =============================================================
                   SUCCESS STATE
                   ============================================================= */
                <div className="flex flex-col items-center text-center py-6 sm:py-8 space-y-4">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border-2 border-emerald-500/30 shadow-inner">
                    <CheckCircle2 size={36} className="animate-bounce text-emerald-600" />
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-600">
                      Enquiry Submitted Successfully
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0A2540] mt-1">
                      Thank you, {formData.fullName}!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
                      Our senior startup &amp; statutory advisor has received your request and will call you on{" "}
                      <strong className="text-[#0A2540]">+91 {formData.phone}</strong> within 30 minutes during business hours.
                    </p>
                  </div>

                  {/* Direct Contact Alternatives */}
                  <div className="w-full pt-3 pb-2 border-t border-slate-200 space-y-2 text-xs">
                    <p className="text-slate-500 font-medium">Need immediate assistance right now?</p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                      <a
                        href={`https://wa.me/919876543210?text=${encodeURIComponent(
                          `Hi Bharat Startup Ventures, I just submitted an inquiry for ${formData.service}. My name is ${formData.fullName}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-sm bg-emerald-600 px-4 py-2 font-bold text-white hover:bg-emerald-700 transition-colors shadow-sm"
                      >
                        <Phone size={13} />
                        <span>Chat on WhatsApp</span>
                      </a>
                      <a
                        href="tel:+919876543210"
                        className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-slate-300 bg-white px-4 py-2 font-bold text-[#0A2540] hover:bg-slate-50 transition-colors"
                      >
                        <Phone size={13} className="text-[#C89D3C]" />
                        <span>Call +91 98765 43210</span>
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full mt-2 rounded-sm bg-[#0A2540] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#0D3156] transition-colors cursor-pointer"
                  >
                    Close Window &amp; Explore Website
                  </button>
                </div>
              ) : (
                /* =============================================================
                   INQUIRY FORM
                   ============================================================= */
                <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                  {/* Row 1: Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <User size={15} />
                      </div>
                      <input
                        ref={nameInputRef}
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="e.g. Full Name"
                        className={`w-full rounded-sm border bg-white pl-9 pr-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C89D3C]/50 transition-all ${
                          errors.fullName ? "border-red-400 bg-red-50/20" : "border-slate-300"
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Row 2: Phone & Email in 2 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1">
                        Mobile (WhatsApp) <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex">
                        <span className="inline-flex items-center px-2.5 rounded-l-lg border border-r-0 border-slate-300 bg-slate-100 text-xs font-bold text-slate-600">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={formData.phone}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, "");
                            handleInputChange("phone", val);
                          }}
                          placeholder="98765 43210"
                          className={`w-full rounded-r-sm border bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C89D3C]/50 transition-all ${
                            errors.phone ? "border-red-400 bg-red-50/20" : "border-slate-300"
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.phone}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1">
                        Official / Personal Email
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                          <Mail size={15} />
                        </div>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="abc@company.com"
                          className={`w-full rounded-sm border bg-white pl-9 pr-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C89D3C]/50 transition-all ${
                            errors.email ? "border-red-400 bg-red-50/20" : "border-slate-300"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Service Selection */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1">
                      Required Business Service <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <Briefcase size={15} />
                      </div>
                      <select
                        value={formData.service}
                        onChange={(e) => handleInputChange("service", e.target.value)}
                        className="w-full rounded-sm border border-slate-300 bg-white pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C89D3C]/50 transition-all appearance-none cursor-pointer"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Brief Message / Requirements */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1">
                      Brief Venture Details / Queries{" "}
                      <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="e.g. Need DPIIT tax exemption approval & private limited registration..."
                      className="w-full rounded-sm border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C89D3C]/50 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full flex items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-[#0A2540] via-[#0D3156] to-[#0A2540] border border-[#C89D3C] px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#0A2540]/30 hover:shadow-lg hover:border-[#F3D072] transition-all duration-300 active:scale-[0.99] disabled:opacity-70 cursor-pointer overflow-hidden"
                    >
                      {/* Gold hover sheen overlay */}
                      <span className="pointer-events-none absolute inset-0 bg-[#C89D3C]/15 opacity-0 group-hover:opacity-100 transition-opacity" />

                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4 text-[#F3D072]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          <span className="relative z-10 text-slate-200">Submitting Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span className="relative z-10 font-bold text-white">
                            Submit Business Enquiry
                          </span>
                          <ArrowRight
                            size={15}
                            className="relative z-10 text-[#F3D072] transition-transform group-hover:translate-x-1"
                          />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Trust Strips */}
                  <div className="pt-2 flex items-center justify-between text-[10.5px] text-slate-500 border-t border-slate-200/80">
                    <span className="inline-flex items-center gap-1">
                      <ShieldCheck size={12} className="text-[#00843D]" />
                      <span>100% Confidential</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} className="text-[#C89D3C]" />
                      <span>Callback in 30 Mins</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Building2 size={12} className="text-[#0A2540]" />
                      <span>Govt Scheme Experts</span>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
