import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

const SectionContainer: React.FC<Props> = ({ children, id, className = "", delay = 0 }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionContainer;