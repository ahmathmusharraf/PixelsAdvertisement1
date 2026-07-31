import React, { useState } from 'react';
import { Monitor, Smartphone, Tablet, Laptop, Maximize2, Sparkles, Check, Globe } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/pixelsData';

interface DevicePresentationModeProps {
  children: React.ReactNode;
  isPresentationMode: boolean;
  onToggleMode: (val: boolean) => void;
}

export const DevicePresentationMode: React.FC<DevicePresentationModeProps> = ({
  children,
  isPresentationMode,
  onToggleMode,
}) => {
  const [selectedDevice, setSelectedDevice] = useState<'desktop' | 'laptop' | 'tablet' | 'mobile'>('desktop');

  if (!isPresentationMode) {
    return <>{children}</>;
  }

  const deviceWidths = {
    desktop: 'w-full max-w-[1440px]',
    laptop: 'w-[1024px]',
    tablet: 'w-[768px]',
    mobile: 'w-[390px]',
  };

  const deviceHeights = {
    desktop: 'h-[85vh]',
    laptop: 'h-[80vh]',
    tablet: 'h-[75vh]',
    mobile: 'h-[700px]',
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center justify-between p-4 md:p-8 bg-radial-gradient">
      {/* Top Presentation Bar */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 py-4 px-6 rounded-2xl glass-card border border-white/10 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#FF6A00] animate-ping" />
          <div>
            <h2 className="text-sm font-bold text-white font-display flex items-center gap-2">
              PIXELS ADVERTISEMENT <span className="text-[#FF6A00] text-xs font-mono">[AWWWARDS AGENCY PRESENTATION]</span>
            </h2>
            <p className="text-[11px] text-gray-400">
              Interactive Multi-Device Concept Pitch Mode (Desktop 1920px • Laptop • Tablet • Mobile)
            </p>
          </div>
        </div>

        {/* Device Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-[#0A0A0A] rounded-xl border border-white/10">
          <button
            onClick={() => setSelectedDevice('desktop')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedDevice === 'desktop'
                ? 'bg-[#FF6A00] text-white shadow-lg shadow-[#FF6A00]/20'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            Desktop 1920px
          </button>

          <button
            onClick={() => setSelectedDevice('laptop')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedDevice === 'laptop'
                ? 'bg-[#FF6A00] text-white shadow-lg shadow-[#FF6A00]/20'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            Laptop
          </button>

          <button
            onClick={() => setSelectedDevice('tablet')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedDevice === 'tablet'
                ? 'bg-[#FF6A00] text-white shadow-lg shadow-[#FF6A00]/20'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            Tablet
          </button>

          <button
            onClick={() => setSelectedDevice('mobile')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedDevice === 'mobile'
                ? 'bg-[#FF6A00] text-white shadow-lg shadow-[#FF6A00]/20'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            Mobile
          </button>
        </div>

        {/* Exit Presentation Mode */}
        <button
          onClick={() => onToggleMode(false)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          Exit Pitch Mode
        </button>
      </div>

      {/* Device Mockup Frame */}
      <div className="w-full flex items-center justify-center my-auto py-4">
        <div
          className={`relative transition-all duration-500 ease-out mx-auto ${deviceWidths[selectedDevice]}`}
        >
          {/* Browser / Device Chrome Header */}
          <div className="bg-[#18181b] rounded-t-2xl px-4 py-3 border-t border-x border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>

            {/* URL Bar */}
            <div className="flex items-center gap-2 px-4 py-1 rounded-lg bg-[#09090b] text-[11px] font-mono text-gray-300 border border-white/5 w-1/2 max-w-md justify-center">
              <Globe className="w-3 h-3 text-[#9CD248]" />
              <span className="text-gray-400">https://</span>
              <span className="text-white font-semibold">{COMPANY_DETAILS.website}</span>
            </div>

            <div className="text-[10px] text-gray-400 font-mono">
              {selectedDevice.toUpperCase()} VIEWPORT
            </div>
          </div>

          {/* Device Screen Frame with Scrolling Container */}
          <div
            className={`relative bg-[#050505] border-b border-x border-white/10 rounded-b-2xl overflow-y-auto shadow-2xl transition-all duration-300 ${deviceHeights[selectedDevice]}`}
          >
            {children}
          </div>
        </div>
      </div>

      {/* Footer Info in Pitch Mode */}
      <div className="w-full max-w-7xl flex items-center justify-between text-xs text-gray-400 py-3 px-6 border-t border-white/10 mt-6">
        <span>PIXELS ADVERTISEMENT • UAE Creative Agency Pitch Concept</span>
        <span className="text-[#9CD248] font-mono">Awwwards Excellence Standard • 2026 Edition</span>
      </div>
    </div>
  );
};
