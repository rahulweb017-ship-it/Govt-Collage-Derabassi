import React from 'react';
import { ArrowRight, Calendar, ArrowUpRight, Megaphone, Newspaper, Sparkles } from 'lucide-react';

const featuredNews = {
  id: 'featured-1',
  category: 'STATE-LEVEL ACADEMIC TRIUMPH',
  titleGurmukhi: 'ਸਰਕਾਰੀ ਕਾਲਜ ਡੇਰਾਬੱਸੀ ਦੀ ਟੀਮ ਨੇ ਰਾਜ ਪੱਧਰੀ ਭੂਗੋਲ ਕੁਇਜ਼ ਵਿੱਚ ਵੱਡੀ ਸਫਲਤਾ ਪ੍ਰਾਪਤ ਕੀਤੀ',
  title: 'GCD Students Clinch Top Honours at State-Level Geography Quiz Competition',
  excerpt: 'Under the guidance and mentorship of Principal Dr. Sujata Kaushal, the student team of Government College Dera Bassi brought immense prestige to the institution by winning top state laurels, championship trophies, and certificates.',
  date: 'August 24, 2026',
  image: '/images/news/state-geography-quiz-win.png',
  href: '#recognition'
};

const secondaryNews = [
  {
    id: 'news-1',
    category: 'ADMISSIONS 2026–27',
    categoryColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    title: 'Centralized Merit Registration Portal Live for All UG & PG Programmes 2026–27',
    date: 'August 20, 2026',
    image: '/images/slides/admission-open-banner.jpg',
    href: '#admissions'
  },
  {
    id: 'news-2',
    category: 'SPORTS & ATHLETICS',
    categoryColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    title: 'GCD Athletes Clinch Gold & Silver Medals at Punjabi University Inter-College Championship',
    date: 'August 17, 2026',
    image: '/images/old_site/sport_20_1_.jpg',
    href: '#campus-life'
  },
  {
    id: 'news-3',
    category: 'COMMUNITY OUTREACH',
    categoryColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    title: 'NSS & Red Ribbon Club Organize Mega Blood Donation & Youth Health Awareness Camp',
    date: 'August 14, 2026',
    image: '/images/old_site/blood_20_1_.JPG',
    href: '#campus-life'
  }
];

const NewsAnnouncements = () => {
  return (
    <section id="news" className="py-24 bg-[#0B1329] text-white relative overflow-hidden select-none border-y border-white/10">
      
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B1E2B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. SECTION HEADER (Title Left + 'See All News ->' Right) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-10 border-b border-white/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-saffron-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-white/15">
              <Megaphone size={13} className="text-saffron-400" />
              <span>Press & Campus Bulletins</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-sans">
              News & <span className="text-[#8B1E2B]">Announcements</span>
            </h2>
          </div>

          <a 
            href="#recognition" 
            className="inline-flex items-center gap-2.5 text-sm font-bold text-white hover:text-saffron-400 transition-colors group self-start sm:self-end"
          >
            <span>See All News</span>
            <div className="w-8 h-8 rounded-full bg-white text-[#0B1329] group-hover:bg-saffron-400 flex items-center justify-center transition-all duration-300 shadow-md">
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
        </div>

        {/* 2. EDITORIAL GRID (Left: 6 Cols Featured Story | Right: 6 Cols 3-Item Stack) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Featured Lead News Story */}
          <div className="lg:col-span-6 group">
            <a href={featuredNews.href} className="block">
              
              {/* Featured Image */}
              <div className="aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden relative bg-slate-900 border border-white/10 shadow-2xl">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title} 
                  className="w-full h-full object-cover sm:object-contain bg-white transform scale-100 group-hover:scale-103 transition-transform duration-700 ease-out"
                />

                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-[#8B1E2B] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg border border-white/20">
                    {featuredNews.category}
                  </span>
                </div>
              </div>

              {/* Featured Content Below Image */}
              <div className="mt-5">
                <p className="font-gurmukhi text-saffron-300 font-bold text-sm sm:text-base leading-snug mb-1.5">
                  {featuredNews.titleGurmukhi}
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-display leading-snug group-hover:text-saffron-300 transition-colors">
                  {featuredNews.title}
                </h3>
                
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-3 line-clamp-3">
                  {featuredNews.excerpt}
                </p>

                <p className="text-xs text-saffron-400 font-semibold tracking-wide mt-3 flex items-center gap-1.5">
                  <span>Published on — {featuredNews.date}</span>
                </p>
              </div>

            </a>
          </div>

          {/* Right Column: 3 Horizontal Stacked News Cards */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {secondaryNews.map((news) => (
              <a 
                key={news.id}
                href={news.href}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                {/* Thumbnail Image (Fixed Aspect Ratio) */}
                <div className="w-full sm:w-44 h-36 sm:h-28 rounded-xl overflow-hidden shrink-0 relative bg-slate-900 border border-white/10">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:hidden" />
                </div>

                {/* News Details */}
                <div className="flex-1 min-w-0">
                  <span className={`inline-block text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider border mb-1.5 ${news.categoryColor}`}>
                    {news.category}
                  </span>

                  <h4 className="text-sm sm:text-base font-bold text-white font-display leading-snug line-clamp-2 group-hover:text-saffron-300 transition-colors">
                    {news.title}
                  </h4>

                  <p className="text-xs text-slate-400 font-medium mt-2">
                    Published on — <span className="text-slate-300 font-semibold">{news.date}</span>
                  </p>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default NewsAnnouncements;
