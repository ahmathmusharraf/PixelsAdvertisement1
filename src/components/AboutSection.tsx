import React, { useState } from 'react';
import {
  Building2,
  Target,
  Eye,
  CheckCircle2,
  Award,
  Cpu,
  ShieldCheck,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_DETAILS, heroBg, signageImg, vehicleWrapImg } from '../data/pixelsData';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'facility'>('mission');

  return (
    <section id="about" className="py-6 sm:py-16 lg:py-24 bg-[#050505] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF6A00]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1800px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-12 items-center">
          
          {/* Left Column - Visual Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass-card p-1.5 sm:p-3 border border-white/15 shadow-2xl">
              <div className="relative h-[180px] sm:h-[360px] lg:h-[480px] rounded-xl sm:rounded-2xl overflow-hidden">
                <img
                  src={heroBg}
                  alt="Pixels Advertising Facility Ajman"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[#FF6A00] text-white shrink-0">
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-bold text-white">Ajman In-House Facility</div>
                    <div className="text-[9px] sm:text-[10px] text-gray-300">China Mall, Gate No. 6, Al Jerf 1</div>
                  </div>
                </div>

                {/* Overlaid Bottom Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0D0D0D]/90 backdrop-blur-md border border-white/15">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="text-base sm:text-2xl font-black text-white font-display text-gradient-orange">
                        100% In-House Production
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-300 mt-0.5 sm:mt-1">
                        Zero Middleman • Direct Factory Quality Control
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#9CD248]/20 text-[#9CD248] text-[10px] sm:text-xs font-mono font-bold shrink-0">
                      UAE Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Overlaid Accent Box */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block p-5 rounded-2xl bg-[#111111] border border-[#FF6A00]/40 shadow-2xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#9CD248]/20 text-[#9CD248]">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-white">Advanced Machinery</div>
                  <div className="text-[11px] text-gray-400">5m UV Printers, CNC Routers, CO2 Lasers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Brand Description */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FF6A00] text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              About Pixels Advertisement
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
              Crafting Iconic Visual Branding Across <span className="text-gradient-orange">The United Arab Emirates.</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
              Established in Ajman, United Arab Emirates, Pixels Advertisement is a full-service creative advertising, printing, and signage production company. We specialize in transforming bold corporate visions into striking physical and digital realities.
            </p>

            {/* Interactive Tab Switcher (Mission, Vision, Facility) */}
            <div className="space-y-4 pt-2">
              <div className="flex border-b border-white/10">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`pb-3 pr-6 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
                    activeTab === 'mission'
                      ? 'border-[#FF6A00] text-[#FF6A00]'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  Our Mission
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`pb-3 px-6 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
                    activeTab === 'vision'
                      ? 'border-[#9CD248] text-[#9CD248]'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  Our Vision
                </button>
                <button
                  onClick={() => setActiveTab('facility')}
                  className={`pb-3 px-6 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
                    activeTab === 'facility'
                      ? 'border-white text-white'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  Ajman Workshop
                </button>
              </div>

              {/* Tab Content Box */}
              <div className="p-5 rounded-2xl bg-[#111111] border border-white/10">
                {activeTab === 'mission' && (
                  <div className="space-y-3 animate-in fade-in">
                    <div className="flex items-center gap-2 text-sm font-bold text-white">
                      <Target className="w-5 h-5 text-[#FF6A00]" />
                      Empowering Brands with Unmatched Visibility
                    </div>
                    <p className="text-xs text-gray-300 font-sans leading-relaxed">
                      To engineer world-class signage, printing, and advertising solutions utilizing high-precision technology, durable materials, and flawless installation to elevate client brand equity throughout the Gulf region.
                    </p>
                  </div>
                )}

                {activeTab === 'vision' && (
                  <div className="space-y-3 animate-in fade-in">
                    <div className="flex items-center gap-2 text-sm font-bold text-white">
                      <Eye className="w-5 h-5 text-[#9CD248]" />
                      Becoming UAE's Most Trusted Creative Partner
                    </div>
                    <p className="text-xs text-gray-300 font-sans leading-relaxed">
                      To redefine the advertising production industry in the UAE by seamlessly merging technological innovation, sustainable printing practices, and rapid execution.
                    </p>
                  </div>
                )}

                {activeTab === 'facility' && (
                  <div className="space-y-3 animate-in fade-in">
                    <div className="flex items-center gap-2 text-sm font-bold text-white">
                      <Building2 className="w-5 h-5 text-white" />
                      China Mall, Gate No. 6, Al Jerf Industrial 1, Ajman
                    </div>
                    <p className="text-xs text-gray-300 font-sans leading-relaxed">
                      Equipped with 5-meter UV printers, automatic channel letter benders, CO2 lasers, and 3M certified wrapping bays operating 6 days a week to serve all 7 Emirates.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Feature Pills Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 pt-2">
              {[
                { name: 'Creative Design', icon: Sparkles },
                { name: 'Modern Technology', icon: Cpu },
                { name: 'Skilled Team', icon: Award },
                { name: 'Fast Delivery', icon: ShieldCheck },
                { name: 'Affordable Pricing', icon: CheckCircle2 },
              ].map((pill, idx) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#0D0D12] border border-white/10 hover:border-[#FF6A00]/40 transition-all text-center flex flex-col items-center justify-center gap-1.5 group"
                  >
                    <Icon className="w-4 h-4 text-[#FF6A00] group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold text-gray-300 leading-tight">
                      {pill.name}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-white/10">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 bg-[#FF6A00] hover:bg-[#e05d00] text-white font-bold rounded-full text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2"
              >
                <span>MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="font-serif italic text-2xl font-bold text-[#FF6A00] tracking-widest opacity-80">
                Pixels
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
