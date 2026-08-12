export const personalInfo = {
  name: "Anas Aln3san",
  email: "anas.aln3san@gmail.com",
  github: "https://github.com/Aln3san",
  linkedin: "https://www.linkedin.com/in/anasaln3san",
  // Point to the CV placed in the public folder (used by header/resume links)
  resume: "/cv/lastes_cv_Anas_Alnaasan_Back-End Developer_resume.pdf",
  profilePicture: "/profile-2.jpeg",
  heroDescription:
    "I build APIs, backend systems, and the business logic that powers web applications. My focus is on PHP and Laravel-based backends, databases, authentication, and delivering maintainable server-side systems.",
};

export const workExperience: any[] = [];

export const education: any[] = [
  {
    degree: "Middle School Student",
    institution: "Mansoura Preparatory School for Boys",
    location: "Mansoura, Dakahlia, Egypt",
    period: "September 2026 - Present",
  },
];

export const hackathons: any[] = [
  {
    name: "Red Dev Hackathon",
    date: "August 2026",
    description: "Participated in the hackathon as part of a team.",
  },
];

export const skills = [
  {
    label: "Backend",
    items: ["PHP", "Laravel", "REST APIs", "MySQL", "SQLite"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Composer", "Postman"],
  },
  {
    label: "Frontend (supporting)",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export const selectedWork = [
  {
    title: "BloodBank",
    context: "Laravel Backend / API",
    summary: "A Laravel-based backend API for blood bank management providing authentication and core API endpoints.",
    stack: ["PHP", "Laravel", "MySQL", "REST API", "Authentication"],
    description: [
      "Backend/API project focused on building RESTful endpoints and authentication flows.",
      "Database-driven design using MySQL for storing donors, requests, and related records.",
      "Repository: https://github.com/Aln3san/bloodbank",
    ],
  },
  {
    title: "Quran Center LMS",
    context: "Laravel LMS",
    summary: "Learning management system for a Quran teaching center with course and lesson management and an admin dashboard.",
    stack: ["PHP", "Laravel", "MySQL", "Authentication", "Admin Dashboard"],
    description: [
      "Team lead role coordinating development of course and lesson management features.",
      "Includes admin dashboard, user management, and certificate-related features as planned in the codebase.",
      "Repository: https://github.com/Aln3san/quran-center",
    ],
  },
  {
    title: "Feane",
    context: "Restaurant web application (frontend)",
    summary: "A restaurant website and frontend built with React; included here as a supporting/frontend project alongside backend work.",
    stack: ["React", "HTML", "CSS", "API integration"],
    description: [
      "Frontend-focused project demonstrating integration with APIs and responsive UI.",
      "Repository: https://github.com/Aln3san/Feane",
    ],
  },
  {
    title: "T-Square LMS",
    context: "Laravel LMS",
    summary: "An LMS project with authentication, course and student dashboards and admin features.",
    stack: ["PHP", "Laravel", "MySQL", "Authentication", "Courses"],
    description: [
      "A learning platform implemented with Laravel covering courses, lessons, and role-based dashboards.",
      "Included as a past LMS project reflecting backend and application design work.",
    ],
  },
];

export const awards: any[] = [];
