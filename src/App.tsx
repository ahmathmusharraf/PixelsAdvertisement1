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
import { SectionTransition } from './components/SectionTransition';

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

        {/* Main Content Sections with Smooth Scroll Transitions */}
        <main className="overflow-hidden">
          {/* Hero Section */}
          <SectionTransition id="hero" showDivider={false}>
            <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />
          </SectionTransition>

          {/* Services Grid */}
          <SectionTransition glowColor="orange">
            <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />
          </SectionTransition>

          {/* LED Screen Specialized Feature Spotlight */}
          <SectionTransition glowColor="cyan">
            <LedScreenSpotlight onOpenQuoteModal={handleOpenQuoteModal} />
          </SectionTransition>

          {/* About Company & Facility */}
          <SectionTransition glowColor="mixed">
            <AboutSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
          </SectionTransition>

          {/* Why Choose Us */}
          <SectionTransition glowColor="green">
            <WhyChooseUs />
          </SectionTransition>

          {/* 5-Step Process Timeline */}
          <SectionTransition glowColor="orange">
            <ProcessSection />
          </SectionTransition>

          {/* Verified Client Testimonials */}
          <SectionTransition glowColor="mixed">
            <TestimonialsSection />
          </SectionTransition>

          {/* Industries & Sectors Served */}
          <SectionTransition glowColor="cyan">
            <IndustriesSection />
          </SectionTransition>

          {/* Industry Insights / SEO Blog */}
          <SectionTransition glowColor="orange">
            <BlogSection />
          </SectionTransition>

          {/* Call to Action Banner */}
          <SectionTransition glowColor="mixed">
            <CallToActionBanner onOpenQuoteModal={() => handleOpenQuoteModal()} />
          </SectionTransition>

          {/* Ajman Facility Location & Contact Form */}
          <SectionTransition glowColor="orange">
            <ContactSection />
          </SectionTransition>
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

