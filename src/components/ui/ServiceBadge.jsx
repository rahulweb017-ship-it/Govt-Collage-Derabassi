import React from 'react';

const ServiceBadge = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-5 card-hover shadow-sm border border-slate-100 flex gap-4 transition-all duration-300">
      <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center shrink-0">
        {Icon && <Icon className="text-navy-500 w-5 h-5" />}
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-navy-700 font-display">
          {title}
        </h4>
        <p className="text-xs text-slate-500 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceBadge;
