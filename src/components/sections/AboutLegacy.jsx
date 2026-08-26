import React, { useState, useRef } from 'react';
import { Building2, Play, Pause, Award, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const AboutLegacy = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left side: Institutional Legacy Text (6 Columns on Desktop) */}
          <div className="lg:col-span-6">
            
            <div className="inline-flex items-center gap-2 bg-[#FAF4E6] text-[#8B1E2B] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#EEDBBA]">
              <Award size={14} className="text-[#C75B2A]" />
              <span>50-Year Golden Jubilee Legacy (1975 – 2025)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 font-sans">
              Serving Higher Education <span className="text-[#8B1E2B]">Since 1975</span>
            </h2>
            <div className="w-[60px] h-[3.5px] bg-[#8B1E2B] mt-4 mb-2 rounded-full mr-auto" />
            
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg mt-6">
              For five decades, Government College, Dera Bassi has stood as a beacon of quality higher education, empowering thousands of students across Punjab and neighboring regions. Proudly affiliated to Punjabi University, Patiala, we are dedicated to holistic student development, academic rigor, and career excellence.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8 pt-4 border-t border-slate-100">
              <a 
                href="#academics" 
                className="bg-[#8B1E2B] hover:bg-[#601520] text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                Explore Programmes &rarr;
              </a>
              <a 
                href="#recognition" 
                className="text-[#8B1E2B] hover:text-[#C75B2A] font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors"
              >
                View NAAC & IQAC &rarr;
              </a>
            </div>
          </div>
          
          {/* Right side: Replaced Image with High-Definition Campus Video Tour Player (6 Columns on Desktop) */}
          <div className="lg:col-span-6 relative group">
            
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative bg-slate-950">
              
              <video 
                ref={videoRef}
                src="/videos/gcd_about_video.mp4" 
                autoPlay 
                loop 
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 pointer-events-none" />

              {/* Top Controls: Play/Pause Button Only */}
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause Campus Video" : "Play Campus Video"}
                  className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-lg active:scale-95"
                >
                  {isPlaying ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
                </button>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-20 pointer-events-none">
                <div className="inline-flex items-center gap-1.5 bg-[#C75B2A] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md mb-1.5">
                  <span>15-Acre Lush Green Campus</span>
                </div>
                <p className="text-xs sm:text-sm text-ivory-100 font-medium drop-shadow-md">
                  Smart Classrooms, Science & Computer Labs, Green Lawns
                </p>
              </div>

            </div>

            {/* Floating Established Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-slate-100 items-center gap-3.5 z-30 animate-fadeIn">
              <div className="w-12 h-12 rounded-xl bg-[#FAF4E6] text-[#8B1E2B] flex items-center justify-center shadow-xs">
                <Building2 className="w-6 h-6 text-[#8B1E2B]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Established</p>
                <p className="text-lg font-black text-slate-900 font-display">1975 (50 Years)</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutLegacy;
