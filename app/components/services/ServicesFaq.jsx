"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function ServicesFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services does Bharat Startup Ventures Pvt. Ltd. offer?",
      answer:
        "The service portfolio includes business registration, startup support, funding preparation, taxation and compliance assistance, government scheme research, licences, software development, AI automation, digital marketing and related business support.",
    },
    {
      question: "Can you help with startup registration in India?",
      answer:
        "We can help explain business structures, prepare documentation and navigate applicable registration processes. The appropriate route depends on the proposed venture and its requirements.",
    },
    {
      question: "Do you help businesses prepare for loans and funding?",
      answer:
        "Funding-related assistance may include business plans, project reports, pitch decks, financial projections and loan documentation. Funding decisions remain with the relevant lender, investor or programme authority.",
    },
    {
      question: "Can you develop a website or custom business application?",
      answer:
        "Website, e-commerce, mobile application, CRM and custom software projects can be scoped according to business objectives, functionality and technical requirements.",
    },
    {
      question: "Do you guarantee government scheme or loan approval?",
      answer:
        "No. Eligibility, assessment, approval and disbursement are determined by the relevant authority, institution or programme under its applicable rules.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C58A1B]/35 bg-[#C58A1B]/10 px-3 py-1 mb-3">
            <HelpCircle size={13} className="text-[#C58A1B]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#001A40]">
              Clear Clarifications
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#001A40] mb-3">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            Frequently asked questions about our services, processes, and scope of assistance.
          </p>
        </div>

        {/* Accordions */}
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
