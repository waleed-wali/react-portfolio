import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'Services', to: 'services' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const NavLink = ({ link, mobile = false }: { link: typeof navLinks[0], mobile?: boolean }) => {
    const commonClasses = mobile 
      ? "text-textMain font-medium cursor-pointer" 
      : "text-textMuted hover:text-textMain text-xs font-bold uppercase tracking-widest cursor-pointer transition-colors relative group";

    if (isHomePage) {
      return (
        <ScrollLink
          to={link.to}
          spy={true}
          smooth={true}
          offset={-100}
          activeClass="text-primary font-bold"
          className={commonClasses}
          onClick={() => mobile && setMobileMenuOpen(false)}
        >
          {link.name}
          {!mobile && <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />}
        </ScrollLink>
      );
    }

    return (
      <RouterLink
        to={`/#${link.to}`}
        className={commonClasses}
        onClick={() => mobile && setMobileMenuOpen(false)}
      >
        {link.name}
        {!mobile && <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />}
      </RouterLink>
    );
  };

  return (
    <header 
      className={twMerge(
        clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'py-4 bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-8 bg-transparent'
        )
      )}
    >
      <div className="mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={handleLogoClick}
          className="text-2xl font-black tracking-tighter cursor-pointer text-textMain group font-display"
        >
          WALEED WALI<span className="text-primary group-hover:text-secondary transition-colors">.dev</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.5 + (i * 0.1) }} // Wait for loader
            >
              <NavLink link={link} />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 4.2 }}
          >
            <a 
              href="mailto:waleedwali03@gmail.com?subject=Project Inquiry&body=Hi Waleed, I'd like to talk about a project..." 
              className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-white bg-primary hover:bg-primaryHover rounded-xl transition-all shadow-lg shadow-primary/20"
            >
              Let's Talk
            </a>
          </motion.div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-textMain"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-surfaceHover overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link) => (
                <NavLink key={link.to} link={link} mobile />
              ))}
              <a 
                href="mailto:waleedwali03@gmail.com?subject=Project Inquiry&body=Hi Waleed, I'd like to talk about a project..." 
                className="mt-4 px-8 py-3 text-xs font-bold uppercase tracking-widest text-white bg-primary rounded-xl"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
