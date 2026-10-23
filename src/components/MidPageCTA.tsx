import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';

interface MidPageCTAProps {
  onBookClick: () => void;
}

export const MidPageCTA: React.FC<MidPageCTAProps> = ({ onBookClick }) => {
  return (
    <section className="bg-[#18191D] text-white py-20 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DFC09F] font-semibold bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C28448]" />
          <span>Complimentary Feasibility Assessment</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Ready to discuss your project with an experienced builder?
        </h2>

        <p className="text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
          Skip the guesswork. Spend 15 minutes on the phone with founder Dan Byl to explore your
          design vision, timeline feasibility, and realistic Okanagan construction budgets.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookClick}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C28448] hover:bg-[#A96E37] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors rounded-sm cursor-pointer shadow-xl shadow-black/30"
          >
            <span>Book Your Discovery Call</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="tel:2508081234"
            className="inline-flex items-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-sm transition-colors border border-white/15"
          >
            <PhoneCall className="w-4 h-4 text-[#DFC09F]" />
            <span>Call 250-808-1234</span>
          </a>
        </div>

        <div className="pt-4 flex items-center justify-center gap-6 text-xs text-white/50 font-mono">
          <span>No Obligation</span>
          <span>·</span>
          <span>Direct Builder Access</span>
          <span>·</span>
          <span>Fixed Milestone Pricing</span>
        </div>
      </div>
    </section>
  );
};
