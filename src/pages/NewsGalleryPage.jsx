import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  Image as ImageIcon, 
  Newspaper, 
  Sparkles, 
  Maximize2, 
  X, 
  Calendar,
  ExternalLink,
  BookOpen,
  Award,
  Search
} from 'lucide-react';

export default function NewsGalleryPage() {
  const [activeClipping, setActiveClipping] = useState(null);

  const newsItems = [
    {
      id: 1,
      src: '/images/old_site/news_20_1_.jpeg',
      title: 'State Level Academic Recognition & Student Merit Awards',
      paper: 'Dainik Bhaskar / Jagbani',
      date: 'Press Coverage',
      summary: 'Government College Dera Bassi students secure top merit positions and felicitated by college faculty.'
    },
    {
      id: 2,
      src: '/images/old_site/news_20_2_.jpeg',
      title: 'Annual Athletic Meet & Inter-College Sports Trophies',
      paper: 'The Tribune / Punjabi Tribune',
      date: 'Sports Section',
      summary: 'Collegiate athletes claim state medals in track events, hammer throw, and sprint competitions.'
    },
    {
      id: 3,
      src: '/images/old_site/news_20_3_.jpeg',
      title: 'Mega Blood Donation Camp Organised by NSS Units',
      paper: 'Amar Ujala',
      date: 'Community Service',
      summary: 'Over 100 units of blood collected in collaboration with PGIMER Chandigarh and District Health Society.'
    },
    {
      id: 4,
      src: '/images/old_site/news_20_4_.jpeg',
      title: 'Seven-Day NSS Special Camp & Village Cleanliness Drive',
      paper: 'Punjab Kesari',
      date: 'Civic Outreach',
      summary: 'Volunteers engage in environmental preservation, health awareness, and tree plantation in adopted villages.'
    },
    {
      id: 5,
      src: '/images/old_site/news_20_5_.jpeg',
      title: 'Zonal Youth Festival: GCD Dramatic & Folk Dance Trophies',
      paper: 'Jagbani',
      date: 'Cultural Highlights',
      summary: 'College teams win accolades in Punjabi folk singing, theatre skits, and traditional heritage items.'
    },
    {
      id: 6,
      src: '/images/old_site/news_20_6_.jpeg',
      title: 'Career Guidance & Campus Placement Drive by Placement Cell',
      paper: 'Rozana Spokesman',
      date: 'Placements',
      summary: 'Leading regional enterprises and IT firms conduct interviews and recruit graduating students.'
    },
    {
      id: 7,
      src: '/images/old_site/news_20_7_.jpeg',
      title: 'Tree Plantation & Environmental Awareness Campaign',
      paper: 'Dainik Jagran',
      date: 'Green Campus',
      summary: 'Eco Club and college management plant saplings across the 14-acre institutional grounds.'
    },
    {
      id: 8,
      src: '/images/old_site/news_20_8_.jpeg',
      title: 'Seminar on National Education Policy (NEP 2020) & Skill Courses',
      paper: 'The Tribune',
      date: 'Education Forum',
      summary: 'Academic experts and faculty deliberate on modular credit banks and skill certificates.'
    },
    {
      id: 9,
      src: '/images/old_site/news_20_9_.jpeg',
      title: 'Anti-Drug Awareness Rally flagged off by Sub-Divisional Magistrate',
      paper: 'Punjab Times',
      date: 'Social Campaign',
      summary: 'Students march through Dera Bassi township holding banners promoting healthy lifestyles.'
    },
    {
      id: 10,
      src: '/images/old_site/news_20_10_.jpeg',
      title: 'Women Empowerment Workshop & Self-Defence Training',
      paper: 'Dainik Bhaskar',
      date: 'Women Cell',
      summary: 'Women Development Cell organizes self-defence and mental wellness training for female scholars.'
    },
    {
      id: 11,
      src: '/images/old_site/news_20_11_.jpeg',
      title: 'Commerce Department National Seminar on GST & Financial Literacy',
      paper: 'Financial Press',
      date: 'Academic Seminar',
      summary: 'Chartered Accountants and tax practitioners educate B.Com and M.Com students on contemporary fiscal laws.'
    },
    {
      id: 12,
      src: '/images/old_site/news_20_12_.jpeg',
      title: 'Science Exhibition & Robotics Demonstration by Physics & CS Depts',
      paper: 'Jagbani',
      date: 'Science Forum',
      summary: 'B.Sc. students demonstrate innovative experimental models, sensor kits, and ecological models.'
    },
    {
      id: 13,
      src: '/images/old_site/News1.jpeg',
      title: 'GCD Celebrates Golden Jubilee Milestone & 50 Years of Legacy',
      paper: 'Regional Press',
      date: 'Special Edition',
      summary: 'Alumni and dignitaries gather to honour the enduring public education service of the college since 1975.'
    },
    {
      id: 14,
      src: '/images/old_site/News2.jpg',
      title: 'NAAC Peer Team Re-Accreditation Cycle Review & Grade B++',
      paper: 'Higher Education Digest',
      date: 'Accreditation',
      summary: 'National Assessment and Accreditation Council commends the holistic institutional growth and infrastructure.'
    }
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-800 font-sans selection:bg-[#C75B2A]/20 selection:text-[#0C1D3F]">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0C1D3F] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 overflow-hidden border-b-4 border-[#C75B2A]">
        {/* Background Image with Institutional Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/slides/campus-main-buddha copy.jpg" 
            alt="Government College Dera Bassi Campus" 
            className="w-full h-full object-cover object-center scale-105 filter brightness-40 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1D3F]/95 via-[#0C1D3F]/90 to-[#0C1D3F]/80 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-phulkari-pattern opacity-10 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6 sm:mb-8 font-medium">
            <Link to="/" className="flex items-center gap-1 hover:text-[#F49D71] transition-colors">
              <Home size={15} />
              <span>Home</span>
            </Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-300">Gallery</span>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-[#F49D71] font-semibold">News Gallery</span>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F49D71] text-xs font-semibold tracking-wider uppercase mb-4">
              <Newspaper size={13} className="text-[#C75B2A]" />
              <span>Media Coverage & Print Archive</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-display">
              News Gallery
            </h1>

            <p className="mt-4 sm:mt-5 text-lg sm:text-xl text-slate-200 font-normal leading-relaxed">
              Official press reports, print clippings, and regional media coverage highlighting the achievements and community footprint of Government College, Dera Bassi.
            </p>

            {/* Gallery Selector Switcher Tabs */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-3">
              <Link
                to="/gallery"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
              >
                <ImageIcon size={16} className="text-[#F49D71]" />
                <span>Photo Gallery</span>
              </Link>
              <Link
                to="/gallery/news"
                className="px-5 py-2.5 rounded-xl bg-[#C75B2A] text-white text-xs sm:text-sm font-bold shadow-md flex items-center gap-2"
              >
                <Newspaper size={16} />
                <span>News Gallery (Press Clippings)</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NEWS CLIPPINGS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="mb-10 pb-6 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C75B2A] block mb-1">
            Media Archive
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1D3F]">
            Published Newspaper Articles & Clippings
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Click on any clipping to view the full newspaper scan in high resolution.
          </p>
        </div>

        {/* Clippings Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveClipping(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Clipping Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/95 text-[#0C1D3F] text-xs font-bold backdrop-blur-md shadow-xs">
                      <Maximize2 size={13} />
                      <span>Read Article</span>
                    </span>
                  </div>

                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0C1D3F]/85 text-white backdrop-blur-md border border-white/20">
                      {item.paper}
                    </span>
                  </div>
                </div>

                {/* Article Header & Summary */}
                <div className="p-5">
                  <div className="text-[10.5px] font-bold text-[#C75B2A] uppercase tracking-wider mb-1">
                    {item.date}
                  </div>
                  <h3 className="text-base font-bold text-[#0C1D3F] group-hover:text-[#C75B2A] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 pt-3">
                <span className="font-semibold text-slate-600">Print Media</span>
                <span className="text-[#C75B2A] font-bold group-hover:underline">Zoom Scans →</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 3. LIGHTBOX MODAL FOR FULL CLIPPING READING */}
      {activeClipping && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveClipping(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0C1D3F]">
                  {activeClipping.title}
                </h3>
                <span className="text-xs text-[#C75B2A] font-semibold">
                  Source: {activeClipping.paper} · Government College Dera Bassi Press Archive
                </span>
              </div>
              <button
                onClick={() => setActiveClipping(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                aria-label="Close news view"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image */}
            <div className="p-2 sm:p-4 bg-slate-900 flex items-center justify-center overflow-auto max-h-[65vh]">
              <img 
                src={activeClipping.src} 
                alt={activeClipping.title} 
                className="max-w-full max-h-[60vh] object-contain rounded-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-white border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                {activeClipping.summary}
              </p>
              <button
                onClick={() => setActiveClipping(null)}
                className="px-5 py-2 rounded-xl bg-[#0C1D3F] text-white text-xs font-bold hover:bg-[#1B3A6B] transition-colors shrink-0"
              >
                Back to News Gallery
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
