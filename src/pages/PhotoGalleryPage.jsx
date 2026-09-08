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
  Filter, 
  Camera, 
  Download,
  Calendar,
  Layers
} from 'lucide-react';

export default function PhotoGalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePhoto, setActivePhoto] = useState(null);

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'campus', label: 'Campus & Academics' },
    { key: 'sports', label: 'Sports & Athletics' },
    { key: 'cultural', label: 'Youth Festival & Culture' },
    { key: 'nss', label: 'NSS & Social Drives' }
  ];

  const photos = [
    {
      id: 1,
      src: '/images/slides/campus-main-buddha copy.jpg',
      title: 'Main Administrative & Academic Block',
      category: 'campus',
      date: 'Campus Life',
      description: 'Lush green lawns and the iconic main college building of Government College, Dera Bassi.'
    },
    {
      id: 2,
      src: '/images/campus_moments/comp-1.jpg',
      title: 'Advanced Computer Science Laboratory',
      category: 'campus',
      date: 'Academics',
      description: 'Students engaged in practical programming and IT coursework in the hi-tech lab.'
    },
    {
      id: 3,
      src: '/images/campus_moments/comp-2.jpg',
      title: 'Digital IT Workstations',
      category: 'campus',
      date: 'Academics',
      description: 'Air-conditioned computing centre supporting BCA and PGDCA digital studies.'
    },
    {
      id: 4,
      src: '/images/campus_moments/talenthunt (8).jfif',
      title: 'Annual Talent Hunt & Cultural Gala',
      category: 'cultural',
      date: 'Youth Festival',
      description: 'Collegiate students showcasing folk performances, theatrical skits, and traditional dance.'
    },
    {
      id: 5,
      src: '/images/campus_moments/talenthunt (7).jfif',
      title: 'Solo Singing & Folk Music Competitions',
      category: 'cultural',
      date: 'Youth Festival',
      description: 'Musical performances by talented college vocalists during the youth celebrations.'
    },
    {
      id: 6,
      src: '/images/campus_moments/talenthunt (4).jfif',
      title: 'Heritage & Traditional Art Contest',
      category: 'cultural',
      date: 'Cultural Event',
      description: 'Fine arts and traditional Punjabi heritage presentations by creative students.'
    },
    {
      id: 7,
      src: '/images/campus_moments/sport (1).jpg',
      title: 'Annual College Athletic Meet',
      category: 'sports',
      date: 'Athletic Meet',
      description: 'Track and field events, sprint races, and athletic competitions at the college sports ground.'
    },
    {
      id: 8,
      src: '/images/old_site/sport_20_3_.JPG',
      title: 'Inter-College Sports Championship',
      category: 'sports',
      date: 'Sports Meet',
      description: 'GCD athletes participating in university-level track events and tournament matches.'
    },
    {
      id: 9,
      src: '/images/old_site/sport_20_1_.jpg',
      title: 'Prize Distribution — Outstanding Players',
      category: 'sports',
      date: 'Annual Sports Day',
      description: 'Honouring state and national-level collegiate achievers in athletics and team sports.'
    },
    {
      id: 10,
      src: '/images/campus_moments/blood (2).jfif',
      title: 'Voluntary Blood Donation Camp',
      category: 'nss',
      date: 'NSS Outreach',
      description: 'NSS units organizing annual blood donation drives with PGIMER / Red Cross support.'
    },
    {
      id: 11,
      src: '/images/campus_moments/blood (3).jfif',
      title: 'Student Donors & Medical Assistance',
      category: 'nss',
      date: 'Social Service',
      description: 'Collegiate volunteers actively donating blood for regional health centres.'
    },
    {
      id: 12,
      src: '/images/campus_moments/rally (1).jfif',
      title: 'Social Awareness Community Rally',
      category: 'nss',
      date: 'Community Service',
      description: 'Student awareness campaign in Dera Bassi addressing environmental conservation and health.'
    },
    {
      id: 13,
      src: '/images/campus_moments/rally (2).jfif',
      title: 'Anti-Drug & Civic Responsibility Drive',
      category: 'nss',
      date: 'NSS Unit',
      description: 'NSS volunteers holding banners advocating civic duties, voter awareness, and drug-free youth.'
    },
    {
      id: 14,
      src: '/images/campus_moments/geo (1).jpg',
      title: 'Geography Cartography & Topography Lab',
      category: 'campus',
      date: 'Departmental Lab',
      description: 'Geography students performing topographical mapping, GIS surveys, and relief charts.'
    },
    {
      id: 15,
      src: '/images/campus_moments/cyber.jfif',
      title: 'Cyber Security & Digital Literacy Seminar',
      category: 'campus',
      date: 'Academic Workshop',
      description: 'Faculty and resource persons guiding students on cyber safety and digital literacy.'
    }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(p => p.category === activeCategory);

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
            <span className="text-[#F49D71] font-semibold">Photo Gallery</span>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F49D71] text-xs font-semibold tracking-wider uppercase mb-4">
              <Camera size={13} className="text-[#C75B2A]" />
              <span>Campus Memories & Institutional Milestones</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-display">
              Photo Gallery
            </h1>

            <p className="mt-4 sm:mt-5 text-lg sm:text-xl text-slate-200 font-normal leading-relaxed">
              Explore vibrant glimpses of campus life, athletic meets, cultural youth festivals, laboratory innovations, and community outreach.
            </p>

            {/* Gallery Selector Switcher Tabs */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-3">
              <Link
                to="/gallery"
                className="px-5 py-2.5 rounded-xl bg-[#C75B2A] text-white text-xs sm:text-sm font-bold shadow-md flex items-center gap-2"
              >
                <ImageIcon size={16} />
                <span>Photo Gallery</span>
              </Link>
              <Link
                to="/gallery/news"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
              >
                <Newspaper size={16} className="text-[#F49D71]" />
                <span>News Gallery (Press Clippings)</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GALLERY FILTERING & GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Category Filter Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C75B2A] block mb-1">
              Filter By Activity
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1D3F]">
              Explore Captured Moments
            </h2>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  activeCategory === cat.key
                    ? 'bg-[#0C1D3F] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img 
                    src={photo.src} 
                    alt={photo.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 text-[#0C1D3F] text-xs font-bold backdrop-blur-md shadow-xs">
                      <Maximize2 size={13} />
                      <span>View Full Size</span>
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0C1D3F]/80 text-white backdrop-blur-md border border-white/20">
                      {photo.date}
                    </span>
                  </div>
                </div>

                {/* Photo Description */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-[#0C1D3F] group-hover:text-[#C75B2A] transition-colors leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 pt-3">
                <span className="capitalize font-medium text-slate-500">GCD Campus Life</span>
                <span className="text-[#C75B2A] font-bold group-hover:underline">Enlarge →</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 3. LIGHTBOX MODAL */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0C1D3F]">
                  {activePhoto.title}
                </h3>
                <span className="text-xs text-[#C75B2A] font-semibold">
                  {activePhoto.date} · Government College Dera Bassi
                </span>
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                aria-label="Close photo view"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image */}
            <div className="p-2 sm:p-4 bg-slate-950 flex items-center justify-center overflow-auto max-h-[65vh]">
              <img 
                src={activePhoto.src} 
                alt={activePhoto.title} 
                className="max-w-full max-h-[60vh] object-contain rounded-lg"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 sm:p-6 bg-white border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                {activePhoto.description}
              </p>
              <button
                onClick={() => setActivePhoto(null)}
                className="px-5 py-2 rounded-xl bg-[#0C1D3F] text-white text-xs font-bold hover:bg-[#1B3A6B] transition-colors shrink-0"
              >
                Back to Gallery
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
