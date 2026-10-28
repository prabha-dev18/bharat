"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Landmark, BriefcaseBusiness, ShieldCheck } from "lucide-react";

export default function Introduction() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [countsStarted, setCountsStarted] = useState(false);

  const highlights = [
    {
      icon: Landmark,
      value: "1000+",
      number: 1000,
      label: "Businesses Supported",
    },
    {
      icon: BriefcaseBusiness,
      value: "50+",
      number: 50,
      label: "Service Solutions",
    },
    {
      icon: ShieldCheck,
      value: "Pan India",
      number: null,
      label: "Vision & Reach",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setCountsStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative isolate overflow-hidden bg-white py-7 sm:py-9 lg:py-11">
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#C58A1B]/10" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-16 h-56 w-56 rounded-full border border-[#00245A]/[0.06]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#F8F5ED]/70 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12 xl:px-0">
        {/* Section heading */}
        <div
          className={`mb-7 flex items-center gap-3 transition-all duration-700 sm:mb-9 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <span className="h-px w-8 bg-[#C58A1B]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C58A1B] sm:text-[11px]">
            About Bharat Startup Ventures
          </span>
          <span className="h-px w-12 bg-[#00245A]/15" />
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-12 lg:gap-6">
          {/* LEFT: Growth Image */}
          <div
            className={`md:col-span-1 lg:col-span-4 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="group relative h-[280px] overflow-hidden rounded-md border border-[#00245A]/10 bg-[#F4F6F8] sm:h-[340px] lg:h-full lg:min-h-[365px]">
              <Image
                src="/images/about-growth.png"
                alt="Business growth, investment and startup development"
                fill
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 34vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />

              {/* Image contrast overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001A40] via-[#001A40]/35 to-transparent transition-opacity duration-500 group-hover:from-[#001A40]/95" />

              {/* Animated gold accent */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-[#D9A12E] transition-all duration-700 group-hover:w-full" />

              {/* Floating decorative circle */}
              <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                <Landmark size={21} strokeWidth={1.5} />
              </div>

              {/* Image caption */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <span className="mb-3 block h-[3px] w-10 bg-[#D9A12E] transition-all duration-500 group-hover:w-20" />

                <h3 className="max-w-[260px] text-xl font-bold leading-snug text-white sm:text-2xl">
                  Your Growth.
                  <br />
                  Our Commitment.
                </h3>

                <p className="mt-3 max-w-[260px] text-xs leading-relaxed text-white/80 sm:text-[13px]">
                  Building stronger foundations for lasting business growth.
                </p>

                <div className="mt-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#EAC36F]">
                  <span className="h-px w-6 bg-[#D9A12E]" />
                  Growing Together
                </div>
              </div>
            </div>
          </div>

          {/* CENTER: About Us Content */}
          <div
            className={`flex flex-col justify-center md:col-span-1 lg:col-span-5 transition-all duration-1000 delay-150 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-[2px] w-7 bg-[#00245A]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C58A1B]">About Us</span>
            </div>

            <h3 className="mb-5 font-heading text-[clamp(1.25rem,2.2vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-[#00245A]">
              One Partner for Your
              <br className="hidden xl:block" />
              <span className="text-[#C58A1B]"> Business Journey</span>
              <span className="mt-3 block h-[3px] w-16 rounded-full bg-gradient-to-r from-[#C58A1B] to-[#E9D6A5] transition-all duration-700 delay-500 sm:w-20" />
            </h3>

            <p className="mb-4 text-[12px] leading-[1.9] text-slate-600 sm:text-[13px]">
              Every business needs the right foundation, informed decisions and effective execution to progress. From registration and
              documentation to funding preparation, compliance and digital transformation, managing these requirements can be complex.
            </p>

            <p className="mb-6 text-[12px] leading-[1.9] text-slate-600 sm:text-[13px]">
              Bharat Startup Ventures Pvt. Ltd. brings a broad range of business support and technology solutions together under one brand.
              We help clients understand their requirements, explore suitable options and navigate the steps involved in moving their
              projects forward.
            </p>

            {/* Trust points */}
            <div className="mb-6 grid grid-cols-1 gap-3 border-y border-[#00245A]/10 py-4 sm:grid-cols-2">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#F8F5ED] text-[#C58A1B]">
                  <ShieldCheck size={17} strokeWidth={1.8} />
                </div>
                <span className="text-[11px] font-semibold text-[#00245A]">Structured Business Support</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#F8F5ED] text-[#C58A1B]">
                  <BriefcaseBusiness size={17} strokeWidth={1.8} />
                </div>
                <span className="text-[11px] font-semibold text-[#00245A]">Business & Technology Solutions</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-1.5 text-[11px] font-bold text-[#00245A] transition-colors hover:text-[#C58A1B] sm:text-xs"
              >
                Discover Who We Are
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT: India Map & Company Highlights */}
          <div
            className={`md:col-span-2 lg:col-span-3 transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="group relative h-full overflow-hidden rounded-md border border-[#DCE5F0] bg-gradient-to-br from-white via-[#F8FBFF] to-[#EFF4FA] p-5 sm:p-6 lg:p-5">
              {/* Decorative top accent */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#00245A] via-[#C58A1B] to-transparent" />

              {/* Subtle moving background highlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D9A12E]/10 blur-3xl transition-transform duration-1000 group-hover:translate-x-5 group-hover:translate-y-5"
              />

              {/* Map and brand message */}
              <div className="relative mb-5 grid grid-cols-[90px_1fr] items-center gap-3 sm:grid-cols-[110px_1fr] lg:grid-cols-1 lg:gap-2 xl:grid-cols-[100px_1fr] xl:gap-3">
                <div className="relative mx-auto h-[105px] w-full sm:h-[120px] lg:h-[120px] xl:h-[110px]">
                  <Image
                    src="/images/map.jpg"
                    alt="Map of India representing nationwide business support"
                    fill
                    sizes="110px"
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div>
                  <span className="mb-2 block h-[2px] w-7 bg-[#C58A1B]" />
                  <h3 className="text-[12px] font-extrabold leading-[1.65] text-[#00245A] sm:text-sm lg:text-[13px] xl:text-sm">
                    Empowering Startups,
                    <br />
                    MSMEs & Enterprises
                    <br />
                    Across India
                  </h3>
                  <p className="mt-2 text-[10px] leading-relaxed text-slate-500">Supporting business growth nationwide.</p>
                </div>
              </div>

              {/* Statistics */}
              <div className="space-y-0 border-t border-[#00245A]/10">
                {highlights.map(({ icon: Icon, value, number, label }, index) => (
                  <div
                    key={label}
                    className={`group/stat flex items-center gap-3 border-b border-[#00245A]/10 py-4 last:border-b-0 transition-all duration-700 ${
                      isVisible ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
                    }`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#D9A12E]/25 bg-white text-[#00245A] transition-all duration-300 group-hover/stat:border-[#C58A1B]/50 group-hover/stat:bg-[#00245A] group-hover/stat:text-white">
                      <Icon size={18} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-base font-extrabold leading-tight text-[#00245A] transition-colors duration-300 group-hover/stat:text-[#C58A1B] sm:text-lg">
                        {number !== null && countsStarted ? <AnimatedNumber target={number} /> : value}
                        {number !== null && "+"}
                      </p>
                      <p className="mt-1 text-[10px] leading-snug text-slate-500 sm:text-[11px]">{label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 right-0 h-1 w-20 bg-gradient-to-l from-[#C58A1B] to-transparent transition-all duration-500 group-hover:w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({ target }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame;
    const duration = 1400;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setValue(Math.floor(eased * target));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [target]);

  return <>{value.toLocaleString("en-IN")}</>;
}
