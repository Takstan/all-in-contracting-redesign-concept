/**
 * Core business and calculation logic for All In Contracting landing page
 */

export type ProjectType =
  | 'kitchen'
  | 'bathroom'
  | 'secondary-suite'
  | 'whole-home'
  | 'commercial-ti'
  | 'strata';

export type OkanaganLocation =
  | 'Kelowna'
  | 'West Kelowna'
  | 'Lake Country'
  | 'Vernon'
  | 'Penticton'
  | 'Other Okanagan';

export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: ProjectType | '';
  location: OkanaganLocation | '';
  timeline: string;
  budgetRange: string;
  notes: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof LeadFormData, string>>;
}

export function validateLeadForm(data: LeadFormData): ValidationResult {
  const errors: Partial<Record<keyof LeadFormData, string>> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters)';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  const cleanPhone = data.phone.replace(/[\s\-\(\)\.]/g, '');
  if (!cleanPhone || cleanPhone.length < 10) {
    errors.phone = 'Please provide a 10-digit Canadian phone number';
  }

  if (!data.projectType) {
    errors.projectType = 'Please select a project type';
  }

  if (!data.location) {
    errors.location = 'Please select your Okanagan municipality';
  }

  if (!data.budgetRange) {
    errors.budgetRange = 'Please select an estimated budget range';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface FeasibilityResult {
  title: string;
  lowEstimate: number;
  highEstimate: number;
  estimatedWeeksLow: number;
  estimatedWeeksHigh: number;
  permitRequired: boolean;
  typicalMilestones: string[];
}

export function calculateFeasibilityEstimate(
  type: ProjectType,
  tier: 'essential' | 'architectural' | 'luxury' = 'architectural'
): FeasibilityResult {
  const multiplier = tier === 'essential' ? 0.8 : tier === 'luxury' ? 1.35 : 1.0;

  switch (type) {
    case 'kitchen':
      return {
        title: 'Bespoke Kitchen Renovation',
        lowEstimate: Math.round(48000 * multiplier),
        highEstimate: Math.round(115000 * multiplier),
        estimatedWeeksLow: 5,
        estimatedWeeksHigh: 8,
        permitRequired: false,
        typicalMilestones: [
          'Design & Millwork Engineering (2 wks)',
          'Demolition & Trade Rough-ins (1-2 wks)',
          'Cabinetry & Stone Fabrication (2-3 wks)',
          'Trim, Hardware & 0-Punch Handover (1 wk)',
        ],
      };
    case 'bathroom':
      return {
        title: 'Luxury Ensuite / Bathroom',
        lowEstimate: Math.round(26000 * multiplier),
        highEstimate: Math.round(62000 * multiplier),
        estimatedWeeksLow: 3,
        estimatedWeeksHigh: 5,
        permitRequired: false,
        typicalMilestones: [
          'Plumbing layout & waterproofing prep (1 wk)',
          'Heated floor & precision tile setting (1-2 wks)',
          'Custom glass, vanity & fixtures (1 wk)',
        ],
      };
    case 'secondary-suite':
      return {
        title: 'Legal Secondary / Basement Suite',
        lowEstimate: Math.round(85000 * multiplier),
        highEstimate: Math.round(175000 * multiplier),
        estimatedWeeksLow: 8,
        estimatedWeeksHigh: 14,
        permitRequired: true,
        typicalMilestones: [
          'City of Kelowna / RDCO Permit Approval (3-5 wks)',
          'Fire separation & sub-panel rough-ins (2-3 wks)',
          'Drywall, kitchen install & separate entry (4-5 wks)',
          'Final Occupancy Inspection (1 wk)',
        ],
      };
    case 'whole-home':
      return {
        title: 'Whole-Home Transformation',
        lowEstimate: Math.round(160000 * multiplier),
        highEstimate: Math.round(480000 * multiplier),
        estimatedWeeksLow: 14,
        estimatedWeeksHigh: 24,
        permitRequired: true,
        typicalMilestones: [
          'Architectural plans & structural engineering (4 wks)',
          'Structural demolition & load-bearing beams (3 wks)',
          'Full MEP rough-ins & insulation (4 wks)',
          'High-end interior finishes & exterior updates (8 wks)',
        ],
      };
    case 'commercial-ti':
      return {
        title: 'Commercial Tenant Improvement (TI)',
        lowEstimate: Math.round(60000 * multiplier),
        highEstimate: Math.round(280000 * multiplier),
        estimatedWeeksLow: 6,
        estimatedWeeksHigh: 16,
        permitRequired: true,
        typicalMilestones: [
          'Base building survey & commercial code review (2 wks)',
          'Acoustic partitioning & fire-rated assembly (3 wks)',
          'Commercial HVAC, lighting & glass walls (4 wks)',
          'City sign-off & commercial occupancy (1 wk)',
        ],
      };
    case 'strata':
      return {
        title: 'Strata Capital Works & Common Area Renovation',
        lowEstimate: Math.round(35000 * multiplier),
        highEstimate: Math.round(240000 * multiplier),
        estimatedWeeksLow: 4,
        estimatedWeeksHigh: 12,
        permitRequired: true,
        typicalMilestones: [
          'Council presentation & scope consensus (2 wks)',
          'Low-disruption phased execution (4-8 wks)',
          'Final walkthrough with strata council (1 wk)',
        ],
      };
  }
}

export interface BookingSlot {
  id: string;
  dateStr: string;
  formattedDate: string;
  time: string;
  formattedTime: string;
}

export function generateDiscoverySlots(referenceDate: Date = new Date()): BookingSlot[] {
  const slots: BookingSlot[] = [];
  const times = ['09:30 AM', '11:00 AM', '01:30 PM', '03:00 PM', '04:30 PM'];

  let addedDays = 0;
  let current = new Date(referenceDate);

  // Pick next 3 weekdays starting tomorrow
  while (addedDays < 3) {
    current = new Date(current.getTime() + 24 * 60 * 60 * 1000);
    const dayOfWeek = current.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      // It's a weekday
      const dateStr = current.toISOString().split('T')[0];
      const formattedDate = current.toLocaleDateString('en-CA', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });

      // Add 2-3 available slots per day
      const daySlots = dayOfWeek % 2 === 0 ? [times[0], times[2], times[4]] : [times[1], times[3]];
      daySlots.forEach((t, idx) => {
        slots.push({
          id: `${dateStr}-${idx}`,
          dateStr,
          formattedDate,
          time: t,
          formattedTime: `${t} (PST)`,
        });
      });
      addedDays++;
    }
  }

  return slots;
}

export function formatCurrencyCAD(amount: number): string {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0,
  }).format(amount);
}
