import { type SkillCategory } from "../types";

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Angular",
      "NGRX",
      "Redux",
      "Zustand",
      "TypeScript",
      "3D Animations",
      "Tailwind CSS",
      "HTML/CSS",
      "SCSS",
    ],
  },
  {
    category: "Backend",
    skills: [
      "AdonisJS (Node.js MVC Framework)",
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "JWT Auth",
    ],
  },
  {
    category: "Database",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Mongoose", "Prisma"],
  },
  {
    category: "Tools",
    skills: ["Git", "Postman", "Vite", "Docker", "Netlify", "Vercel"],
  },
];
