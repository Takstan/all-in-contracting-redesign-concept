import React, { useState } from 'react';
import { FAQ_DATA } from '../data/contractingData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#FAF8F5] py-20 md:py-28 border-b border-[#1E2024]/10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#C28448] font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions Answered</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1E2024] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#4A505A] max-w-xl mx-auto">
            Everything you need to know about pricing guarantees, Kelowna permits, living on site,
            and our 2-year warranty.
          </p>
        </div>

        {/* FAQ Accordion List with plus to minus rotation */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xs border border-[#1E2024]/10 transition-colors duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5]/50 transition-colors"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#1E2024] pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#1E2024] text-white border-[#1E2024]'
                        : 'border-[#1E2024]/20 text-[#1E2024]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-1 text-sm text-[#4A505A] leading-relaxed border-t border-[#1E2024]/5">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
