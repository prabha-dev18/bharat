"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BriefcaseBusiness, Landmark, ShieldCheck, Rocket, Cpu, Megaphone, ChevronRight, ArrowUpRight } from "lucide-react";

export default function CoreSolutions() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  const solutions = [
    {
      id: "business-registration",
      number: "01",
      title: "Business Registration & Startup Support",
      description:
        "Assistance with company incorporation, LLP and partnership registration, MSME registration, startup recognition and business documentation.",
      icon: BriefcaseBusiness,
      badge: "Incorporation",
      href: "/services#business-registration",
      cta: "Explore Business Registration",
    },
    {
      id: "funding-support",
      number: "02",
      title: "Funding & Financial Assistance",
      description:
        "Support with funding readiness, loan documentation, business plans, project reports, financial projections and relevant funding opportunities.",
      icon: Landmark,
      badge: "Capital & DPR",
      href: "/services#startup-funding",
      cta: "Explore Funding Support",
    },
    {
      id: "taxation-compliance",
      number: "03",
      title: "Taxation & Business Compliance",
      description:
        "Assistance with GST, income tax returns, TDS documentation, statutory filings, accounting support and applicable regulatory requirements.",
      icon: ShieldCheck,
      badge: "ROC & Tax",
      href: "/services#taxation-compliance",
      cta: "Explore Compliance Support",
    },
    {
      id: "government-schemes",
      number: "04",
      title: "Government Schemes & Subsidies",
      description:
        "Guidance to identify potentially relevant central and state government programmes, understand eligibility and prepare application documentation.",
      icon: Rocket,
      badge: "PMEGP & DPIIT",
      href: "/government-schemes",
      cta: "Explore Government Schemes",
    },
    {
      id: "software-digital",
      number: "05",
      title: "Software, AI & Digital Solutions",
      description:
        "Website and e-commerce development, mobile applications, custom software, CRM systems, workflow automation and AI integration.",
      icon: Cpu,
      badge: "AI & Tech",
      href: "/services#ai-automation",
      cta: "Explore Technology Solutions",
    },
    {
      id: "digital-marketing",
      number: "06",
      title: "Digital Marketing & Branding",
      description: "SEO, digital marketing strategy, social media, brand identity and creative services to strengthen online visibility.",
      icon: Megaphone,
      badge: "Growth & SEO",
      href: "/services#digital-marketing",
      cta: "Explore Digital Growth",
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="relative isolate overflow-hidden bg-white py-6 sm:py-8 lg:py-10">
      {/* Background Decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#C58A1B]/10" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-16 h-56 w-56 rounded-full border border-[#00245A]/[0.06]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#F8F5ED]/70 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-8 xl:px-0">
        {/* Section Header */}
        <div
          className={`mb-6 flex items-center gap-3 transition-all duration-700 sm:mb-7 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <span className="h-px w-8 bg-[#C58A1B]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C58A1B] sm:text-[11px]">Core Strategic Solutions</span>

          <span className="h-px w-12 bg-[#00245A]/15" />
        </div>

        {/* Heading and Subtitle */}
        <div
          className={`mb-7 max-w-3xl transition-all duration-700 delay-100 sm:mb-8 lg:mb-9 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h3 className="mb-4 font-heading text-[clamp(1.25rem,2.2vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-[#00245A]">
            Comprehensive Business Solutions <span className="text-[#C58A1B]">Under One Roof</span>
            <span className="mt-3 block h-[3px] w-16 rounded-full bg-gradient-to-r from-[#C58A1B] to-[#E9D6A5] transition-all duration-700 delay-500 sm:w-20" />
          </h3>

          <p className="max-w-2xl text-[12px] leading-[1.8] text-slate-600 sm:text-[13px]">
            Explore support for different stages of the business journey—from initial setup to operational improvement and digital growth.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            const featured = index === 1;

            return (
              <article
                key={item.id}
                style={{
                  transitionDelay: `${150 + index * 80}ms`,
                }}
                className={`group relative flex min-h-[250px] flex-col overflow-hidden rounded-md border transition-all duration-700 hover:-translate-y-1 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                } ${
                  featured
                    ? "border-[#00245A] bg-[#00245A] text-white"
                    : "border-slate-200 bg-white text-[#00245A] hover:border-[#C58A1B]/70"
                }`}
              >
                {/* Top Gold Accent */}
                <div className={`h-[3px] w-full ${featured ? "bg-[#D9A12E]" : "bg-[#C58A1B]/70"}`} />

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  {/* Number and Category */}
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`font-mono text-3xl font-light leading-none tracking-tight ${
                        featured ? "text-[#D9A12E]" : "text-[#C58A1B]"
                      }`}
                    >
                      {item.number}
                    </span>

                    <span
                      className={`rounded-md border px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] ${
                        featured ? "border-white/20 text-white/80" : "border-[#C58A1B]/30 bg-[#FBF8F0] text-[#8B6416]"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon Panel */}
                  <div
                    className={`mt-4 flex h-10 w-10 items-center justify-center rounded-md border transition-all duration-300 ${
                      featured
                        ? "border-white/20 bg-white/10 text-[#D9A12E]"
                        : "border-[#00245A]/10 bg-[#F4F6F9] text-[#00245A] group-hover:border-[#C58A1B]/50 group-hover:bg-[#00245A] group-hover:text-[#D9A12E]"
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.6} />
                  </div>

                  {/* Service Title */}
                  <h4
                    className={`mt-3 text-base font-semibold leading-snug transition-colors duration-300 sm:text-[17px] ${
                      featured ? "text-white" : "text-[#00245A] group-hover:text-[#9A6B12]"
                    }`}
                  >
                    {item.title}
                  </h4>

                  {/* Service Description */}
                  <p className={`mt-2 text-[12px] leading-[1.8] sm:text-[13px] ${featured ? "text-white/75" : "text-slate-600"}`}>
                    {item.description}
                  </p>

                  {/* Bottom Action Row */}
                  <div
                    className={`mt-auto mt-4 flex items-center justify-between gap-2 border-t pt-3 ${
                      featured ? "border-white/20" : "border-slate-200"
                    }`}
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex min-w-0 items-center gap-1.5 text-[11px] font-bold transition-colors duration-300 sm:text-xs ${
                        featured ? "text-white hover:text-[#D9A12E]" : "text-[#00245A] hover:text-[#C58A1B]"
                      }`}
                    >
                      <span>{item.cta}</span>

                      <ChevronRight size={15} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    <ArrowUpRight
                      size={16}
                      className={`shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                        featured ? "text-[#D9A12E]" : "text-[#C58A1B]"
                      }`}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
