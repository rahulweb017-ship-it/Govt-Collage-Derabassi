import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  BookOpen, 
  ExternalLink, 
  FileText, 
  GraduationCap, 
  Sparkles, 
  Award, 
  Building2, 
  CheckCircle2, 
  Download, 
  Layers, 
  Compass,
  ArrowRight
} from 'lucide-react';

export default function LatestSyllabusPage() {
  const syllabusPortals = [
    {
      id: 'pup',
      title: 'For Punjabi University Patiala Courses',
      subtitle: 'Primary Affiliating University Curriculum Portal',
      institution: 'Punjabi University, Patiala (NAAC "A" Grade)',
      url: 'https://punjabiuniversity.ac.in/indexSyllabi.aspx',
      badge: 'Main Affiliation Portal',
      badgeColor: 'bg-[#8B1E2B] text-white',
      description: 'Official syllabus repository for all regular undergraduate and postgraduate degree programmes offered at Government College Dera Bassi.',
      coverage: [
        'B.A. & B.A. (Honours) — All Elective & Compulsory Subjects',
        'B.Com & B.Com (Honours) — Regular & Self-Financing Tracks',
        'B.Sc. (Non-Medical) — Physics, Chemistry, Mathematics & Computer Science',
        'BCA & BCA (Honours) — Computer Applications & IT Framework',
        'B.B.A. & B.B.A. (Honours) — Business Administration',
        'M.Com — Postgraduate Commerce Master Curriculum'
      ],
      features: [
        'Semester-wise scheme of examination and credit distribution',
        'Internal assessment distribution (mid-sem exams, assignments, attendance)',
        'Updated as per National Education Policy (NEP 2020) structure'
      ],
      image: '/images/departments/dept_punjabi.jpg',
      ctaText: 'Open Punjabi University Syllabi Portal'
    },
    {
      id: 'psou',
      title: 'For Jagat Guru Nanak Dev PSOU Patiala Courses',
      subtitle: 'Skill-Building & Distance Learning Certification Portal',
      institution: 'Jagat Guru Nanak Dev Punjab State Open University, Patiala',
      url: 'https://psou.ac.in/admission/admission_coursess/skill-building-stc',
      badge: 'Skill-Building & STC Portal',
      badgeColor: 'bg-[#C75B2A] text-white',
      description: 'Official syllabus and course guidelines for career-oriented skill building and short-term certificate courses offered in collaboration with JGND PSOU.',
      coverage: [
        'Certificate in Creative Writing & Content Development',
        'Certificate in Entrepreneurship, Creativity & Innovation in Business',
        'Vocational skill building and employment-oriented modules',
        'Flexible learning modules & digital courseware'
      ],
      features: [
        'Modular credit-based skill enhancement',
        'Self-paced learning with university certified evaluation',
        'Designed to augment regular degree employability'
      ],
      image: '/images/departments/dept_commerce.jpg',
      ctaText: 'Open JGND PSOU Course Portal'
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
            <span className="text-slate-300">Academics</span>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-[#F49D71] font-semibold">Latest Syllabus</span>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F49D71] text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles size={13} className="text-[#C75B2A]" />
              <span>Official University Syllabi & Curriculum Outlines</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-display">
              Latest Syllabus
            </h1>

            <p className="mt-4 sm:mt-5 text-lg sm:text-xl text-slate-200 font-normal leading-relaxed">
              Access the official syllabus repositories for all collegiate degree programmes and specialized certificate courses.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-2xl font-light">
              Government College, Dera Bassi follows the standardized curricula prescribed by Punjabi University, Patiala and Jagat Guru Nanak Dev PSOU Patiala with complete semester credit schemes, evaluation criteria, and reference texts.
            </p>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F49D71]" />
                <span>Punjabi University Patiala Syllabi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F49D71]" />
                <span>JGND PSOU Skill Course Guidelines</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F49D71]" />
                <span>NEP 2020 Credit Framework</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE TWO OFFICIAL SYLLABUS GATEWAYS */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#FAF4E6] text-[#C75B2A] text-xs font-bold uppercase tracking-widest mb-3 border border-[#C75B2A]/20">
            <BookOpen size={14} />
            <span>Curriculum Portals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C1D3F] tracking-tight">
            Official University Syllabus Options
          </h2>
          <div className="w-16 h-1 bg-[#C75B2A] rounded-full mx-auto my-4" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            Select the appropriate university portal below to download the latest semester-wise syllabi, marking schemes, and reference bibliographies.
          </p>
        </div>

        {/* 2 Big Featured Portal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {syllabusPortals.map((portal) => (
            <div 
              key={portal.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Header Image with Overlay */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#0C1D3F]">
                  <img 
                    src={portal.image} 
                    alt={portal.title}
                    className="w-full h-full object-cover object-center filter brightness-85 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1D3F] via-[#0C1D3F]/50 to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs ${portal.badgeColor}`}>
                      {portal.badge}
                    </span>
                    <span className="text-xs text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                      Official Portal
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6 z-10">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                      {portal.title}
                    </h3>
                    <p className="text-xs text-[#F49D71] font-semibold mt-1">
                      {portal.institution}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {portal.description}
                  </p>

                  {/* Covered Programmes */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0C1D3F] mb-3 flex items-center gap-1.5">
                      <GraduationCap size={14} className="text-[#C75B2A]" />
                      <span>Applicable Programmes & Streams</span>
                    </h4>
                    <ul className="space-y-2">
                      {portal.coverage.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 size={15} className="text-[#C75B2A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-slate-200/80">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#8B1E2B] mb-2">
                      Portal Inclusions
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {portal.features.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0C1D3F]" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-8 pt-0">
                <a
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#0C1D3F] hover:bg-[#1B3A6B] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all group/btn"
                >
                  <span>{portal.ctaText}</span>
                  <ExternalLink size={16} className="text-[#F49D71] group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 3. INSTRUCTION & GUIDANCE SECTION */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF9F5] rounded-3xl p-8 sm:p-10 border border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C75B2A] mb-2">
                  <Compass size={14} />
                  <span>How to Search on Punjabi University Syllabi Portal</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#0C1D3F]">
                  Need help locating your specific subject syllabus?
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  On the official Punjabi University Syllabi page, choose your Faculty (Arts & Social Sciences, Business Studies, Physical Sciences, Computing), select the academic session, and click on your degree course (B.A., B.Com, B.Sc., BCA, M.Com) to view semester-wise outlines.
                </p>
              </div>
              <div className="shrink-0 flex flex-wrap gap-3">
                <Link
                  to="/academics/courses-offered"
                  className="px-5 py-3 rounded-xl bg-white border border-slate-300 hover:border-[#0C1D3F] text-[#0C1D3F] text-xs font-bold shadow-2xs transition-colors"
                >
                  View Courses Offered
                </Link>
                <Link
                  to="/academics/departments"
                  className="px-5 py-3 rounded-xl bg-[#0C1D3F] hover:bg-[#1B3A6B] text-white text-xs font-bold shadow-xs transition-colors"
                >
                  Academic Departments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
