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
  const [urgency, setUrgency] = useState<'standard' | 'express'>('standard');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);

  const selectedService = SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];

  const areaSqM = Math.max(0.1, width * height);
  const estimatedDays = urgency === 'express' ? '24 - 48 Hours' : selectedService.typicalTurnaround || '3 - 5 Days';

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
      `*Production Speed:* ${urgency === 'express' ? 'EXPRESS 24H RUSH' : 'Standard Delivery'}\n` +
      `*Client Name:* ${clientName || 'Not specified'}\n` +
      `*Phone:* ${clientPhone || 'Not specified'}\n` +
      `*Notes:* ${projectNotes || 'None'}\n\n` +
      `Requested from pixelsadvertisement.ae website`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#111111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-6">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 border-b border-white/10 bg-[#161616]">
          <div className="flex items-center space-x-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-[#FF6A00]/10 text-[#FF6A00] border border-[#FF6A00]/20">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display flex items-center gap-2">
                Request Free Quote & Project Inquiry
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-400">
                Specify your project dimensions, materials, and artwork specs for Pixels Advertising UAE
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 max-h-[75vh] overflow-y-auto">
            {/* Form Column */}
            <div className="lg:col-span-7 space-y-4">
              {/* Select Service */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Select Advertising Service
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#FF6A00] text-xs sm:text-sm"
                >
                  {SERVICES_LIST.map((service) => (
                    <option key={service.id} value={service.id}>
                      [{service.category}] {service.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dimensions & Quantity */}
              <div className="grid grid-cols-3 gap-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                    Width (m)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.1"
                    value={width}
                    onChange={(e) => setWidth(parseFloat(e.target.value) || 0.1)}
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-3 py-2 text-white text-xs sm:text-sm focus:border-[#FF6A00]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                    Height (m)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.1"
                    value={height}
                    onChange={(e) => setHeight(parseFloat(e.target.value) || 0.1)}
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-3 py-2 text-white text-xs sm:text-sm focus:border-[#FF6A00]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-3 py-2 text-white text-xs sm:text-sm focus:border-[#FF6A00]"
                  />
                </div>
              </div>

              {/* Material Grade */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Material & Finishing Spec
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: 'standard', label: 'Standard', desc: '1 Year Warranty' },
                    { key: 'premium', label: 'Premium', desc: '3 Year Warranty' },
                    { key: 'luxury', label: 'Ultra Luxury', desc: '5 Year Guarantee' },
                  ].map((grade) => (
                    <button
                      key={grade.key}
                      type="button"
                      onClick={() => setMaterialGrade(grade.key as any)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        materialGrade === grade.key
                          ? 'border-[#FF6A00] bg-[#FF6A00]/10 text-white'
                          : 'border-white/10 bg-[#181818] text-gray-400 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold">{grade.label}</div>
                      <div className="text-[10px] text-gray-400">{grade.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Turnaround urgency */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Production Speed
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setUrgency('standard')}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      urgency === 'standard'
                        ? 'border-[#9CD248] bg-[#9CD248]/10 text-white'
                        : 'border-white/10 bg-[#181818] text-gray-400'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">Standard Delivery</div>
                    <div className="text-[10px] text-gray-400">{selectedService.typicalTurnaround || '3 - 5 Days'}</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setUrgency('express')}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      urgency === 'express'
                        ? 'border-[#FF6A00] bg-[#FF6A00]/10 text-white'
                        : 'border-white/10 bg-[#181818] text-gray-400'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#FF6A00] flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Express 24H Rush
                    </div>
                    <div className="text-[10px] text-gray-400">24 - 48 Hours Express</div>
                  </button>
                </div>
              </div>

              {/* Client Info & Notes */}
              <div className="space-y-2 pt-1">
                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    placeholder="Your Name / Business"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="bg-[#181818] border border-white/10 rounded-xl px-3 py-2 text-white text-xs"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile (+971 50...)"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="bg-[#181818] border border-white/10 rounded-xl px-3 py-2 text-white text-xs"
                  />
                </div>

                <textarea
                  rows={2}
                  placeholder="Additional project details or instructions (Optional)..."
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  className="w-full bg-[#181818] border border-white/10 rounded-xl p-2.5 text-white text-xs focus:outline-none focus:border-[#FF6A00]"
                />
              </div>

              {/* File upload simulated dropzone */}
              <div>
                <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                  Upload Design File / Artwork (Optional)
                </label>
                <div className="relative border border-dashed border-white/20 rounded-xl p-2.5 text-center bg-[#181818]/50 hover:border-[#FF6A00]/50 transition-colors">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                    <Upload className="w-4 h-4 text-[#FF6A00]" />
                    {fileName ? (
                      <span className="text-[#9CD248] font-medium">{fileName}</span>
                    ) : (
                      <span>Drop AI, PSD, PDF or vector file</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Column */}
            <div className="lg:col-span-5 bg-[#161616] border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Inquiry Overview
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#9CD248]/20 text-[#9CD248] font-mono font-bold">
                    In-House Facility
                  </span>
                </div>

                <div className="py-4 space-y-2.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Service:</span>
                    <span className="text-white font-medium text-right">{selectedService.title}</span>
                  </div>

                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Dimensions:</span>
                    <span className="text-white font-mono">{width}m × {height}m</span>
                  </div>

                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Coverage Area:</span>
                    <span className="text-white font-mono">{areaSqM.toFixed(2)} sq.m</span>
                  </div>

                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Quantity:</span>
                    <span className="text-white font-mono">{quantity} unit(s)</span>
                  </div>

                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Est. Turnaround:</span>
                    <span className="text-[#9CD248] font-medium">{estimatedDays}</span>
                  </div>

                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Material Grade:</span>
                    <span className="text-white capitalize">{materialGrade} Grade</span>
                  </div>

                  {/* Highlight Features */}
                  <div className="pt-3 border-t border-white/10">
                    <div className="text-[11px] font-semibold text-gray-400 mb-1.5">Included Specs:</div>
                    <ul className="space-y-1">
                      {selectedService.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="text-[11px] text-gray-300 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A00] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 my-1 text-[11px] text-gray-400 leading-relaxed">
                  <span className="text-[#FF6A00] font-bold">Note:</span> Free site survey, precise measurement, and digital mockup proofing available upon submission.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-3">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  Send Inquiry via WhatsApp
                </button>

                <p className="text-[10px] text-center text-gray-400 flex items-center justify-center gap-1">
                  <Building className="w-3 h-3 text-[#FF6A00]" />
                  Ajman Workshop: China Mall, Gate No.6
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

