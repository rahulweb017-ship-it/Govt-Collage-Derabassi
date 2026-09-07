import React, { useState, useEffect } from 'react';
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
  Users
} from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '#home', active: true },
  { 
    label: 'ABOUT US', 
    href: '#about',
    hasChevron: true,
    children: [
      { label: 'College History & 50-Year Legacy', href: '#about' },
      { label: 'Principal’s Message', href: '#principal' },
      { label: 'Vision & Mission Statement', href: '#about' },
      { label: 'Campus Infrastructure & Facilities', href: '#campus-life' }
    ]
  },
  { 
    label: 'ACADEMICS', 
    href: '#academics',
    hasChevron: true,
    children: [
      { label: 'Undergraduate (B.A., B.Com, B.Sc, BCA)', href: '#academics' },
      { label: 'Postgraduate (M.Com)', href: '#academics' },
      { label: 'Certificate Programmes (JGND PSOU)', href: '#academics' },
      { label: 'All 17 Departments & Faculty', href: '#academics' }
    ]
  },
  { 
    label: 'ADMISSIONS', 
    href: '#admissions',
    hasChevron: true,
    isHighlight: true, // Black box with yellow text from user image
    children: [
      { label: 'Admissions 2026–27 (Session)', href: '#admissions' },
      { label: 'Centralized Punjab Portal', href: 'https://admission.punjab.gov.in' },
      { label: 'Eligibility & Reservation Norms', href: '#admissions' },
      { label: 'Scholarships & Fee Concessions', href: '#services' }
    ]
  },
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
  { label: 'CONTACT US', href: '#contact', hasChevron: false }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* FIXED / STICKY HEADER (Entire Header remains pinned to the top on scroll) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white font-sans shadow-md select-none transition-all duration-300">
        
        {/* 1. TOP WHITE HEADER SECTION (100% Full Width) */}
        <div className={`w-full px-4 sm:px-6 lg:px-8 xl:px-10 transition-all duration-300 ${
          isScrolled ? 'py-1.5 sm:py-2' : 'py-2.5 sm:py-3.5'
        }`}>
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Left: College Crest Logo (Large & Clear like PU Website) & 3-Line Multilingual College Title */}
            <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 min-w-0">
              <a href="#home" className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 group shrink-0 py-1">
                <img 
                  src="/images/old_site/logo.png" 
                  alt="Government College Dera Bassi Crest" 
                  className={`object-contain shrink-0 transition-all duration-300 filter drop-shadow-xs ${
                    isScrolled 
                      ? 'w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-22 lg:h-22' 
                      : 'w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 lg:w-28 lg:h-28 xl:w-32 xl:h-32'
                  }`}
                />
                <div className="flex flex-col justify-center min-w-0">
                  {/* Gurmukhi College Name */}
                  <span className="font-gurmukhi text-[#8B1E2B] font-bold text-sm sm:text-base md:text-lg lg:text-xl leading-tight tracking-wide whitespace-nowrap">
                    ਸਰਕਾਰੀ ਕਾਲਜ ਡੇਰਾ ਬੱਸੀ
                  </span>
                  {/* English College Name */}
                  <span className="font-sans font-black text-[#0C1D3F] text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl tracking-tight leading-tight uppercase whitespace-nowrap mt-0.5 sm:mt-1">
                    GOVERNMENT COLLEGE DERA BASSI
                  </span>
                  {/* Affiliation Subtext */}
                  <span className="text-[10px] sm:text-xs md:text-[13px] lg:text-[13.5px] text-slate-600 font-semibold leading-normal tracking-normal whitespace-nowrap mt-1">
                    Affiliated to Punjabi University, Patiala · AISHE: C-22140
                  </span>
                </div>
              </a>
            </div>

            {/* Middle: G20 India Official Emblem */}
            <div className="hidden xl:flex items-center justify-center shrink-0 px-3">
              <img 
                src="/images/old_site/g20-image.png" 
                alt="G20 India 2023 Official Emblem" 
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'h-10 sm:h-12' : 'h-14 sm:h-16'
                }`}
              />
            </div>

            {/* Right: Two-Tier Layout (Top: Contact Info & Socials | Bottom: 3 Action Buttons) */}
            <div className="hidden lg:flex flex-col items-end space-y-2 shrink-0">
              
              {/* Tier 1: Phone, Email, Social Icons (in white header area) */}
              <div className="flex items-center space-x-5 text-xs text-[#8B1E2B]">
                {/* Phone */}
                <a 
                  href="tel:01762295167" 
                  className="flex items-center space-x-1.5 font-bold hover:text-[#5B101B] transition-colors"
                >
                  <Phone size={14} className="fill-current text-[#8B1E2B]" />
                  <span className="text-slate-800 font-bold text-[13px] tracking-tight">01762-295167</span>
                </a>

                {/* Email */}
                <a 
                  href="mailto:gcderabassi@gmail.com" 
                  className="flex items-center space-x-1.5 font-medium hover:text-[#5B101B] transition-colors"
                >
                  <Mail size={15} className="text-[#8B1E2B]" />
                  <span className="text-[#8B1E2B] font-semibold text-[13px]">gcderabassi@gmail.com</span>
                </a>

                {/* Social Icons */}
                <div className="flex items-center space-x-2 text-slate-700 pl-1">
                  <a 
                    href="#" 
                    aria-label="Facebook" 
                    className="w-5 h-5 rounded border border-slate-700 flex items-center justify-center hover:text-[#8B1E2B] hover:border-[#8B1E2B] transition-colors"
                  >
                    <Facebook size={12} />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Instagram" 
                    className="w-5 h-5 rounded border border-slate-700 flex items-center justify-center hover:text-[#8B1E2B] hover:border-[#8B1E2B] transition-colors"
                  >
                    <Instagram size={12} />
                  </a>
                  <a 
                    href="#" 
                    aria-label="YouTube" 
                    className="w-5 h-5 rounded border border-slate-700 flex items-center justify-center hover:text-[#8B1E2B] hover:border-[#8B1E2B] transition-colors"
                  >
                    <Youtube size={12} />
                  </a>
                </div>
              </div>

              {/* Tier 2: The 3 Action Buttons (matching the screenshot) */}
              <div className="flex items-center space-x-2">
                {/* 1. ONLINE ADMISSION PORTAL */}
                <a
                  href="https://admission.punjab.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#D25C2B] hover:bg-[#B84E22] text-white font-bold text-[10.5px] xl:text-[11px] px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors uppercase tracking-wide shadow-2xs"
                >
                  <span>ONLINE ADMISSION PORTAL</span>
                  <ExternalLink size={11} />
                </a>

                {/* 2. ANTI-RAGGING PORTAL */}
                <a
                  href="https://www.antiragging.in"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#8B1E2B] hover:bg-[#68141F] text-white font-bold text-[10.5px] xl:text-[11px] px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors uppercase tracking-wide shadow-2xs"
                >
                  <Shield size={11} className="fill-current" />
                  <span>ANTI-RAGGING PORTAL</span>
                  <ExternalLink size={11} />
                </a>

                {/* 3. ANTI-RAGGING CELL & WOMEN/SEXUAL HARASSMENT CELL */}
                <a
                  href="#services"
                  className="bg-[#0C1D3F] hover:bg-[#162E5F] text-white font-bold text-[10.5px] xl:text-[11px] px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors uppercase tracking-wide shadow-2xs"
                >
                  <Users size={11} />
                  <span>ANTI-RAGGING CELL & WOMEN/SEXUAL HARASSMENT CELL</span>
                </a>
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

        {/* 2. FULL-WIDTH CRIMSON RED MENU BAR (Matching media_1788792735421.jpg) */}
        <div className="w-full bg-[#8B1E2B] text-white shadow-sm border-t border-[#73121F]">
          <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-10">
            
            {/* Desktop Navigation Links Row */}
            <nav className="hidden lg:flex items-center justify-between whitespace-nowrap">
              <div className="flex items-center w-full justify-between">
                {navItems.map((item) => (
                  <div 
                    key={item.label} 
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={item.href}
                      className={`text-[12px] xl:text-[13.5px] font-black uppercase tracking-wider flex items-center gap-1 py-2.5 px-3 xl:px-4 transition-colors ${
                        item.isHighlight 
                          ? 'bg-black text-[#F5BD02] font-black hover:bg-neutral-900 shadow-inner' 
                          : 'text-white hover:bg-[#68141F]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.hasChevron && (
                        <ChevronDown 
                          size={13} 
                          className="opacity-90 group-hover:opacity-100 transition-transform duration-200 group-hover:rotate-180 ml-0.5" 
                        />
                      )}
                    </a>

                    {/* Dropdown Menu */}
                    {item.children && (
                      <div className="absolute top-full left-0 w-64 bg-white text-slate-800 rounded-b-lg shadow-2xl border border-slate-100 py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
                        {item.children.map((child, idx) => (
                          <a
                            key={idx}
                            href={child.href}
                            target={child.href.startsWith('http') ? '_blank' : '_self'}
                            rel={child.href.startsWith('http') ? 'noreferrer' : undefined}
                            className="block px-4 py-2.5 text-xs text-slate-700 hover:bg-[#FAF4E6] hover:text-[#8B1E2B] font-semibold transition-colors border-b border-slate-50 last:border-0"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Strip */}
            <div className="lg:hidden flex items-center justify-between py-2 text-xs font-bold uppercase tracking-wider">
              <span className="text-white flex items-center gap-1.5">
                <Menu size={15} />
                <span>Menu & Quick Navigation</span>
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

        {/* 3. MOBILE MENU SLIDE-DOWN DRAWER */}
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
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-[#0C1D3F] text-white py-2 rounded font-bold uppercase text-xs tracking-wider shadow-2xs"
              >
                Anti-Ragging Cell & Women/Sexual Harassment Cell
              </a>
            </div>

            {/* Nav Items List */}
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-slate-100 last:border-0">
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 text-xs sm:text-sm font-bold ${
                      item.isHighlight ? 'text-[#D25C2B]' : 'text-slate-800 hover:text-[#8B1E2B]'
                    }`}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="pl-3 pb-2 space-y-1 bg-slate-50 rounded p-2 mb-2">
                      {item.children.map((sub, sIdx) => (
                        <a
                          key={sIdx}
                          href={sub.href}
                          target={sub.href.startsWith('http') ? '_blank' : '_self'}
                          rel={sub.href.startsWith('http') ? 'noreferrer' : undefined}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1 text-xs text-slate-600 hover:text-[#8B1E2B]"
                        >
                          • {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

      </header>

      {/* TOP SPACER TO PREVENT HEADER OVERLAP ON CONTENT BELOW */}
      <div className="h-[135px] sm:h-[155px] lg:h-[185px] xl:h-[195px]" style={{ marginTop: '-104px' }} />
    </>
  );
};

export default Navbar;
