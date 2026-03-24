import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { servicesData } from '../data/services';
import * as Icons from 'react-icons/fi';

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeading subtitle="Professional freelance solutions tailored for startups and businesses.">
          Services Offered
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            const Icon = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-surface p-8 rounded-3xl border border-surfaceHover hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {Icon && <Icon size={28} />}
                </div>
                <h3 className="text-xl font-bold text-textMain mb-4">{service.title}</h3>
                <p className="text-textMuted text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
