import scordemy from "@/assets/scordemy.png.asset.json";
import scordemyIas from "@/assets/scordemy-ias.jpg.asset.json";
import exschool from "@/assets/exschool.jpg.asset.json";
import mindpower from "@/assets/mindpower.jpg.asset.json";

export const CONTACT = {
  phone: "+91 98640 00000",
  phoneHref: "tel:+919864000000",
  whatsapp: "https://wa.me/919864000000",
  email: "hello@avedon.ai",
  emailHref: "mailto:hello@avedon.ai",
  address: "3rd Floor, Beltola Tiniali, Guwahati, Assam 781028",
};

export const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export type Brand = {
  slug: string;
  name: string;
  category: string;
  description: string;
  logo: string;
  programs: string[];
  availability: string;
};

export const BRANDS: Brand[] = [
  {
    slug: "scordemy",
    name: "Scordemy",
    category: "Online Learning & Competitive Examination",
    description:
      "A regional-language EdTech platform delivering school education and preparation for APSC, UPSC, SSC, Banking, Railways, TET, JEE, NEET and other competitive examinations.",
    logo: scordemy.url,
    programs: ["APSC Foundation", "SSC & Banking", "TET Crash Course"],
    availability: "Online · Pan-India",
  },
  {
    slug: "exschool",
    name: "ExSchool",
    category: "School Education",
    description:
      "Assamese-medium and regional school education built around NCERT and SEBA syllabus, with live classes, notes and doubt clearing for classes 6 to 12.",
    logo: exschool.url,
    programs: ["Class 9-10 SEBA", "Class 11-12 Science", "Foundation Batch"],
    availability: "Online · Hybrid",
  },
  {
    slug: "scordemy-ias",
    name: "Scordemy IAS",
    category: "Civil Services Preparation",
    description:
      "Focused mentorship for APSC and UPSC aspirants with structured GS coverage, answer writing, optional guidance and interview preparation.",
    logo: scordemyIas.url,
    programs: ["APSC CCE Full Course", "UPSC GS Foundation", "Mains Answer Writing"],
    availability: "Guwahati · Online",
  },
  {
    slug: "mindpower",
    name: "MindPower Academy",
    category: "Medical & Engineering Preparation",
    description:
      "Academic excellence programmes for JEE, NEET and NDA aspirants combining classroom mentorship, test series and performance analytics.",
    logo: mindpower.url,
    programs: ["NEET Target Batch", "JEE Main + Advanced", "NDA Foundation"],
    availability: "Guwahati · Nagaon",
  },
];

export const MORE_BRANDS = [
  { name: "DDC – Delhi Defence Coaching", category: "Defence Services" },
  { name: "Avedon.ai", category: "AI & Learning Technology" },
  { name: "Avedon Skills", category: "Skilling & Placement" },
  { name: "Avedon Publications", category: "Study Material & Books" },
  { name: "Avedon Foundation", category: "Social Impact & Scholarships" },
  { name: "Avedon Campus", category: "Institutional Partnerships" },
];

export const STATS = [
  { value: 50000, suffix: "+", label: "Learners Reached" },
  { value: 8, suffix: "+", label: "Years of Leadership" },
  { value: 10, suffix: "+", label: "Education Brands" },
  { value: 100, suffix: "+", label: "Expert Faculty" },
  { value: 25, suffix: "+", label: "Centers & Locations" },
  { value: 1000000, suffix: "+", label: "Learning Hours" },
];

export const PROGRAMS = [
  {
    name: "APSC CCE Complete Foundation",
    brand: "Scordemy IAS",
    category: "APSC",
    mode: "Hybrid",
    duration: "12 months",
    start: "10 Sep 2026",
    location: "Guwahati – Beltola",
    faculty: "Imon Sir, Nabajyoti Sir",
    price: "₹42,000",
  },
  {
    name: "UPSC GS Foundation 2027",
    brand: "Scordemy IAS",
    category: "UPSC",
    mode: "Online",
    duration: "14 months",
    start: "01 Oct 2026",
    location: "Online",
    faculty: "Dr. Ritupallab Saikia",
    price: "₹38,000",
  },
  {
    name: "SSC CGL + Banking Combo",
    brand: "Scordemy",
    category: "SSC",
    mode: "Online",
    duration: "8 months",
    start: "15 Sep 2026",
    location: "Online",
    faculty: "Pallavi Ma'am",
    price: "₹12,500",
  },
  {
    name: "Assam TET Crash Course",
    brand: "Scordemy",
    category: "TET",
    mode: "Online",
    duration: "3 months",
    start: "22 Sep 2026",
    location: "Online",
    faculty: "Hiren Sir",
    price: "₹6,000",
  },
  {
    name: "Class 10 SEBA Complete Batch",
    brand: "ExSchool",
    category: "School",
    mode: "Online",
    duration: "10 months",
    start: "05 Sep 2026",
    location: "Online",
    faculty: "ExSchool Academic Team",
    price: "₹4,999",
  },
  {
    name: "Class 12 Science Booster",
    brand: "ExSchool",
    category: "School",
    mode: "Hybrid",
    duration: "9 months",
    start: "12 Sep 2026",
    location: "Guwahati – Zoo Road",
    faculty: "Subject Experts",
    price: "₹9,500",
  },
  {
    name: "NEET Target Batch 2027",
    brand: "MindPower Academy",
    category: "NEET",
    mode: "Offline",
    duration: "12 months",
    start: "20 Sep 2026",
    location: "Guwahati – Christian Basti",
    faculty: "Dr. Anup Kalita",
    price: "₹78,000",
  },
  {
    name: "JEE Main + Advanced Classroom",
    brand: "MindPower Academy",
    category: "JEE",
    mode: "Offline",
    duration: "24 months",
    start: "18 Sep 2026",
    location: "Nagaon",
    faculty: "Rajib Sir",
    price: "₹1,15,000",
  },
  {
    name: "NDA Written + SSB Programme",
    brand: "DDC",
    category: "NDA",
    mode: "Hybrid",
    duration: "6 months",
    start: "28 Sep 2026",
    location: "Guwahati – Beltola",
    faculty: "Col. (Retd.) S. Sharma",
    price: "₹32,000",
  },
  {
    name: "Railways RRB NTPC Batch",
    brand: "Scordemy",
    category: "Railways",
    mode: "Online",
    duration: "5 months",
    start: "02 Oct 2026",
    location: "Online",
    faculty: "Bhaskar Sir",
    price: "₹5,500",
  },
];

export const PROGRAM_CATEGORIES = [
  "All",
  "School",
  "APSC",
  "UPSC",
  "SSC",
  "Banking",
  "Railways",
  "TET",
  "JEE",
  "NEET",
  "NDA",
];

export const RESULTS = [
  { name: "Rahul Das", exam: "APSC CCE 2025", rank: "Rank 14", brand: "Scordemy IAS", year: "2025" },
  { name: "Priyanka Bora", exam: "APSC CCE 2025", rank: "Rank 27", brand: "Scordemy IAS", year: "2025" },
  { name: "Imdadul Hoque", exam: "UPSC CSE 2024", rank: "Rank 612", brand: "Scordemy IAS", year: "2024" },
  { name: "Nayanmoni Kalita", exam: "Assam TET 2025", rank: "State Topper", brand: "Scordemy", year: "2025" },
  { name: "Sourav Deka", exam: "SSC CGL 2024", rank: "AIR 341", brand: "Scordemy", year: "2024" },
  { name: "Ankita Sarma", exam: "NEET UG 2025", rank: "AIR 2,140", brand: "MindPower", year: "2025" },
  { name: "Hirak Jyoti Nath", exam: "JEE Advanced 2025", rank: "AIR 5,890", brand: "MindPower", year: "2025" },
  { name: "Junmoni Bhuyan", exam: "HSLC SEBA 2025", rank: "98.2%", brand: "ExSchool", year: "2025" },
  { name: "Abdul Karim", exam: "NDA 2025", rank: "Recommended", brand: "DDC", year: "2025" },
];

export const RESULT_BRANDS = ["All", "Scordemy", "Scordemy IAS", "ExSchool", "MindPower", "DDC"];

export const FACULTY = [
  { slug: "imon-sir", name: "Imon Sir", role: "Senior Faculty", subject: "General Studies", brand: "Scordemy IAS", department: "Competitive Exams", experience: "11 years" },
  { slug: "pallavi-maam", name: "Pallavi Ma'am", role: "Quant Faculty", subject: "Quantitative Aptitude", brand: "Scordemy", department: "Competitive Exams", experience: "8 years" },
  { slug: "dr-anup-kalita", name: "Dr. Anup Kalita", role: "HOD Biology", subject: "Biology", brand: "MindPower", department: "Medical", experience: "14 years" },
  { slug: "rajib-sir", name: "Rajib Sir", role: "Physics Mentor", subject: "Physics", brand: "MindPower", department: "Engineering", experience: "12 years" },
  { slug: "hiren-sir", name: "Hiren Sir", role: "Pedagogy Expert", subject: "Child Development", brand: "Scordemy", department: "Teaching Exams", experience: "9 years" },
  { slug: "junali-maam", name: "Junali Ma'am", role: "Academic Head", subject: "Mathematics", brand: "ExSchool", department: "School", experience: "10 years" },
  { slug: "col-s-sharma", name: "Col. (Retd.) S. Sharma", role: "SSB Mentor", subject: "SSB & GAT", brand: "DDC", department: "Defence", experience: "22 years" },
  { slug: "nabajyoti-sir", name: "Nabajyoti Sir", role: "Faculty", subject: "Assam History", brand: "Scordemy IAS", department: "Competitive Exams", experience: "7 years" },
];

export const CENTERS = [
  {
    slug: "guwahati-beltola",
    city: "Guwahati",
    name: "Guwahati – Beltola",
    address: "3rd Floor, Beltola Tiniali, Guwahati, Assam 781028",
    phone: "+91 98640 00000",
    hours: "Mon–Sat, 8:00 AM – 8:00 PM",
    programs: ["APSC CCE", "UPSC GS", "NDA Written + SSB"],
    brands: ["Scordemy IAS", "DDC"],
    faculty: 24,
  },
  {
    slug: "guwahati-christian-basti",
    city: "Guwahati",
    name: "Guwahati – Christian Basti",
    address: "GS Road, Christian Basti, Guwahati, Assam 781005",
    phone: "+91 98640 00001",
    hours: "Mon–Sat, 7:00 AM – 8:30 PM",
    programs: ["NEET Target", "JEE Classroom", "Class 12 Booster"],
    brands: ["MindPower Academy", "ExSchool"],
    faculty: 31,
  },
  {
    slug: "nagaon",
    city: "Nagaon",
    name: "Nagaon Center",
    address: "AT Road, Nagaon, Assam 782001",
    phone: "+91 98640 00002",
    hours: "Mon–Sat, 8:00 AM – 7:00 PM",
    programs: ["JEE Foundation", "NEET Foundation", "TET"],
    brands: ["MindPower Academy", "Scordemy"],
    faculty: 18,
  },
  {
    slug: "jorhat",
    city: "Jorhat",
    name: "Jorhat Center",
    address: "Gar Ali, Jorhat, Assam 785001",
    phone: "+91 98640 00003",
    hours: "Mon–Sat, 9:00 AM – 7:00 PM",
    programs: ["APSC Foundation", "SSC & Banking"],
    brands: ["Scordemy", "Scordemy IAS"],
    faculty: 12,
  },
];

export const JOBS = [
  { slug: "frontend-developer-intern", title: "Frontend Developer Intern", department: "Technology", location: "Guwahati", type: "Internship", stipend: "₹12,000 / month" },
  { slug: "academic-counsellor", title: "Academic Counsellor", department: "Sales", location: "Guwahati", type: "Full-time", stipend: "₹3.6 – 5.4 LPA" },
  { slug: "general-studies-faculty", title: "General Studies Faculty", department: "Teaching", location: "Guwahati", type: "Full-time", stipend: "₹6 – 9 LPA" },
  { slug: "graphic-designer", title: "Graphic Designer", department: "Design", location: "Hybrid", type: "Full-time", stipend: "₹3 – 5 LPA" },
  { slug: "performance-marketer", title: "Performance Marketer", department: "Marketing", location: "Remote", type: "Full-time", stipend: "₹5 – 8 LPA" },
  { slug: "content-writer-assamese", title: "Content Writer (Assamese)", department: "Content", location: "Guwahati", type: "Full-time", stipend: "₹2.4 – 4 LPA" },
  { slug: "operations-executive", title: "Operations Executive", department: "Operations", location: "Nagaon", type: "Full-time", stipend: "₹2.4 – 3.6 LPA" },
  { slug: "hr-associate", title: "HR Associate", department: "HR", location: "Guwahati", type: "Full-time", stipend: "₹3 – 4.2 LPA" },
];

export const NEWS = [
  {
    slug: "avedon-education-summit-2026",
    title: "Avedon Education Hosts Education Summit 2026",
    category: "Event",
    date: "12 August 2026",
    venue: "Srimanta Sankaradeva Kalakshetra, Guwahati",
    excerpt:
      "Over 1,200 educators, students and institutional partners gathered to discuss the next decade of learning in Northeast India.",
  },
  {
    slug: "scordemy-ias-apsc-results",
    title: "Scordemy IAS Records Best-Ever APSC CCE Result",
    category: "News",
    date: "28 July 2026",
    venue: "Guwahati",
    excerpt:
      "Multiple selections in the final list, including a rank inside the top 20, mark the strongest cycle for the civil services vertical.",
  },
  {
    slug: "exschool-assamese-medium-launch",
    title: "ExSchool Launches Free Assamese-Medium Learning Library",
    category: "News",
    date: "09 July 2026",
    venue: "Online",
    excerpt:
      "A free notes, video and practice library for SEBA students across classes 6 to 10, available on web and mobile.",
  },
  {
    slug: "avedon-ai-mentor-beta",
    title: "Avedon.ai Opens Beta for AI Doubt-Solving Mentor",
    category: "Technology",
    date: "21 June 2026",
    venue: "Online",
    excerpt:
      "An AI mentor trained on regional-language study material now answers student doubts inside the Scordemy app.",
  },
];

export const TEAM = [
  { name: "Matiar Rahman", role: "Founder & CEO", group: "Leadership" },
  { name: "Nazrul Islam", role: "Director – Academics", group: "Leadership" },
  { name: "Sangita Baruah", role: "Business Head – EdTech", group: "Leadership" },
  { name: "Ritu Kalita", role: "Head of Operations", group: "Management" },
  { name: "Deepankar Nath", role: "Marketing Manager", group: "Management" },
  { name: "Farhan Ahmed", role: "Engineering Lead", group: "Technology" },
  { name: "Bhaswati Devi", role: "Academic Manager", group: "Management" },
  { name: "Imon Sir", role: "Senior Faculty – GS", group: "Academic" },
  { name: "Dr. Anup Kalita", role: "HOD – Biology", group: "Academic" },
  { name: "Pranjal Sarma", role: "Centre Operations", group: "Operations" },
];

export const PARTNERS = [
  "Assam Skill University",
  "NIELIT Guwahati",
  "Startup Assam",
  "Google for Education",
  "AWS EdStart",
  "Kalyani Foundation",
  "SEBA Resource Group",
  "Digital India Mission",
];

export const VALUES = [
  { title: "Integrity", text: "Honest counselling, transparent fees and truthful results." },
  { title: "Innovation", text: "New formats, new tools and technology that removes friction." },
  { title: "Accessibility", text: "Regional-language learning priced for every household." },
  { title: "Excellence", text: "Academic rigour measured through outcomes, not promises." },
  { title: "Student First", text: "Every decision starts with the learner's outcome." },
  { title: "Continuous Learning", text: "Faculty training and curriculum review every term." },
  { title: "Collaboration", text: "Schools, educators and institutions build with us." },
  { title: "Social Impact", text: "Scholarships and free libraries for underserved learners." },
];

export const VENTURES = [
  { name: "Scordemy", text: "Regional-language EdTech platform for school and competitive exam learners." },
  { name: "ExSchool", text: "Assamese-medium school education for classes 6 to 12." },
  { name: "Scordemy IAS", text: "APSC and UPSC civil services mentorship vertical." },
  { name: "MPA Academy", text: "Academic coaching and mentorship for board and entrance students." },
  { name: "DDC – Delhi Defence Coaching", text: "NDA, CDS and SSB preparation for defence aspirants." },
  { name: "MindPower", text: "Medical and engineering entrance preparation with analytics-led testing." },
  { name: "Avedon.ai", text: "AI learning infrastructure powering doubt solving and personalisation." },
  { name: "Avedon Foundation", text: "Scholarships, free content and community education drives." },
];

export const AWARDS = [
  "Northeast Icon Award",
  "Best Entrepreneur in EdTech Platform of Assam",
  "Most Promising Institute Award",
];
