import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronRight, ChevronLeft, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeBrandPage, setActiveBrandPage] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isHoveredBrands, setIsHoveredBrands] = useState(false);
  const [isHoveredReviews, setIsHoveredReviews] = useState(false);

  const brandPages = [
    [
      { name: 'Emirates', desc: 'Aviation & Travel' },
      { name: 'ADCB', desc: 'Banking' },
      { name: 'LuLu', desc: 'Hypermarkets' },
      { name: 'NESTO', desc: 'Retail Group' },
      { name: 'Ajman Bank', desc: 'Financial' },
      { name: 'Ramada', desc: 'Hospitality' },
    ],
    [
      { name: 'RAK Bank', desc: 'Commercial Banking' },
      { name: 'Union Coop', desc: 'Retail Chain' },
      { name: 'City Centre', desc: 'Shopping Malls' },
      { name: 'Al Maya', desc: 'FMCG & Supermarkets' },
      { name: 'Carrefour', desc: 'Global Retail' },
      { name: 'Aster', desc: 'Healthcare' },
    ],
    [
      { name: 'Gulf Craft', desc: 'Luxury Yachts' },
      { name: 'Danube', desc: 'Building Materials' },
      { name: 'Landmark', desc: 'Fashion & Retail' },
      { name: 'Sharaf DG', desc: 'Electronics' },
      { name: 'Splash', desc: 'Apparel' },
      { name: 'Al Zorah', desc: 'Real Estate' },
    ],
    [
      { name: 'Sharjah Co-Op', desc: 'Retail Cooperative' },
      { name: 'Thumbay', desc: 'Healthcare & Edu' },
      { name: 'Ajman Sewerage', desc: 'Government Services' },
      { name: 'Red Crescent', desc: 'Humanitarian' },
      { name: 'Sahara Centre', desc: 'Lifestyle Destination' },
      { name: 'Onyx Nation', desc: 'Corporate Group' },
    ],
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        'Pixels Advertisement delivered our outdoor LED signage and store displays beyond expectations. Highly professional team with pristine on-time delivery in Ajman!',
      name: 'Mohammed Al Zarooni',
      role: 'Al Zarooni Group',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 2,
      quote:
        'Excellent quality 3D acrylic letters and illuminated fascia boards. Their responsive design team made the whole branding process effortless.',
      name: 'Sara Ahmed',
      role: 'Nesto Hypermarket',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 3,
      quote:
        'Best signage and print manufacturing partner in Ajman! Their vehicle wrapping and fleet graphics turned out stunning and super durable.',
      name: 'Anees Perera',
      role: 'Onyx Nation',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 4,
      quote:
        'Top-notch flex printing and large-format indoor displays. Exceptional finish and incredible attention to safety standards during installation.',
      name: 'Tariq Al Mansoori',
      role: 'Ajman Commercial Center',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 5,
      quote:
        'From concept designs to final LED mounting, Pixels delivered top-tier branding assets. Always our go-to advertising agency in the UAE.',
      name: 'Fatima Al Hashimi',
      role: 'Zorah Properties',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 6,
      quote:
        'Outstanding wayfinding signs and illuminated reception lettering. Highly recommend Pixels Advertisement for any commercial signage project!',
      name: 'David Miller',
      role: 'Ramada Hotel & Suites',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    },
  ];

  // Auto-rotate Brands every 3.5 seconds
  useEffect(() => {
    if (isHoveredBrands) return;
    const interval = setInterval(() => {
      setActiveBrandPage((prev) => (prev + 1) % brandPages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHoveredBrands, brandPages.length]);

  // Auto-rotate Testimonials every 4.5 seconds
  useEffect(() => {
    if (isHoveredReviews) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHoveredReviews, testimonials.length]);

  const handleNextBrand = () => {
    setActiveBrandPage((prev) => (prev + 1) % brandPages.length);
  };

  const handlePrevBrand = () => {
    setActiveBrandPage((prev) => (prev - 1 + brandPages.length) % brandPages.length);
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-8 sm:py-16 lg:py-20 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1800px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          
          {/* Left Column: OUR CLIENTS (Auto-changing Brand Logos) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4 sm:space-y-6"
            onMouseEnter={() => setIsHoveredBrands(true)}
            onMouseLeave={() => setIsHoveredBrands(false)}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] sm:text-[11px] font-mono font-bold text-[#FF6A00] uppercase tracking-widest flex items-center gap-2">
                  <span>OUR CLIENTS</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-ping" />
                </div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white font-display mt-1">
                  Brands That Trust Us
                </h2>
              </div>

              {/* Navigation Arrows for Brands */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevBrand}
                  className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                  aria-label="Previous brands"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextBrand}
                  className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                  aria-label="Next brands"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#0D0D12] border border-white/10 space-y-5 relative min-h-[220px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBrandPage}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 items-center justify-items-center"
                >
                  {brandPages[activeBrandPage].map((brand, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.04, y: -2 }}
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#FF6A00]/40 transition-all text-center w-full group cursor-pointer"
                    >
                      <span className="text-xs font-extrabold text-gray-100 tracking-wider group-hover:text-[#FF6A00] transition-colors block">
                        {brand.name}
                      </span>
                      <span className="text-[9px] text-gray-400 block font-mono mt-0.5 opacity-80">
                        {brand.desc}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Dots indicator */}
              <div className="flex items-center justify-center gap-2 pt-2 border-t border-white/5">
                {brandPages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveBrandPage(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeBrandPage === idx
                        ? 'w-6 bg-[#FF6A00]'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to brand page ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: TESTIMONIALS (Auto-changing Reviews) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4 sm:space-y-6"
            onMouseEnter={() => setIsHoveredReviews(true)}
            onMouseLeave={() => setIsHoveredReviews(false)}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] sm:text-[11px] font-mono font-bold text-[#FF6A00] uppercase tracking-widest flex items-center gap-2">
                  <span>TESTIMONIALS</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
                </div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white font-display mt-1">
                  What Our Clients Say
                </h2>
              </div>

              {/* Control buttons */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-gray-400 hidden sm:inline">
                  {activeTestimonial + 1} / {testimonials.length}
                </span>
                <button
                  onClick={handlePrevTestimonial}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextTestimonial}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Active Highlighted Featured Testimonial Card */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0D0D12] to-[#14141E] border border-[#FF6A00]/40 shadow-xl shadow-[#FF6A00]/5 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Quote className="w-8 h-8 text-[#FF6A00]" />
                      <div className="flex items-center gap-1">
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#FF6A00] text-[#FF6A00]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-100 font-sans leading-relaxed italic">
                      "{testimonials[activeTestimonial].quote}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonials[activeTestimonial].avatar}
                        alt={testimonials[activeTestimonial].name}
                        className="w-10 h-10 rounded-full object-cover border border-[#FF6A00]/50"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="text-sm font-bold text-white">
                          {testimonials[activeTestimonial].name}
                        </div>
                        <div className="text-xs text-[#FF6A00] font-medium">
                          {testimonials[activeTestimonial].role}
                        </div>
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      Verified Client
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Clickable Quick Switcher Thumbnails */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-1">
              {testimonials.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`p-2 rounded-xl border text-left transition-all flex flex-col items-center justify-center gap-1 ${
                    activeTestimonial === idx
                      ? 'bg-[#FF6A00]/15 border-[#FF6A00] scale-105'
                      : 'bg-[#0D0D12] border-white/10 hover:border-white/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-6 h-6 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-[10px] font-bold text-white truncate w-full text-center">
                    {item.name.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};


