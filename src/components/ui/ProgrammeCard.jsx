import React from 'react';

const ProgrammeCard = ({ name, duration, description, affiliation, image }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden card-hover shadow-sm border border-slate-100 transition-all duration-300 flex flex-col justify-between">
      {image && (
        <div className="h-40 overflow-hidden relative group">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute top-3 right-3">
            <span className="text-xs bg-navy-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full font-medium shadow-sm">
              {duration}
            </span>
          </div>
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {!image && (
            <div className="flex items-start mb-3">
              <span className="text-xs bg-navy-100 text-navy-700 px-3 py-1 rounded-full font-medium">
                {duration}
              </span>
            </div>
          )}
          <h3 className="text-lg font-bold text-navy-700 font-display">
            {name}
          </h3>
          <p className="text-slate-600 text-sm mt-2 line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            Affiliation: {affiliation}
          </span>
          <a href="#" className="text-saffron-500 text-sm font-medium hover:text-saffron-600 transition-colors inline-flex items-center group">
            View Details <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeCard;
