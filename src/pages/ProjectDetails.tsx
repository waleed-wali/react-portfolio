import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub, FiCheckCircle } from 'react-icons/fi';
import { projectsData } from '../data/projects';
import { useEffect } from 'react';

export function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-textMain">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="text-primary hover:underline flex items-center gap-2 mx-auto"
          >
            <FiArrowLeft /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-textMuted hover:text-primary transition-colors mb-12 group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </motion.button>

        <div className="grid grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-textMain mb-6 font-display leading-tight">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {project.tech.map(t => (
                <span key={t} className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full border border-primary/20">
                  {t}
                </span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-xl text-textMuted leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {project.milestones && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-textMain mb-6">Key Milestones & Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.milestones.map((m, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="flex items-start gap-3 p-4 bg-surface/30 rounded-2xl border border-white/5"
                    >
                      <FiCheckCircle className="text-primary mt-1 shrink-0" />
                      <p className="text-textMuted text-sm">{m}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-6">
              {project.liveUrl !== '#' && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primaryHover transition-all flex items-center gap-2 shadow-xl shadow-primary/20"
                >
                  Live Demo <FiExternalLink />
                </a>
              )}
              {project.githubUrl !== '#' && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-surface text-textMain font-bold rounded-2xl hover:bg-surfaceHover transition-all border border-white/5 flex items-center gap-2"
                >
                  View Code <FiGithub />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
