import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Printer,
  LayoutGrid,
  Zap,
  Car,
  Box,
  Layers,
  Scroll,
  CreditCard,
  FileText,
  BookOpen,
  Sliders,
  Monitor,
  Gift,
  Briefcase,
  Palette,
  Figma,
  Share2,
  Globe,
  Sparkles,
  Home,
  Image,
  Maximize2,
  Scissors,
  Cpu,
  Sun,
  Package,
  Search,
  ArrowRight,
  Clock,
  CheckCircle2,
  Info,
  X,
  Calculator,
} from 'lucide-react';
import { SERVICES_LIST, ServiceItem } from '../data/pixelsData';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  // Icon Resolver
  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'Printer': return <Printer {...props} />;
      case 'LayoutGrid': return <LayoutGrid {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Car': return <Car {...props} />;
      case 'Box': return <Box {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Scroll': return <Scroll {...props} />;
      case 'CreditCard': return <CreditCard {...props} />;
      case 'FileText': return <FileText {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      case 'Sliders': return <Sliders {...props} />;
      case 'Monitor': return <Monitor {...props} />;
      case 'Gift': return <Gift {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Figma': return <Figma {...props} />;
      case 'Share2': return <Share2 {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Home': return <Home {...props} />;
      case 'Image': return <Image {...props} />;
      case 'Maximize2': return <Maximize2 {...props} />;
      case 'Scissors': return <Scissors {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Sun': return <Sun {...props} />;
      case 'Package': return <Package {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const categories = ['All', 'Signage', 'Printing', 'Vehicle', 'Branding', 'Exhibition', 'Digital'];

  const filteredServices = SERVICES_LIST.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (service.materials && service.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-6 sm:py-16 lg:py-24 bg-[#080808] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FF6A00]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#9CD248]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1800px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-4 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] text-[9px] sm:text-[11px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            OUR SERVICES
          </div>

          <h2 className="text-lg sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-snug">
            Complete Advertising & Branding Solutions
          </h2>

          <p className="text-gray-400 text-[11px] sm:text-sm font-sans">
            From 3D illuminated building signboards and vehicle wrapping to exhibition stands and offset printing, our in-house Ajman facility handles every scale of advertising.
          </p>
        </motion.div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-10 pb-4 sm:pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#FF6A00] text-white shadow-lg shadow-[#FF6A00]/20'
                    : 'bg-[#141414] text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                {cat === 'All' ? 'All Services (26)' : cat}
              </motion.button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search services or materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#141414] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A00]"
            />
          </div>
        </div>

        {/* Services Grid with motion layout (2 columns on mobile) */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2.5 sm:gap-6 2xl:gap-8">
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                key={service.id}
                className="glass-card glass-card-hover rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/10 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Top Card Bar */}
                  <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-1.5 sm:gap-3 mb-2.5 sm:mb-4">
                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#FF6A00]/10 text-[#FF6A00] border border-[#FF6A00]/20 group-hover:bg-[#FF6A00] group-hover:text-white transition-colors shrink-0">
                      {getIcon(service.iconName)}
                    </div>

                    <div className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
                      {service.popular && (
                        <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#9CD248]/20 text-[#9CD248] text-[8px] sm:text-[10px] font-extrabold font-mono border border-[#9CD248]/30">
                          POPULAR
                        </span>
                      )}
                      <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded bg-white/5 text-gray-400 text-[8px] sm:text-[10px] font-mono border border-white/10 truncate max-w-[70px] sm:max-w-none">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xs sm:text-xl font-bold text-white font-display mb-1 sm:mb-2 group-hover:text-[#FF6A00] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-[10px] sm:text-xs text-gray-400 line-clamp-2 sm:line-clamp-3 mb-2.5 sm:mb-4 font-sans leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-6">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="text-[9px] sm:text-[11px] text-gray-300 flex items-center gap-1 sm:gap-2">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#9CD248] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-2.5 sm:pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-1.5 sm:gap-2">
                  <button
                    onClick={() => setSelectedServiceDetail(service)}
                    className="text-[10px] sm:text-xs text-gray-400 hover:text-white font-semibold flex items-center justify-center sm:justify-start gap-1 transition-colors cursor-pointer py-0.5"
                  >
                    <Info className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF6A00]" />
                    Specs
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(service.id)}
                    className="px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-[#FF6A00]/10 hover:bg-[#FF6A00] text-[#FF6A00] hover:text-white border border-[#FF6A00]/30 font-bold text-[10px] sm:text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Calculator className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    Get Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result Fallback */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-[#111111] rounded-2xl border border-white/10">
            <Info className="w-10 h-10 text-gray-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No services found matching "{searchQuery}"</h3>
            <p className="text-xs text-gray-400 mt-1">Try clearing your search query or switching categories.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#FF6A00] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Service Detail Spec Modal */}
      <AnimatePresence>
        {selectedServiceDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-[#111111] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-6"
            >
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#FF6A00]/20 text-[#FF6A00]">
                  {getIcon(selectedServiceDetail.iconName)}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#9CD248] uppercase tracking-wider">
                    [{selectedServiceDetail.category}]
                  </span>
                  <h3 className="text-2xl font-bold text-white font-display">
                    {selectedServiceDetail.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-300 font-sans leading-relaxed">
                {selectedServiceDetail.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#181818] border border-white/5 space-y-2">
                  <h4 className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
                    Technical Features
                  </h4>
                  <ul className="space-y-1">
                    {selectedServiceDetail.features.map((f, i) => (
                      <li key={i} className="text-xs text-gray-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#9CD248]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedServiceDetail.materials && (
                  <div className="p-4 rounded-xl bg-[#181818] border border-white/5 space-y-2">
                    <h4 className="text-xs font-bold text-[#9CD248] uppercase tracking-wider">
                      Available Materials
                    </h4>
                    <ul className="space-y-1">
                      {selectedServiceDetail.materials.map((m, i) => (
                        <li key={i} className="text-xs text-gray-300 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="p-3 rounded-xl bg-[#161616] border border-white/10 flex items-center justify-between text-xs">
                <span className="text-gray-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#FF6A00]" /> Typical Turnaround:
                </span>
                <span className="text-white font-bold">{selectedServiceDetail.typicalTurnaround || '2-4 Days'}</span>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    const sId = selectedServiceDetail.id;
                    setSelectedServiceDetail(null);
                    onOpenQuoteModal(sId);
                  }}
                  className="w-full py-3 bg-[#FF6A00] hover:bg-[#e05d00] text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg"
                >
                  Request Custom Quote for {selectedServiceDetail.title}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

