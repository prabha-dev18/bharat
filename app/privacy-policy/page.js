import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ShieldCheck, Lock, Eye, FileText, Bell, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Bharat Startup Ventures Pvt. Ltd.",
  description:
    "Read the Privacy Policy of Bharat Startup Ventures Pvt. Ltd. Understand how we collect, handle, protect, and process client information and business records.",
  keywords: [
    "Privacy Policy Bharat Startup Ventures",
    "Data protection policy",
    "Confidentiality agreement startup consulting",
    "Client information safety",
  ],
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 2026";

  const keyPrinciples = [
    {
      icon: Lock,
      title: "Confidentiality First",
      desc: "All financial records, DPRs, pitch decks, and company documents shared with us remain strictly confidential.",
    },
    {
      icon: Eye,
      title: "Transparent Usage",
      desc: "We only collect information necessary to deliver business registration, advisory, and technical consulting.",
    },
    {
      icon: ShieldCheck,
      title: "No Data Selling",
      desc: "We do not sell, rent, or trade your personal or business records to third-party commercial marketing brokers.",
    },
    {
      icon: Globe,
      title: "Statutory Compliance",
      desc: "Information processing aligns with applicable Indian IT legislation, digital privacy principles, and regulatory norms.",
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
              <Lock size={13} className="text-[#D9A12E]" />
              Official Legal Document
            </div>

            <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
              Privacy <span className="text-[#C58A1B]">Policy</span>
            </h1>

            <p className="mt-4 mx-auto max-w-2xl text-xs sm:text-sm text-slate-300 leading-relaxed">
              Bharat Startup Ventures Pvt. Ltd. is committed to protecting the privacy, confidentiality, and integrity of the personal
              and commercial information entrusted to us by entrepreneurs, MSMEs, and enterprises.
            </p>

            <div className="mt-6 flex items-center justify-center gap-4 text-[11px] text-slate-400">
              <span>Effective: {lastUpdated}</span>
              <span>•</span>
              <span>Applies to Website &amp; Advisory Services</span>
            </div>
          </div>
        </section>

        {/* Highlight Cards */}
        <section className="border-b border-slate-100 bg-[#FAF8F5] py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {keyPrinciples.map(({ icon: Icon, title, desc }) => (
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

        {/* Policy Body */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none text-slate-700 text-xs sm:text-sm leading-relaxed space-y-10">
              {/* Introduction */}
              <div>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[#001A40] border-b border-slate-200 pb-2 mb-4">
                  1. Overview &amp; Applicability
                </h2>
                <p>
                  This Privacy Policy applies to the website{" "}
                  <strong className="text-[#001A40]">bharatstartupventures.com</strong> and all consulting, incorporation, financial
                  documentation, compliance, software development, and digital services rendered by{" "}
                  <strong className="text-[#001A40]">Bharat Startup Ventures Pvt. Ltd.</strong> (referred to herein as &ldquo;Company&rdquo;,
                  &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
                </p>
                <p className="mt-3">
                  By accessing our platform, filling our contact or assessment questionnaires, or engaging our consulting services, you
                  acknowledge and consent to the data collection and usage practices described in this policy.
                </p>
              </div>

              {/* Data Collected */}
              <div>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[#001A40] border-b border-slate-200 pb-2 mb-4">
                  2. Information We Collect
                </h2>
                <p>To deliver structured advisory and corporate services, we may collect the following categories of information:</p>

                <div className="mt-4 space-y-3">
                  <div className="rounded-md border border-slate-200 p-3.5 bg-slate-50/60">
                    <h3 className="font-bold text-[#001A40] text-xs sm:text-sm">A. Contact &amp; Identity Credentials</h3>
                    <p className="mt-1 text-slate-600 text-xs sm:text-[13px]">
                      Full name, authorized signatory identity, professional designation, business email address, phone number, and physical
                      corporate/office address.
                    </p>
                  </div>

                  <div className="rounded-md border border-slate-200 p-3.5 bg-slate-50/60">
                    <h3 className="font-bold text-[#001A40] text-xs sm:text-sm">B. Statutory &amp; Business Information</h3>
                    <p className="mt-1 text-slate-600 text-xs sm:text-[13px]">
                      Company name, proposed entity structure (Pvt Ltd, LLP, Partnership, MSME), industry sector, Director/Partner KYC records
                      (PAN, Aadhaar/Passport as mandated by ROC/MCA/DPIIT filings), CIN, GSTIN, and MSME/Udyam certificates.
                    </p>
                  </div>

                  <div className="rounded-md border border-slate-200 p-3.5 bg-slate-50/60">
                    <h3 className="font-bold text-[#001A40] text-xs sm:text-sm">C. Project &amp; Financial Information</h3>
                    <p className="mt-1 text-slate-600 text-xs sm:text-[13px]">
                      Business pitch materials, Detailed Project Reports (DPR), financial projections, banking proposals, credit requirement
                      estimates, and audited or provisional financials submitted for loan/scheme readiness.
                    </p>
                  </div>

                  <div className="rounded-md border border-slate-200 p-3.5 bg-slate-50/60">
                    <h3 className="font-bold text-[#001A40] text-xs sm:text-sm">D. Technical &amp; Browsing Data</h3>
                    <p className="mt-1 text-slate-600 text-xs sm:text-[13px]">
                      IP address, browser type, operating system, pages visited, duration of visit, and referral URL collected automatically
                      through web cookies and analytics to ensure site security and optimize user experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Purpose */}
              <div>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[#001A40] border-b border-slate-200 pb-2 mb-4">
                  3. Purpose of Processing
                </h2>
                <p>We process your data exclusively for legitimate business and regulatory purposes, including:</p>
                <ul className="mt-3 list-inside list-disc space-y-1.5 text-slate-600">
                  <li>Preparing and submitting statutory filings to MCA, ROC, GST, and DPIIT upon your explicit authorization.</li>
                  <li>Drafting project reports, CMA data, loan documentation, and business proposals.</li>
                  <li>Assisting with government subsidy, incentive, and scheme eligibility assessments.</li>
                  <li>Designing, coding, and deploying custom software, web platforms, and AI automation workflows.</li>
                  <li>Communicating operational milestones, regulatory reminders, compliance notices, and invoices.</li>
                  <li>Preventing fraudulent inquiries, identity spoofing, and ensuring digital platform security.</li>
                </ul>
              </div>

              {/* Confidentiality */}
              <div>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[#001A40] border-b border-slate-200 pb-2 mb-4">
                  4. Confidentiality &amp; Information Disclosure
                </h2>
                <p>
                  We treat client business concepts, technology designs, cap tables, and financial statements with absolute confidentiality.
                  We never commercialize or trade your information. Disclosure occurs strictly under these defined circumstances:
                </p>
                <ul className="mt-3 list-inside list-disc space-y-1.5 text-slate-600">
                  <li>
                    <strong>Statutory Authorities:</strong> When authorized by you to file applications with MCA, ROC, GSTN, Startup India,
                    State Directorate of Industries, or financial institutions for processing your agreed mandate.
                  </li>
                  <li>
                    <strong>Professional Associates:</strong> Chartered Accountants, Company Secretaries, Legal Advocates, and vetted
                    technical partners who operate under written non-disclosure and confidentiality obligations.
                  </li>
                  <li>
                    <strong>Legal Mandates:</strong> Where disclosure is strictly required by Indian law, a competent court order, or an official
                    regulatory summons.
                  </li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[#001A40] border-b border-slate-200 pb-2 mb-4">
                  5. Security Safeguards &amp; Data Storage
                </h2>
                <p>
                  We employ industry-standard technical and operational safeguards to protect your personal and commercial files against
                  unauthorized access, accidental loss, alteration, or disclosure. These measures include TLS/SSL data transmission encryption,
                  role-based access controls, secured file repositories, and periodic data audits.
                </p>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[#001A40] border-b border-slate-200 pb-2 mb-4">
                  6. Retention Period
                </h2>
                <p>
                  Personal and corporate records are retained only as long as necessary to fulfill the engagement purposes or to meet
                  statutory record-keeping periods mandated by Indian corporate, taxation, and accounting regulations (typically up to 8 years
                  for financial and incorporation filings).
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[#001A40] border-b border-slate-200 pb-2 mb-4">
                  7. Your Data Rights
                </h2>
                <p>Subject to statutory obligations, you maintain the following rights:</p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 rounded border border-slate-200 p-2.5">
                    <CheckCircle2 size={15} className="text-[#00843D] shrink-0" />
                    <span>Right to review information held by us</span>
                  </div>
                  <div className="flex items-center gap-2 rounded border border-slate-200 p-2.5">
                    <CheckCircle2 size={15} className="text-[#00843D] shrink-0" />
                    <span>Right to request correction of inaccurate records</span>
                  </div>
                  <div className="flex items-center gap-2 rounded border border-slate-200 p-2.5">
                    <CheckCircle2 size={15} className="text-[#00843D] shrink-0" />
                    <span>Right to withdraw non-statutory consent</span>
                  </div>
                  <div className="flex items-center gap-2 rounded border border-slate-200 p-2.5">
                    <CheckCircle2 size={15} className="text-[#00843D] shrink-0" />
                    <span>Right to opt out of marketing communications</span>
                  </div>
                </div>
              </div>

              {/* Grievance Officer */}
              <div className="rounded-lg border border-[#C58A1B]/30 bg-[#FFFDF9] p-5 sm:p-6">
                <h2 className="font-heading text-base sm:text-lg font-bold text-[#001A40] mb-2">
                  8. Grievance Officer &amp; Privacy Enquiries
                </h2>
                <p className="text-slate-600">
                  In accordance with the Information Technology Act, 2000 and rules made thereunder, any privacy queries, concerns, or
                  grievances may be directed to our Privacy Officer:
                </p>
                <div className="mt-4 space-y-1 text-xs sm:text-[13px] text-slate-800 font-medium">
                  <p><strong>Entity:</strong> Bharat Startup Ventures Pvt. Ltd.</p>
                  <p><strong>Address:</strong> New Delhi, India</p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:contact@bharatstartupventures.com" className="text-[#001A40] underline hover:text-[#C58A1B]">
                      contact@bharatstartupventures.com
                    </a>
                  </p>
                  <p>
                    <strong>Helpline:</strong>{" "}
                    <a href="tel:+919876543210" className="text-[#001A40] underline hover:text-[#C58A1B]">
                      +91 98765 43210
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Bar */}
        <section className="border-t border-slate-200 bg-[#001A40] py-8 text-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">Have Questions About How We Protect Your Data?</h3>
              <p className="text-xs text-slate-300">Our advisory team is available to address compliance and confidentiality inquiries.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#C58A1B] hover:bg-[#d88e1b] px-4 py-2 text-xs font-bold text-white transition-colors"
            >
              <span>Contact Compliance Team</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
