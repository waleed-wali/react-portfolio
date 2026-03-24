import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Loader = () => {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setComplete(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
           initial={{ opacity: 1 }}
           exit={{ opacity: 0, y: -200 }}
           transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
           className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
        >
          <div className="relative overflow-hidden">
             <motion.h1
               initial={{ y: 100 }}
               animate={{ y: 0 }}
               transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
               className="text-4xl md:text-6xl font-bold font-display"
             >
               Waleed Wali<span className="text-primary">.dev</span>
             </motion.h1>
             <motion.div 
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
               className="h-1 bg-primary w-full origin-left mt-2"
             />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-6 text-textMuted text-sm tracking-[0.2em] font-medium"
          >
            LOADING EXPERIENCE...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const PremiumBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-grid opacity-20" />
       
       {/* Blobs */}
       <div className="bg-blob bg-primary/30 top-[-10%] left-[-10%]" />
       <div className="bg-blob bg-secondary/20 bottom-[-10%] right-[-10%]" />
       <div className="bg-blob bg-indigo-600/10 top-[40%] right-[-5%] animate-[slow-pulse_12s_infinite]" />
    </div>
  );
};
