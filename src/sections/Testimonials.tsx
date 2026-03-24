import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { testimonialsData } from '../data/testimonials';
import { FiMessageSquare } from 'react-icons/fi';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-surface/30">
      <div className="container mx-auto max-w-[1600px] px-6">
        <SectionHeading subtitle="What clients say about my quality of work and problem-solving skills.">
          Social Proof
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-surface p-10 rounded-3xl border border-surfaceHover relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-primary/10">
                <FiMessageSquare size={120} />
              </div>
              
              <div className="relative z-10">
                <p className="text-lg text-textMain italic mb-8 leading-relaxed">
                  "{t.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-textMain">{t.name}</h4>
                    <p className="text-textMuted text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
