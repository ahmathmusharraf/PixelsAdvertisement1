import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Printer,
  Zap,
  Car,
  Package,
} from 'lucide-react';
import { COMPANY_DETAILS, heroBg, signageImg, vehicleWrapImg, exhibitionImg } from '../data/pixelsData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [activeBgIndex, setActiveBgIndex] = useState(0);

  const heroVisuals = [
    { title: 'Vehicle Branding & Wraps', img: vehicleWrapImg, tag: 'RTA Compliant' },
    { title: '3D Illuminated LED Signage', img: signageImg, tag: 'Samsung IP67 LEDs' },
    { title: 'In-House Large Format Printing', img: heroBg, tag: '5m UV Printing Bay' },
    { title: 'Exhibition Stands & Booths', img: exhibitionImg, tag: 'Dubai Expo Ready' },
  ];

  return (
    <section id="hero" className="relative pt-16 pb-6 sm:pt-28 sm:pb-16 flex flex-col justify-center overflow-hidden bg-[#050505]">
      {/* Background Image Container with Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroVisuals[activeBgIndex].img}
          alt="Pixels Advertising Production"
          className="w-full h-full object-cover object-center opacity-25 transition-all duration-700 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient opacity-80" />
      </div>

      {/* Decorative Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6A00]/20 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6C5CE7]/20 rounded-full blur-[140px] pointer-events-none"
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1800px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-10 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-2.5 sm:space-y-5 text-left"
          >
            {/* Top Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Sparkles className="w-3 h-3 text-[#FF6A00]" />
              <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-widest text-gray-300">
                #1 LED SCREEN & SIGNAGE SPECIALIST IN UAE
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[24px] sm:text-5xl lg:text-7xl font-black text-white font-display tracking-tight leading-[1.1]"
            >
              OUTDOOR & INDOOR <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#FF6A00] via-[#FFD700] to-[#00F2FE] bg-clip-text text-transparent">
                LED SCREENS
              </span> <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-white drop-shadow-[0_0_25px_rgba(255,106,0,0.4)] mr-1.5">&</span> 
              <span>3D SIGNAGE</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[11px] sm:text-sm text-gray-300 max-w-xl font-sans leading-snug sm:leading-relaxed"
            >
              Pixels Advertising is UAE's premier specialist for high-definition Outdoor/Indoor LED Screens, 3D Signages, Sticker Branding, Neon Signs, Traffic Signs, Business Cards, Flyers, and Bill Books & Flags.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-2 pt-0.5"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenQuoteModal}
                className="px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-[#FF6A00] hover:bg-[#e05d00] text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#FF6A00]/30 flex items-center gap-1.5 cursor-pointer"
              >
                <span>GET FREE QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-white/5 hover:bg-white/15 text-white font-bold text-[11px] sm:text-xs tracking-wider transition-all border border-white/15 backdrop-blur-md flex items-center gap-1.5"
              >
                <span>EXPLORE SERVICES</span>
              </motion.a>
            </motion.div>

            {/* Stats Counter Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-2.5 sm:pt-6 border-t border-white/10 grid grid-cols-4 gap-1 sm:gap-4"
            >
              <div>
                <div className="text-base sm:text-2xl font-black text-white font-display">1000+</div>
                <div className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-wider font-mono">PROJECTS</div>
              </div>
              <div>
                <div className="text-base sm:text-2xl font-black text-white font-display">300+</div>
                <div className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-wider font-mono">CLIENTS</div>
              </div>
              <div>
                <div className="text-base sm:text-2xl font-black text-white font-display">10+</div>
                <div className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-wider font-mono">YEARS</div>
              </div>
              <div>
                <div className="text-base sm:text-2xl font-black text-white font-display">98%</div>
                <div className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-wider font-mono">SATISFIED</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Showcase - Compact height on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative mt-1 sm:mt-0"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass-card p-1.5 sm:p-3 border border-white/15 shadow-2xl">
              <div className="relative h-[160px] sm:h-[340px] lg:h-[420px] rounded-xl sm:rounded-2xl overflow-hidden bg-[#0A0A0E]">
                <img
                  src={signageImg}
                  alt="Pixels Outdoor & Indoor LED Screen Showcase"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Floating Badge 1: LED Displays */}
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-2 left-2 sm:top-4 sm:left-6 p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-black/85 backdrop-blur-md border border-[#FF6A00]/50 flex items-center gap-1.5 sm:gap-2.5 shadow-xl"
                >
                  <div className="w-2 h-2 rounded-full bg-[#FF6A00] animate-ping" />
                  <span className="text-[8px] sm:text-[11px] font-mono font-extrabold text-[#FF6A00] uppercase tracking-wider">
                    OUTDOOR & INDOOR LED SCREENS
                  </span>
                </motion.div>

                {/* Floating Badge 2: 3D Signage */}
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-2 right-2 sm:top-4 sm:right-6 p-1 sm:p-2.5 rounded-lg sm:rounded-xl bg-black/80 backdrop-blur-md border border-white/20 shadow-xl"
                >
                  <span className="text-[8px] sm:text-[11px] font-mono font-bold text-[#00F2FE] uppercase tracking-wider">
                    3D SIGNAGE
                  </span>
                </motion.div>

                {/* Floating Badge 3: Sticker Branding */}
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-1/2 right-2 -translate-y-1/2 p-1 sm:p-2.5 rounded-lg sm:rounded-xl bg-black/80 backdrop-blur-md border border-white/20 shadow-xl"
                >
                  <span className="text-[8px] sm:text-[11px] font-mono font-bold text-[#9CD248] uppercase tracking-wider">
                    STICKER BRANDING
                  </span>
                </motion.div>

                {/* Floating Badge 4: Printing & Machinery */}
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-2 right-2 sm:bottom-4 sm:right-6 p-1 sm:p-2.5 rounded-lg sm:rounded-xl bg-black/80 backdrop-blur-md border border-white/20 flex items-center gap-1.5 sm:gap-3 shadow-xl max-w-xs"
                >
                  <div className="w-7 h-5 sm:w-12 sm:h-8 rounded overflow-hidden shrink-0">
                    <img src={heroBg} alt="Printing & Paper" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[8px] sm:text-[10px] font-mono font-bold text-gray-200 uppercase tracking-wider">
                    PRINTING & PAPER
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-3 sm:mt-8 flex items-center justify-center gap-2 text-[8px] sm:text-[10px] font-mono text-gray-500 uppercase tracking-widest"
        >
          <div className="w-2.5 h-4 rounded-full border border-gray-600 flex items-start justify-center p-0.5">
            <div className="w-1 h-1 bg-[#FF6A00] rounded-full animate-bounce" />
          </div>
          <span>SCROLL</span>
        </motion.div>
      </div>
    </section>
  );
};

