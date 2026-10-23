import React, { useState } from 'react';
import { WHY_CHOOSE_ITEMS } from '../data/contractingData';
import { ChevronDown, ArrowRight, ShieldCheck } from 'lucide-react';

interface WhyChooseUsProps {
  onDiscoveryClick: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onDiscoveryClick }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const activeItem = WHY_CHOOSE_ITEMS[activeIdx];

  return (
    <section id="why-us" className="bg-[#121316] text-white py-20 md:py-28 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase font-mono tracking-widest text-[#DFC09F] font-semibold">
            The Contractor Advantage
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
            Why Okanagan clients choose All In Contracting.
          </h2>
          <p className="mt-4 text-base text-white/70 leading-relaxed">
            Hiring a contractor requires placing significant trust in who enters your home or commercial
            space. Here are the four structural commitments that protect your investment.
          </p>
        </div>

        {/* 2-Column Split: Accordion List on Left, Dynamic Photographic Anchor on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Numbered Accordion (Col Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {WHY_CHOOSE_ITEMS.map((item, idx) => {
              const isOpen = activeIdx === idx;
              return (
                <div
                  key={item.number}
                  className={`rounded-xs border transition-all duration-300 ${
                    isOpen
                      ? 'bg-[#1E2024] border-[#C28448]/60 shadow-lg'
                      : 'bg-[#18191D] border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => setActiveIdx(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-sm font-bold text-[#DFC09F] mt-0.5">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="text-lg md:text-xl font-display font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs text-white/60 mt-1">
                          {item.summary}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen
                          ? 'border-[#C28448] bg-[#C28448] text-white rotate-180'
                          : 'border-white/20 text-white/60'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Expandable Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-4">
                      <p className="text-xs sm:text-sm text-white/80 leading-relaxed pl-8">
                        {item.description}
                      </p>

                      {/* Stat callout */}
                      <div className="ml-8 p-3 rounded-xs bg-[#121316] border border-white/10 flex items-center gap-4">
                        <div className="font-display font-extrabold text-xl sm:text-2xl text-[#DFC09F] tabular-nums whitespace-nowrap">
                          {item.metric}
                        </div>
                        <div className="text-xs text-white/70">
                          {item.metricLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-4">
              <button
                onClick={onDiscoveryClick}
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#C28448] hover:bg-[#A96E37] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
              >
                <span>Schedule a Feasibility Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Photographic Anchor that changes with accordion (Col Span 5) */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full rounded-xs overflow-hidden border border-white/15 shadow-2xl flex flex-col justify-end bg-[#18191D]">
            <img
              key={activeItem.image}
              src={activeItem.image}
              alt={activeItem.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/40 to-transparent" />

            {/* Contextual overlay card */}
            <div className="relative z-10 p-6 md:p-8 m-4 bg-[#121316]/90 backdrop-blur-md rounded-xs border border-white/15">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#DFC09F]">
                <ShieldCheck className="w-4 h-4 text-[#C28448]" />
                <span>Pillar {activeItem.number} Guaranteed</span>
              </div>
              <div className="font-display font-bold text-base text-white mt-1">
                {activeItem.title}
              </div>
              <p className="text-xs text-white/70 mt-1 line-clamp-2">
                {activeItem.summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
