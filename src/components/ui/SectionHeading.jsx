import React from 'react';

const SectionHeading = ({ title, subtitle, align = 'left', className = '' }) => {
  const alignmentClass = align === 'center' ? 'text-center' : 'text-left';
  const lineAlignmentClass = align === 'center' ? 'mx-auto' : 'mr-auto';

  return (
    <div className={`${alignmentClass} ${className}`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 font-sans">
        {title}
      </h2>
      <div className={`w-[60px] h-[3.5px] bg-[#8B1E2B] mt-4 mb-2 rounded-full ${lineAlignmentClass}`} />
      {subtitle && (
        <p className="text-slate-600 text-sm sm:text-base font-medium mt-3 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
