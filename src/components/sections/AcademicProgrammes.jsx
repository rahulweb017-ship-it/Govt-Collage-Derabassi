import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, Phone, Mail, User, BookOpen, Sparkles } from 'lucide-react';

const academicDirectoryCol1 = [
  {
    title: 'B.A. / B.A. (Honours)',
    subtitle: 'Social Sciences / Languages / Performing Arts',
    href: 'https://online.gcderabassi.ac.in/'
  },
  {
    title: 'B.Sc. / B.Sc. (Honours)',
    subtitle: 'Life Sciences / Physical Sciences / Computer Sciences',
    href: 'https://online.gcderabassi.ac.in/'
  },
  {
    title: 'B.Com / B.Com (Honours)',
    subtitle: 'Single Major UG Programme',
    href: 'https://online.gcderabassi.ac.in/'
  },
  {
    title: 'B.Com / B.Com (Honours) — Self-Financing',
    subtitle: 'Single Major UG Programme',
    href: 'https://online.gcderabassi.ac.in/'
  },
  {
    title: 'BCA / BCA (Honours) — Self-Financing',
    subtitle: 'Single Major UG Programme',
    href: 'https://online.gcderabassi.ac.in/'
  }
];

const academicDirectoryCol2 = [
  {
    title: 'B.B.A. / B.B.A. (Honours) — Self-Financing',
    subtitle: 'Business Process Reengineering and Management',
    href: 'https://online.gcderabassi.ac.in/'
  },
  {
    title: 'B.A. (Aesthetic and Beauty Therapy) — Self-Financing',
    subtitle: '',
    href: 'https://online.gcderabassi.ac.in/'
  },
  {
    title: 'M.Com — Self-Financing',
    subtitle: 'Postgraduate Programme',
    href: 'https://online.gcderabassi.ac.in/'
  }
];

const AcademicProgrammes = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open('https://online.gcderabassi.ac.in/', '_blank', 'noopener,noreferrer');
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <section id="academics" className="py-20 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING (Chitkara Inspired: ACADEMIC YEAR 2026) */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 font-display">
            ACADEMIC <span className="text-[#8B1E2B]">YEAR 2026</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2 font-medium">
            Affiliated to Punjabi University, Patiala · Centralized Merit-Based Admissions for Session 2026–27
          </p>
        </div>

        {/* MAIN 2-PANEL LAYOUT (Left: 2-Column Program Directory | Right: Admissions Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 1. LEFT PANEL: WARM IVORY/CREAM PROGRAM DIRECTORY (8 COLUMNS ON DESKTOP) */}
          <div className="lg:col-span-8 bg-[#FAF4E6] rounded-2xl p-6 sm:p-8 lg:p-9 border border-[#EEDBBA] shadow-sm flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              
              {/* Column 1 */}
              <div className="space-y-3">
                {academicDirectoryCol1.map((item, idx) => (
                  <div key={idx} className="group">
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2.5 text-slate-900 group-hover:text-[#8B1E2B] transition-colors px-2 py-[10px] -mx-2 rounded-lg hover:bg-white/80 transition-all duration-150"
                    >
                      <span className="text-[#8B1E2B] font-bold text-base mt-0.5 leading-none shrink-0 group-hover:translate-x-0.5 transition-transform">
                        &gt;
                      </span>
                      <div>
                        <h3 className="font-bold text-sm sm:text-[15px] leading-snug tracking-tight underline-offset-2 group-hover:underline">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="text-xs text-slate-600 font-medium leading-tight mt-0.5">
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-3">
                {academicDirectoryCol2.map((item, idx) => (
                  <div key={idx} className="group">
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2.5 text-slate-900 group-hover:text-[#8B1E2B] transition-colors px-2 py-[10px] -mx-2 rounded-lg hover:bg-white/80 transition-all duration-150"
                    >
                      <span className="text-[#8B1E2B] font-bold text-base mt-0.5 leading-none shrink-0 group-hover:translate-x-0.5 transition-transform">
                        &gt;
                      </span>
                      <div>
                        <h3 className="font-bold text-sm sm:text-[15px] leading-snug tracking-tight underline-offset-2 group-hover:underline">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="text-xs text-slate-600 font-medium leading-tight mt-0.5">
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                    </a>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* 2. RIGHT PANEL: HIGH-CONVERSION ADMISSION ENQUIRY LEAD FORM (4 COLUMNS ON DESKTOP) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-200 flex flex-col justify-center">
            
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display leading-tight mb-4">
              Be a part of Punjab's Top Rated Government College
            </h3>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center animate-fadeIn my-auto">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-base font-bold text-emerald-900">Enquiry Received!</h4>
                <p className="text-xs text-emerald-700 mt-1.5 leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our admission counselling desk will contact you at <strong>{formData.phone}</strong> with centralized Punjabi University admission procedures.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-bold text-[#8B1E2B] hover:underline"
                >
                  Submit Another Query
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                
                <div className="space-y-3.5">
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name*"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1E2B] focus:border-transparent transition-all shadow-xs"
                    />
                  </div>

                  {/* Phone Number with Indian Flag */}
                  <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-white shadow-xs focus-within:ring-2 focus-within:ring-[#8B1E2B] focus-within:border-transparent">
                    <div className="flex items-center gap-1.5 px-3 py-3 bg-slate-50 border-r border-slate-200 text-xs font-semibold text-slate-700 shrink-0 select-none">
                      <span className="text-base leading-none">🇮🇳</span>
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="Phone Number*"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Your Email ID*"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1E2B] focus:border-transparent transition-all shadow-xs"
                    />
                  </div>

                  {/* Select Program */}
                  <div>
                    <select
                      required
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1E2B] focus:border-transparent transition-all shadow-xs"
                    >
                      <option value="">Select Program*</option>
                      <option value="B.Com">B.Com / B.Com (Hons.)</option>
                      <option value="BCA">BCA / BCA (Hons.)</option>
                      <option value="BBA">B.B.A. (Hons.)</option>
                      <option value="BA">B.A. / B.A. (Hons.)</option>
                      <option value="B.Sc. Non-Med">B.Sc. (Non-Medical)</option>
                      <option value="B.Sc. Med">B.Sc. (Medical)</option>
                      <option value="B.Sc. CS">B.Sc. (Computer Science)</option>
                      <option value="M.Com">M.Com (2 Years PG)</option>
                      <option value="PGDCA">PGDCA (1 Year Post Grad Diploma)</option>
                    </select>
                  </div>
                </div>

                <div>
                  {/* 1-Line Admission Notice */}
                  <p className="text-[11.5px] text-slate-500 leading-tight pb-2 text-center truncate">
                    By submitting, you agree to receive official admission alerts.
                  </p>

                  {/* Submit CTA Button */}
                  <a
                    href="https://online.gcderabassi.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (formData.name && formData.phone) {
                        setIsSubmitted(true);
                      }
                    }}
                    className="w-full bg-[#8B1E2B] hover:bg-[#601520] text-white font-bold py-3.5 px-6 rounded-lg text-sm sm:text-base uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 cursor-pointer flex items-center justify-center text-center"
                  >
                    Apply Now
                  </a>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default AcademicProgrammes;
