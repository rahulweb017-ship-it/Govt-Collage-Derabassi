import React from 'react';
import { MapPin, Phone, Mail, Globe, BookOpen, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-700 text-white border-t-4 border-saffron-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1 - GCD Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/old_site/logo.png" 
                alt="Government College Dera Bassi Logo" 
                className="w-12 h-12 object-contain bg-white/90 p-1 rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-lg">Government College, Dera Bassi</h3>
                <p className="font-gurmukhi text-sm text-navy-200 mt-1">ਸਰਕਾਰੀ ਕਾਲਜ, ਡੇਰਾ ਬੱਸੀ</p>
              </div>
            </div>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-start space-x-3 text-navy-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-saffron-400" />
                <span className="text-sm">Dera Bassi, SAS Nagar (Mohali), Punjab – 140507</span>
              </div>
              <div className="flex items-center space-x-3 text-navy-300">
                <Phone className="w-5 h-5 flex-shrink-0 text-saffron-400" />
                <span className="text-sm">01762-295167</span>
              </div>
              <div className="flex items-center space-x-3 text-navy-300">
                <Mail className="w-5 h-5 flex-shrink-0 text-saffron-400" />
                <span className="text-sm">gcderabassi@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-saffron-400 font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Academic Programmes',
                'Admissions 2026–27',
                'NAAC / IQAC',
                'Campus Life',
                'Contact Us'
              ].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/[\s/]+/g, '-')}`} className="text-sm text-navy-200 hover:text-saffron-400 transition-colors py-1 block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Student Corner */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-saffron-400 font-semibold mb-6">
              Student Corner
            </h4>
            <ul className="space-y-3">
              {[
                'Central Library',
                'Scholarships',
                'Anti-Ragging Cell',
                'Grievance Redressal',
                'Women Development Cell',
                'Career Guidance Cell'
              ].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-navy-200 hover:text-saffron-400 transition-colors py-1 block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Connect */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-saffron-400 font-semibold mb-6">
              Connect
            </h4>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-navy-200 mb-4">Stay Connected</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-navy-600 flex items-center justify-center hover:bg-saffron-500 transition-colors" aria-label="Website">
                    <Globe className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-navy-600 flex items-center justify-center hover:bg-saffron-500 transition-colors" aria-label="Academics">
                    <BookOpen className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-navy-600 flex items-center justify-center hover:bg-saffron-500 transition-colors" aria-label="External Link">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <a href="#alumni" className="block text-sm text-navy-200 hover:text-saffron-400 transition-colors">
                  Alumni Portal
                </a>
                <a href="#admission" className="block text-sm text-navy-200 hover:text-saffron-400 transition-colors">
                  Admission Portal
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="border-t border-navy-600 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-navy-400 text-center md:text-left">
            © 2026 Government College, Dera Bassi. All rights reserved.
          </p>
          <p className="text-xs text-navy-400 text-center md:text-right">
            Affiliated to Punjabi University, Patiala | AISHE: C-22140
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
