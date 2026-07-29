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
              Leading Outdoor & Indoor <span className="text-gradient-orange">LED Screen Solutions</span> Across The UAE.
            </h2>

            <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
              Established in Ajman, United Arab Emirates, Pixels Advertisement is a premier LED video wall specialist and full-service signage manufacturer. We design, fabricate, and install state-of-the-art Outdoor & Indoor LED Screens, 3D Signages, Sticker Branding, Neon Signs, Signage Machinery, Traffic Signs, Business Cards, Flyers, and Bill Books & Flags.
            </p>

            {/* Interactive Tab Switcher (Founder Message, Mission, Vision, Facility) */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap border-b border-white/10 gap-y-2">
                <button
                  onClick={() => setActiveTab('founder')}
                  className={`pb-3 pr-4 sm:pr-6 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'founder'
                      ? 'border-[#FF6A00] text-[#FF6A00]'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Founder's Message</span>
                </button>
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`pb-3 px-4 sm:px-6 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'mission'
                      ? 'border-[#FF6A00] text-[#FF6A00]'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <Target className="w-3.5 h-3.5" />
                  <span>Our Mission</span>
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`pb-3 px-4 sm:px-6 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'vision'
                      ? 'border-[#9CD248] text-[#9CD248]'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Our Vision</span>
                </button>
                <button
                  onClick={() => setActiveTab('facility')}
                  className={`pb-3 px-4 sm:px-6 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'facility'
                      ? 'border-white text-white'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Ajman Workshop</span>
                </button>
              </div>

              {/* Tab Content Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#111116] border border-white/10 shadow-xl">
                {activeTab === 'founder' && (
                  <div className="space-y-4 animate-in fade-in">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-[#FF6A00] shadow-lg">
                        <img
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
                          alt="Founder & CEO"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-[#FF6A00] uppercase tracking-wider">
                          LEADERSHIP STATEMENT
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white font-display">
                          Rizwan Farook
                        </h3>
                        <div className="text-[11px] text-gray-400">Founder & Managing Director</div>
                      </div>
                    </div>

                    <blockquote className="text-xs sm:text-sm text-gray-200 font-sans italic leading-relaxed border-l-2 border-[#FF6A00] pl-3.5 my-2">
                      "At Pixels Advertisement, our journey began with a single promise: to give every business in the UAE a commanding visual presence that demands attention. From custom 3D signage to cutting-edge outdoor and indoor LED displays, we combine engineering precision with creative mastery to turn every space into a landmark."
                    </blockquote>

                    <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-400 pt-1 font-mono border-t border-white/10">
                      <span>• Uncompromising Quality Control</span>
                      <span className="font-serif italic font-bold text-[#FF6A00] text-sm">R. Farook</span>
                    </div>
                  </div>
                )}

                {activeTab === 'mission' && (
                  <div className="space-y-3 animate-in fade-in">
                    <div className="flex items-center gap-2 text-sm font-bold text-white">
                      <Target className="w-5 h-5 text-[#FF6A00]" />
                      Empowering Brands with Unmatched Visibility
                    </div>
                    <p className="text-xs text-gray-300 font-sans leading-relaxed">
                      Our mission is to engineer world-class LED displays, 3D signages, sticker branding, and advertising solutions utilizing high-precision technology, durable materials, and flawless installation to maximize client brand equity throughout the Gulf region.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-gray-300 pt-1">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A00]" />
                        <span>100% In-House Precision Manufacturing</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A00]" />
                        <span>Weatherproof Gulf-Climate Engineering</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A00]" />
                        <span>Rapid 24-48 Hours Express Delivery</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A00]" />
                        <span>UAE Municipality Compliant Standards</span>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === 'vision' && (
                  <div className="space-y-3 animate-in fade-in">
                    <div className="flex items-center gap-2 text-sm font-bold text-white">
                      <Eye className="w-5 h-5 text-[#9CD248]" />
                      Becoming the GCC's Premier LED & Signage Partner
                    </div>
                    <p className="text-xs text-gray-300 font-sans leading-relaxed">
                      To redefine the visual communication industry across the United Arab Emirates and the wider Middle East by continuously advancing LED video wall technology, sustainable printing practices, and automated 3D metal bending innovation.
                    </p>
                    <div className="p-3 rounded-xl bg-black/40 border border-[#9CD248]/30 flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-[#9CD248] shrink-0" />
                      <div className="text-[11px] text-gray-300 font-mono">
                        Pioneering ultra-bright eco-friendly LED modules and zero-waste digital print tech by 2028.
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'facility' && (
                  <div className="space-y-3 animate-in fade-in">
                    <div className="flex items-center gap-2 text-sm font-bold text-white">
                      <Building2 className="w-5 h-5 text-white" />
                      China Mall, Gate No. 6, Al Jerf Industrial 1, Ajman
                    </div>
                    <p className="text-xs text-gray-300 font-sans leading-relaxed">
                      Our state-of-the-art facility is equipped with 5-meter UV printers, automatic channel letter benders, CO2 lasers, CNC routers, and 3M certified vehicle wrapping bays operating 6 days a week to serve all 7 Emirates.
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
