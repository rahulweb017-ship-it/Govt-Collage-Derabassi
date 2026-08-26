import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  ArrowRight
} from 'lucide-react';

const row1Moments = [
  {
    id: 'r1-1',
    category: 'Academics & Faculty Conclave',
    headline: 'State-Level Academic Seminars & Scholarly Discussions',
    description: 'Distinguished faculty and visiting scholars engaging students in higher education innovations and curriculum enhancements.',
    accentColor: 'border-l-emerald-600',
    src: '/images/campus_moments/471151130_897568249214944_8328849279761937305_n.jpg'
  },
  {
    id: 'r1-2',
    category: 'Cultural Youth Festival',
    headline: 'Punjabi Folk Dance & Giddha Celebrations',
    description: 'Students proudly showcasing traditional Punjabi folk costumes and energetic dance forms during annual youth festival meets.',
    accentColor: 'border-l-[#8B1E2B]',
    src: '/images/campus_moments/talenthunt (8).jfif'
  },
  {
    id: 'r1-3',
    category: 'Digital Learning & IT',
    headline: 'Modern High-Tech Computer Laboratories',
    description: 'Advanced computing infrastructure providing hands-on practical software training and digital literacy for all disciplines.',
    accentColor: 'border-l-blue-600',
    src: '/images/campus_moments/comp-2.jpg'
  },
  {
    id: 'r1-4',
    category: 'Campus Leadership',
    headline: 'Student Council & Annual Merit Felicitation',
    description: 'Celebrating academic toppers, student council leaders, and extracurricular champions in grand institutional ceremonies.',
    accentColor: 'border-l-amber-500',
    src: '/images/campus_moments/475456153_923073919997710_6074902118805624071_n.jpg'
  },
  {
    id: 'r1-5',
    category: 'Sports & Athletics',
    headline: 'Annual Track & Field Championships',
    description: 'Sprawling 15-acre sports facilities nurturing championship athletes across sprint races, shot put, and relays.',
    accentColor: 'border-l-rose-600',
    src: '/images/campus_moments/sport (1).jpg'
  },
  {
    id: 'r1-6',
    category: 'NSS & Social Awareness',
    headline: 'Youth Awareness & Civic Action Rallies',
    description: 'NSS student volunteers spearheading community campaigns on health awareness, cleanliness drives, and ecological care.',
    accentColor: 'border-l-teal-600',
    src: '/images/campus_moments/rally (1).jfif'
  },
  {
    id: 'r1-7',
    category: 'Institutional Honors',
    headline: 'Principal & Faculty Excellence Awards',
    description: 'Recognizing pedagogical excellence, research contributions, and student mentorship under the college leadership.',
    accentColor: 'border-l-purple-600',
    src: '/images/campus_moments/641506174_1224837389821360_8180891415369026258_n.jpg'
  },
  {
    id: 'r1-8',
    category: 'Creative Arts & Theater',
    headline: 'Annual Talent Hunt & Stage Performances',
    description: 'Student artists expressing creativity through one-act plays, singing, classical music, and theater performances.',
    accentColor: 'border-l-[#8B1E2B]',
    src: '/images/campus_moments/talenthunt (3).jfif'
  }
];

const row2Moments = [
  {
    id: 'r2-1',
    category: 'Youth Leadership',
    headline: 'Student Development & Career Conclaves',
    description: 'Empowering students with interactive career counselling, resume workshops, and competitive examination coaching.',
    accentColor: 'border-l-indigo-600',
    src: '/images/campus_moments/642845158_1224836806488085_7552588767986684248_n.jpg'
  },
  {
    id: 'r2-2',
    category: 'Bhangra & Folk Vibrancy',
    headline: 'Electrifying Bhangra Demonstrations',
    description: 'Traditional Punjabi folk artists representing Government College Dera Bassi at university-level youth festivals.',
    accentColor: 'border-l-[#8B1E2B]',
    src: '/images/campus_moments/talenthunt (7).jfif'
  },
  {
    id: 'r2-3',
    category: 'Red Ribbon Club',
    headline: 'Mega Voluntary Blood Donation Drives',
    description: 'Dedicated community outreach programs saving lives and instilling noble humanitarian values in our youth.',
    accentColor: 'border-l-red-600',
    src: '/images/campus_moments/blood (2).jfif'
  },
  {
    id: 'r2-4',
    category: 'Smart Classrooms',
    headline: 'Interactive Technology-Enabled Classrooms',
    description: 'Audio-visual multimedia classrooms facilitating engaging lectures, digital presentations, and peer discussions.',
    accentColor: 'border-l-emerald-600',
    src: '/images/campus_moments/comp-1.jpg'
  },
  {
    id: 'r2-5',
    category: 'Fitness & Sports Club',
    headline: 'Inter-College Sports Competitions',
    description: 'Fostering teamwork, discipline, and healthy sportsmanship across inter-college athletics and team games.',
    accentColor: 'border-l-amber-600',
    src: '/images/campus_moments/sport (5).jfif'
  },
  {
    id: 'r2-6',
    category: 'Workshops & Skill Development',
    headline: 'Skill Enhancement & Vocational Training',
    description: 'Specialized hands-on skill workshops preparing students for competitive modern industry demands.',
    accentColor: 'border-l-blue-600',
    src: '/images/campus_moments/476869930_932807375691031_3843363186741320216_n.jpg'
  },
  {
    id: 'r2-7',
    category: 'Civic Outreach',
    headline: 'Environmental Preservation Campaigns',
    description: 'Eco-club and NSS initiatives promoting green energy, tree plantations, and water conservation awareness.',
    accentColor: 'border-l-green-600',
    src: '/images/campus_moments/rally (2).jfif'
  },
  {
    id: 'r2-8',
    category: 'Campus Environment',
    headline: 'Serene Botanical Lawns & Green Spaces',
    description: 'Lush, peaceful outdoor study areas surrounded by landscaped gardens, fostering calm and focused learning.',
    accentColor: 'border-l-teal-600',
    src: '/images/campus_moments/pic (3).jfif'
  }
];

// Quadruple arrays for true seamless infinite loop
const quadRow1 = [...row1Moments, ...row1Moments, ...row1Moments, ...row1Moments];
const quadRow2 = [...row2Moments, ...row2Moments, ...row2Moments, ...row2Moments];

const CampusLife = () => {
  const [isPaused, setIsPaused] = useState(false);
  const cardWidth = 380; // Card width in px
  const step = cardWidth; // Zero gap between images

  const baseIndex = row1Moments.length * 2; // Middle starting position (16)
  const [index1, setIndex1] = useState(baseIndex);
  const [index2, setIndex2] = useState(baseIndex);
  const [isTransitioning1, setIsTransitioning1] = useState(true);
  const [isTransitioning2, setIsTransitioning2] = useState(true);

  // Autoplay step slider: 2000ms transition + 1200ms pause hold (Total: 3200ms)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      // Top row scrolls to LEFT (index increments)
      setIndex1((prev) => prev + 1);
      // Bottom row scrolls to RIGHT (index decrements)
      setIndex2((prev) => prev - 1);
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Seamless Infinite Loop Wrap for Row 1 (Top: Leftward)
  useEffect(() => {
    if (index1 >= row1Moments.length * 3) {
      const timer = setTimeout(() => {
        setIsTransitioning1(false);
        setIndex1(baseIndex);
      }, 2000); // Trigger right after the 2000ms ease-in-out transition ends
      return () => clearTimeout(timer);
    } else if (!isTransitioning1) {
      const timer = setTimeout(() => setIsTransitioning1(true), 60);
      return () => clearTimeout(timer);
    }
  }, [index1, isTransitioning1, baseIndex]);

  // Seamless Infinite Loop Wrap for Row 2 (Bottom: Rightward)
  useEffect(() => {
    if (index2 <= row1Moments.length) {
      const timer = setTimeout(() => {
        setIsTransitioning2(false);
        setIndex2(baseIndex);
      }, 2000); // Trigger right after the 2000ms ease-in-out transition ends
      return () => clearTimeout(timer);
    } else if (!isTransitioning2) {
      const timer = setTimeout(() => setIsTransitioning2(true), 60);
      return () => clearTimeout(timer);
    }
  }, [index2, isTransitioning2, baseIndex]);

  const handlePrev = () => {
    setIndex1((prev) => prev - 1);
    setIndex2((prev) => prev + 1);
  };

  const handleNext = () => {
    setIndex1((prev) => prev + 1);
    setIndex2((prev) => prev - 1);
  };

  return (
    <section id="campus-life" className="py-24 bg-white relative overflow-hidden select-none border-b border-slate-200/80">
      
      {/* 1. SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FAF4E6] text-[#8B1E2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-[#EEDBBA]">
              <Sparkles size={13} className="text-[#C75B2A]" />
              <span>Vibrant Student Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 font-sans">
              Campus Life: <span className="text-[#8B1E2B]">Moments & Activities</span>
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2.5 max-w-2xl">
              Experience the non-stop energy, athletic spirit, cultural vibrancy, and academic discovery across our 15-acre sprawling green campus.
            </p>
          </div>

          {/* Controls: Play/Pause and Manual Arrows */}
          <div className="flex items-center gap-2.5 self-start sm:self-end">
            <button
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? "Play slider" : "Pause slider"}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#8B1E2B] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-200 active:scale-95 shadow-xs"
            >
              {isPaused ? <Play size={16} className="ml-0.5" /> : <Pause size={16} />}
            </button>

            <button
              onClick={handlePrev}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#8B1E2B] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-200 active:scale-95 shadow-xs"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#8B1E2B] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-200 active:scale-95 shadow-xs"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. FULL-WIDTH 2-ROW AUTOPLAY INFINITE SLIDER (Zero Image Gap, 10px Margin-Bottom on Row 1, 2000ms Ease-In-Out) */}
      <div 
        className="w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* ROW 1: Top Slider Scrolls to LEFT with 0 Gap, 10px Margin-Bottom & 2000ms Ease-In-Out */}
        <div className="w-full overflow-hidden mb-[10px]">
          <div 
            className="flex gap-0"
            style={{
              transform: `translateX(-${index1 * step}px)`,
              transition: isTransitioning1 ? 'transform 2000ms ease-in-out' : 'none'
            }}
          >
            {quadRow1.map((moment, idx) => (
              <div
                key={`r1-${idx}`}
                style={{ width: `${cardWidth}px` }}
                className="relative shrink-0 h-[210px] sm:h-[250px] md:h-[280px] bg-slate-900 overflow-hidden group select-none"
              >
                {/* Background Photo from 'All gcd image' collection */}
                <img
                  src={moment.src}
                  alt={moment.headline}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* HOVER OVERLAY CARD (Exact LPU Screenshot Match: White / Frosted Glass Backdrop with Accent Bar) */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-md p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-left whitespace-normal z-20">
                  
                  <div className={`border-l-4 ${moment.accentColor} pl-3.5`}>
                    <span className="block text-xs font-black uppercase tracking-wider text-[#8B1E2B] mb-1">
                      {moment.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display leading-snug">
                      {moment.headline}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mt-2.5 line-clamp-3">
                    {moment.description}
                  </p>

                  <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-[#8B1E2B] group-hover:underline">
                    <span>Explore Activity</span>
                    <ArrowRight size={12} />
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Bottom Slider Scrolls to RIGHT with 0 Gap & 2000ms Ease-In-Out */}
        <div className="w-full overflow-hidden">
          <div 
            className="flex gap-0"
            style={{
              transform: `translateX(-${index2 * step}px)`,
              transition: isTransitioning2 ? 'transform 2000ms ease-in-out' : 'none'
            }}
          >
            {quadRow2.map((moment, idx) => (
              <div
                key={`r2-${idx}`}
                style={{ width: `${cardWidth}px` }}
                className="relative shrink-0 h-[210px] sm:h-[250px] md:h-[280px] bg-slate-900 overflow-hidden group select-none"
              >
                {/* Background Photo from 'All gcd image' collection */}
                <img
                  src={moment.src}
                  alt={moment.headline}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* HOVER OVERLAY CARD (Exact LPU Screenshot Match: White / Frosted Glass Backdrop with Accent Bar) */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-md p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-left whitespace-normal z-20">
                  
                  <div className={`border-l-4 ${moment.accentColor} pl-3.5`}>
                    <span className="block text-xs font-black uppercase tracking-wider text-[#8B1E2B] mb-1">
                      {moment.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display leading-snug">
                      {moment.headline}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mt-2.5 line-clamp-3">
                    {moment.description}
                  </p>

                  <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-[#8B1E2B] group-hover:underline">
                    <span>Explore Activity</span>
                    <ArrowRight size={12} />
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Subtext */}
      <div className="max-w-4xl mx-auto text-center px-4 mt-8">
        <p className="text-xs text-slate-500">
          ✦ Hover over any moment to explore stories · Over 20+ active clubs, NSS units, sports teams, and cultural societies active on campus.
        </p>
      </div>

    </section>
  );
};

export default CampusLife;
