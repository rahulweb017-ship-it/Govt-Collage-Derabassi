import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Clock, Home, ArrowLeft, FileText, Phone, Mail } from 'lucide-react';

const pageTitles = {
  '/about/overview': { title: 'Campus & Departments Overview', category: 'About Us' },
  '/about/naac-report': { title: 'Latest NAAC Report & Accreditations', category: 'About Us' },
  '/about/vision-mission': { title: 'Vision & Mission Statement', category: 'About Us' },
  '/academics/departments-faculty': { title: 'Departments & Faculty Directory', category: 'Academics' },
  '/academics/courses-offered': { title: 'Courses & Programmes Offered', category: 'Academics' },
  '/academics/syllabus': { title: 'Latest University Syllabus', category: 'Academics' },
  '/academics/nep-guidelines': { title: 'NEP 2020 Guidelines & Curriculum Framework', category: 'Academics' },
  '/academics/distance-learning': { title: 'Distance Learning & Private Course Guidelines', category: 'Academics' },
  '/students/admission-rules': { title: 'Student Admission Rules & Guidelines', category: 'Students' },
  '/examinations/date-sheets': { title: 'University Examination Date Sheets', category: 'Examinations' },
  '/examinations/results': { title: 'Examination Results & Marks Verification', category: 'Examinations' },
  '/examinations/form': { title: 'Semester Examination Form & Fee Guidelines', category: 'Examinations' },
  '/examinations/admit-card': { title: 'Admit Card & Roll Number Download', category: 'Examinations' },
  '/infrastructure/library': { title: 'Library Infrastructure & Digital Resources', category: 'Infrastructure' },
  '/infrastructure/it-facilities': { title: 'IT Facilities & Computer Laboratories', category: 'Infrastructure' },
  '/infrastructure/physical': { title: 'Physical Infrastructure & Campus Amenities', category: 'Infrastructure' },
};

const PlaceholderPage = () => {
  const location = useLocation();
  const info = pageTitles[location.pathname] || {
    title: 'Institutional Resource',
    category: 'Information Desk'
  };

  return (
    <div className="min-h-[70vh] bg-slate-50 pt-8 sm:pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
          <Link to="/" className="hover:text-[#8B1E2B] flex items-center gap-1 font-medium">
            <Home size={13} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-medium">{info.category}</span>
          <span>/</span>
          <span className="text-[#8B1E2B] font-bold">{info.title}</span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm text-center relative overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-[#FAF4E6] text-[#8B1E2B] flex items-center justify-center mx-auto mb-5 border border-[#EADBBD]">
            <Clock size={32} />
          </div>

          <div className="inline-block px-3 py-1 bg-[#8B1E2B]/10 text-[#8B1E2B] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            {info.category}
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight mb-2">
            Content Coming Soon
          </h1>

          <h2 className="text-base sm:text-lg font-bold text-[#8B1E2B] mb-4">
            {info.title}
          </h2>

          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed mb-8">
            This section is currently being updated with the latest official notifications, guidelines, and documents from Government College, Dera Bassi (Affiliated to Punjabi University, Patiala). Please check back shortly.
          </p>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 max-w-md mx-auto text-xs text-slate-600 text-left mb-8 space-y-2">
            <div className="font-bold text-slate-800">For Urgent Enquiries:</div>
            <div className="flex items-center gap-2">
              <Phone size={13} className="text-[#8B1E2B]" />
              <span>Administrative Office: <strong>01762-295167</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={13} className="text-[#8B1E2B]" />
              <span>Official Email: <strong>gcderabassi@gmail.com</strong></span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#8B1E2B] hover:bg-[#68141F] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </Link>
            <a
              href="https://admission.punjab.gov.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Punjab Admission Portal &rarr;</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PlaceholderPage;
