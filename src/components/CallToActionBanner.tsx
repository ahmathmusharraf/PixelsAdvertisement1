import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CallToActionBannerProps {
  onOpenQuoteModal: () => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative py-6 sm:py-16 overflow-hidden bg-gradient-to-r from-[#0A0A0F] via-[#11111A] to-[#0A0A0F] border-y border-white/10">
      {/* Background glow and image texture */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80"
          alt="Pixels Workshop Production"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            Let's Build Your Brand Together
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-sans">
            We turn your ideas into powerful visual experiences
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenQuoteModal}
          className="px-8 py-4 rounded-full bg-[#FF6A00] hover:bg-[#e05d00] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#FF6A00]/30 flex items-center gap-2.5 shrink-0 cursor-pointer"
        >
          <span>GET FREE QUOTE</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </section>
  );
};

