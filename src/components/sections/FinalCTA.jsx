import React from 'react';

const FinalCTA = () => {
  return (
    <section id="contact" className="py-20 w-full bg-navy-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-phulkari-pattern opacity-10"></div>
      
      <div className="section-container text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-sans">
          Begin Your Journey <span className="text-[#C75B2A]">at GCD</span>
        </h2>
        <p className="text-lg text-navy-200 mt-4 max-w-2xl mx-auto">
          Admissions 2026–27 are now open. Join a legacy of 50 years of academic excellence.
        </p>
        
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a href="#" className="bg-saffron-500 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-saffron-600 transition-all duration-300">
            Apply Now
          </a>
          <a href="#" className="border-2 border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
