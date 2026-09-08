import React from 'react';
import { User, Mail, Sparkles } from 'lucide-react';
import { principal } from '../../data/content';

const PrincipalMessage = () => {
  return (
    <section className="py-24 bg-ivory-100 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="aspect-[3/4] w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative group bg-white">
              <img 
                src="/images/principal/dr-sujata-kaushal.jpg" 
                alt="Vanitha Rao - Principal Government College Dera Bassi" 
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
            </div>
            <h3 className="text-xl font-black text-slate-900 font-sans mt-5 text-center">{principal.name}</h3>
            <p className="text-sm font-bold text-[#8B1E2B] text-center uppercase tracking-wider mt-0.5">{principal.designation}</p>
            <p className="text-xs text-slate-500 text-center mt-0.5 font-medium">Government College, Dera Bassi</p>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white text-[#8B1E2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-[#EEDBBA] shadow-xs">
              <Sparkles size={13} className="text-[#C75B2A]" />
              <span>Leadership Desk</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 font-sans">
              Principal's <span className="text-[#8B1E2B]">Message</span>
            </h2>
            
            <blockquote className="mt-6 border-l-4 border-[#8B1E2B] pl-6 text-slate-700 leading-relaxed text-base sm:text-lg bg-white/80 p-6 sm:p-8 rounded-r-2xl shadow-sm">
              "{principal.message}"
            </blockquote>

            <div className="mt-6">
              <a 
                href={`mailto:${principal.email}`} 
                className="text-sm font-bold text-[#8B1E2B] hover:text-[#601520] inline-flex items-center gap-2 transition-colors"
              >
                <Mail size={16} />
                <span>{principal.email}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
