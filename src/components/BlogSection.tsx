import React, { useState, useEffect } from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, X, Maximize2, Sparkles, MapPin, CheckCircle2, Layers } from 'lucide-react';
import { BLOG_POSTS, BlogPost, RECENT_PROJECTS, ProjectItem } from '../data/pixelsData';

export const BlogSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'guides'>('projects');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
        setActivePost(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="blog" className="py-8 sm:py-16 lg:py-24 bg-[#080808] relative overflow-hidden">
      {/* Background Subtle Gradient Flares */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#9CD248]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1800px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] text-[10px] sm:text-xs font-bold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            Signage Showcase & Industry Expertise
          </div>

          <h2 className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-snug">
            Recent Projects & <span className="text-gradient-orange">Industry Guides</span>
          </h2>

          <p className="text-gray-400 text-xs sm:text-sm font-sans max-w-2xl mx-auto">
            Explore our real fabricated signage installations, illuminated 3D LED storefronts, exhibition displays, and technical municipality guides across Ajman, Dubai & UAE.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex p-1 rounded-2xl bg-[#121218] border border-white/10 mt-4 sm:mt-6 gap-1">
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-xl text-xs font-bold font-mono transition-all duration-300 ${
                activeTab === 'projects'
                  ? 'bg-[#FF6A00] text-white shadow-lg shadow-[#FF6A00]/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Recent Projects ({RECENT_PROJECTS.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('guides')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-xl text-xs font-bold font-mono transition-all duration-300 ${
                activeTab === 'guides'
                  ? 'bg-[#FF6A00] text-white shadow-lg shadow-[#FF6A00]/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Technical Guides ({BLOG_POSTS.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: RECENT PROJECTS SHOWCASE */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 animate-fade-in">
            {RECENT_PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group relative rounded-2xl bg-[#0D0D12] border border-white/10 hover:border-[#FF6A00]/60 p-2.5 sm:p-4 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-[0_0_30px_rgba(255,106,0,0.2)] overflow-hidden"
              >
                <div>
                  {/* Image Container with Glossy Sheen Overlay */}
                  <div className="relative h-36 sm:h-52 rounded-xl overflow-hidden mb-3 bg-[#181820] group-hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Glossy sheen reflection on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Category Chip */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[#9CD248] text-[9px] sm:text-[10px] font-mono font-bold border border-white/10 max-w-[85%] truncate">
                      {project.category}
                    </div>

                    {/* Click for Glossy View Button */}
                    <div className="absolute top-2 right-2 p-1.5 sm:p-2 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 group-hover:bg-[#FF6A00] group-hover:scale-110 transition-all shadow-md">
                      <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-1 text-[10px] text-gray-400 font-mono">
                      <MapPin className="w-3 h-3 text-[#FF6A00]" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-xs sm:text-base font-bold text-white font-display group-hover:text-[#FF6A00] transition-colors leading-snug line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-[10px] sm:text-xs text-gray-400 font-sans line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-xs font-mono text-[#FF6A00] font-bold group-hover:translate-x-1 transition-transform">
                  <span>View Glossy Photo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: TECHNICAL GUIDES */}
        {activeTab === 'guides' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 animate-fade-in">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                onClick={() => setActivePost(post)}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF6A00]/40 transition-all cursor-pointer flex flex-col justify-between group p-2"
              >
                <div>
                  <div className="relative h-44 sm:h-52 overflow-hidden bg-[#181818] rounded-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#9CD248] text-[10px] font-mono font-bold">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-gray-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#FF6A00]" /> {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#9CD248]" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white font-display group-hover:text-[#FF6A00] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-gray-400 font-sans line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-2 flex items-center justify-between text-xs font-bold text-[#FF6A00]">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* GLOSSY LIGHTBOX MODAL FOR RECENT PROJECTS */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in"
          onClick={() => setActiveProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-gradient-to-b from-white/15 via-white/5 to-black/95 backdrop-blur-2xl border border-white/25 shadow-[0_0_60px_rgba(255,106,0,0.25)] rounded-3xl p-4 sm:p-7 overflow-hidden text-white transition-all duration-300 animate-scale-up max-h-[92vh] flex flex-col justify-between"
          >
            {/* Top Glossy Reflection Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none rounded-3xl" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent" />

            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 relative z-10 shrink-0">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-[#FF6A00]/20 border border-[#FF6A00]/40 text-[#FF6A00]">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#FF6A00] uppercase block">
                    PIXELS RECENT PROJECT SHOWCASE
                  </span>
                  <span className="text-xs text-gray-300 font-mono">{activeProject.category}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-[#FF6A00] text-white transition-all hover:scale-110 border border-white/15"
                title="Close (ESC)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Glossy Image Container */}
            <div className="relative rounded-2xl overflow-hidden bg-black/70 border border-white/15 shadow-2xl flex items-center justify-center group mb-4 max-h-[55vh] sm:max-h-[60vh] shrink-1">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full max-h-[55vh] sm:max-h-[60vh] object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
              {/* Glossy Glare Filter Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-mono text-[#9CD248] font-bold">
                REAL FABRICATED WORK
              </div>
            </div>

            {/* Footer Specifications & Details */}
            <div className="space-y-3 relative z-10 shrink-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold font-display text-white">
                    {activeProject.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-300 mt-0.5">
                    <span className="flex items-center gap-1 text-[#FF6A00] font-medium">
                      <MapPin className="w-3.5 h-3.5" /> {activeProject.location}
                    </span>
                    {activeProject.client && (
                      <span className="text-gray-400 font-mono">• Client: {activeProject.client}</span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#FF6A00] hover:bg-[#e05d00] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#FF6A00]/30 shrink-0 self-end sm:self-auto"
                >
                  Close Preview
                </button>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed line-clamp-2">
                {activeProject.description}
              </p>

              {/* Specs Badges */}
              {activeProject.specs && activeProject.specs.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {activeProject.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-gray-200"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#9CD248]" />
                      {spec}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ARTICLE MODAL FOR GUIDES */}
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

