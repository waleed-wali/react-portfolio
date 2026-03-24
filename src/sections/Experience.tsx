import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { experienceData } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface/30">
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeading subtitle="My professional journey in building robust software solutions.">
          Work Experience
        </SectionHeading>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-32 py-6 group"
            >
              {/* Timeline line */}
              <div className="hidden sm:block absolute left-[120px] top-0 bottom-0 w-px bg-surfaceHover group-last:bottom-auto group-last:h-full"></div>
              
              {/* Timeline dot */}
              <div className="hidden sm:block absolute left-[120px] top-10 w-3 h-3 rounded-full bg-primary -translate-x-[5px] ring-4 ring-background"></div>

              {/* Date */}
              <div className="sm:absolute left-0 top-9 w-28 text-sm font-medium text-textMuted mb-2 sm:mb-0">
                {exp.duration}
              </div>

              {/* Content */}
              <div className="bg-surface p-8 rounded-2xl border border-surfaceHover shadow-sm hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold text-textMain">{exp.role}</h3>
                <h4 className="text-lg text-primary font-medium mb-4">{exp.company}</h4>
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-textMuted flex items-start gap-2">
                      <span className="text-primary/70 mt-1.5">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
