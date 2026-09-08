import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  GraduationCap, 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  X, 
  Search, 
  Layers, 
  FileText, 
  Clock, 
  Award, 
  Building2,
  Filter
} from 'lucide-react';

// Exact 8 Official Courses as provided by the college guidelines
const coursesData = [
  {
    number: '01',
    name: 'B.A. / B.A. (Honours)',
    badge: 'Undergraduate Degree',
    category: 'Undergraduate',
    isSelfFinancing: false,
    duration: '3 / 4 Years (NEP 2020 Framework)',
    description: 'Social Sciences / Languages / Performing Arts',
    overview: 'A foundational and flexible degree encompassing elective subjects across Punjabi, English, Hindi, History, Political Science, Economics, Public Administration, Sociology, Geography, Fine Arts, Music (Vocal), and Home Science.',
    eligibility: '10+2 examination in any stream from a recognized Board with required pass percentage as per Punjabi University norms.',
    degreeType: 'Regular Programme',
    image: '/images/courses/course_ba.jpg',
    highlights: [
      'Extensive subject elective choices',
      'Honours option in specialized major subjects',
      'Affiliated to Punjabi University, Patiala'
    ]
  },
  {
    number: '02',
    name: 'B.B.A. / B.B.A. (Honours)',
    subName: 'Self-Financing',
    badge: 'Professional UG Programme',
    category: 'Undergraduate',
    isSelfFinancing: true,
    duration: '3 / 4 Years (NEP 2020 Framework)',
    description: 'Business Process Reengineering and Management',
    overview: 'Professional business management programme designed to instill leadership, managerial analytics, operational excellence, human resources, and business process reengineering capabilities.',
    eligibility: '10+2 examination in any stream with minimum 50% marks (45% for reserved categories) or as prescribed by Punjabi University.',
    degreeType: 'Self-Financing Professional Course',
    image: '/images/courses/course_bba.jpg',
    highlights: [
      'Focus on business process management & analytics',
      'Case study methodology & industry seminars',
      'Self-financing professional degree track'
    ]
  },
  {
    number: '03',
    name: 'B.Sc. / B.Sc. (Honours)',
    badge: 'Science UG Degree',
    category: 'Undergraduate',
    isSelfFinancing: false,
    duration: '3 / 4 Years (NEP 2020 Framework)',
    description: 'Life Sciences / Physical Sciences / Computer Sciences',
    overview: 'Comprehensive science curricula offering practical laboratory training in Physics, Chemistry, Mathematics, and Computer Sciences with emphasis on experimental methodology and scientific inquiry.',
    eligibility: '10+2 with Science stream (Physics, Chemistry, Mathematics/Biology) from a recognized Board.',
    degreeType: 'Regular Programme',
    image: '/images/courses/course_bsc.jpg',
    highlights: [
      'Equipped physics, chemistry and computer laboratories',
      'Emphasis on experimental and scientific research skills',
      'Affiliated to Punjabi University, Patiala'
    ]
  },
  {
    number: '04',
    name: 'B.A. (Aesthetic and Beauty Therapy)',
    subName: 'Self-Financing',
    badge: 'Vocational UG Degree',
    category: 'Undergraduate',
    isSelfFinancing: true,
    duration: '3 Years Degree Programme',
    description: 'Aesthetic and Beauty Therapy',
    overview: 'A career-oriented vocational degree blending wellness sciences, dermatological aesthetics, cosmetic care, salon management, and holistic personal styling.',
    eligibility: '10+2 in any stream from a recognized Board of School Education.',
    degreeType: 'Self-Financing Vocational Course',
    image: '/images/courses/course_beauty_therapy.jpg',
    highlights: [
      'Hands-on practical wellness and cosmetology labs',
      'High entrepreneurship and salon management focus',
      'Industry-aligned practical curriculum'
    ]
  },
  {
    number: '05',
    name: 'B.Com / B.Com (Honours)',
    badge: 'Single Major UG Programme',
    category: 'Undergraduate',
    isSelfFinancing: false,
    duration: '3 / 4 Years (NEP 2020 Framework)',
    description: 'Single Major UG Programme',
    overview: 'Rigorous undergraduate commerce education covering corporate accounting, mercantile law, direct and indirect taxation, financial management, and banking systems.',
    eligibility: '10+2 with Commerce stream or with requisite subjects/marks as stipulated by Punjabi University, Patiala.',
    degreeType: 'Regular Programme',
    image: '/images/courses/course_bcom.jpg',
    highlights: [
      'Comprehensive accounting and financial systems training',
      'Preparation for professional CA/CS/CMA credentials',
      'Merit-based university affiliated curriculum'
    ]
  },
  {
    number: '06',
    name: 'M.Com',
    subName: 'Self-Financing',
    badge: 'Postgraduate Programme',
    category: 'Postgraduate',
    isSelfFinancing: true,
    duration: '2 Years (4 Semesters)',
    description: 'Postgraduate Programme',
    overview: 'Advanced postgraduate commerce education emphasizing strategic corporate financial analysis, international trade, research methodology, advanced auditing, and managerial economics.',
    eligibility: 'B.Com / B.Com (Hons) / B.B.A. from a recognized University with at least 50% marks in aggregate.',
    degreeType: 'Self-Financing Postgraduate Course',
    image: '/images/courses/course_mcom.jpg',
    highlights: [
      'Advanced master-level commerce specialization',
      'Corporate accounting & research project work',
      'Pathway to UGC-NET and collegiate lectureship'
    ]
  },
  {
    number: '07',
    name: 'B.Com / B.Com (Honours)',
    subName: 'Self-Financing',
    badge: 'Single Major UG Programme',
    category: 'Undergraduate',
    isSelfFinancing: true,
    duration: '3 / 4 Years (NEP 2020 Framework)',
    description: 'Single Major UG Programme',
    overview: 'Self-financing commerce programme offering an enriched learning environment with computerised accounting practicals, financial analysis software, and corporate interaction.',
    eligibility: '10+2 in Commerce stream or equivalent from a recognized board.',
    degreeType: 'Self-Financing Programme',
    image: '/images/courses/course_bcom_sf.jpg',
    highlights: [
      'Computerized accounting and Tally practicals',
      'Specialized self-financing batch with dedicated resources',
      'Affiliated to Punjabi University, Patiala'
    ]
  },
  {
    number: '08',
    name: 'BCA / BCA (Honours)',
    subName: 'Self-Financing',
    badge: 'Single Major UG Programme',
    category: 'Undergraduate',
    isSelfFinancing: true,
    duration: '3 / 4 Years (NEP 2020 Framework)',
    description: 'Single Major UG Programme',
    overview: 'Professional computing degree training undergraduates in software engineering, database management systems, full-stack web technologies, object-oriented programming, and network infrastructure.',
    eligibility: '10+2 in any stream with Mathematics or Computer related subject / as per Punjabi University admission rules.',
    degreeType: 'Self-Financing IT Professional Course',
    image: '/images/courses/course_bca.jpg',
    highlights: [
      'High-speed air-conditioned computer laboratories',
      'Full-stack programming & database development',
      'Self-financing professional tech track'
    ]
  }
];

export default function CoursesOfferedPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalCourse, setActiveModalCourse] = useState(null);

  // Category counts
  const countAll = coursesData.length;
  const countUG = coursesData.filter(c => c.category === 'Undergraduate').length;
  const countPG = coursesData.filter(c => c.category === 'Postgraduate').length;
  const countSF = coursesData.filter(c => c.isSelfFinancing).length;

  const filterTabs = [
    { label: 'All', count: countAll },
    { label: 'Undergraduate', count: countUG },
    { label: 'Postgraduate', count: countPG },
    { label: 'Self-Financing', count: countSF }
  ];

  const filteredCourses = coursesData.filter(course => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Undergraduate') return course.category === 'Undergraduate';
    if (selectedFilter === 'Postgraduate') return course.category === 'Postgraduate';
    if (selectedFilter === 'Self-Financing') return course.isSelfFinancing;
    return true;
  });

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
          {/* Breadcrumb: Home / Academics / Courses Offered */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6 sm:mb-8 font-medium">
            <Link to="/" className="flex items-center gap-1 hover:text-[#F49D71] transition-colors">
              <Home size={15} />
              <span>Home</span>
            </Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-300">Academics</span>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-[#F49D71] font-semibold">Courses Offered</span>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F49D71] text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles size={13} className="text-[#C75B2A]" />
              <span>Affiliated to Punjabi University, Patiala · NAAC Accredited B++</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-display">
              Courses Offered
            </h1>

            <p className="mt-4 sm:mt-5 text-lg sm:text-xl text-slate-200 font-normal leading-relaxed">
              Explore academic programmes designed to build knowledge, skills and future opportunities.
            </p>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F49D71]" />
                <span>NEP 2020 Aligned Curricula</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F49D71]" />
                <span>Regular & Self-Financing Tracks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F49D71]" />
                <span>Govt. Subsidized Fee Structure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0C1D3F]/5 text-[#0C1D3F] text-xs font-bold uppercase tracking-widest mb-3 border border-slate-200">
              <GraduationCap size={14} className="text-[#C75B2A]" />
              <span>Academic Opportunities</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0C1D3F] tracking-tight">
              Find the Right Programme for You
            </h2>

            <div className="w-16 h-1 bg-[#C75B2A] rounded-full my-4" />

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              Government College, Dera Bassi offers undergraduate and postgraduate programmes across arts, science, commerce, management and computer applications. Whether you seek foundational academic inquiry or career-ready professional training, each course combines university academic rigor with modern institutional learning facilities.
            </p>
          </div>

          <div className="shrink-0 p-6 rounded-2xl bg-[#FAF9F5] border border-slate-200 text-center flex flex-col items-center">
            <div className="text-4xl font-extrabold text-[#0C1D3F] font-display">8</div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#8B1E2B] mt-1">Academic Degree Pathways</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Regular & Self-Financing</div>
            <a 
              href="#programmes"
              className="mt-4 px-4 py-2 rounded-xl bg-[#0C1D3F] hover:bg-[#1B3A6B] text-white text-xs font-semibold transition-colors"
            >
              Browse List ↓
            </a>
          </div>
        </div>

        {/* 3. COURSE CATEGORIES (Tabs/Filter) */}
        <div id="programmes" className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0C1D3F]">
              Academic Programme Directory
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select a category to view specific degree tracks
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.label;
              return (
                <button
                  key={tab.label}
                  onClick={() => setSelectedFilter(tab.label)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#0C1D3F] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-[#C75B2A] text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. COURSE GRID (Clean modern cards) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredCourses.map((course) => (
            <div
              key={course.number}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#0C1D3F]/40 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#C75B2A] transition-colors duration-300 z-20" />

              <div>
                {/* Course Image Header with Overlay */}
                <div className="relative h-44 w-full overflow-hidden bg-[#0C1D3F]">
                  <img 
                    src={course.image} 
                    alt={course.name}
                    className="w-full h-full object-cover object-center filter brightness-90 contrast-105 group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1D3F] via-[#0C1D3F]/40 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#0C1D3F]/85 backdrop-blur-md text-[#F49D71] font-mono font-bold text-xs border border-white/20">
                      #{course.number}
                    </span>
                    {course.isSelfFinancing ? (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#FAF4E6] text-[#8B1E2B] border border-[#C75B2A]/30 shadow-xs">
                        Self-Financing
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/95 text-[#0C1D3F] shadow-xs">
                        Regular Track
                      </span>
                    )}
                  </div>

                  {/* Course Title Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <h4 className="text-xl font-extrabold text-white tracking-tight leading-snug group-hover:text-[#F49D71] transition-colors drop-shadow-sm">
                      {course.name}
                    </h4>
                    {course.subName && (
                      <span className="text-[11px] font-bold text-[#F49D71] tracking-wide block mt-0.5">
                        ({course.subName})
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6">
                  {/* Category & Duration */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3 pb-2.5 border-b border-slate-100">
                    <span className="font-semibold text-[#8B1E2B]">{course.category}</span>
                    <span className="flex items-center gap-1 text-slate-600">
                      <Clock size={12} className="text-[#C75B2A]" />
                      <span>{course.duration}</span>
                    </span>
                  </div>

                  {/* Short Description */}
                  <div className="bg-[#FAF9F5] p-3 rounded-xl border border-slate-200/70 mb-3.5">
                    <p className="text-xs font-bold text-[#0C1D3F]">
                      {course.description}
                    </p>
                  </div>

                  {/* Overview Text */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {course.overview}
                  </p>
                </div>
              </div>

              {/* Card Footer: View Programme Button */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                <button
                  onClick={() => setActiveModalCourse(course)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 group-hover:bg-[#0C1D3F] text-[#0C1D3F] group-hover:text-white text-xs font-bold transition-all duration-200"
                >
                  <span>View Programme</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 5. FEATURED SECTION */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#0C1D3F] text-white shadow-2xl border-2 border-slate-200">
          
          <div className="relative h-[420px] sm:h-[480px] w-full overflow-hidden">
            <img 
              src="/images/campus_moments/comp-1.jpg" 
              alt="Government College Dera Bassi Students" 
              className="w-full h-full object-cover object-center filter brightness-60 contrast-110 scale-100 hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Gradient & Phulkari Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1D3F] via-[#0C1D3F]/70 to-transparent" />
            <div className="absolute inset-0 bg-phulkari-pattern opacity-15 pointer-events-none" />
            
            {/* Headline & CTA */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 lg:p-16 z-10 max-w-4xl">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F49D71] text-xs font-bold uppercase tracking-widest mb-4 w-fit">
                <Award size={14} className="text-[#C75B2A]" />
                <span>Empowering Punjab's Youth Since 1975</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display leading-tight">
                Learn Today. Lead Tomorrow.
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-200 font-light max-w-2xl leading-relaxed">
                Unlock your potential through rigorous academics, modern computing laboratories, competitive exam coaching, and rich extracurricular opportunities at Government College, Dera Bassi.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#admissions-cta"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#C75B2A] hover:bg-[#A84820] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Explore Admissions</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  to="/about/overview"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm backdrop-blur-md border border-white/20 transition-all"
                >
                  <span>Campus Overview</span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. ADMISSION CTA */}
      <section id="admissions-cta" className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="w-14 h-14 rounded-2xl bg-[#FAF4E6] text-[#C75B2A] border border-[#C75B2A]/20 flex items-center justify-center mx-auto mb-6 shadow-xs">
            <Building2 size={28} />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C1D3F] tracking-tight font-display">
            Ready to Begin Your Journey?
          </h2>

          <div className="w-16 h-1 bg-[#C75B2A] rounded-full mx-auto my-5" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
            Admissions for regular and self-financing programmes at Government College Dera Bassi are conducted transparently via the centralized Punjab Higher Education Portal.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://admission.punjab.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#C75B2A] hover:bg-[#A84820] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all"
            >
              <span>Apply Now</span>
              <ExternalLink size={16} />
            </a>

            <Link
              to="/students/admission-rules"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#0C1D3F] hover:bg-[#1B3A6B] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all"
            >
              <FileText size={18} className="text-[#F49D71]" />
              <span>View Admission Guidelines</span>
            </Link>
          </div>

          <div className="mt-8 text-xs text-slate-400 flex flex-wrap justify-center items-center gap-4">
            <span>Affiliated to Punjabi University, Patiala</span>
            <span>•</span>
            <span>NAAC Accredited B++</span>
            <span>•</span>
            <span>AISHE: C-22140</span>
          </div>

        </div>
      </section>

      {/* 7. COURSE DETAILS MODAL */}
      {activeModalCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-6 animate-fadeIn">
          <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-slate-300 flex flex-col max-h-[90vh]">
            
            {/* Modal Image Header */}
            <div className="relative h-48 sm:h-52 w-full bg-[#0C1D3F] overflow-hidden">
              <img 
                src={activeModalCourse.image} 
                alt={activeModalCourse.name}
                className="w-full h-full object-cover filter brightness-75 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1D3F] via-[#0C1D3F]/60 to-transparent" />
              
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F49D71]">
                  <span className="px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-md">
                    Course #{activeModalCourse.number}
                  </span>
                  <span>•</span>
                  <span className="px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-md">
                    {activeModalCourse.category}
                  </span>
                </div>
                <button
                  onClick={() => setActiveModalCourse(null)}
                  className="p-1.5 rounded-lg bg-black/50 hover:bg-black/75 text-white transition-colors border border-white/20"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="absolute bottom-4 left-6 right-6 z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {activeModalCourse.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-semibold">
                  {activeModalCourse.description}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0C1D3F] mb-2">Programme Overview</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeModalCourse.overview}
                </p>
              </div>

              {/* Eligibility Criteria */}
              <div className="p-4 rounded-xl bg-[#FAF4E6] border border-[#C75B2A]/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B1E2B] mb-1">Eligibility Criteria</h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeModalCourse.eligibility}
                </p>
              </div>

              {/* Programme Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0C1D3F] mb-2">Key Highlights</h4>
                <ul className="space-y-2">
                  {activeModalCourse.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-[#C75B2A] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duration & Classification */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Duration</span>
                  <span className="font-semibold text-[#0C1D3F]">{activeModalCourse.duration}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Nature</span>
                  <span className="font-semibold text-[#8B1E2B]">{activeModalCourse.degreeType}</span>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalCourse(null)}
                className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                Close
              </button>

              <div className="flex items-center gap-2">
                <Link
                  to="/students/admission-rules"
                  className="px-4 py-2 rounded-xl bg-[#0C1D3F] text-white text-xs font-semibold hover:bg-[#1B3A6B] transition-colors"
                >
                  Admission Rules
                </Link>
                <a
                  href="https://admission.punjab.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#C75B2A] text-white text-xs font-semibold hover:bg-[#A84820] transition-colors flex items-center gap-1"
                >
                  <span>Apply on Portal</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
