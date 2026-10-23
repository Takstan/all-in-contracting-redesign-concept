import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/contractingData';
import { Check, Clock, Calendar, ArrowRight } from 'lucide-react';

interface ProcessTimelineProps {
  onScheduleCall: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onScheduleCall }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="bg-[#FAF8F5] py-20 md:py-28 border-b border-[#1E2024]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 2-Column Layout: Left Sticky Header, Right Construction Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Sticky Section Overview on Desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="text-xs uppercase font-mono tracking-widest text-[#C28448] font-semibold">
              Our 3-Stage Process
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#1E2024] tracking-tight leading-tight">
              From Vision to Reality.
            </h2>
            <p className="text-sm sm:text-base text-[#4A505A] leading-relaxed">
              We eliminate uncertainty by breaking every residential and commercial project into three
              rigorous, predictable phases: <strong className="text-[#1E2024]">Plan, Build, and Enjoy</strong>.
            </p>

            <div className="p-5 bg-white rounded-xs border border-[#1E2024]/10 shadow-xs space-y-3">
              <div className="text-xs font-mono uppercase text-[#C28448] font-semibold flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>The Discovery Call Commitment</span>
              </div>
              <p className="text-xs text-[#4A505A] leading-relaxed">
                Before you commit to anything, Dan Byl conducts a direct 15-minute feasibility call to
                evaluate your project goals, realistic budget ranges, and municipal zoning constraints.
              </p>
              <button
                onClick={onScheduleCall}
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E2024] hover:text-[#C28448] transition-colors cursor-pointer pt-1"
              >
                <span>Book your 15-min discovery call</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#C28448]" />
              </button>
            </div>

            {/* Quick Step Indicators */}
            <div className="hidden sm:flex items-center gap-2 pt-2">
              {PROCESS_STEPS.map((step, idx) => (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 p-2 text-left rounded-xs border transition-all cursor-pointer ${
                    activeStep === idx
                      ? 'bg-[#1E2024] text-white border-[#1E2024]'
                      : 'bg-white text-[#717680] border-[#1E2024]/10 hover:border-[#C28448]'
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase">Phase 0{idx + 1}</div>
                  <div className="text-xs font-bold font-display">{step.phase}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Scroll-Driven Construction Timeline */}
          <div className="lg:col-span-7 relative pl-6 sm:pl-10 space-y-12">
            {/* Copper-Colored Vertical Guideline */}
            <div className="absolute top-4 bottom-8 left-2 sm:left-4 w-0.5 bg-[#1E2024]/15">
              {/* Dynamic filled line indicator */}
              <div
                className="w-full bg-[#C28448] transition-all duration-500 ease-out"
                style={{ height: `${((activeStep + 1) / PROCESS_STEPS.length) * 100}%` }}
              />
            </div>

            {PROCESS_STEPS.map((phase, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={phase.step}
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-6 sm:p-8 rounded-xs border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#C28448] shadow-md ring-1 ring-[#C28448]/20'
                      : 'bg-white/70 border-[#1E2024]/10 hover:border-[#1E2024]/30'
                  }`}
                >
                  {/* Step Circle Marker */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[47px] top-7 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all shadow-xs ${
                      isActive
                        ? 'bg-[#C28448] text-white ring-4 ring-[#FAF8F5]'
                        : 'bg-[#1E2024] text-[#FAF8F5]'
                    }`}
                  >
                    {phase.step}
                  </div>

                  {/* Header info */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#C28448] font-bold">
                      Stage 0{idx + 1} — {phase.phase}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#717680] font-mono">
                      <Clock className="w-3.5 h-3.5 text-[#C28448]" />
                      <span>{phase.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1E2024] mt-2">
                    {phase.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#4A505A] leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Key Actions Checklist */}
                  <div className="mt-6 pt-5 border-t border-[#1E2024]/5">
                    <div className="text-[11px] font-mono uppercase text-[#717680] tracking-wider mb-3">
                      Phase Milestones & Deliverables:
                    </div>
                    <ul className="space-y-2.5">
                      {phase.keyActions.map((action, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E2024]">
                          <Check className="w-4 h-4 text-[#C28448] shrink-0 mt-0.5" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
