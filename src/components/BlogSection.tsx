import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, X } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/pixelsData';

export const BlogSection: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-6 sm:py-16 lg:py-24 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1800px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-4 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] text-[10px] sm:text-xs font-bold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            Advertising & Signage Insights
          </div>

          <h2 className="text-lg sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-snug">
            Industry Guides & <span className="text-gradient-orange">Expertise</span>
          </h2>

          <p className="text-gray-400 text-xs sm:text-sm font-sans">
            Stay updated with UAE municipality sign regulations, vehicle wrapping maintenance tips, and substrate comparisons written by our engineering team.
          </p>
        </div>

        {/* Blog Grid (2 columns on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className="glass-card glass-card-hover rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF6A00]/40 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-28 sm:h-48 overflow-hidden bg-[#181818]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/70 backdrop-blur-md text-[#9CD248] text-[8px] sm:text-[10px] font-mono font-bold">
                    {post.category}
                  </div>
                </div>

                <div className="p-3 sm:p-6 space-y-1.5 sm:space-y-3">
                  <div className="flex flex-wrap items-center gap-1 sm:gap-3 text-[9px] sm:text-[11px] text-gray-400 font-mono">
                    <span className="flex items-center gap-0.5 sm:gap-1">
                      <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FF6A00]" /> {post.date}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-0.5 sm:gap-1">
                      <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#9CD248]" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-lg font-bold text-white font-display group-hover:text-[#FF6A00] transition-colors leading-snug line-clamp-2 sm:line-clamp-none">
                    {post.title}
                  </h3>

                  <p className="text-[10px] sm:text-xs text-gray-400 font-sans line-clamp-2 sm:line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-3 pb-3 sm:px-6 sm:pb-6 pt-1 sm:pt-2 flex items-center justify-between text-[10px] sm:text-xs font-bold text-[#FF6A00]">
                <span>Read Article</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Detail Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-[#FF6A00]/20 text-[#FF6A00] text-xs font-mono font-bold">
              {activePost.category}
            </span>

            <h3 className="text-2xl font-bold text-white font-display">
              {activePost.title}
            </h3>

            <p className="text-sm text-gray-300 font-sans leading-relaxed">
              {activePost.excerpt}
            </p>

            <div className="p-4 rounded-xl bg-[#181818] border border-white/5 text-xs text-gray-300 space-y-3 leading-relaxed">
              <p>
                In the competitive business landscape of the United Arab Emirates, outdoor and indoor visibility plays a pivotal role in consumer acquisition. Choosing the right substrate, lighting specifications, and material durability ensures your marketing investments withstand Gulf weather while adhering strictly to local Municipality guidelines in Ajman, Dubai, and Abu Dhabi.
              </p>
              <p>
                Contact the Pixels Advertisement engineering team at +971 52 139 9918 for a tailored site survey and artwork consultation.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
