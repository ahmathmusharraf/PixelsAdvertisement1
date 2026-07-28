import React from 'react';
import { Home, Layers, Briefcase, Info, Phone, MessageSquare, FileText } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/pixelsData';

interface MobileBottomNavProps {
  onOpenQuoteModal: () => void;
  activeSection?: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onOpenQuoteModal,
  activeSection = 'hero'
}) => {
  const navItems = [
    { id: 'hero', label: 'Home', icon: Home, href: '#hero' },
    { id: 'services', label: 'Services', icon: Layers, href: '#services' },
    { id: 'about', label: 'About', icon: Info, href: '#about' },
    { id: 'contact', label: 'Contact', icon: Phone, href: '#contact' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B0B0E]/95 backdrop-blur-xl border-t border-white/10 px-2 py-1.5 shadow-2xl">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
                isActive
                  ? 'text-[#FF6A00] bg-white/5 font-bold scale-105'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[9px] mt-0.5 tracking-tight font-medium">{item.label}</span>
            </a>
          );
        })}

        {/* Quick Quote Mobile Trigger */}
        <button
          onClick={onOpenQuoteModal}
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-white bg-[#FF6A00] font-bold shadow-md shadow-[#FF6A00]/30 active:scale-95 transition-all"
        >
          <FileText className="w-4 h-4" />
          <span className="text-[9px] mt-0.5 tracking-tight uppercase">Quote</span>
        </button>

        {/* WhatsApp Mobile Trigger */}
        <a
          href={COMPANY_DETAILS.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-black bg-[#25D366] font-bold active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4 fill-black" />
          <span className="text-[9px] mt-0.5 tracking-tight uppercase">Chat</span>
        </a>
      </div>
    </div>
  );
};
