import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Facebook,
  Instagram,
  ArrowUp,
  CheckCircle2,
  ShieldCheck,
  Lock,
  Globe,
  ExternalLink
} from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_DETAILS, SERVICES_LIST } from '../data/pixelsData';
import { FacebookLogo, InstagramLogo, TikTokLogo, WhatsAppLogo } from './SocialLogos';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030303] text-gray-300 border-t border-white/10 pt-8 sm:pt-16 pb-6 sm:pb-8 relative overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#FF6A00]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1800px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Top Newsletter CTA Section */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 bg-radial-gradient">
          <div className="space-y-2 max-w-xl text-center lg:text-left">
            <span className="text-xs font-mono font-bold text-[#9CD248] uppercase tracking-wider">
              Subscribe To Creative Insights
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Ready To Elevate Your Brand Presence In UAE?
            </h3>
            <p className="text-xs text-gray-400 font-sans">
              Get monthly updates on signage trends, municipality rules, material innovations, and VIP promo offers.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 text-sm text-[#9CD248] font-bold">
                <CheckCircle2 className="w-5 h-5" /> Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your corporate email"
                  className="bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-[#FF6A00] flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#FF6A00] hover:bg-[#e05d00] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-lg shadow-[#FF6A00]/25"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Logo & Company Description */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-xs text-gray-400 max-w-sm font-sans leading-relaxed">
              PIXELS ADVERTISEMENT is UAE's premier luxury creative advertising and printing company based in Ajman. Specialist in 3D LED signage, large format UV printing, vehicle wraps, and exhibition stands.
            </p>

            {/* Live UAE Time Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
              <span>GST (UTC+4 Ajman/Dubai):</span>
              <span className="text-[#9CD248] font-bold">{time || '09:00 AM'}</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2 flex-wrap">
              <a
                href={COMPANY_DETAILS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#1877F2] text-[#1877F2] hover:text-white transition-all border border-white/10 flex items-center justify-center shadow-lg group"
                title="Facebook"
              >
                <FacebookLogo className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={COMPANY_DETAILS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 flex items-center justify-center shadow-lg group"
                title="Instagram"
              >
                <InstagramLogo className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={COMPANY_DETAILS.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-black text-white hover:text-[#00F2FE] transition-all border border-white/10 flex items-center justify-center shadow-lg group"
                title="TikTok"
              >
                <TikTokLogo className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={COMPANY_DETAILS.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-black transition-all border border-[#25D366]/30 flex items-center justify-center shadow-lg group"
                title="WhatsApp"
              >
                <WhatsAppLogo className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#hero" className="hover:text-[#FF6A00] transition-colors">Home Page</a></li>
              <li><a href="#about" className="hover:text-[#FF6A00] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#FF6A00] transition-colors">All 26 Services</a></li>
              <li><a href="#why-us" className="hover:text-[#FF6A00] transition-colors">Why Choose Pixels</a></li>
              <li><a href="#portfolio" className="hover:text-[#FF6A00] transition-colors">Case Studies</a></li>
              <li><a href="#process" className="hover:text-[#FF6A00] transition-colors">Production Process</a></li>
              <li><a href="#contact" className="hover:text-[#FF6A00] transition-colors">Location & Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#services" className="hover:text-[#9CD248] transition-colors">3D LED Channel Signage</a></li>
              <li><a href="#services" className="hover:text-[#9CD248] transition-colors">Large Format UV Printing</a></li>
              <li><a href="#services" className="hover:text-[#9CD248] transition-colors">Commercial Vehicle Wrapping</a></li>
              <li><a href="#services" className="hover:text-[#9CD248] transition-colors">Exhibition Stands & Booths</a></li>
              <li><a href="#services" className="hover:text-[#9CD248] transition-colors">Corporate Brand Identity</a></li>
              <li><a href="#services" className="hover:text-[#9CD248] transition-colors">Rigid Packaging & Gift Boxes</a></li>
            </ul>
          </div>

          {/* Col 4: UAE Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Ajman Headquarters
            </h4>
            <div className="text-xs text-gray-400 space-y-2 font-sans">
              <p className="flex items-start gap-1.5 text-gray-300">
                <MapPin className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address.line1}, {COMPANY_DETAILS.address.area}, Ajman, UAE</span>
              </p>
              <p className="flex items-center gap-1.5 text-white font-bold">
                <Phone className="w-4 h-4 text-[#FF6A00]" />
                <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="hover:underline">{COMPANY_DETAILS.phone}</a>
              </p>
              <p className="flex items-center gap-1.5 text-gray-400">
                <Clock className="w-4 h-4 text-[#9CD248]" />
                <span>{COMPANY_DETAILS.workingHours}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Security Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left flex-wrap">
            <span>© 2026 <span className="text-white font-bold">PIXELS ADVERTISEMENT</span>. All Rights Reserved.</span>

            {/* Developer Credit */}
            <a
              href="https://mushieditz.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#FF6A00]/15 via-[#A044FF]/15 to-[#00F2FE]/15 hover:from-[#FF6A00]/30 hover:to-[#00F2FE]/30 border border-white/20 text-[11px] font-medium text-white transition-all shadow-sm hover:scale-105 group"
            >
              <span className="text-gray-400">Created by</span>
              <span className="font-bold bg-gradient-to-r from-[#FF6A00] via-white to-[#00F2FE] bg-clip-text text-transparent group-hover:underline">
                Mushi Editz
              </span>
              <ExternalLink className="w-3 h-3 text-[#FF6A00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            
            {/* Security & SSL Badges */}
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-300 font-mono">
              <Lock className="w-3 h-3 text-[#25D366]" />
              <span>SSL Encrypted</span>
            </div>
            
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-300 font-mono">
              <ShieldCheck className="w-3 h-3 text-[#FF6A00]" />
              <span>Protected</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-mono">
              <Globe className="w-3 h-3 text-[#9CD248]" />
              <span>SEO & Schema Index Verified</span>
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-[#FF6A00] text-gray-300 hover:text-white transition-all border border-white/10 flex items-center gap-1 text-[11px]"
            >
              Back to top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
