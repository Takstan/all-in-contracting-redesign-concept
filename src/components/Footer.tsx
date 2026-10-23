import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121316] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-display text-xl font-extrabold uppercase tracking-tight text-white block">
              All In Contracting
            </span>
            <p className="text-xs text-white/70 max-w-sm leading-relaxed">
              A renovation partner who takes the stress out of building. High-end residential
              renovations, legal secondary suites, and commercial tenant improvements throughout
              Kelowna and the Okanagan Valley.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#DFC09F]">
              <ShieldCheck className="w-4 h-4 text-[#C28448]" />
              <span>City of Kelowna Licensed · WCB Insured · Red Seal Trades</span>
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase text-[#DFC09F] font-bold">
              Services
            </div>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#services" className="hover:text-white transition-colors">Custom Kitchens</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Luxury Bathrooms</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Legal Secondary Suites</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Whole-Home Renovation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial Tenant Imp.</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Strata Capital Works</a></li>
            </ul>
          </div>

          {/* Regional Coverage */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase text-[#DFC09F] font-bold">
              Service Areas
            </div>
            <ul className="space-y-2 text-xs text-white/70 font-mono">
              <li>Kelowna (Mission, Glenmore, Downtown)</li>
              <li>West Kelowna & Rose Valley</li>
              <li>Lake Country & Carr's Landing</li>
              <li>Vernon & Coldstream</li>
              <li>Penticton & South Okanagan</li>
            </ul>
          </div>

          {/* Leadership & Contact */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase text-[#DFC09F] font-bold">
              Leadership
            </div>
            <div className="text-xs text-white/70 space-y-1">
              <div><strong>Dan Byl</strong></div>
              <div>Construction Director</div>
              <div className="text-white/50 pt-1">Experience since 2003</div>
              <div className="text-white/50">Company established 2018</div>
              <div className="pt-2 text-white font-mono">250-808-1234</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} All In Contracting Co. All rights reserved. Okanagan, BC.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
