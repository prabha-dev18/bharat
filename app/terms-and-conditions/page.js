import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { FileCheck, AlertCircle, Scale, ShieldAlert, Award, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions | Bharat Startup Ventures Pvt. Ltd.",
  description:
    "Review the Terms and Conditions governing advisory services, startup support, project reporting, and platform usage with Bharat Startup Ventures Pvt. Ltd.",
  keywords: [
    "Terms and Conditions Bharat Startup Ventures",
    "Advisory terms",
    "Consultancy engagement contract",
    "Statutory disclaimer India",
  ],
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "October 2026";

  const keyClauses = [
    {
      icon: Scale,
      title: "Independent Consultancy",
      desc: "Bharat Startup Ventures Pvt. Ltd. is an independent advisory firm, not a government body or official department.",
    },
    {
      icon: ShieldAlert,
      title: "No Outcome Guarantees",
      desc: "Subsidies, grants, bank loan sanctions, and statutory approvals are determined solely by government authorities and banks.",
    },
    {
      icon: FileCheck,
      title: "Client Accuracy Duty",
      desc: "Clients are solely responsible for the authenticity and truthfulness of financial data, KYC, and documents submitted.",
    },
    {
      icon: Award,
      title: "Defined Scope of Work",
      desc: "Services are executed strictly as per agreed proposals, milestones, and statutory filing guidelines.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-[#001026] py-14 sm:py-18 lg:py-20 text-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-[#C58A1B]/15 blur-3xl" />
            <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-[#00245A]/30 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(#C58A1B08_1px,transparent_1px)] [background-size:28px_28px]" />
          </div>

          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C58A1B]/40 bg-[#C58A1B]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#D9A12E]">
              <Scale size={13} className="text-[#D9A12E]" />
              Service Terms &amp; Conditions
            </div>

            <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
              Terms &amp; <span className="text-[#C58A1B]">Conditions</span>
            </h1>

            <p className="mt-4 mx-auto max-w-2xl text-xs sm:text-sm text-slate-300 leading-relaxed">
              These terms outline the contractual basis, service scopes, disclaimer notices, and operational commitments governing your
              engagement with Bharat Startup Ventures Pvt. Ltd.
            </p>

            <div className="mt-6 flex items-center justify-center gap-4 text-[11px] text-slate-400">
              <span>Effective Date: {lastUpdated}</span>
              <span>•</span>
              <span>Governed by Indian Law</span>
            </div>
          </div>
        </section>

        {/* Highlights Row */}
        <section className="border-b border-slate-100 bg-[#FAF8F5] py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {keyClauses.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-lg border border-[#C58A1B]/20 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C58A1B]/50"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-[#001A40] text-[#D9A12E]">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-[#001A40]">{title}</h3>
                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none text-slate-700 text-xs sm:text-sm leading-relaxed space-y-10">
              {/* Important Statutory Disclaimer Banner */}
              <div className="rounded-lg border-2 border-[#C58A1B] bg-[#FFFBF0] p-5 sm:p-6 text-[#001A40]">
                <div className="flex items-start gap-3">
                  <AlertCircle size={22} className="text-[#C58A1B] shrink-0 mt-0.5" />
                  <div>
                    <h2 className="font-heading text-sm sm:text-base font-bold text-[#001A40] mb-1">
                      Important Statutory &amp; Regulatory Disclaimer
                    </h2>
                    <p className="text-xs sm:text-[12.5px] leading-relaxed text-slate-700">
                      Bharat Startup Ventures Pvt. Ltd. provides professional consultancy, documentation preparation, and tech enabler
                      services. It is <strong>not</strong> a government agency, department, statutory ministry, or affiliated entity of the
                      Government of India or any State Government. Government scheme sanctions, grant approvals, seed funding disbursements,
                      and bank loans are granted solely at the discretion of respective government bodies, nodal agencies, and financial
                      institutions based on their statutory guidelines. No success fee, guarantee, or assured approval is implied or warranted.
                    </p>
                  </div>
                </div>
              </div>

              {/* 1. Acceptance */}
              <div>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[#001A40] border-b border-slate-200 pb-2 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing, browsing, or utilizing the web portal{" "}
                  <strong className="text-[#001A40]">bharatstartupventures.com</strong>, or by entering into an advisory engagement, signing
                  a service mandate, or commissioning technical development with{" "}
                  <strong className="text-[#001A40]">Bharat Startup Ventures Pvt. Ltd.</strong> (&ldquo;Company&rdquo;), you (&ldquo;Client&rdquo;
                  or &ldquo;User&rdquo;) agree to be legally bound by these Terms and Conditions in their entirety.
                </p>
                <p className="mt-3">
                  If you are entering into this agreement on behalf of a company, startup, or partnership, you warrant that you have the
                  requisite corporate authority to bind that legal entity.
                </p>
              </div>

              {/* 2. Scope of Services */}
              <div>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[#001A40] border-b border-slate-200 pb-2 mb-4">
                  2. Scope of Services
                </h2>
                <p>The Company delivers advisory, documentation, compliance, and technology enablement services across six strategic divisions:</p>
                <ul className="mt-3 list-inside list-disc space-y-1.5 text-slate-600">
                  <li><strong>Business Incorporation &amp; Structuring:</strong> Pvt Ltd, LLP, Section 8, OPC, Partnership, MSME/Udyam registrations.</li>
                  <li><strong>Government Scheme Guidance:</strong> DPIIT recognition, Startup India Seed Fund (SISFS), 80-IAC tax exemption assistance, PMEGP, CGTMSE, AIF, and PMFME documentation.</li>
                  <li><strong>Financial &amp; Funding Readiness:</strong> Detailed Project Reports (DPR), CMA banking data, financial models, pitch deck preparation, and loan proposal compilation.</li>
                  <li><strong>Taxation &amp; Regulatory Compliance:</strong> GST filings, annual ROC/MCA compliance, accounting automation, and statutory filings.</li>
                  <li><strong>Software &amp; Digital Solutions:</strong> Enterprise web development, mobile applications, AI workflows, and custom CRM systems.</li>
                  <li><strong>Branding &amp; Growth Marketing:</strong> Digital presence, SEO, brand identity, and multi-channel marketing advisory.</li>
                </ul>
              </div>

              {/* 3. Client Obligations */}
              <div>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[#001A40] border-b border-slate-200 pb-2 mb-4">
                  3. Client Obligations &amp; Document Authenticity
                </h2>
                <p>To ensure timely delivery, the Client covenants and undertakes that:</p>
                <ul className="mt-3 list-inside list-disc space-y-1.5 text-slate-600">
                  <li>All KYC credentials, identity proofs, address documents, financial records, bank statements, and declarations provided to the Company are authentic, accurate, valid, and legally acquired.</li>
                  <li>The Company shall bear no liability for delays, fines, rejections, or penalties resulting from incorrect, fraudulent, forged, or delayed documentation supplied by the Client.</li>
                  <li>The Client shall promptly furnish required OTPs, digital signature tokens (DSC), or verifications necessary to execute authorized filings on government portals (e.g., MCA V3, GSTN, Income Tax, DGFT).</li>
                </ul>
              </div>

              {/* 4. Payment Terms */}
              <div>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[#001A40] border-b border-slate-200 pb-2 mb-4">
                  4. Professional Fees, Taxes &amp; Refund Policy
                </h2>
                <p>
                  Professional charges for assignments are governed by the approved quotation, milestone schedule, or service invoice.
                </p>
                <ul className="mt-3 list-inside list-disc space-y-1.5 text-slate-600">
                  <li><strong>Statutory Fees:</strong> Government portal fees, stamp duties, MCA challans, trademark filing fees, and GST are payable additionally as statutory out-of-pocket expenses.</li>
                  <li><strong>Milestones:</strong> Invoices are payable within the agreed credit window. The Company reserves the right to withhold subsequent deliverables or filings in the event of default.</li>
                  <li><strong>Refund Policy:</strong> Consultancy, research, advisory, and document drafting involve upfront professional hours and resource commitments. Professional advisory fees are generally non-refundable once service execution has commenced, except where explicitly agreed under a signed service level agreement (SLA).</li>
                </ul>
              </div>

              {/* 5. Intellectual Property */}
              <div>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[#001A40] border-b border-slate-200 pb-2 mb-4">
                  5. Intellectual Property Rights
                </h2>
                <p>
                  Upon receipt of full payment, all custom deliverables specifically commissioned by the Client (such as custom pitch decks,
                  bespoke project reports, and client-specific software codebases) shall be transferred to the Client.
                </p>
                <p className="mt-2 text-slate-600">
                  The Company retains all proprietary rights, trademarks, brand assets, proprietary calculation models, standard drafting
                  frameworks, and advisory templates developed independently by Bharat Startup Ventures Pvt. Ltd.
                </p>
              </div>

              {/* 6. Limitation of Liability */}
              <div>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[#001A40] border-b border-slate-200 pb-2 mb-4">
                  6. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by applicable Indian law:
                </p>
                <ul className="mt-3 list-inside list-disc space-y-1.5 text-slate-600">
                  <li>The Company shall not be liable for any indirect, incidental, punitive, special, or consequential damages, including loss of profits, commercial opportunities, business interruption, or loss of goodwill.</li>
                  <li>The Company&rsquo;s cumulative aggregate liability arising under any claim, whether in contract, tort (including negligence), or statutory breach, shall be strictly capped at the total professional fee received by the Company for the specific mandate giving rise to the claim.</li>
                </ul>
              </div>

              {/* 7. Force Majeure */}
              <div>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[#001A40] border-b border-slate-200 pb-2 mb-4">
                  7. Force Majeure
                </h2>
                <p>
                  Neither party shall be held in breach of these terms for delays or non-performance caused by circumstances beyond reasonable
                  control, including acts of God, governmental policy changes, prolonged server outages on government portals (e.g., MCA, GSTN,
                  Income Tax), strikes, floods, utility failures, or civil disturbances.
                </p>
              </div>

              {/* 8. Governing Law & Dispute Resolution */}
              <div>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[#001A40] border-b border-slate-200 pb-2 mb-4">
                  8. Governing Law &amp; Jurisdiction
                </h2>
                <p>
                  These Terms and Conditions shall be governed by, interpreted, and construed in accordance with the substantive laws of the
                  Republic of India. Any legal dispute, difference, or litigation arising out of or in connection with these terms shall be
                  subject to the exclusive jurisdiction of the competent civil courts located at <strong>New Delhi, India</strong>.
                </p>
              </div>

              {/* 9. Modifications */}
              <div>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[#001A40] border-b border-slate-200 pb-2 mb-4">
                  9. Amendments to Terms
                </h2>
                <p>
                  The Company reserves the right to revise, update, or modify these terms at any time. Continued usage of our website or
                  commissioning of services following posted changes constitutes full acceptance of the updated terms.
                </p>
              </div>

              {/* Contact Box */}
              <div className="rounded-lg border border-[#C58A1B]/30 bg-[#FFFDF9] p-5 sm:p-6">
                <h2 className="font-heading text-base sm:text-lg font-bold text-[#001A40] mb-2">
                  10. Contacting Legal &amp; Corporate Advisory
                </h2>
                <p className="text-slate-600">
                  For clarifications regarding service agreements, terms of use, or formal legal notices, please write to:
                </p>
                <div className="mt-4 space-y-1 text-xs sm:text-[13px] text-slate-800 font-medium">
                  <p><strong>Legal Department:</strong> Bharat Startup Ventures Pvt. Ltd.</p>
                  <p><strong>Registered Presence:</strong> New Delhi, India</p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:contact@bharatstartupventures.com" className="text-[#001A40] underline hover:text-[#C58A1B]">
                      contact@bharatstartupventures.com
                    </a>
                  </p>
                  <p>
                    <strong>Direct Desk:</strong>{" "}
                    <a href="tel:+919876543210" className="text-[#001A40] underline hover:text-[#C58A1B]">
                      +91 98765 43210
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-slate-200 bg-[#001A40] py-8 text-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">Ready to Structure Your Next Business Milestone?</h3>
              <p className="text-xs text-slate-300">Speak to our business advisory and compliance team for a structured consultation.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#C58A1B] hover:bg-[#d88e1b] px-4 py-2 text-xs font-bold text-white transition-colors"
            >
              <span>Schedule Consultation</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
