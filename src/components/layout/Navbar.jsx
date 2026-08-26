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
  Award,
  BookOpen
} from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '#home', active: true },
  { 
    label: 'ABOUT US', 
    href: '#about',
    children: [
      { label: 'College History & Legacy', href: '#about' },
      { label: 'Principal’s Message', href: '#principal' },
      { label: 'Vision & Mission', href: '#about' },
      { label: 'Campus Infrastructure', href: '#campus-life' }
    ]
  },
  { 
    label: 'ACADEMICS', 
    href: '#academics',
    children: [
      { label: 'Undergraduate (B.A., B.Com, B.Sc, BCA)', href: '#academics' },
      { label: 'Postgraduate (M.Com)', href: '#academics' },
      { label: 'Certificate Programmes (JGND PSOU)', href: '#academics' },
      { label: 'All 17 Departments', href: '#academics' }
    ]
  },
  { 
    label: 'ADMISSIONS', 
    href: '#admissions',
    children: [
      { label: 'Admissions 2026–27', href: '#admissions' },
      { label: 'Centralized Punjab Portal', href: 'https://admission.punjab.gov.in' },
      { label: 'Eligibility & Reservation Norms', href: '#admissions' },
      { label: 'Scholarships & Fee Concessions', href: '#services' }
    ]
  },
  { 
    label: 'STUDENT CORNER', 
    href: '#services',
    children: [
      { label: 'Central Digital Library (NDLI/INFLIBNET)', href: '#services' },
      { label: 'NSS & NCC Units', href: '#campus-life' },
      { label: 'Sports & Gymnasium', href: '#campus-life' },
      { label: 'Anti-Ragging Undertaking', href: '#services' },
      { label: 'Internal Complaints Committee (ICC)', href: '#services' }
    ]
  },
  { label: 'IQAC', href: '#recognition' },
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans shadow-md">
      
      {/* 1. TOP UTILITY HEADER BAR (Maroon / Deep Red from design) */}
      <div className="bg-[#4A1018] text-white text-xs py-1.5 px-4 sm:px-8 border-b border-white/10 select-none">
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

          {/* Right: Institutional Disclosures, Portals & Social */}
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-3 text-slate-200">
              <a href="#recognition" className="hover:text-saffron-300 transition-colors font-medium">NIRF</a>
              <span className="text-white/20">|</span>
              <a href="#recognition" className="hover:text-saffron-300 transition-colors font-medium">NAAC</a>
              <span className="text-white/20">|</span>
              <span className="text-slate-300">AISHE: C-22140</span>
              <span className="text-white/20">|</span>
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

      {/* 2. MAIN INSTITUTIONAL NAVBAR */}
      <div className={`bg-white transition-all duration-300 border-b border-slate-200 ${
        isScrolled ? 'py-2 shadow-lg' : 'py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* College Crest & Official Multilingual Branding + G20 Logo */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a href="#home" className="flex items-center space-x-3 sm:space-x-3.5 group">
                <img 
                  src="/images/old_site/logo.png" 
                  alt="Govt. College Dera Bassi Crest" 
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col whitespace-nowrap">
                  <span className="font-gurmukhi text-[#8B1E2B] font-bold text-xs sm:text-sm md:text-base leading-tight tracking-wide whitespace-nowrap">
                    ਸਰਕਾਰੀ ਕਾਲਜ ਡੇਰਾ ਬੱਸੀ
                  </span>
                  <span className="font-bold text-[#4A1018] text-xs sm:text-[13.5px] md:text-[15px] tracking-tight leading-tight uppercase font-display whitespace-nowrap">
                    GOVT. COLLEGE DERA BASSI
                  </span>
                  <span className="text-[9px] sm:text-[10px] md:text-[10.5px] text-slate-500 font-medium leading-none mt-0.5 tracking-tight whitespace-nowrap">
                    Affiliated to Punjabi University, Patiala.
                  </span>
                </div>
              </a>

              {/* Official G20 Logo */}
              <div className="hidden sm:flex items-center pl-3 sm:pl-4 border-l border-slate-200">
                <img 
                  src="/images/old_site/g20-image.png" 
                  alt="G20 India Emblem" 
                  className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Desktop Navigation Links (Single Clean Line) */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-7 whitespace-nowrap">
              {navItems.map((item) => (
                <div 
                  key={item.label} 
                  className="relative group py-2"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`text-[13px] xl:text-[14px] font-bold tracking-wider flex items-center gap-1 transition-colors py-1 relative ${
                      item.active 
                        ? 'text-[#8B1E2B] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#C75B2A] after:rounded-full' 
                        : 'text-slate-800 hover:text-[#8B1E2B]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.children && (
                      <ChevronDown 
                        size={13} 
                        className="text-slate-500 group-hover:text-[#8B1E2B] transition-transform duration-200 group-hover:rotate-180 ml-0.5" 
                      />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.children && (
                    <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                      {item.children.map((child, idx) => (
                        <a
                          key={idx}
                          href={child.href}
                          className="block px-4 py-2.5 text-xs text-slate-700 hover:bg-saffron-50 hover:text-[#8B1E2B] font-medium transition-colors border-b border-slate-50 last:border-0"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <a
                href="#admissions"
                className="bg-[#C75B2A] text-white text-[11px] uppercase font-bold px-3 py-1.5 rounded"
              >
                Apply
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#4A1018] hover:text-[#C75B2A] p-1.5 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 3. MOBILE MENU SLIDE-DOWN DRAWER */}
      <div className={`lg:hidden bg-white border-b border-slate-200 shadow-2xl transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-[80vh] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-slate-100 last:border-0">
              <a
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2.5 text-sm font-bold text-slate-800 hover:text-[#8B1E2B]"
              >
                {item.label}
              </a>
              {item.children && (
                <div className="pl-4 pb-2 space-y-1 bg-slate-50 rounded-lg p-2 mb-2">
                  {item.children.map((sub, sIdx) => (
                    <a
                      key={sIdx}
                      href={sub.href}
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
          <div className="pt-3">
            <a
              href="#admissions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-[#C75B2A] text-white py-3 rounded-lg font-bold uppercase text-xs tracking-wider"
            >
              Start Online Admission 2026–27
            </a>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Navbar;
