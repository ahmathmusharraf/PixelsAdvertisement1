import React from 'react';
import { motion } from 'motion/react';

interface SectionTransitionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  showDivider?: boolean;
  glowColor?: 'orange' | 'cyan' | 'green' | 'mixed';
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  id,
  className = '',
  showDivider = true,
  glowColor = 'orange',
}) => {
  const glowGradients = {
    orange: 'from-transparent via-[#FF6A00]/40 to-transparent',
    cyan: 'from-transparent via-[#00F2FE]/40 to-transparent',
    green: 'from-transparent via-[#9CD248]/40 to-transparent',
    mixed: 'from-[#FF6A00]/30 via-[#FFD700]/30 to-[#00F2FE]/30',
  };

  const bgGlows = {
    orange: 'rgba(255,106,0,0.06)',
    cyan: 'rgba(0,242,254,0.05)',
    green: 'rgba(156,210,72,0.05)',
    mixed: 'rgba(255,215,0,0.05)',
  };

  return (
    <section id={id} className={`relative ${className}`}>
      {/* Decorative Transition Divider Line */}
      {showDivider && (
        <div className="relative w-full h-[1px] my-0 overflow-hidden pointer-events-none z-20">
          <div className={`w-full h-full bg-gradient-to-r ${glowGradients[glowColor]}`} />
          {/* Animated Moving Light Pulse Dot across the section border */}
          <motion.div
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-0 left-0 w-1/4 h-[2px] bg-white blur-[1px] shadow-[0_0_10px_#FF6A00]"
          />
        </div>
      )}

      {/* Atmospheric Ambient Background Transition Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 blur-3xl pointer-events-none z-0 opacity-40 transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse at top, ${bgGlows[glowColor]}, transparent 70%)`,
        }}
      />

      {/* Motion Scroll Reveal Container */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{
          duration: 0.7,
          ease: [0.215, 0.61, 0.355, 1],
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};
