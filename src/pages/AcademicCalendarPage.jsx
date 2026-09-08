import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Download, 
  FileText, 
  Eye, 
  Search, 
  Home, 
  Sparkles,
  Archive,
  CheckCircle2,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Official Academic Calendars sourced directly from: https://gcderabassi.ac.in/calender.php
const officialCalendars = [
  {
    id: 1,
    title: 'Academic Calendar 2025-26',
    session: 'Session 2025–2026',
    file: '/images/prospectus/Acedmic/Academic-Calender-2025-26.pdf',
    size: '23 KB',
    isLatest: true
  },
  {
    id: 2,
    title: 'Academic Calendar 2023-24',
    session: 'Session 2023–2024',
    file: '/images/prospectus/Acedmic/Academic calender 23-24.pdf',
    size: '949 KB',
    isLatest: false
  },
  {
    id: 3,
    title: 'Academic Calendar 2022-23',
    session: 'Session 2022–2023',
    file: '/images/prospectus/Acedmic/Academic Calendar 2022-23.pdf',
    size: '501 KB',
    isLatest: false
  },
  {
    id: 4,
    title: 'Academic Calendar 2021-22',
    session: 'Session 2021–2022',
    file: '/images/prospectus/Acedmic/Academic Calendar 2021-22 GCD.pdf',
    size: '549 KB',
    isLatest: false
  },
  {
    id: 5,
    title: 'Academic Calendar 2020-21',
    session: 'Session 2020–2021',
    file: '/images/prospectus/Acedmic/Academic Calendar 2020-21.pdf',
    size: '110 KB',
    isLatest: false
  },
  {
    id: 6,
    title: 'Academic Calendar 2019-20',
    session: 'Session 2019–2020',
    file: '/images/prospectus/Acedmic/calender 2019-20 GCDB.pdf',
    size: '712 KB',
    isLatest: false
  },
  {
    id: 7,
    title: 'Academic Calendar 2018-19',
    session: 'Session 2018–2019',
    file: '/images/prospectus/Acedmic/Academic Calender 2018-19.pdf',
    size: '171 KB',
    isLatest: false
  },
  {
    id: 8,
    title: 'Academic Calendar 2017-18',
    session: 'Session 2017–2018',
    file: '/images/prospectus/Acedmic/Academic Calendar 17-18.pdf',
    size: '108 KB',
    isLatest: false
  }
];

const punjabHolidays2026 = [
  { name: 'Republic Day', date: '26 January 2026', day: 'Monday' },
  { name: 'Birthday of Sri Guru Ravidas Ji', date: '01 February 2026', day: 'Sunday' },
  { name: 'Maha Shivratri', date: '15 February 2026', day: 'Sunday' },
  { name: 'Holi', date: '04 March 2026', day: 'Wednesday' },
  { name: 'Shahidi Diwas of Bhagat Singh Ji', date: '23 March 2026', day: 'Monday' },
  { name: 'Baisakhi / Dr. B.R. Ambedkar Jayanti', date: '14 April 2026', day: 'Tuesday' },
  { name: 'Id-ul-Fitr', date: '21 March 2026', day: 'Saturday' },
  { name: 'Independence Day', date: '15 August 2026', day: 'Saturday' },
  { name: 'Janam Ashtami', date: '04 September 2026', day: 'Friday' },
  { name: 'Mahatma Gandhi Jayanti', date: '02 October 2026', day: 'Friday' },
  { name: 'Dussehra', date: '20 October 2026', day: 'Tuesday' },
  { name: 'Diwali', date: '08 November 2026', day: 'Sunday' },
  { name: 'Birthday of Sri Guru Nanak Dev Ji', date: '24 November 2026', day: 'Tuesday' },
  { name: 'Christmas Day', date: '25 December 2026', day: 'Friday' }
];

const AcademicCalendarPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [previewPdf, setPreviewPdf] = useState(null);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'holidays'

  const filteredCalendars = officialCalendars.filter(cal => 
    cal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cal.session.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-8 sm:pt-12 pb-24 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* BREADCRUMB */}
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-[#8B1E2B] flex items-center gap-1 font-medium">
            <Home size={13} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-medium">Academics</span>
          <span>/</span>
          <span className="text-[#8B1E2B] font-bold">Academic Calendars</span>
        </div>

        {/* HERO HEADER */}
        <div className="bg-gradient-to-br from-[#0C1D3F] via-[#152E55] to-[#4A1018] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden border border-slate-700/40">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#8B1E2B]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-300 border border-white/20 mb-4">
              <CalendarIcon size={14} />
              <span>Official Institutional Calendars</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Academic Calendars
            </h1>
            <p className="font-gurmukhi text-lg sm:text-2xl text-amber-200/90 font-medium mt-2">
              ਅਕਾਦਮਿਕ ਕੈਲੰਡਰ
            </p>
            <p className="text-slate-200 text-sm sm:text-base mt-4 leading-relaxed font-light">
              Official academic schedule for Government College, Dera Bassi affiliated to Punjabi University, Patiala. Download annual academic calendars containing teaching term durations, vacation intervals, mid-semester evaluations, and university examination windows.
            </p>
          </div>
        </div>

        {/* NAVIGATION & FILTER TABS */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'all'
                  ? 'bg-[#8B1E2B] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Academic Calendars ({officialCalendars.length})
            </button>
            <button
              onClick={() => setActiveTab('holidays')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'holidays'
                  ? 'bg-[#8B1E2B] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Punjab Govt. Holidays 2026
            </button>
          </div>

          {/* Search box */}
          {activeTab !== 'holidays' && (
            <div className="relative w-full md:w-72 shrink-0">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by year or session..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#8B1E2B] focus:ring-1 focus:ring-[#8B1E2B] transition-all"
              />
            </div>
          )}
        </div>

        {/* MAIN OFFICIAL ARCHIVE */}
        {activeTab === 'all' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2 mb-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0C1D3F]">
                  Annual Academic Calendars
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Official repository from Government College, Dera Bassi (2017–18 through 2025–26)
                </p>
              </div>
              <span className="text-xs font-bold text-[#8B1E2B] bg-rose-50 px-3 py-1.5 rounded-full border border-rose-100 shadow-2xs">
                {filteredCalendars.length} Documents
              </span>
            </div>

            {/* BIGGER & HIGHLIGHTED CARDS FOR EACH CALENDAR */}
            <div className="space-y-4">
              {filteredCalendars.map((calendar) => (
                <div 
                  key={calendar.id} 
                  className={`rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-5 transition-all duration-300 ${
                    calendar.isLatest 
                      ? 'bg-gradient-to-r from-[#FAF4E6] via-white to-rose-50/50 border-2 border-[#8B1E2B]/40 shadow-md ring-2 ring-[#8B1E2B]/10 hover:shadow-lg' 
                      : 'bg-white hover:bg-slate-50/90 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300'
                  }`}
                >
                  {/* Left info column */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 border transition-all ${
                      calendar.isLatest 
                        ? 'bg-[#8B1E2B] text-white border-[#8B1E2B] shadow-md shadow-[#8B1E2B]/20' 
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}>
                      <FileText size={26} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                        <h4 className="font-black text-slate-900 text-lg sm:text-2xl tracking-tight">
                          {calendar.title}
                        </h4>
                        {calendar.isLatest ? (
                          <span className="bg-[#8B1E2B] text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow-xs tracking-wider flex items-center gap-1">
                            <Sparkles size={11} className="text-amber-300" />
                            <span>Latest Session</span>
                          </span>
                        ) : (
                          <span className="bg-amber-100/70 text-amber-900 text-xs font-bold uppercase px-2.5 py-0.5 rounded-full border border-amber-200/80 tracking-wide flex items-center gap-1">
                            <Archive size={11} className="text-amber-700" />
                            <span>Archived Edition</span>
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-600 font-medium">
                        <span className={`inline-flex items-center font-bold px-2.5 py-0.5 rounded-md text-xs ${
                          calendar.isLatest 
                            ? 'bg-rose-100/70 text-[#8B1E2B] border border-rose-200/70' 
                            : 'bg-slate-100 text-slate-800 border border-slate-200/70'
                        }`}>
                          {calendar.session}
                        </span>
                        <span className="text-slate-300 font-black">•</span>
                        <span className="text-slate-700 font-semibold">Punjabi University, Patiala</span>
                        <span className="text-slate-300 font-black">•</span>
                        <span className="inline-flex items-center font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md text-xs border border-slate-200/60">
                          PDF ({calendar.size})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right action buttons - Larger & Prominent */}
                  <div className="flex items-center gap-3 sm:self-center pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 shrink-0">
                    <button
                      onClick={() => setPreviewPdf(calendar)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-sm font-bold transition-all shadow-xs"
                      title="Preview PDF"
                    >
                      <Eye size={16} />
                      <span>Preview</span>
                    </button>
                    <a
                      href={calendar.file}
                      download
                      className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-xl text-sm font-bold transition-all shadow-md ${
                        calendar.isLatest 
                          ? 'bg-[#8B1E2B] hover:bg-[#601520] text-white ring-2 ring-[#8B1E2B]/20' 
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                      title="Download PDF"
                    >
                      <Download size={16} />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: PUNJAB GOVT HOLIDAYS */}
        {activeTab === 'holidays' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8B1E2B] bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                  Government of Punjab Notification
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0C1D3F] mt-2">
                  Public Holidays & Observances 2026
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  List of gazetted holidays observed by Government College, Dera Bassi during the academic calendar year 2026.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {punjabHolidays2026.map((holiday, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#8B1E2B]/40 hover:shadow-xs transition-all flex items-start justify-between"
                >
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {holiday.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {holiday.day}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#8B1E2B] bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs shrink-0">
                    {holiday.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PDF PREVIEW MODAL */}
        {previewPdf && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#8B1E2B]/10 text-[#8B1E2B] flex items-center justify-center">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-base sm:text-lg">
                      {previewPdf.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {previewPdf.session} • PDF Document ({previewPdf.size})
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={previewPdf.file}
                    download
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#8B1E2B] hover:bg-[#601520] px-4 py-2 rounded-lg transition-colors shadow-xs"
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </a>
                  <button
                    onClick={() => setPreviewPdf(null)}
                    className="w-9 h-9 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center ml-2 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Body: iframe */}
              <div className="flex-1 min-h-[550px] bg-slate-100 p-2">
                <iframe
                  src={previewPdf.file}
                  title={previewPdf.title}
                  className="w-full h-full min-h-[550px] rounded-xl border border-slate-200 bg-white"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AcademicCalendarPage;
