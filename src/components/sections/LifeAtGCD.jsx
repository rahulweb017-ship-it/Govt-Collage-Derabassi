import React, { useState } from 'react';
import { 
  Maximize2, 
  X, 
  Sparkles, 
  Palette, 
  Laptop, 
  Music, 
  Trophy, 
  BookOpen, 
  Users, 
  Building2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const collageImages = [
  {
    id: 'campus-buddha',
    title: '15-Acre Sprawling Campus & Serene Buddha Lawn',
    category: 'Campus & Heritage',
    categoryIcon: Building2,
    description: 'Iconic red-brick institutional architecture surrounded by lush green lawns and tranquil study zones.',
    src: '/images/slides/campus-main-buddha.jpg',
    spanClass: 'col-span-2 sm:col-span-2 lg:col-span-5 lg:row-span-2 min-h-[300px] sm:min-h-[380px] lg:min-h-[540px]'
  },
  {
    id: 'fine-arts',
    title: 'Fine Arts, Creativity & Student Design Studio',
    category: 'Creative Arts',
    categoryIcon: Palette,
    description: 'Students expressing cultural heritage, painting, and contemporary artistic techniques.',
    src: '/images/old_site/fineart.JPG',
    spanClass: 'col-span-1 sm:col-span-1 lg:col-span-4 lg:row-span-1 min-h-[220px] sm:min-h-[260px]'
  },
  {
    id: 'cyber-lab',
    title: 'Modern Multimedia IT & Computer Labs',
    category: 'Digital Innovation',
    categoryIcon: Laptop,
    description: 'Hands-on software development, digital literacy, and internet-enabled practical learning.',
    src: '/images/old_site/cyber.JPG',
    spanClass: 'col-span-1 sm:col-span-1 lg:col-span-3 lg:row-span-1 min-h-[220px] sm:min-h-[260px]'
  },
  {
    id: 'youth-fest',
    title: 'Annual Talent Hunt & Cultural Youth Festival',
    category: 'Cultural Vibrancy',
    categoryIcon: Music,
    description: 'Celebrating Punjabi folk traditions, music, theater, and student performing arts.',
    src: '/images/old_site/talenthunt_20_1_.JPG',
    spanClass: 'col-span-1 sm:col-span-1 lg:col-span-4 lg:row-span-1 min-h-[220px] sm:min-h-[260px]'
  },
  {
    id: 'sports-track',
    title: 'Championship Athletics & Sports Complex',
    category: 'Sports & Athletics',
    categoryIcon: Trophy,
    description: 'Annual track & field events, gymnasium workouts, and zonal tournament training.',
    src: '/images/old_site/sport_20_4_.JPG',
    spanClass: 'col-span-1 sm:col-span-1 lg:col-span-3 lg:row-span-1 min-h-[220px] sm:min-h-[260px]'
  },
  {
    id: 'classroom-mentorship',
    title: 'Interactive Lecture Halls & Faculty Mentorship',
    category: 'Academic Discourse',
    categoryIcon: BookOpen,
    description: 'Engaging classroom discussions with experienced professors and peer collaboration.',
    src: '/images/old_site/course-2.jpg',
    spanClass: 'col-span-1 sm:col-span-1 lg:col-span-4 lg:row-span-1 min-h-[220px] sm:min-h-[260px]'
  },
  {
    id: 'nss-rally',
    title: 'NSS Social Awareness & Community Outreach Rallies',
    category: 'Civic Leadership',
    categoryIcon: Users,
    description: 'Active youth leadership fostering health awareness, cleanliness drives, and social change.',
    src: '/images/old_site/rally_20_1_.JPG',
    spanClass: 'col-span-1 sm:col-span-1 lg:col-span-4 lg:row-span-1 min-h-[220px] sm:min-h-[260px]'
  },
  {
    id: 'faculty-conclave',
    title: 'Institutional Seminars, IQAC Conclaves & Workshops',
    category: 'Faculty & Research',
    categoryIcon: Sparkles,
    description: 'Continuous faculty development programmes, NAAC quality symposiums, and guest lectures.',
    src: '/images/old_site/events-1.jpg',
    spanClass: 'col-span-2 sm:col-span-2 lg:col-span-4 lg:row-span-1 min-h-[220px] sm:min-h-[260px]'
  }
];

const LifeAtGCD = () => {
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  const openLightbox = (index) => {
    setActiveModalIndex(index);
  };

  const closeLightbox = () => {
    setActiveModalIndex(null);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveModalIndex((prev) => (prev - 1 + collageImages.length) % collageImages.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveModalIndex((prev) => (prev + 1) % collageImages.length);
  };

  return (
    <section id="life-at-gcd" className="py-24 bg-white select-none overflow-hidden">
      
      {/* 1. EDITORIAL SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#FAF4E6] text-[#8B1E2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-[#EEDBBA]">
              <Sparkles size={13} className="text-[#C75B2A]" />
              <span>Campus Visual Storytelling</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 font-display">
              Where Learning <span className="text-[#8B1E2B] italic">Comes to Life</span>
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3 max-w-2xl">
              A vibrant glimpse into the daily life at Government College, Dera Bassi — where rigorous academics, creative exploration, athletic spirit, and community leadership converge.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="w-2 h-2 rounded-full bg-[#8B1E2B] animate-pulse" />
            <span>8 Real Campus Stories · Click to Explore</span>
          </div>

        </div>
      </div>

      {/* 2. FULL-WIDTH ASYMMETRIC MASONRY / MOSAIC IMAGE COLLAGE */}
      <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-1.5 sm:gap-2 auto-rows-[220px] sm:auto-rows-[260px] lg:auto-rows-[260px]">
          {collageImages.map((item, index) => {
            const Icon = item.categoryIcon;

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`relative rounded-xl overflow-hidden group cursor-pointer bg-slate-950 shadow-xs hover:shadow-2xl transition-all duration-500 ${item.spanClass}`}
              >
                {/* Real Campus Photography */}
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Subtle Multi-Tier Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-75 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

                {/* Floating Top Category Pill */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-black/60 hover:bg-[#8B1E2B] backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20 shadow-md transition-colors">
                    <Icon size={12} className="text-saffron-300" />
                    <span>{item.category}</span>
                  </span>
                </div>

                {/* Fullscreen Expand Icon (Top Right) */}
                <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-md text-white flex items-center justify-center border border-white/30 shadow-lg">
                    <Maximize2 size={14} />
                  </div>
                </div>

                {/* Bottom Story Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white font-display leading-snug drop-shadow-md group-hover:text-saffron-200 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-[11px] sm:text-xs text-slate-200 line-clamp-2 mt-1 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* 3. LIGHTBOX / HIGH-RES EXPANDED VIEW MODAL */}
      {activeModalIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn select-none"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center border border-white/20 transition-all active:scale-95"
          >
            <X size={22} />
          </button>

          {/* Previous Image Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center border border-white/20 transition-all active:scale-95 shadow-xl"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Next Image Button */}
          <button
            onClick={handleNext}
            aria-label="Next Image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center border border-white/20 transition-all active:scale-95 shadow-xl"
          >
            <ChevronRight size={26} />
          </button>

          {/* Active Modal Content */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-950 max-h-[72vh] flex items-center justify-center">
              <img
                src={collageImages[activeModalIndex].src}
                alt={collageImages[activeModalIndex].title}
                className="max-h-[72vh] w-auto object-contain"
              />
            </div>

            {/* Bottom Modal Metadata */}
            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <span className="inline-block bg-[#8B1E2B] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                {collageImages[activeModalIndex].category} · 0{activeModalIndex + 1} of 0{collageImages.length}
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-display">
                {collageImages[activeModalIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                {collageImages[activeModalIndex].description}
              </p>
            </div>
          </div>

        </div>
      )}

    </section>
  );
};

export default LifeAtGCD;
