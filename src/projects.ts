import { StaticImageData } from 'next/image';

import quizrrImg from '@/public/images/projects/quizrr.png'
import wallsImg from '@/public/images/projects/walls.jpg'
import cashAppImage from '@/public/images/projects/cash-app.png'

export const top_projects: {
  title: string;
  description: string;
  img?: StaticImageData;
  github_repo: string;
  live_link?: string;
  tech_tags: string[];
}[] = [
  {
    title: "Quizrr JEE",
    description: "A JEE Mock test website in Next.js",
    img: quizrrImg,
    github_repo: "https://github.com/JaskiratAnand/quizrr-jee",
    live_link: "https://quizrr-jee.vercel.app/",
    tech_tags: ["Next.js", "Typescript", "TailwindCSS", "Vercel"]
  },
  {
    title: "Walls",
    description: "Wallpaper app build in React Native using Expo.",
    img: wallsImg,
    github_repo: "https://github.com/JaskiratAnand/walls",
    tech_tags: ["React Native", "Expo"]
  },
  {
    title: "Cash-App",
    description: "This is a simple Wallet app built using Turborepos and Next.js ",
    img: cashAppImage,
    github_repo: "https://github.com/JaskiratAnand/cash-app",
    tech_tags: ["Next.js", "Turborepos", "WebSockets", "TailwindCSS"]
  },
]

export const projects_list: {
  title: string;
  description: string;
  github_repo: string;
  live_link?: string;
  date: string;
  tech_tags: string[];
} [] = [
  {
    title: "Portfolio - Jaskirat Anand",
    description: "Portfolio website built in Next.js",
    github_repo: "https://github.com/JaskiratAnand/portfolio",
    live_link: "https://jaskiratanand.vercel.app/",
    date: "Oct 2024",
    tech_tags: ["Next.js", "TypeScript", "TailwindCSS", "SSR"]
  }, 
  {
    title: "Quizrr JEE",
    description: "Test series/mock test prep web app built in Next.js",
    github_repo: "https://github.com/JaskiratAnand/quizrr-jee",
    live_link: "https://quizrr-jee.vercel.app/",
    date: "Oct 2024",
    tech_tags: ["Next.js", "TypeScript", "PrismaORM", "PostgreSQL"]
  },
  {
    title: "Walls - Wallpaper app",
    description: "Wallpaper app built using Expo and React Native.",
    github_repo: "https://github.com/JaskiratAnand/walls",
    date: "Oct 2024",
    tech_tags: ["React Native", "Expo", "TypeScript"]
  },
  {
    title: "Full Stack Application Development Capstone Project",
    description: "Final project - IBM Full Stack Web Development Professional Certificate program on Coursera.",
    github_repo: "https://github.com/JaskiratAnand/coursera-fullstack_developer_capstone",
    date: "Sept 2024",
    tech_tags: ["React.js", "JavaScript", "Python",  "Django", "Mongoose", "MongoDB"]
  },
  {
    title: "Cash App",
    description: "Wallet app built using Turborepo and NextJs. Backend is built using Fastify.",
    github_repo: "https://github.com/JaskiratAnand/cash-app",
    date: "Jun 2024",
    tech_tags: ["Next.js", "Docker", "Workflows", "Turborepos", "WebSockets", "TailwindCSS", "PostgeSQL"]
  },
  {
    title: "Medium - Blogging Site",
    description: "Blogging website. Using clouflare workers for serverless backend.",
    github_repo: "https://github.com/JaskiratAnand/medium-cloudflare",
    live_link : "https://medium-cloudflare-two.vercel.app/",
    date: "May 2024",
    tech_tags: ["React.js", "Vite", "TypeScript", "PostgreSQL", "Hono", "Serverless", "Cloudflare", "Workers"]
  },
  {
    title: "PrimeReads - Frontend",
    description: "Blogging app with Stripe Integration (group project with @diljotsingh04)",
    github_repo: "https://github.com/JaskiratAnand/primereads-frontend",
    live_link : "https://primereads.vercel.app",
    date: "May 2024",
    tech_tags: ["React.js", "Stripe", "JavaScript", "Firebase", "TailwindCSS", "MongoDB"]
  },
  {
    title: "Survey - Poll app",
    description: "Survey/Poll backend application built with TypeScript, Node.js and Prisma.",
    github_repo: "https://github.com/JaskiratAnand/survey-poll-app",
    date: "May 2024",
    tech_tags: ["Node.js", "Express.js", "TypeScript", "Prisma"]
  },
  {
    title: "Amazon Clone",
    description: "Amazon Website Clone",
    github_repo: "https://github.com/JaskiratAnand/amazon-clone",
    date: "April 2024",
    tech_tags: ["React.js", "Firebase", "JavaScript"]
  },
  {
    title: "ibm-django-final-project",
    description: "Django final project IBM - Coursera",
    github_repo: "https://github.com/JaskiratAnand/ibm-django-final-project",
    date: "Mar 2024",
    tech_tags: ["Django", "Flask", "Python"]
  },
  {
    title: "systemutil",
    description: "Custom Linux command-line utility with various system-related functionalities.",
    github_repo: "https://github.com/JaskiratAnand/systemutil",
    date: "Jan 2024",
    tech_tags: ["Linux", "Bash", "Shell"]
  },
  {
    title: "Shopping App - React",
    description: "Shopping application in React",
    github_repo: "https://github.com/JaskiratAnand/ibm-coursera-shopping-app",
    date: "Jul 2023",
    tech_tags: ["React.js", "JavaScript"]
  },
  {
    title: "React Budget Application",
    description: "Budgeting application in React",
    github_repo: "https://github.com/JaskiratAnand/ejtos-react_budget_app",
    date: "Jul 2023",
    tech_tags: ["React.js", "JavaScript", "Context"]
  },
  {
    title: "Music App (Tkinter)",
    description: "A Python application to play your favourate music",
    github_repo: "https://github.com/JaskiratAnand/MusicApp-using-Tkinter",
    date: "Aug 2022",
    tech_tags: ["Python", "Tkinter", "PIL", "Pygame", "ImageTk"]
  },
  {
    title: "Visualisation Forecasting Stock Trends using ML",
    description: "view stocks data through Yahoo Finance & predicts their future using LSTM Model.",
    github_repo: "https://github.com/JaskiratAnand/Visualisation-Forecasting-Stock-Trends-using-ML",
    date: "Jun 2022",
    tech_tags: ["Keras", "Python", "Matplotlib", "Pandas", "Streamlit"]
  },
  {
    title: "Weather App",
    description: "View weather conditions of any location around the world by using Openweather API.",
    github_repo: "https://github.com/JaskiratAnand/WeatherApp-Web",
    live_link : "https://weatherapp-jaskirat.netlify.app/",
    date: "Dec 2021",
    tech_tags: ["Node.js", "Express.js", "JavaScript", "RestfulAPI"]
  }
]