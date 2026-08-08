import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Image as ImageIcon,
  Upload,
  X,
  Plus,
  Camera,
  Check,
} from 'lucide-react';
import {
  heroBg,
  signageImg,
  indoorLedScreenImg,
  curvedLedScreenImg,
  spaSignboardImg,
} from '../data/pixelsData';

interface LedScreenSpotlightProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

interface SampleItem {
  id: string;
  title: string;
  category: 'outdoor' | 'indoor';
  pitch: string;
  location: string;
  image: string;
  isCustom?: boolean;
}

export const LedScreenSpotlight: React.FC<LedScreenSpotlightProps> = ({ onOpenQuoteModal }) => {
  const [sampleModalType, setSampleModalType] = useState<'outdoor' | 'indoor' | null>(null);

  // Pre-populated default samples
  const [samples, setSamples] = useState<SampleItem[]>([
    {
      id: 'out-1',
      title: 'Outdoor Curved Facade P4 Commercial LED Display',
      category: 'outdoor',
      pitch: 'P4 Outdoor IP65',
      location: 'Commercial Building Facade, Dubai',
      image: curvedLedScreenImg,
    },
    {
      id: 'out-2',
      title: 'P6 Outdoor Illuminated Storefront LED Screen',
      category: 'outdoor',
      pitch: 'P6 High Brightness 6,500 Nits',
      location: 'Retail Store Entrance, Ajman',
      image: '/shop.jpg',
    },
    {
      id: 'out-3',
      title: 'Outdoor 3D Channel Letter Signboard with Samsung LEDs',
      category: 'outdoor',
      pitch: 'Samsung 1.2W LED Modules',
      location: 'Green Men Foot Spa, UAE',
      image: spaSignboardImg,
    },
    {
      id: 'in-1',
      title: 'P1.8 Ultra Fine Pitch Indoor Seamless Video Wall',
      category: 'indoor',
      pitch: 'P1.8 Fine Pitch 4K',
      location: 'Luxury Villa Lounge, Dubai',
      image: indoorLedScreenImg,
    },
    {
      id: 'in-2',
      title: 'Indoor P2.5 Commercial Lobby & Stage LED Display',
      category: 'indoor',
      pitch: 'P2.5 High Refresh 3840Hz',
      location: 'Corporate HQ Lobby, UAE',
      image: signageImg,
    },
    {
      id: 'in-3',
      title: 'P1.5 Exhibition Booth & Control Room LED Array',
      category: 'indoor',
      pitch: 'P1.5 Fanless Silent Cabinet',
      location: 'Exhibition Center, Abu Dhabi',
      image: heroBg,
    },
  ]);

  const [selectedSample, setSelectedSample] = useState<SampleItem | null>(null);

  const handleOpenSampleModal = (type: 'outdoor' | 'indoor') => {
    setSampleModalType(type);
    const categorySamples = samples.filter((s) => s.category === type);
    if (categorySamples.length > 0) {
      setSelectedSample(categorySamples[0]);
    }
  };

  const handleCustomUpload = (e: React.ChangeEvent<HTMLInputElement>, category: 'outdoor' | 'indoor') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const imageUrl = uploadEvent.target?.result as string;
        const newSample: SampleItem = {
          id: `custom-${Date.now()}`,
          title: `Custom Uploaded ${category === 'outdoor' ? 'Outdoor' : 'Indoor'} Sample`,
          category: category,
          pitch: 'Custom Sample Photo',
          location: 'Uploaded by Client',
          image: imageUrl,
          isCustom: true,
        };
        setSamples((prev) => [newSample, ...prev]);
        setSelectedSample(newSample);
      };
      reader.readAsDataURL(file);
    }
  };

  const ledHighlights = [
    {
      type: 'outdoor' as const,
      title: 'Outdoor HD LED Screens',
      pitch: 'P2.5 / P6 / P10',
      brightness: '6,500+ Nits Daylight Clear',
      waterproof: 'IP65 Weatherproof Sealed',
      desc: 'Engineered specifically for harsh Gulf climates with anti-glare high refresh rate panels, heat dissipation aluminum, and storm resistance.',
      btnText: 'View Outdoor LED Samples',
      btnColor: 'bg-[#FF6A00]/10 hover:bg-[#FF6A00] text-[#FF6A00] hover:text-white border-[#FF6A00]/30',
    },
    {
      type: 'indoor' as const,
      title: 'Indoor Fine-Pitch LED Video Walls',
      pitch: 'P1.5 / P1.8 / P2.5 / P3',
      brightness: '1,200 Nits High Contrast',
      waterproof: 'Seamless Bezel-Free Display',
      desc: 'Ultra-thin, silent fanless cabinets ideal for luxury retail receptions, control rooms, auditoriums, and exhibition booths.',
      btnText: 'View Indoor LED Samples',
      btnColor: 'bg-[#00F2FE]/10 hover:bg-[#00F2FE] text-[#00F2FE] hover:text-black border-[#00F2FE]/30',
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
            Illuminated Outdoor & Indoor <span className="bg-gradient-to-r from-[#FF6A00] via-[#FFD700] to-[#00F2FE] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,106,0,0.6)]">LED Screen & 3D Signage</span> Solutions
          </h2>

          <p className="text-xs sm:text-base text-gray-300 font-sans leading-relaxed">
            High-brightness illuminated LED video walls, 3D channel letters, programmable outdoor displays, and fine-pitch indoor screens with 3840Hz refresh rates and Samsung IP67 waterproof LED modules.
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          {/* Left Column: Visual Screen Preview */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass-card p-2 sm:p-4 border border-[#FF6A00]/30 shadow-[0_0_35px_rgba(255,106,0,0.2)]">
              <div className="relative h-[220px] sm:h-[380px] rounded-xl sm:rounded-2xl overflow-hidden bg-[#0A0A0E]">
                {/* Moving Storefront Image Animation */}
                <motion.img
                  src="/shop.jpg"
                  alt="Illuminated Outdoor Indoor LED Screen Display"
                  animate={{
                    scale: [1, 1.07, 1.02, 1.08, 1],
                    x: [0, 6, -6, 4, 0],
                    y: [0, -5, -2, -6, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Light Shimmer Sweep Effect */}
                <motion.div
                  animate={{
                    x: ['-130%', '230%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: 2.5,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none z-10"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none z-10" />

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

                {/* Button to view / upload LED samples */}
                <button
                  onClick={() => handleOpenSampleModal(item.type)}
                  className={`mt-4 w-full py-2.5 px-4 rounded-xl border font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${item.btnColor}`}
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>{item.btnText}</span>
                  <Camera className="w-3.5 h-3.5 opacity-80" />
                </button>
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

      {/* INTERACTIVE SAMPLE GALLERY & UPLOAD MODAL */}
      <AnimatePresence>
        {sampleModalType && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in"
            onClick={() => setSampleModalType(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-gradient-to-b from-[#161622] via-[#0D0D14] to-[#08080C] border border-white/20 shadow-[0_0_60px_rgba(255,106,0,0.25)] rounded-3xl p-4 sm:p-7 overflow-hidden text-white max-h-[92vh] flex flex-col justify-between"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 relative z-10 shrink-0">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-[#FF6A00]/20 border border-[#FF6A00]/40 text-[#FF6A00]">
                    <Tv className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-lg font-bold font-display uppercase tracking-wider text-white">
                      {sampleModalType === 'outdoor'
                        ? 'Outdoor HD LED Screen Samples'
                        : 'Indoor Fine-Pitch LED Video Wall Samples'}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-mono">
                      Browse fabricated LED screen installations
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSampleModalType(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-[#FF6A00] text-white transition-all hover:scale-110 border border-white/15 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Content Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 overflow-y-auto pr-1 my-2 shrink-1">
                {/* Left: Active Image Preview */}
                <div className="lg:col-span-8 flex flex-col justify-between bg-black/60 rounded-2xl border border-white/10 p-3 relative group overflow-hidden min-h-[260px] sm:min-h-[360px]">
                  {selectedSample ? (
                    <div className="relative w-full h-full min-h-[220px] sm:min-h-[300px] rounded-xl overflow-hidden flex items-center justify-center">
                      <img
                        src={selectedSample.image}
                        alt={selectedSample.title}
                        className="w-full h-full object-contain rounded-xl max-h-[50vh]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#9CD248] font-bold">
                        {selectedSample.pitch}
                      </div>

                      {selectedSample.isCustom && (
                        <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-[#FF6A00] text-white text-[10px] font-mono font-bold shadow-lg">
                          Client Custom Upload
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500 font-mono text-xs">
                      Select a sample below
                    </div>
                  )}

                  {/* Caption */}
                  {selectedSample && (
                    <div className="mt-3 p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-white font-display">
                          {selectedSample.title}
                        </div>
                        <div className="text-[10px] text-gray-400 font-mono">
                          {selectedSample.location}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setSampleModalType(null);
                          onOpenQuoteModal('outdoor-indoor-led-screen');
                        }}
                        className="px-3.5 py-2 rounded-xl bg-[#FF6A00] hover:bg-[#e05d00] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer"
                      >
                        Request Quote for This
                      </button>
                    </div>
                  )}
                </div>

                {/* Right: Gallery Thumbnails */}
                <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold font-mono text-gray-300 uppercase">
                        Sample Gallery ({samples.filter((s) => s.category === sampleModalType).length})
                      </span>
                    </div>

                    <div className="space-y-2 max-h-[320px] sm:max-h-[380px] overflow-y-auto pr-1">
                      {samples
                        .filter((s) => s.category === sampleModalType)
                        .map((s) => (
                          <div
                            key={s.id}
                            onClick={() => setSelectedSample(s)}
                            className={`p-2 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                              selectedSample?.id === s.id
                                ? 'bg-[#FF6A00]/20 border-[#FF6A00] shadow-[0_0_15px_rgba(255,106,0,0.3)]'
                                : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                            }`}
                          >
                            <img
                              src={s.image}
                              alt={s.title}
                              className="w-14 h-12 object-cover rounded-lg shrink-0 border border-white/10"
                              referrerPolicy="no-referrer"
                            />
                            <div className="overflow-hidden">
                              <div className="text-[11px] font-bold text-white truncate">
                                {s.title}
                              </div>
                              <div className="text-[9px] text-[#FF6A00] font-mono">
                                {s.pitch}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 shrink-0">
                <span className="font-mono text-[10px]">
                  PIXELS ADVERTISEMENT • UAE LED SCREEN MANUFACTURING
                </span>
                <button
                  onClick={() => setSampleModalType(null)}
                  className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

