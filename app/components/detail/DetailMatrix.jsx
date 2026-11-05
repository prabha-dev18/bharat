"use client";

import { Table, Landmark, CheckCircle2 } from "lucide-react";

export default function DetailMatrix({ item }) {
  if (!item || !item.subsidyMatrix) return null;

  const { title, rows } = item.subsidyMatrix;

  return (
    <section className="py-14 sm:py-16 bg-slate-50/70 border-b border-slate-200/70 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
          <div className="mb-3.5 inline-flex">
            <span className="rounded-sm border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase">
              FINANCIAL CRITERIA
            </span>
          </div>

          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-[34px] mb-2">
            {title || "Subsidy & Contribution Structure"}
          </h2>

          <div className="mt-3.5 h-1 w-16 rounded-full bg-[#C89D3C] mx-auto" />

          <p className="mt-4 max-w-2xl text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px] sm:leading-[1.8] mx-auto">
            Official government sharing pattern and beneficiary equity parameters.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden flex items-center justify-between text-[11px] text-slate-500 mb-2 px-1">
          <span>Swipe horizontally to view all columns</span>
          <span className="text-[#C89D3C] font-bold">&rarr;</span>
        </div>

        {/* Responsive Table */}
        <div className="overflow-hidden rounded-sm sm:rounded-sm border border-slate-200/90 bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
              <thead className="bg-[#0A2540] text-white text-[11px] sm:text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-4">Beneficiary Category</th>
                  <th className="px-4 py-4">Location</th>
                  <th className="px-4 py-4">Own Contribution</th>
                  <th className="px-4 py-4 text-[#F3D072]">Subsidy / Benefit</th>
                  <th className="px-4 py-4">Bank Finance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows &&
                  rows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="px-5 py-4 font-semibold text-[#0A2540]">
                        {row.category}
                      </td>
                      <td className="px-4 py-4">{row.location}</td>
                      <td className="px-4 py-4 font-mono font-medium">{row.beneficiaryShare}</td>
                      <td className="px-4 py-4 font-mono font-bold text-[#00843D]">
                        {row.subsidyRate}
                      </td>
                      <td className="px-4 py-4 font-mono">{row.bankFinance}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-500 px-2">
          <span>* Applicable as per current official guidelines by the Ministry and partner banks.</span>
          <span className="font-semibold text-[#0A2540]">Verified Guidelines</span>
        </div>
      </div>
    </section>
  );
}
