"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, ClipboardCheck, ScrollText, Cpu, Scale, Handshake } from "lucide-react";

const benefits = [
  {
    title: "Integrated Capabilities",
    description:
      "Explore business, compliance, funding-preparation and technology services through one point of contact.",
    icon: Building2,
  },
  {
    title: "Requirement-Based Planning",
    description:
      "Recommendations are aligned with your business stage, goals and specific operational requirements.",
    icon: ClipboardCheck,
  },
  {
    title: "Clear Communication",
    description:
      "Understand the proposed scope, documentation, timeline and next steps without complex terms.",
    icon: ScrollText,
  },
  {
    title: "Technology-Led Thinking",
    description:
      "Explore digital tools, AI automation and workflow systems that improve business operations.",
    icon: Cpu,
  },
  {
    title: "Business-Focused Approach",
    description:
      "Prioritize practical solutions that address real operational and commercial requirements.",
    icon: Scale,
  },
  {
    title: "Ongoing Coordination",
    description:
      "Access reliable follow-up support according to the agreed service scope and milestones.",
    icon: Handshake,
  },
];

export default function WhyChooseUs() {
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
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-choose-us" ref={sectionRef} className="relative w-full bg-white py-12 sm:py-16 lg:py-12">
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12 xl:px-0">
        {/* Section Header */}
        <div
          className={`flex flex-col items-center text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          {/* Eyebrow Badge */}
          <div className="mb-3.5 inline-flex">
            <span className="rounded-sm border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase">
              BENEFITS & VALUES
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-[34px]">
            Why Choose Bharat Startup Ventures?
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-xs font-normal text-slate-600 sm:text-[13.5px]">
            Practical Support. Connected Solutions. Clear Direction.
          </p>

          {/* Centered Gold Accent Bar */}
          <div className="mt-3.5 h-1 w-16 rounded-full bg-[#C89D3C]" />
        </div>

        {/* 3x2 Grid of Benefit Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                style={{ transitionDelay: `${index * 80 + 100}ms` }}
                className={`group flex items-start gap-4 rounded-sm border border-slate-200/90 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C89D3C]/60 hover:shadow-md sm:p-6 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                {/* Dark Navy Tile with Gold Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-[#0A192F] text-[#F3D072] transition-colors duration-300 group-hover:bg-[#0A2540] sm:h-12 sm:w-12">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                {/* Card Content */}
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="text-[14.5px] font-bold leading-snug text-[#0A2540] sm:text-[15.5px]">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate-500 sm:text-[12.5px]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
