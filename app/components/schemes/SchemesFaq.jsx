"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function SchemesFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Does every startup or MSME qualify for a government scheme?",
      answer:
        "No. Eligibility depends on the specific scheme and may involve business activity, entity status, location, investment, turnover, applicant category and other prescribed conditions.",
    },
    {
      question: "Can Bharat Startup Ventures help with government funding applications?",
      answer:
        "We can provide scheme research, preliminary eligibility review, documentation guidance and application assistance for relevant programmes within the agreed scope.",
    },
    {
      question: "Is funding or subsidy guaranteed after applying?",
      answer:
        "No. Applications are assessed by the relevant government authority, implementing agency, incubator or lending institution. Approval and disbursement are not guaranteed.",
    },
    {
      question: "What documents might be required?",
      answer:
        "Depending on the scheme, documents may include PAN, identity or category documents where applicable, incorporation or business records, Udyam details, bank statements, financial information, project reports, quotations and other supporting records.",
    },
    {
      question: "Where can I verify scheme information?",
      answer:
        "Use the official website of the responsible government department, scheme portal or authorized implementing agency. We recommend confirming current eligibility, benefits, deadlines and application conditions before proceeding.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200/60 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C58A1B]/35 bg-[#C58A1B]/10 px-3 py-1 mb-3">
            <HelpCircle size={13} className="text-[#C58A1B]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#001A40]">
              Scheme Guidance FAQs
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#001A40] mb-3">
            Frequently Asked Questions
          </h2>

          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Frequently asked questions about government scheme eligibility, documentation, and the application process.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200/90 bg-white shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-sm sm:text-base text-[#001A40] hover:text-[#C58A1B] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#C58A1B] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
