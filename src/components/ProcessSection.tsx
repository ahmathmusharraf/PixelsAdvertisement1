import React from 'react';
import { motion } from 'motion/react';
import {
  MessageSquare,
  PenTool,
  Cpu,
  Wrench,
  ShieldCheck,
  ArrowDown,
  Sparkles,
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/pixelsData';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    const props = { className: 'w-4 h-4 sm:w-6 sm:h-6' };
    switch (index) {
      case 0: return <MessageSquare {...props} />;
      case 1: return <PenTool {...props} />;
      case 2: return <Cpu {...props} />;
      case 3: return <Wrench {...props} />;
      case 4: return <ShieldCheck {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="process" className="py-6 sm:py-16 lg:py-24 bg-[#080808] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#9CD248]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1800px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-6 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            OUR PROCESS
          </div>

          <h2 className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-snug">
            From Concept To Creation
          </h2>

          <p className="text-gray-400 text-xs sm:text-sm font-sans">
            A seamless, transparent 5-step workflow engineered to deliver precision, speed, and flawless quality for every project across the UAE.
          </p>
        </motion.div>

        {/* Timeline Grid / Row (2 columns on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 sm:gap-6 relative">
          {/* Background Connecting Line for Desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-[#FF6A00] via-[#9CD248] to-[#FF6A00] opacity-50 z-0 origin-left"
          />

          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative z-10 glass-card glass-card-hover rounded-xl sm:rounded-2xl p-3.5 sm:p-6 border border-white/10 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Step Circle Header */}
                <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#141414] border border-[#FF6A00]/40 text-[#FF6A00] flex items-center justify-center font-mono font-black text-sm sm:text-lg mb-3 sm:mb-6 group-hover:bg-[#FF6A00] group-hover:text-white transition-all shadow-xl">
                  {step.step}
                </div>

                <h3 className="text-xs sm:text-lg font-bold text-white font-display mb-1.5 sm:mb-3 group-hover:text-[#FF6A00] transition-colors leading-snug">
                  {step.title}
                </h3>

                <p className="text-[10px] sm:text-xs text-gray-400 font-sans leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {step.description}
                </p>
              </div>

              {/* Step Icon Accent */}
              <div className="mt-3 sm:mt-6 pt-2.5 sm:pt-4 border-t border-white/5 flex items-center justify-between text-gray-500 group-hover:text-[#9CD248] transition-colors">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider">PHASE 0{idx + 1}</span>
                {getStepIcon(idx)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

