"use client";

import Link from "next/link";
import {
  BriefcaseBusiness,
  Landmark,
  ShieldCheck,
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
  HelpCircle,
} from "lucide-react";

export default function ServicesCatalogue() {
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
    },
    {
      id: "industry-specific",
      number: "11",
      title: "Industry-Specific Business Support",
      tagline: "Solutions for Diverse Business Requirements",
      intro:
        "We can explore service combinations based on the operational and documentation needs of different sectors, including agriculture and agribusiness, food processing, manufacturing and industrial projects, retail and e-commerce, education and training, healthcare and professional services, real estate and construction, IT and technology businesses, and startup or innovation projects.",
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
        "Support may involve business setup, documentation, relevant compliance guidance, technology implementation and research into applicable funding opportunities. List industry-specific services as active offerings only where the company can genuinely deliver them.",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Quick Division Selector Pills */}
        <div className="mb-14 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-xs font-bold text-[#001A40] uppercase tracking-wider mr-2">
              Jump To Division:
            </span>
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="rounded-full border border-slate-200/90 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-[#C58A1B] hover:bg-white hover:text-[#001A40] transition-colors"
              >
                {cat.number}. {cat.title.split("&")[0].trim()}
              </a>
            ))}
          </div>
        </div>

        {/* The 11 Detailed Divisions */}
        <div className="space-y-12 sm:space-y-16">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                id={cat.id}
                className="scroll-mt-24 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-[0_10px_35px_rgba(0,26,64,0.04)] transition-all hover:border-[#C58A1B]/40 hover:shadow-xl"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#001A40] text-[#E5A93C] shadow-md shadow-[#001A40]/15 shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="rounded-full bg-[#C58A1B]/15 px-2.5 py-0.5 text-[10px] font-mono font-bold text-[#C58A1B]">
                          Division {cat.number}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-[#001A40]">
                        {cat.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-[#C58A1B] mt-0.5">
                        {cat.tagline}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#001A40] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#00122E] hover:shadow-md transition-all shrink-0"
                  >
                    <span>Enquire for Division</span>
                    <ArrowRight size={13} className="text-[#E5A93C]" />
                  </Link>
                </div>

                {/* Intro Paragraph */}
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 mb-6">
                  {cat.intro}
                </p>

                {/* Services Included Grid */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#001A40] mb-3.5">
                    Services Included:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2.5">
                    {cat.services.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/60 p-2.5 sm:p-3"
                      >
                        <CheckCircle2 size={15} className="text-[#00843D] mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-[13px] font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special CTA if available */}
                {cat.ctaLink && (
                  <div className="mb-5">
                    <Link
                      href={cat.ctaLink.href}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#001A40] hover:text-[#C58A1B] transition-colors"
                    >
                      <span>{cat.ctaLink.label}</span>
                      <ArrowRight size={14} className="text-[#C58A1B]" />
                    </Link>
                  </div>
                )}

                {/* Disclaimer / Statutory Notes */}
                {(cat.disclaimer || cat.note) && (
                  <div className="mb-4 flex items-start gap-2 rounded-xl border border-amber-200/80 bg-amber-50/50 p-3 text-[11.5px] text-amber-900 leading-relaxed">
                    <AlertCircle size={15} className="text-[#C58A1B] shrink-0 mt-0.5" />
                    <span>{cat.disclaimer || cat.note}</span>
                  </div>
                )}

                {/* SEO Focus Topics */}
                <div className="rounded-xl bg-slate-50 p-3 border border-slate-100 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Relevant Search Topics: </span>
                  {cat.seoTopics}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
