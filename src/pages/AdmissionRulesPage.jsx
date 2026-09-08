import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  FileText, 
  Users, 
  Award, 
  Download, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Building2, 
  HelpCircle, 
  Printer, 
  BookOpen, 
  ShieldCheck, 
  CheckSquare, 
  Square, 
  ArrowRight,
  Sparkles,
  Info,
  Scale,
  GraduationCap,
  Layers,
  FileCheck2,
  Clock,
  Compass,
  Maximize2,
  X
} from 'lucide-react';

export default function AdmissionRulesPage() {
  // Navigation Jump Links
  const navSections = [
    { id: 'overview', label: 'Overview & Portals' },
    { id: 'process', label: 'Admission Timeline' },
    { id: 'rules', label: 'Categorized Rules' },
    { id: 'checklist', label: 'Document Checklist' },
    { id: 'reservation', label: 'Seat Matrix & Reservation' },
    { id: 'ba-structure', label: 'B.A. Subject Matrix' },
    { id: 'important-notes', label: 'Important Regulations' },
    { id: 'cta', label: 'Apply Online' }
  ];

  // Active Category for Rules Accordion
  const [activeRuleTab, setActiveRuleTab] = useState('all');
  const [expandedRules, setExpandedRules] = useState({
    r1: true,
    r2: false,
    r3: false,
    r4: true,
    r5: false,
    r6: true,
    r7: true,
    r8: false,
    r9: false,
    r10: false,
    r11: false,
    r12: true,
    r13: false,
    r14: false,
    r15: false,
    r16: false
  });

  const toggleRule = (id) => {
    setExpandedRules(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAllRules = () => {
    const allTrue = {};
    for (let i = 1; i <= 16; i++) allTrue[`r${i}`] = true;
    setExpandedRules(allTrue);
  };

  const collapseAllRules = () => {
    const allFalse = {};
    for (let i = 1; i <= 16; i++) allFalse[`r${i}`] = false;
    setExpandedRules(allFalse);
  };

  // Interactive Document Checklist State
  const initialDocuments = [
    { id: 'doc1', title: 'Original Qualifying Certificates', desc: '10th & 10+2 / Diploma / Degree passing certificates from recognized Board/University.', required: true, checked: false },
    { id: 'doc2', title: 'Character Certificate', desc: 'Issued by the Head / Principal of the last educational institution attended.', required: true, checked: false },
    { id: 'doc3', title: 'Detailed Marks Certificates (DMCs)', desc: 'Official mark sheets of all previous qualifying semesters / classes.', required: true, checked: false },
    { id: 'doc4', title: 'Proof of Date of Birth', desc: 'Matriculation (10th) or Senior Secondary certificate showing registered birth date.', required: true, checked: false },
    { id: 'doc5', title: 'Self-Certified Photostat Copies (2 Sets)', desc: 'Photocopies of all original marksheets and certificates duly self-signed by the applicant.', required: true, checked: false },
    { id: 'doc6', title: 'Passport Size Photographs (2 Copies)', desc: 'Recent colour photographs with light background to be affixed on the admission form.', required: true, checked: false },
    { id: 'doc7', title: 'Punjabi University Eligibility / Migration Certificate', desc: 'Mandatory for students passing 10+2 from boards other than PSEB, CBSE, ICSE, Haryana, or HP.', required: false, checked: false },
    { id: 'doc8', title: 'Reservation / Category Certificate', desc: 'SC / ST / BC / ESM / PWD / Freedom Fighter / Sports certificate from designated Punjab Govt issuing authority.', required: false, checked: false },
    { id: 'doc9', title: 'Rural Area Schooling Certificate', desc: 'Proof of studying up to matriculation level in a recognized rural village school, if claiming rural quota.', required: false, checked: false }
  ];

  const [documents, setDocuments] = useState(initialDocuments);
  const toggleDocument = (id) => {
    setDocuments(prev => prev.map(doc => doc.id === id ? { ...doc, checked: !doc.checked } : doc));
  };
  const checkedCount = documents.filter(d => d.checked).length;

  // Seat Reservation Data (Verbatim from official seatsinfo.jpg notice)
  const seatData = [
    {
      course: 'B.Com (Regular)',
      total: 69,
      gen: 36,
      sc: 14,
      bc: 6,
      esm: { gen: 5, sc: 2, bc: 1, total: 8 },
      pwd: 2,
      ff: 1,
      sports: { gen: 1, sc: 1, total: 2 },
      type: 'Regular'
    },
    {
      course: 'B.Com (Honours)',
      total: 69,
      gen: 36,
      sc: 14,
      bc: 6,
      esm: { gen: 5, sc: 2, bc: 1, total: 8 },
      pwd: 2,
      ff: 1,
      sports: { gen: 1, sc: 1, total: 2 },
      type: 'Self-Financed'
    },
    {
      course: 'B.Sc. (Non-Medical)',
      total: 50,
      gen: 26,
      sc: 10,
      bc: 4,
      esm: { gen: 4, sc: 1, bc: 0, total: 5 },
      pwd: 2,
      ff: 1,
      sports: { gen: 1, sc: 1, total: 2 },
      type: 'Regular'
    },
    {
      course: 'B.A. (Bachelor of Arts)',
      total: 500,
      gen: 260,
      sc: 100,
      bc: 40,
      esm: { gen: 35, sc: 20, bc: 10, total: 65 },
      pwd: 15,
      ff: 5,
      sports: { gen: 10, sc: 5, total: 15 },
      type: 'Regular'
    },
    {
      course: 'BCA (Computer Applications)',
      total: 57,
      gen: 30,
      sc: 11,
      bc: 5,
      esm: { gen: 4, sc: 1, bc: 1, total: 6 },
      pwd: 2,
      ff: 1,
      sports: { gen: 1, sc: 1, total: 2 },
      type: 'Self-Financed'
    }
  ];

  // Image Modal state for official seat notification scan
  const [showSeatModal, setShowSeatModal] = useState(false);

  // B.A. Subject Matrix Data
  const baGroups = {
    A: {
      title: 'Group A — Languages & Literature',
      subjects: [
        { name: 'Punjabi Literature', isPractical: false },
        { name: 'Hindi Literature', isPractical: false }
      ]
    },
    B: {
      title: 'Group B — Social & Visual Arts',
      subjects: [
        { name: 'Fine Arts', isPractical: true },
        { name: 'Sociology', isPractical: true, note: 'Treated as practical subject in GCD curriculum' },
        { name: 'Economics', isPractical: false }
      ]
    },
    C: {
      title: 'Group C — Historical & Quantitative',
      subjects: [
        { name: 'History', isPractical: false },
        { name: 'Mathematics', isPractical: false }
      ]
    },
    D: {
      title: 'Group D — Applied Sciences & Performance',
      subjects: [
        { name: 'Geography', isPractical: true },
        { name: 'Political Science', isPractical: false },
        { name: 'Music (Vocal)', isPractical: true },
        { name: 'Computer Science', isPractical: true }
      ]
    },
    E: {
      title: 'Group E — Administrative & Applied Life Sciences',
      subjects: [
        { name: 'Public Administration', isPractical: false },
        { name: 'Home Science', isPractical: true, note: 'Eligible for female students only' },
        { name: 'Physical Education', isPractical: true }
      ]
    }
  };

  // Interactive B.A. Combination Tester
  const [selectedGroupA, setSelectedGroupA] = useState('');
  const [selectedGroupB, setSelectedGroupB] = useState('');
  const [selectedGroupC, setSelectedGroupC] = useState('');
  const [selectedGroupD, setSelectedGroupD] = useState('');
  const [selectedGroupE, setSelectedGroupE] = useState('');
  const [isFemaleStudent, setIsFemaleStudent] = useState(true);

  // Calculation for tester
  const activeSelections = [
    { group: 'A', name: selectedGroupA },
    { group: 'B', name: selectedGroupB },
    { group: 'C', name: selectedGroupC },
    { group: 'D', name: selectedGroupD },
    { group: 'E', name: selectedGroupE }
  ].filter(item => item.name !== '');

  const practicalSubjectsList = ['Fine Arts', 'Sociology', 'Geography', 'Music (Vocal)', 'Computer Science', 'Home Science', 'Physical Education'];
  const practicalCount = activeSelections.filter(item => practicalSubjectsList.includes(item.name)).length;
  const hasHomeScience = activeSelections.some(item => item.name === 'Home Science');

  const isValidCombination = useMemo(() => {
    if (activeSelections.length !== 3) return false;
    if (practicalCount > 2) return false;
    if (hasHomeScience && !isFemaleStudent) return false;
    return true;
  }, [activeSelections, practicalCount, hasHomeScience, isFemaleStudent]);

  // All 16 Official Rules Mapped Cleanly with Categorization
  const officialRules = [
    {
      id: 'r1',
      number: 'Rule 01',
      category: 'portals',
      title: 'Online Application Portals (1st Year vs Ongoing Classes)',
      badge: 'Mandatory Online Portal',
      officialText: "The students of 1st year are required to apply online on Punjab Government Centralized Admission Portal 'www.admission.punjab.gov.in' and the students of 2nd, 3rd year are required to apply online on 'www.online.gcderabassi.ac.in'. Incomplete and late forms will not be accepted.",
      keyTakeaways: [
        '1st Year (Fresh Undergraduate Students): Must apply exclusively through the centralized DHE Punjab Portal at admission.punjab.gov.in.',
        '2nd & 3rd Year (Promoted Collegiate Students): Must register and submit annual continuation forms on GCD College Portal at online.gcderabassi.ac.in.',
        'Zero tolerance for delayed submissions or incomplete documentation.'
      ]
    },
    {
      id: 'r2',
      number: 'Rule 02',
      category: 'schedule',
      title: 'Governing Authorities & Admission Schedule',
      badge: 'Statutory Dates',
      officialText: "The admission will take place as per the dates fixed by DHE (Department of Higher Education) Punjab and Punjabi University, Patiala.",
      keyTakeaways: [
        'Admissions calendar is rigidly framed by the Department of Higher Education (DHE) Punjab.',
        'Affiliating university cutoffs and counseling dates are binding upon all departments.',
        'No college authority possesses unilateral power to extend admission deadlines.'
      ]
    },
    {
      id: 'r3',
      number: 'Rule 03',
      category: 'schedule',
      title: 'Gazetted Holiday Rollover Clause',
      badge: 'Public Holidays',
      officialText: "If the last day of admission happens to be a government holiday, then the students will be admitted on the next working day.",
      keyTakeaways: [
        'If an announced deadline coincides with a gazetted government holiday, physical and administrative admissions continue uninterrupted on the immediately following working day.',
        'Banking and fee counters reopen accordingly.'
      ]
    },
    {
      id: 'r4',
      number: 'Rule 04',
      category: 'eligibility',
      title: '10+2 Board Recognition & University Eligibility Certificate',
      badge: 'Board Eligibility',
      officialText: "Barring students who have passed 10+2 class from PSEB, Mohali, Board of School Education Haryana, Himachal Pradesh Board of School Education and CBSE and I.C.S.E., all those students who have passed 10+2 from other states will have to furnish an eligibility certificate from the Registration Branch of Punjabi University Patiala at the time of admission.",
      keyTakeaways: [
        'Directly Recognized Boards (No University Eligibility Certificate required): PSEB Mohali, Haryana School Education Board, HP Board, CBSE, and ICSE.',
        'Other State Boards / Foreign Equivalencies: Must mandatorily obtain and furnish an official Eligibility Certificate issued by the Registration Branch, Punjabi University, Patiala prior to admission counseling.'
      ]
    },
    {
      id: 'r5',
      number: 'Rule 05',
      category: 'eligibility',
      title: 'Promotion to Semester III & V (50% Papers Clearance Rule)',
      badge: 'Credit & Promotion',
      officialText: "Students will be admitted to the semester III and V only if they have cleared at least 50% of papers of the previous semesters. In case the result of semester II and IV have not been declared the students will be given provisional admission and will be allowed to appear in the semester examinations only if they have fulfilled the aforesaid condition.",
      keyTakeaways: [
        'Eligibility for Semester III: Candidate must have passed at least 50% of total examination papers across Semesters I & II.',
        'Eligibility for Semester V: Candidate must have passed at least 50% of total examination papers across Semesters I to IV.',
        'Pending Results: If University results of Sem II or IV are awaited, provisional admission is granted. If the student later fails the 50% threshold upon result publication, their exam eligibility stands revoked.'
      ]
    },
    {
      id: 'r6',
      number: 'Rule 06',
      category: 'counseling',
      title: 'Mandatory Physical Presence for Interview & Counseling',
      badge: 'In-Person Appearance',
      officialText: "It is compulsory for the student to be physically present for interview at the time of admission.",
      keyTakeaways: [
        'No proxy, relative, or postal representation is accepted for document verification.',
        'Every candidate must appear before the designated Departmental Admission Committee in person on the assigned counseling date.'
      ]
    },
    {
      id: 'r7',
      number: 'Rule 07',
      category: 'counseling',
      title: 'Original Documents & Photocopies at Interview',
      badge: 'Originals Required',
      officialText: "It is mandatory to show following original certificates at the time of interview: a. Original certificates of the exams passed from the board/University; b. Character certificate from the head of the last institute attended; c. Detailed marks certificates of the previous classes; d. Matriculation/ Senior Secondary certificate as a proof of date of birth; e. Self Certified Photostat copies of the above certificate are to be attached with the admission form. The students will be responsible for the authenticity of the Photostat copies; f. 2 Passport size Photographs to be attached with the admission form; g. Eligibility/migration certificate, if required.",
      keyTakeaways: [
        'All original diplomas, degrees, DMCs, character, and category certificates must be placed on the committee desk.',
        'Candidate is legally responsible for the truthfulness and authenticity of self-certified photocopies.',
        'Non-submission of originals during interview forfeits the allotted seat.'
      ]
    },
    {
      id: 'r8',
      number: 'Rule 08',
      category: 'authority',
      title: 'Annulment on False or Misleading Declarations',
      badge: 'Statutory Penalty',
      officialText: "Admission taken on wrong or false declaration can be annulled any time.",
      keyTakeaways: [
        'Any discrepancy, forged mark sheet, fake caste/rural certificate, or manipulated identity leads to immediate cancellation of admission.',
        'Tuition fees are forfeited and legal reporting may be initiated.'
      ]
    },
    {
      id: 'r9',
      number: 'Rule 09',
      category: 'authority',
      title: "Principal's Discretionary Prerogative on Discipline",
      badge: 'Institutional Discipline',
      officialText: "The Principal can refuse admission to any student in the interest of the overall college discipline.",
      keyTakeaways: [
        'The Principal of Government College Dera Bassi holds the statutory institutional authority to refuse or terminate admission of any candidate who poses a risk to campus harmony, safety, or academic discipline.'
      ]
    },
    {
      id: 'r10',
      number: 'Rule 10',
      category: 'authority',
      title: 'Provisional Status Pending University Approval',
      badge: 'University Registration',
      officialText: "The admission of every student is deemed provisional until approved by the University. The College will not be responsible for refusal of permission to any student by the University.",
      keyTakeaways: [
        'Admission confirmed at collegiate level is subject to final validation and registration number allocation by Punjabi University, Patiala.',
        'The college is not held liable if the University registration branch rejects an application on technical or eligibility grounds.'
      ]
    },
    {
      id: 'r11',
      number: 'Rule 11',
      category: 'eligibility',
      title: 'Academic Gap Policy (One or More Years Gap)',
      badge: 'Gap Year Candidates',
      officialText: "Students having a gap of one or more year after clearing the last exam will be given admission to the College only if the seats are available.",
      keyTakeaways: [
        'Candidates with 1+ year study gap are evaluated strictly after fresh applicants.',
        'Gap admission is strictly contingent upon seat availability after regular merit rounds.',
        'An affidavit explaining the gap period may be requested during physical verification.'
      ]
    },
    {
      id: 'r12',
      number: 'Rule 12',
      category: 'quota',
      title: 'Statutory Reservation Quotas (SC, ST, BC & Special Quotas)',
      badge: 'Govt. Reservation Policy',
      officialText: "There are reserved seats/other facilities for the students belonging to Scheduled castes, Scheduled tribes, backward classes. Students from such sections will have to furnish/deposit the relevant document at the time of admission. Certificates/documents furnished by the students can be got verified from the concerned issuing authorities.",
      keyTakeaways: [
        'Punjab Government reservation quotas apply in full force across all regular and self-financed programmes.',
        'Valid certificates issued by designated Punjab Tehsildar / Sub-Divisional Magistrate are compulsory.',
        'College reserves the right to send certificates for direct verification to issuing revenue offices.'
      ]
    },
    {
      id: 'r13',
      number: 'Rule 13',
      category: 'quota',
      title: 'Concessions for State & National Level Sports Achievers',
      badge: 'Sports Quota',
      officialText: "Players of State/National repute will be given concessions as per rules.",
      keyTakeaways: [
        'Dedicated sports seats reserved across programmes (e.g. 15 seats in B.A., 2 seats in B.Com).',
        'Candidates must submit official sports participation and merit certificates recognized by Sports Department Punjab / Association of Indian Universities (AIU).',
        'Physical trials and certificate grading conducted by College Physical Education Department.'
      ]
    },
    {
      id: 'r14',
      number: 'Rule 14',
      category: 'eligibility',
      title: 'University Subject Group Combinations & Seat Caps',
      badge: 'Subject Seat Caps',
      officialText: "Students can opt for the subject groups fixed by the University. In case fixed seats got filled in a subject, no more students will be given that subject.",
      keyTakeaways: [
        'Subjects with high laboratory or equipment requirements (Computer Science, Fine Arts, Geography, Home Science) have strictly capped seat capacities.',
        'Allotment is strictly on merit-cum-preference during counseling. Once a subject quota fills, candidates must select alternative electives.'
      ]
    },
    {
      id: 'r15',
      number: 'Rule 15',
      category: 'quota',
      title: 'Merit-Based Allotment & Failed Candidates Restriction',
      badge: 'Strict Merit Criteria',
      officialText: "Admission will be strictly as per merit. Students with less marks can be denied admission. Failed students will not be given re-admission.",
      keyTakeaways: [
        'Every seat is filled on transparent merit lists generated by Punjab Government portals.',
        'No discretionary management quota exists in this government institution.',
        'Students who have failed their university degree examination are not eligible for re-admission.'
      ]
    },
    {
      id: 'r16',
      number: 'Rule 16',
      category: 'quota',
      title: 'Rural Area Definition & Verification Criteria',
      badge: 'Rural Quota Criteria',
      officialText: "Only those students are considered to be belonging to the Rural area who have studied up to the matriculation level from a village school.",
      keyTakeaways: [
        'Strict statutory definition: Candidate must have completed their primary and secondary schooling up to 10th (Matriculation) from a recognized village school situated outside municipal committee limits.',
        'Rural school certificate counter-signed by the District Education Officer (DEO) or Block Primary Education Officer (BPEO) is required.'
      ]
    }
  ];

  // Filtering rules based on tab
  const filteredRules = useMemo(() => {
    if (activeRuleTab === 'all') return officialRules;
    return officialRules.filter(r => r.category === activeRuleTab);
  }, [activeRuleTab, officialRules]);

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-800 font-sans selection:bg-[#C75B2A]/20 selection:text-[#0C1D3F]">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0C1D3F] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 overflow-hidden border-b-4 border-[#C75B2A]">
        {/* Background Image with Institutional Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/slides/campus-main-buddha copy.jpg" 
            alt="Government College Dera Bassi Campus" 
            className="w-full h-full object-cover object-center scale-105 filter brightness-40 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1D3F]/95 via-[#0C1D3F]/90 to-[#0C1D3F]/80 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-phulkari-pattern opacity-10 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb: Home / Admissions / Admission Rules */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6 sm:mb-8 font-medium">
            <Link to="/" className="flex items-center gap-1 hover:text-[#F49D71] transition-colors">
              <Home size={15} />
              <span>Home</span>
            </Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-300">Admissions</span>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-[#F49D71] font-semibold">Admission Rules</span>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F49D71] text-xs font-semibold tracking-wider uppercase mb-4">
              <Scale size={13} className="text-[#C75B2A]" />
              <span>Official Institutional Admission Guide · Department of Higher Education Punjab</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-display">
              Admission Rules & Guidelines
            </h1>

            <p className="mt-4 sm:mt-5 text-lg sm:text-xl text-slate-200 font-normal leading-relaxed">
              Transparent, merit-based admission policies, statutory reservation frameworks, document verification requirements, and subject group matrices for collegiate programmes.
            </p>

            <p className="mt-3 text-xs sm:text-sm text-slate-300/90 leading-relaxed max-w-2xl font-light">
              All admissions at Government College, Dera Bassi strictly adhere to the regulatory mandates issued by the Department of Higher Education (DHE) Punjab and Punjabi University, Patiala.
            </p>

            {/* Badges strip */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-4 sm:gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F49D71]" />
                <span>Punjab Govt Centralized Portal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F49D71]" />
                <span>Strict Merit-Based Allocation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F49D71]" />
                <span>Statutory Reservations Enforced</span>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="https://admission.punjab.gov.in"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-[#C75B2A] hover:bg-[#A8481E] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>Apply Online (1st Year Portal)</span>
                <ExternalLink size={14} />
              </a>
              <a
                href="#checklist"
                className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/25 transition-all flex items-center gap-2"
              >
                <FileCheck2 size={15} />
                <span>Check Required Documents</span>
              </a>
              <Link
                to="/prospectus"
                className="px-5 py-3 rounded-xl bg-white text-[#0C1D3F] hover:bg-slate-100 text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center gap-2"
              >
                <Download size={14} className="text-[#C75B2A]" />
                <span>Download Prospectus</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY QUICK JUMP NAVIGATION BAR */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar text-xs font-semibold">
            <span className="text-slate-400 uppercase tracking-widest text-[10px] font-bold shrink-0 mr-1 flex items-center gap-1">
              <Compass size={12} />
              <span>Jump To:</span>
            </span>
            {navSections.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-[#FAF4E6] hover:text-[#C75B2A] text-slate-700 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-24">

        {/* 3. SECTION: QUICK OVERVIEW CARDS (The 3 Core Pillars) */}
        <section id="overview" className="scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF4E6] text-[#C75B2A] text-xs font-bold uppercase tracking-widest mb-3 border border-[#C75B2A]/20">
              <ShieldCheck size={14} />
              <span>Admission Essentials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C1D3F] tracking-tight">
              Three Essential Admission Pillars
            </h2>
            <div className="w-12 h-1 bg-[#C75B2A] rounded-full mx-auto my-3" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Before submitting your admission form, ensure you review the primary portals, qualifying standards, and mandatory physical counseling directives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Two Portals System */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0C1D3F] text-white flex items-center justify-center mb-5 shadow-xs">
                  <Layers size={22} className="text-[#F49D71]" />
                </div>
                <div className="text-[11px] font-bold text-[#C75B2A] uppercase tracking-wider mb-1">
                  Pillar 01 · Application Channels
                </div>
                <h3 className="text-lg font-bold text-[#0C1D3F] mb-3">
                  Two Portals System
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Admission portals are split based on your entry year as strictly governed by Punjab DHE directives:
                </p>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
                    <div className="font-bold text-[#0C1D3F] flex items-center justify-between">
                      <span>1st Year Fresh Admissions:</span>
                      <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">Centralized</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11.5px]">Punjab Govt Centralized Portal</p>
                    <a 
                      href="https://admission.punjab.gov.in" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[#C75B2A] font-bold hover:underline inline-flex items-center gap-1 mt-1 text-[11px]"
                    >
                      admission.punjab.gov.in <ExternalLink size={10} />
                    </a>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
                    <div className="font-bold text-[#0C1D3F] flex items-center justify-between">
                      <span>2nd & 3rd Year Promoted:</span>
                      <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded">College Portal</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11.5px]">Government College Dera Bassi Portal</p>
                    <a 
                      href="https://online.gcderabassi.ac.in" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[#0C1D3F] font-bold hover:underline inline-flex items-center gap-1 mt-1 text-[11px]"
                    >
                      online.gcderabassi.ac.in <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-red-600 font-semibold flex items-center gap-1.5">
                <AlertCircle size={13} className="shrink-0" />
                <span>Incomplete & late forms are rejected automatically.</span>
              </div>
            </div>

            {/* Card 2: Board & Academic Eligibility */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0C1D3F] text-white flex items-center justify-center mb-5 shadow-xs">
                  <GraduationCap size={22} className="text-[#F49D71]" />
                </div>
                <div className="text-[11px] font-bold text-[#C75B2A] uppercase tracking-wider mb-1">
                  Pillar 02 · Academic Standards
                </div>
                <h3 className="text-lg font-bold text-[#0C1D3F] mb-3">
                  Recognized Boards & Promotion
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Candidates must meet the statutory criteria of Punjabi University Patiala:
                </p>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-slate-700">
                    <span className="font-bold text-emerald-900 block mb-0.5">Exempt from Eligibility Cert.:</span>
                    PSEB Mohali, Haryana Board, HP Board, CBSE, and ICSE boards.
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-slate-700">
                    <span className="font-bold text-amber-900 block mb-0.5">Other State Boards:</span>
                    Must produce Eligibility Certificate from Registration Branch, Punjabi University Patiala.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-700">
                    <span className="font-bold text-[#0C1D3F] block mb-0.5">Promotion to Sem III & V:</span>
                    Must clear at least 50% of papers of preceding semesters.
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                Affiliated under Punjab State Higher Education Framework
              </div>
            </div>

            {/* Card 3: Mandatory Physical Verification */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0C1D3F] text-white flex items-center justify-center mb-5 shadow-xs">
                  <Users size={22} className="text-[#F49D71]" />
                </div>
                <div className="text-[11px] font-bold text-[#C75B2A] uppercase tracking-wider mb-1">
                  Pillar 03 · Verification Directives
                </div>
                <h3 className="text-lg font-bold text-[#0C1D3F] mb-3">
                  Compulsory Physical Interview
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Physical presence of the student at the college desk is statutory for seat allotment:
                </p>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-[#C75B2A] shrink-0 mt-0.5" />
                    <span><strong>No Proxies Allowed:</strong> Student must present themselves before the admission committee.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-[#C75B2A] shrink-0 mt-0.5" />
                    <span><strong>Originals On Table:</strong> DMC marksheets, Character Cert, Date of Birth certificate, Category proof.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-[#C75B2A] shrink-0 mt-0.5" />
                    <span><strong>Photostat Copies:</strong> 2 sets of self-certified photocopies + 2 passport photos.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                False statements result in immediate cancellation (Rule 08).
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECTION: ADMISSION PROCESS TIMELINE */}
        <section id="process" className="scroll-mt-20">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF4E6] text-[#C75B2A] text-xs font-bold uppercase tracking-widest mb-2 border border-[#C75B2A]/20">
                <Clock size={14} />
                <span>Five-Stage Roadmap</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C1D3F] tracking-tight">
                Step-by-Step Admission Lifecycle
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Follow this sequential procedure from centralized portal registration to provisional enrollment.
              </p>
            </div>

            <div className="relative">
              {/* Timeline connecting line */}
              <div className="hidden md:block absolute left-1/2 -ml-0.5 w-0.5 h-full bg-slate-200 top-0" />

              <div className="space-y-8 sm:space-y-12">
                
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-1/2 md:text-right order-2 md:order-1">
                    <span className="text-[11px] font-bold text-[#C75B2A] uppercase tracking-wider">Stage 01</span>
                    <h4 className="text-base sm:text-lg font-bold text-[#0C1D3F] mt-0.5">Online Registration on Designated Portal</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      1st Year students submit candidate registration on Punjab DHE portal (admission.punjab.gov.in). Ongoing 2nd and 3rd year students register on GCD college portal (online.gcderabassi.ac.in). Ensure personal, academic and category entries are 100% accurate.
                    </p>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#0C1D3F] border-4 border-white shadow-md text-white font-bold flex items-center justify-center shrink-0 order-1 md:order-2">
                    01
                  </div>
                  <div className="md:w-1/2 order-3 pl-2 md:pl-0">
                    <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                      Window: As scheduled by DHE Punjab
                    </span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-1/2 md:text-right order-2 md:order-1 pl-2 md:pl-0">
                    <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                      Centralized Merit Generation
                    </span>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#C75B2A] border-4 border-white shadow-md text-white font-bold flex items-center justify-center shrink-0 order-1 md:order-2">
                    02
                  </div>
                  <div className="md:w-1/2 order-3">
                    <span className="text-[11px] font-bold text-[#C75B2A] uppercase tracking-wider">Stage 02</span>
                    <h4 className="text-base sm:text-lg font-bold text-[#0C1D3F] mt-0.5">Merit List Publication & College Cutoffs</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Merit lists are prepared transparently based on qualifying examination percentage. Category-wise cutoffs for B.A., B.Com, B.Sc., and BCA are published on the portal and college notice board.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-1/2 md:text-right order-2 md:order-1">
                    <span className="text-[11px] font-bold text-[#C75B2A] uppercase tracking-wider">Stage 03</span>
                    <h4 className="text-base sm:text-lg font-bold text-[#0C1D3F] mt-0.5">Physical Counseling & Document Scrutiny</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Applicants shortlisted in the merit rounds must report physically on campus. Departmental committees scrutinize original DMCs, date of birth, character, and category certificates against self-certified photocopies.
                    </p>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#0C1D3F] border-4 border-white shadow-md text-white font-bold flex items-center justify-center shrink-0 order-1 md:order-2">
                    03
                  </div>
                  <div className="md:w-1/2 order-3 pl-2 md:pl-0">
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      Physical Attendance Compulsory
                    </span>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-1/2 md:text-right order-2 md:order-1 pl-2 md:pl-0">
                    <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                      Subject Groups Allotment
                    </span>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#C75B2A] border-4 border-white shadow-md text-white font-bold flex items-center justify-center shrink-0 order-1 md:order-2">
                    04
                  </div>
                  <div className="md:w-1/2 order-3">
                    <span className="text-[11px] font-bold text-[#C75B2A] uppercase tracking-wider">Stage 04</span>
                    <h4 className="text-base sm:text-lg font-bold text-[#0C1D3F] mt-0.5">Subject Selection & Seat Allocation</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      For B.A. students, electives are chosen across Groups A to E (maximum 2 practicals). High-demand lab subjects (Computer Science, Fine Arts, Geography) are allotted strictly in order of merit until fixed university seats fill.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-1/2 md:text-right order-2 md:order-1">
                    <span className="text-[11px] font-bold text-[#C75B2A] uppercase tracking-wider">Stage 05</span>
                    <h4 className="text-base sm:text-lg font-bold text-[#0C1D3F] mt-0.5">Dues Deposit & Provisional Admission Confirmation</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Upon approval by the committee, candidate deposits college fees through the online bank gateway or designated bank counter. Admission remains provisional until formal university registration endorsement.
                    </p>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#0C1D3F] border-4 border-white shadow-md text-white font-bold flex items-center justify-center shrink-0 order-1 md:order-2">
                    05
                  </div>
                  <div className="md:w-1/2 order-3 pl-2 md:pl-0">
                    <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                      Subject to University Validation
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 5. SECTION: CATEGORIZED ADMISSION RULES (16 Official Rules) */}
        <section id="rules" className="scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF4E6] text-[#C75B2A] text-xs font-bold uppercase tracking-widest mb-2 border border-[#C75B2A]/20">
                <Scale size={14} />
                <span>Statutory Code</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C1D3F] tracking-tight">
                Official Admission Rules (Categorized)
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Every candidate is legally bound by the 16 statutory regulations governing collegiate admission.
              </p>
            </div>

            {/* Expand / Collapse All Controls */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={expandAllRules}
                className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
              >
                Expand All
              </button>
              <button
                onClick={collapseAllRules}
                className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
            {[
              { key: 'all', label: 'All 16 Rules' },
              { key: 'portals', label: 'Portals & Submission' },
              { key: 'schedule', label: 'Dates & Deadlines' },
              { key: 'eligibility', label: 'Eligibility & Promotion' },
              { key: 'counseling', label: 'Interview & Originals' },
              { key: 'quota', label: 'Merit, Quota & Rural' },
              { key: 'authority', label: 'Authority & Annulment' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveRuleTab(tab.key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  activeRuleTab === tab.key
                    ? 'bg-[#0C1D3F] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Accordion Rules List */}
          <div className="space-y-4">
            {filteredRules.map((rule) => {
              const isExpanded = expandedRules[rule.id];
              return (
                <div 
                  key={rule.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleRule(rule.id)}
                    className="w-full px-6 py-4.5 flex items-center justify-between text-left hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="flex items-center gap-3.5 min-w-0 pr-4">
                      <span className="shrink-0 px-2.5 py-1 rounded-md bg-slate-100 text-[#0C1D3F] text-xs font-mono font-bold">
                        {rule.number}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-bold text-[#0C1D3F] truncate">
                          {rule.title}
                        </h4>
                        <span className="text-[11px] text-slate-400 font-medium">
                          {rule.badge}
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0 text-slate-400">
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-[#FAF9F5]/50 animate-fadeIn">
                      <div className="p-4 rounded-xl bg-white border border-slate-200/80 mb-4">
                        <div className="text-[10.5px] font-bold text-[#C75B2A] uppercase tracking-wider mb-1">
                          Official Statute Text
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif italic">
                          "{rule.officialText}"
                        </p>
                      </div>

                      <div>
                        <div className="text-[11px] font-bold text-[#0C1D3F] uppercase tracking-wider mb-2">
                          Key Operational Implications
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {rule.keyTakeaways.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C75B2A] shrink-0 mt-1.5" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. SECTION: REQUIRED DOCUMENTS CHECKLIST */}
        <section id="checklist" className="scroll-mt-20">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-100 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF4E6] text-[#C75B2A] text-xs font-bold uppercase tracking-widest mb-2 border border-[#C75B2A]/20">
                  <FileCheck2 size={14} />
                  <span>Interview Preparation</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C1D3F] tracking-tight">
                  Required Documents Checklist
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  Use this interactive checklist to verify all necessary originals and photocopies prior to physical counseling.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="text-right">
                  <span className="text-xs font-bold text-[#0C1D3F]">
                    {checkedCount} of {documents.length} Verified
                  </span>
                  <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden mt-1">
                    <div 
                      className="h-full bg-[#C75B2A] transition-all duration-300"
                      style={{ width: `${(checkedCount / documents.length) * 100}%` }}
                    />
                  </div>
                </div>
                <button
                  onClick={() => window.print()}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0C1D3F] text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <Printer size={14} />
                  <span>Print Checklist</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => toggleDocument(doc.id)}
                  className={`p-4.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                    doc.checked 
                      ? 'bg-emerald-50/60 border-emerald-300 shadow-2xs' 
                      : 'bg-white hover:bg-slate-50 border-slate-200/90'
                  }`}
                >
                  <button 
                    type="button"
                    className="mt-0.5 text-slate-400 shrink-0"
                    aria-label={`Toggle ${doc.title}`}
                  >
                    {doc.checked ? (
                      <CheckSquare size={20} className="text-emerald-600" />
                    ) : (
                      <Square size={20} className="text-slate-300 hover:text-slate-500" />
                    )}
                  </button>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className={`text-xs sm:text-sm font-bold ${doc.checked ? 'text-emerald-950 line-through' : 'text-[#0C1D3F]'}`}>
                        {doc.title}
                      </h4>
                      {doc.required ? (
                        <span className="text-[10px] bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full shrink-0">
                          Mandatory
                        </span>
                      ) : (
                        <span className="text-[10px] bg-slate-100 text-slate-600 font-medium px-2 py-0.5 rounded-full shrink-0">
                          If Applicable
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {doc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle size={16} className="text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Statutory Notice:</strong> Self-certified photocopies must be strictly identical to the original documents. Any forged certificates or incorrect marks declarations will result in immediate annulment under Rule 08 and legal reporting.
              </span>
            </div>
          </div>
        </section>

        {/* 7. SECTION: RESERVATION & SPECIAL CATEGORIES (Official Table) */}
        <section id="reservation" className="scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF4E6] text-[#C75B2A] text-xs font-bold uppercase tracking-widest mb-2 border border-[#C75B2A]/20">
                <Users size={14} />
                <span>Statutory Seat Breakdown</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C1D3F] tracking-tight">
                Reservation & Category Seat Matrix
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Official distribution of seats across General, SC, BC, Ex-Servicemen, PWD, Freedom Fighter, and Sports quotas.
              </p>
            </div>

            <button
              onClick={() => setShowSeatModal(true)}
              className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-[#0C1D3F] text-[#0C1D3F] text-xs font-bold shadow-2xs transition-colors flex items-center gap-2 shrink-0"
            >
              <Maximize2 size={14} />
              <span>View Official Scanned Notice</span>
            </button>
          </div>

          {/* Modern Interactive Table */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#0C1D3F] text-white font-bold border-b border-[#0C1D3F]">
                    <th className="py-4 px-4 sm:px-6">Course Name</th>
                    <th className="py-4 px-3 text-center bg-[#07132B]">Total Seats</th>
                    <th className="py-4 px-3 text-center">GEN</th>
                    <th className="py-4 px-3 text-center">SC</th>
                    <th className="py-4 px-3 text-center">BC</th>
                    <th className="py-4 px-4 text-center bg-[#1B3A6B]" colSpan={4}>
                      ESM (Ex-Servicemen & Wards)
                    </th>
                    <th className="py-4 px-3 text-center">PWD</th>
                    <th className="py-4 px-3 text-center">FF</th>
                    <th className="py-4 px-4 text-center bg-[#1B3A6B]" colSpan={3}>
                      Sports
                    </th>
                  </tr>
                  <tr className="bg-slate-100 text-slate-600 text-[10.5px] font-bold uppercase tracking-wider border-b border-slate-200">
                    <th className="py-2 px-4 sm:px-6">Programme</th>
                    <th className="py-2 px-3 text-center bg-slate-200/70">Seats</th>
                    <th className="py-2 px-3 text-center">GEN</th>
                    <th className="py-2 px-3 text-center">SC</th>
                    <th className="py-2 px-3 text-center">BC</th>
                    <th className="py-2 px-2 text-center bg-slate-200/40">GEN</th>
                    <th className="py-2 px-2 text-center bg-slate-200/40">SC</th>
                    <th className="py-2 px-2 text-center bg-slate-200/40">BC</th>
                    <th className="py-2 px-2 text-center bg-[#FAF4E6] text-[#C75B2A]">TOTAL</th>
                    <th className="py-2 px-3 text-center">PWD</th>
                    <th className="py-2 px-3 text-center">FF</th>
                    <th className="py-2 px-2 text-center bg-slate-200/40">GEN</th>
                    <th className="py-2 px-2 text-center bg-slate-200/40">SC</th>
                    <th className="py-2 px-2 text-center bg-[#FAF4E6] text-[#C75B2A]">TOTAL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {seatData.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`hover:bg-slate-50 transition-colors ${idx % 2 === 1 ? 'bg-slate-50/40' : 'bg-white'}`}
                    >
                      <td className="py-4 px-4 sm:px-6 font-bold text-[#0C1D3F]">
                        <div>{row.course}</div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block mt-0.5 ${
                          row.type === 'Regular' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                        }`}>
                          {row.type}
                        </span>
                      </td>
                      <td className="py-4 px-3 text-center font-extrabold text-[#C75B2A] text-sm bg-slate-50/60">
                        {row.total}
                      </td>
                      <td className="py-4 px-3 text-center font-semibold text-slate-800">{row.gen}</td>
                      <td className="py-4 px-3 text-center font-semibold text-slate-800">{row.sc}</td>
                      <td className="py-4 px-3 text-center font-semibold text-slate-800">{row.bc}</td>
                      
                      {/* ESM Breakdown */}
                      <td className="py-4 px-2 text-center text-slate-600 bg-slate-50/30">{row.esm.gen}</td>
                      <td className="py-4 px-2 text-center text-slate-600 bg-slate-50/30">{row.esm.sc}</td>
                      <td className="py-4 px-2 text-center text-slate-600 bg-slate-50/30">{row.esm.bc}</td>
                      <td className="py-4 px-2 text-center font-bold text-[#C75B2A] bg-[#FAF4E6]/50">{row.esm.total}</td>

                      <td className="py-4 px-3 text-center font-semibold text-slate-800">{row.pwd}</td>
                      <td className="py-4 px-3 text-center font-semibold text-slate-800">{row.ff}</td>

                      {/* Sports Breakdown */}
                      <td className="py-4 px-2 text-center text-slate-600 bg-slate-50/30">{row.sports.gen}</td>
                      <td className="py-4 px-2 text-center text-slate-600 bg-slate-50/30">{row.sports.sc}</td>
                      <td className="py-4 px-2 text-center font-bold text-[#C75B2A] bg-[#FAF4E6]/50">{row.sports.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Category Acronym Legend */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200/80 text-[11.5px] text-slate-600 flex flex-wrap gap-x-6 gap-y-2">
              <span><strong>GEN:</strong> General Category</span>
              <span><strong>SC:</strong> Scheduled Caste</span>
              <span><strong>BC:</strong> Backward Classes</span>
              <span><strong>ESM:</strong> Ex-Service Men and their Wards</span>
              <span><strong>PWD:</strong> Person with Disability</span>
              <span><strong>FF:</strong> Freedom Fighter Quota</span>
              <span><strong>Sports:</strong> State & National Players Quota</span>
            </div>
          </div>
        </section>

        {/* 8. SECTION: B.A. PROGRAMME & SUBJECT MATRIX */}
        <section id="ba-structure" className="scroll-mt-20">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF4E6] text-[#C75B2A] text-xs font-bold uppercase tracking-widest mb-2 border border-[#C75B2A]/20">
                <BookOpen size={14} />
                <span>Undergraduate Curriculum</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C1D3F] tracking-tight">
                B.A. Programme & Subject Group Matrix
              </h2>
              <div className="flex items-center gap-3 mt-2 text-xs font-semibold text-slate-600">
                <span className="bg-slate-100 px-3 py-1 rounded-full text-[#0C1D3F] font-bold">Duration: 3 Years / 6 Semesters</span>
                <span className="bg-amber-50 text-[#C75B2A] px-3 py-1 rounded-full font-bold border border-amber-200">Total Approved Seats: 500 Seats</span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                Eligible students who have passed 10+2 study a total of <strong>5 subjects</strong>: 2 Compulsory core courses plus <strong>3 Elective subjects</strong> chosen by picking <em>one each from 3 distinct groups (A to E)</em>.
              </p>
            </div>

            {/* 2 Compulsory Subjects banner */}
            <div className="p-4 rounded-2xl bg-[#0C1D3F] text-white mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={20} className="text-[#F49D71]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">2 Mandatory Compulsory Subjects (For All B.A. Students):</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    1. Compulsory English &nbsp;·&nbsp; 2. Compulsory Punjabi / Basic Punjabi (for eligible non-Punjab students)
                  </p>
                </div>
              </div>
              <span className="text-[11px] bg-white/10 px-3 py-1 rounded-full text-slate-200 shrink-0 font-mono">
                Compulsory Subjects
              </span>
            </div>

            {/* Subject Groups Grid (A through E) */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              {Object.entries(baGroups).map(([groupKey, groupData]) => (
                <div 
                  key={groupKey}
                  className="p-5 rounded-2xl bg-[#FAF9F5] border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-xl bg-[#0C1D3F] text-white font-extrabold flex items-center justify-center text-xs">
                        {groupKey}
                      </span>
                      <span className="text-[10.5px] font-bold text-[#C75B2A] uppercase">Group {groupKey}</span>
                    </div>
                    <ul className="space-y-2 text-xs">
                      {groupData.subjects.map((sub, sIdx) => (
                        <li key={sIdx} className="p-2 rounded-lg bg-white border border-slate-200/70">
                          <span className="font-bold text-slate-800 block leading-tight">{sub.name}</span>
                          {sub.isPractical && (
                            <span className="text-[9.5px] font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded inline-block mt-1">
                              Practical Subject
                            </span>
                          )}
                          {sub.note && (
                            <span className="text-[9.5px] text-slate-400 block mt-0.5 leading-tight">
                              *{sub.note}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Three Critical Statutory Conditions */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 mb-8 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0C1D3F] flex items-center gap-2">
                <AlertCircle size={15} className="text-[#C75B2A]" />
                <span>Statutory B.A. Subject Selection Rules (From Official Statutes):</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C75B2A] font-bold">a.</span>
                  <span><strong>Practical Subjects Limit:</strong> More than two practical subjects <em>cannot</em> be chosen. (Note: Sociology is officially categorized as a practical subject).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C75B2A] font-bold">b.</span>
                  <span><strong>Home Science Gender Criterion:</strong> Only female students (girls) are eligible to opt for the subject of Home Science in B.A.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C75B2A] font-bold">c.</span>
                  <span><strong>Environment & Road Safety:</strong> The qualifying subject of "Environment and Road Safety Education" is compulsory for all B.A. 2nd Year (Semester III/IV) students.</span>
                </li>
              </ul>
            </div>

            {/* Interactive Combination Builder Tool */}
            <div className="p-6 rounded-3xl bg-[#FAF4E6]/60 border border-[#C75B2A]/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#0C1D3F]">
                    Interactive Subject Combination Validator
                  </h4>
                  <p className="text-xs text-slate-600">
                    Test your intended 3 electives across Groups A–E against official college practical limits and gender rules.
                  </p>
                </div>
                <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isFemaleStudent}
                    onChange={(e) => setIsFemaleStudent(e.target.checked)}
                    className="rounded text-[#C75B2A] focus:ring-[#C75B2A]"
                  />
                  <span>Applicant is Female (for Home Science check)</span>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-4">
                {/* Select Group A */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Group A:</label>
                  <select
                    value={selectedGroupA}
                    onChange={(e) => setSelectedGroupA(e.target.value)}
                    className="w-full text-xs p-2 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#C75B2A]"
                  >
                    <option value="">-- None --</option>
                    <option value="Punjabi Literature">Punjabi Lit.</option>
                    <option value="Hindi Literature">Hindi Lit.</option>
                  </select>
                </div>

                {/* Select Group B */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Group B:</label>
                  <select
                    value={selectedGroupB}
                    onChange={(e) => setSelectedGroupB(e.target.value)}
                    className="w-full text-xs p-2 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#C75B2A]"
                  >
                    <option value="">-- None --</option>
                    <option value="Fine Arts">Fine Arts (Practical)</option>
                    <option value="Sociology">Sociology (Practical)</option>
                    <option value="Economics">Economics</option>
                  </select>
                </div>

                {/* Select Group C */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Group C:</label>
                  <select
                    value={selectedGroupC}
                    onChange={(e) => setSelectedGroupC(e.target.value)}
                    className="w-full text-xs p-2 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#C75B2A]"
                  >
                    <option value="">-- None --</option>
                    <option value="History">History</option>
                    <option value="Mathematics">Mathematics</option>
                  </select>
                </div>

                {/* Select Group D */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Group D:</label>
                  <select
                    value={selectedGroupD}
                    onChange={(e) => setSelectedGroupD(e.target.value)}
                    className="w-full text-xs p-2 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#C75B2A]"
                  >
                    <option value="">-- None --</option>
                    <option value="Geography">Geography (Practical)</option>
                    <option value="Political Science">Political Science</option>
                    <option value="Music (Vocal)">Music Vocal (Practical)</option>
                    <option value="Computer Science">Computer Sci. (Practical)</option>
                  </select>
                </div>

                {/* Select Group E */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Group E:</label>
                  <select
                    value={selectedGroupE}
                    onChange={(e) => setSelectedGroupE(e.target.value)}
                    className="w-full text-xs p-2 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#C75B2A]"
                  >
                    <option value="">-- None --</option>
                    <option value="Public Administration">Pub. Administration</option>
                    <option value="Home Science">Home Sci. (Girls only)</option>
                    <option value="Physical Education">Physical Edu. (Practical)</option>
                  </select>
                </div>
              </div>

              {/* Validation Feedback */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-slate-500">Selected Electives ({activeSelections.length}/3): </span>
                  <strong className="text-[#0C1D3F]">
                    {activeSelections.length > 0 ? activeSelections.map(i => `${i.name} [Grp ${i.group}]`).join(' + ') : 'None selected yet'}
                  </strong>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Practicals detected: <span className={practicalCount > 2 ? 'text-red-600 font-bold' : 'text-slate-600 font-semibold'}>{practicalCount}</span> (Max permissible: 2)
                  </div>
                </div>

                <div className="shrink-0">
                  {activeSelections.length === 3 ? (
                    isValidCombination ? (
                      <span className="px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center gap-1.5">
                        <CheckCircle2 size={14} />
                        <span>Valid Subject Combination</span>
                      </span>
                    ) : (
                      <span className="px-3 py-1.5 rounded-lg bg-red-100 text-red-800 font-bold flex items-center gap-1.5">
                        <AlertCircle size={14} />
                        <span>
                          {practicalCount > 2 
                            ? 'Invalid: More than 2 practicals!' 
                            : !isFemaleStudent && hasHomeScience 
                              ? 'Invalid: Home Science for girls only!' 
                              : 'Invalid Combination'}
                        </span>
                      </span>
                    )
                  ) : (
                    <span className="text-slate-400 italic">
                      Pick exactly 3 electives from 3 different groups
                    </span>
                  )}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 9. SECTION: IMPORTANT REGULATIONS & FAQS ACCORDION */}
        <section id="important-notes" className="scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF4E6] text-[#C75B2A] text-xs font-bold uppercase tracking-widest mb-3 border border-[#C75B2A]/20">
              <HelpCircle size={14} />
              <span>Student Guidance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C1D3F] tracking-tight">
              Frequently Asked Regulations
            </h2>
            <div className="w-12 h-1 bg-[#C75B2A] rounded-full mx-auto my-3" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Common queries regarding eligibility certificates, gap years, rural quota, and university status.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs">
              <h4 className="text-base font-bold text-[#0C1D3F] flex items-center gap-2">
                <Info size={16} className="text-[#C75B2A]" />
                <span>Who must obtain an Eligibility Certificate from Punjabi University?</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                As per <strong>Rule 04</strong>, students passing 10+2 from PSEB Mohali, CBSE, ICSE, Haryana School Education Board, and Himachal Pradesh Board do <em>not</em> require an eligibility certificate. Any student from other state boards (e.g. UP, Bihar, Rajasthan, NIOS or international qualifications) must visit the Registration Branch of Punjabi University, Patiala to get an Eligibility/Equivalency Certificate prior to physical counseling.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs">
              <h4 className="text-base font-bold text-[#0C1D3F] flex items-center gap-2">
                <Info size={16} className="text-[#C75B2A]" />
                <span>How does the 50% Paper Clearance Rule work for 2nd and 3rd year admission?</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Under <strong>Rule 05</strong>, promotion to Semester III requires passing 50% of the aggregate papers of Semesters I and II. Promotion to Semester V requires passing 50% of aggregate papers across Semesters I through IV. If your semester results are delayed by the University, you receive <em>provisional</em> admission. If you do not meet the 50% criteria once results are out, the university exam permission is cancelled.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs">
              <h4 className="text-base font-bold text-[#0C1D3F] flex items-center gap-2">
                <Info size={16} className="text-[#C75B2A]" />
                <span>What is the Rural Area criteria for admission reservation?</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Under <strong>Rule 16</strong>, only those students who have completed their schooling up to the 10th (Matriculation) level from a recognized rural school situated in a village qualify under the rural reservation category. A formal certificate counter-signed by the District Education Officer is verified during counseling.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs">
              <h4 className="text-base font-bold text-[#0C1D3F] flex items-center gap-2">
                <Info size={16} className="text-[#C75B2A]" />
                <span>Can students with an academic study gap apply?</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Under <strong>Rule 11</strong>, candidates having a study gap of one or more years after their last qualifying examination are eligible <em>strictly subject to seat vacancy</em> after the regular merit applicants have been accommodated. An affidavit explaining the gap period is required during physical counseling.
              </p>
            </div>

          </div>
        </section>

        {/* 10. SECTION: FINAL CTA & INSTITUTIONAL RESOURCES */}
        <section id="cta" className="scroll-mt-20">
          <div className="bg-[#0C1D3F] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border-4 border-[#C75B2A]">
            <div className="absolute inset-0 bg-phulkari-pattern opacity-10 pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F49D71] text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">
                <Sparkles size={13} className="text-[#C75B2A]" />
                <span>Session 2026–27 Open</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Begin Your Admission Process at GCD
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                Choose the appropriate portal based on your academic level and proceed with your application. For inquiries, reach out to the college admission desk.
              </p>

              <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                <a
                  href="https://admission.punjab.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3.5 rounded-xl bg-[#C75B2A] hover:bg-[#A8481E] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Fresh Admission (admission.punjab.gov.in)</span>
                  <ExternalLink size={14} />
                </a>
                <a
                  href="https://online.gcderabassi.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white text-[#0C1D3F] hover:bg-slate-100 text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2"
                >
                  <span>2nd & 3rd Year Portal (online.gcderabassi.ac.in)</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap justify-center gap-6 text-xs text-slate-300">
                <Link to="/academics/courses-offered" className="hover:text-white flex items-center gap-1.5">
                  <ArrowRight size={13} className="text-[#F49D71]" />
                  <span>View All Courses Offered</span>
                </Link>
                <Link to="/prospectus" className="hover:text-white flex items-center gap-1.5">
                  <ArrowRight size={13} className="text-[#F49D71]" />
                  <span>Download College Prospectus</span>
                </Link>
                <Link to="/academics/departments" className="hover:text-white flex items-center gap-1.5">
                  <ArrowRight size={13} className="text-[#F49D71]" />
                  <span>Academic Departments</span>
                </Link>
              </div>

            </div>
          </div>
        </section>

      </div>

      {/* LIGHTBOX MODAL FOR OFFICIAL SEATS NOTIFICATION IMAGE */}
      {showSeatModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0C1D3F]">
                  Official Seat Distribution Notification (Scanned Record)
                </h3>
                <p className="text-xs text-slate-500">
                  Official Punjab Higher Education institutional seat allocation record.
                </p>
              </div>
              <button
                onClick={() => setShowSeatModal(false)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-4 sm:p-6 overflow-auto bg-slate-50 flex items-center justify-center">
              <img 
                src="/images/old_site/seatsinfo.jpg" 
                alt="Official Seat Reservation Table" 
                className="max-w-full h-auto rounded-xl shadow-md border border-slate-200"
              />
            </div>
            <div className="p-4 border-t border-slate-200 bg-white flex justify-end">
              <button
                onClick={() => setShowSeatModal(false)}
                className="px-5 py-2 rounded-xl bg-[#0C1D3F] text-white text-xs font-bold hover:bg-[#1B3A6B] transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
