import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Home, 
  Search, 
  ExternalLink,
  CheckCircle,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const prospectusList = [
  {
    year: '2026-27',
    title: 'Prospectus 2026-27',
    session: 'Academic Session 2026–2027 (Current)',
    file: '/images/prospectus/Prospectus-GCDB-2026-27.pdf',
    size: '3.3 MB',
    isLatest: true
  },
  {
    year: '2025-26',
    title: 'Prospectus 2025-26',
    session: 'Academic Session 2025–2026',
    file: '/images/prospectus/Prospectus%202025-26.pdf',
    size: '2.9 MB',
    isLatest: false
  },
  {
    year: '2024-25',
    title: 'Prospectus 2024-25',
    session: 'Academic Session 2024–2025',
    file: '/images/prospectus/Prospectus%202024-25.pdf',
    size: '2.5 MB',
    isLatest: false
  },
  {
    year: '2023-24',
    title: 'Prospectus 2023-24',
    session: 'Academic Session 2023–2024',
    file: '/images/prospectus/Prospectus%202023-24.pdf',
    size: '2.5 MB',
    isLatest: false
  },
  {
    year: '2022-23',
    title: 'Prospectus 2022-23',
    session: 'Academic Session 2022–2023',
    file: '/images/prospectus/PROSPECTUS%202022-23%20GCDeraBassi.pdf',
    size: '4.4 MB',
    isLatest: false
  },
  {
    year: '2021-22',
    title: 'Prospectus 2021-22',
    session: 'Academic Session 2021–2022',
    file: '/images/prospectus/Prospectus%202021-22%20Govt%20College%20Dera%20Bassi.pdf',
    size: '8.5 MB',
    isLatest: false
  },
  {
    year: '2020-21',
    title: 'Prospectus 2020-21',
    session: 'Academic Session 2020–2021',
    file: '/images/prospectus/Prospectus2020-21.pdf',
    size: '57.1 MB',
    isLatest: false
  }
];

const ProspectusPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = prospectusList.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.year.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-8 sm:pt-12 pb-24 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
          <Link to="/" className="hover:text-[#8B1E2B] flex items-center gap-1 font-medium">
            <Home size={13} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#8B1E2B] font-bold">Prospectus</span>
        </div>

        {/* Header Title Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8B1E2B]/10 text-[#8B1E2B] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <BookOpen size={13} />
                <span>Official College Brochures</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0C1D3F] tracking-tight">
                College Prospectus
              </h1>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                Download official prospectuses of Government College, Dera Bassi containing admission criteria, course structures, fee frameworks, and statutory academic guidelines.
              </p>
            </div>

            {/* Quick Search */}
            <div className="w-full md:w-72 shrink-0">
              <div className="relative">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by year..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#8B1E2B] focus:ring-1 focus:ring-[#8B1E2B] transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Prospectus List - Matched Exactly to User Reference Layout */}
        <div className="space-y-3 mb-12">
          {filtered.map((item) => (
            <div 
              key={item.year}
              className="bg-[#F8F9FA] hover:bg-white border border-slate-200/80 rounded-lg px-6 py-4.5 flex items-center justify-between transition-all duration-200 shadow-2xs hover:shadow-sm group"
            >
              {/* Left Side: Title */}
              <div className="flex items-center space-x-3.5 min-w-0">
                <span className="text-slate-800 font-bold text-base sm:text-[17px] tracking-tight">
                  {item.title}
                </span>
                {item.isLatest && (
                  <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow-2xs tracking-wider">
                    Latest
                  </span>
                )}
                <span className="hidden sm:inline-block text-xs text-slate-400 font-medium">
                  ({item.size})
                </span>
              </div>

              {/* Right Side: Download Button */}
              <a
                href={item.file}
                download
                target="_blank"
                rel="noreferrer"
                className="text-[#4D7C0F] hover:text-[#365314] font-bold text-sm sm:text-base flex items-center gap-1.5 px-3 py-1 rounded hover:bg-emerald-50/60 transition-colors shrink-0"
              >
                <span>Download</span>
                <Download size={15} className="transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="bg-white rounded-xl p-10 text-center border border-slate-200 text-slate-500">
              No prospectus found matching "{searchTerm}".
            </div>
          )}
        </div>

        {/* Additional Admission Information Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
              <CheckCircle size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                Important Information for Prospective Students
              </h3>
              <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                Candidates applying for Undergraduate and Postgraduate programmes must refer to the latest Prospectus 2026–27 for admission eligibility, subject combinations, reservation policies, and merit calculations set by Department of Higher Education (DHE) Punjab and Punjabi University, Patiala.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold">
                <a 
                  href="https://admission.punjab.gov.in" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#8B1E2B] hover:underline"
                >
                  <span>Centralized Punjab Admission Portal</span>
                  <ExternalLink size={12} />
                </a>
                <span className="text-slate-300">|</span>
                <Link to="/students/anti-ragging" className="text-slate-700 hover:text-[#8B1E2B]">
                  Anti-Ragging & Harassment Cell
                </Link>
                <span className="text-slate-300">|</span>
                <Link to="/about/calendar" className="text-slate-700 hover:text-[#8B1E2B]">
                  Academic Calendar 2026–27
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProspectusPage;
