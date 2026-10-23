import React, { useState } from 'react';
import { FEATURED_PROJECTS, ProjectShowcase, ASSETS } from '../data/contractingData';
import { MapPin, Sliders, Maximize2, X, ChevronRight, Check } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial'>('all');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);
  const [sliderPercent, setSliderPercent] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const filtered = FEATURED_PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const featuredMarquee = filtered[0] || FEATURED_PROJECTS[0];
  const supportingProjects = filtered.slice(1);

  // Handle Before/After dragging
  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const clamped = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPercent(clamped);
  };

  return (
    <section id="projects" className="bg-[#FAF8F5] py-20 md:py-28 border-b border-[#1E2024]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1E2024]/10">
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-[#C28448] font-semibold">
              Work That Speaks For Itself
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-[#1E2024] tracking-tight">
              Selected Okanagan Renovations
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#1E2024]/5 rounded-sm border border-[#1E2024]/10 self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#1E2024] text-white shadow-xs'
                  : 'text-[#4A505A] hover:text-[#1E2024]'
              }`}
            >
              All Builds
            </button>
            <button
              onClick={() => setActiveFilter('residential')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                activeFilter === 'residential'
                  ? 'bg-[#1E2024] text-white shadow-xs'
                  : 'text-[#4A505A] hover:text-[#1E2024]'
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setActiveFilter('commercial')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                activeFilter === 'commercial'
                  ? 'bg-[#1E2024] text-white shadow-xs'
                  : 'text-[#4A505A] hover:text-[#1E2024]'
              }`}
            >
              Commercial
            </button>
          </div>
        </div>

        {/* Eye-Catching Interactive Feature: Before & After Drag Comparison */}
        <div className="mt-12 bg-white rounded-xs border border-[#1E2024]/15 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1E2024]/10">
            <div>
              <div className="text-xs uppercase font-mono tracking-widest text-[#C28448] font-semibold">
                Interactive Transformation
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-[#1E2024] mt-1">
                From Rough Framing to Scandinavian Luxury Kitchen
              </h3>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#717680] font-mono">
              <span>← Drag slider to inspect transformation →</span>
            </div>
          </div>

          {/* Interactive Before & After Slider Canvas */}
          <div
            className="mt-6 relative h-[380px] sm:h-[480px] rounded-xs overflow-hidden select-none cursor-ew-resize border border-[#1E2024]/20 group"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={(e) => {
              if (isDragging) {
                const rect = e.currentTarget.getBoundingClientRect();
                handleSliderMove(e.clientX, rect);
              }
            }}
            onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              handleSliderMove(e.touches[0].clientX, rect);
            }}
          >
            {/* After Image (Background) */}
            <img
              src={ASSETS.renoAfter}
              alt="After: luxury custom kitchen by All In Contracting"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* After Label */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs text-[#1E2024] text-xs font-mono uppercase px-3 py-1.5 rounded-xs border border-[#1E2024]/15 shadow-sm pointer-events-none">
              After: Handover Complete
            </div>

            {/* Before Image (Clipped Foreground) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{
                clipPath: `polygon(0 0, ${sliderPercent}% 0, ${sliderPercent}% 100%, 0 100%)`,
              }}
            >
              <img
                src={ASSETS.renoBefore}
                alt="Before: rough framing renovation in progress"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover filter brightness-95"
              />
              {/* Before Label */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-xs text-white text-xs font-mono uppercase px-3 py-1.5 rounded-xs border border-white/20 pointer-events-none">
                Before: Rough-In Stage
              </div>
            </div>

            {/* Slider Dividing Bar & Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-[#C28448] pointer-events-none"
              style={{ left: `${sliderPercent}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1E2024] text-[#DFC09F] border-2 border-[#C28448] flex items-center justify-center shadow-xl">
                <Sliders className="w-4 h-4" />
              </div>
            </div>

            {/* Quick click controls at bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-xs px-4 py-2 rounded-full text-white text-xs flex items-center gap-4 border border-white/20">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSliderPercent(15);
                }}
                className="hover:text-[#DFC09F] transition-colors cursor-pointer"
              >
                Show 100% Before
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSliderPercent(50);
                }}
                className="hover:text-[#DFC09F] transition-colors cursor-pointer"
              >
                50 / 50 Split
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSliderPercent(85);
                }}
                className="hover:text-[#DFC09F] transition-colors cursor-pointer"
              >
                Show 100% After
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Gallery: 1 Marquee Project + 2 Supporting Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Marquee Major Card (Col Span 7) */}
          <div className="lg:col-span-7 rounded-xs overflow-hidden bg-white border border-[#1E2024]/10 flex flex-col justify-between group shadow-sm hover:shadow-lg transition-all">
            <div className="relative h-80 sm:h-96 overflow-hidden bg-[#121316]">
              <img
                src={featuredMarquee.image}
                alt={featuredMarquee.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <button
                onClick={() =>
                  setLightboxImage({
                    src: featuredMarquee.image,
                    title: featuredMarquee.title,
                    subtitle: `${featuredMarquee.location} · ${featuredMarquee.scope}`,
                  })
                }
                aria-label="View full resolution"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-[#C28448] text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-xs font-mono text-[#DFC09F] uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{featuredMarquee.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredMarquee.duration}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mt-1">
                  {featuredMarquee.title}
                </h3>
              </div>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase text-[#C28448] font-semibold">
                  {featuredMarquee.scope}
                </div>
                <p className="mt-2 text-sm text-[#4A505A] leading-relaxed">
                  {featuredMarquee.description}
                </p>
                <blockquote className="mt-4 p-3 bg-[#FAF8F5] rounded-xs border-l-2 border-[#C28448] text-xs text-[#1E2024] italic">
                  {featuredMarquee.clientQuote}
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E2024]/10 flex items-center justify-between text-xs font-medium text-[#717680]">
                <span>{featuredMarquee.stats}</span>
                <span className="text-[#C28448] font-semibold">Verified Project Record</span>
              </div>
            </div>
          </div>

          {/* Supporting Project Cards (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {supportingProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-xs overflow-hidden bg-white border border-[#1E2024]/10 flex flex-col group shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-48 overflow-hidden bg-[#121316]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <button
                    onClick={() =>
                      setLightboxImage({
                        src: project.image,
                        title: project.title,
                        subtitle: `${project.location} · ${project.scope}`,
                      })
                    }
                    aria-label="Enlarge image"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-[#C28448] text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#DFC09F] uppercase">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                    <h4 className="text-base font-display font-bold text-white mt-0.5 leading-snug">
                      {project.title}
                    </h4>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-[#4A505A] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#1E2024]/5 flex items-center justify-between text-xs text-[#1E2024] font-medium">
                    <span className="text-[#C28448]">{project.scope}</span>
                    <span className="text-[#717680] font-mono">{project.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex flex-col items-center justify-center animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
          >
            <button
              onClick={() => setLightboxImage(null)}
              aria-label="Close image lightbox"
              className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 rounded-full cursor-pointer"
            >
              <X className="w-7 h-7" />
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] w-auto max-w-full rounded-xs object-contain border border-white/20 shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-lg font-display font-bold">{lightboxImage.title}</h3>
              <p className="text-xs text-[#DFC09F] font-mono mt-0.5">{lightboxImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
