import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Featured Work', href: '#projects' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Founder', href: '#founder' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#1E2024]/10 shadow-xs py-3.5'
          : 'bg-[#121316]/60 backdrop-blur-xs text-white border-b border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single element, clean display type) */}
        <a
          href="#"
          className={`font-display text-lg md:text-xl font-bold tracking-tight uppercase whitespace-nowrap shrink-0 transition-colors ${
            scrolled ? 'text-[#1E2024]' : 'text-white'
          }`}
        >
          All In Contracting
        </a>

        {/* Zone 2: 4-6 clean single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`whitespace-nowrap shrink-0 transition-colors relative py-1 hover:text-[#C28448] ${
                scrolled ? 'text-[#4A505A]' : 'text-white/80'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href="tel:2508081234"
            className={`hidden xl:flex items-center gap-2 text-xs font-medium px-2 py-1 transition-colors ${
              scrolled ? 'text-[#1E2024]/70 hover:text-[#1E2024]' : 'text-white/70 hover:text-white'
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-[#C28448]" />
            <span>250-808-1234</span>
          </a>
          <button
            onClick={onBookClick}
            className="group inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1E2024] hover:bg-[#C28448] transition-colors rounded-sm whitespace-nowrap cursor-pointer shadow-sm"
          >
            <span>Book Discovery Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className={`lg:hidden p-2 rounded-sm cursor-pointer ${
            scrolled ? 'text-[#1E2024]' : 'text-white'
          }`}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#1E2024]/10 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4 text-base font-medium text-[#1E2024]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#1E2024]/5 hover:text-[#C28448] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:2508081234"
                className="flex items-center gap-2 text-sm text-[#4A505A]"
              >
                <Phone className="w-4 h-4 text-[#C28448]" />
                <span>Call: 250-808-1234 (Kelowna Office)</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full text-center px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#1E2024] hover:bg-[#C28448] transition-colors rounded-sm cursor-pointer"
              >
                Book Discovery Call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
