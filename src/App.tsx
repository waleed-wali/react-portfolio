import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './sections/Footer';
import { Loader, PremiumBackground } from './components/Effects';
import { Home } from './pages/Home';
import { AllProjects } from './pages/AllProjects';
import { ProjectDetails } from './pages/ProjectDetails';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
        transition={{ duration: 1, delay: 2.8 }}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </motion.main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
