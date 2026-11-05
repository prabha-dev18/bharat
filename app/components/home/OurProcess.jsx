"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Requirement Discovery",
    description:
      "We discuss your goals, current operational situation, commercial milestones and specific business requirements.",
  },
  {
    number: "02",
    title: "Plan",
    subtitle: "Solution Architecture",
    description:
      "We identify relevant services, required statutory documentation, scheme eligibility guidelines and potential roadmap options.",
  },
  {
    number: "03",
    title: "Execute",
    subtitle: "Structured Delivery",
    description:
      "We carry out the agreed scope of work with transparent milestones, defined deliverables, and continuous communication.",
  },
  {
    number: "04",
    title: "Follow Up",
    subtitle: "Ongoing Coordination",
    description:
      "We coordinate next steps, monitor key deadlines, and provide ongoing assistance throughout the engagement.",
  },
];

export default function OurProcess() {
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
    <section id="our-process" ref={sectionRef} className="relative w-full bg-white py-10 sm:py-12 lg:py-14">
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12 xl:px-0">
        {/* Section Heading */}
        <div
          className={`mx-auto mb-8 flex max-w-3xl flex-col items-center text-center transition-all duration-700 sm:mb-10 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          {/* Eyebrow Badge */}
          <div className="mb-3.5 inline-flex">
            <span className="rounded-sm border border-[#D5E2F0] bg-[#EEF4FB] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#0A2540] uppercase">
              OUR PROCESS
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl md:text-[34px]">
            Structured 4-Step <span className="text-[#C89D3C]">Delivery Framework</span>
          </h2>

          {/* Centered Gold Accent Bar */}
          <div className="mt-3.5 h-1 w-16 rounded-full bg-[#C89D3C]" />

          {/* Subheading / Description */}
          <p className="mt-4 max-w-2xl text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px] sm:leading-[1.8]">
            A transparent, milestone-driven facilitation methodology ensuring statutory compliance, regulatory precision, and execution excellence.
          </p>
        </div>

        {/* Simple & Clean Government 4-Step Linear Stepper */}
        <div className="relative mx-auto mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <div
                key={step.title}
                style={{ transitionDelay: `${index * 80 + 100}ms` }}
                className={`relative flex flex-col items-center text-center transition-all duration-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                {/* Step Circle with Arrow to Next Step on Desktop */}
                <div className="relative mb-4 flex w-full items-center justify-center">
                  {/* Government Seal Circle */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#C89D3C] bg-[#0A192F] text-[#F3D072] shadow-sm transition-transform duration-300 hover:scale-105">
                    <span className="font-mono text-sm font-extrabold tracking-wider">
                      {step.number}
                    </span>
                  </div>

                  {/* Connecting Line & Arrow between steps (Desktop only) */}
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className="absolute left-[calc(50%+28px)] right-[calc(-50%+28px)] top-1/2 -translate-y-1/2 hidden items-center lg:flex"
                    >
                      <span className="h-[1.5px] flex-1 bg-gradient-to-r from-[#0A2540]/30 to-[#C89D3C]" />
                      <ArrowRight size={13} className="shrink-0 text-[#C89D3C] -ml-1" />
                    </div>
                  )}
                </div>

                {/* Subtitle */}
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C89D3C]">
                  {step.subtitle}
                </span>

                {/* Title */}
                <h3 className="mt-1 font-heading text-base font-bold text-[#0A2540] sm:text-[17px]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[12px] leading-relaxed text-slate-600 sm:text-[12.5px] max-w-[240px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
