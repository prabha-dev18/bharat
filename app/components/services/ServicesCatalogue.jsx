"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BriefcaseBusiness,
  ShieldCheck,
  Landmark,
  Rocket,
  Award,
  Globe,
  Smartphone,
  Cpu,
  Megaphone,
  BarChart3,
  Factory,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  ChevronRight,
  Sparkles,
  Phone,
  Layers,
} from "lucide-react";

export default function ServicesCatalogue() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categories = [
    {
      id: "business-registration",
      number: "01",
      title: "Business Registration & Incorporation",
      tagline: "Establish Your Business on a Strong Foundation",
      intro:
        "Get assistance navigating business formation processes, understanding registration requirements and preparing relevant documentation.",
      icon: BriefcaseBusiness,
      services: [
        "Private Limited Company Incorporation Assistance",
        "Limited Liability Partnership (LLP) Registration",
        "One Person Company (OPC) Registration",
        "Partnership Firm Registration",
        "Proprietorship Setup Guidance",
        "MSME / Udyam Registration Assistance",
        "Startup India Recognition Assistance",
        "DPIIT Recognition Application Support",
        "Digital Signature Certificate (DSC) Assistance",
        "Director Identification Number (DIN) Assistance",
      ],
      seoTopics:
        "Company registration services, private limited company incorporation, LLP registration, startup registration in India, MSME registration.",
      slug: "business-registration",
    },
    {
      id: "taxation-compliance",
      number: "02",
      title: "Taxation & Statutory Compliance",
      tagline: "Manage Tax and Compliance Requirements with Clarity",
      intro:
        "Organize business documentation and navigate applicable taxation and statutory filing requirements with appropriate assistance.",
      icon: ShieldCheck,
      services: [
        "GST Registration Assistance",
        "GST Return Filing",
        "Income Tax Return (ITR) Filing",
        "Tax Documentation and Record Preparation",
        "TDS Compliance Assistance",
        "MCA Annual Filing Assistance",
        "Registrar of Companies (ROC) Compliance",
        "Company and LLP Statutory Documentation",
        "Accounting and Bookkeeping Support",
        "Compliance Calendar Preparation and Tracking",
      ],
      seoTopics:
        "GST registration and filing, income tax return services, ROC filing assistance, business compliance services.",
      note: "Actual filing and professional services should be provided only where appropriately qualified and authorized.",
      slug: "taxation-compliance",
    },
    {
      id: "startup-funding",
      number: "03",
      title: "Startup Funding & Financial Assistance",
      tagline: "Prepare Your Business for Funding Opportunities",
      intro:
        "A well-prepared business plan, clear financial projections and organized documentation can help businesses prepare for funding discussions.",
      icon: Landmark,
      services: [
        "Startup Funding Readiness",
        "Seed Funding Application Preparation",
        "Investor Pitch Deck Preparation",
        "Business Plan Development",
        "Detailed Project Report (DPR) Preparation",
        "MSME Business Loan Documentation",
        "Working Capital and Term Loan Documentation",
        "Cash Credit Application Preparation",
        "MUDRA Loan Application Assistance",
        "CGTMSE-Linked Loan Documentation Support",
        "Financial Projections and Cost Estimates",
        "Loan Application Documentation and Coordination",
      ],
      seoTopics:
        "Startup funding assistance, MSME loan documentation, business project report, startup pitch deck, business loan application support.",
      disclaimer:
        "Funding availability, lender decisions, scheme eligibility and approvals are not guaranteed.",
      slug: "startup-funding",
    },
    {
      id: "government-schemes",
      number: "04",
      title: "Government Schemes, Grants & Subsidies",
      tagline: "Explore Relevant Government Support Opportunities",
      intro:
        "Understand potentially relevant government programmes and organize the documentation needed to assess and prepare an application.",
      icon: Rocket,
      services: [
        "Government Scheme Research",
        "Startup India Programme Guidance",
        "PMEGP Application Assistance",
        "Pradhan Mantri MUDRA Yojana Guidance",
        "CGTMSE Scheme Guidance",
        "MSME Subsidy and Incentive Research",
        "Agriculture and Food-Processing Scheme Research",
        "Manufacturing and Industrial Incentive Research",
        "Sector-Specific Grant Research",
        "Eligibility Review and Document Preparation",
        "Application Preparation and Follow-Up Coordination",
      ],
      seoTopics:
        "Government schemes for startups, MSME subsidy assistance, PMEGP application support, business grant research, government funding eligibility.",
      disclaimer:
        "Scheme names, eligibility, benefits and availability must be checked against current official guidelines. Application support does not guarantee approval or receipt of funds.",
      ctaLink: {
        label: "Explore Government Schemes Hub",
        href: "/government-schemes",
      },
      slug: "government-schemes",
    },
    {
      id: "licences-certifications",
      number: "05",
      title: "Licences, Certifications & Intellectual Property",
      tagline: "Navigate Business Licensing and Certification Requirements",
      intro:
        "Identify the documentation and processes relevant to your business activity, sector and operating location.",
      icon: Award,
      services: [
        "FSSAI Registration and Licensing Assistance",
        "Trade Licence Assistance",
        "Applicable Labour Licence Support",
        "Import Export Code (IEC) Application Assistance",
        "ISO Certification Readiness Support",
        "ZED Certification Assistance",
        "Trademark Registration Assistance",
        "Section 80-IAC Eligibility and Application Support",
        "Business Documentation and Certification Coordination",
      ],
      seoTopics:
        "FSSAI licence assistance, Import Export Code registration, trademark registration support, ISO certification assistance, business licence services.",
      disclaimer:
        "Specific requirements depend on the nature of the business and current applicable regulations. Certifications and statutory approvals are issued by the relevant bodies.",
      slug: "licences-certifications",
    },
    {
      id: "website-ecommerce",
      number: "06",
      title: "Website & E-commerce Development",
      tagline: "Build a Professional Digital Presence",
      intro:
        "Develop a website that communicates your business clearly, supports customer enquiries and provides a foundation for digital growth.",
      icon: Globe,
      services: [
        "Corporate Website Development",
        "Business and Portfolio Websites",
        "E-commerce Website Development",
        "Product Catalogue Websites",
        "Landing Page Design and Development",
        "Website Redesign and Modernization",
        "Responsive Website Development",
        "Content Management Solutions",
        "Website Maintenance and Technical Support",
        "Website Speed and Performance Improvements",
        "On-Page SEO Foundations",
        "Website Analytics Integration",
      ],
      seoTopics:
        "Website development company, corporate website design, e-commerce development services, responsive website development, website SEO optimization.",
      slug: "website-ecommerce",
    },
    {
      id: "mobile-software",
      number: "07",
      title: "Mobile Applications & Custom Software",
      tagline: "Develop Technology Around Your Business Processes",
      intro:
        "Create digital solutions to support customer management, internal workflows, reporting and day-to-day operations.",
      icon: Smartphone,
      services: [
        "Android Application Development",
        "iOS Application Development",
        "Custom Business Software",
        "Customer Relationship Management (CRM) Systems",
        "Workflow and Enterprise Applications",
        "Admin Panels and Management Portals",
        "Business Dashboards and Reporting Tools",
        "API Integration",
        "Database-Driven Applications",
        "Software Maintenance and Enhancements",
      ],
      seoTopics:
        "Custom software development, mobile app development, CRM development, business management software, enterprise application development.",
      slug: "mobile-software",
    },
    {
      id: "ai-automation",
      number: "08",
      title: "AI & Business Automation",
      tagline: "Improve Efficiency with Intelligent Workflows",
      intro:
        "Explore automation solutions that reduce repetitive tasks, improve response handling and support more consistent business processes.",
      icon: Cpu,
      services: [
        "AI Chatbots and Virtual Assistants",
        "Customer Enquiry Automation",
        "Workflow and Task Automation",
        "Lead Capture and Management",
        "WhatsApp Business Workflow Integration",
        "Automated Notifications and Follow-Ups",
        "Document Processing Workflows",
        "Business Process Automation",
        "AI Integration for Business Applications",
        "Automation Strategy and Implementation",
      ],
      seoTopics:
        "AI automation services, business process automation, AI chatbot development, workflow automation, AI integration for businesses.",
      disclaimer:
        "Automation scope, integrations and functionality depend on technical feasibility, platform access and project requirements.",
      slug: "ai-automation",
    },
    {
      id: "digital-marketing",
      number: "09",
      title: "Digital Marketing, SEO & Branding",
      tagline: "Strengthen Your Online Visibility and Brand Identity",
      intro:
        "Build a consistent digital presence through search optimization, content, marketing campaigns and creative communication.",
      icon: Megaphone,
      services: [
        "Search Engine Optimization (SEO)",
        "Local SEO",
        "Digital Marketing Strategy",
        "Social Media Management",
        "Search and Digital Advertising",
        "Content Marketing",
        "Brand Identity Development",
        "Logo and Graphic Design",
        "Marketing Collateral Design",
        "Video and Creative Content",
        "Website Analytics and Performance Reporting",
      ],
      seoTopics:
        "Digital marketing services, SEO services, local SEO, branding and graphic design, online marketing solutions.",
      disclaimer:
        "Marketing results depend on competition, budgets, strategy, implementation and other factors. Search rankings and advertising outcomes cannot be guaranteed.",
      slug: "digital-marketing",
    },
    {
      id: "data-analytics",
      number: "10",
      title: "Data Analytics & Digital Transformation",
      tagline: "Turn Business Data into Useful Insights",
      intro:
        "Organize business information and explore technology-led improvements to support more informed decisions.",
      icon: BarChart3,
      services: [
        "Business Intelligence Dashboards",
        "Data Visualization and Reporting",
        "Business Performance Analytics",
        "Data Organization and Reporting Workflows",
        "Process Digitization",
        "Digital Transformation Planning",
        "Operational Workflow Improvement",
        "Technology Assessment and Recommendations",
      ],
      seoTopics:
        "Business analytics solutions, business intelligence dashboards, digital transformation services, business reporting automation.",
      slug: "data-analytics",
    },
    {
      id: "industry-specific",
      number: "11",
      title: "Industry-Specific Business Support",
      tagline: "Solutions for Diverse Business Requirements",
      intro:
        "We can explore service combinations based on the operational and documentation needs of different sectors, including agriculture, food processing, manufacturing, retail, education, healthcare, real estate, and tech startups.",
      icon: Factory,
      services: [
        "Agriculture & Agribusiness Advisory",
        "Food Processing Units & FSSAI Standards",
        "Manufacturing & Industrial Project Setups",
        "Retail & E-commerce Operations",
        "Education & EdTech Institutional Advisory",
        "Healthcare & Clinical Professional Support",
        "Real Estate & Construction Compliance",
        "IT & High-Growth SaaS Ventures",
      ],
      seoTopics:
        "Industry-specific business setup, MSME food processing, manufacturing setup assistance, tech startup consulting.",
      disclaimer:
        "Support may involve business setup, documentation, relevant compliance guidance, technology implementation and research into applicable funding opportunities.",
      slug: "industry-specific",
    },
  ];

  const activeCategory = categories[activeCategoryIndex] || categories[0];
  const ActiveIcon = activeCategory.icon;

  return (
    <section className="relative py-12 sm:py-16 bg-[#FAF9F5] border-b border-slate-200/80 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
          <div className="mb-3.5 inline-flex">
            <span className="rounded-sm border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase">
              OFFICIAL SERVICES DIRECTORY
            </span>
          </div>

          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-[34px] mb-2">
            Explore Services by Department &amp; Pillar
          </h2>
          <div className="mt-3.5 h-1 w-16 rounded-full bg-[#C89D3C] mx-auto" />
          <p className="mt-4 max-w-2xl text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px] sm:leading-[1.8] mx-auto">
            Select a service category from the government directory below to view detailed scope, deliverables, and dedicated individual pages.
          </p>
        </div>

        <div className="lg:hidden mb-6">
          <label htmlFor="service-mobile-select" className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-2">
            Select Service Pillar ({categories.length} Categories):
          </label>
          <div className="relative">
            <select
              id="service-mobile-select"
              value={activeCategoryIndex}
              onChange={(e) => setActiveCategoryIndex(Number(e.target.value))}
              className="w-full appearance-none rounded-sm border-2 border-[#0A2540] bg-white px-4 py-3 text-xs font-bold text-[#0A2540] shadow-sm focus:border-[#C89D3C] focus:outline-none"
            >
              {categories.map((cat, idx) => (
                <option key={cat.id} value={idx}>
                  {cat.number}. {cat.title}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#0A2540]">
              <ChevronRight size={16} className="rotate-90" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="hidden lg:block lg:col-span-4 sticky top-28">
            <div className="rounded-sm border border-slate-200 bg-white p-3 shadow-md">
              <div className="flex items-center justify-between px-3 py-2.5 border-b border-slate-100 mb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0A2540] flex items-center gap-1.5">
                  <Layers size={14} className="text-[#C89D3C]" />
                  Service Pillars
                </span>
                <span className="text-[10px] font-mono font-bold text-[#C89D3C] bg-[#C89D3C]/10 px-2 py-0.5 rounded-full">
                  11 Categories
                </span>
              </div>

              <div className="space-y-1 max-h-[560px] overflow-y-auto pr-1">
                {categories.map((cat, idx) => {
                  const Icon = cat.icon;
                  const isActive = activeCategoryIndex === idx;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategoryIndex(idx)}
                      className={`w-full text-left flex items-center justify-between gap-2.5 rounded-sm px-3 py-2.5 text-xs transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#0A2540] text-white shadow-sm font-bold"
                          : "text-slate-700 hover:bg-slate-100 font-medium"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`font-mono text-[11px] font-bold shrink-0 ${
                            isActive ? "text-[#F3D072]" : "text-slate-400"
                          }`}
                        >
                          {cat.number}
                        </span>
                        <Icon
                          size={15}
                          className={`shrink-0 ${
                            isActive ? "text-[#C89D3C]" : "text-[#0A2540]"
                          }`}
                        />
                        <span className="truncate text-xs">{cat.title}</span>
                      </div>
                      <ChevronRight
                        size={14}
                        className={`shrink-0 transition-transform ${
                          isActive ? "text-[#C89D3C] translate-x-0.5" : "text-slate-300"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="rounded-sm border border-slate-200 bg-white p-6 sm:p-8 lg:p-9 shadow-md transition-all">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#0A2540] text-[#C89D3C] shadow-sm">
                    <ActiveIcon size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C89D3C]">
                      PILLAR {activeCategory.number} OF 11
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0A2540] leading-tight">
                      {activeCategory.title}
                    </h3>
                  </div>
                </div>

                <span className="rounded-full bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 border border-slate-200">
                  {activeCategory.services.length} Solutions Included
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-sm sm:text-base font-bold text-[#C89D3C] mb-2">
                  {activeCategory.tagline}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeCategory.intro}
                </p>
              </div>

              <div className="mb-8">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-3.5">
                  Scope of Services &amp; Deliverables:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 py-1">
                  {activeCategory.services.map((serviceName, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-start gap-2.5 py-1.5 transition-colors"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#00843D] border border-emerald-200 mt-0.5">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-xs sm:text-[13px] font-medium text-slate-800 leading-snug">
                        {serviceName}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {(activeCategory.disclaimer || activeCategory.note) && (
                <div className="mb-6 flex items-start gap-2.5 rounded-sm border border-amber-200 bg-amber-50/60 p-4 text-xs text-amber-900 leading-relaxed">
                  <AlertCircle size={16} className="text-[#C89D3C] shrink-0 mt-0.5" />
                  <span>{activeCategory.disclaimer || activeCategory.note}</span>
                </div>
              )}

              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/services/${activeCategory.slug}`}
                  className="group inline-flex items-center justify-center gap-2 rounded-sm bg-[#0A2540] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#12365c] hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Open Dedicated {activeCategory.title.split("&")[0].trim()} Page</span>
                  <ArrowRight size={15} className="text-[#C89D3C] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href={`/contact?subject=${encodeURIComponent(activeCategory.title)}`}
                  className="inline-flex items-center gap-2 rounded-sm border border-slate-300 bg-white px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#0A2540] hover:border-[#C89D3C] hover:bg-slate-50 transition-colors"
                >
                  <Phone size={14} className="text-[#00843D]" />
                  <span>Enquire for This Pillar</span>
                </Link>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700">Official Regulatory Framework: </span>
                {activeCategory.seoTopics}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
