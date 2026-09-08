import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Award,
  Sparkles,
  Building2,
  Calendar,
  Landmark,
  ShieldCheck,
  GraduationCap,
  BookOpen,
  Monitor,
  FlaskConical,
  Briefcase,
  Dumbbell,
  Lightbulb,
  Microscope,
  Compass,
  UserCheck,
  ShieldAlert,
  Mail,
  TrendingUp
} from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-8 sm:pt-12 pb-24 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* BREADCRUMB */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 -mb-8">
          <Link to="/" className="hover:text-[#8B1E2B] flex items-center gap-1 font-medium">
            <Home size={13} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-medium">About Us</span>
          <span>/</span>
          <span className="text-[#8B1E2B] font-bold">Campus & History Overview</span>
        </div>

        {/* 1. HERO / INTRO BANNER */}
        <section className="bg-gradient-to-br from-[#0C1D3F] via-[#152E55] to-[#4A1018] text-white rounded-3xl p-8 sm:p-14 shadow-xl relative overflow-hidden border border-slate-700/40">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#8B1E2B]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C75B2A]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            {/* Badges strip */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 bg-[#FAF4E6] text-[#8B1E2B] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm border border-[#EADBBD]">
                <Sparkles size={14} className="text-[#C75B2A]" />
                <span>50 Saal Bemisaal • 50 Years Unmatched</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur text-white px-3.5 py-1.5 rounded-full text-xs font-semibold border border-white/20">
                <Calendar size={13} className="text-[#F49D71]" />
                <span>Est. 1975</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold border border-emerald-400/30">
                <Award size={13} className="text-emerald-300" />
                <span>NAAC B++ Accredited</span>
              </div>
            </div>

            {/* College Name in English and Gurmukhi */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-sans text-white leading-tight">
              Government College, <span className="text-[#F49D71]">Dera Bassi</span>
            </h1>
            <p className="font-gurmukhi text-lg sm:text-2xl text-amber-200/90 font-medium mt-3">
              ਸਰਕਾਰੀ ਕਾਲਜ, ਡੇਰਾ ਬੱਸੀ
            </p>

            {/* Tagline */}
            <p className="text-slate-200 text-base sm:text-lg max-w-3xl mt-5 leading-relaxed font-light">
              Shaping Minds, Building Futures Since 1975. Affiliated to Punjabi University, Patiala, and recognized by the UGC under Section 2(f) & 12(B).
            </p>

            {/* Quick summary strip */}
            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-[#F49D71]">1975</span>
                <span className="text-xs text-slate-300 uppercase tracking-wider font-medium">Foundation Year</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-white">15 Acres</span>
                <span className="text-xs text-slate-300 uppercase tracking-wider font-medium">Lush Campus</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-emerald-300">Grade B++</span>
                <span className="text-xs text-slate-300 uppercase tracking-wider font-medium">NAAC Accredited</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-amber-300">PM-USHA</span>
                <span className="text-xs text-slate-300 uppercase tracking-wider font-medium">Grant Recipient</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. COLLEGE HISTORY */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[#8B1E2B] bg-[#8B1E2B]/10 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Landmark size={14} />
              <span>Heritage & Foundation</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0C1D3F] tracking-tight">
              College History: <span className="text-[#8B1E2B]">Five Decades of Excellence</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Tracing our remarkable journey from modest beginnings to becoming a premier government higher education institution in Punjab.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* History Milestone 1 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/70 hover:border-[#8B1E2B]/30 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-lg mb-4">
                1975
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Visionary Foundation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Founded on <strong className="text-slate-800">15 January 1975</strong> on the initiative of then Finance Minister <strong className="text-slate-800">Sh. Hans Raj Sharma</strong>.
              </p>
            </div>

            {/* History Milestone 2 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/70 hover:border-[#8B1E2B]/30 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-[#8B1E2B] flex items-center justify-center font-black text-lg mb-4">
                126
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Primary School Roots</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Started with <strong className="text-slate-800">126 students</strong>, operating from a corner of a primary school near the Chandigarh–Ambala National Highway.
              </p>
            </div>

            {/* History Milestone 3 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/70 hover:border-[#8B1E2B]/30 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0C1D3F] flex items-center justify-center font-black text-lg mb-4">
                1984
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Permanent Campus</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Moved to its present permanent campus on <strong className="text-slate-800">7 February 1984</strong>.
              </p>
            </div>

            {/* History Milestone 4 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/70 hover:border-[#8B1E2B]/30 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-black text-lg mb-4">
                6 Blocks
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Campus Infrastructure</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Grew into a campus with <strong className="text-slate-800">six main academic blocks</strong>, modern laboratories, sports facilities, and smart classrooms.
              </p>
            </div>

            {/* History Milestone 5 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/70 hover:border-[#8B1E2B]/30 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-lg mb-4">
                B++
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">NAAC & PM-USHA Grant</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Recently awarded <strong className="text-slate-800">B++ grade by NAAC</strong>; <strong className="text-slate-800">one of 11 colleges in Punjab</strong> to receive the PM-USHA Grant.
              </p>
            </div>

            {/* History Milestone 6 */}
            <div className="bg-gradient-to-br from-[#8B1E2B] to-[#4A1018] text-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur text-white flex items-center justify-center font-black text-lg mb-4">
                50 Yrs
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Golden Jubilee</h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                Currently celebrating 50 years (Golden Jubilee — <strong className="text-amber-200">50 Saal Bemisaal</strong>).
              </p>
            </div>
          </div>
        </section>

        {/* 3. PRINCIPAL'S MESSAGE */}
        <section className="bg-[#FAF4E6] rounded-3xl p-8 sm:p-14 border border-[#EADBBD] shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Photo Column */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="aspect-[3/4] w-full max-w-xs rounded-2xl overflow-hidden shadow-xl border-4 border-white relative group bg-white">
                <img 
                  src="/images/principal/dr-sujata-kaushal.jpg" 
                  alt="Principal Smt. Vinita Rao" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-black text-slate-900">Smt. Vinita Rao</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#8B1E2B] mt-0.5">Principal</p>
                <p className="text-xs text-slate-600 font-medium">Government College, Dera Bassi</p>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-white text-[#8B1E2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#EEDBBA] shadow-xs">
                <Sparkles size={13} className="text-[#C75B2A]" />
                <span>Leadership Desk</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0C1D3F]">
                Principal's Message
              </h2>
              <p className="text-sm sm:text-base font-bold text-[#8B1E2B] mt-1">
                "Your Future at the Threshold of a New Era"
              </p>

              <blockquote className="mt-6 border-l-4 border-[#8B1E2B] pl-6 text-slate-700 leading-relaxed text-sm sm:text-base bg-white/90 p-6 sm:p-8 rounded-r-2xl shadow-sm">
                <p className="mb-4">
                  Welcome to Government College, Dera Bassi. As we embark upon "Your Future at the Threshold of a New Era", our institution stands at the vanguard of higher learning, embracing the transformative spirit of the National Education Policy (NEP 2020).
                </p>
                <p className="mb-4">
                  We are deeply committed to the holistic growth of our students—nurturing intellect, character, and practical skill sets. At GCD, we harmonize our rich 50-year institutional heritage with contemporary pedagogical advancements, experiential learning, and digital innovation.
                </p>
                <p>
                  I invite you to explore the myriad opportunities across our arts, sciences, commerce, and sports domains, and become part of a community committed to knowledge, righteousness, and purposeful leadership.
                </p>
              </blockquote>

              <div className="mt-6 flex flex-wrap items-center gap-6">
                <a 
                  href="mailto:principal.gcdb@punjab.gov.in" 
                  className="text-sm font-bold text-[#8B1E2B] hover:text-[#601520] inline-flex items-center gap-2 transition-colors bg-white px-4 py-2 rounded-lg border border-[#EADBBD] shadow-xs"
                >
                  <Mail size={16} />
                  <span>principal.gcdb@punjab.gov.in</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 4. CAMPUS OVERVIEW */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[#8B1E2B] bg-[#8B1E2B]/10 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 size={14} />
              <span>Campus Facilities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0C1D3F] tracking-tight">
              Campus Overview
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Discover the modern infrastructure, peaceful academic atmosphere, and recreational amenities across our 15-acre campus.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Campus Point 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#0C1D3F]/10 text-[#0C1D3F] flex items-center justify-center mb-4">
                <Landmark size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Peaceful Green Campus</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Peaceful green campus with six main academic blocks thoughtfully planned for focused scholarship.
              </p>
            </div>

            {/* Campus Point 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#C75B2A] flex items-center justify-center mb-4">
                <Monitor size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Smart Classrooms</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Smart classrooms with modern audio-visual learning tools, interactive displays, and digital instructional setups.
              </p>
            </div>

            {/* Campus Point 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <FlaskConical size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Equipped Laboratories</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fully equipped computer and science laboratories with high-speed computing setups and practical research equipment.
              </p>
            </div>

            {/* Campus Point 4 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-[#8B1E2B] flex items-center justify-center mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">AC Library & Study Hub</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Air-conditioned library and dedicated study hub designed for quiet reading, scholarly exploration, and self-study.
              </p>
            </div>

            {/* Campus Point 5 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Dumbbell size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Sports Ground & Gymnasiums</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sports ground, open stadium, two indoor gymnasiums, and one open gym catering to athletic training and fitness.
              </p>
            </div>

            {/* Campus Point 6 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Student Center & Amenities</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Student center, canteen, and a safe, welcoming environment with modern amenities ensuring student well-being.
              </p>
            </div>

          </div>
        </section>

        {/* 5. DEPARTMENTS */}
        <section className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-[#8B1E2B] bg-[#8B1E2B]/10 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <GraduationCap size={14} />
              <span>Disciplines & Streams</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0C1D3F] tracking-tight">
              Departments
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Academic departments grouped by stream according to the official College Prospectus:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Stream 1: Arts / Social Sciences */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:border-[#8B1E2B]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8B1E2B] bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                    Stream 1
                  </span>
                  <Compass size={20} className="text-[#8B1E2B]" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Arts / Social Sciences</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Economics",
                    "History",
                    "Political Science",
                    "Public Administration",
                    "Home Science",
                    "Physical Education",
                    "Geography",
                    "Sociology"
                  ].map((dept) => (
                    <span key={dept} className="text-xs bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-md border border-slate-200/70">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                8 Academic Subjects
              </div>
            </div>

            {/* Stream 2: Languages */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:border-[#8B1E2B]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                    Stream 2
                  </span>
                  <BookOpen size={20} className="text-amber-600" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Punjabi Literature",
                    "Hindi Literature",
                    "English Literature"
                  ].map((dept) => (
                    <span key={dept} className="text-xs bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-md border border-slate-200/70">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                3 Language Disciplines
              </div>
            </div>

            {/* Stream 3: Performing Arts */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:border-[#8B1E2B]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                    Stream 3
                  </span>
                  <Sparkles size={20} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Performing Arts</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Fine Arts",
                    "Music (Vocal)"
                  ].map((dept) => (
                    <span key={dept} className="text-xs bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-md border border-slate-200/70">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                2 Artistic Specializations
              </div>
            </div>

            {/* Stream 4: Sciences */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:border-[#8B1E2B]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    Stream 4
                  </span>
                  <FlaskConical size={20} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Sciences</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Physics",
                    "Chemistry",
                    "Mathematics",
                    "Computer Science",
                    "Information Technology"
                  ].map((dept) => (
                    <span key={dept} className="text-xs bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-md border border-slate-200/70">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                5 Science & Computing Subjects
              </div>
            </div>

            {/* Stream 5: Commerce */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:border-[#8B1E2B]/40 transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    Stream 5
                  </span>
                  <TrendingUp size={20} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Commerce</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Commerce",
                    "BBA",
                    "BCA",
                    "M.Com"
                  ].map((dept) => (
                    <span key={dept} className="text-xs bg-slate-100 text-slate-700 font-semibold px-3 py-1.5 rounded-md border border-slate-200/70">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                UG & PG Professional Programmes
              </div>
            </div>

          </div>
        </section>

        {/* 6. FACILITIES */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-[#8B1E2B] bg-[#8B1E2B]/10 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={14} />
              <span>Campus Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0C1D3F] tracking-tight">
              Facilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Comprehensive facilities and specialized cells operating for academic excellence and student support:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. Amrita Pritam Memorial Library */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Amrita Pritam Memorial Library</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  19,000+ books, e-resources, ONOS portal access.
                </p>
              </div>
            </div>

            {/* 2. ICT Smart Campus */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                <Monitor size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">ICT Smart Campus</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Wi-Fi campus, smart boards, projector-enabled classrooms.
                </p>
              </div>
            </div>

            {/* 3. High-Tech Laboratories */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center shrink-0">
                <FlaskConical size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">High-Tech Laboratories</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Physics, Chemistry, Computer Science labs.
                </p>
              </div>
            </div>

            {/* 4. Industrial Collaboration */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-[#8B1E2B] flex items-center justify-center shrink-0">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Industrial Collaboration</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Training and project exposure with nearby industrial hubs.
                </p>
              </div>
            </div>

            {/* 5. Sports Infrastructure */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Dumbbell size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Sports Infrastructure</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Multi-sport grounds, open stadium, 2 indoor gyms, 1 open gym.
                </p>
              </div>
            </div>

            {/* 6. Institutional Innovation Council (IIC) */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Lightbulb size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Institutional Innovation Council (IIC)</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Promoting student entrepreneurship and startups.
                </p>
              </div>
            </div>

            {/* 7. Research & Development Cell */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                <Microscope size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Research & Development Cell</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Fostering faculty and student academic research.
                </p>
              </div>
            </div>

            {/* 8. Employment Guidance Centre */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0">
                <Compass size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Employment Guidance Centre</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Career counseling, placement drives, soft-skills workshops.
                </p>
              </div>
            </div>

            {/* 9. Tutorial & Mentor Groups */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-800 flex items-center justify-center shrink-0">
                <UserCheck size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Tutorial & Mentor Groups</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Faculty mentoring system for academic and personal growth.
                </p>
              </div>
            </div>

            {/* 10. Anti-Sexual Harassment Cell */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                <ShieldAlert size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Anti-Sexual Harassment Cell</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ensuring a safe, respectful campus for women students.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 7. ACHIEVEMENTS STRIP */}
        <section className="bg-navy-700 text-white rounded-3xl py-12 px-6 sm:px-12 shadow-xl border-t-4 border-saffron-500 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-saffron-400 mb-2 border border-white/10">
                <Award size={14} />
                <span>Recognition & Benchmarks</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Achievements & Accreditations
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              
              {/* Stat 1: NAAC B++ */}
              <div className="text-center md:border-r border-saffron-400/30 px-2">
                <div className="text-4xl sm:text-5xl font-bold text-saffron-400 font-display">
                  NAAC B++
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-widest text-navy-200 mt-2 font-semibold">
                  Accredited Grade
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  Cycle 3 Assessment (2024)
                </div>
              </div>

              {/* Stat 2: PM-USHA */}
              <div className="text-center md:border-r border-saffron-400/30 px-2">
                <div className="text-4xl sm:text-5xl font-bold text-saffron-400 font-display">
                  PM-USHA
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-widest text-navy-200 mt-2 font-semibold">
                  Grant Recipient
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  1 of 11 Colleges in Punjab
                </div>
              </div>

              {/* Stat 3: NIRF / AISHE */}
              <div className="text-center md:border-r border-saffron-400/30 px-2">
                <div className="text-4xl sm:text-5xl font-bold text-saffron-400 font-display">
                  NIRF
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-widest text-navy-200 mt-2 font-semibold">
                  AISHE C-22140
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  National Institutional Ranking
                </div>
              </div>

              {/* Stat 4: 50 Years */}
              <div className="text-center px-2">
                <div className="text-4xl sm:text-5xl font-bold text-saffron-400 font-display">
                  50 Years
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-widest text-navy-200 mt-2 font-semibold">
                  Golden Jubilee
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  50 Saal Bemisaal (Est. 1975)
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUsPage;
