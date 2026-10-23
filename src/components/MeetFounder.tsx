import React, { useState } from 'react';
import { ASSETS } from '../data/contractingData';
import { Play, X, Volume2, VolumeX, Award, Shield, CheckCircle2 } from 'lucide-react';

export const MeetFounder: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section id="founder" className="bg-[#FAF8F5] py-20 md:py-28 border-b border-[#1E2024]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait Gently Revealed from a Clipped Rectangle (Col Span 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xs overflow-hidden border border-[#1E2024]/15 shadow-xl bg-[#1E2024] aspect-[3/4] group">
              <img
                src={ASSETS.founder}
                alt="Dan Byl, Founder & Construction Director of All In Contracting"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Video Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setVideoModalOpen(true)}
                  aria-label="Play video message from Dan Byl"
                  className="group/btn relative flex items-center gap-3 px-5 py-3 rounded-full bg-[#121316]/90 hover:bg-[#C28448] text-white backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-300 transform group-hover/btn:scale-105 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-[#C28448] group-hover/btn:bg-white text-white group-hover/btn:text-[#121316] flex items-center justify-center transition-colors">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider pr-1">
                    Watch Dan’s Philosophy (24s)
                  </span>
                </button>
              </div>

              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <div className="text-xs font-mono uppercase text-[#DFC09F] tracking-wider">
                  Founder & Construction Director
                </div>
                <div className="text-2xl font-display font-bold">Dan Byl</div>
                <div className="text-xs text-white/80 mt-0.5">
                  Building throughout the Okanagan Valley
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-4 rounded-xs border border-[#1E2024]/15 shadow-lg max-w-[220px]">
              <div className="flex items-center gap-2 text-[#C28448]">
                <Award className="w-4 h-4" />
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#1E2024]">
                  Since 2003
                </span>
              </div>
              <p className="text-xs text-[#4A505A] mt-1">
                21+ years of direct on-site framing, structural engineering & general contracting.
              </p>
            </div>
          </div>

          {/* Right Column: Founder Narrative (Col Span 7) */}
          <div className="lg:col-span-7 space-y-6 pt-6 lg:pt-0">
            <div className="text-xs uppercase font-mono tracking-widest text-[#C28448] font-semibold">
              Leadership & Personal Accountability
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#1E2024] tracking-tight leading-tight">
              “When we step inside your home, your family’s peace of mind is on the line.”
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#4A505A] leading-relaxed">
              <p>
                I started in construction in 2003 swinging hammers on residential framing crews in BC.
                Over two decades, I watched homeowners endure the same recurring nightmares: contractors
                disappearing after the initial deposit, budgets blowing out by 40%, and sub-trades treating
                a family living space like an open dumping ground.
              </p>
              <p>
                In 2018, I founded <strong className="text-[#1E2024]">All In Contracting</strong> in Kelowna
                with a single guiding mandate: eliminate the stress of building by bringing transparent,
                engineering-grade project management to every single renovation.
              </p>
              <p>
                When you hire us, you are not dealing with an anonymous broker or a call center. You work
                directly with myself and a dedicated site superintendent. We hold our Red Seal trades to the
                highest standard in the Okanagan, and we don’t call a job finished until you are genuinely
                thrilled.
              </p>
            </div>

            {/* Credentials Row */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#1E2024]/10">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C28448] shrink-0 mt-0.5" />
                <div className="text-xs text-[#1E2024]">
                  <strong className="block">Red Seal Leadership</strong>
                  Certified trades only
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-[#C28448] shrink-0 mt-0.5" />
                <div className="text-xs text-[#1E2024]">
                  <strong className="block">Fully Insured</strong>
                  $5M Liability & WCB
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#C28448] shrink-0 mt-0.5" />
                <div className="text-xs text-[#1E2024]">
                  <strong className="block">Okanagan Resident</strong>
                  Local since birth
                </div>
              </div>
            </div>

            {/* Signature Area */}
            <div className="pt-2 flex items-center gap-4">
              <div className="font-serif italic text-2xl text-[#1E2024] tracking-wide">
                Dan Byl
              </div>
              <div className="text-xs text-[#717680] font-mono">
                / Founder, All In Contracting (Kelowna, BC)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Message Modal (Simulated authentic video with audio toggle) */}
      {videoModalOpen && (
        <div
          onClick={() => setVideoModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-[#121316] rounded-xs border border-white/20 shadow-2xl overflow-hidden"
          >
            {/* Modal Header */}
            <div className="p-4 bg-[#1E2024] flex items-center justify-between border-b border-white/10 text-white">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#C28448] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-white/90">
                  Dan Byl — Message from the Jobsite (Kelowna)
                </span>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                aria-label="Close video player"
                className="text-white/70 hover:text-white p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Canvas */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <img
                src={ASSETS.founder}
                alt="Dan Byl on site"
                className="w-full h-full object-cover filter brightness-85"
              />

              {/* Subtitles Overlay */}
              <div className="absolute bottom-16 inset-x-8 text-center">
                <span className="bg-black/80 px-4 py-2 rounded-xs text-xs sm:text-sm text-white font-medium border border-white/15">
                  "We built All In Contracting to guarantee one thing: zero surprises for Okanagan homeowners."
                </span>
              </div>

              {/* Player Controls Bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 hover:text-[#C28448] cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-current" />
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="flex items-center gap-1.5 hover:text-[#C28448] cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    <span>{isMuted ? 'Muted' : 'Sound On'}</span>
                  </button>
                  <span className="font-mono text-white/60">00:14 / 00:24</span>
                </div>

                <div className="text-[11px] font-mono text-[#DFC09F]">
                  All In Contracting Leadership Series
                </div>
              </div>
            </div>

            {/* Transcript & Takeaway */}
            <div className="p-5 bg-[#18191D] text-white/80 text-xs sm:text-sm border-t border-white/10 space-y-2">
              <div className="text-[11px] uppercase font-mono text-[#DFC09F] font-bold">
                Core Philosophy:
              </div>
              <p className="leading-relaxed">
                “Every week, I personally inspect our ongoing projects in Kelowna and Lake Country. If
                something doesn’t meet my standard, it gets redone on our dime before the client ever
                sees it. That’s what taking the stress out of building really means.”
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
