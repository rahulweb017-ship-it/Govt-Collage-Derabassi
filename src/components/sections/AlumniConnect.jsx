import React from 'react';

const AlumniConnect = () => {
  return (
    <section className="py-16 bg-ivory-100">
      <div className="section-container max-w-4xl text-center">
        <h2 className="text-2xl font-bold text-navy-700">Stay Connected, Stay Proud</h2>
        <p className="text-slate-500 mt-3">
          Once a student of GCD, always part of the family. Connect with your alma mater and inspire the next generation.
        </p>
        <div className="mt-8">
          <a href="#" className="inline-block border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm">
            Join Alumni Network →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AlumniConnect;
