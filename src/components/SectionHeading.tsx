import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
}

export function SectionHeading({ children, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center lg:text-left">
      <Reveal width="100%">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-textMain to-textDark"
        >
          {children}
        </motion.h2>
      </Reveal>
      
      {subtitle && (
        <Reveal width="100%">
          <motion.p
            className="mt-4 text-textMuted text-lg max-w-2xl"
          >
            {subtitle}
          </motion.p>
        </Reveal>
      )}
    </div>
  );
}
