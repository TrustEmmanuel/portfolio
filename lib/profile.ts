// Edit this file to change the words on the site.
// The header and the Home page read everything from here.

const githubUrl = "https://github.com/TrustEmmanuel";
const linkedinUrl = "https://www.linkedin.com/in/emmanuel-udeka/";
const emailAddress = "udekaem@gmail.com";
// Replace this with the public site URL when the portfolio is deployed.
const siteUrl = "http://localhost:3000";

export const profile = {
  name: "Emmanuel Udeka",
  siteUrl,
  headline: "Full-Stack Developer",
  badge: "Available for projects",
  greeting: "Hi, I'm Emmanuel Udeka",
  // The photo in this folder is named 210087500.jpg, not profile.jpg.
  photo: "/images/210087500.jpg",
  photoAlt: "Portrait of Emmanuel Udeka",
  bio: "I'm Emmanuel, a software and product developer with 6 years of experience building software and fintech products. I turn ideas into secure, reliable web and mobile apps.",
  about: {
    title: "About me",
    // Hidden on the page until this bracket text is replaced.
    paragraph: "[YOUR ABOUT PARAGRAPH]",
    offersTitle: "What I offer:",
    offers: [
      "Full-stack web apps (Next.js, TypeScript, Java)",
      "Mobile apps (React Native)",
      "Payment API Integration",
      "Email integration (Mailgun)",
      "Databases: MySQL, PostgreSQL, Supabase",
      "Google sign-in and user accounts",
    ],
    closing: "Message me, let's start building.",
  },
  stats: [
    { value: "6+", label: "Years" },
    { value: "19", label: "Projects" },
    { value: "Resume", href: "#resume", linkLabel: "View resume" },
  ],
  stackTitle: "Tech Stack",
  stack: [
    {
      category: "Frontend",
      items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Java", "Node.js (TypeScript)"],
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "Supabase"],
    },
    {
      category: "Auth",
      items: ["Google Auth"],
    },
    {
      category: "Version control",
      items: ["Git and GitHub"],
    },
    {
      category: "Payments & Email",
      items: ["Payment API Integration", "Mailgun"],
    },
    {
      category: "Services",
      items: [
        "Web and Mobile Application Development",
        "Product Management and Consultancy",
        "Payment, Banking and Fintech Integration",
        "Enterprise Application Integration and Support",
        "Business and IT Consultancy",
      ],
    },
    {
      category: "Tools",
      groups: [
        {
          label: "Editors & AI",
          items: ["Cursor", "VS Code", "IntelliJ IDEA"],
        },
        {
          label: "API & Testing",
          items: ["Postman"],
        },
        {
          label: "Deployment & DevOps",
          items: ["Vercel", "Netlify", "Git and GitHub"],
        },
        {
          label: "Backend platform",
          items: ["Supabase"],
        },
        {
          label: "Mobile",
          items: ["Expo"],
        },
      ],
    },
  ],
  servicesTitle: "Services",
  services: [
    {
      title: "Web and Mobile Application Development",
      description: "",
    },
    {
      title: "Product Management and Consultancy",
      description: "",
    },
    {
      title: "Payment, Banking and Fintech Integration",
      description: "",
    },
    {
      title: "Enterprise Application Integration and Support",
      description: "",
    },
    {
      title: "Business and IT Consultancy",
      description: "",
    },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  email: emailAddress,
  actions: [
    { label: "Get in touch", href: `mailto:${emailAddress}`, variant: "primary" },
    { label: "View my work", href: "/projects", variant: "secondary" },
    { label: "GitHub", href: githubUrl, variant: "secondary" },
  ],
  socials: [
    { label: "GitHub", href: githubUrl },
    { label: "LinkedIn", href: linkedinUrl },
  ],
  github: {
    url: githubUrl,
    title: "Find me on GitHub",
    text: "Code and project work live on my GitHub profile.",
    button: "View GitHub",
  },
  resume: {
    title: "Resume",
    downloadLabel: "Download resume",
    downloadHref: "/resume.pdf",
    experienceTitle: "Experience",
    educationTitle: "Education",
  },
  // Replace these placeholder entries with your own. They are not real jobs or schools.
  experience: [
    {
      role: "[Role]",
      company: "[Company]",
      dates: "[Start – End]",
      summary: "[Replace with what you did in this role]",
    },
  ],
  education: [
    {
      school: "[School]",
      credential: "[Credential]",
      dates: "[Start – End]",
    },
  ],
  featured: {
    title: "Featured projects",
    allLabel: "View all projects",
    href: "/projects",
  },
  cta: {
    title: "Let's work together",
    button: "Get in touch",
    href: "/contact",
  },
} as const;

export type Project = {
  title: string;
  summary: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

// Bracket text is a blank to fill in. Those entries stay off the page.
export function isUnfilled(value: string) {
  return value.includes("[");
}

export const projects: Project[] = [
  {
    title: "[PROJECT 1 TITLE]",
    summary: "[PROJECT 1 SUMMARY]",
    description: "[PROJECT 1 DESCRIPTION]",
    tech: ["[PROJECT 1 TECH]"],
    image: "",
    featured: true,
  },
  {
    title: "[PROJECT 2 TITLE]",
    summary: "[PROJECT 2 SUMMARY]",
    description: "[PROJECT 2 DESCRIPTION]",
    tech: ["[PROJECT 2 TECH]"],
    image: "",
    featured: true,
  },
];

export function readyProjects() {
  return projects.filter(
    (project) =>
      !isUnfilled(project.title) &&
      !isUnfilled(project.summary) &&
      !isUnfilled(project.description) &&
      project.tech.every((item) => !isUnfilled(item)),
  );
}
