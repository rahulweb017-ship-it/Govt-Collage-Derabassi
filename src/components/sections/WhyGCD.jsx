import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const whyChooseCards = [
  {
    id: 'naac',
    title: 'NAAC Accredited Grade B++ Institution',
    description: 'Government College, Dera Bassi has achieved Grade B++ in Cycle 3 (2024), validating our high institutional standards and academic excellence.',
    badgeText: 'NAAC B++',
    badgeSubtext: 'NATIONAL ASSESSMENT & ACCREDITATION COUNCIL',
    link: '#recognition',
  },
  {
    id: 'university',
    title: 'Affiliated to Punjabi University & UGC Recognized',
    description: 'Recognized under Section 2(f) & 12(B) of the UGC Act 1956, offering recognized degrees with Punjabi University, Patiala.',
    badgeText: 'UGC & PUP',
    badgeSubtext: 'PUNJABI UNIVERSITY, PATIALA',
    link: '#about',
  },
  {
    id: 'digital',
    title: 'Integrated with NDLI & INFLIBNET Digital E-Learning',
    description: 'Empowering students through the National Digital Library of India (NDLI), INFLIBNET research portals, and smart computer labs.',
    badgeText: 'NDLI & INFLIBNET',
    badgeSubtext: 'NATIONAL DIGITAL REPOSITORY',
    link: '#services',
  },
  {
    id: 'scholarship',
    title: 'Subsidized Higher Education & Scholarships',
    description: 'Affordable government fee structure backed by Post-Matric Scholarships and state financial concessions for all deserving students.',
    badgeText: 'PUNJAB GOVT AID',
    badgeSubtext: 'POST-MATRIC & MERIT SCHOLARSHIPS',
    link: '#admissions',
  },
  {
    id: 'sports',
    title: 'Championship Sports, NCC & NSS Units',
    description: 'Sprawling 15-acre sports complex, gymnasium, and active NSS & NCC wings training youth for state leadership and defense careers.',
    badgeText: 'SPORTS & NCC',
    badgeSubtext: 'ANNUAL ATHLETICS & ZONAL LAURELS',
    link: '#campus-life',
  },
  {
    id: 'dastak',
    title: 'Dastak Programme — Best Institutional Practice',
    description: 'A signature student-principal weekly dialogue fostering open communication, active grievance redressal, and personal mentorship.',
    badgeText: 'DASTAK FORUM',
    badgeSubtext: 'STUDENT-PRINCIPAL MENTORSHIP',
    link: '#recognition',
  }
];

const WhyGCD = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Responsive cards per slide view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(whyChooseCards.length / cardsPerPage);

  // Auto slide by page
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, 5000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [totalPages, isPaused]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <section 
      id="why-gcd" 
      className="py-24 bg-[#F8F9FC] relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER (Exact UGI Style with Left Red Accent Bar) */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-1.5 h-8 bg-[#8B1E2B] rounded-full inline-block" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 font-sans uppercase">
              WHY CHOOSE <span className="text-[#8B1E2B]">GCD?</span>
            </h2>
          </div>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4 max-w-3xl mx-auto">
            At Government College Dera Bassi, we offer world-class holistic education, government-subsidized degree programs, robust university affiliations, and exceptional academic and career opportunities.
          </p>
        </div>

        {/* SLIDER WRAPPER */}
        <div className="relative px-2 sm:px-12">
          
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide Group"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-xl border border-slate-200 text-slate-700 hover:text-[#8B1E2B] hover:border-[#8B1E2B] flex items-center justify-center transition-all duration-200 active:scale-95 hover:scale-105"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Slide Group"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-xl border border-slate-200 text-slate-700 hover:text-[#8B1E2B] hover:border-[#8B1E2B] flex items-center justify-center transition-all duration-200 active:scale-95 hover:scale-105"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Viewport Container */}
          <div className="overflow-hidden py-4">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentPage * 100}%)`
              }}
            >
              {whyChooseCards.map((card) => (
                <div
                  key={card.id}
                  className="shrink-0 px-3 sm:px-4"
                  style={{ width: `${100 / cardsPerPage}%` }}
                >
                  <div className="bg-white rounded-xl p-8 sm:p-9 shadow-md hover:shadow-2xl border border-slate-100 transition-all duration-300 flex flex-col justify-between items-center text-center group hover:-translate-y-2 h-full min-h-[430px]">
                    
                    {/* Top Quotation Mark in Maroon (Clean UGI SVG Quotes) */}
                    <div className="mb-3 flex justify-center text-[#8B1E2B]">
                      <svg className="w-8 h-8 fill-current opacity-90" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display leading-snug group-hover:text-[#8B1E2B] transition-colors min-h-[52px] flex items-center justify-center">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 flex-1">
                      {card.description}
                    </p>

                    {/* Brand Logo / Badge Area */}
                    <div className="my-5 py-3 px-4 bg-slate-50 group-hover:bg-[#FFF6F4] rounded-lg border border-slate-100 transition-colors w-full flex flex-col items-center justify-center min-h-[60px]">
                      <div className="flex items-center gap-2">
                        <img 
                          src="/images/old_site/logo.png" 
                          alt="GCD Emblem" 
                          className="w-5 h-5 object-contain opacity-90"
                        />
                        <span className="font-bold text-xs tracking-wider text-[#8B1E2B] uppercase">
                          {card.badgeText}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium tracking-tight mt-0.5 uppercase line-clamp-1">
                        {card.badgeSubtext}
                      </span>
                    </div>

                    {/* Bottom Red 'Read More' Link */}
                    <a
                      href={card.link}
                      className="text-[#8B1E2B] hover:text-[#C75B2A] text-xs sm:text-sm font-bold tracking-wide transition-colors inline-flex items-center group-hover:underline underline-offset-4"
                    >
                      <span>Read More</span>
                    </a>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Slide Indicator Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                aria-label={`Go to slide page ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentPage 
                    ? 'w-8 bg-[#8B1E2B]' 
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyGCD;
