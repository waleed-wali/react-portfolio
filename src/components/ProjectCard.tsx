import { type Project } from '../types';
import { motion } from 'framer-motion';

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
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.21, 0.45, 0.32, 0.9] }}
      className="group relative flex flex-col h-full bg-surface/40 backdrop-blur-sm p-8 rounded-[2rem] border border-white/5 transition-all hover:bg-surface/80 hover:-translate-y-2 hover:border-primary/50 overflow-hidden"
    >
      {/* Glossy top light effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-primary/50" />
      
      <div className="mb-6">
        <h3 className="text-2xl font-black text-textMain mb-3 group-hover:text-primary transition-colors font-display tracking-tight">
          {project.title}
        </h3>
        
        <p className="text-textMuted text-sm leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div className="mt-auto pt-8 border-t border-white/5">
        <div className="flex flex-wrap gap-2">
          {project.tech.map(tech => (
            <span 
              key={tech} 
              className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-lg border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Background glow on hover */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
