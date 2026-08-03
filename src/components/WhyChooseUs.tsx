import React, { useState, useEffect } from 'react';
import {
  Award,
  Cpu,
  Users,
  Clock,
  BadgePercent,
  CheckCircle2,
  Headphones,
  ShieldCheck,
  Linkedin,
  Maximize2,
  X,
  Sparkles,
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/pixelsData';

export const WhyChooseUs: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<{
    title: string;
    role: string;
    image: string;
    description?: string;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  const whyChooseFeatures = [
    { title: 'Premium Quality', desc: 'Top-notch materials & perfect finishing', icon: Award },
    { title: 'Latest Technology', desc: 'Advanced machines and modern tools', icon: Cpu },
    { title: 'Professional Team', desc: 'Skilled experts with years of experience', icon: Users },
    { title: 'Quick Delivery', desc: 'On-time delivery guaranteed', icon: Clock },
    { title: 'Affordable Pricing', desc: 'Best quality at competitive prices', icon: BadgePercent },
    { title: 'Customer Satisfaction', desc: 'We ensure 100% client satisfaction', icon: CheckCircle2 },
    { title: '24/7 Support', desc: 'Always here to support our clients', icon: Headphones },
    { title: 'End to End Solution', desc: 'From design to installation & support', icon: ShieldCheck },
  ];

  return (
    <section id="why-us" className="py-6 sm:py-16 lg:py-20 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1800px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-12 items-start">
          
          {/* Left Column: WHY CHOOSE US */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div>
              <div className="text-[10px] sm:text-[11px] font-mono font-bold text-[#FF6A00] uppercase tracking-widest">
                WHY CHOOSE US
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display mt-1">
                We Deliver More Than Just Advertising
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {whyChooseFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#0D0D12] border border-white/10 hover:border-[#FF6A00]/40 transition-all flex items-center gap-2.5 sm:gap-3 group"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FF6A00]/10 text-[#FF6A00] flex items-center justify-center shrink-0 group-hover:bg-[#FF6A00] group-hover:text-white transition-colors">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] sm:text-xs font-bold text-white group-hover:text-[#FF6A00] transition-colors leading-tight">
                        {item.title}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-gray-400 font-sans mt-0.5 leading-tight">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: MEET OUR TEAM */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] sm:text-[11px] font-mono font-bold text-[#FF6A00] uppercase tracking-widest">
                  MEET OUR TEAM
                </div>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display mt-1">
                  The Experts Behind Pixels
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.id}
                  onClick={() =>
                    setActiveModalItem({
                      title: member.name,
                      role: member.role,
                      image: member.image,
                      description: `Team Member at Pixels Advertisement - ${member.role}`,
                    })
                  }
                  className="group relative rounded-xl sm:rounded-2xl bg-[#0D0D12] border border-white/10 hover:border-[#FF6A00]/50 p-2 sm:p-3 transition-all duration-300 text-center cursor-pointer hover:shadow-[0_0_20px_rgba(255,106,0,0.15)]"
                >
                  <div className="relative h-32 sm:h-44 rounded-lg sm:rounded-xl overflow-hidden mb-2 bg-[#181820]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2 sm:p-3">
                      <div className="flex justify-end">
                        <span className="p-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                          <Maximize2 className="w-3 h-3" />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <a
                          href={member.socials?.linkedin || "#"}
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-full bg-white/20 hover:bg-[#FF6A00] text-white transition-colors"
                          title="LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-white font-display group-hover:text-[#FF6A00] transition-colors leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-[10px] text-gray-400 font-sans mt-0.5 leading-tight">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Glossy Full-Screen Image Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-gradient-to-b from-white/15 via-white/5 to-black/90 backdrop-blur-2xl border border-white/25 shadow-[0_0_60px_rgba(255,106,0,0.25)] rounded-3xl p-4 sm:p-7 overflow-hidden text-white transition-all duration-300 animate-scale-up"
          >
            {/* Top Glossy Reflection Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none rounded-3xl" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent" />

            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-[#FF6A00]/20 border border-[#FF6A00]/40 text-[#FF6A00]">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span className="text-xs font-mono font-bold tracking-widest text-gray-300 uppercase">
                  PIXELS TEAM PREVIEW
                </span>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-[#FF6A00] text-white transition-all hover:scale-110 border border-white/15"
                title="Close (ESC)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Glossy Image Container */}
            <div className="relative rounded-2xl overflow-hidden bg-black/60 border border-white/15 shadow-2xl flex items-center justify-center group mb-4 max-h-[65vh]">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full max-h-[65vh] object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
              {/* Glossy Glare Filter Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-mono text-[#9CD248] font-bold">
                HIGH RESOLUTION
              </div>
            </div>

            {/* Footer Information */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 relative z-10">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {activeModalItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#FF6A00] font-medium mt-0.5">
                  {activeModalItem.role}
                </p>
                {activeModalItem.description && (
                  <p className="text-xs text-gray-300 max-w-xl mt-1 line-clamp-2">
                    {activeModalItem.description}
                  </p>
                )}
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2.5 rounded-xl bg-[#FF6A00] hover:bg-[#e05d00] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#FF6A00]/30 shrink-0 self-end sm:self-auto"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
