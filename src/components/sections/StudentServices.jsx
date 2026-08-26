import React from 'react';
import { Briefcase, GraduationCap, Monitor, Home, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import ServiceBadge from '../ui/ServiceBadge';
import { studentServices } from '../../data/content';

const iconMap = {
  Briefcase,
  GraduationCap,
  Monitor,
  Home,
  MessageCircle,
  ShieldCheck
};

const StudentServices = () => {
  return (
    <section id="services" className="py-24 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FAF4E6] text-[#8B1E2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-[#EEDBBA]">
            <Sparkles size={13} className="text-[#C75B2A]" />
            <span>Support & Facilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 font-sans">
            Student <span className="text-[#8B1E2B]">Services</span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base font-medium mt-3">
            Supporting our students at every step with comprehensive welfare cells, career guidance, and modern amenities.
          </p>
        </div>
        
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentServices && studentServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || GraduationCap;
            return (
              <ServiceBadge 
                key={index} 
                title={service.title} 
                description={service.description} 
                icon={IconComponent} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudentServices;
