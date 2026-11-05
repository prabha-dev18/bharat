"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Building2, Landmark, Scale, BadgeCheck, Cpu, Globe, ChevronRight, ArrowUpRight } from "lucide-react";

export default function CoreSolutions() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

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
      { threshold: 0.1 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  const solutions = [
    {
      id: "business-registration",
      title: "Business Registration & Startup Support",
      description:
        "Assistance with company incorporation, LLP and partnership registration, MSME registration, startup recognition and business documentation.",
      icon: Building2,
      badge: "Incorporation",
      href: "/services#business-registration",
      cta: "Explore Business Registration",
    },
    {
      id: "funding-support",
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
      title: "Taxation & Business Compliance",
      description:
        "Assistance with GST, income tax returns, TDS documentation, statutory filings, accounting support and applicable regulatory requirements.",
      icon: Scale,
      badge: "ROC & Tax",
      href: "/services#taxation-compliance",
      cta: "Explore Compliance Support",
    },
    {
      id: "government-schemes",
      title: "Government Schemes & Subsidies",
      description:
        "Guidance to identify potentially relevant central and state government programmes, understand eligibility and prepare application documentation.",
      icon: BadgeCheck,
      badge: "PMEGP & DPIIT",
      href: "/government-schemes",
      cta: "Explore Government Schemes",
    },
    {
      id: "software-digital",
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
      title: "Digital Marketing & Branding",
      description: "SEO, digital marketing strategy, social media, brand identity and creative services to strengthen online visibility.",
      icon: Globe,
      badge: "Growth & SEO",
      href: "/services#digital-marketing",
      cta: "Explore Digital Growth",
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="relative isolate overflow-hidden bg-white py-12 sm:py-14 lg:py-10">
      {/* Background Decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#C89D3C]/10" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-16 h-56 w-56 rounded-full border border-[#0A2540]/[0.06]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#F8F5ED]/70 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12 xl:px-0">
        {/* Section Header */}
        <div
          className={`mb-10 flex flex-col items-center text-center transition-all duration-700 sm:mb-12 lg:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="mb-3.5 inline-flex">
            <span className="rounded-sm border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase">
              CORE STRATEGIC SOLUTIONS
            </span>
          </div>

          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-[34px]">
            Comprehensive Business Solutions Under One Roof
          </h2>

          <div className="mt-3.5 h-1 w-16 rounded-full bg-[#C89D3C]" />

          <p className="mt-4 max-w-2xl text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px] sm:leading-[1.8]">
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
                className={`group relative flex min-h-[250px] flex-col overflow-hidden rounded-sm border transition-all duration-700 hover:-translate-y-1 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                } ${
                  featured
                    ? "border-[#0A2540] bg-[#0A2540] text-white"
                    : "border-slate-200 bg-white text-[#0A2540] hover:border-[#C89D3C]/70"
                }`}
              >
                {/* Top Gold Accent */}
                <div className={`h-[3px] w-full ${featured ? "bg-[#F3D072]" : "bg-[#C89D3C]/70"}`} />

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  {/* Top Header: Icon & Category Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-sm border transition-all duration-300 ${
                        featured
                          ? "border-white/20 bg-white/10 text-[#F3D072]"
                          : "border-[#C89D3C]/30 bg-[#F4F6F9] text-[#0A2540] group-hover:border-[#C89D3C] group-hover:bg-[#0A2540] group-hover:text-[#F3D072]"
                      }`}
                    >
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <span
                      className={`rounded-sm border px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.12em] ${
                        featured
                          ? "border-white/20 bg-white/10 text-white/90"
                          : "border-[#C89D3C]/30 bg-[#FBF8F0] text-[#7A5615]"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3
                    className={`mt-4 text-base font-bold leading-snug transition-colors duration-300 sm:text-[17px] ${
                      featured ? "text-white" : "text-[#0A2540] group-hover:text-[#C89D3C]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Service Description */}
                  <p
                    className={`mt-2 text-[12.5px] leading-relaxed sm:text-[13px] ${
                      featured ? "text-white/80" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Bottom Action Row */}
                  <div
                    className={`mt-auto pt-4 flex items-center justify-between gap-2 border-t ${
                      featured ? "border-white/15" : "border-slate-100"
                    }`}
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex min-w-0 items-center gap-1.5 text-[11px] font-bold transition-colors duration-300 sm:text-xs ${
                        featured ? "text-white hover:text-[#F3D072]" : "text-[#0A2540] hover:text-[#C89D3C]"
                      }`}
                    >
                      <span>{item.cta}</span>

                      <ChevronRight size={15} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
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
