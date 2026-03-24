import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { skillsData } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading subtitle="The technologies and tools I utilize to build scalable solutions.">
          My Expertise
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface p-8 rounded-3xl border border-surfaceHover"
            >
              <h3 className="text-xl font-semibold text-textMain mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                  {index + 1}
                </span>
                {skillGroup.category}
              </h3>
              
              <ul className="space-y-3">
                {skillGroup.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-textMuted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
