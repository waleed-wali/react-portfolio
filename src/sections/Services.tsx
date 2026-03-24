import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { servicesData } from '../data/services';
import { FiLayers, FiPieChart, FiDatabase, FiZap, FiPlus } from 'react-icons/fi';

const iconMap: Record<string, React.ElementType> = {
  FiLayers,
  FiPieChart,
  FiDatabase,
  FiZap,
  FiPlus
};

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto px-6 max-w-7xl">
        <SectionHeading subtitle="Professional freelance solutions tailored for startups and businesses.">
          Services Offered
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
                className="group relative bg-surface/30 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/5 hover:bg-surface/60 transition-all hover:border-primary/30 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-[2rem] bg-background border border-white/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shadow-xl group-hover:shadow-primary/40">
                  {Icon && <Icon size={32} />}
                </div>
                <h3 className="text-xl font-bold text-textMain mb-4 font-display">{service.title}</h3>
                <p className="text-textMuted text-sm leading-relaxed">{service.description}</p>
                
                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 text-white/5 group-hover:text-primary/20 transition-colors">
                  <FiPlus size={20} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
