/**
 * Government College, Dera Bassi — All factual content
 * Source: https://gcderabassi.ac.in/
 * All data verified from the official website. Nothing invented.
 */

export const college = {
  name: 'Government College, Dera Bassi',
  nameShort: 'GCD',
  namePunjabi: 'ਸਰਕਾਰੀ ਕਾਲਜ, ਡੇਰਾ ਬੱਸੀ',
  established: 1975,
  motto: 'ਦੇਹ ਸਿਵਾ ਬਰੁ ਮੋਹਿ ਇਹੈ ਸੁਭ ਕਰਮਨ ਤੇ ਕਬਹੂੰ ਨ ਟਰੋਂ',
  mottoEnglish: 'Grant me this boon, O God, that I may never turn away from righteous deeds',
  tagline: 'Shaping Minds, Building Futures Since 1975',
  aisheCode: 'C-22140',
}

export const accreditation = {
  naac: {
    grade: 'B++',
    cycle: 3,
    year: 2024,
    history: [
      { cycle: 1, year: 2004, grade: 'B+' },
      { cycle: 2, year: 2016, grade: 'B' },
      { cycle: 3, year: 2024, grade: 'B++' },
    ],
  },
  ugc: {
    recognized: true,
    sections: ['2(f)', '12(B)'],
    description: 'Recognized by UGC under Section 2(f) and 12(B) of the UGC Act',
  },
  affiliation: {
    university: 'Punjabi University, Patiala',
    type: 'Affiliated',
  },
  funding: 'State Government norms and RUSA (Rashtriya Uchchatar Shiksha Abhiyan)',
}

export const principal = {
  name: 'Dr. Sujata Kaushal',
  designation: 'Principal',
  email: 'principal.gcdb@punjab.gov.in',
  message: `Our college has been a beacon of higher education for the youth of Dera Bassi and surrounding areas for over five decades. We are committed to the holistic development of our students — shaping them into responsible citizens, ethically grounded individuals, and good human beings. At GCD, we believe in balancing rigorous academics with active participation in sports, Youth Festivals, NSS, NCC, and cultural activities to foster creative, intellectual, and artistic growth in every student.`,
}

export const campus = {
  area: '15 Acres',
  areaDescription: 'Sprawling green campus with manicured lawns and eco-friendly landscaping',
  features: [
    'Wi-Fi enabled Administrative Block',
    'Smart Classrooms with audio-visual aids',
    'Well-stocked Central Library',
    'Modern Computer Laboratories',
    'Fully functional Science Labs',
    'Sports Complex & Playground',
    'Indoor Gymnasium (Boys & Girls)',
    'Open Gymnasium facility',
    'College Auditorium / Recreation Centre',
    'College Canteen & Juice Bar',
    'Hostel Facility',
    'RO Drinking Water Stations',
    'Medical Aid Facility',
  ],
  digitalResources: [
    'National Digital Library of India (NDLI)',
    'INFLIBNET Centre',
    'National Academic Depository (NAD)',
    'SWAYAM / Swayam Prabha Portals',
  ],
}

export const programmes = {
  undergraduate: [
    {
      name: 'B.A. (Bachelor of Arts)',
      duration: '3 Years',
      description: 'Broad range of elective subjects including Punjabi, English, Hindi, History, Political Science, Economics, Public Administration, Sociology, Geography, Fine Arts, Music (Vocal), Home Science, Physical Education, Computer Science, and Mathematics.',
      affiliation: 'Punjabi University, Patiala',
      image: '/images/old_site/course-1.jpg',
    },
    {
      name: 'B.Com (Bachelor of Commerce)',
      duration: '3 Years',
      description: 'Comprehensive commerce education with a strong foundation in accounting, business studies, and economics.',
      affiliation: 'Punjabi University, Patiala',
      image: '/images/old_site/course-2.jpg',
    },
    {
      name: 'B.Com (Honours)',
      duration: '3 Years',
      description: 'Advanced commerce programme with specialization in accounting, taxation, and financial management.',
      affiliation: 'Punjabi University, Patiala',
      image: '/images/old_site/course-3.jpg',
    },
    {
      name: 'B.Sc. (Non-Medical)',
      duration: '3 Years',
      description: 'Science programme covering Physics, Chemistry, and Mathematics with practical laboratory experience.',
      affiliation: 'Punjabi University, Patiala',
      image: '/images/old_site/course-4.jpg',
    },
    {
      name: 'BCA (Bachelor of Computer Applications)',
      duration: '3 Years',
      description: 'Professional programme in computer science, software development, and information technology.',
      affiliation: 'Punjabi University, Patiala',
      image: '/images/old_site/course-5.jpg',
    },
  ],
  postgraduate: [
    {
      name: 'M.Com (Master of Commerce)',
      duration: '2 Years',
      description: 'Advanced postgraduate programme in commerce with specialization opportunities in accounting, finance, and business management.',
      affiliation: 'Punjabi University, Patiala',
      image: '/images/old_site/course-3.jpg',
    },
  ],
  certificate: [
    {
      name: 'Creative Writing & Content Development',
      duration: 'Certificate Course',
      description: 'In collaboration with Jagat Guru Nanak Dev Punjab State Open University (JGND PSOU).',
      affiliation: 'JGND PSOU',
      image: '/images/old_site/events-1.jpg',
    },
    {
      name: 'Entrepreneurship, Creativity & Innovation in Business',
      duration: 'Certificate Course',
      description: 'In collaboration with Jagat Guru Nanak Dev Punjab State Open University (JGND PSOU).',
      affiliation: 'JGND PSOU',
      image: '/images/old_site/events-2.jpg',
    },
  ],
}

export const departments = [
  'Punjabi', 'English', 'Hindi', 'History', 'Political Science',
  'Economics', 'Public Administration', 'Sociology', 'Geography',
  'Fine Arts', 'Music (Vocal)', 'Home Science', 'Physical Education',
  'Commerce', 'Computer Science / Applications', 'Mathematics',
  'Sciences (Physics, Chemistry)',
]

export const stats = [
  { value: '1975', label: 'Established' },
  { value: '15-Acre', label: 'Green Campus' },
  { value: 'B++', label: 'NAAC Grade' },
  { value: '1,500+', label: 'Students' },
]

export const whyGCD = [
  {
    title: '50 Years of Academic Excellence',
    description: 'Serving higher education in the Dera Bassi region since 1975, building a legacy of knowledge and community development.',
    icon: 'Award',
  },
  {
    title: 'NAAC B++ Accredited',
    description: 'Recognized by the National Assessment and Accreditation Council with B++ grade in Cycle 3 (2024), reflecting continuous quality improvement.',
    icon: 'Shield',
  },
  {
    title: 'Affordable Government Education',
    description: 'Quality higher education at subsidized fees with multiple scholarship schemes for SC/ST/OBC/Minorities and economically weaker sections.',
    icon: 'IndianRupee',
  },
  {
    title: '15-Acre Green Campus',
    description: 'A sprawling, eco-friendly campus with smart classrooms, modern labs, sports complex, gymnasium, and well-stocked library.',
    icon: 'Trees',
  },
  {
    title: 'Active NCC, NSS & Youth Welfare',
    description: 'Vibrant co-curricular ecosystem with National Cadet Corps, National Service Scheme, and participation in University Youth Festivals.',
    icon: 'Users',
  },
  {
    title: 'Holistic Student Development',
    description: 'Beyond academics — career guidance, cultural activities, sports, community service, and the unique "Dastak" student-principal dialogue programme.',
    icon: 'Sparkles',
  },
]

export const campusLife = [
  {
    title: 'Sports & Fitness',
    description: 'Sprawling sports ground, indoor gymnasium for boys and girls, open gymnasium, and a vibrant sports culture with inter-college competitions.',
    icon: 'Dumbbell',
  },
  {
    title: 'Cultural Activities',
    description: 'Active participation in Punjabi University Zonal and Inter-Zonal Youth Festivals, fine arts, music, and creative expression.',
    icon: 'Music',
  },
  {
    title: 'Community Service',
    description: 'NSS units conducting health camps, tree plantations, and social awareness drives. Red Ribbon Club and Red Cross Society for health advocacy.',
    icon: 'Heart',
  },
]

export const studentServices = [
  {
    title: 'Career Guidance & Placement Cell',
    description: 'Job fairs, campus drives, skill training, and industry interface programmes.',
    icon: 'Briefcase',
  },
  {
    title: 'Scholarships',
    description: 'Central/State Government schemes — Post-Matric for SC/ST/OBC/Minorities, merit scholarships, and fee concessions.',
    icon: 'GraduationCap',
  },
  {
    title: 'Smart Classrooms & Digital Library',
    description: 'Modern AV-equipped classrooms, NDLI, INFLIBNET, and SWAYAM access.',
    icon: 'Monitor',
  },
  {
    title: 'Hostel Facility',
    description: 'On-campus accommodation with essential amenities for outstation students.',
    icon: 'Home',
  },
  {
    title: 'Grievance Redressal',
    description: 'Systematic student grievance handling through dedicated redressal cell.',
    icon: 'MessageCircle',
  },
  {
    title: 'Women Development Cell',
    description: 'Internal Complaints Committee (ICC) ensuring gender sensitization and campus safety.',
    icon: 'ShieldCheck',
  },
]

export const announcements = [
  {
    title: 'Admissions 2026–27 Now Open',
    date: '2026-08-15',
    description: 'Apply through the Punjab Department of Higher Education portal for all UG and PG programmes.',
    isNew: true,
  },
  {
    title: 'Mandatory Anti-Ragging Registration',
    date: '2026-08-10',
    description: 'All students must complete the online anti-ragging undertaking before admission confirmation.',
    isNew: true,
  },
  {
    title: 'SC Post-Matric Scholarship Notification',
    date: '2026-08-05',
    description: 'Document submission schedule for SC Post-Matric Scholarship applications announced.',
    isNew: false,
  },
  {
    title: 'Internship & Community Service Requirement',
    date: '2026-07-28',
    description: 'Mandatory 4-credit, 120-hour internship / community service for Semester V students.',
    isNew: false,
  },
  {
    title: 'Tender Notice — Session 2026–27',
    date: '2026-07-20',
    description: 'Tenders invited for College Canteen, Juice Bar, and Stationery Shop operations.',
    isNew: false,
  },
]

export const iqac = {
  established: 'March 2004',
  description: 'The Internal Quality Assurance Cell (IQAC) was established in March 2004 following the first NAAC accreditation cycle. It leads continuous quality enhancement, stakeholder feedback collection, and faculty development programmes.',
  objectives: [
    'Continuous quality enhancement and sustenance',
    'Annual Quality Assurance Reports (AQAR) and Self-Study Reports (SSR) to NAAC',
    'Structured stakeholder feedback (students, alumni, parents, faculty)',
    'Faculty development programs and academic enrichment workshops',
  ],
}

export const dastakProgramme = {
  name: 'Dastak Programme',
  description: 'A distinctive initiative designed as an informal, weekly student-principal dialogue session. Students from various departments visit the Principal\'s office in an open, relaxed environment to share challenges, grievances, and creative suggestions.',
}

export const contact = {
  address: 'Govt. College and Police Station Road, Bhagat Singh Nagar, Dera Bassi, Bir Dandrala, Distt. SAS Nagar (Mohali), Punjab – 140507, India',
  addressShort: 'Dera Bassi, SAS Nagar (Mohali), Punjab – 140507',
  phones: ['01762-295167', '01762-292287', '01762-280093'],
  emails: {
    general: 'gcderabassi@gmail.com',
    principal: 'principal.gcdb@punjab.gov.in',
  },
  website: 'https://gcderabassi.ac.in',
  admissionPortal: 'https://admission.punjab.gov.in',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Campus Life', href: '#campus-life' },
  { label: 'IQAC', href: '#recognition' },
  { label: 'Contact', href: '#contact' },
]
