import React from 'react';
import {
  Utensils,
  ShoppingBag,
  Building2,
  Hospital,
  Home,
  GraduationCap,
  Car,
  Hotel,
  Landmark,
  CheckCircle2,
} from 'lucide-react';
import { INDUSTRIES_SERVED } from '../data/pixelsData';

export const IndustriesSection: React.FC = () => {
  const getIndustryIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'Utensils': return <Utensils {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Hospital': return <Hospital {...props} />;
      case 'Home': return <Home {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Car': return <Car {...props} />;
      case 'Hotel': return <Hotel {...props} />;
      case 'Landmark': return <Landmark {...props} />;
      default: return <Building2 {...props} />;
    }
  };

  return (
    <section className="py-6 sm:py-16 lg:py-24 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1800px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-4 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#9CD248]/10 border border-[#9CD248]/20 text-[#9CD248] text-[10px] sm:text-xs font-bold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" />
            Sectors & Industries
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Tailored Advertising For <span className="text-gradient-brand">Every Industry</span>
          </h2>

          <p className="text-gray-400 text-xs sm:text-sm font-sans">
            We deliver specialized materials and regulatory-compliant signage customized for restaurants, retail chains, hospitals, corporate hubs, and government institutions across the UAE.
          </p>
        </div>

        {/* 9 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {INDUSTRIES_SERVED.map((ind, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 hover:border-[#FF6A00]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/10 text-[#FF6A00] border border-[#FF6A00]/20 flex items-center justify-center mb-4 group-hover:bg-[#FF6A00] group-hover:text-white transition-colors">
                  {getIndustryIcon(ind.icon)}
                </div>

                <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-[#FF6A00] transition-colors">
                  {ind.name}
                </h3>

                <p className="text-xs text-gray-400 font-sans leading-relaxed mb-4">
                  {ind.description}
                </p>

                {/* Solutions List */}
                <div className="space-y-1.5 pt-3 border-t border-white/5">
                  {ind.solutions.map((s, i) => (
                    <div key={i} className="text-[11px] text-gray-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#9CD248]" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
