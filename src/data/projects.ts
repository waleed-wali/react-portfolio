import { type Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "admin-dashboard",
    title: "Scalable Enterprise Dashboard",
    description: "Designed to solve data fragmentation for internal teams. Implemented a centralized CRUD system with real-time analytics using Redux and specialized API caching patterns to reduce server load by 40%.",
    tech: ["React", "Node.js", "Redux Toolkit", "RTK Query", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "ecommerce-app",
    title: "High-Conversion E-commerce",
    description: "Built a mobile-first shopping experience focusing on performance. Optimized core web vitals and implemented a robust MongoDB schema to handle complex product variations without sacrificing speed.",
    tech: ["React", "Express.js", "MongoDB", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "seo-tool",
    title: "Automated SEO Audit Platform",
    description: "Developed a tool to automate technical SEO analysis. Solved the problem of slow reporting by utilizing Zustand for state-heavy UI and implementing modular React hooks for reusable logic.",
    tech: ["React", "TypeScript", "Zustand", "Postman API"],
    liveUrl: "#",
    githubUrl: "#"
  }
];
