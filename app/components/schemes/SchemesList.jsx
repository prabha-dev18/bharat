"use client";

import Link from "next/link";
import {
  Rocket,
  Landmark,
  ShieldCheck,
  Building2,
  ShoppingCart,
  Award,
  Sprout,
  Compass,
  Cpu,
  Globe,
  FileCheck2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function SchemesList() {
  const schemes = [
    {
      id: "scheme-1",
      number: "01",
      title: "Prime Minister's Employment Generation Programme (PMEGP)",
      description:
        "PMEGP is a major credit-linked subsidy programme intended to support eligible new micro-enterprises across manufacturing and service sectors, subject to current scheme rules.",
      icon: Landmark,
      assist: [
        "Preliminary eligibility and project requirement review",
        "Detailed Project Report (DPR) preparation assistance",
        "Business and financial document checklist organization",
        "Guidance on the application process and applicable margin-money subsidy provisions (15% to 35%)",
      ],
    },
    {
      id: "scheme-2",
      number: "02",
      title: "Pradhan Mantri MUDRA Yojana (PMMY)",
      description:
        "MUDRA-related lending supports non-corporate, non-farm small/micro enterprises through participating commercial banks, RRBs, and NBFCs across Shishu, Kishore, and Tarun categories.",
      icon: Building2,
      assist: [
        "Review of business financing requirements and viability",
        "Guidance on applicable loan categories and lender documentation requirements",
        "Preparation of business and financial documentation",
        "Application process coordination and follow-up guidance",
      ],
    },
    {
      id: "scheme-3",
      number: "03",
      title: "Credit Guarantee Scheme / CGTMSE",
      description:
        "Credit guarantee arrangements help eligible micro and small enterprises access collateral-free credit through participating lenders under applicable scheme rules. A guarantee is not the same as a direct grant.",
      icon: ShieldCheck,
      assist: [
        "Preliminary business and funding requirement review",
        "Explanation of lender and guarantee-related documentation",
        "Financial projections, CMA banking data, and business document preparation",
        "Coordination support during the bank application process",
      ],
    },
    {
      id: "scheme-4",
      number: "04",
      title: "Startup India and DPIIT Recognition",
      description:
        "Eligible innovative startups may explore recognition under the Startup India framework to access benefits including Section 80-IAC tax exemption, self-certification, and Startup India Seed Fund eligibility.",
      icon: Rocket,
      assist: [
        "Preliminary recognition eligibility review against DPIIT guidelines",
        "DPIIT recognition application assistance on the national portal",
        "Business pitch profile and supporting innovation document preparation",
        "Guidance on relevant startup programmes, patent rebates, and seed fund applications",
      ],
    },
    {
      id: "scheme-5",
      number: "05",
      title: "Udyam Registration and MSME Support",
      description:
        "Eligible enterprises can explore Udyam registration to access statutory MSME benefits, delayed payment protection under MSMED Act, priority lending, and government portal access.",
      icon: Building2,
      assist: [
        "Udyam registration guidance and category determination (Micro, Small, Medium)",
        "Enterprise information, NIC codes, and document preparation",
        "Explanation of potentially relevant MSME schemes and interest subvention",
        "Assistance with related statutory business documentation",
      ],
    },
    {
      id: "scheme-6",
      number: "06",
      title: "Government e-Marketplace (GeM)",
      description:
        "Eligible businesses may explore seller registration and opportunities to offer products or services directly to government departments, ministries, and PSUs through the GeM portal.",
      icon: ShoppingCart,
      assist: [
        "GeM seller registration guidance and primary user verification",
        "Business profile, brand approval, and product/service catalogue preparation",
        "Product or service listing support and OEM compliance",
        "Tender, bid documentation, and direct purchase assistance",
      ],
    },
    {
      id: "scheme-7",
      number: "07",
      title: "ZED Certification Scheme (Zero Defect Zero Effect)",
      description:
        "Eligible MSMEs may explore the Zero Defect Zero Effect certification framework to strengthen quality practices, reduce waste, enhance productivity, and adopt environmentally responsible manufacturing.",
      icon: Award,
      assist: [
        "Preliminary eligibility and factory readiness review",
        "Certification process guidance across Bronze, Silver, and Gold tiers",
        "Documentation assistance and quality audit compliance checklists",
        "Guidance on applicable subsidy support (up to 80%) under current programme rules",
      ],
    },
    {
      id: "scheme-8",
      number: "08",
      title: "Agriculture, Food Processing and Livestock Programmes",
      description:
        "Agribusiness, food-processing, dairy and livestock enterprises may be eligible for central programmes including PMFME, Agriculture Infrastructure Fund (AIF), and cold-chain subsidies.",
      icon: Sprout,
      assist: [
        "Relevant central and state agricultural scheme research",
        "Preliminary project eligibility and capital outlay review",
        "Detailed Project Report (DPR) and bank documentation assistance",
        "Application process guidance and subsidy claim coordination",
      ],
    },
    {
      id: "scheme-9",
      number: "09",
      title: "State Government Incentives & Industrial Policies",
      description:
        "State governments offer localized capital subsidies, stamp duty exemptions, electricity duty rebates, and employment generation incentives for eligible manufacturing and IT projects.",
      icon: Compass,
      assist: [
        "Research into potentially relevant state industrial development programmes",
        "Preliminary eligibility review based on location, sector, and investment tier",
        "Documentation and application guidance for State Single Window Portals",
        "Coordination support for applicable departmental procedures",
      ],
    },
    {
      id: "scheme-10",
      number: "10",
      title: "Technology, Innovation and Startup Support",
      description:
        "Eligible technology-driven businesses may explore grant-in-aid and incubation programmes offered by government bodies (MeitY, BIRAC, DST, TIDE 2.0) and authorized innovation partners.",
      icon: Cpu,
      assist: [
        "Identification of potentially relevant innovation and technology grant programmes",
        "Startup profile, technical proposal, and pitch deck documentation",
        "Application preparation guidance and milestone roadmap definition",
        "Guidance on approaching recognized incubators or research institutions",
      ],
    },
    {
      id: "scheme-11",
      number: "11",
      title: "Import Export Code (IEC) and Export Readiness",
      description:
        "Businesses planning cross-border trade must obtain an Import Export Code from DGFT and understand applicable international trade regulations, customs compliance, and export incentives.",
      icon: Globe,
      assist: [
        "IEC online application guidance on the DGFT portal",
        "Import-export statutory documentation checklist",
        "Export readiness review, RCMC registration, and logistics orientation",
        "Research into relevant export promotion schemes (RoDTEP, EPCG)",
      ],
    },
    {
      id: "scheme-12",
      number: "12",
      title: "Licences, Certification and Sector-Specific Support",
      description:
        "Enterprises require specific mandatory registrations and operational licences before commencing business operations or becoming eligible for particular government schemes.",
      icon: FileCheck2,
      assist: [
        "Initial review of mandatory regulatory requirements for your sector",
        "FSSAI food licences, trade licences, and labour compliance support",
        "Certification process coordination (ISO, Trademark, Patent readiness)",
        "Guidance on relevant official government application channels",
      ],
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#001A40] mb-3">
            Explore Government Schemes &amp; Programmes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Detailed information on key central and state initiatives, including our independent consultancy scope.
          </p>
        </div>

        {/* 12 Schemes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {schemes.map((scheme) => {
            const Icon = scheme.icon;
            return (
              <div
                key={scheme.id}
                id={scheme.id}
                className="scroll-mt-24 group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-[#C58A1B]/50 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#001A40]/5 text-[#001A40] transition-colors duration-300 group-hover:bg-[#001A40] group-hover:text-[#E5A93C]">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#C58A1B] rounded-full bg-[#C58A1B]/10 px-2.5 py-0.5">
                      Scheme {scheme.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#001A40] mb-2.5 group-hover:text-[#C58A1B] transition-colors">
                    {scheme.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] leading-relaxed text-slate-600 mb-5">
                    {scheme.description}
                  </p>

                  <div className="border-t border-slate-100 pt-4 mb-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#001A40] mb-3">
                      How Bharat Startup Ventures Can Assist:
                    </h4>
                    <ul className="space-y-2">
                      {scheme.assist.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 size={14} className="text-[#00843D] mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#001A40] hover:text-[#C58A1B] transition-colors"
                  >
                    <span>Enquire for {scheme.title.split("(")[0].trim()}</span>
                    <ArrowRight size={13} className="text-[#C58A1B]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
