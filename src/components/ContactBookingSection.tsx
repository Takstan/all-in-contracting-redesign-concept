import React, { useState } from 'react';
import {
  LeadFormData,
  validateLeadForm,
  generateDiscoverySlots,
  BookingSlot,
  calculateFeasibilityEstimate,
  formatCurrencyCAD,
  ProjectType,
  OkanaganLocation,
} from '../utils/contractingLogic';
import {
  Calendar,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Calculator,
  UserCheck,
} from 'lucide-react';

interface ContactBookingSectionProps {
  initialService?: string;
}

export const ContactBookingSection: React.FC<ContactBookingSectionProps> = ({
  initialService = '',
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: (initialService ? 'kitchen' : '') as ProjectType | '',
    location: '',
    timeline: 'Within 3-6 months',
    budgetRange: '$50k - $100k',
    notes: initialService ? `Inquiring about ${initialService}.` : '',
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [availableSlots] = useState<BookingSlot[]>(() => generateDiscoverySlots());
  const [selectedSlot, setSelectedSlot] = useState<BookingSlot | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  // Feasibility Quick Calculator
  const [calcType, setCalcType] = useState<ProjectType>('kitchen');
  const [calcTier, setCalcTier] = useState<'essential' | 'architectural' | 'luxury'>('architectural');
  const feasibilityEstimate = calculateFeasibilityEstimate(calcType, calcTier);

  const handleInputChange = (
    field: keyof LeadFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateLeadForm(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setFormErrors({});
    setIsSubmitted(true);
  };

  const handleConfirmSlot = () => {
    if (!selectedSlot) return;
    setBookingConfirmed(true);
  };

  return (
    <section id="contact" className="bg-[#121316] text-white py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase font-mono tracking-widest text-[#DFC09F] font-semibold">
            Inquire & Schedule
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
            Start with a 15-minute feasibility call.
          </h2>
          <p className="mt-4 text-base text-white/70 leading-relaxed">
            Tell us about your home or commercial space. We’ll review zoning feasibility, expected budget
            ranges, and realistic timelines with zero sales pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Form or Booking Calendar (Col Span 7) */}
          <div className="lg:col-span-7 bg-[#1E2024] rounded-xs border border-white/15 p-6 sm:p-10 shadow-2xl">
            {!isSubmitted ? (
              /* Phase 1: Lead Details Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h3 className="font-display font-bold text-xl text-white">
                    Step 1: Your Project Details
                  </h3>
                  <span className="text-xs font-mono text-[#DFC09F]">Direct to Dan Byl</span>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-mono uppercase text-white/75 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="e.g. David Campbell"
                      className={`w-full px-4 py-3 bg-[#121316] border rounded-xs text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C28448] ${
                        formErrors.fullName ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-xs text-rose-400 mt-1">{formErrors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-white/75 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="david@example.com"
                      className={`w-full px-4 py-3 bg-[#121316] border rounded-xs text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C28448] ${
                        formErrors.email ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-rose-400 mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-mono uppercase text-white/75 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="250-555-0199"
                      className={`w-full px-4 py-3 bg-[#121316] border rounded-xs text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C28448] ${
                        formErrors.phone ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-rose-400 mt-1">{formErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-xs font-mono uppercase text-white/75 mb-1.5">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => handleInputChange('projectType', e.target.value as ProjectType)}
                      className={`w-full px-4 py-3 bg-[#121316] border rounded-xs text-sm text-white focus:outline-none focus:border-[#C28448] ${
                        formErrors.projectType ? 'border-rose-500' : 'border-white/15'
                      }`}
                    >
                      <option value="">Select project scope...</option>
                      <option value="kitchen">Custom Kitchen Renovation</option>
                      <option value="bathroom">Luxury Ensuite / Bathroom</option>
                      <option value="secondary-suite">Legal Secondary Suite</option>
                      <option value="whole-home">Whole-Home Renovation</option>
                      <option value="commercial-ti">Commercial Tenant Improvement</option>
                      <option value="strata">Strata Capital Improvement</option>
                    </select>
                    {formErrors.projectType && (
                      <p className="text-xs text-rose-400 mt-1">{formErrors.projectType}</p>
                    )}
                  </div>
                </div>

                {/* Location & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="location" className="block text-xs font-mono uppercase text-white/75 mb-1.5">
                      Okanagan Municipality *
                    </label>
                    <select
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value as OkanaganLocation)}
                      className={`w-full px-4 py-3 bg-[#121316] border rounded-xs text-sm text-white focus:outline-none focus:border-[#C28448] ${
                        formErrors.location ? 'border-rose-500' : 'border-white/15'
                      }`}
                    >
                      <option value="">Select municipality...</option>
                      <option value="Kelowna">Kelowna (Mission, Glenmore, Downtown)</option>
                      <option value="West Kelowna">West Kelowna / Rose Valley</option>
                      <option value="Lake Country">Lake Country / Carr's Landing</option>
                      <option value="Vernon">Vernon / Coldstream</option>
                      <option value="Penticton">Penticton / South Okanagan</option>
                      <option value="Other Okanagan">Other Okanagan Area</option>
                    </select>
                    {formErrors.location && (
                      <p className="text-xs text-rose-400 mt-1">{formErrors.location}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="budgetRange" className="block text-xs font-mono uppercase text-white/75 mb-1.5">
                      Estimated Budget Range *
                    </label>
                    <select
                      id="budgetRange"
                      value={formData.budgetRange}
                      onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                      className={`w-full px-4 py-3 bg-[#121316] border rounded-xs text-sm text-white focus:outline-none focus:border-[#C28448] ${
                        formErrors.budgetRange ? 'border-rose-500' : 'border-white/15'
                      }`}
                    >
                      <option value="$35k - $60k">$35,000 – $60,000</option>
                      <option value="$60k - $100k">$60,000 – $100,000</option>
                      <option value="$100k - $200k">$100,000 – $200,000</option>
                      <option value="$200k+">$200,000+</option>
                      <option value="Undetermined">Not sure yet / Need guidance</option>
                    </select>
                    {formErrors.budgetRange && (
                      <p className="text-xs text-rose-400 mt-1">{formErrors.budgetRange}</p>
                    )}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="block text-xs font-mono uppercase text-white/75 mb-1.5">
                    Project Vision & Property Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Tell us what you want to achieve, any structural changes, or ideal completion dates..."
                    className="w-full px-4 py-3 bg-[#121316] border border-white/15 rounded-xs text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C28448]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C28448] hover:bg-[#A96E37] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Submit Details & Choose Call Time</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-white/50 text-center font-mono">
                  Your information is kept private. We never share details with external sales brokers.
                </p>
              </form>
            ) : !bookingConfirmed ? (
              /* Phase 2: Calendly-Style Booking Slot Picker */
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex items-center gap-3 p-4 bg-[#121316] rounded-xs border border-[#C28448]/40">
                  <UserCheck className="w-5 h-5 text-[#C28448] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">
                      Thank you, {formData.fullName}!
                    </div>
                    <div className="text-xs text-white/70">
                      Step 2: Pick a 15-minute phone or Zoom time slot with Dan Byl.
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#DFC09F] font-semibold flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#C28448]" />
                    <span>Select an Available Time (Pacific Time)</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-64 overflow-y-auto pr-1">
                    {availableSlots.map((slot) => {
                      const isSelected = selectedSlot?.id === slot.id;
                      return (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`p-3 rounded-xs border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#C28448] text-white border-[#C28448] shadow-md'
                              : 'bg-[#121316] text-white/80 border-white/10 hover:border-white/30'
                          }`}
                        >
                          <div className="text-xs font-bold font-display">
                            {slot.formattedDate}
                          </div>
                          <div className="text-[11px] font-mono opacity-80 mt-0.5">
                            {slot.formattedTime}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={handleConfirmSlot}
                    disabled={!selectedSlot}
                    className={`w-full sm:flex-1 py-3.5 px-6 rounded-xs text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer text-center ${
                      selectedSlot
                        ? 'bg-[#C28448] hover:bg-[#A96E37] text-white shadow-lg'
                        : 'bg-white/10 text-white/30 cursor-not-allowed'
                    }`}
                  >
                    Confirm Discovery Booking
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto py-3.5 px-4 bg-transparent hover:bg-white/5 text-white/70 text-xs font-semibold uppercase tracking-wider rounded-xs border border-white/10 cursor-pointer"
                  >
                    Back to Form
                  </button>
                </div>
              </div>
            ) : (
              /* Phase 3: Booking Confirmed State */
              <div className="text-center py-8 space-y-5 animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-[#C28448]/20 border border-[#C28448] text-[#C28448] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Discovery Call Confirmed!
                </h3>
                <p className="text-sm text-white/80 max-w-md mx-auto leading-relaxed">
                  Dan Byl has reserved <strong className="text-[#DFC09F]">{selectedSlot?.formattedDate} at {selectedSlot?.formattedTime}</strong> for your project review.
                </p>
                <div className="p-4 bg-[#121316] rounded-xs border border-white/10 text-xs text-white/70 max-w-md mx-auto text-left space-y-1 font-mono">
                  <div><strong>Client:</strong> {formData.fullName} ({formData.phone})</div>
                  <div><strong>Project:</strong> {formData.projectType} · {formData.location}</div>
                  <div><strong>Status:</strong> Calendar invite dispatched to {formData.email}</div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setBookingConfirmed(false);
                      setSelectedSlot(null);
                    }}
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Instant Feasibility Calculator & Contact Card (Col Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Feasibility Calculator Widget */}
            <div className="bg-[#1E2024] p-6 rounded-xs border border-white/15 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#DFC09F] font-bold">
                <Calculator className="w-4 h-4 text-[#C28448]" />
                <span>Instant Feasibility Estimator</span>
              </div>
              <p className="text-xs text-white/70">
                Get an instant ballpark estimate based on verified Okanagan historical project data:
              </p>

              {/* Calculator Inputs */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-white/60 mb-1">
                    Select Scope
                  </label>
                  <select
                    value={calcType}
                    onChange={(e) => setCalcType(e.target.value as ProjectType)}
                    className="w-full px-3 py-2 bg-[#121316] border border-white/15 rounded-xs text-xs text-white focus:outline-none focus:border-[#C28448]"
                  >
                    <option value="kitchen">Custom Kitchen</option>
                    <option value="bathroom">Luxury Ensuite</option>
                    <option value="secondary-suite">Legal Suite</option>
                    <option value="whole-home">Whole Home</option>
                    <option value="commercial-ti">Commercial TI</option>
                    <option value="strata">Strata Works</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-white/60 mb-1">
                    Finish Grade
                  </label>
                  <div className="grid grid-cols-3 gap-1">
                    {(['essential', 'architectural', 'luxury'] as const).map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setCalcTier(tier)}
                        className={`py-1.5 px-2 text-[10px] font-mono uppercase rounded-xs border transition-colors cursor-pointer ${
                          calcTier === tier
                            ? 'bg-[#C28448] text-white border-[#C28448]'
                            : 'bg-[#121316] text-white/60 border-white/10 hover:text-white'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimate Output Result */}
              <div className="p-4 bg-[#121316] rounded-xs border border-white/10 space-y-2 mt-4">
                <div className="text-[11px] font-mono uppercase text-white/50">
                  Estimated Range (CAD):
                </div>
                <div className="text-2xl font-display font-extrabold text-[#DFC09F] tabular-nums">
                  {formatCurrencyCAD(feasibilityEstimate.lowEstimate)} –{' '}
                  {formatCurrencyCAD(feasibilityEstimate.highEstimate)}
                </div>
                <div className="flex items-center justify-between text-xs text-white/70 pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#C28448]" />
                    <span>{feasibilityEstimate.estimatedWeeksLow}–{feasibilityEstimate.estimatedWeeksHigh} Weeks</span>
                  </span>
                  <span className="text-[11px] font-mono text-[#DFC09F]">
                    {feasibilityEstimate.permitRequired ? 'Permit Required' : 'Standard Permit Free'}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-[#1E2024] p-6 rounded-xs border border-white/15 space-y-4">
              <h4 className="font-display font-bold text-base text-white">
                Kelowna & Okanagan Regional Office
              </h4>
              <div className="space-y-3 text-xs text-white/75">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C28448] shrink-0" />
                  <a href="tel:2508081234" className="hover:text-white transition-colors">
                    250-808-1234 (Office & Dispatch)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C28448] shrink-0" />
                  <a href="mailto:dan@allincontracting.co" className="hover:text-white transition-colors">
                    dan@allincontracting.co
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C28448] shrink-0 mt-0.5" />
                  <span>
                    Kelowna, British Columbia<br />
                    Serving Kelowna, West Kelowna, Lake Country, Vernon, & Penticton
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
