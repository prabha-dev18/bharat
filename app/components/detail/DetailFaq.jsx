"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function DetailFaq({ item }) {
  // Open the first FAQ by default
  const [openIndex, setOpenIndex] = useState(0);

  if (!item || !item.faqs || item.faqs.length === 0) return null;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-14 sm:py-16 bg-white border-b border-slate-100 font-sans">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <div className="mb-3.5 inline-flex">
            <span className="rounded-sm border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-[34px] mb-2">
            Frequently Asked Questions
          </h2>

          <div className="mt-3.5 h-1 w-16 rounded-full bg-[#C89D3C] mx-auto" />

          <p className="mt-4 max-w-2xl text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px] sm:leading-[1.8] mx-auto">
            Clear answers to common questions about {item.title}.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {item.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-sm border border-slate-200/90 bg-white transition-all duration-200 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left transition-colors hover:bg-slate-50 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-sm sm:text-base font-bold text-[#0A2540] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[#0A2540] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#C89D3C] text-white" : ""
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    <p>{faq.answer}</p>
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
