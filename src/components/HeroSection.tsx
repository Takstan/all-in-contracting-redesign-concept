import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ASSETS } from '../data/contractingData';

interface HeroSectionProps {
  onBookClick: () => void;
  onExploreWorkClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookClick,
  onExploreWorkClick,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Trigger smooth scale animation on mount
    const timer = setTimeout(() => setLoaded(true), 50);
    const handleScroll = () => {
      // Subdued parallax calculation
      setScrollY(window.scrollY * 0.18);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-[#121316] text-white">
      {/* Background Architectural Photo with 1.08 -> 1.00 smooth scale entrance & subtle parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={ASSETS.hero}
          alt="Completed luxury Okanagan architectural residence by All In Contracting"
          referrerPolicy="no-referrer"
          style={{
            transform: `scale(${loaded ? 1 : 1.08}) translateY(${scrollY}px)`,
            transition: 'transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="w-full h-full object-cover object-center will-change-transform"
        />
        {/* Measured Scrim Overlay for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121316]/92 via-[#121316]/65 to-[#121316]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-[#121316]/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 w-full flex flex-col justify-between min-h-screen">
        <div className="my-auto max-w-3xl pt-12 md:pt-16">
          {/* Subtle Location / Discipline Kicker (unboxed metadata) */}
          <div
            className={`flex items-center gap-2 text-xs md:text-sm tracking-wider uppercase text-[#DFC09F] font-semibold transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span>Kelowna & Okanagan Valley</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2018</span>
            <span aria-hidden="true">·</span>
            <span>Dan Byl, Construction Director</span>
          </div>

          {/* Staggered Line-by-Line Headline */}
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.08] text-balance">
            <span
              className={`block transition-all duration-700 delay-150 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              A renovation partner who
            </span>
            <span
              className={`block text-[#F3EFEA] transition-all duration-700 delay-300 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              takes the stress out
            </span>
            <span
              className={`block text-[#DFC09F] italic font-serif transition-all duration-700 delay-450 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              of building.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`mt-6 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed font-normal transition-all duration-700 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Custom kitchens, luxury bathrooms, legal secondary suites, and commercial tenant
            improvements across Kelowna. Guaranteed milestones, transparent pricing, and direct
            superintendent accountability.
          </p>

          {/* Dual CTAs with subtle arrow-slide effect */}
          <div
            className={`mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 transition-all duration-700 delay-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <button
              onClick={onBookClick}
              className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#C28448] hover:bg-[#A96E37] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors rounded-sm cursor-pointer shadow-lg shadow-black/20"
            >
              <span>Schedule Discovery Call</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreWorkClick}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors rounded-sm cursor-pointer backdrop-blur-xs"
            >
              <span>Explore Completed Work</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#DFC09F] group-hover:scale-125 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Credibility Strip & Scroll to Explore */}
        <div
          className={`pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/70 transition-all duration-700 delay-900 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>Red Seal Trade Leadership</span>
            <span aria-hidden="true" className="text-white/30 hidden sm:inline">·</span>
            <span>Fixed Milestone Pricing</span>
            <span aria-hidden="true" className="text-white/30 hidden sm:inline">·</span>
            <span>2-Year Comprehensive Warranty</span>
            <span aria-hidden="true" className="text-white/30 hidden sm:inline">·</span>
            <span>City of Kelowna Licensed & WCB Insured</span>
          </div>

          <a
            href="#trust"
            className="group inline-flex items-center gap-2 text-white/80 hover:text-[#DFC09F] transition-colors py-1 cursor-pointer"
          >
            <span className="text-[11px] tracking-widest uppercase font-medium">Scroll to Explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#C28448]" />
          </a>
        </div>
      </div>
    </section>
  );
};
