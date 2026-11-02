"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BadgeCheck, Building2, Factory, Sprout, Store, Scale, Cpu, TrendingUp } from "lucide-react";

const sectors = [
  {
    title: "Entrepreneurs & Early-Stage Startups",
    description:
      "Business incorporation, DPIIT recognition, pitch deck preparation, startup funding documentation, and essential setup guidance.",
    icon: BadgeCheck,
    image: "/images/gov-startups.jpg",
    ministry: "DPIIT • STARTUP INDIA",
  },
  {
    title: "Micro, Small & Medium Enterprises (MSMEs)",
    description:
      "Udyam registration, CGTMSE credit assistance, detailed project reports, banking documentation, and MSME growth support.",
    icon: Building2,
    image: "/images/gov-msme.jpg",
    ministry: "MINISTRY OF MSME",
  },
  {
    title: "Manufacturing & Industrial Enterprises",
    description:
      "Industrial licensing, ZED certification, government incentives, working capital assistance, and regulatory compliance.",
    icon: Factory,
    image: "/images/gov-manufacturing.jpg",
    ministry: "HEAVY INDUSTRY • ZED",
  },
  {
    title: "Agriculture & Food-Processing Units",
    description:
      "PMFME schemes, Agri-Infrastructure Fund support, cold chain subsidies, FSSAI licensing, and food business guidance.",
    icon: Sprout,
    image: "/images/gov-agri.jpg",
    ministry: "MOFPI • AGRI-INFRA",
  },
  {
    title: "Retail & E-commerce Companies",
    description:
      "E-commerce website development, GST registration, payment gateway integration, digital marketing, and brand growth.",
    icon: Store,
    image: "/images/gov-retail.jpg",
    ministry: "COMMERCE • ONDC",
  },
  {
    title: "Professional Service Organizations",
    description:
      "ROC compliance, statutory filings, accounting automation, client portal development, and professional brand visibility.",
    icon: Scale,
    image: "/images/gov-legal.jpg",
    ministry: "MCA • STATUTORY",
  },
  {
    title: "Technology-Driven Ventures",
    description:
      "Custom software development, AI-powered automation, CRM implementation, digital transformation, and startup tax support.",
    icon: Cpu,
    image: "/images/gov-tech.jpg",
    ministry: "MEITY • DIGITAL INDIA",
  },
  {
    title: "Established Growing Businesses",
    description:
      "Business expansion planning, digital transformation, corporate restructuring, IEC registration, and financial assistance.",
    icon: TrendingUp,
    image: "/images/gov-export.jpg",
    ministry: "DGFT • COMMERCE",
  },
];

export default function WhoWeSupport() {
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
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="who-we-support" ref={sectionRef} className="relative w-full bg-[#FAFBFD] py-12 sm:py-16 lg:py-14">
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12 xl:px-0">
        {/* Section Heading */}
        <div
          className={`mx-auto mb-10 flex max-w-3xl flex-col items-center text-center transition-all duration-700 sm:mb-12 lg:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          {/* Eyebrow Badge */}
          <div className="mb-3.5 inline-flex">
            <span className="rounded-sm border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase">
              WHO WE SUPPORT
            </span>
          </div>

          {/* Heading Title */}
          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-[34px]">
            Diverse Enterprise <span className="text-[#C89D3C]">Ecosystem</span>
          </h2>

          {/* Centered Gold Accent Bar */}
          <div className="mt-3.5 h-1 w-16 rounded-full bg-[#C89D3C]" />

          {/* Subheading / Description */}
          <p className="mt-4 max-w-2xl text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px] sm:leading-[1.8]">
            We offer integrated business and technology solutions with practical guidance, clear communication and long-term support across diverse industry sectors.
          </p>
        </div>

        {/* 2-Column Horizontal Dossier Cards with Government Imagery (NO PEOPLE) */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <div
                key={sector.title}
                style={{ transitionDelay: `${index * 60 + 100}ms` }}
                className={`group relative flex flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C89D3C] hover:shadow-md sm:flex-row ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                {/* Left: Government Architecture & Infrastructure Image Frame (STRICTLY NO PEOPLE) */}
                <div className="relative h-44 w-full shrink-0 overflow-hidden bg-slate-100 sm:h-auto sm:w-[155px] lg:w-[175px]">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 175px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-black/25" />

                  {/* Sector Number Badge */}
                  <div className="absolute left-2.5 top-2.5 z-10">
                    <span className="rounded bg-[#0A192F]/90 px-2 py-0.5 font-mono text-[10px] font-bold text-[#F3D072] border border-[#C89D3C]/40 shadow-sm backdrop-blur-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Gold Separator Accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-[#C89D3C] sm:bottom-0 sm:right-0 sm:top-0 sm:h-full sm:w-1" />
                </div>

                {/* Right: Exact Content Preserved with Ministry Framework Tag */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                  <div>
                    {/* Top Row: Nodal Ministry Tag & Emblem Icon */}
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="rounded border border-[#D5E2F0] bg-[#EEF4FB] px-2 py-0.5 text-[8.5px] font-bold tracking-wider text-[#0A2540] uppercase">
                        {sector.ministry}
                      </span>

                      <div className="flex h-7 w-7 items-center justify-center rounded-sm border border-[#C89D3C]/25 bg-[#FAF7F0] text-[#C89D3C] transition-colors duration-300 group-hover:bg-[#0A2540] group-hover:text-[#F3D072]">
                        <Icon size={14} strokeWidth={2} />
                      </div>
                    </div>

                    {/* Sector Title - EXACT UNCHANGED */}
                    <h3 className="text-[14px] font-bold leading-snug text-[#0A2540] transition-colors duration-300 group-hover:text-[#C89D3C] sm:text-[15px]">
                      {sector.title}
                    </h3>

                    {/* Sector Description - EXACT UNCHANGED */}
                    <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate-600 sm:text-[12px]">
                      {sector.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
