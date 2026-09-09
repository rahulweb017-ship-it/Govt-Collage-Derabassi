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

// 10 Curated Slideable Rows with 6–7 images each (4 original + 2–3 extra images per row)
const galleryRows = [
  // Row 1: Official Dignitary & VIP Escort (starts with the 4 user-selected photos + 3 extra related photos)
  [
    "773492161_1362046919433739_3949821406479017097_n.jpg",
    "773981624_1362046949433736_8843859270155610838_n.jpg",
    "775201441_1362046886100409_4446176478394313608_n.jpg",
    "775259808_1362047432767021_2004982167574374757_n.jpg",
    "773403016_1362047046100393_7062809402490303177_n.jpg",
    "641339826_1224835806488185_1442302230746092534_n.jpg",
    "641506174_1224837389821360_8180891415369026258_n.jpg"
  ],
  // Row 2: NAAC Accreditation & Peer Team Visit
  [
    "Handing over NAAC certificate by NAAC PEER Team 16-02-2024.JPG",
    "College staff with NAAC PEER team 16-02-2024.JPG",
    "Cultural Performance during NAAC visit 15-02-2024.JPG",
    "Youth Festival team with College principal.jpg",
    "475039282_919975386974230_1934722744345990612_n.jpg",
    "475107553_919975400307562_1009558683444390905_n.jpg",
    "475456153_923073919997710_6074902118805624071_n.jpg"
  ],
  // Row 3: Convocations, Alumni & Distinguished Guests
  [
    "Convocation Cheif Guest Maharani Parneet Kaur 30-04-2018 .jpg",
    "Convocation 30-04-2018 cheif guest maharani Parneet Kaur.jpg",
    "Alimni Meet 12-03-2022.JPG",
    "Boundary wall inaugration-made by donation recieved from idustry association dera bassi 20-12-2019 .jpg",
    "475482709_925680386403730_3639509373296332479_n.jpg",
    "475643771_923073773331058_2817507145000513625_n.jpg",
    "476616047_929331972705238_6052361536113736816_n.jpg"
  ],
  // Row 4: Cultural Celebrations, Folk Arts & Talent Hunt
  [
    "3Teej with Dolly Guleria 23-08-2019.jpg",
    "Teej with Dolly Guleria 23-08-2018.jpg",
    "talenthunt (3).jfif",
    "talenthunt (4).jfif",
    "talenthunt (6).jfif",
    "talenthunt (7).jfif",
    "talenthunt (8).jfif"
  ],
  // Row 5: Sports, Athletics & Annual Sports Meet
  [
    "sport (1).jpg",
    "sport (5).jfif",
    "476793206_932807069024395_225822591254432989_n.jpg",
    "476869930_932807375691031_3843363186741320216_n.jpg",
    "476905893_932807369024365_8788563188631497972_n.jpg",
    "477244393_932807372357698_1643794895627389240_n.jpg",
    "477318943_932807062357729_2993250966903255626_n.jpg"
  ],
  // Row 6: NSS, Social Campaigns & Blood Donation
  [
    "blood (2).jfif",
    "blood (3).jfif",
    "rally (1).jfif",
    "rally (2).jfif",
    "Nukkad Natak Yudh Nashian virudh 06-05-2025.jpg",
    "Sadbhawna Divas  20-08-2025.JPG"
  ],
  // Row 7: Computer Science Labs & Sciences
  [
    "comp-1.jpg",
    "comp-2.jpg",
    "comp-3.jpg",
    "cyber.jfif",
    "geo (1).jpg",
    "tele (1).jfif",
    "tele (2).jfif"
  ],
  // Row 8: Student Development, Career Workshops & National Days
  [
    "Workshop under scheme career counselling- pospectus of Television 04-03-2023.JPG",
    "Indipendence day 15-08-2025.jpeg",
    "pic (3).jfif",
    "prif (1).jfif",
    "471151130_897568249214944_8328849279761937305_n.jpg",
    "481466094_948631344108634_5498008527960592922_n.jpg"
  ],
  // Row 9: Academic Conferences & Campus Functions
  [
    "532202346_1070771168561317_229066116943025275_n.jpg",
    "532894590_1070770615228039_7189536687268036474_n.jpg",
    "532988164_1070770895228011_35375284899516119_n.jpg",
    "533016286_1070771038561330_5400447172707988414_n.jpg",
    "533542692_1070770468561387_6037955685776177824_n.jpg",
    "590654983_1156963079942125_5336330149051637037_n.jpg"
  ],
  // Row 10: Academic Displays & Interactive Student Life
  [
    "591268712_1156961756608924_204784242459002836_n.jpg",
    "642845158_1224836806488085_7552588767986684248_n.jpg",
    "642873238_1224837309821368_1830644472842992610_n.jpg",
    "643810503_1224837146488051_9059872649749608343_n.jpg",
    "643975829_1224835983154834_8181967577905549938_n.jpg",
    "644010472_1224837066488059_5714759355864812586_n.jpg"
  ]
];

// Flattened list for the full-screen lightbox navigation
const allGalleryImages = galleryRows.flat();

// Precompute cumulative starting offsets for each row
const rowOffsets = galleryRows.reduce((acc, row, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + galleryRows[i - 1].length);
  return acc;
}, []);

// Interactive Slideable Row Component with smooth scrolling & navigation arrows
function SlideableImageRow({ images, rowIndex, onImageClick }) {
  const rowRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const checkScroll = () => {
    if (!rowRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
    setCanScrollLeft(scrollLeft > 12);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 12);
  };

  useEffect(() => {
    checkScroll();
    const el = rowRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [images]);

  const handleScroll = (direction) => {
    if (!rowRef.current) return;
    const scrollAmount = rowRef.current.clientWidth * 0.75;
    rowRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e) => {
    if (!rowRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - rowRef.current.offsetLeft;
    scrollLeftStart.current = rowRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !rowRef.current) return;
    e.preventDefault();
    const x = e.pageX - rowRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    rowRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const offset = rowOffsets[rowIndex];

  return (
    <div className="relative group/row my-4 sm:my-6">
      {/* Left Navigation Arrow */}
      <button
        onClick={() => handleScroll('left')}
        disabled={!canScrollLeft}
        aria-label="Previous images"
        className={`absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0C1D3F]/85 hover:bg-[#C75B2A] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 shadow-xl ${
          canScrollLeft 
            ? 'opacity-85 group-hover/row:opacity-100 hover:scale-110 cursor-pointer' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={() => handleScroll('right')}
        disabled={!canScrollRight}
        aria-label="Next images"
        className={`absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0C1D3F]/85 hover:bg-[#C75B2A] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 shadow-xl ${
          canScrollRight 
            ? 'opacity-85 group-hover/row:opacity-100 hover:scale-110 cursor-pointer' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <ChevronRight size={24} />
      </button>

      {/* Slideable Row Track */}
      <div
        ref={rowRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
        className="flex gap-3.5 sm:gap-4 lg:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 px-1 scrollbar-none select-none active:cursor-grabbing cursor-grab"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((fileName, imgIdx) => {
          const globalIdx = offset + imgIdx;
          const imgSrc = `/images/gallery%20image/${encodeURIComponent(fileName)}`;
          return (
            <div
              key={fileName}
              onClick={() => onImageClick(globalIdx)}
              className="snap-start shrink-0 w-[260px] sm:w-[300px] md:w-[330px] lg:w-[355px] aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 border border-slate-200/80 shadow-xs hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer relative group/item"
            >
              <img
                src={imgSrc}
                alt={`College Campus Visual ${globalIdx + 1}`}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover group-hover/item:scale-106 transition-transform duration-500 ease-out"
              />

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3 pointer-events-none">
                <div className="w-8 h-8 rounded-full bg-white/85 backdrop-blur-md text-[#0C1D3F] flex items-center justify-center shadow-lg">
                  <Maximize2 size={15} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function PhotoGalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev > 0 ? prev - 1 : allGalleryImages.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev < allGalleryImages.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const prevImage = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : allGalleryImages.length - 1));
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev < allGalleryImages.length - 1 ? prev + 1 : 0));
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
                <span>Photo Gallery</span>
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

      {/* 2. SLIDEABLE ROWS GALLERY (PURE IMAGES - NO TEXT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="space-y-4 sm:space-y-6">
          {galleryRows.map((row, idx) => (
            <SlideableImageRow
              key={idx}
              images={row}
              rowIndex={idx}
              onImageClick={(globalIdx) => setLightboxIndex(globalIdx)}
            />
          ))}
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
              {lightboxIndex + 1} / {allGalleryImages.length}
            </span>
            <button
              onClick={() => setLightboxIndex(null)}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors backdrop-blur-md cursor-pointer"
              aria-label="Close image preview"
            >
              <X size={20} />
            </button>
          </div>

          {/* Left Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-3 sm:left-6 z-20 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 cursor-pointer"
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
              src={`/images/gallery%20image/${encodeURIComponent(allGalleryImages[lightboxIndex])}`}
              alt={`Gallery Image ${lightboxIndex + 1}`}
              className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-3 sm:right-6 z-20 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

    </div>
  );
}
