import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  User, 
  ChevronDown, 
  Facebook, 
  Instagram, 
  Youtube,
  ExternalLink,
  ShieldAlert,
  Users
} from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '#home', active: true },
  { 
    label: 'ABOUT US', 
    href: '#about',
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
    isHighlight: true, // Matching university portal highlighted admissions tab
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
    children: [
      { label: 'NAAC Accreditation (Cycle 3 Grade B++)', href: '#recognition' },
      { label: 'Internal Quality Assurance Cell (IQAC)', href: '#recognition' },
      { label: 'UGC 2(f) & 12(B) Recognition', href: '#recognition' },
      { label: 'Institutional Best Practice (Dastak)', href: '#recognition' }
    ]
  },
  { label: 'NIRF', href: '#recognition' },
  { label: 'GALLERY', href: '#campus-life' },
  { label: 'CONTACT US', href: '#contact' }
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
      {/* STICKY / FIXED HEADER WRAPPER (Entire header remains fixed at top on scroll) */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans shadow-md bg-white">
        
        {/* 1. TOP UTILITY HEADER BAR (Maroon / Deep Red) */}
        <div className={`bg-[#4A1018] text-white text-xs px-4 sm:px-8 border-b border-white/10 select-none transition-all duration-200 ${
          isScrolled ? 'py-1 opacity-95' : 'py-1.5'
        }`}>
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
            
            {/* Left: Contact Info */}
            <div className="flex items-center space-x-5 text-ivory-100">
              <a 
                href="tel:01762295167" 
                className="flex items-center space-x-1.5 hover:text-saffron-300 transition-colors"
              >
                <Phone size={13} className="text-saffron-400" />
                <span>01762-295167</span>
              </a>
              <span className="text-white/30 hidden sm:inline">|</span>
              <a 
                href="mailto:gcderabassi@gmail.com" 
                className="hidden sm:flex items-center space-x-1.5 hover:text-saffron-300 transition-colors"
              >
                <Mail size={13} className="text-saffron-400" />
                <span>gcderabassi@gmail.com</span>
              </a>
            </div>

            {/* Right: Statutory Disclosures, Login & Social */}
            <div className="flex items-center space-x-3 sm:space-x-4 text-xs">
              <div className="flex items-center space-x-2.5 sm:space-x-3 text-slate-200">
                <a href="#recognition" className="hover:text-saffron-300 transition-colors font-medium">NIRF</a>
                <span className="text-white/20">|</span>
                <a href="#recognition" className="hover:text-saffron-300 transition-colors font-medium">NAAC</a>
                <span className="text-white/20">|</span>
                <span className="text-slate-300 hidden md:inline">AISHE: C-22140</span>
                <span className="text-white/20 hidden md:inline">|</span>
                <a 
                  href="https://admission.punjab.gov.in" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center space-x-1 text-saffron-300 hover:text-white font-semibold transition-colors"
                >
                  <User size={13} />
                  <span>Login</span>
                </a>
              </div>

              <span className="text-white/20 hidden md:inline">|</span>

              {/* Social Icons */}
              <div className="hidden md:flex items-center space-x-2.5 text-white/80">
                <a href="#" aria-label="Facebook" className="hover:text-saffron-400 transition-colors">
                  <Facebook size={13} />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-saffron-400 transition-colors">
                  <Instagram size={13} />
                </a>
                <a href="#" aria-label="YouTube" className="hover:text-saffron-400 transition-colors">
                  <Youtube size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 2. LOGO & COLLEGE TITLE BLOCK ROW WITH THE 3 ACTION BUTTONS (Clean White Row) */}
        <div className={`bg-white transition-all duration-300 border-b border-slate-100 ${
          isScrolled ? 'py-1.5 sm:py-2' : 'py-2.5 sm:py-3'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center gap-3 md:gap-4">
              
              {/* College Logo & Official Multilingual Title + G20 Logo */}
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                <a href="#home" className="flex items-center space-x-3 sm:space-x-3.5 group shrink-0">
                  <img 
                    src="/images/old_site/logo.png" 
                    alt="Government College Dera Bassi Crest" 
                    className={`object-contain transition-all duration-300 group-hover:scale-105 shrink-0 ${
                      isScrolled ? 'w-12 h-12 sm:w-14 sm:h-14' : 'w-14 h-14 sm:w-16 sm:h-16'
                    }`}
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="font-gurmukhi text-[#8B1E2B] font-bold text-xs sm:text-sm md:text-[15px] leading-tight tracking-wide whitespace-nowrap">
                      ਸਰਕਾਰੀ ਕਾਲਜ ਡੇਰਾ ਬੱਸੀ
                    </span>
                    <span className="font-bold text-[#0C1D3F] text-xs sm:text-[13px] md:text-[15.5px] tracking-tight leading-tight uppercase font-sans whitespace-nowrap">
                      GOVERNMENT COLLEGE DERA BASSI
                    </span>
                    <span className="text-[9.5px] sm:text-[10.5px] text-slate-500 font-medium leading-none mt-0.5 tracking-tight whitespace-nowrap">
                      Affiliated to Punjabi University, Patiala · AISHE: C-22140
                    </span>
                  </div>
                </a>

                {/* G20 Emblem with subtle divider */}
                <div className="hidden sm:flex items-center pl-3 sm:pl-4 border-l border-slate-200 shrink-0">
                  <img 
                    src="/images/old_site/g20-image.png" 
                    alt="G20 India Emblem" 
                    className={`w-auto object-contain transition-all duration-300 hover:scale-105 ${
                      isScrolled ? 'h-7 sm:h-8 md:h-9' : 'h-8 sm:h-9 md:h-10'
                    }`}
                  />
                </div>
              </div>

              {/* Right: The 3 Action Buttons (Desktop / Large Tablet) */}
              <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
                
                {/* Action Button 1: Online Admission Portal */}
                <a
                  href="https://admission.punjab.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#C75B2A] hover:bg-[#B04B1E] text-white font-bold text-[11px] xl:text-xs px-3 py-1.5 rounded-md shadow-xs flex items-center gap-1.5 transition-all uppercase tracking-wide hover:shadow"
                >
                  <span>Online Admission Portal</span>
                  <ExternalLink size={11} />
                </a>

                {/* Action Button 2: Anti-Ragging Portal */}
                <a
                  href="https://www.antiragging.in"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#8B1E2B] hover:bg-[#68141F] text-white font-bold text-[11px] xl:text-xs px-3 py-1.5 rounded-md shadow-xs flex items-center gap-1.5 transition-all uppercase tracking-wide hover:shadow"
                >
                  <ShieldAlert size={12} />
                  <span>Anti-Ragging Portal</span>
                  <ExternalLink size={11} />
                </a>

                {/* Action Button 3: Anti-Ragging Cell & Women/Sexual Harassment Cell */}
                <a
                  href="#services"
                  className="bg-[#0C1D3F] hover:bg-[#162D5C] text-white font-bold text-[11px] xl:text-xs px-3 py-1.5 rounded-md shadow-xs flex items-center gap-1.5 transition-all uppercase tracking-wide hover:shadow"
                >
                  <Users size={12} />
                  <span>Anti-Ragging Cell & Women/Sexual Harassment Cell</span>
                </a>

              </div>

              {/* Mobile Hamburger / Quick Admission CTA */}
              <div className="lg:hidden flex items-center space-x-2 shrink-0">
                <a
                  href="https://admission.punjab.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#C75B2A] text-white text-[10px] sm:text-[11px] uppercase font-bold px-2.5 py-1 rounded shadow-xs"
                >
                  Apply
                </a>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-[#4A1018] hover:text-[#8B1E2B] p-1.5 focus:outline-none"
                  aria-label="Toggle Menu"
                >
                  {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* 3. FULL-WIDTH RED MENU BAR (Directly beneath the header title block) */}
        <div className="bg-[#8B1E2B] text-white select-none shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Desktop Navigation Links */}
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
                      className={`text-[12px] xl:text-[13px] font-bold uppercase tracking-wider flex items-center gap-1 py-2.5 px-2.5 xl:px-3.5 transition-colors ${
                        item.isHighlight 
                          ? 'bg-black text-[#FACC15] font-black hover:bg-neutral-900' 
                          : 'text-white hover:bg-[#68141F]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.children && (
                        <ChevronDown 
                          size={13} 
                          className="opacity-80 group-hover:opacity-100 transition-transform duration-200 group-hover:rotate-180 ml-0.5" 
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

            {/* Mobile / Tablet Menu Bar Strip */}
            <div className="lg:hidden flex items-center justify-between py-2 text-xs font-bold uppercase tracking-wider">
              <span className="text-white flex items-center gap-1.5">
                <Menu size={15} />
                <span>Site Menu</span>
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

        {/* 4. MOBILE MENU SLIDE-DOWN DRAWER */}
        <div className={`lg:hidden bg-white border-b border-slate-200 shadow-2xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[85vh] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-4 space-y-3">
            
            {/* The 3 Action Buttons in Mobile Drawer */}
            <div className="space-y-2 pb-3 border-b border-slate-200">
              <span className="text-[10.5px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                Official Portals & Cells:
              </span>
              <a
                href="https://admission.punjab.gov.in"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-[#C75B2A] text-white py-2 rounded-md font-bold uppercase text-xs tracking-wider shadow-xs"
              >
                Online Admission Portal &rarr;
              </a>
              <a
                href="https://www.antiragging.in"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-[#8B1E2B] text-white py-2 rounded-md font-bold uppercase text-xs tracking-wider shadow-xs"
              >
                Anti-Ragging Portal &rarr;
              </a>
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-[#0C1D3F] text-white py-2 rounded-md font-bold uppercase text-xs tracking-wider shadow-xs"
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
                    className="block py-2 text-xs sm:text-sm font-bold text-slate-800 hover:text-[#8B1E2B]"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="pl-3 pb-2 space-y-1 bg-slate-50 rounded-lg p-2 mb-2">
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
      <div className="h-[120px] sm:h-[135px] lg:h-[148px]" style={{ marginTop: '-104px' }} />
    </>
  );
};

export default Navbar;
