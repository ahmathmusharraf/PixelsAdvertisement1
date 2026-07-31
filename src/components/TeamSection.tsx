import React from 'react';
import { Linkedin } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../data/pixelsData';

export type { TeamMember };
export { TEAM_MEMBERS };

export const TeamSection: React.FC = () => {
  return (
    <div id="team" className="space-y-6">
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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.id}
            className="group relative rounded-2xl bg-[#0D0D12] border border-white/10 hover:border-[#FF6A00]/50 p-3 transition-all duration-300 text-center"
          >
            <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden mb-3 bg-[#181820]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                <div className="flex items-center gap-2">
                  <a href={member.socials?.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/20 hover:bg-[#FF6A00] text-white transition-colors" title="LinkedIn">
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
    </div>
  );
};
