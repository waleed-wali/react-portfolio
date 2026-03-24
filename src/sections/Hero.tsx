import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto max-w-6xl px-6 flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for Freelance Projects
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-textMain mb-6 leading-[1.1]"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Muhammad Waleed Wali</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-textMuted font-medium mb-6 max-w-3xl"
        >
          React & Node.js Developer | Dashboard & API Specialist
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-textDark mb-10 max-w-2xl leading-relaxed"
        >
          "I build scalable dashboards and solve complex API integration problems."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            to="projects"
            smooth={true}
            offset={-100}
            className="cursor-pointer px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primaryHover transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-100}
            className="cursor-pointer px-8 py-4 bg-surfaceHover text-textMain font-medium rounded-full hover:bg-gray-800 transition-all border border-surface"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
