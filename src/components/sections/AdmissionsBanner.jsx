import React from 'react';

const AdmissionsBanner = () => {
  return (
    <section id="admissions" className="bg-ivory-100 py-12">
      <div className="section-container max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-saffron-100 relative overflow-hidden shadow-sm">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-saffron-50 rounded-bl-full opacity-60"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left side */}
            <div className="flex-1 text-center md:text-left">
              <div className="text-saffron-500 text-sm font-semibold uppercase tracking-widest">
                Admissions Open
              </div>
              <h2 className="text-3xl font-bold text-navy-700 mt-1">
                Session 2026–27
              </h2>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                {['B.A.', 'B.Com', 'B.Com (Hons)', 'B.Sc.', 'BCA', 'M.Com'].map((prog) => (
                  <span key={prog} className="bg-navy-50 text-navy-600 text-xs px-3 py-1.5 rounded-full font-medium">
                    {prog}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Right side */}
            <div className="flex flex-col items-center md:items-end">
              <button className="bg-saffron-500 text-white rounded-lg px-8 py-3.5 font-semibold hover:bg-saffron-600 transition-colors duration-300 whitespace-nowrap">
                Start Your Application &rarr;
              </button>
              <span className="text-xs text-slate-400 mt-2 text-center md:text-right">
                Via Punjab Govt. Portal
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsBanner;
