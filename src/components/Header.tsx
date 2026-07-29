import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageSquare,
  Send,
  Menu,
  X,
  ChevronDown,
  Monitor,
  MapPin,
  Sparkles,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_DETAILS, SERVICES_LIST } from '../data/pixelsData';
import { FacebookLogo, InstagramLogo, TikTokLogo, WhatsAppLogo } from './SocialLogos';

interface HeaderProps {
  onOpenQuoteModal: (serviceId?: string) => void;
  isPresentationMode: boolean;
  onTogglePresentationMode: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuoteModal,
  isPresentationMode,
  onTogglePresentationMode,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services', hasMega: true },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Location', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      {/* Top Bar for Phone & UAE Location */}
      <div className="hidden lg:block border-b border-white/10 pb-2 mb-3 px-4 sm:px-6 lg:px-8 2xl:px-12 text-xs text-gray-400">
        <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1800px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={COMPANY_DETAILS.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-300 hover:text-[#FF6A00] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#FF6A00]" />
              {COMPANY_DETAILS.address.line1}, {COMPANY_DETAILS.address.area}, {COMPANY_DETAILS.address.city}, UAE
            </a>
            <span className="flex items-center gap-1.5 text-gray-400">
              <Clock className="w-3.5 h-3.5 text-[#9CD248]" />
              {COMPANY_DETAILS.workingHours}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 pr-2 border-r border-white/10">
              <a
                href={COMPANY_DETAILS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded bg-white/5 hover:bg-[#1877F2] text-[#1877F2] hover:text-white transition-colors"
                title="Facebook"
              >
                <FacebookLogo className="w-3.5 h-3.5 fill-current" />
              </a>
              <a
                href={COMPANY_DETAILS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded bg-white/5 hover:bg-white/15 transition-colors flex items-center justify-center"
                title="Instagram"
              >
                <InstagramLogo className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_DETAILS.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded bg-white/5 hover:bg-black text-white hover:text-[#00F2FE] transition-colors"
                title="TikTok"
              >
                <TikTokLogo className="w-3.5 h-3.5 fill-current" />
              </a>
              <a
                href={COMPANY_DETAILS.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-black transition-colors"
                title="WhatsApp"
              >
                <WhatsAppLogo className="w-3.5 h-3.5 fill-current" />
              </a>
            </div>

            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="flex items-center gap-1.5 text-white font-bold hover:text-[#FF6A00] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF6A00]" />
              {COMPANY_DETAILS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <Logo size="md" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.hasMega && setMegaMenuOpen(true)}
              onMouseLeave={() => link.hasMega && setMegaMenuOpen(false)}
            >
              <a
                href={link.href}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#FF6A00]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {link.hasMega && <ChevronDown className="w-3.5 h-3.5 text-gray-400" />}
              </a>

              {/* Mega Menu Popup for Services */}
              {link.hasMega && megaMenuOpen && (
                <div className="absolute top-full left-0 w-[680px] -ml-20 bg-[#111111] border border-white/10 rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-4 z-50 animate-in fade-in duration-150 backdrop-blur-xl">
                  <div>
                    <h4 className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider mb-3 pb-1 border-b border-white/10">
                      Signage & LED
                    </h4>
                    <ul className="space-y-2 text-xs">
                      {SERVICES_LIST.filter((s) => ['LED Screens', '3D Signages', 'Outdoor', 'Indoor', 'Neon Signs'].includes(s.category)).slice(0, 5).map((s) => (
                        <li key={s.id}>
                          <button
                            onClick={() => {
                              onOpenQuoteModal(s.id);
                              setMegaMenuOpen(false);
                            }}
                            className="text-gray-300 hover:text-[#FF6A00] text-left transition-colors"
                          >
                            {s.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-[#9CD248] uppercase tracking-wider mb-3 pb-1 border-b border-white/10">
                      Sticker & Printing
                    </h4>
                    <ul className="space-y-2 text-xs">
                      {SERVICES_LIST.filter((s) => ['Sticker Branding', 'Printing & Paper'].includes(s.category)).slice(0, 5).map((s) => (
                        <li key={s.id}>
                          <button
                            onClick={() => {
                              onOpenQuoteModal(s.id);
                              setMegaMenuOpen(false);
                            }}
                            className="text-gray-300 hover:text-[#9CD248] text-left transition-colors"
                          >
                            {s.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 pb-1 border-b border-white/10">
                      Machinery & Traffic
                    </h4>
                    <ul className="space-y-2 text-xs">
                      {SERVICES_LIST.filter((s) => ['Signage Machinery', 'Traffic Signs'].includes(s.category)).slice(0, 5).map((s) => (
                        <li key={s.id}>
                          <button
                            onClick={() => {
                              onOpenQuoteModal(s.id);
                              setMegaMenuOpen(false);
                            }}
                            className="text-gray-300 hover:text-white text-left transition-colors"
                          >
                            {s.title}
                          </button>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 pt-3 border-t border-white/10">
                      <a
                        href="#services"
                        onClick={() => setMegaMenuOpen(false)}
                        className="text-xs text-[#FF6A00] font-bold hover:underline flex items-center gap-1"
                      >
                        View All 26 Services <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={COMPANY_DETAILS.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-black border border-[#25D366]/30 transition-all"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
          </a>

          <button
            onClick={() => onOpenQuoteModal()}
            className="px-5 py-2.5 rounded-xl bg-[#FF6A00] hover:bg-[#e05d00] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#FF6A00]/25 flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Get Free Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => onOpenQuoteModal()}
            className="p-2 rounded-lg bg-[#FF6A00] text-white text-xs font-bold"
          >
            Quote
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0D0D] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-gray-200 hover:text-[#FF6A00]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="flex items-center gap-2 text-sm text-white font-bold"
            >
              <Phone className="w-4 h-4 text-[#FF6A00]" />
              {COMPANY_DETAILS.phone}
            </a>

            <button
              onClick={() => {
                onOpenQuoteModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#FF6A00] text-white font-bold rounded-xl text-center text-sm"
            >
              Request Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
