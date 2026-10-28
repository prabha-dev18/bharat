"use client";

import { useEffect, useRef, useState } from "react";
import { Rocket, Building2, Factory, Sprout, ShoppingCart, BriefcaseBusiness, Cpu, Layers, ArrowRight } from "lucide-react";

export default function WhoWeSupport() {
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

  const sectors = [
    {
      title: "Entrepreneurs & Early-Stage Startups",
      description:
        "Business incorporation, DPIIT recognition, pitch deck preparation, startup funding documentation, and essential setup guidance.",
      icon: Rocket,
    },
    {
      title: "Micro, Small & Medium Enterprises (MSMEs)",
      description:
        "Udyam registration, CGTMSE credit assistance, detailed project reports, banking documentation, and MSME growth support.",
      icon: Building2,
    },
    {
      title: "Manufacturing & Industrial Enterprises",
      description: "Industrial licensing, ZED certification, government incentives, working capital assistance, and regulatory compliance.",
      icon: Factory,
    },
    {
      title: "Agriculture & Food-Processing Units",
      description: "PMFME schemes, Agri-Infrastructure Fund support, cold chain subsidies, FSSAI licensing, and food business guidance.",
      icon: Sprout,
    },
    {
      title: "Retail & E-commerce Companies",
      description: "E-commerce website development, GST registration, payment gateway integration, digital marketing, and brand growth.",
      icon: ShoppingCart,
    },
    {
      title: "Professional Service Organizations",
      description:
        "ROC compliance, statutory filings, accounting automation, client portal development, and professional brand visibility.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Technology-Driven Ventures",
      description:
        "Custom software development, AI-powered automation, CRM implementation, digital transformation, and startup tax support.",
      icon: Cpu,
    },
    {
      title: "Established Growing Businesses",
      description:
        "Business expansion planning, digital transformation, corporate restructuring, IEC registration, and financial assistance.",
      icon: Layers,
    },
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-6 sm:py-8 lg:py-10">
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-8 xl:px-0">
        {/* Section Heading (Fade Down) */}
        <div
          className={`mx-auto mb-6 max-w-3xl text-center transition-all duration-800 sm:mb-7 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-center justify-center gap-3 sm:mb-7">
            <span className="h-px w-8 bg-[#C58A1B]" />

            <span className="text-center text-[10px] font-bold uppercase tracking-[0.22em] text-[#C58A1B] sm:text-[11px]">
              Diverse Enterprise Ecosystem
            </span>

            <span className="h-px w-12 bg-[#00245A]/15" />
          </div>
          {/* Heading Title - Unchanged */}

          <h3 className="mb-3 text-center font-heading text-[clamp(1.25rem,2.2vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-[#00245A]">
            Multiple Capabilities. One <span className="text-[#C58A1B]">Trusted Partner.</span>
          </h3>
          <span className="mx-auto mt-3 mb-3 block h-[3px] w-16 rounded-full bg-gradient-to-r from-[#C58A1B] to-[#E9D6A5] transition-all duration-700 delay-500 sm:w-20" />

          <p className="mx-auto max-w-2xl text-center text-[12px] leading-[1.8] text-slate-600 sm:text-[13px]">
            We offer integrated business and technology solutions with practical guidance, clear communication and long-term support.
          </p>
        </div>

        {/* Directory-Style Sector Structure (Staggered Fade) */}
        <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-2 lg:gap-x-10">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            const isLeftCol = index % 2 === 0;

            return (
              <div
                key={sector.title}
                style={{
                  transitionDelay: `${Math.floor(index / 2) * 90 + 100}ms`,
                }}
                className={`group relative flex items-start gap-3 border-b border-slate-200/80 py-4 transition-all duration-700 hover:border-[#C58A1B] sm:gap-4 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : isLeftCol
                    ? "-translate-x-6 opacity-0"
                    : "translate-x-6 opacity-0"
                }`}
              >
                {/* Number and Icon */}
                <div className="flex shrink-0 flex-col items-center gap-2">
                  <span className="font-heading text-[12px] font-semibold tracking-wider text-[#C58A1B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F7FB] text-[#00245A] transition-all duration-300 group-hover:bg-[#00245A] group-hover:text-[#E5A93C]">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Sector Information */}
                <div className="min-w-0 flex-1 pt-1">
                  <h3 className="text-[12px] font-bold leading-snug text-[#00245A] transition-colors duration-300 group-hover:text-[#C58A1B] sm:text-[13px]">
                    {sector.title}
                  </h3>

                  <p className="mt-1.5 text-[11px] leading-[1.7] text-slate-500 sm:text-xs">{sector.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
