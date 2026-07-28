import React from 'react';
import { Linkedin, Twitter, Instagram, ArrowRight, Users } from 'lucide-react';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Rizwan Farook',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    id: '2',
    name: 'Nishad Nizar',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    id: '3',
    name: 'Faisal Khan',
    role: 'Production Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    id: '4',
    name: 'Therindu Perera',
    role: 'Graphic Designer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
];

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

        <button className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6C5CE7] hover:bg-[#5a4bd1] text-white text-xs font-bold transition-all shadow-lg shadow-[#6C5CE7]/30">
          <span>VIEW ALL TEAM</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
                  <a href="#" className="p-1.5 rounded-full bg-white/20 hover:bg-[#FF6A00] text-white transition-colors">
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" className="p-1.5 rounded-full bg-white/20 hover:bg-[#FF6A00] text-white transition-colors">
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" className="p-1.5 rounded-full bg-white/20 hover:bg-[#FF6A00] text-white transition-colors">
                    <Instagram className="w-3.5 h-3.5" />
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

      <div className="sm:hidden text-center pt-2">
        <button className="px-6 py-2.5 rounded-full bg-[#6C5CE7] hover:bg-[#5a4bd1] text-white text-xs font-bold transition-all inline-flex items-center gap-2">
          <span>VIEW ALL TEAM</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
