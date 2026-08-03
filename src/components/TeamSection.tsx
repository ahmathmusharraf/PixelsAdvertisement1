import React, { useState, useEffect } from 'react';
import { Linkedin, Users, Maximize2, X, Sparkles } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember, backendTeamImg } from '../data/pixelsData';

export type { TeamMember };
export { TEAM_MEMBERS };

interface GlossyModalItem {
  title: string;
  role: string;
  image: string;
  description?: string;
}

export const TeamSection: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<GlossyModalItem | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div id="team" className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-mono font-bold text-[#FF6A00] uppercase tracking-widest">
            MEET OUR TEAM
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
            The Experts Behind Pixels
          </h3>
        </div>
      </div>

      {/* Featured Back-End & Technical Operations Banner */}
      <div
        onClick={() =>
          setActiveModalItem({
            title: 'Back-End & Technical Operations Team',
            role: 'Fabrication, Engineering & LED Specialists',
            image: backendTeamImg,
            description:
              'Our dedicated back-end operations team handles precision metal fabrication, 3D acrylic assembly, Samsung LED module wiring, and large-format UV print production across the UAE.',
          })
        }
        className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#0A0A0E] group cursor-pointer transition-all duration-300 hover:border-[#FF6A00]/60 hover:shadow-[0_0_35px_rgba(255,106,0,0.2)]"
      >
        <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden">
          <img
            src={backendTeamImg}
            alt="Pixels Back-End & Production Operations Team"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          {/* Glossy sheen overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Expand Hint Icon */}
          <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white opacity-90 group-hover:opacity-100 group-hover:bg-[#FF6A00] group-hover:scale-110 transition-all shadow-lg flex items-center gap-1.5 text-xs font-semibold">
            <Maximize2 className="w-4 h-4" />
            <span className="hidden sm:inline">Click for Glossy View</span>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-5 sm:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6A00]/20 border border-[#FF6A00]/40 text-[#FF6A00] text-xs font-mono font-bold w-fit mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>BACK-END & TECHNICAL OPERATIONS TEAM</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-[#FF6A00] transition-colors">
              Fabrication, Engineering & LED Specialists
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mt-1">
              Our dedicated back-end operations team handles precision metal fabrication, 3D acrylic assembly, Samsung LED module wiring, and large-format UV print production across the UAE.
            </p>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
            className="group relative rounded-2xl bg-[#0D0D12] border border-white/10 hover:border-[#FF6A00]/50 p-3 transition-all duration-300 text-center cursor-pointer hover:shadow-[0_0_25px_rgba(255,106,0,0.15)]"
          >
            <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden mb-3 bg-[#181820]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Glossy overlay on card hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
                <div className="flex justify-end">
                  <span className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <a
                    href={member.socials?.linkedin || "#"}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 hover:bg-[#FF6A00] text-white transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <h4 className="text-sm font-bold text-white font-display group-hover:text-[#FF6A00] transition-colors">
              {member.name}
            </h4>
            <p className="text-[11px] text-gray-400 font-sans mt-0.5">
              {member.role}
            </p>
          </div>
        ))}
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
    </div>
  );
};

