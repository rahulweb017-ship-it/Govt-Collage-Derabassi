import React from 'react';

const AnnouncementItem = ({ title, date, description, isNew }) => {
  const dateObj = typeof date === 'string' ? { day: date.split(' ')[0], month: date.split(' ')[1] } : date;

  return (
    <div className="flex items-start gap-4 py-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors rounded-lg p-2 -mx-2">
      <div className="bg-ivory-100 rounded-lg p-2 min-w-[56px] text-center shrink-0 border border-slate-200">
        <div className="text-lg font-bold text-navy-700 leading-none">{dateObj?.day || '--'}</div>
        <div className="text-xs font-medium text-saffron-500 uppercase mt-1">{dateObj?.month || '---'}</div>
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-navy-700 flex items-center flex-wrap gap-2 text-base">
          {title}
          {isNew && (
            <span className="bg-saffron-500 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
              New
            </span>
          )}
        </h4>
        {description && (
          <p className="text-sm text-slate-500 mt-1 line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default AnnouncementItem;
