import React, { useState } from 'react';
import { ASSETS } from '../data/contractingData';
import { AlertTriangle, CheckCircle2, SlidersHorizontal, ArrowRight } from 'lucide-react';

interface PainPointsSectionProps {
  onConsultationClick: () => void;
}

export const PainPointsSection: React.FC<PainPointsSectionProps> = ({ onConsultationClick }) => {
  // Mode: 'problem' | 'solution' | 'split'
  const [activeMode, setActiveMode] = useState<'problem' | 'solution'>('solution');
  const [sliderPos, setSliderPos] = useState(65); // percentage for visual reveal

  return (
    <section className="bg-[#121316] text-white py-20 md:py-28 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase font-mono tracking-widest text-[#DFC09F] font-semibold">
            The Philosophy of Stress-Free Contracting
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
            Renovating shouldn’t feel like a high-stakes gamble.
          </h2>
          <p className="mt-4 text-base text-white/75 leading-relaxed">
            Most renovation horror stories aren't caused by bad intentions—they’re caused by loose
            allowances, fragmented trade scheduling, and zero accountability. We engineered our entire
            system to replace fear with predictable precision.
          </p>
        </div>

        {/* Interactive Mode Switcher */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 p-2 bg-[#1E2024] rounded-sm border border-white/10 max-w-xl">
          <div className="flex items-center gap-1 w-full sm:w-auto">
            <button
              onClick={() => {
                setActiveMode('problem');
                setSliderPos(20);
              }}
              className={`flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                activeMode === 'problem'
                  ? 'bg-rose-950/80 text-rose-200 border border-rose-800/60'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              The Common Reality (Uncertainty)
            </button>
            <button
              onClick={() => {
                setActiveMode('solution');
                setSliderPos(80);
              }}
              className={`flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                activeMode === 'solution'
                  ? 'bg-[#C28448] text-white shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              The All In Standard (Confidence)
            </button>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-white/50 px-2 font-mono">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Interactive Comparison</span>
          </div>
        </div>

        {/* Problem vs Solution Split Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Canvas (Before/After Transition) */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[460px] rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
            {/* Background Image: Finished Interior (Solution) */}
            <img
              src={ASSETS.renoAfter}
              alt="Finished architectural kitchen interior with confidence"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            />

            {/* Foreground Clipped Image: In-progress Construction (Problem) */}
            <div
              className="absolute inset-0 overflow-hidden transition-all duration-700 ease-out"
              style={{
                clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
              }}
            >
              <img
                src={ASSETS.renoBefore}
                alt="Renovation in progress framing with construction uncertainty"
                className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-95"
              />
              <div className="absolute inset-0 bg-[#121316]/40" />
              {/* Problem Badge */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-xs text-white text-[11px] font-mono uppercase px-3 py-1.5 rounded-xs border border-white/20">
                Phase 01: Demolition & Rough-In
              </div>
            </div>

            {/* Solution Badge */}
            <div className="absolute top-4 right-4 bg-[#C28448]/90 text-white text-[11px] font-mono uppercase px-3 py-1.5 rounded-xs border border-white/20 shadow-md">
              Phase 03: Completed Turnkey Handover
            </div>

            {/* Slider Divider Bar */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-[#DFC09F] pointer-events-none transition-all duration-700"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1E2024] border-2 border-[#DFC09F] flex items-center justify-center text-[#DFC09F] shadow-lg">
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Interactive Slider Input for Scrubbing */}
            <div className="absolute bottom-4 inset-x-4 bg-[#121316]/85 backdrop-blur-md p-3 rounded-xs border border-white/15 flex items-center gap-3">
              <span className="text-[11px] font-mono text-white/70 whitespace-nowrap">
                Uncertainty
              </span>
              <input
                type="range"
                min="5"
                max="95"
                value={sliderPos}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setSliderPos(val);
                  setActiveMode(val < 50 ? 'problem' : 'solution');
                }}
                aria-label="Drag to transition between uncertainty and confidence"
                className="w-full accent-[#C28448] cursor-pointer"
              />
              <span className="text-[11px] font-mono text-[#DFC09F] whitespace-nowrap font-bold">
                Confidence
              </span>
            </div>
          </div>

          {/* Contrast Column (4 Pillars of Contrast) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Pillar 1: Budget */}
            <div
              className={`p-5 rounded-xs border transition-all duration-300 ${
                activeMode === 'solution'
                  ? 'bg-[#1E2024] border-[#C28448]/50 shadow-md'
                  : 'bg-[#18191D] border-white/10 opacity-70'
              }`}
            >
              <div className="flex items-start gap-3">
                {activeMode === 'solution' ? (
                  <CheckCircle2 className="w-5 h-5 text-[#C28448] shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-white/50">
                    Pricing & Budget
                  </div>
                  <h3 className="text-base font-semibold text-white mt-0.5">
                    {activeMode === 'solution'
                      ? 'Fixed-Price Milestones with Zero Surprises'
                      : 'Vague Allowances & Mid-Project Invoices'}
                  </h3>
                  <p className="text-xs text-white/70 mt-1.5 leading-relaxed">
                    {activeMode === 'solution'
                      ? 'Every trade, material, and trim is locked in before demolition begins. Payments are tied exclusively to verified on-site milestone completions.'
                      : 'Unrealistic low bids that omit key fixtures, resulting in massive change orders that inflate your renovation cost by 30-50%.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2: Communication */}
            <div
              className={`p-5 rounded-xs border transition-all duration-300 ${
                activeMode === 'solution'
                  ? 'bg-[#1E2024] border-[#C28448]/50 shadow-md'
                  : 'bg-[#18191D] border-white/10 opacity-70'
              }`}
            >
              <div className="flex items-start gap-3">
                {activeMode === 'solution' ? (
                  <CheckCircle2 className="w-5 h-5 text-[#C28448] shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-white/50">
                    Communication
                  </div>
                  <h3 className="text-base font-semibold text-white mt-0.5">
                    {activeMode === 'solution'
                      ? 'Daily Photo Logs & Single Superintendent Contact'
                      : 'Chasing Voicemails & Wondering Who’s On Site'}
                  </h3>
                  <p className="text-xs text-white/70 mt-1.5 leading-relaxed">
                    {activeMode === 'solution'
                      ? 'Access high-resolution daily progress photos from your mobile device. Dan Byl and your dedicated superintendent lead scheduled weekly check-in calls.'
                      : 'Radio silence when things go off track. Homeowners left guessing whether trades are showing up or taking a week off.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3: Trades & Craftsmanship */}
            <div
              className={`p-5 rounded-xs border transition-all duration-300 ${
                activeMode === 'solution'
                  ? 'bg-[#1E2024] border-[#C28448]/50 shadow-md'
                  : 'bg-[#18191D] border-white/10 opacity-70'
              }`}
            >
              <div className="flex items-start gap-3">
                {activeMode === 'solution' ? (
                  <CheckCircle2 className="w-5 h-5 text-[#C28448] shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-white/50">
                    Trade Standards
                  </div>
                  <h3 className="text-base font-semibold text-white mt-0.5">
                    {activeMode === 'solution'
                      ? 'Red Seal Certified Trades & 2-Year Full Warranty'
                      : 'Unvetted Sub-Contractors & Rushed Finishes'}
                  </h3>
                  <p className="text-xs text-white/70 mt-1.5 leading-relaxed">
                    {activeMode === 'solution'
                      ? 'Dan Byl brings over 20 years of hands-on building experience (since 2003). All plumbing, electrical, and structural trades are certified professionals.'
                      : 'Unlicensed moonlighters cutting corners on waterproofing and electrical, leaving latent defects behind sheetrock.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onConsultationClick}
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#DFC09F] hover:text-white transition-colors cursor-pointer"
              >
                <span>Learn how we safeguard your project investment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C28448]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
