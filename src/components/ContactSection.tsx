import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Building,
  Globe,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_LIST } from '../data/pixelsData';
import { FacebookLogo, InstagramLogo, TikTokLogo, WhatsAppLogo } from './SocialLogos';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICES_LIST[0].title,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text =
      `*NEW WEBSITE INQUIRY - PIXELS ADVERTISEMENT*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Service:* ${formData.service}\n` +
      `*Message:* ${formData.message}\n\n` +
      `Sent via ${COMPANY_DETAILS.website} Contact Form`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encoded}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: SERVICES_LIST[0].title,
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-6 sm:py-16 lg:py-20 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1800px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-10 items-start">
          
          {/* Left Column: GET IN TOUCH */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-6">
            <div>
              <div className="text-[9px] sm:text-[11px] font-mono font-bold text-[#FF6A00] uppercase tracking-widest">
                GET IN TOUCH
              </div>
              <h2 className="text-base sm:text-3xl font-extrabold text-white font-display mt-0.5 leading-snug">
                Let's Talk About Your Brand
              </h2>
            </div>

            <div className="space-y-3 text-xs text-gray-300 font-sans">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0D0D12] border border-white/10">
                <MapPin className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">China Mall - Gate Number 6 - Opposite Ajman</div>
                  <div className="text-gray-400">Al Jerf Industrial 1 - Ajman - United Arab Emirates</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0D0D12] border border-white/10">
                <Phone className="w-4 h-4 text-[#FF6A00] shrink-0" />
                <a href="tel:+971521399918" className="font-bold text-white hover:text-[#FF6A00]">
                  +971 52 139 9918
                </a>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0D0D12] border border-white/10">
                <Mail className="w-4 h-4 text-[#FF6A00] shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="font-bold text-white hover:text-[#FF6A00]">
                  {COMPANY_DETAILS.email}
                </a>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0D0D12] border border-white/10">
                <Clock className="w-4 h-4 text-[#FF6A00] shrink-0" />
                <span className="font-bold text-white">{COMPANY_DETAILS.workingHours}</span>
              </div>
            </div>

            {/* Social Icons Row with Actual Media Logos */}
            <div className="space-y-2 pt-1">
              <div className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">
                Official Social Channels
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <a
                  href={COMPANY_DETAILS.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-xl bg-[#1877F2]/10 border border-[#1877F2]/30 text-white hover:bg-[#1877F2] transition-all group"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#1877F2] flex items-center justify-center text-white shrink-0">
                    <FacebookLogo className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-[11px] font-bold">Facebook</span>
                </a>

                <a
                  href={COMPANY_DETAILS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all group"
                >
                  <InstagramLogo className="w-6 h-6 shrink-0 group-hover:scale-105 transition-transform" />
                  <span className="text-[11px] font-bold">Instagram</span>
                </a>

                <a
                  href={COMPANY_DETAILS.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/15 text-white hover:bg-black hover:border-[#00F2FE]/50 transition-all group"
                >
                  <div className="w-6 h-6 rounded-lg bg-black border border-white/20 flex items-center justify-center text-white shrink-0">
                    <TikTokLogo className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-[11px] font-bold">TikTok</span>
                </a>

                <a
                  href={COMPANY_DETAILS.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-white hover:bg-[#25D366] hover:text-black transition-all group"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#25D366] flex items-center justify-center text-black shrink-0">
                    <WhatsAppLogo className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-[11px] font-bold">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Map Box with Directions Button */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-[#0D0D12] border border-white/10 p-2 relative h-36 sm:h-48">
              <iframe
                title="Pixels Map"
                src="https://maps.google.com/maps?q=China%20Mall%20Gate%206%20Ajman%20Al%20Jerf%20Industrial%201&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full rounded-xl border-0 opacity-80"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
                <div className="text-[11px] font-bold text-white">
                  Pixels Advertisement <br />
                  <span className="text-[9px] text-gray-400">China Mall Gate No 6</span>
                </div>
                <a
                  href={COMPANY_DETAILS.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#0084FF] hover:bg-[#0070D6] text-white text-[10px] font-bold uppercase flex items-center gap-1"
                >
                  <span>MAP LOCATION</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: SEND US A MESSAGE Form */}
          <div className="lg:col-span-7 bg-[#0D0D12] rounded-xl sm:rounded-2xl p-3.5 sm:p-8 border border-white/10 space-y-3 sm:space-y-4">
            <h3 className="text-xs sm:text-lg font-bold text-white font-display uppercase">
              SEND US A MESSAGE
            </h3>

            {submitted ? (
              <div className="p-6 sm:p-8 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto animate-bounce" />
                <div>
                  <h4 className="text-lg font-bold text-white">Message Prepared for WhatsApp!</h4>
                  <p className="text-xs text-gray-300 mt-1 max-w-md mx-auto">
                    WhatsApp has opened with your inquiry details pre-filled. If it didn't open automatically, click below to open chat directly with our Ajman estimation team.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      const text =
                        `*NEW WEBSITE INQUIRY - PIXELS ADVERTISEMENT*\n\n` +
                        `*Name:* ${formData.name}\n` +
                        `*Email:* ${formData.email}\n` +
                        `*Phone:* ${formData.phone}\n` +
                        `*Service:* ${formData.service}\n` +
                        `*Message:* ${formData.message}\n\n` +
                        `Sent via ${COMPANY_DETAILS.website} Contact Form`;
                      const encoded = encodeURIComponent(text);
                      window.open(`https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encoded}`, '_blank');
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <WhatsAppLogo className="w-4 h-4 fill-current" />
                    <span>Open WhatsApp Chat</span>
                  </button>

                  <button
                    onClick={handleResetForm}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/10"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#15151D] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A00]"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#15151D] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A00]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#15151D] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A00]"
                    />
                  </div>

                  <div>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#15151D] border border-white/10 rounded-xl px-4 py-3 text-xs text-gray-300 focus:outline-none focus:border-[#FF6A00]"
                    >
                      <option>Choose a Service</option>
                      {SERVICES_LIST.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#15151D] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A00]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#25D366] hover:from-[#e05d00] hover:to-[#20bd5a] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#FF6A00]/20 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <WhatsAppLogo className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                  <span>SEND MESSAGE TO WHATSAPP</span>
                  <Send className="w-3.5 h-3.5 ml-1" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
