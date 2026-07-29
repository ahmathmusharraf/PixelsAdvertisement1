import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Tv,
  Sun,
  ShieldCheck,
  Cloud,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Maximize2,
  Zap,
} from 'lucide-react';
import { heroBg, signageImg } from '../data/pixelsData';

interface LedScreenSpotlightProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const LedScreenSpotlight: React.FC<LedScreenSpotlightProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'outdoor' | 'indoor' | 'specs'>('outdoor');

  const ledHighlights = [
    {
      title: 'Outdoor HD LED Screens',
      pitch: 'P3.9 / P4.8 / P6 / P10',
      brightness: '6,500+ Nits Daylight Clear',
      waterproof: 'IP65 Weatherproof Sealed',
      desc: 'Engineered specifically for harsh Gulf climates with anti-glare high refresh rate panels, heat dissipation aluminum, and storm resistance.',
    },
    {
      title: 'Indoor Fine-Pitch LED Video Walls',
      pitch: 'P1.2 / P1.5 / P1.8 / P2.5',
      brightness: '1,200 Nits High Contrast',
      waterproof: 'Seamless Bezel-Free Display',
      desc: 'Ultra-thin, silent fanless cabinets ideal for luxury retail receptions, control rooms, auditoriums, and exhibition booths.',
    },
  ];

  return (
    <section className="py-8 sm:py-20 bg-[#07070A] relative overflow-hidden border-t border-white/10">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF6A00]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#00F2FE]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1800px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/30 text-[#FF6A00] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest">
            <Tv className="w-3.5 h-3.5" />
            <span>FEATURED CORE SPECIALTY</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
            Outdoor & Indoor <span className="bg-gradient-to-r from-[#FF6A00] via-[#FFD700] to-[#00F2FE] bg-clip-text text-transparent">LED Screen</span> Solutions
          </h2>

          <p className="text-xs sm:text-base text-gray-300 font-sans leading-relaxed">
            High-brightness LED video walls, programmable outdoor displays, and fine-pitch indoor screens with 3840Hz refresh rates and remote cloud content scheduling.
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          {/* Left Column: Visual Screen Preview */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass-card p-2 sm:p-4 border border-white/15 shadow-2xl">
              <div className="relative h-[220px] sm:h-[380px] rounded-xl sm:rounded-2xl overflow-hidden bg-[#0A0A0E]">
                <img
                  src={signageImg}
                  alt="Outdoor Indoor LED Screen Display"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#FF6A00]" />
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-white uppercase">
                    3840Hz Refresh Rate
                  </span>
                </div>

                <div className="absolute top-3 right-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 flex items-center gap-2">
                  <Sun className="w-4 h-4 text-[#FFD700]" />
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-white uppercase">
                    Direct Sunlight Readable
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3 sm:p-4 rounded-xl bg-[#0D0D12]/90 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-white font-display">
                      Custom Outdoor & Indoor Dimensions
                    </div>
                    <div className="text-[10px] text-gray-300 font-sans">
                      Die-cast aluminum cabinets with magnetic quick-service front access
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenQuoteModal('outdoor-indoor-led-screen')}
                    className="px-3 py-1.5 rounded-lg bg-[#FF6A00] hover:bg-[#e05d00] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider shrink-0 transition-all cursor-pointer"
                  >
                    Get LED Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Spec Cards & Feature Comparison */}
          <div className="lg:col-span-6 space-y-4">
            {ledHighlights.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                className="p-4 sm:p-6 rounded-2xl bg-[#0F0F14] border border-white/10 hover:border-[#FF6A00]/40 transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-base sm:text-xl font-bold text-white font-display">
                    {item.title}
                  </h3>
                  <span className="px-2.5 py-1 rounded-full bg-[#FF6A00]/15 text-[#FF6A00] text-[10px] sm:text-xs font-mono font-bold shrink-0">
                    {item.pitch}
                  </span>
                </div>

                <p className="text-xs text-gray-300 font-sans leading-relaxed mb-3">
                  {item.desc}
                </p>

                <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-xs font-mono text-gray-300 border-t border-white/10 pt-3">
                  <div className="flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5 text-[#FFD700]" />
                    <span>{item.brightness}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#9CD248]" />
                    <span>{item.waterproof}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Action Button */}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => onOpenQuoteModal('outdoor-indoor-led-screen')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#FF6A00] hover:bg-[#e05d00] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>CALCULATE LED SCREEN PRICE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
