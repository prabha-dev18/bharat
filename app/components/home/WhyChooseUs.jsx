"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layers, Target, MessageSquare, Cpu, Compass, Repeat, ArrowRight } from "lucide-react";

const points = [
  {
    title: "All-in-One Support",
    description: "Multiple services, one point of contact.",
    icon: Layers,
  },
  {
    title: "Practical Guidance",
    description: "Clear steps and realistic options.",
    icon: Compass,
  },
  {
    title: "Tailored Solutions",
    description: "Aligned with your goals and business stage.",
    icon: Target,
  },
  {
    title: "Clear Communication",
    description: "Complete transparency in every step.",
    icon: MessageSquare,
  },
  {
    title: "Technology-Driven",
    description: "Modern tools for greater efficiency.",
    icon: Cpu,
  },
  {
    title: "Long-Term Partnership",
    description: "Support as your business grows.",
    icon: Repeat,
  },
];

export default function WhyChooseUs() {
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
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-6 sm:py-8 lg:py-10">
      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[1.05fr_1.55fr_1.05fr] lg:gap-5 xl:gap-7">
          {/* Left: Heading and Description (Fade from Left) */}
          <div
            className={`flex flex-col items-start transition-all duration-800 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            {/* Section Label */}
            <div className="mb-6 flex items-center gap-3 sm:mb-7">
              <span className="h-px w-8 bg-[#C58A1B]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C58A1B] sm:text-[11px]">Why Choose Us</span>

              <span className="h-px w-12 bg-[#00245A]/15" />
            </div>

            <div className="mb-7 max-w-3xl sm:mb-8 lg:mb-9">
              <h3 className="mb-4 font-heading text-[clamp(1.25rem,2.2vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-[#00245A]">
                Multiple Capabilities. <span className="text-[#C58A1B]">One Trusted Partner.</span>
                <span className="mt-3 block h-[3px] w-16 rounded-full bg-gradient-to-r from-[#C58A1B] to-[#E9D6A5] transition-all duration-700 delay-500 sm:w-20" />
              </h3>

              <p className="max-w-2xl text-[12px] leading-[1.8] text-slate-600 sm:text-[13px]">
                {" "}
                We offer integrated business and technology solutions with practical guidance, clear communication and long-term support.
              </p>
            </div>
          </div>

          {/* Center: Six Feature Items (Fade up with stagger) */}
          <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:gap-x-3 lg:gap-y-3">
            {points.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  style={{ transitionDelay: `${index * 80 + 100}ms` }}
                  className={`group flex min-w-0 items-start gap-2.5 transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  {/* Feature Icon */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EFF5FC] text-[#174F87] transition-all duration-300 group-hover:bg-[#003568] group-hover:text-white">
                    <Icon size={15} strokeWidth={1.8} />
                  </div>

                  {/* Feature Content */}
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-[12px] font-bold leading-[1.4] text-[#00245A] sm:text-[12px] xl:text-[12px]">{item.title}</h3>

                    <p className="mt-0.5 max-w-[165px] text-[11px] leading-[1.55] text-slate-500 sm:text-[11px] xl:text-[11px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Vision and Mission Image (Fade from Right) */}
          <div
            className={`relative hidden h-[164px] overflow-hidden rounded-md transition-all duration-800 delay-200 lg:block xl:h-[170px] ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <Image
              src="/images/why.png"
              alt="City skyline representing your vision and mission"
              fill
              priority
              sizes="(max-width: 1280px) 28vw, 350px"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001A40]/80 via-[#001A40]/15 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
