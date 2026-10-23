import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustIndicators } from './components/TrustIndicators';
import { PainPointsSection } from './components/PainPointsSection';
import { ServicesShowcase } from './components/ServicesShowcase';
import { FeaturedProjects } from './components/FeaturedProjects';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessTimeline } from './components/ProcessTimeline';
import { MeetFounder } from './components/MeetFounder';
import { TestimonialsSection } from './components/TestimonialsSection';
import { MidPageCTA } from './components/MidPageCTA';
import { FAQSection } from './components/FAQSection';
import { ContactBookingSection } from './components/ContactBookingSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2024] font-sans selection:bg-[#C28448] selection:text-white flex flex-col">
      {/* Top Bar Contract Compliant Sticky Navigation */}
      <Navbar onBookClick={scrollToContact} />

      <main className="flex-1">
        {/* Section 01 — Hero: First Impression */}
        <HeroSection
          onBookClick={scrollToContact}
          onExploreWorkClick={scrollToProjects}
        />

        {/* Section 02 — Social Proof / Trust Indicators */}
        <TrustIndicators />

        {/* Section 03 — Pain Points: "Renovating Shouldn't Be Stressful" */}
        <PainPointsSection onConsultationClick={scrollToContact} />

        {/* Section 04 — Residential and Commercial Service Showcase */}
        <ServicesShowcase onSelectServiceForQuote={handleSelectService} />

        {/* Section 05 — Featured Projects / Work That Speaks For Itself (with Before & After Slider) */}
        <FeaturedProjects />

        {/* Section 06 — Why Choose All In Contracting? */}
        <WhyChooseUs onDiscoveryClick={scrollToContact} />

        {/* Section 07 — Process: "From Vision to Reality" */}
        <ProcessTimeline onScheduleCall={scrollToContact} />

        {/* Section 08 — Meet The Founder (Dan Byl) */}
        <MeetFounder />

        {/* Section 09 — Customer Testimonials */}
        <TestimonialsSection />

        {/* Section 10 — Mid-Page Call to Action */}
        <MidPageCTA onBookClick={scrollToContact} />

        {/* Section 11 — Frequently Asked Questions */}
        <FAQSection />

        {/* Section 12 — Final Contact & Discovery Call Lead Capture */}
        <ContactBookingSection initialService={selectedServiceForQuote} />
      </main>

      {/* Quiet Architectural Footer */}
      <Footer />
    </div>
  );
}
