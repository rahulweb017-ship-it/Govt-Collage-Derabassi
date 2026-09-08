import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  Search, 
  BookOpen, 
  Building2, 
  Sparkles, 
  GraduationCap, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Layers, 
  ExternalLink,
  Laptop,
  Palette,
  Atom,
  Languages,
  TrendingUp,
  Activity,
  Dumbbell,
  Microscope,
  Compass
} from 'lucide-react';

// Official 20 Departments sourced directly from: https://gcderabassi.ac.in/department.php
const departmentsData = [
  // 1. Humanities & Languages
  {
    number: '01',
    name: 'Punjabi',
    fullName: 'Department of Punjabi',
    category: 'Humanities & Languages',
    categoryKey: 'humanities',
    shortLabel: 'Language, Literature & Cultural Heritage',
    degrees: ['B.A. (Compulsory & Elective)'],
    description: 'Promoting profound linguistic understanding, Gurmukhi script scholarship, classical and contemporary Punjabi literature, folklore, and regional cultural heritage.',
    highlights: ['Compulsory & Elective Syllabi', 'Celebration of Mother Language Day', 'Literary Seminars & Poetry Symposiums'],
    icon: Languages,
    image: '/images/old_site/pic_20_3_.JPG',
    color: '#8B1E2B'
  },
  {
    number: '02',
    name: 'English',
    fullName: 'Department of English',
    category: 'Humanities & Languages',
    categoryKey: 'humanities',
    shortLabel: 'Communication, World Literature & Language Skills',
    degrees: ['B.A.', 'B.Com', 'B.Sc.', 'BCA'],
    description: 'Cultivating expressive communication, analytical reading, critical inquiry, and an appreciation of global and Indian English literature across all academic streams.',
    highlights: ['Language Laboratory Access', 'Creative Writing Workshops', 'Personality & Communication Modules'],
    icon: BookOpen,
    image: '/images/old_site/course-1.jpg',
    color: '#0C1D3F'
  },
  {
    number: '03',
    name: 'Hindi',
    fullName: 'Department of Hindi',
    category: 'Humanities & Languages',
    categoryKey: 'humanities',
    shortLabel: 'National Language, Literature & Translation',
    degrees: ['B.A. (Elective)'],
    description: 'Focusing on the evolution of Hindi prose, poetry, dramatic works, functional Hindi, and practical translation techniques to equip students with bilingual competency.',
    highlights: ['Hindi Diwas Celebrations', 'Debate & Essay Competitions', 'Modern Hindi Literary Discourse'],
    icon: BookOpen,
    image: '/images/old_site/news_20_14_.jpeg',
    color: '#C75B2A'
  },
  {
    number: '04',
    name: 'History',
    fullName: 'Department of History',
    category: 'Humanities & Languages',
    categoryKey: 'humanities',
    shortLabel: 'Indian Heritage, Punjab History & Modern World',
    degrees: ['B.A.'],
    description: 'Imparting historical consciousness through the study of ancient civilizations, medieval India, national freedom movements, and in-depth history of Punjab.',
    highlights: ['Heritage Site Field Visits', 'Historical Artifact & Document Studies', 'Punjab Freedom Struggle Lectures'],
    icon: Compass,
    image: '/images/old_site/pic_20_4_.JPG',
    color: '#8B1E2B'
  },
  {
    number: '05',
    name: 'Economics',
    fullName: 'Department of Economics',
    category: 'Humanities & Languages',
    categoryKey: 'humanities',
    shortLabel: 'Macroeconomics, Development & Quantitative Analysis',
    degrees: ['B.A.', 'B.Com'],
    description: 'Providing a thorough grounding in microeconomic theory, macroeconomic policy, public finance, agricultural economics of Punjab, and quantitative economic models.',
    highlights: ['Union & State Budget Analysis Sessions', 'Socio-Economic Surveys', 'Banking & Financial System Studies'],
    icon: TrendingUp,
    image: '/images/old_site/course-2.jpg',
    color: '#0C1D3F'
  },
  {
    number: '06',
    name: 'Political Science',
    fullName: 'Department of Political Science',
    category: 'Humanities & Languages',
    categoryKey: 'humanities',
    shortLabel: 'Constitutional Governance, Theory & Global Relations',
    degrees: ['B.A.'],
    description: 'Educating students on democratic frameworks, the Constitution of India, human rights, administrative apparatus, and contemporary global political affairs.',
    highlights: ['Youth Parliament & Mock Sessions', 'Voter Awareness & Civic Literacy Drives', 'Constitutional Law Workshops'],
    icon: Building2,
    image: '/images/old_site/rally_20_2_.JPG',
    color: '#C75B2A'
  },
  {
    number: '07',
    name: 'Sociology',
    fullName: 'Department of Sociology',
    category: 'Humanities & Languages',
    categoryKey: 'humanities',
    shortLabel: 'Social Structures, Culture & Community Dynamics',
    degrees: ['B.A.'],
    description: 'Analyzing societal evolution, caste and class dynamics, gender relations, rural-urban transition in Punjab, and sociological research methodologies.',
    highlights: ['Community Field Surveys', 'Social Awareness Campaigns', 'Gender Sensitization Panels'],
    icon: Layers,
    image: '/images/old_site/blood_20_3_.JPG',
    color: '#0C1D3F'
  },
  {
    number: '08',
    name: 'Public Administration',
    fullName: 'Department of Public Administration',
    category: 'Humanities & Languages',
    categoryKey: 'humanities',
    shortLabel: 'Administrative Systems, Governance & Civil Services',
    degrees: ['B.A.'],
    description: 'Training future administrators and civic professionals in public policy formulation, bureaucratic ethics, e-governance initiatives, and local governance.',
    highlights: ['Panchayati Raj Case Studies', 'Civil Services Preparation Seminars', 'Public Policy Discussion Groups'],
    icon: Building2,
    image: '/images/old_site/news_20_5_.jpeg',
    color: '#8B1E2B'
  },
  {
    number: '09',
    name: 'Geography',
    fullName: 'Department of Geography',
    category: 'Humanities & Languages',
    categoryKey: 'humanities',
    shortLabel: 'Cartography, Physical Landscape & Geospatial Study',
    degrees: ['B.A.'],
    description: 'Exploring physical geography, geomorphology, climate patterns, human settlements, cartography, and practical surveying using specialized laboratory tools.',
    highlights: ['Dedicated Geography Practical Lab', 'Field Plane-Table Surveying', 'Topographical Sheet Interpretation'],
    icon: Compass,
    image: '/images/campus_moments/geo (1).jpg',
    color: '#C75B2A'
  },

  // 2. Commerce & Management
  {
    number: '10',
    name: 'Commerce',
    fullName: 'Department of Commerce',
    category: 'Commerce & Management',
    categoryKey: 'commerce',
    shortLabel: 'Accounting, Corporate Finance & Business Law',
    degrees: ['B.Com', 'M.Com'],
    description: 'A flagship department offering comprehensive training in financial accounting, corporate regulations, taxation, cost accounting, banking operations, and auditing.',
    highlights: ['Industry Guest Lectures', 'Commerce Society Activities', 'Tally & Computerized Accounting Training'],
    icon: TrendingUp,
    image: '/images/old_site/course-2.jpg',
    color: '#0C1D3F'
  },
  {
    number: '11',
    name: 'Commerce Honours',
    fullName: 'Department of Commerce Honours',
    category: 'Commerce & Management',
    categoryKey: 'commerce',
    shortLabel: 'Advanced Accounting, Auditing & Financial Analytics',
    degrees: ['B.Com (Honours)'],
    description: 'An advanced, merit-oriented program providing rigorous specialization in corporate finance, forensic accounting, investment analysis, and strategic business leadership.',
    highlights: ['Advanced Financial Research Seminars', 'Corporate Internship Opportunities', 'Specialized Elective Tracks'],
    icon: TrendingUp,
    image: '/images/old_site/course-3.jpg',
    color: '#8B1E2B'
  },

  // 3. Science & Technology
  {
    number: '12',
    name: 'Physics',
    fullName: 'Department of Physics',
    category: 'Science & Technology',
    categoryKey: 'science',
    shortLabel: 'Classical Mechanics, Optics & Electronics',
    degrees: ['B.Sc. (Non-Medical)'],
    description: 'Nurturing foundational physics comprehension through rigorous experimental optics, electromagnetism, modern physics, solid-state theory, and laboratory rigor.',
    highlights: ['Equipped Undergraduate Physics Lab', 'Dark Room for Optical Experiments', 'Science Exhibition Participation'],
    icon: Atom,
    image: '/images/old_site/course-4.jpg',
    color: '#0C1D3F'
  },
  {
    number: '13',
    name: 'Chemistry',
    fullName: 'Department of Chemistry',
    category: 'Science & Technology',
    categoryKey: 'science',
    shortLabel: 'Organic, Inorganic & Physical Chemistry',
    degrees: ['B.Sc. (Non-Medical)'],
    description: 'Delivering hands-on laboratory education in chemical synthesis, qualitative and volumetric analysis, thermodynamics, and spectroscopic principles.',
    highlights: ['Dedicated Chemical Analysis Laboratory', 'Safe Reagent & Fume Stations', 'Environmental Chemistry Projects'],
    icon: Microscope,
    image: '/images/old_site/course-4.jpg',
    color: '#C75B2A'
  },
  {
    number: '14',
    name: 'Mathematics',
    fullName: 'Department of Mathematics',
    category: 'Science & Technology',
    categoryKey: 'science',
    shortLabel: 'Calculus, Algebra & Differential Equations',
    degrees: ['B.Sc. (Non-Medical)', 'B.A.', 'BCA'],
    description: 'Cultivating analytical rigor and problem-solving through abstract algebra, multi-variable calculus, differential equations, real analysis, and numerical computing.',
    highlights: ['Mathematical Problem-Solving Circles', 'Inter-College Quiz Participation', 'Applied Mathematics Foundations'],
    icon: TrendingUp,
    image: '/images/old_site/pic_20_1_.JPG',
    color: '#8B1E2B'
  },
  {
    number: '15',
    name: 'Computer Science',
    fullName: 'Department of Computer Science',
    category: 'Science & Technology',
    categoryKey: 'science',
    shortLabel: 'Algorithms, Programming & Computing Systems',
    degrees: ['B.A. (Elective)', 'B.Sc.'],
    description: 'Building strong computational foundations in programming languages, computer organization, operating systems, data structures, and computer fundamentals.',
    highlights: ['Air-Conditioned Computer Laboratory', 'High-Speed Broadband Connectivity', 'Hands-on Programming Practicals'],
    icon: Laptop,
    image: '/images/campus_moments/comp-2.jpg',
    color: '#0C1D3F'
  },
  {
    number: '16',
    name: 'Computer Application',
    fullName: 'Department of Computer Application',
    category: 'Science & Technology',
    categoryKey: 'science',
    shortLabel: 'Software Engineering, Web Technologies & Databases',
    degrees: ['BCA (Bachelor of Computer Applications)'],
    description: 'A professional technical department equipping students with industrial software development, database administration, web technologies, and systems engineering.',
    highlights: ['Advanced BCA Computer Lab', 'Project-Based Curriculum', 'Industry Tech Seminars & Workshops'],
    icon: Laptop,
    image: '/images/campus_moments/comp-1.jpg',
    color: '#C75B2A'
  },

  // 4. Fine Arts, Music & Physical Education
  {
    number: '17',
    name: 'Fine Arts',
    fullName: 'Department of Fine Arts',
    category: 'Fine Arts, Music & Physical Education',
    categoryKey: 'arts',
    shortLabel: 'Painting, Applied Art, Sculpting & Aesthetics',
    degrees: ['B.A.'],
    description: 'Inspiring artistic ingenuity in painting, sketching, still life, composition, color theory, landscape painting, and visual aesthetic history.',
    highlights: ['Dedicated Art Studio with Easels', 'Annual Campus Art Exhibitions', 'Punjabi University Youth Festival Accolades'],
    icon: Palette,
    image: '/images/old_site/fineart.JPG',
    color: '#8B1E2B'
  },
  {
    number: '18',
    name: 'Music Vocal',
    fullName: 'Department of Music Vocal',
    category: 'Fine Arts, Music & Physical Education',
    categoryKey: 'arts',
    shortLabel: 'Indian Classical Ragas, Folk Melodies & Harmonium',
    degrees: ['B.A.'],
    description: 'Training vocalists in Hindustani classical music, ragas, taals, Gurmat Sangeet, Punjabi folk traditions, and stage presentation skills.',
    highlights: ['Acoustic Music Practice Room', 'Harmonium, Tanpura & Tabla Instruments', 'Consistent Youth Festival Trophies'],
    icon: Activity,
    image: '/images/old_site/talenthunt_20_4_.JPG',
    color: '#0C1D3F'
  },
  {
    number: '19',
    name: 'Physical Education',
    fullName: 'Department of Physical Education',
    category: 'Fine Arts, Music & Physical Education',
    categoryKey: 'arts',
    shortLabel: 'Sports Science, Athletic Training & Physical Fitness',
    degrees: ['B.A.'],
    description: 'Promoting athletic mastery, sports physiology, kinesiology, yoga, team ethics, and comprehensive physical fitness across multiple disciplines.',
    highlights: ['15-Acre Sprawling Sports Ground', 'Indoor & Outdoor Gymnasium Facilities', 'Inter-College Athletics Tournaments'],
    icon: Dumbbell,
    image: '/images/campus_moments/sport (1).jpg',
    color: '#C75B2A'
  },
  {
    number: '20',
    name: 'Home Science',
    fullName: 'Department of Home Science',
    category: 'Fine Arts, Music & Physical Education',
    categoryKey: 'arts',
    shortLabel: 'Nutrition, Dietetics, Resource Management & Textiles',
    degrees: ['B.A.'],
    description: 'Bridging science and daily life through nutrition, food preservation, interior design, garment construction, child development, and family resource management.',
    highlights: ['Dedicated Home Science Practical Lab', 'Culinary & Nutrition Exhibitions', 'Textile Design & Craft Workshops'],
    icon: Sparkles,
    image: '/images/old_site/talenthunt_20_2_.JPG',
    color: '#8B1E2B'
  }
];

const categoryGroups = [
  { key: 'all', label: 'All Departments', count: 20 },
  { key: 'humanities', label: 'Humanities & Languages', count: 9 },
  { key: 'commerce', label: 'Commerce & Management', count: 2 },
  { key: 'science', label: 'Science & Technology', count: 5 },
  { key: 'arts', label: 'Fine Arts, Music & Physical Education', count: 4 }
];

export default function DepartmentsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalDept, setActiveModalDept] = useState(null);

  // Filtered department list
  const filteredDepartments = departmentsData.filter(dept => {
    const matchesCategory = selectedCategory === 'all' || dept.categoryKey === selectedCategory;
    const matchesSearch = 
      dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.shortLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.degrees.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
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
          {/* 2. Breadcrumb: Home / Academics / Departments */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6 sm:mb-8 font-medium">
            <Link to="/" className="flex items-center gap-1 hover:text-[#F49D71] transition-colors">
              <Home size={15} />
              <span>Home</span>
            </Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-300">Academics</span>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-[#F49D71] font-semibold">Departments</span>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F49D71] text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles size={13} className="text-[#C75B2A]" />
              <span>20 Official Academic Disciplines · Punjabi University Affiliated</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-display">
              Academic Departments
            </h1>

            <p className="mt-4 sm:mt-5 text-lg sm:text-xl text-slate-200 font-normal leading-relaxed">
              Explore the disciplines, people and learning opportunities that shape life at Government College Dera Bassi.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-2xl font-light">
              From foundational humanities and cutting-edge computing to business excellence, experimental sciences, and fine arts—each department offers rigorous curricula guided by experienced collegiate faculty.
            </p>

            {/* Quick Metrics */}
            <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#F49D71]">20</div>
                <div className="text-slate-300 uppercase tracking-wider mt-0.5">Departments</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">4</div>
                <div className="text-slate-300 uppercase tracking-wider mt-0.5">Faculties</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#F49D71]">B++</div>
                <div className="text-slate-300 uppercase tracking-wider mt-0.5">NAAC Grade</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">1975</div>
                <div className="text-slate-300 uppercase tracking-wider mt-0.5">Estd. Legacy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. “EXPLORE OUR DEPARTMENTS” & CATEGORY FILTER */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0C1D3F]/5 text-[#0C1D3F] text-xs font-bold uppercase tracking-widest mb-2 border border-slate-200">
              <Layers size={13} className="text-[#C75B2A]" />
              <span>Academic Directory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0C1D3F] tracking-tight">
              Explore Our Departments
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Discover programs across four specialized academic divisions designed for intellectual depth and professional readiness.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search department, degree, or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-[#C75B2A] focus:ring-1 focus:ring-[#C75B2A] shadow-2xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {categoryGroups.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#0C1D3F] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-2xl leading-none font-bold text-[11px] px-2 py-0.5 rounded-full ${
                  isActive
                    ? 'bg-[#C75B2A] text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 4. DEPARTMENT CARDS GRID */}
        <div className="mt-10">
          {filteredDepartments.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
              <Search size={32} className="mx-auto text-slate-300 mb-3" />
              <h3 className="text-lg font-bold text-slate-700">No departments match your query</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">Try clearing your search term or selecting a different academic group.</p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 bg-[#0C1D3F] text-white rounded-lg text-xs font-semibold hover:bg-[#1B3A6B] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDepartments.map((dept) => {
                const IconComponent = dept.icon;
                return (
                  <div
                    key={dept.number}
                    className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#0C1D3F]/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
                  >
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#C75B2A] transition-colors duration-300" />

                    <div>
                      {/* Card Header: Number & Category Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-black text-[#0C1D3F]/25 group-hover:text-[#C75B2A]/40 transition-colors font-display">
                            {dept.number}
                          </span>
                          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#FAF4E6] text-[#8B1E2B] border border-[#C75B2A]/20">
                            {dept.category}
                          </span>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-[#0C1D3F] text-[#0C1D3F] group-hover:text-[#F49D71] border border-slate-200 group-hover:border-[#0C1D3F] flex items-center justify-center transition-all duration-300 shadow-2xs">
                          <IconComponent size={18} />
                        </div>
                      </div>

                      {/* Department Name */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#0C1D3F] tracking-tight group-hover:text-[#C75B2A] transition-colors">
                        {dept.name}
                      </h3>

                      {/* Short Label */}
                      <p className="text-xs font-semibold text-[#8B1E2B] mt-1.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C75B2A] shrink-0" />
                        <span>{dept.shortLabel}</span>
                      </p>

                      {/* Description */}
                      <p className="text-slate-600 text-xs sm:text-sm mt-3.5 leading-relaxed line-clamp-3">
                        {dept.description}
                      </p>

                      {/* Degree Badges */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                        {dept.degrees.map((deg, idx) => (
                          <span 
                            key={idx} 
                            className="text-[11px] font-medium bg-slate-50 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200"
                          >
                            {deg}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer: Explore Department Button */}
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <button
                        onClick={() => setActiveModalDept(dept)}
                        className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 group-hover:bg-[#0C1D3F] text-[#0C1D3F] group-hover:text-white text-xs font-bold transition-all duration-200"
                      >
                        <span>Explore Department</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>

      </section>

      {/* 5. LARGE REAL GCD CAMPUS / LAB / CLASSROOM IMAGE WITH "Learn. Explore. Discover." */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#0C1D3F] text-white shadow-2xl border-2 border-slate-200">
          
          {/* Real GCD Lab / Classroom Photo with Sophisticated Reveal */}
          <div className="relative h-[420px] sm:h-[480px] lg:h-[540px] w-full overflow-hidden">
            <img 
              src="/images/campus_moments/comp-1.jpg" 
              alt="Government College Dera Bassi Computer & Research Laboratories" 
              className="w-full h-full object-cover object-center filter brightness-60 contrast-110 scale-100 hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Deep institutional gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1D3F] via-[#0C1D3F]/70 to-transparent" />
            <div className="absolute inset-0 bg-phulkari-pattern opacity-15 pointer-events-none" />
            
            {/* Large Typography Callout */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 lg:p-16 z-10 max-w-4xl">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F49D71] text-xs font-bold uppercase tracking-widest mb-4 w-fit">
                <Sparkles size={14} className="text-[#C75B2A]" />
                <span>Modern Academic Infrastructure</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display leading-tight">
                Learn. Explore. Discover.
              </h2>

              <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-200 font-light max-w-2xl leading-relaxed">
                Empowering students with smart lecture halls, advanced computer networks, scientific research laboratories, and creative studios that turn theoretical knowledge into real-world capability.
              </p>

              {/* Lab & Facility Highlights Row */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="font-bold text-[#F49D71] text-xs uppercase tracking-wider mb-1">State-of-the-Art Labs</div>
                  <p className="text-slate-200 text-xs font-light">Equipped computing, geography, physics, chemistry, and home science practical stations.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="font-bold text-[#F49D71] text-xs uppercase tracking-wider mb-1">Qualified Faculty</div>
                  <p className="text-slate-200 text-xs font-light">Experienced UGC-qualified educators dedicated to academic excellence and mentoring.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="font-bold text-[#F49D71] text-xs uppercase tracking-wider mb-1">Career & Industry Ready</div>
                  <p className="text-slate-200 text-xs font-light">Curriculum aligned with NEP guidelines, university syllabi, and competitive exams.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* REASSURANCE / QUICK ACADEMIC LINKS */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF4E6] text-[#C75B2A] flex items-center justify-center shrink-0 border border-[#C75B2A]/20">
                <GraduationCap size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#0C1D3F] text-sm">Official University Syllabi</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Curricula prescribed by Punjabi University, Patiala with regular updates.</p>
                <Link to="/academics/syllabus" className="inline-flex items-center gap-1 text-xs font-bold text-[#C75B2A] hover:underline mt-2">
                  <span>View Syllabus</span>
                  <ChevronRight size={12} />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF4E6] text-[#C75B2A] flex items-center justify-center shrink-0 border border-[#C75B2A]/20">
                <BookOpen size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#0C1D3F] text-sm">Undergraduate & Postgrad Degrees</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Explore full eligibility, subject combinations, and fee structures.</p>
                <Link to="/academics/courses-offered" className="inline-flex items-center gap-1 text-xs font-bold text-[#C75B2A] hover:underline mt-2">
                  <span>Explore Courses</span>
                  <ChevronRight size={12} />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF4E6] text-[#C75B2A] flex items-center justify-center shrink-0 border border-[#C75B2A]/20">
                <Building2 size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#0C1D3F] text-sm">Campus & Academic Overview</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Learn about our 15-acre infrastructure, library, and faculty staff.</p>
                <Link to="/about/overview" className="inline-flex items-center gap-1 text-xs font-bold text-[#C75B2A] hover:underline mt-2">
                  <span>Read Overview</span>
                  <ChevronRight size={12} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DEPARTMENT DETAIL MODAL */}
      {activeModalDept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-6 animate-fadeIn">
          <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-slate-300 flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="bg-[#0C1D3F] text-white p-6 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F49D71]">
                  <span>Department #{activeModalDept.number}</span>
                  <span>•</span>
                  <span>{activeModalDept.category}</span>
                </div>
                <button
                  onClick={() => setActiveModalDept(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                {activeModalDept.fullName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {activeModalDept.shortLabel}
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0C1D3F] mb-2">About the Discipline</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeModalDept.description}
                </p>
              </div>

              {/* Degrees Offered */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0C1D3F] mb-2">Offered in Programmes</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalDept.degrees.map((deg, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-[#FAF4E6] text-[#8B1E2B] font-semibold text-xs border border-[#C75B2A]/20"
                    >
                      {deg}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0C1D3F] mb-2">Curriculum & Department Highlights</h4>
                <ul className="space-y-2">
                  {activeModalDept.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-[#C75B2A] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Affiliation Note */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span>Affiliated to Punjabi University, Patiala</span>
                <span className="font-semibold text-[#0C1D3F]">Govt. College Dera Bassi</span>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalDept(null)}
                className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                Close
              </button>

              <div className="flex items-center gap-2">
                <Link
                  to="/academics/courses-offered"
                  className="px-4 py-2 rounded-xl bg-[#0C1D3F] text-white text-xs font-semibold hover:bg-[#1B3A6B] transition-colors"
                >
                  View Course Details
                </Link>
                <a
                  href="https://admission.punjab.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#C75B2A] text-white text-xs font-semibold hover:bg-[#A84820] transition-colors flex items-center gap-1"
                >
                  <span>Admission Portal</span>
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
