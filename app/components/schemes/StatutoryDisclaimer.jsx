import { AlertCircle } from "lucide-react";

export default function StatutoryDisclaimer() {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="rounded-sm border border-amber-200/80 bg-amber-50/70 p-5 sm:p-6 text-xs text-amber-950 leading-relaxed max-w-4xl mx-auto shadow-sm">
        <div className="flex items-center gap-2 font-bold text-[#0A2540] mb-2 text-sm">
          <AlertCircle size={17} className="text-[#C89D3C]" />
          <span>Important Statutory &amp; Regulatory Disclaimer</span>
        </div>
        <p>
          Bharat Startup Ventures Pvt. Ltd. is an independent consultancy and is not a government department or an official government representative. Scheme names, availability, eligibility, benefits and application timelines are subject to current official guidelines. Final eligibility, approval, sanction, subsidy, credit and disbursement decisions rest with the relevant authorities, programme administrators or financial institutions. No outcome is guaranteed.
        </p>
      </div>
    </section>
  );
}
