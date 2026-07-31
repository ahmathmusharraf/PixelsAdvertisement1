import React from 'react';
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
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/pixelsData';

export const WhyChooseUs: React.FC = () => {
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
                  className="group relative rounded-xl sm:rounded-2xl bg-[#0D0D12] border border-white/10 hover:border-[#FF6A00]/50 p-2 sm:p-3 transition-all duration-300 text-center"
                >
                  <div className="relative h-32 sm:h-44 rounded-lg sm:rounded-xl overflow-hidden mb-2 bg-[#181820]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                      <div className="flex items-center gap-2">
                        <a href={member.socials?.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-white/20 hover:bg-[#FF6A00] text-white transition-colors" title="LinkedIn">
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
    </section>
  );
};
