import { type Project } from '../types';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-surface p-6 rounded-2xl border border-surfaceHover transition-all hover:bg-surfaceHover/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
    >
      <h3 className="text-2xl font-bold text-textMain mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      
      <p className="text-textMuted mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map(tech => (
          <span 
            key={tech} 
            className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-auto">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-textMain hover:text-primary transition-colors"
          >
            <FiExternalLink /> Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-textMain hover:text-primary transition-colors"
          >
            <FiGithub /> GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
