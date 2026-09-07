import React, { useState } from 'react';
import { Calendar as CalendarIcon, Download, Flag, Clock, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const oddSemester = [
  { event: 'Commencement of Classes (UG & PG)', date: 'July 15, 2026' },
  { event: 'Talent Hunt & Cultural Induction', date: 'August 22, 2026' },
  { event: 'Mid-Semester Test 1 (MST-1)', date: 'September 18 – 25, 2026' },
  { event: 'Zonal Youth Festival (Punjabi University)', date: 'October 12 – 16, 2026' },
  { event: 'Mid-Semester Test 2 (MST-2)', date: 'November 05 – 12, 2026' },
  { event: 'Practical / Laboratory Examinations', date: 'November 20 – 28, 2026' },
  { event: 'Theory Semester Examinations', date: 'December 02 – 24, 2026' },
  { event: 'Winter Break', date: 'December 25, 2026 – January 07, 2027' }
];

const evenSemester = [
  { event: 'Re-opening & Commencement of Even Sem', date: 'January 08, 2027' },
  { event: 'Annual Athletics Meet & Sports Day', date: 'February 15 – 16, 2027' },
  { event: 'Mid-Semester Test 1 (MST-1)', date: 'March 05 – 12, 2027' },
  { event: 'Mid-Semester Test 2 (MST-2)', date: 'April 10 – 17, 2027' },
  { event: 'Practical Examinations', date: 'April 25 – May 02, 2027' },
  { event: 'Annual University Theory Exams', date: 'May 06 – June 02, 2027' },
  { event: 'Summer Vacations', date: 'June 05 – July 10, 2027' }
];

const holidaysPunjab = [
  { name: 'Republic Day', date: 'January 26, 2026', day: 'Monday' },
  { name: 'Birthday of Sri Guru Ravidas Ji', date: 'February 01, 2026', day: 'Sunday' },
  { name: 'Maha Shivratri', date: 'February 15, 2026', day: 'Sunday' },
  { name: 'Holi', date: 'March 04, 2026', day: 'Wednesday' },
  { name: 'Shahidi Diwas of Bhagat Singh Ji', date: 'March 23, 2026', day: 'Monday' },
  { name: 'Mahavir Jayanti', date: 'March 31, 2026', day: 'Tuesday' },
  { name: 'Good Friday', date: 'April 03, 2026', day: 'Friday' },
  { name: 'Baisakhi / Dr. B.R. Ambedkar Jayanti', date: 'April 14, 2026', day: 'Tuesday' },
  { name: 'Id-ul-Fitr', date: 'March 21, 2026', day: 'Saturday' },
  { name: 'Independence Day', date: 'August 15, 2026', day: 'Saturday' },
  { name: 'Janam Ashtami', date: 'September 04, 2026', day: 'Friday' },
  { name: 'Mahatma Gandhi Jayanti', date: 'October 02, 2026', day: 'Friday' },
  { name: 'Dussehra', date: 'October 20, 2026', day: 'Tuesday' },
  { name: 'Diwali', date: 'November 08, 2026', day: 'Sunday' },
  { name: 'Birthday of Sri Guru Nanak Dev Ji', date: 'November 24, 2026', day: 'Tuesday' },
  { name: 'Christmas Day', date: 'December 25, 2026', day: 'Friday' }
];

const AcademicCalendarPage = () => {
  const [activeTab, setActiveTab] = useState('odd');

  return (
    <div className="min-h-screen bg-slate-50 pt-8 sm:pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
          <Link to="/" className="hover:text-[#8B1E2B] flex items-center gap-1 font-medium">
            <Home size={13} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-medium">About Us</span>
          <span>/</span>
          <span className="text-[#8B1E2B] font-bold">Academic Calendar & Holidays</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-[#4A1018] text-white rounded-2xl p-8 sm:p-12 mb-10 shadow-sm relative overflow-hidden">
          <div className="inline-flex items-center gap-2 bg-white/10 text-saffron-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
            <CalendarIcon size={14} className="text-saffron-400" />
            <span>Academic Year 2026–2027</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-sans text-white">
            Academic Calendar & <span className="text-saffron-400">Government Holidays</span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-3xl mt-3 leading-relaxed">
            Official schedule of teaching terms, Mid-Semester Tests (MST), university examinations, vacations, and gazetted Punjab Government holidays.
          </p>
        </div>

        {/* Toggle Bar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('odd')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'odd'
                  ? 'bg-[#8B1E2B] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Odd Semester (Jul – Dec)
            </button>
            <button
              onClick={() => setActiveTab('even')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'even'
                  ? 'bg-[#8B1E2B] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Even Semester (Jan – Jun)
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

          <a
            href="#download-calendar"
            onClick={(e) => {
              e.preventDefault();
              alert('Downloading official Government College Dera Bassi Academic Calendar 2026-27 (PDF)');
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#8B1E2B] hover:text-[#601520] hover:underline"
          >
            <Download size={14} />
            <span>Download Calendar PDF</span>
          </a>
        </div>

        {/* Content Tabs */}
        {activeTab === 'odd' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
            <h3 className="text-xl font-black text-slate-900 font-sans mb-6 flex items-center gap-2">
              <Clock size={20} className="text-[#8B1E2B]" />
              <span>Odd Semester Timeline (Semesters I, III, V)</span>
            </h3>

            <div className="divide-y divide-slate-100">
              {oddSemester.map((item, idx) => (
                <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] text-[#8B1E2B] font-bold text-xs flex items-center justify-center border border-[#EADBBD]">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-bold text-slate-800">{item.event}</span>
                  </div>
                  <span className="text-xs font-bold text-[#8B1E2B] bg-rose-50 px-3 py-1 rounded-full border border-rose-100 self-start sm:self-auto">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'even' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
            <h3 className="text-xl font-black text-slate-900 font-sans mb-6 flex items-center gap-2">
              <Clock size={20} className="text-[#8B1E2B]" />
              <span>Even Semester Timeline (Semesters II, IV, VI)</span>
            </h3>

            <div className="divide-y divide-slate-100">
              {evenSemester.map((item, idx) => (
                <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] text-[#8B1E2B] font-bold text-xs flex items-center justify-center border border-[#EADBBD]">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-bold text-slate-800">{item.event}</span>
                  </div>
                  <span className="text-xs font-bold text-[#8B1E2B] bg-rose-50 px-3 py-1 rounded-full border border-rose-100 self-start sm:self-auto">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'holidays' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
            <h3 className="text-xl font-black text-slate-900 font-sans mb-6 flex items-center gap-2">
              <Flag size={20} className="text-[#8B1E2B]" />
              <span>Punjab Government Gazetted Holidays List 2026</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {holidaysPunjab.map((holiday, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800">{holiday.name}</h4>
                    <span className="text-[11px] text-slate-500">{holiday.day}</span>
                  </div>
                  <span className="text-xs font-bold text-[#8B1E2B] bg-white px-2.5 py-1 rounded border border-slate-200">
                    {holiday.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AcademicCalendarPage;
