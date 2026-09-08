import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  Compass, 
  Target, 
  Award, 
  GraduationCap, 
  Users, 
  Laptop, 
  FileText, 
  Eye, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  X,
  BookOpen,
  Building2
} from 'lucide-react';

export default function VisionMissionPage() {
  const [activePdfModal, setActivePdfModal] = useState(null);

  const strategicDocuments = [
    {
      id: 'plan',
      title: 'Perspective Plan 2022–23 to 2027–28',
      shortTitle: 'Perspective Plan (5-Year Strategic Blueprint)',
      period: '2022–23 to 2027–28',
      description: 'Comprehensive 5-year institutional strategic roadmap delineating academic expansion, infrastructure modernization, digital governance, and community engagement benchmarks.',
      filePath: '/documents/Perspective-Plan-2022-23-to-2027-28.pdf',
      fileSize: '428 KB',
      pages: 'Official IQAC Blueprint'
    },
    {
      id: 'deployment',
      title: 'Perspective Plan & Deployment 2022–23 to 2027–28',
      shortTitle: 'Perspective Plan & Deployment Document',
      period: '2022–23 to 2027–28',
      description: 'Actionable deployment matrix, committee responsibilities, phased annual milestones, and metric-driven implementation outcomes across all academic and administrative domains.',
      filePath: '/documents/Perspective-Plan-and-Deployment-2022-23-to-2027-28.pdf',
      fileSize: '513 KB',
      pages: 'Official IQAC Deployment'
    }
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-800 font-sans selection:bg-[#C75B2A]/20 selection:text-[#0C1D3F]">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0C1D3F] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 overflow-hidden border-b-4 border-[#C75B2A]">
        {/* Background Image with Institutional Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/slides/campus-main-buddha.jpg" 
            alt="Government College Dera Bassi Campus" 
            className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1D3F]/95 via-[#0C1D3F]/90 to-[#0C1D3F]/75 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-phulkari-pattern opacity-10 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6 sm:mb-8 font-medium">
            <Link to="/" className="flex items-center gap-1 hover:text-[#F49D71] transition-colors">
              <Home size={15} />
              <span>Home</span>
            </Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-300">About Us</span>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-[#F49D71] font-semibold">Vision, Mission & Objectives</span>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F49D71] text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles size={13} className="text-[#C75B2A]" />
              <span>Institutional Core Philosophy · Estd. 1975</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-display">
              Vision, Mission & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#F49D71]">
                Objectives
              </span>
            </h1>

            <p className="mt-4 sm:mt-5 text-lg sm:text-xl text-slate-200 font-normal leading-relaxed">
              “Our purpose, our values and our direction.”
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-2xl font-light">
              Rooted in five decades of academic service, Government College Dera Bassi is dedicated to transforming lives through inclusive, high-quality, and future-ready higher education in Punjab.
            </p>

            {/* Anchor Jump Links */}
            <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm">
              <a 
                href="#vision" 
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium border border-white/15 transition-all backdrop-blur-sm"
              >
                Our Vision
              </a>
              <a 
                href="#mission" 
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium border border-white/15 transition-all backdrop-blur-sm"
              >
                Our Mission
              </a>
              <a 
                href="#objective" 
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium border border-white/15 transition-all backdrop-blur-sm"
              >
                Our Objective
              </a>
              <a 
                href="#perspective-plan" 
                className="px-4 py-2 rounded-lg bg-[#C75B2A] hover:bg-[#A84820] text-white font-semibold shadow-xs transition-all"
              >
                Strategic Direction
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISION SECTION */}
      <section id="vision" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative">
              <div className="absolute top-6 right-8 text-slate-100 font-serif text-8xl select-none pointer-events-none -z-0">
                “
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0C1D3F]/5 text-[#0C1D3F] text-xs font-bold uppercase tracking-widest mb-4">
                  <Compass size={14} className="text-[#C75B2A]" />
                  <span>Institutional Vision</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0C1D3F] tracking-tight">
                  Our Vision
                </h2>

                <div className="w-16 h-1 bg-[#C75B2A] rounded-full my-6" />

                {/* Primary Statement */}
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#0C1D3F] font-semibold leading-snug sm:leading-relaxed relative pl-5 border-l-4 border-[#C75B2A]">
                  “To become the preferred destination for higher education for students from Dera Bassi and the surrounding areas.”
                </blockquote>

                <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Established in 1975 to serve the youth of semi-urban and rural Punjab, our vision represents an enduring commitment to accessible excellence. We strive to be the benchmark of academic integrity, intellectual vitality, and social mobility across the Dera Bassi sub-division and neighboring territories.
                </p>
              </div>

              {/* Vision Highlights */}
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#C75B2A] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#0C1D3F]">Regional First-Choice</div>
                    <div className="text-xs text-slate-500 mt-0.5">Top preference for aspiring collegiate learners</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#C75B2A] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#0C1D3F]">Inclusive Reach</div>
                    <div className="text-xs text-slate-500 mt-0.5">Serving diverse communities with equity</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Supporting Visual Column */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-[#0C1D3F]">
              <img 
                src="/images/slides/campus-main-buddha copy.jpg" 
                alt="Government College Dera Bassi Green Campus" 
                className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1D3F]/90 via-[#0C1D3F]/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C75B2A]">
                  <Building2 size={14} />
                  <span>50 Years of Academic Excellence</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-snug">
                  Affiliated to Punjabi University, Patiala · NAAC Accredited B++ · Recipient of PM-USHA Development Grant
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION SECTION */}
      <section id="mission" className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#FAF4E6] text-[#C75B2A] text-xs font-bold uppercase tracking-widest mb-3 border border-[#C75B2A]/20">
              <Target size={14} />
              <span>Pillars of Action</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C1D3F] tracking-tight">
              Our Mission
            </h2>
            <div className="w-16 h-1 bg-[#C75B2A] rounded-full mx-auto my-4" />
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              The three guiding commitments that shape our daily teaching, institutional governance, and student empowerment initiatives.
            </p>
          </div>

          {/* 3 Premium Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 01: Quality Education */}
            <div className="group relative bg-[#FAF9F5] rounded-3xl p-8 sm:p-9 border border-slate-200 hover:border-[#C75B2A] hover:bg-white transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-[#0C1D3F]/20 group-hover:text-[#C75B2A]/30 transition-colors font-display">
                    01
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#FAF4E6] border border-slate-200 group-hover:border-[#C75B2A]/40 flex items-center justify-center text-[#0C1D3F] group-hover:text-[#C75B2A] transition-all shadow-2xs">
                    <GraduationCap size={24} />
                  </div>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#C75B2A] mb-1">
                  Excellence & Affordability
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0C1D3F] mb-4 group-hover:text-[#0C1D3F]">
                  Quality Education
                </h3>

                <blockquote className="text-slate-800 font-medium text-base sm:text-lg italic border-l-2 border-[#C75B2A] pl-3.5 my-4">
                  “To provide quality education at affordable rates.”
                </blockquote>

                <p className="text-slate-600 text-sm leading-relaxed mt-4">
                  Ensuring higher education remains financially attainable for every strata of society without ever compromising pedagogical standards, qualified faculty guidance, or comprehensive laboratory facilities.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#0C1D3F]">
                <CheckCircle2 size={15} className="text-[#C75B2A]" />
                <span>Low fee structure & financial subsidies</span>
              </div>
            </div>

            {/* Card 02: Equal Opportunity */}
            <div className="group relative bg-[#FAF9F5] rounded-3xl p-8 sm:p-9 border border-slate-200 hover:border-[#C75B2A] hover:bg-white transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-[#0C1D3F]/20 group-hover:text-[#C75B2A]/30 transition-colors font-display">
                    02
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#FAF4E6] border border-slate-200 group-hover:border-[#C75B2A]/40 flex items-center justify-center text-[#0C1D3F] group-hover:text-[#C75B2A] transition-all shadow-2xs">
                    <Users size={24} />
                  </div>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#C75B2A] mb-1">
                  Inclusion & Dignity
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0C1D3F] mb-4 group-hover:text-[#0C1D3F]">
                  Equal Opportunity
                </h3>

                <blockquote className="text-slate-800 font-medium text-base sm:text-lg italic border-l-2 border-[#C75B2A] pl-3.5 my-4">
                  “To provide equal opportunities, without any discrimination, to all students.”
                </blockquote>

                <p className="text-slate-600 text-sm leading-relaxed mt-4">
                  Nurturing a fair, secular, and empowering campus ecosystem that actively champions female education, assists socially disadvantaged learners, and guarantees zero tolerance for prejudice or discrimination.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#0C1D3F]">
                <CheckCircle2 size={15} className="text-[#C75B2A]" />
                <span>Zero discrimination & scholarship support</span>
              </div>
            </div>

            {/* Card 03: Technology & Progress */}
            <div className="group relative bg-[#FAF9F5] rounded-3xl p-8 sm:p-9 border border-slate-200 hover:border-[#C75B2A] hover:bg-white transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-[#0C1D3F]/20 group-hover:text-[#C75B2A]/30 transition-colors font-display">
                    03
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#FAF4E6] border border-slate-200 group-hover:border-[#C75B2A]/40 flex items-center justify-center text-[#0C1D3F] group-hover:text-[#C75B2A] transition-all shadow-2xs">
                    <Laptop size={24} />
                  </div>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#C75B2A] mb-1">
                  Digital Readiness
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0C1D3F] mb-4 group-hover:text-[#0C1D3F]">
                  Technology & Progress
                </h3>

                <blockquote className="text-slate-800 font-medium text-base sm:text-lg italic border-l-2 border-[#C75B2A] pl-3.5 my-4">
                  “To keep pace with time in the field of information technology.”
                </blockquote>

                <p className="text-slate-600 text-sm leading-relaxed mt-4">
                  Equipping classrooms and departments with modern computing infrastructure, digital learning aids, internet access, and tech-driven vocational pathways to prepare graduates for contemporary industry demands.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#0C1D3F]">
                <CheckCircle2 size={15} className="text-[#C75B2A]" />
                <span>Smart classrooms & computer lab ecosystem</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OBJECTIVE SECTION (Wide highlighted institutional section) */}
      <section id="objective" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0C1D3F] via-[#152E55] to-[#0C1D3F] text-white p-8 sm:p-14 lg:p-16 shadow-xl overflow-hidden border-2 border-[#C75B2A]/40">
          
          {/* Subtle Institutional Motif */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C75B2A]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-phulkari-pattern opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F49D71] text-xs font-bold uppercase tracking-widest mb-6">
              <Award size={15} className="text-[#C75B2A]" />
              <span>Core Institutional Purpose</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              Our Objective
            </h2>

            <div className="w-16 h-1 bg-[#C75B2A] rounded-full mx-auto my-6" />

            {/* Distinct Statement */}
            <div className="p-6 sm:p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 my-6 shadow-inner">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-white font-medium leading-snug sm:leading-relaxed">
                “To ensure the holistic development of students, so that they can contribute towards nation building.”
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mt-4 font-light">
              Beyond degrees and examination scores, our paramount goal is character building, civic responsibility, ethical awareness, and physical fitness—grooming conscientious citizens who drive social and national progress.
            </p>

            {/* Objective Triad */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="text-[#F49D71] font-bold text-xs uppercase tracking-wider mb-1">Character & Values</div>
                <div className="text-slate-300 text-xs leading-normal">Instilling integrity, social empathy, and constitutional responsibility.</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="text-[#F49D71] font-bold text-xs uppercase tracking-wider mb-1">Holistic Growth</div>
                <div className="text-slate-300 text-xs leading-normal">Balancing academic rigor with NSS, sports, cultural arts, and soft skills.</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="text-[#F49D71] font-bold text-xs uppercase tracking-wider mb-1">Nation Building</div>
                <div className="text-slate-300 text-xs leading-normal">Empowering youth to innovate, lead, and serve Punjab and India.</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. STRATEGIC DIRECTION (Perspective Plan) */}
      <section id="perspective-plan" className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0C1D3F]/5 text-[#0C1D3F] text-xs font-bold uppercase tracking-widest mb-3 border border-slate-200">
              <Compass size={14} className="text-[#C75B2A]" />
              <span>Strategic Direction & Governance</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#0C1D3F] tracking-tight font-display">
              Planning Today. Building Tomorrow.
            </h2>
            
            <div className="w-16 h-1 bg-[#C75B2A] rounded-full my-4" />
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Government College Dera Bassi formulates and executes structured 5-year Perspective Plans under the guidance of the Internal Quality Assurance Cell (IQAC). These comprehensive roadmaps outline institutional growth targets, curriculum upgrades, infrastructure modernizations, and metric-based deployment timelines.
            </p>
          </div>

          {/* Two Official Perspective Plan Document Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategicDocuments.map((doc) => (
              <div 
                key={doc.id}
                className="bg-[#FAF9F5] rounded-3xl p-7 sm:p-9 border border-slate-200/90 hover:border-[#0C1D3F]/40 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 group-hover:border-[#0C1D3F] flex items-center justify-center text-[#8B1E2B] group-hover:scale-105 transition-all shadow-2xs">
                      <FileText size={24} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0C1D3F] bg-white px-3 py-1 rounded-full border border-slate-200">
                      {doc.period}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0C1D3F] tracking-tight group-hover:text-[#8B1E2B] transition-colors mb-3">
                    {doc.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {doc.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-6 py-3 px-4 rounded-xl bg-white border border-slate-100">
                    <span className="font-semibold text-slate-700">Format:</span> Official PDF
                    <span className="text-slate-300">•</span>
                    <span className="font-semibold text-slate-700">Size:</span> {doc.fileSize}
                    <span className="text-slate-300">•</span>
                    <span className="font-semibold text-slate-700">Scope:</span> {doc.pages}
                  </div>
                </div>

                {/* Document Action Buttons */}
                <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActivePdfModal(doc)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0C1D3F] text-white hover:bg-[#1B3A6B] text-xs sm:text-sm font-semibold transition-all shadow-xs"
                  >
                    <Eye size={16} />
                    <span>View Document</span>
                  </button>

                  <a
                    href={doc.filePath}
                    download
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#0C1D3F] border border-slate-200 text-xs sm:text-sm font-semibold transition-all shadow-2xs"
                    title="Download Official PDF"
                  >
                    <Download size={16} />
                    <span className="hidden sm:inline">Download</span>
                  </a>

                  <a
                    href={doc.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white hover:bg-slate-100 text-slate-500 hover:text-[#0C1D3F] border border-slate-200 transition-all"
                    title="Open in new window"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Perspective Plan Note */}
          <div className="mt-8 p-5 rounded-2xl bg-[#FAF4E6]/80 border border-[#C75B2A]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C75B2A]/10 text-[#C75B2A] flex items-center justify-center shrink-0">
                <CheckCircle2 size={18} />
              </div>
              <p className="text-xs sm:text-sm text-slate-700">
                Both documents represent the official institutional perspective plans endorsed by the <strong>IQAC</strong> and approved by the college administration for NAAC Assessment Cycle 3.
              </p>
            </div>
            <Link 
              to="/about/overview" 
              className="text-xs font-bold text-[#C75B2A] hover:text-[#A84820] whitespace-nowrap flex items-center gap-1 group"
            >
              <span>Explore Campus Overview</span>
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. FINAL CTA (Clean Institutional Close) */}
      <section className="relative bg-[#0C1D3F] text-white py-16 sm:py-20 overflow-hidden border-t-2 border-[#C75B2A]/40">
        <div className="absolute inset-0 bg-phulkari-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C75B2A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 mx-auto flex items-center justify-center text-[#F49D71] mb-6">
            <GraduationCap size={26} />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Building Futures Through Education
          </h2>

          <div className="w-16 h-1 bg-[#C75B2A] rounded-full mx-auto my-5" />

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto font-light">
            Government College, Dera Bassi welcomes students from across Punjab and neighboring regions to embark on a journey of intellectual discovery, character development, and academic excellence.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/academics/courses-offered"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-[#0C1D3F] hover:bg-slate-100 font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all"
            >
              <BookOpen size={18} className="text-[#C75B2A]" />
              <span>Explore Academics</span>
            </Link>

            <a
              href="https://admission.punjab.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#C75B2A] hover:bg-[#A84820] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all"
            >
              <span>Admissions</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Subtext info */}
          <div className="mt-8 text-xs text-slate-400 flex flex-wrap justify-center items-center gap-4">
            <span>Affiliated to Punjabi University, Patiala</span>
            <span>•</span>
            <span>NAAC Accredited B++</span>
            <span>•</span>
            <span>AISHE: C-22140</span>
          </div>
        </div>
      </section>

      {/* DOCUMENT PREVIEW MODAL */}
      {activePdfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-6 animate-fadeIn">
          <div className="bg-white rounded-3xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-slate-300">
            {/* Modal Header */}
            <div className="bg-[#0C1D3F] text-white px-6 py-4 flex items-center justify-between border-b border-navy-600">
              <div className="flex items-center gap-3 truncate pr-4">
                <FileText className="text-[#F49D71] shrink-0" size={20} />
                <div className="truncate">
                  <h4 className="font-bold text-sm sm:text-base truncate">
                    {activePdfModal.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-mono">
                    {activePdfModal.period} · {activePdfModal.fileSize}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={activePdfModal.filePath}
                  download
                  className="px-3.5 py-1.5 rounded-lg bg-[#C75B2A] hover:bg-[#A84820] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={() => setActivePdfModal(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal PDF Viewer Body */}
            <div className="flex-1 bg-slate-100 p-2 sm:p-4">
              <iframe
                src={`${activePdfModal.filePath}#toolbar=1`}
                title={activePdfModal.title}
                className="w-full h-full rounded-xl border border-slate-300 bg-white"
              />
            </div>
            
            {/* Modal Footer */}
            <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>If PDF does not display in your browser, please click Download or Open in New Tab.</span>
              <a 
                href={activePdfModal.filePath} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#C75B2A] font-semibold hover:underline flex items-center gap-1"
              >
                Open in New Tab <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
