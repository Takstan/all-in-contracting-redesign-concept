import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/contractingData';
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const prevReview = () => {
    setCurrentIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const item = TESTIMONIALS[currentIdx];

  return (
    <section className="bg-[#FAF8F5] py-20 md:py-28 border-b border-[#1E2024]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1E2024]/10">
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-[#C28448] font-semibold">
              Client Experiences & Proof
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-[#1E2024] tracking-tight">
              What Okanagan clients say about working with Dan.
            </h2>
          </div>

          {/* Manual Carousel Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#717680] mr-2">
              0{currentIdx + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={prevReview}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[#1E2024]/20 hover:border-[#1E2024] hover:bg-[#1E2024] hover:text-white text-[#1E2024] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-[#1E2024]/20 hover:border-[#1E2024] hover:bg-[#1E2024] hover:text-white text-[#1E2024] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card with Smooth Horizontal Crossfade */}
        <div className="mt-12 bg-white rounded-xs border border-[#1E2024]/15 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-6 right-8 text-[#C28448]/15 pointer-events-none">
            <Quote className="w-24 h-24" />
          </div>

          <div className="relative z-10 max-w-4xl space-y-6">
            {/* Stars & Highlight */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 text-[#C28448]">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#C28448] font-semibold bg-[#FAF8F5] px-3 py-1 rounded-xs border border-[#1E2024]/10">
                {item.highlight}
              </span>
            </div>

            {/* Quote Body */}
            <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-[#1E2024] leading-relaxed">
              "{item.quote}"
            </p>

            {/* Author Attribution & Verified Project Scope */}
            <div className="pt-6 border-t border-[#1E2024]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-base font-display font-bold text-[#1E2024] flex items-center gap-2">
                  <span>{item.author}</span>
                  <CheckCircle className="w-4 h-4 text-[#C28448]" />
                </div>
                <div className="text-xs text-[#717680] mt-0.5">
                  {item.role} · {item.projectType}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-[#717680]">
                <MapPin className="w-3.5 h-3.5 text-[#C28448]" />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Supporting Review Teaser Pills for Direct Selection */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIdx(idx)}
              className={`p-4 rounded-xs border text-left transition-all cursor-pointer ${
                currentIdx === idx
                  ? 'bg-[#1E2024] text-white border-[#1E2024] shadow-sm'
                  : 'bg-white text-[#4A505A] border-[#1E2024]/10 hover:border-[#C28448]'
              }`}
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#C28448]">
                {t.location}
              </div>
              <div className="text-xs font-bold font-display mt-0.5 truncate">
                {t.author}
              </div>
              <div className="text-[11px] opacity-75 truncate mt-1">
                {t.projectType}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
