import React, { useState, useEffect, useRef } from 'react';
import { COMMERCIAL_PARTNERS } from '../data/contractingData';
import { ShieldCheck, CalendarCheck, Award, Building2 } from 'lucide-react';

export const TrustIndicators: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Numerical states for count-up
  const [clientsCount, setClientsCount] = useState(0);
  const [jobsCount, setJobsCount] = useState(0);
  const [experienceYears, setExperienceYears] = useState(0);
  const [onBudgetRate, setOnBudgetRate] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Perform smooth count-up once
          const duration = 1600;
          const steps = 40;
          const intervalTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOutQuad = 1 - (1 - progress) * (1 - progress);

            setClientsCount(Math.round(255 * easeOutQuad));
            setJobsCount(Math.round(365 * easeOutQuad));
            setExperienceYears(Math.round(21 * easeOutQuad)); // Experience since 2003
            setOnBudgetRate(Math.round(98 * easeOutQuad));

            if (currentStep >= steps) {
              clearInterval(timer);
            }
          }, intervalTime);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="trust"
      ref={sectionRef}
      className="bg-[#FAF8F5] border-b border-[#1E2024]/10 py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Lead-in */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-[#1E2024]/10">
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-[#C28448] font-semibold">
              Verified Okanagan Track Record
            </div>
            <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold text-[#1E2024] tracking-tight">
              Credibility earned job by job since 2018.
            </h2>
          </div>
          <p className="text-sm text-[#4A505A] max-w-md">
            Under the trade leadership of founder Dan Byl (in construction since 2003), we eliminate the friction of building with systematic accountability.
          </p>
        </div>

        {/* 4 Quantitative Proof Metrics with Tabular Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Metric 1 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#C28448]">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs uppercase font-medium tracking-wider text-[#4A505A]">
                Clients Served
              </span>
            </div>
            <div className="text-4xl md:text-5xl font-display font-extrabold text-[#1E2024] tabular-nums">
              {clientsCount}+
            </div>
            <p className="text-xs text-[#6B7280]">
              Okanagan homeowners and business leaders with 5-star verified satisfaction.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#C28448]">
              <CalendarCheck className="w-4 h-4" />
              <span className="text-xs uppercase font-medium tracking-wider text-[#4A505A]">
                Completed Builds
              </span>
            </div>
            <div className="text-4xl md:text-5xl font-display font-extrabold text-[#1E2024] tabular-nums">
              {jobsCount}+
            </div>
            <p className="text-xs text-[#6B7280]">
              Turnkey residential remodels, additions, and commercial tenant improvements.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#C28448]">
              <Award className="w-4 h-4" />
              <span className="text-xs uppercase font-medium tracking-wider text-[#4A505A]">
                Trade Experience
              </span>
            </div>
            <div className="text-4xl md:text-5xl font-display font-extrabold text-[#1E2024] tabular-nums">
              {experienceYears}+ <span className="text-2xl font-normal text-[#4A505A]">Yrs</span>
            </div>
            <p className="text-xs text-[#6B7280]">
              Hands-on framing, structural and project management leadership dating to 2003.
            </p>
          </div>

          {/* Metric 4 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#C28448]">
              <Building2 className="w-4 h-4" />
              <span className="text-xs uppercase font-medium tracking-wider text-[#4A505A]">
                Budget Fidelity
              </span>
            </div>
            <div className="text-4xl md:text-5xl font-display font-extrabold text-[#1E2024] tabular-nums">
              {onBudgetRate}.4%
            </div>
            <p className="text-xs text-[#6B7280]">
              Fixed milestone agreements delivered within 2% of original approved estimate.
            </p>
          </div>
        </div>

        {/* Commercial & Strata Partners Strip */}
        <div className="pt-8 border-t border-[#1E2024]/10">
          <div className="text-xs uppercase font-medium text-[#717680] tracking-wider mb-6">
            Trusted by Okanagan property managers, strata councils & commercial operators:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {COMMERCIAL_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="group p-3 rounded-xs border border-[#1E2024]/8 bg-white/60 hover:bg-white hover:border-[#C28448] transition-all duration-200 cursor-default"
              >
                <div className="font-display text-xs font-bold text-[#1E2024] group-hover:text-[#C28448] transition-colors leading-snug">
                  {partner.name}
                </div>
                <div className="text-[11px] text-[#717680] mt-0.5">
                  {partner.location}, BC
                </div>
                <div className="h-0.5 w-0 group-hover:w-full bg-[#C28448] transition-all duration-300 mt-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
