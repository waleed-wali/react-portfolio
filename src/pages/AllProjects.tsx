import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { SectionHeading } from '../components/SectionHeading';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function AllProjects() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-textMuted hover:text-primary transition-colors mb-12 group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>

        <SectionHeading subtitle="A complete archive of the projects I've built, ranging from scalable enterprise dashboards to high-conversion platforms.">
          All Projects
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
