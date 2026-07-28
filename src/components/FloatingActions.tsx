import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/pixelsData';

interface FloatingActionsProps {
  onOpenQuoteModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenQuoteModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-14 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Back to top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="p-2 sm:p-3 rounded-full bg-[#161616] hover:bg-[#222222] text-white border border-white/10 shadow-2xl transition-all hover:scale-110 active:scale-95"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6A00]" />
        </button>
      )}

      {/* Floating Quote Trigger (Desktop / Tablet) */}
      <button
        onClick={onOpenQuoteModal}
        className="hidden sm:flex px-4 py-3 rounded-full bg-[#FF6A00] hover:bg-[#e05d00] text-white font-extrabold text-xs uppercase tracking-wider shadow-2xl shadow-[#FF6A00]/40 items-center gap-2 hover:scale-105 transition-all border border-white/20"
      >
        <Send className="w-4 h-4" />
        <span>Quote</span>
      </button>

      {/* Floating WhatsApp Chat (Desktop / Tablet) */}
      <a
        href={COMPANY_DETAILS.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex p-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black shadow-2xl hover:scale-110 transition-all items-center gap-2 font-bold text-xs"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-black" />
      </a>
    </div>
  );
};
