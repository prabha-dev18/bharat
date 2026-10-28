"use client";

import Link from "next/link";
import {
  BriefcaseBusiness,
  Calculator,
  Coins,
  Landmark,
  FileCheck,
  Globe,
  Smartphone,
  Bot,
  Megaphone,
  ChartNoAxesCombined,
  Sprout,
  ArrowUpRight,
} from "lucide-react";

const services = [
  { label: "Business Registration", icon: BriefcaseBusiness, href: "/services" },
  { label: "Taxation & Compliance", icon: Calculator, href: "/services" },
  { label: "Startup Funding", icon: Coins, href: "/services" },
  { label: "Government Schemes", icon: Landmark, href: "/government-schemes" },
  { label: "Licences & Certifications", icon: FileCheck, href: "/services" },
  { label: "Website Development", icon: Globe, href: "/services" },
  { label: "Mobile Apps & Software", icon: Smartphone, href: "/services" },
  { label: "AI & Automation", icon: Bot, href: "/services" },
  { label: "Digital Marketing & SEO", icon: Megaphone, href: "/services" },
  { label: "Data Analytics", icon: ChartNoAxesCombined, href: "/services" },
  { label: "Agriculture & Industry Support", icon: Sprout, href: "/services" },
];

function ServiceItem({ service }) {
  const Icon = service.icon;

  return (
    <Link href={service.href} className="group relative flex shrink-0 items-center gap-2 px-3 py-2.5 sm:gap-2.5 sm:px-5">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#C58A1B]/25 bg-[#FAF7F0] transition-colors duration-300 group-hover:border-[#C58A1B] group-hover:bg-[#001A40] sm:h-8 sm:w-8">
        <Icon size={15} strokeWidth={1.7} className="text-[#A87310] transition-colors duration-300 group-hover:text-white" />
      </span>

      <span className="whitespace-nowrap text-[11px] font-semibold tracking-[0.01em] text-[#001A40] transition-colors duration-300 group-hover:text-[#A87310] sm:text-xs">
        {service.label}
      </span>

      <ArrowUpRight
        size={12}
        strokeWidth={1.8}
        className="shrink-0 text-[#C58A1B] opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
      />

      <span className="absolute inset-x-3 bottom-0 h-[2px] origin-left scale-x-0 bg-[#C58A1B] transition-transform duration-300 group-hover:scale-x-100 sm:inset-x-5" />
    </Link>
  );
}

export default function ServicesMarquee() {
  return (
    <section
      aria-label="Our business and startup solutions"
      className="services-section relative z-20 w-full overflow-hidden border-y border-[#001A40]/10 bg-white"
    >
      {/* Slim gold accent */}
      <div className="h-[2px] bg-gradient-to-r from-[#001A40] via-[#C58A1B] to-[#001A40]" />

      <div className="flex h-[48px] items-center sm:h-[54px]">
        {/* Fixed label */}
        <div className="relative z-10 hidden h-full shrink-0 items-center gap-2 border-r border-[#001A40]/10 bg-[#F8F6F0] px-4 xl:flex">
          <span className="relative flex h-2 w-2 shrink-0 items-center justify-center">
            <span className="absolute h-full w-full animate-ping rounded-full bg-[#C58A1B]/30" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-[#C58A1B]" />
          </span>

          <div className="flex flex-col gap-0.5">
            <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.16em] text-[#001A40]">Our Expertise</span>
            <span className="whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.08em] text-[#8A6A2C]">Business Solutions</span>
          </div>

          <span className="ml-1 h-6 w-px bg-[#C58A1B]/35" />
        </div>

        {/* Continuous scrolling services */}
        <div className="services-marquee relative flex h-full min-w-0 flex-1 items-center overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-4 bg-gradient-to-r from-white to-transparent sm:w-6" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-4 bg-gradient-to-l from-white to-transparent sm:w-6" />

          <div className="services-marquee-track flex w-max items-center">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center"
                aria-hidden={copy === 1 ? "true" : undefined}
                {...(copy === 1 ? { inert: true } : {})}
              >
                {services.map((service) => (
                  <div key={`${copy}-${service.label}`} className="flex shrink-0 items-center">
                    <ServiceItem service={service} />
                    <span aria-hidden="true" className="h-1 w-1 shrink-0 rotate-45 bg-[#C58A1B]/65" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
