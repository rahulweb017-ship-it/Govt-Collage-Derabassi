import React from 'react';

const StatBar = ({ stats = [] }) => {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="bg-navy-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center ${index !== stats.length - 1 ? 'md:border-r border-saffron-400/30' : ''}`}
            >
              <div className="text-4xl sm:text-5xl font-bold text-saffron-400 font-display">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-widest text-navy-200 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatBar;
