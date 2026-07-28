import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers,
  MapPin,
  Calendar,
  CheckCircle2,
  ExternalLink,
  X,
  Calculator,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/pixelsData';

interface PortfolioSectionProps {
  onOpenQuoteModal: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItemModal, setActiveItemModal] = useState<PortfolioItem | null>(null);

  const categories = [
    'All',
    'Sign Board',
    'Vehicle Wrap',
    'Events',
    'Packaging',
    'Interior Branding',
    'Outdoor Advertising',
  ];

  const filteredItems = PORTFOLIO_ITEMS.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <section id="portfolio" className="py-6 sm:py-16 lg:py-24 bg-[#050505] relative overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF6A00]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1800px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-6 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            OUR PORTFOLIO
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Work That Speaks For Pixels
          </h2>

          <p className="text-gray-400 text-xs sm:text-sm font-sans">
            Explore recent 3D illuminated signboards, fleet vehicle wraps, exhibition stands, and corporate branding executed for leading UAE clients.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 sm:pb-4 mb-6 sm:mb-10 no-scrollbar">
          {[
            'ALL',
            'SIGNAGE',
            'PRINTING',
            'VEHICLE BRANDING',
            'LED DISPLAY',
            'EXHIBITIONS',
          ].map((cat) => {
            const isSelected = (selectedCategory === 'All' && cat === 'ALL') || selectedCategory === cat;
            return (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat === 'ALL' ? 'All' : cat)}
                className={`relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold transition-all whitespace-nowrap uppercase tracking-wider cursor-pointer ${
                  isSelected
                    ? 'bg-[#FF6A00] text-white shadow-lg shadow-[#FF6A00]/25'
                    : 'bg-[#111111] text-gray-400 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </motion.button>
            );
          })}
        </div>

        {/* Portfolio Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 2xl:gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setActiveItemModal(item)}
                className="group cursor-pointer rounded-xl sm:rounded-2xl glass-card overflow-hidden border border-white/10 hover:border-[#FF6A00]/50 transition-all duration-300 transform hover:-translate-y-2 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Image Box */}
                  <div className="relative h-44 sm:h-64 overflow-hidden bg-[#181818]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Overlaid Category & Year Tag */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#9CD248] text-xs font-mono font-bold border border-[#9CD248]/30">
                        {item.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-gray-300 text-[10px] font-mono">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#FF6A00] font-semibold">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </div>

                    <h3 className="text-xl font-bold text-white font-display group-hover:text-[#FF6A00] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-400 font-sans line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-gray-300 font-mono border border-white/10"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-gray-300 group-hover:text-[#FF6A00] transition-colors">
                  <span>View Full Case Study</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Action Button */}
        <div className="mt-10 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenQuoteModal}
            className="px-8 py-3 rounded-full bg-[#0084FF] hover:bg-[#0070D6] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#0084FF]/25 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Case Study Lightbox Modal */}
      <AnimatePresence>
        {activeItemModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveItemModal(null)}
                className="absolute top-4 right-4 z-20 p-2 text-gray-400 hover:text-white rounded-full bg-black/60 hover:bg-black/90 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Image Header */}
              <div className="relative h-80 bg-[#181818]">
                <img
                  src={activeItemModal.image}
                  alt={activeItemModal.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/40" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-[#FF6A00] text-white text-xs font-mono font-bold uppercase tracking-wider">
                    {activeItemModal.category} • Case Study
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mt-2">
                    {activeItemModal.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#181818] border border-white/5 text-xs">
                  <div>
                    <div className="text-gray-400">Client Partner</div>
                    <div className="text-white font-bold mt-0.5">{activeItemModal.client}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Location</div>
                    <div className="text-[#FF6A00] font-bold mt-0.5">{activeItemModal.location}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Year Completed</div>
                    <div className="text-[#9CD248] font-mono font-bold mt-0.5">{activeItemModal.year}</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm text-gray-300 font-sans leading-relaxed">
                    {activeItemModal.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#FF6A00] uppercase tracking-wider mb-3">
                    Scope of Work Executed
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeItemModal.scope.map((s, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-[#9CD248] shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-gray-400">
                    Interested in a similar solution for your brand in UAE?
                  </div>

                  <button
                    onClick={() => {
                      setActiveItemModal(null);
                      onOpenQuoteModal();
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-[#FF6A00] hover:bg-[#e05d00] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Calculator className="w-4 h-4" />
                    Request Similar Project Estimate
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

