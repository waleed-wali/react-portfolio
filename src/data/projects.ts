import { type Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "admin-dashboard",
    title: "Scalable Enterprise Dashboard",
    description:
      "Designed to solve data fragmentation for internal teams. Implemented a centralized CRUD system with real-time analytics using Redux and specialized API caching patterns.",
    tech: ["React", "Node.js", "Redux Toolkit", "RTK Query", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    longDescription: "Our team developed this project to resolve data fragmentation challenges, particularly for internal operations. We created a centralized, real-time dashboard that integrates data from across various departments, enabling teams to monitor and manage key performance indicators (KPIs) in one place. Using Redux Toolkit for state management and RTK Query for API caching, the system achieved a 40% reduction in server load and provided teams with actionable, up-to-the-minute data.",
    milestones: [
      "Reduced server load by 40% through expert API caching.",
      "Successfully integrated 5+ data sources into a unified analytics engine.",
      "Delivered a highly intuitive UI/UX for non-technical internal users."
    ]
  },
  {
    id: "ecommerce-app",
    title: "High-Conversion E-commerce",
    description:
      "Built a mobile-first shopping experience focusing on performance. Optimized core web vitals and implemented a robust MongoDB schema.",
    tech: ["React", "Express.js", "MongoDB", "Framer Motion", "Stripe API"],
    liveUrl: "#",
    githubUrl: "#",
    longDescription: "This project focused on building a lightning-fast, mobile-first e-commerce solution. To drive higher conversions, we optimized the frontend for speed and performance, focusing on Core Web Vitals. On the backend, we developed a robust, flexible MongoDB schema that could handle millions of products and complex variations with ease. The result was a platform that scaled seamlessly during peak traffic without compromising the user experience.",
    milestones: [
      "Achieved a 95+ performance score on Lighthouse core metrics.",
      "Optimized MongoDB queries, reducing page load time by 30% for complex catalogs.",
      "Implemented a secure, multi-step checkout with integrated payment gateways."
    ]
  },
  {
    id: "seo-tool",
    title: "Automated SEO Audit Platform",
    description:
      "Developed a tool to automate technical SEO analysis. Solved slow reporting by utilizing Zustand for state-heavy UI and implementing modular React hooks.",
    tech: ["React", "TypeScript", "Zustand", "Postman API", "Cheerio"],
    liveUrl: "#",
    githubUrl: "#",
    longDescription: "The SEO Audit Platform was developed to automate technical website analysis, providing users with instant reports on site health and performance. We utilized Zustand for state management in the state-heavy UI, which allowed for seamless real-time updates as the audit progressed. By building modular React hooks, we were able to reuse core logic across different parts of the application, significantly speeding up development and improving codebase maintainability.",
    milestones: [
      "Automated reports that previously took hours, now ready in seconds.",
      "Integrated complex SEO crawling logic using modern React patterns.",
      "Built a scalable hook-based architecture for reusable data fetching."
    ]
  },
];
