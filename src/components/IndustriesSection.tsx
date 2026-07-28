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
    const props = { className: 'w-4 h-4 sm:w-6 sm:h-6' };
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

          <h2 className="text-lg sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-snug">
            Tailored Advertising For <span className="text-gradient-brand">Every Industry</span>
          </h2>

          <p className="text-gray-400 text-xs sm:text-sm font-sans">
            We deliver specialized materials and regulatory-compliant signage customized for restaurants, retail chains, hospitals, corporate hubs, and government institutions across the UAE.
          </p>
        </div>

        {/* 9 Industry Cards (2 columns on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-6">
          {INDUSTRIES_SERVED.map((ind, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-xl sm:rounded-2xl p-3.5 sm:p-6 border border-white/10 hover:border-[#FF6A00]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#FF6A00]/10 text-[#FF6A00] border border-[#FF6A00]/20 flex items-center justify-center mb-2.5 sm:mb-4 group-hover:bg-[#FF6A00] group-hover:text-white transition-colors">
                  {getIndustryIcon(ind.icon)}
                </div>

                <h3 className="text-xs sm:text-xl font-bold text-white font-display mb-1 sm:mb-2 group-hover:text-[#FF6A00] transition-colors leading-snug">
                  {ind.name}
                </h3>

                <p className="text-[10px] sm:text-xs text-gray-400 font-sans leading-relaxed mb-2.5 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                  {ind.description}
                </p>

                {/* Solutions List */}
                <div className="space-y-1 sm:space-y-1.5 pt-2 sm:pt-3 border-t border-white/5">
                  {ind.solutions.slice(0, 3).map((s, i) => (
                    <div key={i} className="text-[9px] sm:text-[11px] text-gray-300 flex items-center gap-1 sm:gap-1.5 truncate">
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#9CD248] shrink-0" />
                      <span className="truncate">{s}</span>
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
