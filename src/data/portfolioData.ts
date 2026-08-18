export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  date?: string;
  status?: "In Progress" | "Completed" | "On Hold";
  category?: "personal" | "freelance" | "professional";
  type: "software" | "roblox" | "web";
  technologies: string[];
  links: {
    github?: string;
    live?: string;
    release?: string;
    roblox?: string;
  };
  keyFeatures?: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  type: "Full-time" | "Part-time" | "Freelance" | "Internship";
  startDate: string;
  endDate?: string;
  location?: string;
  mode?: "Hybrid" | "Remote" | "On-site";
  description?: string[];
  skills?: string[];
}

export interface Award {
  id: number;
  title: string;
  issuer: string;
  organization?: string;
  date: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  project: string;
  date: string;
}

export interface ProfileData {
  name: string;
  role: string;
  experience: string;
  email: string;
  location: string;
  tagline: string;
  resumeUrl?: string;
  socials: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    website?: string;
    twitter?: string;
  };
}

export const profileData: ProfileData = {
  name: "Pushkar Gaikwad",
  role: "Founding Partner @ Agilique-Solutions LLP | Co-Founder @ Team-Radiant | Application Developer @ 360-View-Tech",
  experience: "Full-Stack Mobile & Web Developer",
  email: "contact@pushkarbuilds.tech",
  location: "Nashik, Maharashtra, India",
  tagline: "Building scalable AI solutions, modern mobile apps & web platforms",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/pushkar2510",
    linkedin: "https://linkedin.com/in/pushkar2510",
    instagram: "https://instagram.com/pushkar25.10"
  }
};

/**
 * Calculates dynamic elapsed duration in real-time between startDate and endDate/present
 */
export function calculateDuration(startDateStr: string, endDateStr?: string): string {
  const start = new Date(startDateStr);
  const end = endDateStr && endDateStr !== 'present' ? new Date(endDateStr) : new Date();

  const startYear = start.getFullYear();
  const startMonth = start.getMonth(); // 0-11
  const endYear = end.getFullYear();
  const endMonth = end.getMonth();

  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  const startMonthName = start.toLocaleString('en-US', { month: 'short' });
  const endFormatted = endDateStr && endDateStr !== 'present'
    ? `${new Date(endDateStr).toLocaleString('en-US', { month: 'short' })} ${new Date(endDateStr).getFullYear()}`
    : 'Present';

  const dateRange = `${startMonthName} ${startYear} - ${endFormatted}`;

  let durationText = '';
  if (years > 0 && remainingMonths > 0) {
    durationText = `${years} yr${years > 1 ? 's' : ''} ${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
  } else if (years > 0) {
    durationText = `${years} yr${years > 1 ? 's' : ''}`;
  } else {
    durationText = `${totalMonths} mo${totalMonths > 1 ? 's' : ''}`;
  }

  return `${dateRange} • ${durationText}`;
}

export const experienceData: Experience[] = [
  {
    id: 1,
    role: "Founding Partner",
    company: "Agilique Solutions LLP",
    companyUrl: "https://agilique.com",
    type: "Full-time",
    startDate: "2026-05-01",
    endDate: "present",
    location: "Nashik, Maharashtra, India",
    mode: "Hybrid",
    description: [
      "Driving product architecture, technology strategy, and scalable full-stack development initiatives.",
      "Building modern digital software systems, client solutions, and cross-platform mobile ecosystems."
    ],
    skills: ["Technology Leadership", "Full-Stack Architecture", "Mobile Development", "Product Strategy"]
  },
  {
    id: 2,
    role: "Core Member & Application Developer",
    company: "360 View Tech",
    type: "Full-time",
    startDate: "2025-06-01",
    endDate: "2026-05-01",
    location: "Nashik, Maharashtra, India",
    mode: "Hybrid",
    description: [
      "Engineered core features and state architecture for PlaceTrix - a campus recruitment management mobile app.",
      "Integrated secure REST APIs, real-time database synchronization, and scalable Flutter modules."
    ],
    skills: ["Flutter", "Android Development", "REST APIs", "Firebase", "State Management"]
  },
  {
    id: 3,
    role: "Co-Founder",
    company: "Team Radiant",
    companyUrl: "https://team-radiant.github.io",
    type: "Freelance",
    startDate: "2025-01-01",
    endDate: "2026-05-01",
    description: [
      "Led open-source student initiatives, hackathon teams, and collaborative product engineering.",
      "Coordinated member development, project roadmaps, and delivery of innovative student software."
    ],
    skills: ["Member Development", "Project Coordination", "Open Source", "Team Leadership"]
  }
];

export const awardsData: Award[] = [
  {
    id: 1,
    title: "Entrepreneurship Excellence Awards 2025 - Student Ambassador Appreciation Category",
    issuer: "ENSIN FORUM",
    organization: "Pune Vidyarthi Griha's College of Engineering, Nashik",
    date: "Dec 2025",
    description: "Recognized by ENSIN Forum for leadership as a Student Ambassador and for actively contributing to innovation and entrepreneurship initiatives at the institutional level."
  }
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "PlaceTrix",
    description: "End-to-end campus placement management and recruitment drive platform.",
    fullDescription: "An all-in-one campus recruitment and placement automation platform built with React and TypeScript. PlaceTrix streamlines student registration, company drive notifications, eligibility filtering, and real-time applicant tracking for universities and visiting recruiters.",
    type: "software",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase", "REST APIs"],
    links: {
      github: "https://github.com/pushkar2510/placetrix",
      live: "https://placetrix.app"
    },
    keyFeatures: [
      "End-to-end campus recruitment drive workflows & applicant tracking",
      "Automated eligibility criteria filtering and instant push notifications",
      "Live drive schedules, interview slot management & analytics dashboard",
      "Modern cloud architecture with real-time synchronization"
    ]
  },
  {
    id: 2,
    title: "Certify_Ai",
    description: "AI-driven automated credential generation, verification, and tamper detection platform.",
    fullDescription: "A secure digital credentialing ecosystem utilizing computer vision and cryptography to batch-issue authentic verifiable certificates, validate credential authenticity via QR verification, and prevent certificate tampering.",
    type: "software",
    technologies: ["Python", "OpenCV", "FastAPI", "Streamlit", "Cryptography"],
    links: {
      github: "https://github.com/pushkar2510/Certify_ai",
      release: "https://github.com/pushkar2510/Certify_ai/releases/tag/v3.0.0-desktop"
    },
    keyFeatures: [
      "Automated batch certificate generation with dynamic watermarking",
      "Instant cryptographic and QR-code-based verification pipeline",
      "Tamper detection for forged or modified academic credentials"
    ]
  },
  {
    id: 3,
    title: "SkillBridge",
    description: "Interactive skill-sharing and peer-to-peer mentorship platform.",
    fullDescription: "A modern collaborative learning network empowering students and developers to exchange technical skills, participate in guided code reviews, and track learning milestones with modular assessments.",
    type: "web",
    technologies: ["TypeScript", "React", "Node.js", "Tailwind CSS", "REST API"],
    links: {
      github: "https://github.com/pushkar2510/SkillBridge"
    },
    keyFeatures: [
      "Dynamic skill exchange directory and peer matching engine",
      "Interactive assessment checklists and learning progress tracking",
      "Clean, accessible UI with responsive state management"
    ]
  },
  {
    id: 4,
    title: "Legisly",
    description: "AI-powered legal advisory assistant and statutory query chatbot platform.",
    fullDescription: "An intelligent legal technology platform simplifying complex statutory law, legal documentation, and client queries into accessible, natural-language conversations using NLP and conversational AI models.",
    type: "software",
    technologies: ["Python", "NLP", "React", "FastAPI", "Tailwind CSS"],
    links: {
      github: "https://github.com/pushkar2510/Legisly",
      live: "https://legisly.vercel.app/"
    },
    keyFeatures: [
      "Conversational legal query answering with contextual legal reference citations",
      "Document scanning and key clause extraction",
      "Intuitive client-facing chat UI with interactive prompt templates"
    ]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Agilique Solutions Team",
    role: "Founding Partner & Engineering",
    company: "Agilique-Solutions LLP",
    content: "Pushkar demonstrates extraordinary technical agility across full-stack and mobile architectures. His initiative in driving scalable solutions and product vision is invaluable.",
    rating: 5,
    project: "Agilique Enterprise Solutions",
    date: "2025"
  },
  {
    id: 2,
    name: "360ViewTech Leadership",
    role: "Product & Development",
    company: "360ViewTech",
    content: "Pushkar's contributions to PlaceTrix in Flutter and backend integrations were exceptional. He delivers clean code, proactive problem solving, and an intuitive user experience.",
    rating: 5,
    project: "PlaceTrix",
    date: "2024"
  },
  {
    id: 3,
    name: "Team-Radiant Members",
    role: "Collaborative Lead",
    company: "Team-Radiant",
    content: "A passionate technologist and natural leader who brings innovative AI and app ideas to life with speed and precision.",
    rating: 5,
    project: "Team Radiant Portal",
    date: "2024"
  }
];
