import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/contractingData';
import { ArrowUpRight, Check, Clock, FileText, ChevronRight, X } from 'lucide-react';

interface ServicesShowcaseProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  onSelectServiceForQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'commercial'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeTab === 'all') return true;
    return s.category === activeTab;
  });

  return (
    <section id="services" className="bg-[#FAF8F5] py-20 md:py-28 border-b border-[#1E2024]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with Segmented Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1E2024]/10">
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-[#C28448] font-semibold">
              Comprehensive Contracting Capabilities
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-[#1E2024] tracking-tight">
              Residential craft. Commercial rigor.
            </h2>
          </div>

          {/* Interactive Filter Tabs (functional segmented buttons) */}
          <div className="flex items-center gap-1 p-1 bg-[#1E2024]/5 rounded-sm self-start md:self-auto border border-[#1E2024]/10">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#1E2024] text-white shadow-xs'
                  : 'text-[#4A505A] hover:text-[#1E2024]'
              }`}
            >
              All Disciplines ({SERVICES_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab('residential')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'residential'
                  ? 'bg-[#1E2024] text-white shadow-xs'
                  : 'text-[#4A505A] hover:text-[#1E2024]'
              }`}
            >
              Residential (4)
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'commercial'
                  ? 'bg-[#1E2024] text-white shadow-xs'
                  : 'text-[#4A505A] hover:text-[#1E2024]'
              }`}
            >
              Commercial (2)
            </button>
          </div>
        </div>

        {/* Services Grid (Single-column on mobile, asymmetric layout on desktop) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer rounded-xs overflow-hidden bg-white border border-[#1E2024]/10 hover:border-[#C28448] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl"
            >
              {/* Image Container with zoom scale(1.04) and subtle darken */}
              <div className="relative h-64 overflow-hidden bg-[#1E2024]">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category kicker */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#1E2024] text-[11px] font-mono uppercase px-2.5 py-1 rounded-xs border border-white/40">
                  {service.category === 'residential' ? 'Residential' : 'Commercial'}
                </div>

                {/* Diagonal Arrow Icon that lifts on hover */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 group-hover:bg-[#C28448] text-[#1E2024] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4 transition-transform" />
                </div>

                {/* Timeline badge in image */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-white/90 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#DFC09F]" />
                  <span>{service.timeline}</span>
                </div>
              </div>

              {/* Text Card Content that rises smoothly */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-bold text-[#1E2024] group-hover:text-[#C28448] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <div className="text-xs text-[#C28448] font-medium mt-1">
                    {service.subtitle}
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-[#4A505A] leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1E2024]/5 flex items-center justify-between text-xs font-semibold text-[#1E2024] group-hover:text-[#C28448] transition-colors">
                  <span className="uppercase tracking-wider">Explore Scope & Specifications</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dedicated Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF8F5] max-w-2xl w-full rounded-xs border border-[#1E2024]/20 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Image Header */}
            <div className="relative h-64 shrink-0 bg-[#121316]">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#DFC09F]">
                  {selectedService.category === 'residential' ? 'Residential Division' : 'Commercial Division'}
                </span>
                <h3 className="text-2xl font-display font-bold mt-1">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-[#1E2024]">
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-[#C28448] font-bold">
                  Overview & Engineering Approach
                </h4>
                <p className="mt-2 text-sm text-[#4A505A] leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-[#C28448] font-bold">
                  Standard Scope Deliverables
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E2024]">
                      <Check className="w-4 h-4 text-[#C28448] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline & Permitting info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#F3EFEA] rounded-xs border border-[#1E2024]/10">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E2024]">
                    <Clock className="w-3.5 h-3.5 text-[#C28448]" />
                    <span>Typical Timeline</span>
                  </div>
                  <div className="text-xs text-[#4A505A] mt-1">
                    {selectedService.timeline}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E2024]">
                    <FileText className="w-3.5 h-3.5 text-[#C28448]" />
                    <span>Permits & Inspections</span>
                  </div>
                  <div className="text-xs text-[#4A505A] mt-1">
                    {selectedService.permitInfo}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectServiceForQuote(title);
                  }}
                  className="w-full sm:flex-1 py-3 px-6 bg-[#C28448] hover:bg-[#A96E37] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer text-center"
                >
                  Inquire About This Service
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto py-3 px-6 bg-transparent hover:bg-[#1E2024]/5 text-[#1E2024] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer border border-[#1E2024]/20"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
