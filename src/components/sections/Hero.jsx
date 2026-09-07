import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Megaphone
} from 'lucide-react';
import { announcements } from '../../data/content';

const slides = [
  {
    id: 'campus-main',
    type: 'image',
    title: 'Government College Dera Bassi Campus',
    image: '/images/slides/campus-main-buddha.jpg',
  },
  {
    id: 'principal-guidance',
    type: 'image',
    title: 'Under the Guidance of Principal',
    image: '/images/slides/slide-1-principal-clean.png',
  },
  {
    id: 'admission-open',
    type: 'image',
    title: 'Admission Open 2026–27',
    image: '/images/slides/admission-open-banner.jpg',
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const timerRef = useRef(null);

  // Auto-advance timer (6.5 seconds per slide)
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    if (!isPausedByUser) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6500);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentSlide, isPausedByUser]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div id="home" className="relative w-full overflow-hidden select-none">
      
      {/* 1. MAIN PURE VISUAL SLIDER CONTAINER */}
      <div className="relative w-full h-[45vh] sm:h-[60vh] md:h-[72vh] lg:h-[82vh] max-h-[860px] overflow-hidden bg-slate-100">
        
        {/* Slide Images */}
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          );
        })}

        {/* Previous Navigation Arrow (Left Side) */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg hover:scale-105"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next Navigation Arrow (Right Side) */}
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg hover:scale-105"
        >
          <ChevronRight size={24} />
        </button>

        {/* Bottom Slide Indicators & Controls */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-xl">
          {/* Pause / Play button */}
          <button
            onClick={() => setIsPausedByUser(!isPausedByUser)}
            aria-label={!isPausedByUser ? "Pause slideshow" : "Play slideshow"}
            className="text-white/80 hover:text-white transition-colors"
          >
            {!isPausedByUser ? <Pause size={14} /> : <Play size={14} />}
          </button>

          <span className="w-px h-3.5 bg-white/20" />

          {/* Slide Indicator Pills */}
          <div className="flex items-center gap-2">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => {
                  setCurrentSlide(idx);
                  setIsPausedByUser(true);
                }}
                className={`relative h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide 
                    ? 'w-8 bg-[#C75B2A] shadow-md' 
                    : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <span className="w-px h-3.5 bg-white/20" />

          {/* Counter */}
          <span className="text-[11px] text-white/80 font-mono font-medium">
            0{currentSlide + 1} / 0{slides.length}
          </span>
        </div>

      </div>

      {/* 2. IIT ROPAR STYLE LIVE ANNOUNCEMENT MARQUEE STRIP */}
      <div className="relative z-30 bg-[#4A1018] border-t-2 border-[#C75B2A] shadow-2xl py-2.5 overflow-hidden">
        <div className="section-container flex items-center gap-4">
          
          {/* Ticker Badge */}
          <div className="shrink-0 flex items-center gap-2 bg-[#C75B2A] text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider shadow-sm">
            <Megaphone size={14} className="animate-bounce" />
            <span>Latest Bulletins</span>
          </div>

          {/* Scrolling Ticker Text */}
          <div className="flex-1 overflow-hidden whitespace-nowrap relative">
            <div className="inline-block animate-marquee hover:pause cursor-pointer text-xs sm:text-sm text-ivory-100 font-medium">
              {announcements.map((item, i) => (
                <span key={i} className="inline-flex items-center mr-8">
                  <span className="text-saffron-400 font-bold mr-1.5">●</span>
                  <span className="hover:text-saffron-300 transition-colors">{item.title}</span>
                  {item.isNew && (
                    <span className="ml-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">
                      New
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Quick All Notices Link */}
          <a
            href="#recognition"
            className="hidden md:inline-flex shrink-0 text-xs font-semibold text-saffron-300 hover:text-white transition-colors uppercase tracking-wider"
          >
            All Notices →
          </a>

        </div>
      </div>

    </div>
  );
};

export default Hero;
