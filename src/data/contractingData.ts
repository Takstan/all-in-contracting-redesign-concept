import heroImg from '../assets/images/hero_okanagan_residence_1792587945234.jpg';
import renoBeforeImg from '../assets/images/reno_before_construction_1792587945877.jpg';
import renoAfterImg from '../assets/images/reno_after_luxury_kitchen_1792587947300.jpg';
import commercialImg from '../assets/images/commercial_tenant_improvement_1792587947888.jpg';
import founderImg from '../assets/images/dan_byl_founder_portrait_1792587949784.jpg';
import bathroomImg from '../assets/images/luxury_ensuite_bathroom_1792587971178.jpg';
import suiteImg from '../assets/images/secondary_suite_modern_1792587970909.jpg';

export const ASSETS = {
  hero: heroImg,
  renoBefore: renoBeforeImg,
  renoAfter: renoAfterImg,
  commercial: commercialImg,
  founder: founderImg,
  bathroom: bathroomImg,
  suite: suiteImg,
};

export interface ServiceItem {
  id: string;
  category: 'residential' | 'commercial';
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
  image: string;
  permitInfo: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'kitchens',
    category: 'residential',
    title: 'Custom Kitchen Renovations',
    subtitle: 'The architectural heart of the home',
    description:
      'From load-bearing wall removal to custom European cabinetry, engineered waterfall islands, and integrated panel appliances. Built for how Okanagan families live and entertain.',
    deliverables: [
      'Architectural 3D millwork drawings & spatial flow',
      'Plumbing, gas line re-routing & electrical sub-panel',
      'Bespoke white oak/walnut cabinetry & quartz/marble installation',
      'Integrated cove lighting and thermostatic kitchen ventilation',
    ],
    timeline: '5 – 8 Weeks from site prep',
    image: ASSETS.renoAfter,
    permitInfo: 'Structural alterations & plumbing re-routes permitted through City of Kelowna / RDCO.',
  },
  {
    id: 'bathrooms',
    category: 'residential',
    title: 'Luxury Ensuites & Bathrooms',
    subtitle: 'Spa-level retreat with zero leak risk',
    description:
      'Curbless zero-threshold showers, in-floor hydronic or electric heating, floating architectural vanities, and precision mitered tilework engineered with Schluter waterproof membranes.',
    deliverables: [
      'Complete Schluter-certified waterproof enclosure warranty',
      'Freestanding solid surface soaking tubs & thermostatic multi-jet valves',
      'Custom fluted or reeded glass architectural screens',
      'Dual-sink floating vanities with concealed recessed medicine storage',
    ],
    timeline: '3 – 5 Weeks',
    image: ASSETS.bathroom,
    permitInfo: 'City inspection for rough-in plumbing and electrical safety certification.',
  },
  {
    id: 'secondary-suites',
    category: 'residential',
    title: 'Legal Secondary & Basement Suites',
    subtitle: 'Mortgage helper or multi-generational living',
    description:
      'Turn underutilized square footage into cash-flow revenue or comfortable in-law accommodations built strictly to BC Building Code 9.36 and local municipal bylaws.',
    deliverables: [
      'Full Kelowna bylaw compliance, fire separation & sound attenuation',
      'Dedicated exterior entry with frost-protected concrete steps',
      'Independent kitchen, laundry, and separate HVAC/baseboard heating',
      'City occupancy permit and inspection clearance guaranteed',
    ],
    timeline: '8 – 14 Weeks',
    image: ASSETS.suite,
    permitInfo: 'Full building permit, plumbing permit, and electrical inspection signed off for legal occupancy.',
  },
  {
    id: 'whole-home',
    category: 'residential',
    title: 'Whole-Home Transformations',
    subtitle: 'Comprehensive structural remodeling',
    description:
      'Complete interior and exterior overhauls. We harmonize flow, raise ceilings with steel beam retrofits, replace high-efficiency windows, and install modern architectural finishes.',
    deliverables: [
      'Full architectural, structural and interior design coordination',
      'Seismic and structural beam engineering',
      'High-performance insulation, envelope sealing & HVAC upgrade',
      'Turnkey move-in ready handover with 0-punch milestone guarantee',
    ],
    timeline: '14 – 24 Weeks',
    image: ASSETS.hero,
    permitInfo: 'Comprehensive building permit package handled directly by our project management team.',
  },
  {
    id: 'commercial-ti',
    category: 'commercial',
    title: 'Commercial Tenant Improvements (TI)',
    subtitle: 'Offices, professional clinics & retail spaces',
    description:
      'On-time delivery so your business opens its doors without lost lease revenue. We handle acoustic drywall, commercial glazing, accessibility, and high-spec lighting.',
    deliverables: [
      'Fast-track permitting & commercial building code adherence',
      'Acoustic wall partitions, demising walls & sound masking',
      'Commercial electrical, lighting control & server room infrastructure',
      'Bespoke reception desks, conference suites & ADA-compliant restrooms',
    ],
    timeline: '6 – 16 Weeks',
    image: ASSETS.commercial,
    permitInfo: 'Commercial development & tenant occupancy permits with City of Kelowna / West Kelowna.',
  },
  {
    id: 'strata',
    category: 'commercial',
    title: 'Strata & Capital Works Improvements',
    subtitle: 'Reliable execution with minimal resident friction',
    description:
      'Common lobby renovations, hallway refurbishments, amenity upgrades, and exterior remediation designed to protect property values and appease council requirements.',
    deliverables: [
      'Phased schedule that prevents corridor blockages and noise disruption',
      'Fire-rated commercial door sets and emergency lighting integration',
      'Durable commercial carpet tiles, vinyl plank, and wall protection',
      'Detailed council progress reporting & transparent progress billing',
    ],
    timeline: '4 – 12 Weeks',
    image: ASSETS.commercial,
    permitInfo: 'Strata council approved scope with applicable building permits.',
  },
];

export interface ProjectShowcase {
  id: string;
  category: 'residential' | 'commercial';
  title: string;
  location: string;
  scope: string;
  duration: string;
  description: string;
  image: string;
  stats: string;
  clientQuote: string;
}

export const FEATURED_PROJECTS: ProjectShowcase[] = [
  {
    id: 'mckinley-lakeside',
    category: 'residential',
    title: 'McKinley Beach Lakeside Residence',
    location: 'McKinley Beach, Kelowna',
    scope: 'Complete Main Level Living & Kitchen Overhaul',
    duration: '7 Weeks',
    description:
      'Opened up a segmented 1990s floorplan into a light-filled lakeside sanctuary. Custom rift-cut white oak cabinetry, floor-to-ceiling panoramic glass, and a 12-foot quartzite island.',
    image: ASSETS.hero,
    stats: '1,850 sq ft · Completed on schedule',
    clientQuote:
      '"Dan and his crew finished on the exact week promised. No stress, daily photo updates, and impeccable craftsmanship."',
  },
  {
    id: 'downtown-executive-ti',
    category: 'commercial',
    title: 'Downtown Kelowna Professional Suite',
    location: 'Water Street, Kelowna',
    scope: 'Commercial Tenant Improvement & Client Lounge',
    duration: '9 Weeks',
    description:
      'Transformed raw shell space into an executive office suite featuring custom acoustic timber slats, black steel glazed offices, and polished architectural concrete floors.',
    image: ASSETS.commercial,
    stats: '2,400 sq ft · Zero tenant downtime',
    clientQuote:
      '"All In Contracting coordinated all trades with absolute precision. Our doors opened ahead of lease obligations."',
  },
  {
    id: 'mission-ensuite',
    category: 'residential',
    title: 'Lower Mission Primary Ensuite Retreat',
    location: 'Lower Mission, Kelowna',
    scope: 'Luxury Spa Ensuite & Dressing Room',
    duration: '4 Weeks',
    description:
      'Created a tranquil European-inspired ensuite with a freestanding matte stone tub, heated travertine tile, frameless reeded glass, and brass wall-mounted fixtures.',
    image: ASSETS.bathroom,
    stats: '280 sq ft · Custom fluted millwork',
    clientQuote:
      '"Every morning feels like waking up at a 5-star Okanagan boutique resort. The tile alignment is flawless."',
  },
  {
    id: 'black-mountain-suite',
    category: 'residential',
    title: 'Black Mountain Walkout Secondary Suite',
    location: 'Black Mountain, Kelowna',
    scope: 'Legal 2-Bedroom Revenue Suite',
    duration: '10 Weeks',
    description:
      'Engineered a sound-dampened legal walkout suite with dedicated exterior entry, high ceilings, full chef-ready kitchenette, and city occupancy sign-off.',
    image: ASSETS.suite,
    stats: '950 sq ft · $2,200/mo rental income',
    clientQuote:
      '"The city inspector commented that All In Contracting does the cleanest fire-separation work in Kelowna."',
  },
];

export interface WhyChooseItem {
  number: string;
  title: string;
  summary: string;
  description: string;
  metric: string;
  metricLabel: string;
  image: string;
}

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    number: '01',
    title: 'Guaranteed Milestones & Fixed-Price Certainty',
    summary: 'No budget surprises or hidden change order markups.',
    description:
      'We do not believe in vague allowances that blow up halfway through demo. You receive a transparent, line-item scope with fixed phase payments tied to verified on-site milestone sign-offs.',
    metric: '98.4%',
    metricLabel: 'Projects delivered within 2% of original approved contract',
    image: ASSETS.renoAfter,
  },
  {
    number: '02',
    title: 'Single Dedicated Point of Contact',
    summary: 'Direct communication with Dan Byl & your project superintendent.',
    description:
      'You will never have to chase five different sub-trades or wonder who is showing up tomorrow. You get direct access to our superintendent, weekly video walkthroughs, and a digital client portal.',
    metric: 'Daily',
    metricLabel: 'Timestamped photo logs and progress updates in your client portal',
    image: ASSETS.founder,
  },
  {
    number: '03',
    title: 'Red Seal Craftsmanship & Certified Trades',
    summary: 'Vetted Okanagan trades who take pride in precision.',
    description:
      'Dan Byl brings over 20 years of hands-on construction mastery since 2003. We work exclusively with licensed electricians, Red Seal plumbers, and trusted Kelowna cabinetmakers.',
    metric: '20+ Yrs',
    metricLabel: 'Construction leadership experience across residential & commercial builds',
    image: ASSETS.hero,
  },
  {
    number: '04',
    title: 'Okanagan Permitting & Building Code Mastery',
    summary: 'Navigating Kelowna, West Kelowna, and RDCO regulations effortlessly.',
    description:
      'From Step Code energy compliance to structural load engineering and strata bylaws, we handle every permit submission and municipal inspector walkthrough so you never worry about compliance.',
    metric: '100%',
    metricLabel: 'First-time permit inspection approval track record',
    image: ASSETS.commercial,
  },
];

export interface ProcessStep {
  step: string;
  phase: string;
  title: string;
  description: string;
  keyActions: string[];
  duration: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    phase: 'Plan',
    title: 'Feasibility, Scope & Transparent Budgeting',
    description:
      'Everything begins with a no-pressure 15-minute discovery call followed by an on-site consultation. We audit structural realities, define exact finish specifications, and prepare fixed-cost line items.',
    keyActions: [
      'Discovery call with Dan Byl to assess goals and feasibility',
      'On-site laser measurement & structural evaluation',
      'Fixed-price milestone agreement & 3D material selection review',
      'Municipal permit filing with City of Kelowna or RDCO',
    ],
    duration: '2 – 3 Weeks',
  },
  {
    step: '02',
    phase: 'Build',
    title: 'Dust-Free Demolition & Precision Construction',
    description:
      'Our team establishes heavy-duty dust barriers and floor protection before turning a single screw. Your superintendent coordinates trades in a synchronized sequence with daily photo updates.',
    keyActions: [
      'HEPA air scrubbing and protective floor/furniture shielding',
      'Rough-in inspections with municipal building officials',
      'Continuous quality control checks at every stage',
      'Weekly scheduled check-in call with your superintendent',
    ],
    duration: '4 – 14 Weeks (project dependent)',
  },
  {
    step: '03',
    phase: 'Enjoy',
    title: 'Zero-Punch Handover & 2-Year Warranty',
    description:
      'We do not consider a project complete until every drawer slide glides smoothly, every paint edge is crisp, and our commercial cleaning crew leaves your home spotless.',
    keyActions: [
      'Comprehensive pre-completion walkthrough inspection',
      'Commercial deep clean of the entire work zone',
      'Handover binder with appliance manuals, paint codes & warranties',
      '2-Year All In Contracting Craftsmanship Warranty coverage',
    ],
    duration: 'Move-in Day & Beyond',
  },
];

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  projectType: string;
  rating: number;
  highlight: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote:
      'We had heard horror stories about contractors in the Okanagan taking deposits and disappearing for weeks. Dan Byl and All In Contracting were the complete opposite. They showed up at 7:30 AM every day, sent video updates, and finished our kitchen two days ahead of our Thanksgiving deadline.',
    author: 'Marcus & Elena V.',
    role: 'Homeowners',
    location: 'Lower Mission, Kelowna',
    projectType: 'Full Kitchen & Main Floor Renovation',
    rating: 5,
    highlight: 'Finished 2 days ahead of schedule',
  },
  {
    id: 'test-2',
    quote:
      'All In Contracting built out our medical clinic in downtown Kelowna. With commercial leases, every week of delay is thousands in lost revenue. Dan managed all trades like clockwork and coordinated with city inspectors effortlessly. Top tier professional team.',
    author: 'Dr. Aaron Campbell',
    role: 'Clinic Director',
    location: 'Downtown Kelowna',
    projectType: 'Commercial Tenant Improvement (2,200 sq ft)',
    rating: 5,
    highlight: 'Zero lost lease revenue',
  },
  {
    id: 'test-3',
    quote:
      'Converting our basement into an authorized legal suite seemed daunting with all the new City of Kelowna bylaws. Dan handled every permit, fire barrier, and electrical inspection. Our suite rented immediately for $2,150/month.',
    author: 'Christine & David P.',
    role: 'Homeowners',
    location: 'West Kelowna',
    projectType: 'Legal Secondary Suite Construction',
    rating: 5,
    highlight: '100% City inspection sign-off',
  },
  {
    id: 'test-4',
    quote:
      'As a strata council president, managing common hallway and foyer updates with 48 resident owners is stressful. All In Contracting kept noise strictly within posted hours, kept corridors clean, and communicated flawlessly with council.',
    author: 'Robert Sterling',
    role: 'Strata Council President',
    location: 'Lake Country, BC',
    projectType: 'Strata Capital Works & Corridor Modernization',
    rating: 5,
    highlight: 'Flawless resident communication',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'budget' | 'permits';
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'How does All In Contracting prevent surprise budget increases?',
    answer:
      'Unlike contractors who bid low with vague "allowances" and hit you with change orders later, we invest significant time in our planning phase. We specify materials, verify structural framing, and lock in sub-trade bids before signing. If you do not request changes to the scope, your price remains fixed.',
    category: 'budget',
  },
  {
    question: 'Do you take care of City of Kelowna and RDCO building permits?',
    answer:
      'Yes, 100%. We handle architectural drafting coordination, structural engineer sign-offs, permit application filings, and all municipal on-site inspections. You never have to wait in line at city hall or decipher building code jargon.',
    category: 'permits',
  },
  {
    question: 'Can we stay in our home while the renovation is happening?',
    answer:
      'For kitchen and bathroom renovations, yes! We set up negative-air HEPA scrubbers, zip-wall dust containment, and floor protection paths to isolate the construction zone. For whole-home renovations where electrical or plumbing service is interrupted across the whole building, we help you plan a temporary stay.',
    category: 'general',
  },
  {
    question: 'How do we track progress during the build?',
    answer:
      'You receive direct access to our client portal where your superintendent uploads high-resolution timestamped daily photos, trade schedules, and milestone logs. Furthermore, Dan Byl conducts scheduled weekly walkthrough calls to answer any questions.',
    category: 'general',
  },
  {
    question: 'What warranty is provided on your craftsmanship?',
    answer:
      'We provide a comprehensive 2-Year Craftsmanship Warranty on all our construction and renovation work, along with manufacturer warranties on all installed fixtures, cabinetry, and equipment. We stand firmly behind every nail, tile, and joint we build.',
    category: 'general',
  },
];

export const COMMERCIAL_PARTNERS = [
  { name: 'Okanagan Strata Management', location: 'Kelowna' },
  { name: 'Mission Ridge Living', location: 'Lower Mission' },
  { name: 'Vantage Commercial Holdings', location: 'West Kelowna' },
  { name: 'Lakeside Medical Group', location: 'Kelowna' },
  { name: 'Highland Ridge Estates', location: 'Lake Country' },
  { name: 'Vernon Retail Properties', location: 'North Okanagan' },
];
