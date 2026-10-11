// Edit this file to change the words on the site.
// The header and the Home page read everything from here.

const githubUrl = "https://github.com/TrustEmmanuel";
const linkedinUrl = "https://www.linkedin.com/in/emmanuel-udeka/";
const emailAddress = "udekaem@gmail.com";
// Replace this with the public site URL when the portfolio is deployed.
const basePath = "/portfolio";
const siteUrl = `https://trustemmanuel.github.io${basePath}`;

export const profile = {
  name: "Emmanuel Udeka",
  siteUrl,
  headline: "Full-Stack Developer",
  badge: "Available for projects",
  greeting: "Hi, I'm Emmanuel Udeka",
  photo: `${basePath}/images/emmanuel-udeka.jpg`,
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
      category: "Frontend & Mobile",
      items: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Angular",
        "Tailwind CSS",
        "Flutter",
        "Expo",
      ],
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
      category: "Auth & Security",
      items: [
        "OAuth 2.0",
        "OpenID Connect",
        "JWT",
        "Google Sign-In",
        "Supabase Auth",
        "Role-Based Access Control",
        "API Key Authentication",
      ],
    },
    {
      category: "Payments & Email",
      items: ["Payment API Integration", "Mailgun"],
    },
    {
      category: "Version Control & Deployment",
      items: ["Git and GitHub", "Vercel", "Netlify"],
    },
    {
      category: "Tools",
      items: ["Cursor", "VS Code", "IntelliJ IDEA", "Postman"],
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
    { label: "Featured projects", href: "/projects" },
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
    text: "View my resume. My experience speaks for itself.",
    downloadLabel: "Download resume",
    downloadHref: `${basePath}/resume.pdf`,
    downloadName: "Emmanuel_Udeka_Resume.pdf",
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
  },
} as const;

export type ProjectNote = {
  label: string;
  text: string;
};

export type Project = {
  title: string;
  summary: string;
  description: string;
  audience: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  caseStudy?: ProjectNote[];
  storyOnHome?: boolean;
  showOnHome?: boolean;
  highlightOnHome?: boolean;
  imageLayout?: "banner";
  frames?: { src: string; width: number; height: number }[];
};

// Bracket text is a blank to fill in. Those entries stay off the page.
export function isUnfilled(value: string) {
  return value.includes("[");
}

export const projects: Project[] = [
  {
    title: "PetroVault",
    summary: "Materials control from the supply base to the wellhead.",
    description:
      "An inventory workspace for tubulars, MRO, chemicals, and serialized assets across U.S. Gulf and onshore stock. The Inventory Officer moves stock. Procurement holds valuations, repurchase decisions, and the compliance register.",
    audience:
      "The yard receives, issues, and transfers. Procurement sees value and certification, and approves repurchase. Each person is refused the other job.",
    tech: ["TypeScript", "React", "Vite", "Tailwind CSS", "Zod"],
    caseStudy: [
      {
        label: "The job",
        text: "Keep custody of tubulars, MRO, chemicals, and serialized assets from a supply base to a rig or well.",
      },
      {
        label: "The scope",
        text: "The live workspace is overview, inventory, transfers, and repurchase. An offshore issue needs a well. A SKU already stocked at a location is received against that line.",
      },
      {
        label: "The rule",
        text: "Role limits are checked when the action runs, not only hidden in the menu. Every movement is appended, and each row is tied to the one before it. Procurement can verify the chain and see the row where it breaks.",
      },
      {
        label: "The recovery",
        text: "The workspace is saved in the browser and checked against the register shape. If that saved book no longer matches, PetroVault reloads the sample book instead of opening a damaged one.",
      },
      {
        label: "The limit",
        text: "Sign-in accepts any password of four or more characters. The stock is a sample book for U.S. Gulf and onshore locations, not a company ledger. A shared register and a real sign-in are the next step.",
      },
    ],
    storyOnHome: true,
    showOnHome: true,
    image: `${basePath}/images/petrovault.png`,
    liveUrl: "https://petrovault-inventory.netlify.app/",
    githubUrl: "https://github.com/TrustEmmanuel/petrovault",
    featured: true,
  },
  {
    title: "TajMart",
    summary: "Groceries for the way Lagos cooks.",
    description:
      "A neighborhood grocery for Nigerian kitchens. Google sign-in keeps the basket with the shopper. Delivery is paid by transfer or cash, and a failed receipt email does not drop the order.",
    audience:
      "A shopper builds a basket and leaves a delivery address. Sign-in is how the basket and the receipt stay attached to them.",
    tech: ["JavaScript", "React", "Vite", "Supabase", "Google Sign-In", "Mailgun"],
    caseStudy: [
      {
        label: "The job",
        text: "Shoppers add what the kitchen is short on and place a delivery order across Lagos. Prices are in naira.",
      },
      {
        label: "The scope",
        text: "The shelf, a basket kept on the device, and Google sign-in so that basket is there on the next device. Delivery is ₦1,200 across Lagos and free from ₦15,000. Payment is transfer or cash when the bag arrives. The site does not collect cards.",
      },
      {
        label: "The rule",
        text: "The browser can read the shelf. It cannot write shoppers or orders. Sign-in and checkout check the Google token again before anything is saved, and the price on the order comes from the database, not from the page.",
      },
      {
        label: "The recovery",
        text: "A receipt email goes out after the order is saved, with the items, the total, and the delivery address. If that email fails, the order stays saved and the confirmation says the email did not send.",
      },
      {
        label: "The limit",
        text: "Without the connected services, the site runs on the sample shelf. Saved shoppers, saved orders, and receipt emails need those services.",
      },
    ],
    image: `${basePath}/images/tajmart.png`,
    liveUrl: "https://grocery-store-hng.netlify.app/",
    githubUrl: "https://github.com/TrustEmmanuel/hng-grocery-store",
    featured: true,
  },
  {
    title: "Oakwood",
    summary: "A specimen treasury for dollars, sterling, and naira.",
    description:
      "A corporate banking workspace for a treasurer. Wires, batches, bills, and credit movements settle on a ledger that stays in the browser.",
    audience:
      "The treasurer funds a payment from an available balance and authorizes it with a PIN. The specimen writes the receipt. Nothing leaves the browser.",
    tech: ["JavaScript", "React", "Vite", "Tailwind CSS"],
    caseStudy: [
      {
        label: "The job",
        text: "A treasurer sees dollars, sterling, and naira in one book and authorizes what leaves each account.",
      },
      {
        label: "The scope",
        text: "Single, multiple, and bulk payments, bills, beneficiaries, statements, and credit facilities. A naira payment carries a NIP charge. A cross-border wire carries a cable charge. A move between the company's own accounts does not. A value date can be today, or scheduled within 30 days.",
      },
      {
        label: "The rule",
        text: "The amount, the narration, the value date, the available balance, and the mandate PIN are checked when the instruction runs. A wrong PIN is refused and written to the audit. A cross-currency payment uses the specimen board rate.",
      },
      {
        label: "The recovery",
        text: "The book is saved in this browser. If that saved book no longer matches the specimen shape, Oakwood opens a fresh one. Reset demo data puts back the opening ledger, payees, and facilities, and keeps the signed-in mandate.",
      },
      {
        label: "The limit",
        text: "It is a specimen. No bank is contacted and no payment is sent. Sign-in is a specimen mandate stored in the browser.",
      },
    ],
    image: `${basePath}/images/oakwood.png`,
    imageLayout: "banner",
    frames: [
      { src: `${basePath}/images/oakwood.png`, width: 1024, height: 355 },
      { src: `${basePath}/images/oakwood-history.png`, width: 1024, height: 360 },
    ],
    githubUrl: "https://github.com/TrustEmmanuel/oakwood-banking-management-system",
    featured: true,
    showOnHome: true,
    highlightOnHome: true,
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
