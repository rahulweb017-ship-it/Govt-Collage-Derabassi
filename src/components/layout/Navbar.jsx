import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ChevronDown, 
  Facebook, 
  Instagram, 
  Youtube,
  ExternalLink,
  Shield,
  Users,
  Download,
  FileText,
  ChevronRight
} from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '/', hasChevron: false },
  
  // 1. ABOUT US (4 sub-items requested)
  { 
    label: 'ABOUT US', 
    href: '/about/overview',
    hasChevron: true,
    children: [
      { label: 'Campus & Departments Overview', href: '/about/overview' },
      { label: 'Academic Calendar', href: '/about/calendar' },
      { label: 'Latest NAAC Report', href: '/about/naac-report' },
      { label: 'Vision & Mission', href: '/about/vision-mission' }
    ]
  },

  // 2. ACADEMICS (5 sub-items requested)
  { 
    label: 'ACADEMICS', 
    href: '/academics/departments-faculty',
    hasChevron: true,
    children: [
      { label: 'Departments & Faculty', href: '/academics/departments-faculty' },
      { label: 'Courses Offered', href: '/academics/courses-offered' },
      { 
        label: 'Latest Syllabus', 
        href: '#',
        hasSubmenu: true,
        subChildren: [
          { label: 'For Punjabi University Patiala Courses', href: 'https://punjabiuniversity.ac.in/indexSyllabi.aspx', isExternal: true },
          { label: 'For Jagat Guru Nanak Dev PSOU Patiala Courses', href: 'https://psou.ac.in/admission/admission_coursess/skill-building-stc', isExternal: true }
        ]
      },
      { label: 'NEP Guidelines', href: '/academics/nep-guidelines' },
      { label: 'Distance Learning (Private Course Guidelines)', href: '/academics/distance-learning' }
    ]
  },

  // 3. STUDENTS (New dropdown menu with 4 sub-items requested)
  { 
    label: 'STUDENTS', 
    href: '/students/admission-rules',
    hasChevron: true,
    children: [
      { label: 'Admission (Punjabi University Portal)', href: 'https://admission.punjab.gov.in', isExternal: true },
      { label: 'Admission Rules', href: '/students/admission-rules' },
      { label: 'Anti-Ragging Portal', href: 'https://www.antiragging.in', isExternal: true },
      { label: 'Anti-Ragging & Harassment Cell', href: '/students/anti-ragging' }
    ]
  },

  // 4. EXAMINATIONS (New dropdown menu with 4 sub-items requested)
  { 
    label: 'EXAMINATIONS', 
    href: '/examinations/date-sheets',
    hasChevron: true,
    children: [
      { label: 'Date Sheets', href: '/examinations/date-sheets' },
      { label: 'Results', href: '/examinations/results' },
      { label: 'Examination Form', href: '/examinations/form' },
      { label: 'Admit Card Download', href: '/examinations/admit-card' }
    ]
  },

  // 5. INFRASTRUCTURE (New dropdown menu with 3 sub-items requested)
  { 
    label: 'INFRASTRUCTURE', 
    href: '/infrastructure/physical',
    hasChevron: true,
    children: [
      { label: 'Library Infrastructure', href: '/infrastructure/library' },
      { label: 'IT Facilities', href: '/infrastructure/it-facilities' },
      { label: 'Physical Infrastructure', href: '/infrastructure/physical' }
    ]
  },

  // Preserved institutional sections
  { 
    label: 'EXTRA CURRICULAR', 
    href: '#campus-life',
    hasChevron: true,
    children: [
      { label: 'Sports Complex & Athletic Grounds', href: '#campus-life' },
      { label: 'National Service Scheme (NSS Units)', href: '#campus-life' },
      { label: 'National Cadet Corps (NCC Army Wing)', href: '#campus-life' },
      { label: 'Cultural Activities & Youth Festivals', href: '#campus-life' },
      { label: 'Red Ribbon Club & Blood Donation', href: '#campus-life' }
    ]
  },
  { 
    label: 'IQAC/NAAC', 
    href: '#recognition',
    hasChevron: true,
    children: [
      { label: 'NAAC Accreditation (Cycle 3 Grade B++)', href: '#recognition' },
      { label: 'Internal Quality Assurance Cell (IQAC)', href: '#recognition' },
      { label: 'UGC 2(f) & 12(B) Recognition', href: '#recognition' },
      { label: 'Institutional Best Practice (Dastak)', href: '#recognition' }
    ]
  },
  { label: 'NIRF', href: '#recognition', hasChevron: false },
  { label: 'GALLERY', href: '#campus-life', hasChevron: false },
  { label: 'CONTACT US', href: '#contact', hasChevron: false },

  // PROSPECTUS (Always highlighted with white background, placed as last option after CONTACT US)
  { 
    label: 'PROSPECTUS', 
    href: '/prospectus',
    hasChevron: true,
    isWhiteHighlight: true,
    children: [
      { label: 'Prospectus 2026-27', href: '/images/prospectus/Prospectus-GCDB-2026-27.pdf', isDownload: true, size: '3.3 MB', isLatest: true },
      { label: 'Prospectus 2025-26', href: '/images/prospectus/Prospectus%202025-26.pdf', isDownload: true, size: '2.9 MB' },
      { label: 'Prospectus 2024-25', href: '/images/prospectus/Prospectus%202024-25.pdf', isDownload: true, size: '2.5 MB' },
      { label: 'Prospectus 2023-24', href: '/images/prospectus/Prospectus%202023-24.pdf', isDownload: true, size: '2.5 MB' },
      { label: 'Prospectus 2022-23', href: '/images/prospectus/PROSPECTUS%202022-23%20GCDeraBassi.pdf', isDownload: true, size: '4.4 MB' },
      { label: 'Prospectus 2021-22', href: '/images/prospectus/Prospectus%202021-22%20Govt%20College%20Dera%20Bassi.pdf', isDownload: true, size: '8.5 MB' },
      { label: 'Prospectus 2020-21', href: '/images/prospectus/Prospectus2020-21.pdf', isDownload: true, size: '57.1 MB' }
    ]
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);

    let observer = null;
    if (typeof ResizeObserver !== 'undefined' && headerRef.current) {
      observer = new ResizeObserver(() => {
        updateHeight();
      });
      observer.observe(headerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateHeight);
      if (observer) observer.disconnect();
    };
  }, []);

  const toggleMobileSubmenu = (label) => {
    setMobileExpanded(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  // Determine which tab is active
  const getActiveTab = () => {
    const p = location.pathname;
    if (p.startsWith('/about')) return 'ABOUT US';
    if (p.startsWith('/academics')) return 'ACADEMICS';
    if (p.startsWith('/students')) return 'STUDENTS';
    if (p.startsWith('/prospectus')) return 'PROSPECTUS';
    if (p.startsWith('/examinations')) return 'EXAMINATIONS';
    if (p.startsWith('/infrastructure')) return 'INFRASTRUCTURE';
    if (location.hash === '#campus-life') return 'EXTRA CURRICULAR';
    if (location.hash === '#recognition') return 'IQAC/NAAC';
    if (location.hash === '#contact') return 'CONTACT US';
    return 'HOME';
  };

  const currentActiveTab = getActiveTab();

  return (
    <>
      {/* FIXED / STICKY HEADER (Entire Header remains pinned to top on scroll) */}
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-white font-sans shadow-md select-none transition-all duration-300">
        
        {/* 1. TOP WHITE HEADER SECTION (100% Full Width) */}
        <div className={`w-full px-3 sm:px-6 lg:px-8 xl:px-10 transition-all duration-300 ${
          isScrolled ? 'py-1.5 sm:py-2' : 'py-2 sm:py-3'
        }`}>
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Left: College Crest Logo (Large & Clear) & 3-Line Multilingual College Title */}
            <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 min-w-0">
              <Link to="/" className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 group shrink-0 py-1">
                <img 
                  src="/images/old_site/logo.png" 
                  alt="Government College Dera Bassi Crest" 
                  className={`object-contain shrink-0 transition-all duration-300 filter drop-shadow-xs ${
                    isScrolled 
                      ? 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-22 lg:h-22' 
                      : 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-30 xl:h-30'
                  }`}
                />
                <div className="flex flex-col justify-center min-w-0">
                  {/* Gurmukhi College Name */}
                  <span className="font-gurmukhi text-[#8B1E2B] font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight tracking-wide whitespace-nowrap">
                    ਸਰਕਾਰੀ ਕਾਲਜ ਡੇਰਾ ਬੱਸੀ
                  </span>
                  {/* English College Name */}
                  <span className="font-sans font-black text-[#0C1D3F] text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl tracking-tight leading-tight uppercase whitespace-nowrap mt-0.5">
                    GOVERNMENT COLLEGE DERA BASSI
                  </span>
                  {/* Affiliation Subtext */}
                  <span className="text-[9.5px] sm:text-[11px] md:text-xs text-slate-600 font-semibold leading-normal tracking-normal whitespace-nowrap mt-0.5">
                    Affiliated to Punjabi University, Patiala · AISHE: C-22140
                  </span>
                </div>
              </Link>
            </div>

            {/* Middle: G20 India Official Emblem */}
            <div className="hidden xl:flex items-center justify-center shrink-0 px-2">
              <img 
                src="/images/old_site/g20-image.png" 
                alt="G20 India 2023 Official Emblem" 
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'h-9 sm:h-10' : 'h-12 sm:h-14'
                }`}
              />
            </div>

            {/* Right: Two-Tier Layout (Top: Contact Info & Socials | Bottom: 3 Action Buttons) */}
            <div className="hidden lg:flex flex-col items-end space-y-2 shrink-0">
              
              {/* Tier 1: Phone, Email, Social Icons */}
              <div className="flex items-center space-x-4 text-xs text-[#8B1E2B]">
                {/* Phone */}
                <a 
                  href="tel:01762295167" 
                  className="flex items-center space-x-1.5 font-bold hover:text-[#5B101B] transition-colors"
                >
                  <Phone size={13} className="fill-current text-[#8B1E2B]" />
                  <span className="text-slate-800 font-bold text-[12.5px] tracking-tight">01762-295167</span>
                </a>

                {/* Email */}
                <a 
                  href="mailto:gcderabassi@gmail.com" 
                  className="flex items-center space-x-1.5 font-medium hover:text-[#5B101B] transition-colors"
                >
                  <Mail size={14} className="text-[#8B1E2B]" />
                  <span className="text-[#8B1E2B] font-semibold text-[12.5px]">gcderabassi@gmail.com</span>
                </a>

                {/* Social Icons */}
                <div className="flex items-center space-x-1.5 text-slate-700 pl-1">
                  <a 
                    href="#" 
                    aria-label="Facebook" 
                    className="w-5 h-5 rounded border border-slate-700 flex items-center justify-center hover:text-[#8B1E2B] hover:border-[#8B1E2B] transition-colors"
                  >
                    <Facebook size={11} />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Instagram" 
                    className="w-5 h-5 rounded border border-slate-700 flex items-center justify-center hover:text-[#8B1E2B] hover:border-[#8B1E2B] transition-colors"
                  >
                    <Instagram size={11} />
                  </a>
                  <a 
                    href="#" 
                    aria-label="YouTube" 
                    className="w-5 h-5 rounded border border-slate-700 flex items-center justify-center hover:text-[#8B1E2B] hover:border-[#8B1E2B] transition-colors"
                  >
                    <Youtube size={11} />
                  </a>
                </div>
              </div>

              {/* Tier 2: The 3 Action Buttons */}
              <div className="flex items-center space-x-1.5 xl:space-x-2">
                {/* 1. ONLINE ADMISSION PORTAL */}
                <a
                  href="https://admission.punjab.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#D25C2B] hover:bg-[#B84E22] text-white font-bold text-[10px] xl:text-[10.5px] px-2.5 py-1.5 rounded flex items-center gap-1.5 transition-colors uppercase tracking-wide shadow-2xs"
                >
                  <span>ONLINE ADMISSION PORTAL</span>
                  <ExternalLink size={10} />
                </a>

                {/* 2. ANTI-RAGGING PORTAL */}
                <a
                  href="https://www.antiragging.in"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#8B1E2B] hover:bg-[#68141F] text-white font-bold text-[10px] xl:text-[10.5px] px-2.5 py-1.5 rounded flex items-center gap-1.5 transition-colors uppercase tracking-wide shadow-2xs"
                >
                  <Shield size={10} className="fill-current" />
                  <span>ANTI-RAGGING PORTAL</span>
                  <ExternalLink size={10} />
                </a>

                {/* 3. ANTI-RAGGING CELL & WOMEN/SEXUAL HARASSMENT CELL */}
                <Link
                  to="/students/anti-ragging"
                  className="bg-[#0C1D3F] hover:bg-[#162E5F] text-white font-bold text-[10px] xl:text-[10.5px] px-2.5 py-1.5 rounded flex items-center gap-1.5 transition-colors uppercase tracking-wide shadow-2xs"
                >
                  <Users size={10} />
                  <span>ANTI-RAGGING CELL & WOMEN/SEXUAL HARASSMENT CELL</span>
                </Link>
              </div>

            </div>

            {/* Mobile Controls (Hamburger & Apply CTA) */}
            <div className="lg:hidden flex items-center space-x-2 shrink-0">
              <a
                href="https://admission.punjab.gov.in"
                target="_blank"
                rel="noreferrer"
                className="bg-[#D25C2B] text-white text-[10px] sm:text-[11px] uppercase font-bold px-2.5 py-1 rounded shadow-xs"
              >
                Admission
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#8B1E2B] hover:text-[#5B101B] p-1.5 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

          </div>
        </div>

        {/* 2. FULL-WIDTH CRIMSON RED MENU BAR WITH ALL 5 DROPDOWNS */}
        <div className="w-full bg-[#8B1E2B] text-white shadow-sm border-t border-[#73121F]">
          <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-10">
            
            {/* Desktop Navigation Links Row */}
            <nav className="hidden lg:flex items-center justify-between whitespace-nowrap overflow-visible">
              <div className="flex items-center w-full justify-between">
                {navItems.map((item) => {
                  const isActive = currentActiveTab === item.label;

                  return (
                    <div 
                      key={item.label} 
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.href.startsWith('/') ? (
                        <Link
                          to={item.href}
                          className={`text-[10.5px] xl:text-[11.5px] 2xl:text-[12.5px] font-black uppercase tracking-wider flex items-center gap-1 py-2.5 px-1.5 xl:px-2.5 2xl:px-3 transition-colors ${
                            item.isWhiteHighlight
                              ? 'bg-white text-[#8B1E2B] font-black hover:bg-slate-100 shadow-sm border-b-2 border-[#8B1E2B]'
                              : isActive 
                                ? 'bg-black text-[#F5BD02] font-black hover:bg-neutral-900 shadow-inner' 
                                : 'text-white hover:bg-[#68141F]'
                          }`}
                        >
                          <span>{item.label}</span>
                          {item.hasChevron && (
                            <ChevronDown 
                              size={12} 
                              className={`${item.isWhiteHighlight ? 'text-[#8B1E2B]' : 'opacity-90'} group-hover:opacity-100 transition-transform duration-200 group-hover:rotate-180 ml-0.5 shrink-0`} 
                            />
                          )}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className={`text-[10.5px] xl:text-[11.5px] 2xl:text-[12.5px] font-black uppercase tracking-wider flex items-center gap-1 py-2.5 px-1.5 xl:px-2.5 2xl:px-3 transition-colors ${
                            item.isWhiteHighlight
                              ? 'bg-white text-[#8B1E2B] font-black hover:bg-slate-100 shadow-sm border-b-2 border-[#8B1E2B]'
                              : isActive 
                                ? 'bg-black text-[#F5BD02] font-black hover:bg-neutral-900 shadow-inner' 
                                : 'text-white hover:bg-[#68141F]'
                          }`}
                        >
                          <span>{item.label}</span>
                          {item.hasChevron && (
                            <ChevronDown 
                              size={12} 
                              className={`${item.isWhiteHighlight ? 'text-[#8B1E2B]' : 'opacity-90'} group-hover:opacity-100 transition-transform duration-200 group-hover:rotate-180 ml-0.5 shrink-0`} 
                            />
                          )}
                        </a>
                      )}

                      {/* Dropdown Menu (Style matched to site with clean hover effects) */}
                      {item.children && (
                        <div className={`absolute top-full ${item.label === 'PROSPECTUS' ? 'right-0' : 'left-0'} ${item.isWhiteHighlight ? 'min-w-[340px]' : 'min-w-[280px]'} bg-white text-slate-800 rounded-b-lg shadow-2xl border border-slate-100 py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50`}>
                          {item.children.map((child, idx) => (
                            child.subChildren ? (
                              <div key={idx} className="relative group/sub border-b border-slate-50 last:border-0">
                                <div
                                  className="px-4 py-2.5 text-xs text-slate-700 hover:bg-[#FAF4E6] hover:text-[#8B1E2B] font-semibold transition-colors flex items-center justify-between cursor-pointer select-none"
                                >
                                  <span>{child.label}</span>
                                  <ChevronRight size={13} className="text-slate-400 group-hover/sub:text-[#8B1E2B] group-hover/sub:translate-x-0.5 transition-all shrink-0 ml-2" />
                                </div>

                                {/* Flyout Submenu */}
                                <div className="absolute left-full top-0 min-w-[340px] bg-white text-slate-800 rounded-lg shadow-2xl border border-slate-100 py-1.5 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 transform -translate-x-1 group-hover/sub:translate-x-0 z-50">
                                  {child.subChildren.map((subItem, sIdx) => (
                                    <a
                                      key={sIdx}
                                      href={subItem.href}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="block px-4 py-2.5 text-xs text-slate-700 hover:bg-[#FAF4E6] hover:text-[#8B1E2B] font-semibold transition-colors border-b border-slate-50 last:border-0 flex items-center justify-between"
                                    >
                                      <span className="leading-snug">{subItem.label}</span>
                                      <ExternalLink size={12} className="text-slate-400 shrink-0 ml-2" />
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ) : child.isDownload ? (
                              <a
                                key={idx}
                                href={child.href}
                                download
                                target="_blank"
                                rel="noreferrer"
                                className="block px-4 py-2.5 text-xs text-slate-700 hover:bg-[#FAF4E6] hover:text-[#8B1E2B] font-semibold transition-colors border-b border-slate-100 last:border-0 flex items-center justify-between group/dl"
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <FileText size={13} className="text-[#8B1E2B] shrink-0" />
                                  <span className="truncate">{child.label}</span>
                                </div>
                                <span className="text-[11px] font-bold text-[#4D7C0F] group-hover/dl:text-[#365314] flex items-center gap-1 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 shrink-0 ml-2">
                                  <Download size={11} />
                                  <span>Download</span>
                                </span>
                              </a>
                            ) : child.isExternal || child.href.startsWith('http') ? (
                              <a
                                key={idx}
                                href={child.href}
                                target="_blank"
                                rel="noreferrer"
                                className="block px-4 py-2.5 text-xs text-slate-700 hover:bg-[#FAF4E6] hover:text-[#8B1E2B] font-semibold transition-colors border-b border-slate-50 last:border-0 flex items-center justify-between"
                              >
                                <span>{child.label}</span>
                                <ExternalLink size={12} className="text-slate-400 shrink-0 ml-2" />
                              </a>
                            ) : child.href.startsWith('#') ? (
                              <a
                                key={idx}
                                href={child.href}
                                className="block px-4 py-2.5 text-xs text-slate-700 hover:bg-[#FAF4E6] hover:text-[#8B1E2B] font-semibold transition-colors border-b border-slate-50 last:border-0"
                              >
                                {child.label}
                              </a>
                            ) : (
                              <Link
                                key={idx}
                                to={child.href}
                                className="block px-4 py-2.5 text-xs text-slate-700 hover:bg-[#FAF4E6] hover:text-[#8B1E2B] font-semibold transition-colors border-b border-slate-50 last:border-0"
                              >
                                {child.label}
                              </Link>
                            )
                          ))}

                          {item.label === 'PROSPECTUS' && (
                            <Link
                              to="/prospectus"
                              className="block px-4 py-2 text-center text-[11px] font-bold text-[#8B1E2B] bg-slate-50 hover:bg-[#FAF4E6] transition-colors border-t border-slate-100"
                            >
                              View All Prospectus Archive →
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </nav>

            {/* Mobile Menu Strip */}
            <div className="lg:hidden flex items-center justify-between py-2 text-xs font-bold uppercase tracking-wider">
              <span className="text-white flex items-center gap-1.5">
                <Menu size={15} />
                <span>Menu & Dropdowns</span>
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white/90 hover:text-white text-[11px] underline underline-offset-2"
              >
                {isMobileMenuOpen ? 'Hide Menu ▲' : 'All Links & Portals ▼'}
              </button>
            </div>

          </div>
        </div>

        {/* 3. MOBILE MENU SLIDE-DOWN ACCORDION DRAWER */}
        <div className={`lg:hidden bg-white border-b border-slate-200 shadow-2xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[85vh] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-4 space-y-3">
            
            {/* Contact Details on Mobile */}
            <div className="flex flex-col space-y-1 pb-3 border-b border-slate-100 text-xs">
              <a href="tel:01762295167" className="flex items-center space-x-2 text-[#8B1E2B] font-bold">
                <Phone size={13} />
                <span>01762-295167</span>
              </a>
              <a href="mailto:gcderabassi@gmail.com" className="flex items-center space-x-2 text-slate-600 font-medium">
                <Mail size={13} />
                <span>gcderabassi@gmail.com</span>
              </a>
            </div>

            {/* The 3 Action Buttons in Mobile Drawer */}
            <div className="space-y-2 pb-3 border-b border-slate-200">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                Official Portals & Cells:
              </span>
              <a
                href="https://admission.punjab.gov.in"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-[#D25C2B] text-white py-2 rounded font-bold uppercase text-xs tracking-wider shadow-2xs"
              >
                Online Admission Portal &rarr;
              </a>
              <a
                href="https://www.antiragging.in"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-[#8B1E2B] text-white py-2 rounded font-bold uppercase text-xs tracking-wider shadow-2xs"
              >
                Anti-Ragging Portal &rarr;
              </a>
              <Link
                to="/students/anti-ragging"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-[#0C1D3F] text-white py-2 rounded font-bold uppercase text-xs tracking-wider shadow-2xs"
              >
                Anti-Ragging Cell & Women/Sexual Harassment Cell
              </Link>
            </div>

            {/* Nav Items Accordion List on Mobile */}
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-slate-100 last:border-0">
                  <div className="flex items-center justify-between py-2">
                    {item.href.startsWith('/') ? (
                      <Link
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-xs sm:text-sm font-bold ${
                          item.isWhiteHighlight
                            ? 'text-[#8B1E2B] bg-[#FAF4E6] px-2.5 py-1 rounded border border-[#EADBBD]'
                            : currentActiveTab === item.label ? 'text-[#8B1E2B]' : 'text-slate-800 hover:text-[#8B1E2B]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-xs sm:text-sm font-bold ${
                          item.isWhiteHighlight
                            ? 'text-[#8B1E2B] bg-[#FAF4E6] px-2.5 py-1 rounded border border-[#EADBBD]'
                            : currentActiveTab === item.label ? 'text-[#8B1E2B]' : 'text-slate-800 hover:text-[#8B1E2B]'
                        }`}
                      >
                        {item.label}
                      </a>
                    )}

                    {item.children && (
                      <button
                        onClick={() => toggleMobileSubmenu(item.label)}
                        className="p-1.5 text-slate-500 hover:text-[#8B1E2B]"
                        aria-label={`Expand ${item.label} submenu`}
                      >
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            mobileExpanded[item.label] ? 'rotate-180 text-[#8B1E2B]' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Accordion Submenu */}
                  {item.children && mobileExpanded[item.label] && (
                    <div className="pl-3 pb-2 space-y-1 bg-slate-50 rounded p-2 mb-2 animate-fadeIn">
                      {item.children.map((sub, sIdx) => (
                        sub.subChildren ? (
                          <div key={sIdx} className="border-b border-slate-200/60 pb-2 mb-1.5 last:border-0">
                            <div className="flex items-center justify-between py-1.5 text-xs font-bold text-slate-800">
                              <span className="flex items-center gap-1.5">
                                • {sub.label}
                              </span>
                              <span className="text-[10px] text-[#8B1E2B] font-bold bg-[#FAF4E6] px-2 py-0.5 rounded border border-[#8B1E2B]/20">
                                2 Options
                              </span>
                            </div>
                            <div className="pl-3.5 mt-1 space-y-1.5 border-l-2 border-[#8B1E2B]/40">
                              {sub.subChildren.map((subItem, siIdx) => (
                                <a
                                  key={siIdx}
                                  href={subItem.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block py-1 text-[11px] text-slate-600 hover:text-[#8B1E2B] font-medium flex items-center justify-between leading-snug"
                                >
                                  <span>↳ {subItem.label}</span>
                                  <ExternalLink size={10} className="text-slate-400 shrink-0 ml-1.5" />
                                </a>
                              ))}
                            </div>
                          </div>
                        ) : sub.isDownload ? (
                          <a
                            key={sIdx}
                            href={sub.href}
                            download
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-xs text-slate-700 hover:text-[#8B1E2B] flex items-center justify-between border-b border-slate-200/60 last:border-0"
                          >
                            <span className="font-semibold flex items-center gap-1.5 min-w-0">
                              <FileText size={12} className="text-[#8B1E2B] shrink-0" />
                              <span className="truncate">{sub.label}</span>
                            </span>
                            <span className="text-[10px] font-bold text-[#4D7C0F] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1 shrink-0 ml-2">
                              <Download size={10} />
                              <span>Download</span>
                            </span>
                          </a>
                        ) : sub.isExternal || sub.href.startsWith('http') ? (
                          <a
                            key={sIdx}
                            href={sub.href}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-1.5 text-xs text-slate-600 hover:text-[#8B1E2B] flex items-center justify-between"
                          >
                            <span>• {sub.label}</span>
                            <ExternalLink size={10} className="text-slate-400" />
                          </a>
                        ) : sub.href.startsWith('#') ? (
                          <a
                            key={sIdx}
                            href={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-1.5 text-xs text-slate-600 hover:text-[#8B1E2B]"
                          >
                            • {sub.label}
                          </a>
                        ) : (
                          <Link
                            key={sIdx}
                            to={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-1.5 text-xs text-slate-600 hover:text-[#8B1E2B]"
                          >
                            • {sub.label}
                          </Link>
                        )
                      ))}

                      {item.label === 'PROSPECTUS' && (
                        <Link
                          to="/prospectus"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-center text-xs font-bold text-[#8B1E2B] bg-[#FAF4E6] rounded hover:underline mt-1"
                        >
                          View All Prospectus Archive →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

      </header>

      {/* TOP SPACER TO PREVENT HEADER OVERLAP ON CONTENT BELOW */}
      <div 
        style={{ height: headerHeight ? `${headerHeight}px` : undefined }} 
        className={!headerHeight ? 'h-[120px] sm:h-[140px] lg:h-[160px] xl:h-[165px]' : ''} 
        aria-hidden="true" 
      />
    </>
  );
};

export default Navbar;
