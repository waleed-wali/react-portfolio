import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { Loader, PremiumBackground } from './components/Effects';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    // Backup for some browsers or slow renders
    const timer = setTimeout(() => window.scrollTo(0, 0), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative font-sans text-textMain">
      <Loader />
      <PremiumBackground />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[100] origin-left shadow-[0_0_10px_2px_rgba(99,102,241,0.5)]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.8 }} // Wait for loader
      >
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </motion.main>
      
      <Footer />
    </div>
  );
}

export default App;
