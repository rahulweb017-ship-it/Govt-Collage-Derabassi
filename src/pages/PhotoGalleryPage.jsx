import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  Image as ImageIcon, 
  Newspaper, 
  Maximize2, 
  X, 
  ChevronLeft, 
  Download
} from 'lucide-react';

const galleryImages = [
  "773492161_1362046919433739_3949821406479017097_n.jpg",
  "773981624_1362046949433736_8843859270155610838_n.jpg",
  "775201441_1362046886100409_4446176478394313608_n.jpg",
  "775259808_1362047432767021_2004982167574374757_n.jpg",
  "471151130_897568249214944_8328849279761937305_n.jpg",
  "475039282_919975386974230_1934722744345990612_n.jpg",
  "475107553_919975400307562_1009558683444390905_n.jpg",
  "475456153_923073919997710_6074902118805624071_n.jpg",
  "475482709_925680386403730_3639509373296332479_n.jpg",
  "475643771_923073773331058_2817507145000513625_n.jpg",
  "476616047_929331972705238_6052361536113736816_n.jpg",
  "476793206_932807069024395_225822591254432989_n.jpg",
  "476869930_932807375691031_3843363186741320216_n.jpg",
  "476905893_932807369024365_8788563188631497972_n.jpg",
  "477244393_932807372357698_1643794895627389240_n.jpg",
  "477318943_932807062357729_2993250966903255626_n.jpg",
  "481466094_948631344108634_5498008527960592922_n.jpg",
  "532202346_1070771168561317_229066116943025275_n.jpg",
  "532894590_1070770615228039_7189536687268036474_n.jpg",
  "532988164_1070770895228011_35375284899516119_n.jpg",
  "533016286_1070771038561330_5400447172707988414_n.jpg",
  "533542692_1070770468561387_6037955685776177824_n.jpg",
  "590654983_1156963079942125_5336330149051637037_n.jpg",
  "591268712_1156961756608924_204784242459002836_n.jpg",
  "641339826_1224835806488185_1442302230746092534_n.jpg",
  "641506174_1224837389821360_8180891415369026258_n.jpg",
  "642845158_1224836806488085_7552588767986684248_n.jpg",
  "642873238_1224837309821368_1830644472842992610_n.jpg",
  "643810503_1224837146488051_9059872649749608343_n.jpg",
  "643975829_1224835983154834_8181967577905549938_n.jpg",
  "644010472_1224837066488059_5714759355864812586_n.jpg",
  "773403016_1362047046100393_7062809402490303177_n.jpg",
  "blood (2).jfif",
  "blood (3).jfif",
  "comp-1.jpg",
  "comp-2.jpg",
  "comp-3.jpg",
  "cyber.jfif",
  "geo (1).jpg",
  "pic (3).jfif",
  "prif (1).jfif",
  "rally (1).jfif",
  "rally (2).jfif",
  "sport (1).jpg",
  "sport (5).jfif",
  "talenthunt (3).jfif",
  "talenthunt (4).jfif",
  "talenthunt (6).jfif",
  "talenthunt (7).jfif",
  "talenthunt (8).jfif",
  "tele (1).jfif",
  "tele (2).jfif"
];

export default function PhotoGalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const prevImage = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-800 font-sans selection:bg-[#C75B2A]/20 selection:text-[#0C1D3F]">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0C1D3F] text-white pt-10 sm:pt-14 pb-14 sm:pb-16 overflow-hidden border-b-4 border-[#C75B2A]">
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-display">
                Photo Gallery
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-200 font-light max-w-xl">
                Visual moments from Government College, Dera Bassi.
              </p>
            </div>

            {/* Quick Switcher Tabs */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/gallery"
                className="px-5 py-2.5 rounded-xl bg-[#C75B2A] text-white text-xs sm:text-sm font-bold shadow-md flex items-center gap-2"
              >
                <ImageIcon size={16} />
                <span>Photo Gallery ({galleryImages.length})</span>
              </Link>
              <Link
                to="/gallery/news"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
              >
                <Newspaper size={16} className="text-[#F49D71]" />
                <span>News Gallery</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PURE IMAGE GALLERY GRID (NO TEXT - ONLY IMAGES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {galleryImages.map((fileName, idx) => {
            const imgSrc = `/images/gallery%20image/${encodeURIComponent(fileName)}`;
            return (
              <div
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl bg-slate-200 border border-slate-200/80 cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={imgSrc}
                  alt={`Government College Dera Bassi Gallery ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle Hover Zoom Icon Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-[#0C1D3F] shadow-lg">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn select-none"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar Controls */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 text-white">
            <span className="text-xs sm:text-sm font-semibold bg-white/15 px-3 py-1.5 rounded-full backdrop-blur-md">
              {lightboxIndex + 1} / {galleryImages.length}
            </span>
            <button
              onClick={() => setLightboxIndex(null)}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors backdrop-blur-md"
              aria-label="Close image preview"
            >
              <X size={20} />
            </button>
          </div>

          {/* Left Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-3 sm:left-6 z-20 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Centered Image View */}
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/images/gallery%20image/${encodeURIComponent(galleryImages[lightboxIndex])}`}
              alt={`Gallery Image ${lightboxIndex + 1}`}
              className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-3 sm:right-6 z-20 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

    </div>
  );
}
