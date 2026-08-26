import React from 'react';
import { Shield, BookOpen } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const Recognition = () => {
  return (
    <section id="recognition" className="py-20 bg-white">
      <div className="section-container">
        <SectionHeading 
          title="Accreditation & Recognition" 
          subtitle="Committed to quality and excellence" 
          align="center" 
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-cream rounded-2xl p-8 text-center flex flex-col items-center justify-center">
            <div className="text-5xl font-bold text-saffron-500">B++</div>
            <h3 className="text-navy-700 font-semibold mt-2">NAAC Accredited</h3>
            <p className="text-sm text-slate-500 mt-1">Cycle 3 · 2024</p>
            <div className="flex gap-2 justify-center mt-4 flex-wrap items-center">
              <span className="text-xs bg-white px-3 py-1 rounded-full text-navy-600 border border-slate-100">B+ (2004)</span>
              <span className="text-slate-400">→</span>
              <span className="text-xs bg-white px-3 py-1 rounded-full text-navy-600 border border-slate-100">B (2016)</span>
              <span className="text-slate-400">→</span>
              <span className="text-xs bg-white px-3 py-1 rounded-full text-navy-600 border border-slate-100 font-semibold">B++ (2024)</span>
            </div>
          </div>
          
          <div className="bg-navy-50 rounded-2xl p-8 text-center flex flex-col items-center justify-center">
            <Shield size={40} className="text-navy-500" />
            <h3 className="font-semibold text-navy-700 mt-3">UGC Recognized</h3>
            <p className="text-sm text-slate-500 mt-1">Section 2(f) & 12(B)</p>
            <p className="text-xs text-slate-400 mt-2">University Grants Commission</p>
          </div>
          
          <div className="bg-saffron-50 rounded-2xl p-8 text-center flex flex-col items-center justify-center">
            <BookOpen size={40} className="text-saffron-500" />
            <p className="text-sm text-slate-500 mt-3">Affiliated to</p>
            <h3 className="font-semibold text-navy-700 mt-1">Punjabi University, Patiala</h3>
          </div>
        </div>
        
        <div className="mt-12 bg-ivory-100 rounded-xl p-6 max-w-3xl mx-auto text-center">
          <p className="text-xs text-saffron-500 uppercase tracking-widest font-semibold">✦ Institutional Best Practice</p>
          <h4 className="text-lg font-semibold text-navy-700 mt-2">Dastak Programme</h4>
          <p className="text-sm text-slate-500 mt-2">A unique initiative bridging the gap between college and community through student-led outreach.</p>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
