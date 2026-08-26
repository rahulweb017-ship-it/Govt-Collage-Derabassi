import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-8 card-hover shadow-sm border border-slate-100 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-saffron-50 flex items-center justify-center">
        {Icon && <Icon className="text-saffron-500 w-6 h-6" />}
      </div>
      <h3 className="text-lg font-semibold text-navy-700 mt-4 font-display">
        {title}
      </h3>
      <p className="text-slate-500 text-sm mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
