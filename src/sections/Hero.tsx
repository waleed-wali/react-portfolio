import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown, FiDownload } from 'react-icons/fi';
import { clsx } from 'clsx';

export function Hero() {
  const name = "Hi, I'm Muhammad Waleed Wali";
  
  return (
    <section id="home" className="min-h-screen flex items-center relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 3.2 }}
           className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-10 border border-primary/20 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Junior Level Freelancer
        </motion.div>

        <div className="flex flex-col gap-2 mb-8">
          <motion.p
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 3 }}
             className="text-primary font-bold tracking-widest text-sm uppercase"
          >
            Full Stack Developer
          </motion.p>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-textMain leading-[1.1] font-display">
            {name.split(" ").map((word, i) => (
              <span 
                key={i} 
                className={clsx(
                  "inline-block mr-4 overflow-hidden whitespace-nowrap",
                  i > 1 ? "text-primary" : "text-textMain"
                )}
              >
                {word.split("").map((char, j) => (
                  <motion.span
                    key={j}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 3 + (i * 0.1) + (j * 0.03), 
                      ease: [0.33, 1, 0.68, 1] 
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4 }}
          className="text-2xl md:text-3xl text-textMuted font-medium mb-8 max-w-2xl leading-tight"
        >
          I help businesses build <span className="text-textMain border-b-2 border-primary/40">scalable dashboards</span> and solve complex API integration challenges with clean, high-performance solutions.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.2 }}
          className="flex flex-wrap items-center gap-6"
        >
          <Link
            to="projects"
            smooth={true}
            offset={-100}
            className="cursor-pointer px-10 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primaryHover transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 flex items-center gap-2 group"
          >
            Explore My Work
            <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
          </Link>
          <a
            href="./Muhammad-Waleed-Wali-FullStack-Developer.pdf"
            download="Muhammad_Waleed_Wali_Resume.pdf"
            className="flex items-center gap-3 px-10 py-5 bg-surface/50 backdrop-blur-md text-textMain font-bold rounded-2xl hover:bg-surface transition-all border border-surfaceHover hover:border-primary/50"
          >
            <FiDownload />
            Get Resume
          </a>
        </motion.div>
      </div>

      {/* Decorative large text background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, delay: 4 }}
        className="absolute bottom-[-10%] right-[-5%] text-[20vw] font-black pointer-events-none whitespace-nowrap hidden lg:block"
      >
        FULLSTACK
      </motion.div>
    </section>
  );
}
