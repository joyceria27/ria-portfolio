export interface Project {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  type: string;
  technologies: string[];
  categories: string[];
  description: string;
  features: string[];
  performanceHighlight?: string;
  mockupType: 'dashboard' | 'console';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: string;
  datePlaceholder: string;
  certificateUrl?: string; // Placeholder for user update
}

export interface Education {
  id: string;
  institution: string;
  location: string;
  degree: string;
  duration: string;
  cgpa: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: { name: string; icon?: string; tag?: string }[];
}

export const PERSONAL_INFO = {
  name: "Joyceria Gonsalves",
  title: "ASPIRING SOFTWARE ENGINEER",
  shortBio: "MCA student passionate about software development, scalable applications, and AI/ML technologies.",
  summary: "Aspiring Software Engineer pursuing an MCA with strong skills in Java, Python, OOP, DBMS, and Web Development. Developed full-stack applications including Crime Intel Trace and a Criminal Record Management System. Passionate about building scalable software solutions and exploring AI/ML technologies.",
  location: "Shimoga, Karnataka",
  phone: "+91-8088136094",
  phoneFormatted: "+91 80881 36094",
  email: "joyceriag@gmail.com",
  linkedin: "www.linkedin.com/in/joyceria-gonsalves-203239352",
  linkedinUrl: "https://www.linkedin.com/in/joyceria-gonsalves-203239352",
  resumePath: "/resume.pdf",
};

export const QUICK_FACTS = [
  { label: "Master of Computer Applications (MCA)", period: "2025 – 2027", value: "8.59 CGPA", detail: "Presidency University, Bangalore" },
  { label: "Bachelor of Computer Applications (BCA)", period: "2022 – 2025", value: "8.36 CGPA", detail: "Edurite College of Management Studies" },
  { label: "Academic Projects Built", value: "2 Full-Stack & Core Projects", detail: "Crime Intel Trace & Criminal Record System" },
  { label: "Technical Certifications", value: "6 Earned Credentials", detail: "Infosys Springboard & Forage Simulations" },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Programming Languages",
    description: "Core languages used for backend logic, scripting, and system design",
    skills: [
      { name: "Java", tag: "Backend & OOP" },
      { name: "Python", tag: "Scripting & AI/ML" },
      { name: "C", tag: "Low-level Systems" },
      { name: "C++", tag: "DSA & System Design" },
      { name: "PHP", tag: "Web Scripting" },
      { name: "JavaScript", tag: "Frontend & Logic" },
      { name: "SQL", tag: "Relational Queries" },
    ],
  },
  {
    category: "Database",
    description: "Relational database design, query optimization, and management",
    skills: [
      { name: "MySQL", tag: "Relational DBMS" },
    ],
  },
  {
    category: "Core Concepts",
    description: "Fundamental computer science principles and software architectural foundations",
    skills: [
      { name: "Data Structures & Algorithms", tag: "DSA" },
      { name: "Object-Oriented Programming", tag: "OOP" },
      { name: "Database Management Systems", tag: "DBMS" },
      { name: "Operating Systems", tag: "OS" },
      { name: "Web Development", tag: "Full-Stack" },
      { name: "AI Fundamentals", tag: "Artificial Intelligence" },
      { name: "Machine Learning Basics", tag: "ML Basics" },
    ],
  },
  {
    category: "Tools & Environments",
    description: "Integrated development environments and local execution stacks",
    skills: [
      { name: "VS Code", tag: "IDE" },
      { name: "Google Colab", tag: "Python & ML" },
      { name: "XAMPP", tag: "Apache & MySQL Stack" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "crime-intel-trace",
    title: "Crime Intel Trace",
    subtitle: "Web-Based Crime Intelligence & Analytics Application",
    date: "May 2025",
    type: "Web Application Project",
    technologies: ["PHP", "MySQL", "XAMPP", "Git"],
    categories: ["All", "Web Development", "PHP", "MySQL"],
    description: "Developed a web-based crime intelligence application using PHP and MySQL for efficient crime record management and decision support.",
    performanceHighlight: "Optimized SQL queries, improving data retrieval performance by over 30%.",
    features: [
      "Designed a relational MySQL database schema to securely store and manage crime-related data.",
      "Implemented secure login and role-based authentication for police officers, analysts, and administrators.",
      "Built interactive dashboards and crime filtering features to support data analysis and decision-making.",
      "Optimized SQL queries, improving data retrieval performance by over 30%.",
      "Collaborated with a team of three using Git and Trello for agile project coordination.",
      "Followed software development best practices to build scalable and maintainable modules."
    ],
    mockupType: "dashboard"
  },
  {
    id: "criminal-record-management-system",
    title: "Criminal Record Management System",
    subtitle: "Java & MySQL Desktop Record System",
    date: "2025",
    type: "MCA First Semester Academic Project",
    technologies: ["Java", "MySQL"],
    categories: ["All", "Java", "MySQL"],
    description: "Developed a Criminal Record Management System as part of first-semester MCA coursework at Presidency University.",
    features: [
      "Developed modules to add, update, search, and delete criminal records efficiently.",
      "Integrated Java with MySQL for secure storage and retrieval of criminal record data.",
      "Applied Object-Oriented Programming, DBMS, and Data Structures concepts.",
      "Built the application with scalability and user-friendliness in mind.",
      "Strengthened backend development and problem-solving skills through implementation and testing."
    ],
    mockupType: "console"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "rest-assured-java",
    title: "REST Assured Java",
    issuer: "Infosys Springboard",
    category: "API Testing & Java",
    datePlaceholder: "Completed",
    certificateUrl: "#"
  },
  {
    id: "python-programming",
    title: "Python Programming",
    issuer: "Infosys Springboard",
    category: "Programming",
    datePlaceholder: "Completed",
    certificateUrl: "#"
  },
  {
    id: "ai-with-python",
    title: "AI with Python",
    issuer: "Infosys Springboard",
    category: "Artificial Intelligence",
    datePlaceholder: "Completed",
    certificateUrl: "#"
  },
  {
    id: "deep-learning-developers",
    title: "Deep Learning for Developers",
    issuer: "Infosys Springboard",
    category: "Machine Learning",
    datePlaceholder: "Completed",
    certificateUrl: "#"
  },
  {
    id: "aws-solutions-architecture",
    title: "AWS Solutions Architecture Job Simulation",
    issuer: "Forage",
    category: "Cloud Architecture",
    datePlaceholder: "Completed",
    certificateUrl: "#"
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Forage (Mastercard)",
    category: "Cybersecurity",
    datePlaceholder: "Completed",
    certificateUrl: "#"
  }
];

export const EDUCATION_TIMELINE: Education[] = [
  {
    id: "mca",
    institution: "Presidency University, Bangalore",
    location: "Bangalore, Karnataka",
    degree: "Master of Computer Applications (MCA)",
    duration: "2025 – 2027",
    cgpa: "8.59 (Current)",
    highlights: [
      "Specializing in Software Development, Advanced DBMS, and AI/ML Concepts.",
      "Maintained an impressive 8.59 CGPA across rigorous computer science coursework.",
      "Developed the Criminal Record Management System academic project."
    ]
  },
  {
    id: "bca",
    institution: "Edurite College of Management Studies",
    location: "Karnataka",
    degree: "Bachelor of Computer Applications (BCA)",
    duration: "06/2022 – 05/2025",
    cgpa: "8.36",
    highlights: [
      "Graduated with First Class Distinction (8.36 CGPA).",
      "Gained foundational mastery in Java, Python, C, C++, PHP, Web Development, and MySQL.",
      "Developed Crime Intel Trace web application in May 2025."
    ]
  }
];

export const EXPERIENCE_DATA = {
  title: "Experience & Internships",
  statusMessage: "Currently building hands-on experience through academic projects, software development, and technical learning.",
  opportunityCard: {
    title: "Open to Software Engineering & Development Opportunities",
    description: "Interested in opportunities where I can apply my programming, backend development, database, and problem-solving skills while continuing to grow as a software engineer.",
    tags: ["Software Engineering", "Full-Stack Development", "Java / Python Backend", "Database Architecture"]
  }
};
