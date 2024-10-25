
export const workExperienceData:
{
  role: string;
  from: string;
  till: string;
  company: string;
  description: string[];
}[] = [
  {
    role: "Full Stack Developer Freelancer",
    from: "May 2024",
    till: "Present",
    company: "Freelance",
    description: [
      "Developed a user-friendly product catalog website for a previously offline store, enabling the business to showcase its products online using React, Firebase & optimised it for SEO.",
      "Built a responsive website using Next.js for a car rental business, improving the user experience and simplifying the booking process."
    ]
  },
  {
    role: "Full Stack Web Developer",
    from: "Jan 2024",
    till: "May 2024",
    company: "Chaudhary Computers & Commercial College",
    description: [
      "Developed responsive and interactive web applications using MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Collaborated with cross-functional teams to design and implement new features.",
      "Implemented best practices in code quality, testing, and deployment processes."
    ]
  }
];

export const educationData: {
  degree: string;
  specialization: string;
  from: string;
  till: string;
  college: string;
  cgpa: string;
}[] = [
  {
    degree: "Bachelor of Technology",
    specialization: "Computer Science & Engineering",
    from: "2020",
    till: "2024",
    college: "Chandigarh Engineering College, CGC Landran",
    cgpa: "8.16/10"
  }
];

export const certificationsData: {
  certificate: string;
  organization: string;
  date: string;
  link: string;
}[] = [
  {
    certificate: "IBM Full Stack Software Developer",
    organization: "IBM - Coursera",
    date: "Oct 2024",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/6MTUSCT8O1ED"
  },
  {
    certificate: "0-100 MERN Full Stack Web Development",
    organization: "100xdevs",
    date: "Aug 2024",
    link: "https://app.100xdevs.com/certificate/verify/1LVKNFTR"
  },
  {
    certificate: "Leadership Skills IIM-A",
    organization: "Coursera",
    date: "Dec 2023",
    link: "https://coursera.org/verify/ZHG4HK9VJWH6"
  }
]

export const skillsData: {
  frontend: string[];
  backend: string[];
  databases: string[];
  devops: string[];
  architecture: string[];
  tools: string[];
} = {
  frontend: [
    "Next.js", "TypeScript", "React.js", "JavaScript", "Python", "HTML", "TailwindCSS"
  ],
  backend: [
    "Node.js", "Express.js", "Fastify", "Django", "Flask", "Hono"
  ],
  databases: [
    "MongoDB", "PostgreSQL", "MySQL", "Prisma", "Firebase", "Supabase"
  ],
  devops: [
    "Docker", "Kubernetes", "AWS", "GCP", "Cloudflare", "Serverless"
  ],
  architecture: [
    "Microservices", "RESTful APIs", "GraphQL"
  ],
  tools: [
    "Git", "Turborepos", "CI/CD", "Agile"
  ]
}