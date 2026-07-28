import React, { useState } from 'react';
import {
  X,
  FileText,
  MessageSquare,
  CheckCircle2,
  Building,
  Clock,
  Upload,
} from 'lucide-react';
import { SERVICES_LIST, COMPANY_DETAILS } from '../data/pixelsData';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
}) => {
  if (!isOpen) return null;

  // Form State
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedServiceId || SERVICES_LIST[0].id
  );
  const [width, setWidth] = useState<number>(2);
  const [height, setHeight] = useState<number>(1);
  const [quantity, setQuantity] = useState<number>(1);
  const [materialGrade, setMaterialGrade] = useState<'standard' | 'premium' | 'luxury'>('premium');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);

  const selectedService = SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];

  const areaSqM = Math.max(0.1, width * height);
  const estimatedDays = selectedService.typicalTurnaround || '3 - 5 Days';

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleWhatsAppSend = () => {
    const text = `*NEW QUOTE INQUIRY - PIXELS ADVERTISEMENT*\n\n` +
      `*Service:* ${selectedService.title}\n` +
      `*Dimensions:* ${width}m x ${height}m (${areaSqM.toFixed(2)} sq.m)\n` +
      `*Quantity:* ${quantity} unit(s)\n` +
      `*Material Grade:* ${materialGrade.toUpperCase()}\n` +
      `*Client Name:* ${clientName || 'Not specified'}\n` +
      `*Phone:* ${clientPhone || 'Not specified'}\n` +
      `*Notes:* ${projectNotes || 'None'}\n\n` +
      `Requested from pixelsadvertisement.ae website`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#111111] border border-white/10 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-3 py-2.5 sm:px-6 sm:py-4 border-b border-white/10 bg-[#161616] shrink-0">
          <div className="flex items-center space-x-2.5 sm:space-x-3">
            <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#FF6A00]/10 text-[#FF6A00] border border-[#FF6A00]/20">
              <FileText className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-xs sm:text-xl font-bold text-white font-display flex items-center gap-1.5">
                Request Free Quote & Project Inquiry
              </h3>
              <p className="text-[9px] sm:text-xs text-gray-400 hidden sm:block">
                Specify your project dimensions, materials, and artwork specs for Pixels Advertising UAE
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-3 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 overflow-y-auto">
            {/* Form Column */}
            <div className="lg:col-span-7 space-y-2.5 sm:space-y-4">
              {/* Select Service */}
              <div>
                <label className="block text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Select Advertising Service
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full bg-[#181818] border border-white/10 rounded-lg sm:rounded-xl px-2.5 py-1.5 text-white focus:outline-none focus:border-[#FF6A00] text-xs sm:text-sm"
                >
                  {SERVICES_LIST.map((service) => (
                    <option key={service.id} value={service.id}>
                      [{service.category}] {service.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dimensions & Quantity */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-semibold text-gray-300 mb-0.5">
                    Width (m)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.1"
                    value={width}
                    onChange={(e) => setWidth(parseFloat(e.target.value) || 0.1)}
                    className="w-full bg-[#181818] border border-white/10 rounded-lg sm:rounded-xl px-2 py-1 sm:px-3 sm:py-2 text-white text-xs sm:text-sm focus:border-[#FF6A00]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-semibold text-gray-300 mb-0.5">
                    Height (m)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.1"
                    value={height}
                    onChange={(e) => setHeight(parseFloat(e.target.value) || 0.1)}
                    className="w-full bg-[#181818] border border-white/10 rounded-lg sm:rounded-xl px-2 py-1 sm:px-3 sm:py-2 text-white text-xs sm:text-sm focus:border-[#FF6A00]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-semibold text-gray-300 mb-0.5">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-full bg-[#181818] border border-white/10 rounded-lg sm:rounded-xl px-2 py-1 sm:px-3 sm:py-2 text-white text-xs sm:text-sm focus:border-[#FF6A00]"
                  />
                </div>
              </div>

              {/* Material Grade */}
              <div>
                <label className="block text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Material & Finishing Spec
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { key: 'standard', label: 'Standard', desc: '1 Yr Wnty' },
                    { key: 'premium', label: 'Premium', desc: '3 Yr Wnty' },
                    { key: 'luxury', label: 'Ultra Luxury', desc: '5 Yr Guarantee' },
                  ].map((grade) => (
                    <button
                      key={grade.key}
                      type="button"
                      onClick={() => setMaterialGrade(grade.key as any)}
                      className={`p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border text-left transition-all ${
                        materialGrade === grade.key
                          ? 'border-[#FF6A00] bg-[#FF6A00]/10 text-white'
                          : 'border-white/10 bg-[#181818] text-gray-400 hover:text-white'
                      }`}
                    >
                      <div className="text-[10px] sm:text-xs font-bold leading-tight">{grade.label}</div>
                      <div className="text-[8px] sm:text-[10px] text-gray-400 leading-tight">{grade.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Client Info & Notes */}
              <div className="space-y-1.5 sm:space-y-2 pt-0.5">
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2.5">
                  <input
                    type="text"
                    placeholder="Your Name / Business"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="bg-[#181818] border border-white/10 rounded-lg sm:rounded-xl px-2.5 py-1 sm:py-2 text-white text-[11px] sm:text-xs"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile (+971 50...)"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="bg-[#181818] border border-white/10 rounded-lg sm:rounded-xl px-2.5 py-1 sm:py-2 text-white text-[11px] sm:text-xs"
                  />
                </div>

                <textarea
                  rows={1}
                  placeholder="Additional project details (Optional)..."
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  className="w-full bg-[#181818] border border-white/10 rounded-lg sm:rounded-xl p-2 text-white text-[11px] sm:text-xs focus:outline-none focus:border-[#FF6A00]"
                />
              </div>

              {/* File upload simulated dropzone */}
              <div>
                <div className="relative border border-dashed border-white/20 rounded-lg sm:rounded-xl p-1.5 text-center bg-[#181818]/50 hover:border-[#FF6A00]/50 transition-colors">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-gray-400">
                    <Upload className="w-3.5 h-3.5 text-[#FF6A00]" />
                    {fileName ? (
                      <span className="text-[#9CD248] font-medium truncate max-w-[200px]">{fileName}</span>
                    ) : (
                      <span>Upload Artwork (AI, PSD, PDF) - Optional</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Column */}
            <div className="lg:col-span-5 bg-[#161616] border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-5 flex flex-col justify-between space-y-2">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">
                    Inquiry Overview
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#9CD248]/20 text-[#9CD248] font-mono font-bold">
                    In-House Facility
                  </span>
                </div>

                <div className="py-2 space-y-1.5">
                  <div className="flex justify-between text-[11px] sm:text-xs">
                    <span className="text-gray-400">Service:</span>
                    <span className="text-white font-medium text-right truncate max-w-[150px]">{selectedService.title}</span>
                  </div>

                  <div className="flex justify-between text-[11px] sm:text-xs">
                    <span className="text-gray-400">Dimensions:</span>
                    <span className="text-white font-mono">{width}m × {height}m ({areaSqM.toFixed(2)} sq.m)</span>
                  </div>

                  <div className="flex justify-between text-[11px] sm:text-xs">
                    <span className="text-gray-400">Quantity:</span>
                    <span className="text-white font-mono">{quantity} unit(s)</span>
                  </div>

                  <div className="flex justify-between text-[11px] sm:text-xs">
                    <span className="text-gray-400">Turnaround:</span>
                    <span className="text-[#9CD248] font-medium">{estimatedDays}</span>
                  </div>

                  <div className="flex justify-between text-[11px] sm:text-xs">
                    <span className="text-gray-400">Material Grade:</span>
                    <span className="text-white capitalize">{materialGrade} Grade</span>
                  </div>

                  {/* Highlight Features */}
                  <div className="pt-1.5 border-t border-white/10 hidden sm:block">
                    <div className="text-[10px] font-semibold text-gray-400 mb-1">Included Specs:</div>
                    <ul className="space-y-0.5">
                      {selectedService.features.slice(0, 2).map((f, i) => (
                        <li key={i} className="text-[10px] text-gray-300 flex items-start gap-1">
                          <CheckCircle2 className="w-3 h-3 text-[#FF6A00] shrink-0 mt-0.5" />
                          <span className="truncate">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-[#0A0A0A] border border-white/10 text-[9px] sm:text-[11px] text-gray-400 leading-tight">
                  <span className="text-[#FF6A00] font-bold">Note:</span> Free site survey & digital proofing included.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-1.5 pt-1">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full py-2 sm:py-3 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold rounded-lg sm:rounded-xl transition-all shadow-lg flex items-center justify-center gap-1.5 text-xs sm:text-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-black" />
                  Send Inquiry via WhatsApp
                </button>

                <p className="text-[9px] text-center text-gray-400 flex items-center justify-center gap-1">
                  <Building className="w-2.5 h-2.5 text-[#FF6A00]" />
                  Ajman China Mall, Gate 6
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

