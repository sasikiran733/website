import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const roles = ["B.Tech Student", "Mechanical Diploma Holder", "Aspiring Professional"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Dynamic Background Decor */}
      <div className="absolute top-20 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center md:text-left order-2 md:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50 backdrop-blur-sm text-primary text-sm font-semibold tracking-wider shadow-lg"
          >
            PORTFOLIO
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">
              J Sasi Kiran
            </span>
          </h1>

          <div className="h-8 md:h-10 overflow-hidden">
            <AnimatePresence mode='wait'>
              <motion.p 
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl md:text-2xl text-slate-300 font-medium"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-lg text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
            A passionate Engineering Student & Aspiring Professional eager to tackle challenging tasks and drive results with dedication and consistency.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a 
              href="#contact" 
              className="px-8 py-3.5 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-xl font-bold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 flex items-center gap-2"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <button 
              className="px-8 py-3.5 bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700/50 hover:border-slate-600 rounded-xl font-medium transition-all hover:-translate-y-1 flex items-center gap-2 backdrop-blur-md"
              onClick={() => alert("Resume download started...")}
            >
              <Download size={18} />
              Download Resume
            </button>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center order-1 md:order-2"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            {/* Abstract Background Blobs behind image */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-gradient-to-tr from-secondary/30 to-transparent rounded-full blur-2xl"></div>

            {/* Rotating border */}
            <div className="absolute inset-4 rounded-full border-2 border-dashed border-slate-700/50 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-0 rounded-full border border-slate-800 animate-[spin_15s_linear_infinite_reverse] opacity-50"></div>
            
            {/* Main Image Container */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-800 z-10 group">
               <img 
                 src="photo.jpeg" 
                 alt="J Sasi Kiran" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 onError={(e) => {
                   // Fallback if image not found
                   e.currentTarget.style.display = 'none';
                   const placeholder = document.getElementById('img-placeholder');
                   if(placeholder) placeholder.style.display = 'flex';
                 }}
               />
               {/* Fallback Placeholder */}
               <div id="img-placeholder" className="hidden absolute inset-0 w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex-col items-center justify-center text-slate-500">
                  <span className="text-6xl font-heading font-bold text-slate-600/50 select-none">JSK</span>
               </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 z-20"
            >
              <div className="glass-card p-3 md:p-4 rounded-xl shadow-xl flex items-center gap-3 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-blue-500 to-blue-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <span className="font-bold text-lg">7.0</span>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wide font-bold">CGPA</p>
                  <p className="font-bold text-white text-sm md:text-base">B.Tech</p>
                </div>
              </div>
            </motion.div>

             <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 z-20"
            >
              <div className="glass-card p-3 md:p-4 rounded-xl shadow-xl flex items-center gap-3 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wide font-bold">Experience</p>
                  <p className="font-bold text-white text-sm md:text-base">BHEL Trainee</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll Down</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;