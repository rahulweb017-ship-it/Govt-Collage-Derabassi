import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  Briefcase, 
  GraduationCap, 
  FileText, 
  ExternalLink, 
  Download, 
  Award, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Building2, 
  BookOpen, 
  Users, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  Clock,
  Target
} from 'lucide-react';

export default function PlacementPage() {
  const [selectedYear, setSelectedYear] = useState('all');

  const placementRecords = [
    {
      year: '2022–23',
      session: 'Academic Session 2022-2023',
      title: 'Student Placement List 2022–23',
      pdfUrl: '/documents/placement/placed_student_list_2022-23.pdf',
      externalUrl: 'https://gcderabassi.ac.in/Uploads/placement/placed%20student%20list%202022-23.pdf',
      badge: 'Latest Available Session',
      isLatest: true,
      description: 'Official collegiate roster of undergraduate and postgraduate students selected through campus recruitment drives, direct employment notices, and industry placement linkages.'
    },
    {
      year: '2021–22',
      session: 'Academic Session 2021-2022',
      title: 'Student Placement List 2021–22',
      pdfUrl: '/documents/placement/placed_student_list_2021-22.pdf',
      externalUrl: 'https://gcderabassi.ac.in/Uploads/placement/placed%20student%20list%202021-22.pdf',
      badge: 'Verified Record',
      description: 'Institutional documentation of graduating students who secured career appointments across corporate, commercial, IT, and educational establishments.'
    },
    {
      year: '2020–21',
      session: 'Academic Session 2020-2021',
      title: 'Student Placement List 2020–21',
      pdfUrl: '/documents/placement/placed_student_list_2020-21.pdf',
      externalUrl: 'https://gcderabassi.ac.in/Uploads/placement/placed%20student%20list%202020-21.pdf',
      badge: 'Verified Record',
      description: 'Official employment record of college alumni recruited through virtual interview cycles, district placement bureaus, and state higher education placement initiatives.'
    },
    {
      year: '2019–20',
      session: 'Academic Session 2019-2020',
      title: 'Student Placement List 2019–20',
      pdfUrl: '/documents/placement/placed_student_list_2019-20.pdf',
      externalUrl: 'https://gcderabassi.ac.in/Uploads/placement/placed%20student%20list%202019-20.pdf',
      badge: 'Verified Record',
      description: 'Record of collegiate candidates placed across regional banking, accounting, technological and business process services.'
    },
    {
      year: '2018–19',
      session: 'Academic Session 2018-2019',
      title: 'Student Placement List 2018–19',
      pdfUrl: '/documents/placement/placed_student_list_2018-19.pdf',
      externalUrl: 'https://gcderabassi.ac.in/Uploads/placement/placed%20student%20list%202018-19.pdf',
      badge: 'Verified Record',
      description: 'Historical archive of successful alumni recruited into public and private sector organizations following course completion at GCD.'
    }
  ];

  const careerServices = [
    {
      icon: Compass,
      title: 'Career Guidance',
      tag: 'Counselling & Orientation',
      description: 'Personalized career mentoring, psychometric orientation, and professional counseling sessions helping students assess their strengths, identify aptitudes, and explore diverse career pathways in public and private sectors.'
    },
    {
      icon: Briefcase,
      title: 'Placement Opportunities',
      tag: 'Industry Linkages',
      description: 'Facilitating campus recruitment interviews, participating in Mega Job Fairs organized by District Bureau of Employment and Enterprise (DBEE) Punjab, and coordinating with regional corporate recruiters.'
    },
    {
      icon: Sparkles,
      title: 'Skill Development',
      tag: 'Employability Enhancement',
      description: 'Workshops focused on resume curation, corporate communication, business etiquette, group discussions, mock interviews, and certificate courses in creative and digital applications.'
    },
    {
      icon: GraduationCap,
      title: 'Higher Education Guidance',
      tag: 'Postgraduate Progression',
      description: 'Structured advising for university entrance examinations (PU-CET, PUP Master Entrance, CAT, UGC NET, B.Ed. Common Entrance) to ensure smooth transition into premier universities.'
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
            <span className="text-slate-300">Student Corner</span>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-[#F49D71] font-semibold">Placement & Career Development</span>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F49D71] text-xs font-semibold tracking-wider uppercase mb-4">
              <Briefcase size={13} className="text-[#C75B2A]" />
              <span>Training, Placement & Career Guidance Cell</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-display">
              Placement & Career Development
            </h1>

            <p className="mt-4 sm:mt-5 text-lg sm:text-xl text-slate-200 font-normal leading-relaxed">
              Helping students move confidently from classroom to career.
            </p>

            <p className="mt-3 text-xs sm:text-sm text-slate-300/90 leading-relaxed max-w-2xl font-light">
              Equipping undergraduates and postgraduates with practical competencies, job-market readiness, career counseling, and transparent pathways to employment and advanced university degrees.
            </p>

            {/* Badges strip */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-4 sm:gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F49D71]" />
                <span>Verified Placement Lists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F49D71]" />
                <span>Higher Education Progression</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F49D71]" />
                <span>DBEE Punjab Linkages</span>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#placement-records"
                className="px-6 py-3 rounded-xl bg-[#C75B2A] hover:bg-[#A8481E] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>View Placement Records</span>
                <ArrowRight size={14} />
              </a>
              <a
                href="#higher-education"
                className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/25 transition-all flex items-center gap-2"
              >
                <GraduationCap size={15} />
                <span>Higher Education Track</span>
              </a>
              <a
                href="#career-services"
                className="px-5 py-3 rounded-xl bg-white text-[#0C1D3F] hover:bg-slate-100 text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center gap-2"
              >
                <Compass size={14} className="text-[#C75B2A]" />
                <span>Career Guidance Services</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF4E6] text-[#C75B2A] text-xs font-bold uppercase tracking-widest mb-3 border border-[#C75B2A]/20">
                <Target size={14} />
                <span>Institutional Commitment</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C1D3F] tracking-tight">
                Building Pathways Beyond Graduation
              </h2>
              <div className="w-12 h-1 bg-[#C75B2A] rounded-full my-4" />
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At Government College, Dera Bassi, academic pursuit is deliberately harmonized with real-world preparedness. The College Training & Placement Cell actively collaborates with regional industry chambers, government employment bureaus, and academic faculties to help students transition smoothly into rewarding careers.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-3">
                Whether a graduate chooses immediate corporate employment, public competitive examinations, or advanced postgraduate research, the cell provides consistent mentorship, transparent documentation, and career advisory services.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 text-[#0C1D3F] flex items-center justify-center shrink-0 border border-slate-200">
                    <ShieldCheck size={18} className="text-[#C75B2A]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0C1D3F]">Authentic Roster Records</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Year-wise verified student appointment records available for public inspection.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 text-[#0C1D3F] flex items-center justify-center shrink-0 border border-slate-200">
                    <TrendingUp size={18} className="text-[#C75B2A]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0C1D3F]">Dual Outcomes Focus</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Equally prioritizing campus placements and university postgraduate progression.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3] bg-slate-100 group">
                <img 
                  src="/images/campus_moments/comp-1.jpg" 
                  alt="Government College Dera Bassi Career and Lab Work" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1D3F]/85 via-transparent to-transparent flex items-end p-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F49D71] block mb-1">
                      Hands-On Education
                    </span>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      Practical Computer Lab Training & IT Skill Workshops at GCD
                    </h4>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUTCOMES SECTION (Two Core Pillars) */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF4E6] text-[#C75B2A] text-xs font-bold uppercase tracking-widest mb-3 border border-[#C75B2A]/20">
            <Layers size={14} />
            <span>Institutional Outcomes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C1D3F] tracking-tight">
            Two Pillars of Student Progression
          </h2>
          <div className="w-12 h-1 bg-[#C75B2A] rounded-full mx-auto my-3" />
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Our collegiate outcomes are documented across two primary trajectories: direct employment placements and university-level higher education enrollment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Placement Records */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0C1D3F] text-white flex items-center justify-center mb-5 shadow-xs">
                <Briefcase size={22} className="text-[#F49D71]" />
              </div>
              <span className="text-[11px] font-bold text-[#C75B2A] uppercase tracking-wider block mb-1">
                Outcome Stream 01
              </span>
              <h3 className="text-xl font-bold text-[#0C1D3F] mb-3">
                Student Placement Records
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Official records of collegiate students successfully recruited into corporate firms, technological enterprises, commercial banking institutions, educational organizations, and government services.
              </p>

              <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200/70 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#C75B2A] shrink-0" />
                  <span>5-Year Continuous Official Records (2018–2023)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#C75B2A] shrink-0" />
                  <span>Verified by College Placement Coordinator & Principal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#C75B2A] shrink-0" />
                  <span>Transparent Public PDFs Available for Download</span>
                </div>
              </div>
            </div>

            <a
              href="#placement-records"
              className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-[#0C1D3F] hover:bg-[#1B3A6B] text-white text-xs font-bold transition-colors"
            >
              <span>Explore Yearly Placement Lists</span>
              <ArrowRight size={14} className="text-[#F49D71]" />
            </a>
          </div>

          {/* Card 2: Higher Education */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0C1D3F] text-white flex items-center justify-center mb-5 shadow-xs">
                <GraduationCap size={22} className="text-[#F49D71]" />
              </div>
              <span className="text-[11px] font-bold text-[#C75B2A] uppercase tracking-wider block mb-1">
                Outcome Stream 02
              </span>
              <h3 className="text-xl font-bold text-[#0C1D3F] mb-3">
                Students Pursuing Higher Education
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Many of our undergraduate scholars progress into prestigious universities to pursue Masters degrees (M.A., M.Com, M.Sc., MCA, LL.B., MBA, B.Ed.) across Punjab and national institutes.
              </p>

              <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200/70 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#C75B2A] shrink-0" />
                  <span>Admissions to Punjabi University, Panjab University, etc.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#C75B2A] shrink-0" />
                  <span>Preparation for UGC-NET, Civil Services & State Exams</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#C75B2A] shrink-0" />
                  <span>Comprehensive Higher Education Roster Available</span>
                </div>
              </div>
            </div>

            <a
              href="#higher-education"
              className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-[#C75B2A] hover:bg-[#A8481E] text-white text-xs font-bold transition-colors"
            >
              <span>View Higher Education Roster</span>
              <ArrowRight size={14} />
            </a>
          </div>

        </div>
      </section>

      {/* 4. PLACEMENT RECORDS (Year-based timeline/list) */}
      <section id="placement-records" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-slate-100 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF4E6] text-[#C75B2A] text-xs font-bold uppercase tracking-widest mb-2 border border-[#C75B2A]/20">
                <Calendar size={14} />
                <span>Verified Historical Archives</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C1D3F] tracking-tight">
                Official Student Placement Records
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Access official university-verified lists of placed candidates across academic sessions.
              </p>
            </div>

            <div className="text-xs text-slate-400 font-medium">
              5 Documented Academic Sessions
            </div>
          </div>

          {/* Timeline / Card List */}
          <div className="space-y-4 sm:space-y-6">
            {placementRecords.map((record, index) => (
              <div 
                key={record.year}
                className="p-6 rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50/70 hover:border-slate-300 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-5 group"
              >
                <div className="flex items-start gap-4">
                  {/* Year Tag Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0C1D3F] text-white font-extrabold text-sm flex items-center justify-center shrink-0 group-hover:bg-[#C75B2A] transition-colors shadow-xs">
                    {record.year.split('–')[0]}
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      <span className="text-[10.5px] font-bold text-[#C75B2A] uppercase tracking-wider">
                        {record.session}
                      </span>
                      <span className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full ${
                        record.isLatest 
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {record.badge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#0C1D3F] group-hover:text-[#0C1D3F]">
                      {record.title}
                    </h3>
                    
                    <p className="text-xs text-slate-500 mt-1 max-w-2xl leading-relaxed">
                      {record.description}
                    </p>
                  </div>
                </div>

                {/* View / Download Button */}
                <div className="flex items-center gap-3 shrink-0 pt-2 sm:pt-0">
                  <a
                    href={record.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0C1D3F] hover:bg-[#1B3A6B] text-white text-xs font-bold transition-all shadow-xs group-hover:shadow-md"
                  >
                    <span>View List</span>
                    <ArrowRight size={13} className="text-[#F49D71]" />
                  </a>

                  <a
                    href={record.pdfUrl}
                    download
                    className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
                    title="Download Official PDF"
                    aria-label={`Download ${record.title}`}
                  >
                    <Download size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-[#FAF9F5] border border-slate-200/80 text-xs text-slate-600 flex items-start gap-2.5">
            <ShieldCheck size={16} className="text-[#C75B2A] shrink-0 mt-0.5" />
            <span>
              <strong>Note on Placement Records:</strong> In accordance with institutional transparency and NAAC disclosure standards, all records are maintained directly from departmental submissions and college administration gazettes without modification.
            </span>
          </div>

        </div>
      </section>

      {/* 5. HIGHER EDUCATION (Continuing the Journey) */}
      <section id="higher-education" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="bg-[#0C1D3F] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border-4 border-[#C75B2A]">
          <div className="absolute inset-0 bg-phulkari-pattern opacity-10 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F49D71] text-xs font-bold uppercase tracking-widest mb-3 border border-white/20">
                <GraduationCap size={14} className="text-[#C75B2A]" />
                <span>Continuing the Journey</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-display">
                Pursuing Higher Education
              </h2>
              
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                A substantial proportion of Government College Dera Bassi alumni transition directly into postgraduate degree programmes, advanced professional qualifications, and research faculties across regional and national universities.
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-bold text-white block">Postgraduate Degrees</span>
                  <span className="text-[11px] text-slate-400">M.A., M.Com, M.Sc., MCA</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-bold text-white block">Professional Studies</span>
                  <span className="text-[11px] text-slate-400">B.Ed., LL.B., MBA</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-bold text-white block">Affiliated Universities</span>
                  <span className="text-[11px] text-slate-400">Punjabi Uni, PU, Central Unis</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/documents/placement/pursuing_higher_education.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3.5 rounded-xl bg-[#C75B2A] hover:bg-[#A8481E] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <span>View Students →</span>
                  <ExternalLink size={14} />
                </a>

                <a
                  href="/documents/placement/pursuing_higher_education.pdf"
                  download
                  className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
                >
                  <Download size={14} />
                  <span>Download Higher Education Roster</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center max-w-sm w-full">
                <Award size={36} className="text-[#F49D71] mx-auto mb-3" />
                <h4 className="text-base font-bold text-white mb-1">Academic Continuation</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Reflecting the strong foundation built by GCD faculty across languages, sciences, commerce, and humanities.
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 text-[11px] text-[#F49D71] font-semibold">
                  Official Record Verified
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CAREER DEVELOPMENT INITIATIVES (4 Pillars) */}
      <section id="career-services" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF4E6] text-[#C75B2A] text-xs font-bold uppercase tracking-widest mb-3 border border-[#C75B2A]/20">
            <Sparkles size={14} />
            <span>Comprehensive Support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C1D3F] tracking-tight">
            Career Development Initiatives
          </h2>
          <div className="w-12 h-1 bg-[#C75B2A] rounded-full mx-auto my-3" />
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Four targeted areas through which the Placement Cell nurtures talent, builds employability, and prepares collegiate youth for modern opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careerServices.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0C1D3F] text-white flex items-center justify-center mb-5 shadow-xs">
                    <IconComponent size={22} className="text-[#F49D71]" />
                  </div>
                  
                  <span className="text-[10px] font-bold text-[#C75B2A] uppercase tracking-wider block mb-1">
                    {service.tag}
                  </span>

                  <h3 className="text-base font-bold text-[#0C1D3F] mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#0C1D3F]">
                  <CheckCircle2 size={13} className="text-[#C75B2A]" />
                  <span>Annual Cell Initiative</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF4E6] text-[#C75B2A] text-xs font-bold uppercase tracking-widest mb-3 border border-[#C75B2A]/20">
              <Compass size={14} />
              <span>Next Steps</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C1D3F] tracking-tight">
              Planning Your Next Step?
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
              Explore our degree programmes, examine admission criteria, or connect with our academic departments to map your educational pathway.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-3.5">
              <Link
                to="/academics/courses-offered"
                className="px-6 py-3 rounded-xl bg-[#0C1D3F] hover:bg-[#1B3A6B] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors flex items-center gap-2"
              >
                <span>Explore Courses Offered</span>
                <ArrowRight size={14} className="text-[#F49D71]" />
              </Link>

              <Link
                to="/students/admission-rules"
                className="px-6 py-3 rounded-xl bg-[#C75B2A] hover:bg-[#A8481E] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors flex items-center gap-2"
              >
                <span>Admission Guidelines</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                to="/about"
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0C1D3F] text-xs sm:text-sm font-bold transition-colors"
              >
                <span>Contact College Desk</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
