"use client";

import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  FileText,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";

export default function OurProcess() {
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
  const steps = [
    {
      number: "01",
      title: "Understand",
      subtitle: "Requirement Discovery",
      description:
        "We discuss your goals, current operational situation, commercial milestones and specific business requirements.",
      icon: MessageCircle,
    },
    {
      number: "02",
      title: "Plan",
      subtitle: "Solution Architecture",
      description:
        "We identify relevant services, required statutory documentation, scheme eligibility guidelines and potential roadmap options.",
      icon: FileText,
    },
    {
      number: "03",
      title: "Execute",
      subtitle: "Structured Delivery",
      description:
        "We carry out the agreed scope of work with transparent milestones, defined deliverables, and continuous communication.",
      icon: CheckCircle2,
    },
    {
      number: "04",
      title: "Follow Up",
      subtitle: "Ongoing Coordination",
      description:
        "We coordinate next steps, monitor key deadlines, and provide ongoing assistance throughout the engagement.",
      icon: RefreshCw,
    },
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-t border-slate-200/60 bg-white py-8 sm:py-10 lg:py-12">
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Original heading and subtitle preserved */}
        <div
          className={`mx-auto mb-10 max-w-3xl text-center transition-all duration-800 sm:mb-12 lg:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-center justify-center gap-3 sm:mb-7">
            <span className="h-px w-8 bg-[#C58A1B]" />
            <span className="text-center text-[10px] font-bold uppercase tracking-[0.22em] text-[#C58A1B] sm:text-[11px]">
              Proven Delivery Framework
            </span>
            <span className="h-px w-12 bg-[#00245A]/15" />
          </div>

          <h3 className="mb-3 text-center font-heading text-[clamp(1.25rem,2.2vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-[#00245A]">
            Multiple Capabilities. One{" "}
            <span className="text-[#C58A1B]">
              Trusted Partner.
            </span>
          </h3>

          <span className="mx-auto mb-3 mt-3 block h-[3px] w-16 rounded-full bg-gradient-to-r from-[#C58A1B] to-[#E9D6A5] sm:w-20" />

          <p className="mx-auto max-w-2xl text-center text-[12px] leading-[1.8] text-slate-600 sm:text-[13px]">
            We offer integrated business and technology solutions with practical guidance, clear communication and long-term support.
          </p>
        </div>

        {/* Continuous animated process */}
        <div className="process-track relative mx-auto max-w-[1100px]">
          {/* Animated connecting path */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 110"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 top-[2px] z-0 hidden h-[100px] w-full overflow-visible lg:block"
            fill="none"
          >
            <defs>
              <linearGradient id="processLineGradient">
                <stop offset="0%" stopColor="#C58A1B" stopOpacity=".2" />
                <stop offset="50%" stopColor="#00245A" stopOpacity=".22" />
                <stop offset="100%" stopColor="#C58A1B" stopOpacity=".2" />
              </linearGradient>
            </defs>

            <path
              id="processPath"
              d="M125 40 C170 82 205 82 250 40 S330 -2 375 40 S455 82 500 40 S580 -2 625 40 S705 82 750 40 S830 -2 875 40"
              stroke="url(#processLineGradient)"
              strokeWidth="1.8"
              strokeDasharray="4 7"
              strokeLinecap="round"
            />

            {/* Continuously moving gold light */}
            <circle r="5" fill="#C58A1B" opacity=".22">
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                path="M125 40 C170 82 205 82 250 40 S330 -2 375 40 S455 82 500 40 S580 -2 625 40 S705 82 750 40 S830 -2 875 40"
              />
            </circle>

            <circle r="3.5" fill="#C58A1B">
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                path="M125 40 C170 82 205 82 250 40 S330 -2 375 40 S455 82 500 40 S580 -2 625 40 S705 82 750 40 S830 -2 875 40"
              />
            </circle>
          </svg>

          <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  style={{
                    "--step-delay": `${index * 2}s`,
                    transitionDelay: `${index * 120 + 150}ms`,
                  }}
                  className={`process-step group relative flex min-w-0 flex-col items-center text-center transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  {/* Icon with continuous sequential highlight */}
                  <div className="process-icon relative z-10 mb-5 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border border-slate-100 bg-white text-[#00245A] shadow-[0_8px_30px_rgba(0,36,90,0.06)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-[#C58A1B]/50 sm:h-[78px] sm:w-[78px] lg:mb-7 lg:h-[76px] lg:w-[76px]">
                    <span className="process-icon-halo absolute inset-[-5px] rounded-full border border-[#C58A1B]/0" />
                    <Icon
                      size={27}
                      strokeWidth={1.5}
                      className="relative z-10 transition-colors duration-300 group-hover:text-[#C58A1B]"
                    />
                  </div>

                  {/* Original process content */}
                  <div className="mb-3 min-h-[48px]">
                    <h4 className="font-heading text-base font-bold leading-snug text-[#00245A] transition-colors duration-300 group-hover:text-[#C58A1B] sm:text-[17px]">
                      {step.title}
                    </h4>

                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#C58A1B] sm:text-[10px]">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="max-w-[270px] text-[12px] leading-[1.9] text-slate-500 sm:text-[13px]">
                    {step.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent transition-colors duration-500 group-hover:via-[#C58A1B]/60 sm:mt-7 lg:mt-8" />
                </article>
              );
            })}
          </div>
        </div>
      </div>


    </section>
  );
}
