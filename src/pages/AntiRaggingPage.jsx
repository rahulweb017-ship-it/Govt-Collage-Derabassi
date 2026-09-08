import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Phone, 
  Mail, 
  AlertOctagon, 
  CheckCircle, 
  Send, 
  FileText, 
  ExternalLink,
  Users,
  Building,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';

const committeeMembers = [
  { name: 'Vanitha Rao', role: 'Chairman / Principal', phone: '01762-295167', email: 'principal.gcdb@punjab.gov.in' },
  { name: 'Prof. Amritpal Singh', role: 'Convener, Anti-Ragging Cell & Discipline In-charge', phone: '01762-295167', email: 'gcderabassi@gmail.com' },
  { name: 'Dr. Manjeet Kaur', role: 'Convener, Women Development Cell / Internal Complaints Committee (ICC)', phone: '01762-295167', email: 'gcderabassi@gmail.com' },
  { name: 'Prof. Gurpreet Singh', role: 'Member, Discipline Committee', phone: '01762-295167', email: 'gcderabassi@gmail.com' },
  { name: 'Station House Officer (SHO)', role: 'Police Administration Liaison (Dera Bassi PS)', phone: '01762-280222 / 112', email: 'sho.derabassi@punjabpolice.gov.in' },
  { name: 'Advocate Rajesh Sharma', role: 'Legal & Civil Society Representative', phone: '01762-295167', email: 'gcderabassi@gmail.com' },
  { name: 'President, Student Council', role: 'Student Body Representative', phone: 'Administrative Desk', email: 'gcderabassi@gmail.com' }
];

const punishments = [
  'Suspension from attending classes and academic privileges.',
  'Withholding or withdrawing scholarship, fellowship, and other student financial benefits.',
  'Debarring from appearing in any test, internal examination, or university semester evaluation.',
  'Withholding examination results and character certificates.',
  'Suspension or expulsion from the college hostel, common rooms, and athletic grounds.',
  'Cancellation of admission with permanent expulsion from the institution.',
  'Lodging of a First Information Report (FIR) with the Punjab Police Department for prosecution under relevant sections of the Indian Penal Code (IPC).'
];

const AntiRaggingPage = () => {
  const [complaintSubmitted, setComplaintSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    victimName: '',
    rollNo: '',
    classCourse: '',
    contactNo: '',
    incidentDate: '',
    incidentLocation: '',
    description: '',
    anonymous: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setComplaintSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-8 sm:pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
          <Link to="/" className="hover:text-[#8B1E2B] flex items-center gap-1 font-medium">
            <Home size={13} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-medium">Students</span>
          <span>/</span>
          <span className="text-[#8B1E2B] font-bold">Anti-Ragging & Harassment Cell</span>
        </div>

        {/* 1. HERO BANNER */}
        <div className="bg-[#4A1018] text-white rounded-2xl p-8 sm:p-12 mb-10 shadow-sm relative overflow-hidden">
          <div className="inline-flex items-center gap-2 bg-red-600/30 text-rose-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-red-500/40">
            <AlertOctagon size={14} className="text-red-400" />
            <span>Statutory Anti-Ragging & Internal Complaints Committee (ICC)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-sans text-white">
            Anti-Ragging & <span className="text-red-400">Harassment Cell</span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-3xl mt-3 leading-relaxed">
            Government College, Dera Bassi enforces a ZERO TOLERANCE POLICY against ragging, harassment, and gender discrimination in full compliance with the Hon'ble Supreme Court of India directives and UGC Regulations 2009.
          </p>
        </div>

        {/* 2. EMERGENCY HELPLINE CALLOUT STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          
          <div className="bg-white rounded-2xl p-6 border-l-4 border-l-red-600 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">24x7 UGC National Helpline</span>
              <p className="text-base font-black text-slate-900 mt-0.5">1800-180-5522 (Toll Free)</p>
              <a href="https://www.antiragging.in" target="_blank" rel="noreferrer" className="text-xs text-[#8B1E2B] font-bold hover:underline flex items-center gap-1 mt-1">
                <span>National Portal: www.antiragging.in</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-l-4 border-l-[#8B1E2B] border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#8B1E2B] flex items-center justify-center shrink-0">
              <Building size={24} />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">College Discipline Desk</span>
              <p className="text-base font-black text-slate-900 mt-0.5">01762-295167</p>
              <span className="text-xs text-slate-600 font-medium">Email: gcderabassi@gmail.com</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-l-4 border-l-blue-600 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldAlert size={24} />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Police Emergency (Dera Bassi)</span>
              <p className="text-base font-black text-slate-900 mt-0.5">Dial 112 / 01762-280222</p>
              <span className="text-xs text-slate-600 font-medium">Local Station: SHO Dera Bassi</span>
            </div>
          </div>

        </div>

        {/* 3. WRITTEN-OUT CELL INFORMATION & MANDATE */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-12">
          <h2 className="text-2xl font-black text-slate-900 font-sans tracking-tight mb-4">
            About the Anti-Ragging & Harassment Cell
          </h2>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
            <p>
              The <strong>Anti-Ragging and Internal Complaints Cell (ICC)</strong> at Government College, Dera Bassi is a statutory body constituted in strict adherence to the <em>Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009</em> enacted by the University Grants Commission (UGC) and the landmark judgment delivered by the Hon’ble Supreme Court of India in Civil Appeal No. 887 of 2009.
            </p>

            <h3 className="text-base font-bold text-slate-900 mt-4 mb-2">What Constitutes Ragging & Harassment?</h3>
            <p>
              Ragging includes any disorderly conduct, whether by words spoken or written or by an act which has the effect of teasing, treating, or handling with rudeness any other student. Indulging in rowdy or undisciplined activities which cause or are likely to cause annoyance, hardship, physical or psychological harm, or raise fear or apprehension in a fresher or junior student is strictly punishable.
            </p>
            <p>
              Furthermore, the <strong>Internal Complaints Committee (ICC)</strong> provides an empathetic, unbiased, and prompt mechanism for addressing complaints concerning sexual harassment, intimidation, gender-based disparagement, or hostile educational environments.
            </p>
          </div>
        </div>

        {/* 4. COMMITTEE MEMBERS TABLE */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-12">
          <div className="border-b border-slate-200 pb-4 mb-6">
            <div className="inline-flex items-center gap-2 bg-[#FAF4E6] text-[#8B1E2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-[#EEDBBA]">
              <Users size={14} />
              <span>Official Institutional Directory</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 font-sans tracking-tight">
              Anti-Ragging Committee & Squad Members
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Students or parents can directly approach any of the following authorized officers:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-700 text-xs font-black uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3 px-4">Officer Name</th>
                  <th className="py-3 px-4">Role in Committee</th>
                  <th className="py-3 px-4">Official Phone</th>
                  <th className="py-3 px-4">Official Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {committeeMembers.map((m, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{m.name}</td>
                    <td className="py-3.5 px-4 text-[#8B1E2B] font-bold">{m.role}</td>
                    <td className="py-3.5 px-4 text-slate-600">{m.phone}</td>
                    <td className="py-3.5 px-4 text-slate-600">{m.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. STATUTORY PENALTIES & CONFIDENTIAL COMPLAINT FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Statutory Penalties */}
          <div className="lg:col-span-5 bg-[#FAF4E6] rounded-2xl p-7 border border-[#EADBBD] shadow-sm">
            <h3 className="text-xl font-black text-slate-900 font-sans mb-3">
              Statutory Penal Consequences
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-5">
              Any student found guilty of ragging or harassment shall be subjected to immediate disciplinary action without prejudice to criminal proceedings:
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-800">
              {punishments.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-white rounded-xl border border-[#EADBBD]">
              <span className="text-xs font-bold text-slate-900 block mb-1">Mandatory Student Affidavit:</span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                As per UGC guidelines, every admitted student and parent must submit an annual online Anti-Ragging Undertaking at <strong>www.antiragging.in</strong>.
              </p>
            </div>
          </div>

          {/* Confidential Complaint Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 font-sans mb-1">
              Confidential Online Grievance Submission
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Your grievance will be forwarded directly to the Principal and Convener. Confidentiality is strictly protected.
            </p>

            {complaintSubmitted ? (
              <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                <CheckCircle className="text-emerald-600 w-12 h-12 mx-auto mb-2" />
                <h4 className="text-base font-bold text-emerald-900">Grievance Registered Successfully</h4>
                <p className="text-xs text-emerald-700 mt-1 max-w-md mx-auto">
                  Your reference ID is <strong>GCD-AR-{Math.floor(100000 + Math.random() * 900000)}</strong>. The Anti-Ragging Squad will review and initiate inquiry immediately.
                </p>
                <button
                  onClick={() => setComplaintSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold"
                >
                  Submit Another Report
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name (Optional if Anonymous)</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.victimName}
                      onChange={(e) => setFormData({ ...formData, victimName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#8B1E2B] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Contact Phone / Email *</label>
                    <input
                      type="text"
                      required
                      placeholder="For committee follow-up"
                      value={formData.contactNo}
                      onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#8B1E2B] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Class / Course & Roll No.</label>
                    <input
                      type="text"
                      placeholder="e.g. B.A. 1st Year (Roll: 1042)"
                      value={formData.classCourse}
                      onChange={(e) => setFormData({ ...formData, classCourse: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#8B1E2B] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Approximate Incident Date & Place *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sept 06, Canteen / Main Gate"
                      value={formData.incidentLocation}
                      onChange={(e) => setFormData({ ...formData, incidentLocation: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#8B1E2B] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Detailed Incident Description *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe what occurred, persons involved, or any witnesses..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#8B1E2B] focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600">
                    <input
                      type="checkbox"
                      checked={formData.anonymous}
                      onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
                      className="rounded text-[#8B1E2B] focus:ring-[#8B1E2B]"
                    />
                    <span>Keep my identity anonymous from offenders</span>
                  </label>

                  <button
                    type="submit"
                    className="bg-[#8B1E2B] hover:bg-[#601520] text-white font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center gap-1.5"
                  >
                    <span>Submit Grievance</span>
                    <Send size={13} />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default AntiRaggingPage;
