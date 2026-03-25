import { SectionHeading } from '../components/SectionHeading';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto px-6 max-w-7xl">
        <SectionHeading subtitle="Some of the recent projects I've built, focusing on scalable dashboards and robust platforms.">
          Featured Work
        </SectionHeading>

        <div className="flex justify-center mt-12">
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-5 bg-primary text-white font-bold rounded-2xl transition-all shadow-xl shadow-primary/30 hover:shadow-primary/50 flex items-center gap-3 group"
            onClick={() => navigate('/projects')}
          >
            Explore All Projects
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all">
              <FiArrowRight />
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

