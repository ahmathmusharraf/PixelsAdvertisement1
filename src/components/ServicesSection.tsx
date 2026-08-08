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
  Tv,
  ShieldAlert,
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
      case 'Tv': return <Tv {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
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

  const categories = [
    'All',
    'LED Screens',
    '3D Signages',
    'Outdoor',
    'Indoor',
    'Sticker Branding',
    'Neon Signs',
    'Traffic Signs',
    'Printing & Paper',
  ];

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
            Click on any service card below to view full descriptions, technical specifications, materials, and request instant quotes.
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
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                key={service.id}
                onClick={() => setSelectedServiceDetail(service)}
                className="glass-card glass-card-hover rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-white/10 hover:border-[#FF6A00]/50 transition-all cursor-pointer flex flex-col justify-between relative group shadow-lg hover:shadow-[0_0_25px_rgba(255,106,0,0.15)]"
              >
                <div>
                  {/* Top Card Bar */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-1.5 sm:gap-3 mb-3">
                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#FF6A00]/10 text-[#FF6A00] border border-[#FF6A00]/20 group-hover:bg-[#FF6A00] group-hover:text-white transition-all shrink-0">
                      {getIcon(service.iconName)}
                    </div>

                    <div className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
                      {service.popular && (
                        <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#9CD248]/20 text-[#9CD248] text-[8px] sm:text-[10px] font-extrabold font-mono border border-[#9CD248]/30">
                          POPULAR
                        </span>
                      )}
                      <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded bg-white/5 text-gray-400 text-[8px] sm:text-[10px] font-mono border border-white/10 truncate max-w-[80px] sm:max-w-none">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Heading Only */}
                  <h3 className="text-xs sm:text-lg font-bold text-white font-display group-hover:text-[#FF6A00] transition-colors leading-snug my-1">
                    {service.title}
                  </h3>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between gap-1.5">
                  <span className="text-[10px] sm:text-xs text-gray-300 group-hover:text-[#FF6A00] font-semibold font-mono flex items-center gap-1 transition-colors">
                    <Info className="w-3.5 h-3.5 text-[#FF6A00]" />
                    <span>View Description</span>
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenQuoteModal(service.id);
                    }}
                    className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[#FF6A00]/10 hover:bg-[#FF6A00] text-[#FF6A00] hover:text-white border border-[#FF6A00]/30 font-bold text-[10px] sm:text-xs transition-all flex items-center gap-1 cursor-pointer shrink-0"
                    title="Get Instant Quote"
                  >
                    <Calculator className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="hidden sm:inline">Get Quote</span>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-[#111111] border border-white/10 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 shadow-2xl space-y-3 sm:space-y-5 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="flex items-center gap-2.5 sm:gap-3 pr-6">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#FF6A00]/20 text-[#FF6A00] shrink-0">
                  {getIcon(selectedServiceDetail.iconName)}
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#9CD248] uppercase tracking-wider block">
                    [{selectedServiceDetail.category}]
                  </span>
                  <h3 className="text-sm sm:text-2xl font-bold text-white font-display leading-tight">
                    {selectedServiceDetail.title}
                  </h3>
                </div>
              </div>

              <p className="text-[11px] sm:text-sm text-gray-300 font-sans leading-relaxed line-clamp-3 sm:line-clamp-none">
                {selectedServiceDetail.description}
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="p-2.5 sm:p-4 rounded-lg sm:rounded-xl bg-[#181818] border border-white/5 space-y-1.5 sm:space-y-2">
                  <h4 className="text-[10px] sm:text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
                    Technical Features
                  </h4>
                  <ul className="space-y-1">
                    {selectedServiceDetail.features.map((f, i) => (
                      <li key={i} className="text-[10px] sm:text-xs text-gray-300 flex items-center gap-1 sm:gap-1.5">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#9CD248] shrink-0" />
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedServiceDetail.materials && (
                  <div className="p-2.5 sm:p-4 rounded-lg sm:rounded-xl bg-[#181818] border border-white/5 space-y-1.5 sm:space-y-2">
                    <h4 className="text-[10px] sm:text-xs font-bold text-[#9CD248] uppercase tracking-wider">
                      Available Materials
                    </h4>
                    <ul className="space-y-1">
                      {selectedServiceDetail.materials.map((m, i) => (
                        <li key={i} className="text-[10px] sm:text-xs text-gray-300 flex items-center gap-1 sm:gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] shrink-0" />
                          <span className="truncate">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#161616] border border-white/10 flex items-center justify-between text-[10px] sm:text-xs">
                <span className="text-gray-400 flex items-center gap-1 sm:gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FF6A00]" /> Typical Turnaround:
                </span>
                <span className="text-white font-bold">{selectedServiceDetail.typicalTurnaround || '2-4 Days'}</span>
              </div>

              <div className="pt-1 flex gap-2 sm:gap-3">
                <button
                  onClick={() => {
                    const sId = selectedServiceDetail.id;
                    setSelectedServiceDetail(null);
                    onOpenQuoteModal(sId);
                  }}
                  className="w-full py-2.5 sm:py-3 bg-[#FF6A00] hover:bg-[#e05d00] text-white font-bold rounded-lg sm:rounded-xl text-[11px] sm:text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-1"
                >
                  Request Quote for {selectedServiceDetail.title}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

