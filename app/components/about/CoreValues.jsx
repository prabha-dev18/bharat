"use client";

import { ShieldCheck, UserCheck, CheckCircle2, Lightbulb, Users2, TrendingUp } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      title: "Integrity",
      description: "Communicating honestly, providing transparent scopes, and setting clear, realistic expectations at every step.",
      icon: ShieldCheck,
    },
    {
      title: "Client Focus",
      description: "Understanding your unique business requirements and operational context before recommending any specific service.",
      icon: UserCheck,
    },
    {
      title: "Responsibility",
      description: "Working strictly within the agreed scope, professional guidelines, and applicable statutory requirements.",
      icon: CheckCircle2,
    },
    {
      title: "Innovation",
      description: "Exploring relevant modern technology, digital automation tools, and improved business processes to drive efficiency.",
      icon: Lightbulb,
    },
    {
      title: "Collaboration",
      description: "Coordinating multi-disciplinary services seamlessly to address connected business and compliance needs under one roof.",
      icon: Users2,
    },
    {
      title: "Continuous Improvement",
      description: "Adapting our consulting methodologies, technical tools, and guidance as commercial requirements and policies evolve.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C58A1B]/35 bg-[#C58A1B]/10 px-3 py-1 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C58A1B]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#001A40]">
              Guiding Ethos
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#001A40] mb-3">
            Our Core Values
          </h2>

          <p className="text-base sm:text-lg font-semibold text-[#001A40] mb-3">
            The Principles Behind Our Approach
          </p>

          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            These foundational commitments define how we interact with our clients, structure our deliverables, and maintain professional excellence.
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C58A1B]/50 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#001A40]/5 text-[#001A40] mb-4 transition-colors duration-300 group-hover:bg-[#001A40] group-hover:text-[#E5A93C]">
                  <Icon size={20} />
                </div>

                <h3 className="text-base font-bold text-[#001A40] mb-2 group-hover:text-[#C58A1B] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-[13px] leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
