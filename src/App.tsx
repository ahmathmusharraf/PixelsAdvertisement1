import React, { useState, useEffect } from 'react';
import { DevicePresentationMode } from './components/DevicePresentationMode';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { LedScreenSpotlight } from './components/LedScreenSpotlight';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { IndustriesSection } from './components/IndustriesSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { CallToActionBanner } from './components/CallToActionBanner';
import { Footer } from './components/Footer';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { FloatingActions } from './components/FloatingActions';
import { MobileBottomNav } from './components/MobileBottomNav';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | undefined>(undefined);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'about', 'why-us', 'process', 'testimonials', 'blog', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuoteModal = (serviceId?: string) => {
    setSelectedServiceForQuote(serviceId);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedServiceForQuote(undefined);
  };

  return (
    <DevicePresentationMode
      isPresentationMode={isPresentationMode}
      onToggleMode={(val) => setIsPresentationMode(val)}
    >
      <div className="min-h-screen bg-[#050505] text-[#EDEDED] font-sans antialiased selection:bg-[#FF6A00] selection:text-white pb-12 md:pb-0">
        {/* Navigation Header */}
        <Header
          onOpenQuoteModal={handleOpenQuoteModal}
          isPresentationMode={isPresentationMode}
          onTogglePresentationMode={() => setIsPresentationMode(!isPresentationMode)}
          activeSection={activeSection}
        />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section */}
          <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

          {/* Services Grid */}
          <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

          {/* LED Screen Specialized Feature Spotlight */}
          <LedScreenSpotlight onOpenQuoteModal={handleOpenQuoteModal} />

          {/* About Company & Facility */}
          <AboutSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

          {/* Why Choose Us */}
          <WhyChooseUs />

          {/* 5-Step Process Timeline */}
          <ProcessSection />

          {/* Verified Client Testimonials */}
          <TestimonialsSection />

          {/* Industries & Sectors Served */}
          <IndustriesSection />

          {/* Industry Insights / SEO Blog */}
          <BlogSection />

          {/* Call to Action Banner */}
          <CallToActionBanner onOpenQuoteModal={() => handleOpenQuoteModal()} />

          {/* Ajman Facility Location & Contact Form */}
          <ContactSection />
        </main>

        {/* Mega Footer */}
        <Footer />

        {/* Mobile Bottom Navigation Dock */}
        <MobileBottomNav
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          activeSection={activeSection}
        />

        {/* Floating WhatsApp & Quote Actions */}
        <FloatingActions onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Instant Quote & AI Project Advisor Modal */}
        <QuoteCalculatorModal
          isOpen={isQuoteModalOpen}
          onClose={handleCloseQuoteModal}
          preselectedServiceId={selectedServiceForQuote}
        />
      </div>
    </DevicePresentationMode>
  );
}
